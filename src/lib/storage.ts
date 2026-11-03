import { UserProgress } from "@/data/types";

const DB_NAME = "java_academy_db";
const DB_VERSION = 2;
const STORE_NAME = "user_progress";
const PROGRESS_KEY = "current_progress";

export const DEFAULT_PROGRESS: UserProgress = {
  lessonStatus: {},
  completedLessons: [],
  lessonNotes: {},
  bookmarks: [],
  reviewNeeded: [],
  quizResults: {},
  exerciseCompleted: {},
  studyTimeMinutes: 0,
  lastStudiedLessonId: null,
  lastActiveDate: null,
  streakDays: 0,
  updatedAt: Date.now(),
};

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      reject(new Error("IndexedDB is not available in this environment"));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Failed to open IndexedDB"));
  });
}

export async function getStoredProgress(): Promise<UserProgress> {
  if (typeof window === "undefined") {
    return DEFAULT_PROGRESS;
  }

  try {
    const db = await openDatabase();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      tx.oncomplete = () => db.close();
      tx.onabort = () => { db.close(); resolve(readBackup()); };
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(PROGRESS_KEY);

      req.onsuccess = () => {
        if (req.result && typeof req.result === "object") {
          resolve(sanitizeProgress(req.result));
        } else {
          // Check fallback localStorage
          const local = localStorage.getItem("academy_progress_backup");
          if (local) {
            try {
              const parsed = JSON.parse(local);
              resolve(sanitizeProgress(parsed));
              return;
            } catch (e) {
              console.error("Failed to parse local fallback backup", e);
            }
          }
          resolve(DEFAULT_PROGRESS);
        }
      };

      req.onerror = () => {
        resolve(readBackup());
      };
    });
  } catch (err) {
    console.warn("Using localStorage fallback for progress read", err);
    return readBackup();
  }
}

export async function saveProgress(progress: UserProgress): Promise<void> {
  if (typeof window === "undefined") return;

  const toSave: UserProgress = {
    ...progress,
    updatedAt: Date.now(),
  };
  let persisted = false;

  try {
    const db = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      
      tx.oncomplete = () => { db.close(); resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error || new Error("IndexedDB transaction error")); };
      tx.onabort = () => { db.close(); reject(tx.error || new Error("IndexedDB transaction aborted")); };

      const store = tx.objectStore(STORE_NAME);
      store.put(toSave, PROGRESS_KEY);
    });
    persisted = true;
  } catch (err) {
    console.warn("Could not save to IndexedDB, fallback saving to localStorage", err);
  }

  try {
    localStorage.setItem("academy_progress_backup", JSON.stringify(toSave));
    persisted = true;
  } catch (e) {
    console.error("Local storage backup error (quota exceeded or disabled):", e);
  }
  if (!persisted) throw new Error("ذخیره‌سازی مرورگر در دسترس نیست؛ پیش از خروج پشتیبان بگیر.");
}

function readBackup(): UserProgress {
  try {
    const value = localStorage.getItem("academy_progress_backup");
    return value ? sanitizeProgress(JSON.parse(value)) : { ...DEFAULT_PROGRESS };
  } catch { return { ...DEFAULT_PROGRESS }; }
}

const validLessonId = (id: string) => /^lesson-\d{3}$/.test(id) && Number(id.slice(-3)) >= 1 && Number(id.slice(-3)) <= 156;
const isRecord = (value: unknown): value is Record<string, unknown> => !!value && typeof value === "object" && !Array.isArray(value);
const safeEntries = (value: unknown) => isRecord(value) ? Object.entries(value).filter(([key]) => validLessonId(key)) : [];
const ids = (value: unknown) => Array.isArray(value) ? Array.from(new Set(value.filter((item): item is string => typeof item === "string" && validLessonId(item)))) : [];
const nonnegative = (value: unknown) => typeof value === "number" && Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;

export function sanitizeProgress(raw: Partial<UserProgress>): UserProgress {
  const quizResults: UserProgress["quizResults"] = {};
  for (const [id, result] of safeEntries(raw.quizResults)) {
    if (!isRecord(result) || !isRecord(result.answers)) continue;
    const total = nonnegative(result.total), score = nonnegative(result.score);
    if (total < 1 || total > 100 || score > total) continue;
    const answers = Object.fromEntries(Object.entries(result.answers).filter(([key, answer]) =>
      key.length < 120 && key !== "__proto__" && typeof answer === "number" && Number.isInteger(answer) && answer >= 0 && answer < 10));
    // Old results remain exportable, but the current lesson checks its question IDs.
    quizResults[id] = { score, total, passed: score / total >= 0.65, answers: answers as Record<string, number>, timestamp: nonnegative(result.timestamp) };
  }
  return {
    lessonStatus: Object.fromEntries(safeEntries(raw.lessonStatus).filter(([,value]) => ["completed", "in-progress", "not-started"].includes(value as string))) as UserProgress["lessonStatus"],
    completedLessons: ids(raw.completedLessons),
    lessonNotes: Object.fromEntries(safeEntries(raw.lessonNotes).filter(([,value]) => typeof value === "string").map(([key,value]) => [key, (value as string).slice(0,100_000)])),
    bookmarks: ids(raw.bookmarks), reviewNeeded: ids(raw.reviewNeeded), quizResults,
    exerciseCompleted: Object.fromEntries(safeEntries(raw.exerciseCompleted).filter(([,value]) => typeof value === "boolean")) as Record<string, boolean>,
    studyTimeMinutes: nonnegative(raw.studyTimeMinutes),
    lastStudiedLessonId: typeof raw.lastStudiedLessonId === "string" && validLessonId(raw.lastStudiedLessonId) ? raw.lastStudiedLessonId : null,
    lastActiveDate: typeof raw.lastActiveDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.lastActiveDate) ? raw.lastActiveDate : null,
    streakDays: nonnegative(raw.streakDays), updatedAt: nonnegative(raw.updatedAt) || Date.now(),
  };
}

export function exportProgressJSON(progress: UserProgress): string {
  return JSON.stringify(progress, null, 2);
}

export function createProgressBackupBeforeImport(current: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    const backupKey = `academy_backup_${Date.now()}`;
    localStorage.setItem(backupKey, JSON.stringify(current));
    localStorage.setItem("academy_last_backup_key", backupKey);
  } catch (e) {
    console.warn("Could not write automatic pre-import backup to localStorage", e);
  }
}

export function mergeProgress(existing: UserProgress, incoming: UserProgress): UserProgress {
  const mergedCompleted = Array.from(new Set([...existing.completedLessons, ...incoming.completedLessons]));
  const mergedBookmarks = Array.from(new Set([...existing.bookmarks, ...incoming.bookmarks]));
  const mergedReviewNeeded = Array.from(new Set([...existing.reviewNeeded, ...incoming.reviewNeeded]));

  return {
    lessonStatus: { ...existing.lessonStatus, ...incoming.lessonStatus },
    completedLessons: mergedCompleted,
    lessonNotes: { ...existing.lessonNotes, ...incoming.lessonNotes },
    bookmarks: mergedBookmarks,
    reviewNeeded: mergedReviewNeeded,
    quizResults: { ...existing.quizResults, ...incoming.quizResults },
    exerciseCompleted: { ...existing.exerciseCompleted, ...incoming.exerciseCompleted },
    studyTimeMinutes: Math.max(existing.studyTimeMinutes || 0, incoming.studyTimeMinutes || 0),
    lastStudiedLessonId: incoming.lastStudiedLessonId || existing.lastStudiedLessonId,
    lastActiveDate: incoming.lastActiveDate || existing.lastActiveDate,
    streakDays: Math.max(existing.streakDays || 0, incoming.streakDays || 0),
    updatedAt: Date.now(),
  };
}

export function validateImportedProgress(data: unknown): { valid: boolean; error?: string; progress?: UserProgress } {
  if (!isRecord(data)) {
    return { valid: false, error: "فایل انتخاب‌شده ساختار JSON معتبر ندارد." };
  }

  const p = data as Record<string, unknown>;
  if (!Array.isArray(p.completedLessons) || !isRecord(p.lessonStatus)) {
    return { valid: false, error: "این فایل پشتیبان پیشرفت نیست؛ completedLessons و lessonStatus لازم‌اند." };
  }
  for (const key of ["lessonNotes", "quizResults", "exerciseCompleted"]) {
    if (p[key] !== undefined && !isRecord(p[key])) return { valid: false, error: `ساختار ${key} نامعتبر است.` };
  }
  if (Object.values(p.lessonNotes || {}).some(value => typeof value !== "string")) return { valid: false, error: "یادداشت‌ها باید متن باشند." };

  if (p.completedLessons && !Array.isArray(p.completedLessons)) {
    return { valid: false, error: "فیلد completedLessons باید یک آرایه باشد." };
  }

  if (p.lessonStatus && typeof p.lessonStatus !== "object") {
    return { valid: false, error: "فیلد lessonStatus باید یک آبجکت باشد." };
  }

  if (p.quizResults && typeof p.quizResults !== "object") {
    return { valid: false, error: "فیلد quizResults باید یک آبجکت باشد." };
  }

  try {
    const sanitized = sanitizeProgress(p as Partial<UserProgress>);
    return { valid: true, progress: sanitized };
  } catch (err) {
    return { valid: false, error: "خطا در پالایش داده‌های واردشده." };
  }
}

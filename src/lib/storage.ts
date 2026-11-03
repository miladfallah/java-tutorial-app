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
        console.warn("IndexedDB read error, using default progress", req.error);
        resolve(DEFAULT_PROGRESS);
      };
    });
  } catch (err) {
    console.warn("Using localStorage fallback for progress read", err);
    try {
      const item = localStorage.getItem("academy_progress_backup");
      if (item) return sanitizeProgress(JSON.parse(item));
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_PROGRESS;
  }
}

export async function saveProgress(progress: UserProgress): Promise<void> {
  if (typeof window === "undefined") return;

  const toSave: UserProgress = {
    ...progress,
    updatedAt: Date.now(),
  };

  try {
    const db = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error("IndexedDB transaction error"));
      tx.onabort = () => reject(tx.error || new Error("IndexedDB transaction aborted"));

      const store = tx.objectStore(STORE_NAME);
      store.put(toSave, PROGRESS_KEY);
    });
  } catch (err) {
    console.warn("Could not save to IndexedDB, fallback saving to localStorage", err);
  }

  try {
    localStorage.setItem("academy_progress_backup", JSON.stringify(toSave));
  } catch (e) {
    console.error("Local storage backup error (quota exceeded or disabled):", e);
  }
}

function sanitizeProgress(raw: Partial<UserProgress>): UserProgress {
  return {
    lessonStatus: (raw.lessonStatus && typeof raw.lessonStatus === "object") ? raw.lessonStatus : {},
    completedLessons: Array.isArray(raw.completedLessons) ? raw.completedLessons.filter((x): x is string => typeof x === "string") : [],
    lessonNotes: (raw.lessonNotes && typeof raw.lessonNotes === "object") ? raw.lessonNotes : {},
    bookmarks: Array.isArray(raw.bookmarks) ? raw.bookmarks.filter((x): x is string => typeof x === "string") : [],
    reviewNeeded: Array.isArray(raw.reviewNeeded) ? raw.reviewNeeded.filter((x): x is string => typeof x === "string") : [],
    quizResults: (raw.quizResults && typeof raw.quizResults === "object") ? raw.quizResults : {},
    exerciseCompleted: (raw.exerciseCompleted && typeof raw.exerciseCompleted === "object") ? raw.exerciseCompleted : {},
    studyTimeMinutes: typeof raw.studyTimeMinutes === "number" && raw.studyTimeMinutes >= 0 ? Math.floor(raw.studyTimeMinutes) : 0,
    lastStudiedLessonId: typeof raw.lastStudiedLessonId === "string" ? raw.lastStudiedLessonId : null,
    lastActiveDate: typeof raw.lastActiveDate === "string" ? raw.lastActiveDate : null,
    streakDays: typeof raw.streakDays === "number" && raw.streakDays >= 0 ? Math.floor(raw.streakDays) : 0,
    updatedAt: typeof raw.updatedAt === "number" ? raw.updatedAt : Date.now(),
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
  if (!data || typeof data !== "object") {
    return { valid: false, error: "فایل انتخاب‌شده ساختار JSON معتبر ندارد." };
  }

  const p = data as Record<string, unknown>;

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

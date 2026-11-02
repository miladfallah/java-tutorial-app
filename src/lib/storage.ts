import { UserProgress } from "@/data/types";

const DB_NAME = "java_academy_db";
const DB_VERSION = 1;
const STORE_NAME = "user_progress";
const PROGRESS_KEY = "current_progress";

const DEFAULT_PROGRESS: UserProgress = {
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
      reject(new Error("IndexedDB not available"));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
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
        if (req.result) {
          resolve({ ...DEFAULT_PROGRESS, ...req.result });
        } else {
          // Check fallback localStorage
          const local = localStorage.getItem("academy_progress_backup");
          if (local) {
            try {
              const parsed = JSON.parse(local);
              resolve({ ...DEFAULT_PROGRESS, ...parsed });
              return;
            } catch (e) {
              console.error("Failed to parse local fallback", e);
            }
          }
          resolve(DEFAULT_PROGRESS);
        }
      };

      req.onerror = () => {
        resolve(DEFAULT_PROGRESS);
      };
    });
  } catch (err) {
    console.warn("Using localStorage fallback for progress", err);
    try {
      const item = localStorage.getItem("academy_progress_backup");
      if (item) return { ...DEFAULT_PROGRESS, ...JSON.parse(item) };
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
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(toSave, PROGRESS_KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("Could not save to IndexedDB, saving to localStorage backup", err);
  }

  try {
    localStorage.setItem("academy_progress_backup", JSON.stringify(toSave));
  } catch (e) {
    console.error("Local storage backup error", e);
  }
}

export function exportProgressJSON(progress: UserProgress): string {
  return JSON.stringify(progress, null, 2);
}

export function validateImportedProgress(data: unknown): data is UserProgress {
  if (!data || typeof data !== "object") return false;
  const p = data as Partial<UserProgress>;
  return (
    Array.isArray(p.completedLessons) &&
    typeof p.lessonStatus === "object" &&
    p.lessonStatus !== null
  );
}

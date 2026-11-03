import { create } from "zustand";
import { UserProgress } from "@/data/types";
import { getStoredProgress, saveProgress, DEFAULT_PROGRESS } from "./storage";

export interface ReaderSettings {
  theme: "system" | "dark" | "light";
  fontSize: "normal" | "large" | "xlarge";
  lineHeight: "normal" | "relaxed" | "loose";
  columnWidth: "normal" | "wide";
  showLineNumbers: boolean;
  reduceMotion: "system" | "reduce" | "no-preference";
}

export const DEFAULT_SETTINGS: ReaderSettings = {
  theme: "dark",
  fontSize: "normal",
  lineHeight: "relaxed",
  columnWidth: "normal",
  showLineNumbers: true,
  reduceMotion: "system",
};

interface AcademyState {
  progress: UserProgress;
  isLoaded: boolean;
  settings: ReaderSettings;
  isReaderMode: boolean;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  toggleReaderMode: () => void;
  loadProgress: () => Promise<void>;
  updateSettings: (newSettings: Partial<ReaderSettings>) => void;
  resetSettings: () => void;
  setTheme: (theme: "system" | "dark" | "light") => void;
  markLessonComplete: (lessonId: string) => Promise<void>;
  markLessonInProgress: (lessonId: string) => Promise<void>;
  markLessonIncomplete: (lessonId: string) => Promise<void>;
  toggleBookmark: (lessonId: string) => Promise<void>;
  toggleReviewNeeded: (lessonId: string) => Promise<void>;
  saveNote: (lessonId: string, note: string) => Promise<void>;
  recordQuizResult: (
    lessonId: string,
    score: number,
    total: number,
    answers: Record<string, number>
  ) => Promise<void>;
  toggleExerciseCompleted: (lessonId: string) => Promise<void>;
  addStudyTime: (minutes: number) => Promise<void>;
  setLastStudied: (lessonId: string) => Promise<void>;
  importProgress: (imported: UserProgress) => Promise<void>;
  resetProgress: () => Promise<void>;
}

export function applySettingsToDOM(settings: ReaderSettings) {
  if (typeof window === "undefined") return;
  const root = document.documentElement;

  // Determine effective theme
  let effectiveTheme: "dark" | "light" = "dark";
  if (settings.theme === "system") {
    effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } else {
    effectiveTheme = settings.theme;
  }

  if (effectiveTheme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
    root.style.colorScheme = "dark";
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
    root.style.colorScheme = "light";
  }

  // Set data attributes for typography and layout
  root.setAttribute("data-font-size", settings.fontSize);
  root.setAttribute("data-line-height", settings.lineHeight);
  root.setAttribute("data-column-width", settings.columnWidth);
  root.setAttribute("data-reduce-motion", settings.reduceMotion);
}

function getLocalDayString(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDaysBetween(dateStr1: string, dateStr2: string): number {
  const [y1, m1, d1] = dateStr1.split("-").map(Number);
  const [y2, m2, d2] = dateStr2.split("-").map(Number);
  const utc1 = Date.UTC(y1, m1 - 1, d1);
  const utc2 = Date.UTC(y2, m2 - 1, d2);
  return Math.round(Math.abs(utc2 - utc1) / (1000 * 60 * 60 * 24));
}

let loadPromise: Promise<void> | null = null;

export const useAcademyStore = create<AcademyState>((set, get) => ({
  progress: DEFAULT_PROGRESS,
  isLoaded: false,
  settings: DEFAULT_SETTINGS,
  isReaderMode: false,
  searchQuery: "",

  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleReaderMode: () => set((state) => ({ isReaderMode: !state.isReaderMode })),

  loadProgress: async () => {
    if (get().isLoaded) return;
    if (loadPromise) return loadPromise;

    loadPromise = (async () => {
      // 1. Load reader settings from localStorage
      let settings = { ...DEFAULT_SETTINGS };
      if (typeof window !== "undefined") {
        try {
          const stored = localStorage.getItem("academy_reader_settings");
          if (stored) {
            settings = { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
          } else {
            // Check legacy theme key
            const legacyTheme = localStorage.getItem("academy_theme") as "dark" | "light" | null;
            if (legacyTheme === "light" || legacyTheme === "dark") {
              settings.theme = legacyTheme;
            }
          }
        } catch (e) {
          console.warn("Could not parse reader settings from localStorage", e);
        }
        applySettingsToDOM(settings);
        // Publish settings before async IndexedDB work. A user's next theme/font
        // choice must not be overwritten when progress finishes loading.
        set({ settings });

        // System theme preference listener
        if (settings.theme === "system") {
          const media = window.matchMedia("(prefers-color-scheme: dark)");
          const listener = () => {
            if (get().settings.theme === "system") {
              applySettingsToDOM(get().settings);
            }
          };
          media.removeEventListener("change", listener);
          media.addEventListener("change", listener);
        }
      }

      // 2. Load progress from storage
      const data = await getStoredProgress();
      set({ progress: data, isLoaded: true });
      loadPromise = null;
    })();

    return loadPromise;
  },

  updateSettings: (newSettings: Partial<ReaderSettings>) => {
    const updated = { ...get().settings, ...newSettings };
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("academy_reader_settings", JSON.stringify(updated));
        localStorage.setItem("academy_theme", updated.theme);
      } catch (e) {
        console.error("Failed to save settings to localStorage", e);
      }
      applySettingsToDOM(updated);
    }
    set({ settings: updated });
  },

  resetSettings: () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("academy_reader_settings", JSON.stringify(DEFAULT_SETTINGS));
        localStorage.setItem("academy_theme", DEFAULT_SETTINGS.theme);
      } catch (e) {
        console.error("Failed to reset settings in localStorage", e);
      }
      applySettingsToDOM(DEFAULT_SETTINGS);
    }
    set({ settings: DEFAULT_SETTINGS });
  },

  setTheme: (theme: "system" | "dark" | "light") => {
    get().updateSettings({ theme });
  },

  markLessonComplete: async (lessonId: string) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    const today = getLocalDayString();
    const completedSet = new Set(progress.completedLessons);
    completedSet.add(lessonId);

    // Calculate streak using local calendar days
    let streak = progress.streakDays;
    if (progress.lastActiveDate !== today) {
      if (progress.lastActiveDate) {
        const diffDays = getDaysBetween(progress.lastActiveDate, today);
        streak = diffDays === 1 ? streak + 1 : 1;
      } else {
        streak = 1;
      }
    }

    const updated: UserProgress = {
      ...progress,
      lessonStatus: { ...progress.lessonStatus, [lessonId]: "completed" },
      completedLessons: Array.from(completedSet),
      lastStudiedLessonId: lessonId,
      lastActiveDate: today,
      streakDays: streak,
    };

    set({ progress: updated });
    await saveProgress(updated);
  },

  markLessonInProgress: async (lessonId: string) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    if (progress.lessonStatus[lessonId] === "completed") return;

    const today = getLocalDayString();
    let streak = progress.streakDays;
    if (progress.lastActiveDate !== today) {
      if (progress.lastActiveDate) {
        const diffDays = getDaysBetween(progress.lastActiveDate, today);
        streak = diffDays === 1 ? streak + 1 : 1;
      } else {
        streak = 1;
      }
    }

    const updated: UserProgress = {
      ...progress,
      lessonStatus: { ...progress.lessonStatus, [lessonId]: "in-progress" },
      lastStudiedLessonId: lessonId,
      lastActiveDate: today,
      streakDays: streak,
    };

    set({ progress: updated });
    await saveProgress(updated);
  },

  markLessonIncomplete: async (lessonId: string) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    const completedSet = new Set(progress.completedLessons);
    completedSet.delete(lessonId);

    const updated: UserProgress = {
      ...progress,
      lessonStatus: { ...progress.lessonStatus, [lessonId]: "in-progress" },
      completedLessons: Array.from(completedSet),
    };

    set({ progress: updated });
    await saveProgress(updated);
  },

  toggleBookmark: async (lessonId: string) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    const set_ = new Set(progress.bookmarks);
    if (set_.has(lessonId)) {
      set_.delete(lessonId);
    } else {
      set_.add(lessonId);
    }
    const updated = { ...progress, bookmarks: Array.from(set_) };
    set({ progress: updated });
    await saveProgress(updated);
  },

  toggleReviewNeeded: async (lessonId: string) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    const set_ = new Set(progress.reviewNeeded);
    if (set_.has(lessonId)) {
      set_.delete(lessonId);
    } else {
      set_.add(lessonId);
    }
    const updated = { ...progress, reviewNeeded: Array.from(set_) };
    set({ progress: updated });
    await saveProgress(updated);
  },

  saveNote: async (lessonId: string, note: string) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    const updated = {
      ...progress,
      lessonNotes: { ...progress.lessonNotes, [lessonId]: note },
    };
    set({ progress: updated });
    await saveProgress(updated);
  },

  recordQuizResult: async (
    lessonId: string,
    score: number,
    total: number,
    answers: Record<string, number>
  ) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    const passed = score >= Math.ceil(total * 0.65);
    const updated: UserProgress = {
      ...progress,
      quizResults: {
        ...progress.quizResults,
        [lessonId]: {
          score,
          total,
          passed,
          timestamp: Date.now(),
          answers,
        },
      },
    };
    set({ progress: updated });
    await saveProgress(updated);
  },

  toggleExerciseCompleted: async (lessonId: string) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    const current = progress.exerciseCompleted[lessonId];
    const updated = {
      ...progress,
      exerciseCompleted: {
        ...progress.exerciseCompleted,
        [lessonId]: !current,
      },
    };
    set({ progress: updated });
    await saveProgress(updated);
  },

  addStudyTime: async (minutes: number) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    const updated = {
      ...progress,
      studyTimeMinutes: (progress.studyTimeMinutes || 0) + minutes,
    };
    set({ progress: updated });
    await saveProgress(updated);
  },

  setLastStudied: async (lessonId: string) => {
    if (!get().isLoaded) await get().loadProgress();
    const { progress } = get();
    const updated = {
      ...progress,
      lastStudiedLessonId: lessonId,
    };
    set({ progress: updated });
    await saveProgress(updated);
  },

  importProgress: async (imported: UserProgress) => {
    set({ progress: imported });
    await saveProgress(imported);
  },

  resetProgress: async () => {
    set({ progress: DEFAULT_PROGRESS });
    await saveProgress(DEFAULT_PROGRESS);
  },
}));

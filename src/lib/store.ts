import { create } from "zustand";
import { UserProgress } from "@/data/types";
import { getStoredProgress, saveProgress } from "./storage";

interface AcademyState {
  progress: UserProgress;
  isLoaded: boolean;
  theme: "dark" | "light";
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  loadProgress: () => Promise<void>;
  markLessonComplete: (lessonId: string) => void;
  markLessonInProgress: (lessonId: string) => void;
  markLessonIncomplete: (lessonId: string) => void;
  toggleBookmark: (lessonId: string) => void;
  toggleReviewNeeded: (lessonId: string) => void;
  saveNote: (lessonId: string, note: string) => void;
  recordQuizResult: (
    lessonId: string,
    score: number,
    total: number,
    answers: Record<string, number>
  ) => void;
  toggleExerciseCompleted: (lessonId: string) => void;
  addStudyTime: (minutes: number) => void;
  setLastStudied: (lessonId: string) => void;
  importProgress: (imported: UserProgress) => Promise<void>;
  resetProgress: () => Promise<void>;
  setTheme: (theme: "dark" | "light") => void;
}

const INITIAL_PROGRESS: UserProgress = {
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

export const useAcademyStore = create<AcademyState>((set, get) => ({
  progress: INITIAL_PROGRESS,
  isLoaded: false,
  theme: "dark",
  searchQuery: "",

  setSearchQuery: (query) => set({ searchQuery: query }),

  loadProgress: async () => {
    const data = await getStoredProgress();
    let theme: "dark" | "light" = "dark";
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("academy_theme") as "dark" | "light" | null;
      if (storedTheme === "light" || storedTheme === "dark") {
        theme = storedTheme;
      }
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    set({ progress: data, isLoaded: true, theme });
  },

  markLessonComplete: (lessonId: string) => {
    const { progress } = get();
    const today = new Date().toISOString().slice(0, 10);
    const completedSet = new Set(progress.completedLessons);
    completedSet.add(lessonId);

    // Calculate streak
    let streak = progress.streakDays;
    if (progress.lastActiveDate !== today) {
      if (progress.lastActiveDate) {
        const last = new Date(progress.lastActiveDate);
        const curr = new Date(today);
        const diffDays = Math.round(
          (curr.getTime() - last.getTime()) / (1000 * 3600 * 24)
        );
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
    saveProgress(updated);
  },

  markLessonInProgress: (lessonId: string) => {
    const { progress } = get();
    const updated: UserProgress = {
      ...progress,
      lessonStatus: {
        ...progress.lessonStatus,
        [lessonId]: progress.lessonStatus[lessonId] === "completed" ? "completed" : "in-progress",
      },
      lastStudiedLessonId: lessonId,
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  markLessonIncomplete: (lessonId: string) => {
    const { progress } = get();
    const completed = progress.completedLessons.filter((id) => id !== lessonId);
    const updated: UserProgress = {
      ...progress,
      lessonStatus: { ...progress.lessonStatus, [lessonId]: "not-started" },
      completedLessons: completed,
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  toggleBookmark: (lessonId: string) => {
    const { progress } = get();
    const bookmarks = progress.bookmarks.includes(lessonId)
      ? progress.bookmarks.filter((id) => id !== lessonId)
      : [...progress.bookmarks, lessonId];
    const updated = { ...progress, bookmarks };
    set({ progress: updated });
    saveProgress(updated);
  },

  toggleReviewNeeded: (lessonId: string) => {
    const { progress } = get();
    const reviewNeeded = progress.reviewNeeded.includes(lessonId)
      ? progress.reviewNeeded.filter((id) => id !== lessonId)
      : [...progress.reviewNeeded, lessonId];
    const updated = { ...progress, reviewNeeded };
    set({ progress: updated });
    saveProgress(updated);
  },

  saveNote: (lessonId: string, note: string) => {
    const { progress } = get();
    const updated = {
      ...progress,
      lessonNotes: { ...progress.lessonNotes, [lessonId]: note },
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  recordQuizResult: (lessonId, score, total, answers) => {
    const { progress } = get();
    const passed = total > 0 && score / total >= 0.65;
    const updated: UserProgress = {
      ...progress,
      quizResults: {
        ...progress.quizResults,
        [lessonId]: { score, total, passed, answers, timestamp: Date.now() },
      },
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  toggleExerciseCompleted: (lessonId: string) => {
    const { progress } = get();
    const current = !!progress.exerciseCompleted[lessonId];
    const updated: UserProgress = {
      ...progress,
      exerciseCompleted: {
        ...progress.exerciseCompleted,
        [lessonId]: !current,
      },
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  addStudyTime: (minutes: number) => {
    const { progress } = get();
    const updated = {
      ...progress,
      studyTimeMinutes: progress.studyTimeMinutes + minutes,
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  setLastStudied: (lessonId: string) => {
    const { progress } = get();
    const updated = {
      ...progress,
      lastStudiedLessonId: lessonId,
    };
    set({ progress: updated });
    saveProgress(updated);
  },

  importProgress: async (imported: UserProgress) => {
    set({ progress: imported });
    await saveProgress(imported);
  },

  resetProgress: async () => {
    set({ progress: INITIAL_PROGRESS });
    await saveProgress(INITIAL_PROGRESS);
  },

  setTheme: (theme: "dark" | "light") => {
    if (typeof window !== "undefined") {
      localStorage.setItem("academy_theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    set({ theme });
  },
}));

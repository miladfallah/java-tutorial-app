export type Difficulty = "Intermediate" | "Advanced";

export interface ConceptualSection {
  title: string;
  content: string;
  keyPoints?: string[];
}

export interface CodeExample {
  title: string;
  titleEn?: string;
  language: string;
  code: string;
  explanation: string;
  filename?: string;
}

export interface ComparisonWithNestJS {
  nestConcept: string;
  javaConcept: string;
  explanation: string;
  nestCode?: string;
  javaCode?: string;
}

export interface CommonMistake {
  mistake: string;
  whyBad: string;
  solution: string;
  codeBad?: string;
  codeGood?: string;
}

export interface LessonExercise {
  title: string;
  instructions: string;
  expectedOutput?: string;
  acceptanceCriteria: string[];
  hints: string[];
  solution: {
    code: string;
    language: string;
    explanation: string;
    filename?: string;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface InterviewQuestion {
  question: string;
  answer: string;
  keyTakeaways?: string[];
}

export interface TechnicalReference {
  title: string;
  url: string;
}

export interface CapstoneConnection {
  phase: string;
  task: string;
  filesToModify: string[];
}

export interface Lesson {
  id: string;
  slug: string;
  week: number;
  day: number;
  title: string;
  titleEn: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  prerequisites: string[];
  learningObjectives: string[];
  whyItMatters: string;
  introduction: string;
  conceptualSections: ConceptualSection[];
  internalsAndMechanisms?: string;
  realWorldScenario: {
    scenario: string;
    solution: string;
  };
  codeExamples: CodeExample[];
  comparisonWithNestJS: ComparisonWithNestJS;
  commonMistakes: CommonMistake[];
  bestPractices: string[];
  exercise: LessonExercise;
  quizzes: QuizQuestion[];
  interviewQuestions: InterviewQuestion[];
  summary: string;
  references: TechnicalReference[];
  lastReviewedAt: string;
  tags: string[];
  capstoneConnection?: CapstoneConnection;
}

export interface WeekMeta {
  weekNumber: number;
  title: string;
  titleEn: string;
  description: string;
  category: string;
  focus: string;
  estimatedHours: number;
  learningOutcomes: string[];
  lessonsCount: number;
}

export interface UserProgress {
  lessonStatus: Record<string, "not-started" | "in-progress" | "completed">;
  completedLessons: string[];
  lessonNotes: Record<string, string>;
  bookmarks: string[];
  reviewNeeded: string[];
  quizResults: Record<string, { score: number; total: number; passed: boolean; answers: Record<string, number>; timestamp: number }>;
  exerciseCompleted: Record<string, boolean>;
  studyTimeMinutes: number;
  lastStudiedLessonId: string | null;
  lastActiveDate: string | null;
  streakDays: number;
  updatedAt: number;
}

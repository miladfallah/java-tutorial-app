import { ALL_LESSONS } from "./lessons";

// A content inventory, not a claim that every fragment has been compiled.
export const CURRICULUM_QUALITY_AUDIT = ALL_LESSONS.map(lesson => ({
  lessonId: lesson.id, slug: lesson.slug, week: lesson.week, day: lesson.day,
  title: lesson.title, estimatedMinutes: lesson.estimatedMinutes,
  rewriteStatus: lesson.contentVersion === 2 ? "FocusedRevision" : "Foundation",
  codeValidation: "EducationalFragment",
  reviewedAt: lesson.lastReviewedAt,
  references: lesson.references,
}));

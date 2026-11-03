import type { UserProgress } from '@/data/types';

/** Retain old results in backups, but do not count a replaced question as current mastery. */
export function isCurrentQuizResult(id: string, result: UserProgress['quizResults'][string]): boolean {
  if (Number(id.slice(-3)) < 7) return true;
  return result.total === 1 && Number.isInteger(result.answers?.[`focused-v2-${id}`]);
}

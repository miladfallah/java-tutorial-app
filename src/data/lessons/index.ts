import { Lesson } from "../types";
import { WEEK_01_LESSONS } from "./week-01";
import { WEEK_02_LESSONS } from "./week-02";
import { WEEK_03_LESSONS } from "./week-03";
import { WEEK_04_LESSONS } from "./week-04";
import { WEEK_05_LESSONS } from "./week-05";
import { WEEK_06_LESSONS } from "./week-06";
import { WEEK_07_LESSONS } from "./week-07";
import { WEEK_08_LESSONS } from "./week-08";
import { WEEK_09_LESSONS } from "./week-09";
import { WEEK_10_LESSONS } from "./week-10";
import { WEEK_11_LESSONS } from "./week-11";
import { WEEK_12_LESSONS } from "./week-12";
import { WEEK_13_LESSONS } from "./week-13";
import { WEEK_14_LESSONS } from "./week-14";
import { WEEK_15_LESSONS } from "./week-15";
import { WEEK_16_LESSONS } from "./week-16";
import { WEEK_17_LESSONS } from "./week-17";
import { WEEK_18_LESSONS } from "./week-18";
import { WEEK_19_LESSONS } from "./week-19";
import { WEEK_20_LESSONS } from "./week-20";
import { WEEK_21_LESSONS } from "./week-21";
import { WEEK_22_LESSONS } from "./week-22";
import { WEEK_23_LESSONS } from "./week-23";
import { WEEK_24_LESSONS } from "./week-24";
import { WEEK_25_LESSONS } from "./week-25";
import { WEEK_26_LESSONS } from "./week-26";

export const ALL_LESSONS: Lesson[] = [
  ...WEEK_01_LESSONS,
  ...WEEK_02_LESSONS,
  ...WEEK_03_LESSONS,
  ...WEEK_04_LESSONS,
  ...WEEK_05_LESSONS,
  ...WEEK_06_LESSONS,
  ...WEEK_07_LESSONS,
  ...WEEK_08_LESSONS,
  ...WEEK_09_LESSONS,
  ...WEEK_10_LESSONS,
  ...WEEK_11_LESSONS,
  ...WEEK_12_LESSONS,
  ...WEEK_13_LESSONS,
  ...WEEK_14_LESSONS,
  ...WEEK_15_LESSONS,
  ...WEEK_16_LESSONS,
  ...WEEK_17_LESSONS,
  ...WEEK_18_LESSONS,
  ...WEEK_19_LESSONS,
  ...WEEK_20_LESSONS,
  ...WEEK_21_LESSONS,
  ...WEEK_22_LESSONS,
  ...WEEK_23_LESSONS,
  ...WEEK_24_LESSONS,
  ...WEEK_25_LESSONS,
  ...WEEK_26_LESSONS,
];

const LESSON_BY_SLUG_MAP = new Map<string, Lesson>();
const LESSON_BY_ID_MAP = new Map<string, Lesson>();

ALL_LESSONS.forEach((lesson) => {
  LESSON_BY_SLUG_MAP.set(lesson.slug, lesson);
  LESSON_BY_ID_MAP.set(lesson.id, lesson);
});

export function getAllLessons(): Lesson[] {
  return ALL_LESSONS;
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return LESSON_BY_SLUG_MAP.get(slug);
}

export function getLessonById(id: string): Lesson | undefined {
  return LESSON_BY_ID_MAP.get(id);
}

export function getLessonsByWeek(weekNumber: number): Lesson[] {
  return ALL_LESSONS.filter((l) => l.week === weekNumber);
}

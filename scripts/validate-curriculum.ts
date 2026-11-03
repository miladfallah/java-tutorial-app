import assert from 'node:assert/strict';
import { ALL_LESSONS } from '../src/data/lessons';
import { ALL_LESSON_SUMMARIES, WEEKS_META } from '../src/data/curriculum';
import { sanitizeProgress, validateImportedProgress, DEFAULT_PROGRESS } from '../src/lib/storage';

assert.equal(ALL_LESSONS.length, ALL_LESSON_SUMMARIES.length, 'lesson and roadmap inventories differ');
assert.equal(new Set(ALL_LESSONS.map(l => l.id)).size, ALL_LESSONS.length, 'duplicate IDs');
assert.equal(new Set(ALL_LESSONS.map(l => l.slug)).size, ALL_LESSONS.length, 'duplicate routes');
const positions = [0, 0, 0];
const fragments = new Set<string>();
for (const lesson of ALL_LESSONS) {
  const summary = ALL_LESSON_SUMMARIES.find(item => item.id === lesson.id);
  assert.equal(summary?.slug, lesson.slug, `broken roadmap route: ${lesson.id}`);
  assert.equal(summary?.estimatedMinutes, lesson.estimatedMinutes, `inconsistent duration: ${lesson.id}`);
  assert.ok(lesson.conceptualSections.length && lesson.codeExamples.length && lesson.quizzes.length);
  const serialized = JSON.stringify(lesson);
  assert.ok(!serialized.includes('StandardImplementation'), `placeholder code: ${lesson.id}`);
  assert.ok(!serialized.includes('۴۵ میلی‌ثانیه'), `unverified benchmark: ${lesson.id}`);
  for (const quiz of lesson.quizzes) {
    assert.ok(quiz.options.length >= 3 && new Set(quiz.options).size === quiz.options.length);
    assert.ok(Number.isInteger(quiz.correctIndex) && quiz.correctIndex >= 0 && quiz.correctIndex < quiz.options.length);
    assert.ok(quiz.explanation.length > 20);
  }
  if (lesson.contentVersion === 2) {
    assert.ok(lesson.estimatedMinutes <= 30);
    assert.ok(lesson.conceptualSections[0].content.length > 100);
    assert.ok(lesson.exercise.instructions.length > 50);
    assert.ok(lesson.quizzes[0].id.startsWith('focused-v2-'));
    const code = lesson.codeExamples[0].code;
    assert.ok(!fragments.has(code), `duplicate worked fragment: ${lesson.id}`);
    fragments.add(code);
    positions[lesson.quizzes[0].correctIndex]++;
  }
}
for (const week of WEEKS_META) assert.equal(week.lessonsCount, ALL_LESSONS.filter(l => l.week === week.weekNumber).length);
assert.deepEqual(positions, [50, 50, 50], 'uniform answer-position bias returned');

assert.equal(validateImportedProgress([]).valid, false);
assert.equal(validateImportedProgress({}).valid, false);
assert.equal(validateImportedProgress({ completedLessons: [], lessonStatus: {}, lessonNotes: { 'lesson-001': 42 } }).valid, false);
const note = 'یادداشت قبلی من';
const roundTrip = validateImportedProgress(JSON.parse(JSON.stringify({ ...DEFAULT_PROGRESS, lessonNotes: { 'lesson-007': note }, completedLessons: ['lesson-007'] })));
assert.equal(roundTrip.valid, true);
assert.equal(roundTrip.progress?.lessonNotes['lesson-007'], note);
assert.deepEqual(roundTrip.progress?.completedLessons, ['lesson-007']);
const repaired = sanitizeProgress({ studyTimeMinutes: Infinity, completedLessons: ['lesson-007', 'lesson-007', 'unknown'], exerciseCompleted: { 'lesson-007': 'yes' as unknown as boolean } });
assert.equal(repaired.studyTimeMinutes, 0);
assert.deepEqual(repaired.completedLessons, ['lesson-007']);
assert.deepEqual(repaired.exerciseCompleted, {});

console.log(`PASS: ${ALL_LESSONS.length} routes, 150 focused revisions, no placeholder code or invented benchmark claims.`);
console.log('PASS: import validation, progress round-trip and malformed-data recovery.');
console.log('These checks validate structure and regression rules, not scientific completeness or compilation of every fragment.');

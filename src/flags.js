import config from '../config.js';

export function getExerciseFlag() {
  const flag = process.argv[config.flagIndex];
  const hasExerciseFlag = flag === config.flagSingleExercise;
  const exerciseFlag = process.argv[config.flagIndex + 1];

  return hasExerciseFlag && exerciseFlag || undefined;
}

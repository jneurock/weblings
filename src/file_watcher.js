import config from '../config.js';
import { getExerciseFlag } from './flags.js';
import { watch } from 'chokidar';

function getWatchPath() {
  const exercise = getExerciseFlag();

  return exercise
    ? `./${config.pathToExercises}/${exercise}${config.fileExtensionExercise}`
    : config.pathToExercises;
}

export function setUpFileWatcher() {
  return watch(getWatchPath(), {
    ignored: config.dotFilesPattern,
    persistent: true,
  });
}

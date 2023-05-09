import config from '../config.js';
import { getExerciseFlag } from '../src/flags.js';
import { print, printClear, printFail, printSuccess } from '../src/print.js';
import { readdir } from 'node:fs/promises';

function exerciseFromTestPath(testPath) {
  return testPath
    .replace('./', '')
    .replace(config.fileExtensionTests, config.fileExtensionExercise);
}

function printTestFail(test, exercise) {
  printFail(`${config.statusBroken} ${exercise}\n`);
  test.messages.forEach((message) => printFail(`${message}\n`));
  print(`Hint: ${test.hint}\n`);
}

function printTestPreamble() {
  print(config.welcomeMessage);
  print('Running tests...\n');
}

export async function loadTests() {
  const exercise = getExerciseFlag();
  const tests = [];

  if (exercise) {
    tests.push(`./${exercise}${config.fileExtensionTests}`);
  } else {
    const testFiles = await readdir(config.pathToTests);

    for (const testFile of testFiles) {
      if (testFile.endsWith(config.fileExtensionTests)) {
        tests.push(`./${testFile}`);
      }
    }
  }

  return tests;
}

export async function runTests(tests, cleanUpFn, postscriptMessage) {
  printClear();
  printTestPreamble();

  const numTests = tests.length;
  let numPassed = 0;

  for (let i = 0; i < numTests; i++) {
    try {
      const testPath = tests[i];
      const exerciseFileName = exerciseFromTestPath(testPath);
      const test = (await import(testPath)).default;
      const testDetails = `[${i + 1}/${numTests}] ${test.description}`;

      print(testDetails);
  
      await test.run(exerciseFileName);
  
      if (test.passed) {
        printSuccess(`${config.statusFixed}\n`);
        numPassed++;
      } else {
        printTestFail(test, exerciseFileName);
        break;
      }
    } catch(ex) {
      console.error(`Failed to load test: ${tests[i]}`, ex);
      return cleanUpFn();
    }
  }

  if (numPassed === numTests) {
    if (numTests > 1) {
      printSuccess(config.finishedMessage);
    }

    cleanUpFn();
  } else {
    print(postscriptMessage);
  }
}

export function test(description, hint, testFn) {
  function assert(expectation, message) {
    if (expectation && this.passed !== false) {
      this.passed = true;
    } else if (!expectation) {
      this.passed = false;
      this.messages.push(message);
    }
  }

  return {
    description,
    hint,
    messages: [],
    passed: undefined,
    reset() {
      this.messages = [];
      this.passed = undefined;
    },
    async run(exerciseFileName) {
      const exercisePath = `./${config.pathToExercises}/${exerciseFileName}`;

      this.reset();
      await testFn(assert.bind(this), exercisePath);
    }
  };
}

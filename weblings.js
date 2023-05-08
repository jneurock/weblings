import config from './config.js';
import { print, printClear, printFail, printSuccess } from './print.js';
import { readdir } from 'node:fs/promises';
import readline from 'node:readline';
import { watch } from 'chokidar';

const hasExerciseFlag = process.argv.length === 4
  && process.argv[2] === config.flagSingleExercise;
const optionalExerciseFlagValue = process.argv[3];

const tests = [];

async function loadTests() {
  if (hasExerciseFlag) {
    tests.push(`${optionalExerciseFlagValue}${config.fileExtensionTests}`);
  } else {
    const testFiles = await readdir(config.pathToTests);

    for (const testFile of testFiles) {
      if (testFile.endsWith(config.fileExtensionTests)) {
        tests.push(`./${config.pathToTests}/${testFile}`);
      }
    }
  }
}

await loadTests();

function printTestFail(test) {
  printFail(`${config.statusBroken} ${test.filePath}\n`);
  test.messages.forEach((message) => printFail(`${message}\n`));
  print(`Hint: ${test.hint}\n`);
}

function printTestPreamble() {
  printClear();
  print(config.welcomeMessage);
  print('Running tests...\n');
}

const numTests = tests.length;

async function runTests(cleanUpFn) {
  printTestPreamble();

  let numPassed = 0;

  for (let i = 0; i < numTests; i++) {
    let test;

    try {
      test = (await import(tests[i])).default;
    } catch(ex) {
      console.error(`Failed to load test: ${tests[i]}`, ex);
      return cleanUpFn();
    }

    const testDetails = `[${i + 1}/${numTests}] ${test.description}`;
    
    print(testDetails);

    await test.run();

    if (test.passed) {
      printSuccess(`${config.statusFixed}\n`);
      numPassed++;
    } else {
      printTestFail(test);
      break;
    }
  }

  if (numPassed > 1 && numPassed === numTests) {
    printSuccess(config.finishedMessage);
    cleanUpFn();
  } else {
    print(`Press ${config.quitKey} to quit`);
  }
}

const watchPath = hasExerciseFlag && optionalExerciseFlagValue
  || config.pathToExercises;
const watcher = watch(watchPath, {
  ignored: config.dotFilesPattern,
  persistent: true,
});

function cleanUp() {
  watcher.close();
  process.stdin.setRawMode(false);
  process.exit();
}

function enableQuit(quitFn) {
  readline.emitKeypressEvents(process.stdin);

  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }

  process.stdin.on('keypress', function(_, key) {
    if (key?.name === config.quitKey || key?.ctrl && key?.name === 'c') {
      quitFn();
    }
  });
}

watcher
  .on('ready', async function() {
    enableQuit(cleanUp);
    await runTests(cleanUp);
  })
  .on('change', async () => await runTests(cleanUp));

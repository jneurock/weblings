import config from './config.js';
import { enableQuit } from './src/user_input.js';
import { loadTests, runTests } from './test/test.js';
import { setUpFileWatcher } from './src/file_watcher.js';

const watcher = setUpFileWatcher();
const tests = await loadTests();
const afterTestsMessage = `Press ${config.quitKey} to quit`;

function cleanUp() {
  watcher.close();
  process.stdin.setRawMode(false);
  process.exit();
}

const test = async () => await runTests(tests, cleanUp, afterTestsMessage);

watcher
  .on('ready', async function() {
    enableQuit(cleanUp);
    await test();
  })
  .on('change', async () => await test());

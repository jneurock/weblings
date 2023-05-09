import config from '../config.js';
import readline from 'node:readline';

export function enableQuit(quitFn) {
  readline.emitKeypressEvents(process.stdin);

  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }

  process.stdin.on('keypress', function(_, key) {
    const keyIsCtrlC = key?.ctrl && key?.name === 'c';

    if (key?.name === config.quitKey || keyIsCtrlC) {
      quitFn();
    }
  });
}

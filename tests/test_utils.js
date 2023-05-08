import { JSDOM } from 'jsdom';
import { readFile } from 'node:fs/promises';

export async function parseHTMLFile(path) {
  const HTML = await readFile(path, { encoding: 'utf-8' });
  const { window } = new JSDOM(HTML);

  return window;
}

export function test(description, filePath, hint, testFn) {
  function assert(expectation, message) {
    if (expectation && this.passed !== false) {
      this.passed = true;
    } else if (!expectation) {
      this.passed = false;
      this.messages.push(message);
    }
  }

  const test = {
    description,
    filePath,
    hint,
    messages: [],
    passed: undefined,
    async run() {
      this.passed = undefined;
      await testFn(assert.bind(this));
    }
  };

  return test;
}

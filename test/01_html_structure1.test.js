import { readFile } from 'node:fs/promises';
import { test } from './test.js';

const hint = '\
DOCTYPE is required in HTML. <!DOCTYPE html> ensures that browsers \
don’t render the document according to some other specification.';

export default test(
  'The DOCTYPE is correctly formatted',
  hint,
  async function(assert, exercisePath) {
    const expected = '<!DOCTYPE html>';
    const file = await readFile(exercisePath, { encoding: 'utf-8' });
    const lines = file.split('\n');
    const doctypeLine = 20;
    const actual = lines[doctypeLine].trim();

    assert(actual === expected, `Expected ${expected} but found ${actual}`);
  }
);

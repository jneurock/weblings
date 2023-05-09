import { readFile } from 'node:fs/promises';
import { test } from './test.js';

const hint = '\
DOCTYPE is required in HTML. <!DOCTYPE html> ensures that browsers \
don’t render the document according to some other specification.';

export default test(
  'The DOCTYPE is correctly formatted',
  hint,
  async function(assert, exercisePath) {
    const doctypeLine = 20;
    const file = await readFile(exercisePath, { encoding: 'utf-8' });
    const lines = file.split('\n');
    const doctype = lines[doctypeLine].trim();

    assert(
      doctype === '<!DOCTYPE html>',
      `Expected <!DOCTYPE html> but found ${doctype}`
    );
  }
);

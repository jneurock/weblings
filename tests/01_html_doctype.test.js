import config from '../config.js';
import { readFile } from 'node:fs/promises';
import { test } from './test_utils.js';

const doctypeLine = 23;
const filePath = `${config.pathToExercises}/01_html_doctype.html`;
const hint = '\
DOCTYPE is required in HTML. <!DOCTYPE html> ensures that browsers \
don’t render the document according to some other specification.';

export default test(
  'The DOCTYPE is correctly formatted',
  filePath,
  hint,
  async function(assert) {
    const file = await readFile(`./${filePath}`, { encoding: 'utf-8' });
    const lines = file.split('\n');
    const doctype = lines[doctypeLine].trim();

    assert(
      doctype === '<!DOCTYPE html>',
      `Expected <!DOCTYPE html> but found ${doctype}`
    );
  }
);

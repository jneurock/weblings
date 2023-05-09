import { parseHTMLFile } from '../src/html.js';
import { test } from './test.js';

const hint = '\
This document is missing its title! Check the previous exercises to see what \
this should be.';

export default test(
  'The page has the correct title',
  hint,
  async function(assert, exercisePath) {
    const html = await parseHTMLFile(exercisePath);
    const expected = 'Welcome to Weblings!';
    const actual = html.document.head.querySelector('title').innerHTML;

    assert(
       actual === expected,
      `Expected <title>${expected}</title> but found <title>${actual}</title>`
    );
  }
);

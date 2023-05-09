import { parseHTMLFile } from '../src/html.js';
import { test } from './test.js';

const hint = '\
The lang attribute is the key to enabling functionality like page translation \
(if the browser supports it) and for assistive technology like screen readers. \
For this document, the lang attribute’s value should be "en".';

export default test(
  'The <html> tag has the correct lang attribute',
  hint,
  async function(assert, exercisePath) {
    const html = await parseHTMLFile(exercisePath);
    const lang = html.document.querySelector('html').lang;

    assert(
       lang === 'en',
      `Expected <html lang="en"> but found <html lang="${lang}">`
    );
  }
);

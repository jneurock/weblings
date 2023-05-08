import config from '../config.js';
import { parseHTMLFile, test } from './test_utils.js';

const filePath = `${config.pathToExercises}/02_html_lang.html`;
const hint = '\
The lang attribute is the key to enabling functionality like page translation \
(if the browser supports it) and for assistive technology like screen readers. \
For this document, the lang attribute’s value should be "en".';

export default test(
  'The <html> tag has the correct lang attribute',
  filePath,
  hint,
  async function(assert) {
    const html = await parseHTMLFile(filePath);
    const lang = html.document.querySelector('html').lang;

    assert(
       lang === 'en',
      `Expected <html lang="en"> but found <html lang="${lang}">`
    );
  }
);

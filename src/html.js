import { JSDOM } from 'jsdom';
import { readFile } from 'node:fs/promises';

export async function parseHTMLFile(path) {
  const HTML = await readFile(path, { encoding: 'utf-8' });
  const { window } = new JSDOM(HTML);

  return window;
}

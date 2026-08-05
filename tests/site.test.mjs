import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

test('open-source edition is a narrowly cached installable PWA', () => {
  const html = read('index.html');
  assert.match(html, /rel="manifest" href="\.\/manifest\.webmanifest"/);
  assert.match(html, /id="install"/);
  assert.match(html, /serviceWorker\.register\('\.\/sw\.js'\)/);
  const manifest = JSON.parse(read('manifest.webmanifest'));
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.start_url, './');
  for (const icon of manifest.icons) assert.equal(existsSync(resolve(root, icon.src)), true);
  const worker = read('sw.js');
  assert.match(worker, /event\.request\.method !== 'GET'/);
  assert.match(worker, /url\.origin !== self\.location\.origin/);
  assert.match(worker, /APP_SHELL_URLS\.has\(url\.href\)/);
  assert.doesNotMatch(worker, /localStorage|indexedDB|POST/);
});

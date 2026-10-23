import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {resolve, dirname} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const pages = ['index.html', 'data-deletion/index.html'];
for (const page of pages) {
  const html = readFileSync(resolve(root, page), 'utf8');
  assert.match(html, /<html lang="en-GB">/);
  assert.match(html, /name="viewport"/);
  assert.match(html, /noindex, nofollow/);
  assert.equal((html.match(/<h1>/g) ?? []).length, 1);
  assert.match(html, /<main id="main">/);
  assert.match(html, /Skip to content/);
  assert.match(html, /not approved for publication/);
  assert.match(html, /yash\.bhanot@kkbgroup\.co\.uk/);
  assert.match(html, /one calendar month/);
  assert.match(html, /Automatic deletion is not enabled/);
  assert.doesNotMatch(html, /<script\b|<iframe\b|<form\b|<img\b|https?:\/\/[^"\s]*supabase|EA[A-Za-z0-9]{40}/i);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${page}: duplicate IDs`);
  for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:)/.test(href)) continue;
    const [path, anchor] = href.split('#');
    let target = path ? resolve(dirname(resolve(root, page)), path) : resolve(root, page);
    if (path?.endsWith('/')) target = resolve(target, 'index.html');
    assert.ok(existsSync(target), `${page}: broken local link ${href}`);
    if (anchor) assert.ok(readFileSync(target, 'utf8').includes(`id="${anchor}"`), `${page}: missing anchor ${href}`);
  }
  console.log(`PASS ${page}: structure, draft safeguards, content, no active code, local links`);
}
const notice = readFileSync(resolve(root, 'index.html'), 'utf8');
assert.equal((notice.match(/class="review"/g) ?? []).length, 3);
for (const text of ['test projects', 'legitimate interests', '12 months from receipt', 'AI processing is not enabled', 'London']) assert.ok(notice.includes(text));
console.log('PASS notice: project scope, lawful basis, retention, AI limit, region and three review gates');

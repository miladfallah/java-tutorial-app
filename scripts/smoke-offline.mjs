// Run beside the built server, using loopback only in a network-disabled container.
const base = process.env.BASE_URL || 'http://127.0.0.1:3000';
const pages = ['/', '/getting-started', '/roadmap', '/search', '/glossary', '/revision', '/capstone', '/lessons/generics-and-type-bounds', '/lessons/spring-security-filter-chain', '/lessons/virtual-threads'];
const assets = new Set(['/fonts/estedad/Estedad-Regular.woff2', '/fonts/jetbrains-mono/JetBrainsMono-Regular.woff2', '/practice/CoreLab.java', '/practice/InventoryLab.java', '/practice/AsyncLab.java']);
for (const page of pages) {
  const response = await fetch(base + page);
  if (response.status !== 200) throw new Error(`${page}: HTTP ${response.status}`);
  const html = await response.text();
  if (html.includes('StandardImplementation')) throw new Error(`Placeholder content on ${page}`);
  for (const match of html.matchAll(/(?:src|href)="(\/_next\/static\/[^"?]+)(?:\?[^\"]*)?"/g)) assets.add(match[1]);
}
for (const asset of assets) {
  const response = await fetch(base + asset);
  if (!response.ok) throw new Error(`${asset}: HTTP ${response.status}`);
  await response.arrayBuffer();
}
const unknown = await fetch(base + '/lessons/not-a-real-lesson');
if (unknown.status !== 404) throw new Error('Unknown lesson must return 404');
console.log(`PASS offline: ${pages.length} pages, ${assets.size} local assets, correct 404.`);

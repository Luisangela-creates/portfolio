import assert from "node:assert/strict";

const input = process.argv[2];
assert(input, "Usage: node scripts/check-consult-metadata.mjs https://your-site.example");
const pageUrl = new URL("/consult", input);
const headers = { "user-agent": "Twitterbot/1.0" };
const page = await fetch(pageUrl, { headers, signal: AbortSignal.timeout(30000) });
assert.equal(page.status, 200, `Page returned ${page.status}`);
const html = await page.text();
const head = html.split("</head>")[0];
const metadata = new Map();

for (const tag of head.matchAll(/<meta\s[^>]*>/g)) {
  const attributes = Object.fromEntries(
    [...tag[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], match[2].replaceAll("&amp;", "&")]),
  );
  metadata.set(attributes.property || attributes.name, attributes.content);
}

for (const key of ["og:title", "og:description", "og:image", "og:image:alt", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt"]) {
  assert(metadata.get(key), `Missing ${key} in initial HTML head`);
}
assert.equal(metadata.get("twitter:card"), "summary_large_image");
assert.equal(metadata.get("og:image:width"), "1200");
assert.equal(metadata.get("og:image:height"), "630");
assert.equal(metadata.get("og:image:type"), "image/png");
assert.equal(new URL(metadata.get("og:url")).pathname, "/consult");

const local = ["localhost", "127.0.0.1", "[::1]"].includes(pageUrl.hostname);
for (const imageUrl of new Set([metadata.get("og:image"), metadata.get("twitter:image")])) {
  const url = new URL(imageUrl);
  if (!local) {
    assert.equal(url.protocol, "https:", "Public preview image must use HTTPS");
    assert(!["localhost", "127.0.0.1", "[::1]"].includes(url.hostname), "Public metadata points to localhost");
  }
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `Image returned ${response.status}: ${url}`);
  assert(response.headers.get("content-type")?.startsWith("image/png"), "Preview response is not image/png");
  const png = Buffer.from(await response.arrayBuffer());
  assert(png.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), "Invalid PNG signature");
  assert.equal(png.readUInt32BE(16), 1200, "Incorrect image width");
  assert.equal(png.readUInt32BE(20), 630, "Incorrect image height");
  assert(png.length < 5 * 1024 * 1024, "Image exceeds 5 MB");
  console.log(`PASS: PNG accessible without authentication, 1200 x 630, ${png.length} bytes: ${url}`);
}

console.log(`PASS: initial HTML contains Open Graph and large-image Twitter metadata: ${pageUrl}`);

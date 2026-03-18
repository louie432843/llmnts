import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const postsDir = new URL("../src/content/posts/", import.meta.url);
const isoDateTimeWithOffset = /^pubDate:\s*(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2}))\s*$/m;

const failures = [];

for (const name of readdirSync(postsDir)) {
  if (!name.endsWith(".md")) continue;
  const path = join(postsDir.pathname, name);
  const text = readFileSync(path, "utf8");
  const pubDateLine = text.match(/^pubDate:.*$/m)?.[0];

  if (!pubDateLine) {
    failures.push(`${name}: missing pubDate`);
    continue;
  }

  if (!isoDateTimeWithOffset.test(pubDateLine)) {
    failures.push(`${name}: pubDate must be full ISO timestamp with timezone offset (found: ${pubDateLine})`);
  }
}

if (failures.length) {
  console.error("Post pubDate validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Post pubDate validation passed.");

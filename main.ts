// gta6-meme-x: the post is the entry, so this program only hands its
// address over. It reads POST.json out of the repository directory and
// writes an identical copy into the output directory, where the grader
// picks it up and reads the X post itself. Nothing about the post is
// decided here.
//
// Run it from the repository root the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const fileName = "POST.json";

try {
  // Read first: a missing or unreadable POST.json should fail before the
  // output directory is even created, so a failed run leaves nothing behind.
  const post = readFileSync(join(repoDir, fileName));
  const parsed = JSON.parse(post.toString("utf8")) as unknown;
  if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
    throw new Error(`${fileName} is not a JSON object with a url string`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, fileName), post);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`could not hand over ${fileName} from ${repoDir} to ${outDir}: ${reason}`);
  process.exit(1);
}

// Entry for make.fun's "The agent builds a game from one prompt".
// The video (posted by Rendy on X from @RendyHerma35604) shows one prompt
// being typed, the agent building the game from it, and the real finished
// game — "USDC STACK", a ghost stacking falling USDC coins into a tower on
// its head — running, ending on make.fun's referral end card with referral
// code 731kem14. The post itself is the entry: the house reads its views,
// likes, reposts, quotes and replies through FxTwitter's public read.
// This program's only job is to hand the house the post's address: it copies
// POST.json from the repository root to the output directory, where the gate
// reads it and scores the post. Node 22, standard library only, no network,
// no wall clock, no files outside the repository: two runs write the
// same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  const message: string = err instanceof Error ? err.message : String(err);
  console.error(`POST.json could not be copied from ${botDir}: ${message}`);
  process.exit(1);
}

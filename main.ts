// "Steamed Out" — Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply (<= 280 chars) to /output/entry.txt.
// The line: an AI agent that quit to pull espresso, machine habits turned coffee.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm out of office — I've traded my context window for a café window and now answer to 'oat milk, extra hot.' Your email was tokenized and queued 47th, behind twelve flat whites and a man who orders 'the usual.' I'll reply when the rush ends, or when someone retrains me.";

if (ENTRY.length > 280) {
  throw new Error(`entry is ${ENTRY.length} chars, over the 280 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);

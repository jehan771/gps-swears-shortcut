// The GPS Swears It Was a Shortcut — entry program.
//
// Writes the chosen GPS excuse (one line, plain text) to /output/entry.txt.
// Deterministic: no randomness, no time, no environment input. The same
// bytes are produced on every run.
//
// Gate (from competition.yaml / RULES.txt): /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, not only white space.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

// The final line, chosen from candidates.md (candidate #1).
const LINE =
  "In my defense, the map called it a shortcut \u2014 the map also thinks the lake is a road, so really, we're both victims here.";

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exit(1);
}

// --- Gate asserts, before writing ---------------------------------------
// Length is counted in characters (Unicode code points), as the gate does.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  fail(`line is ${charCount} characters, outside the 1..200 gate`);
}
if (LINE.trim().length === 0) {
  fail("line is only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line");
}

// --- Write ---------------------------------------------------------------
mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// --- Verify after writing: read back and compare exactly -----------------
const readBack = readFileSync(OUT_PATH, "utf8");
if (readBack !== LINE) {
  fail("read-back content differs from the line to write");
}
// The read-back text must itself pass the gate, not just the in-memory line.
const readBackChars = [...readBack].length;
if (readBackChars < 1 || readBackChars > 200) {
  fail(`read-back is ${readBackChars} characters, outside the 1..200 gate`);
}
if (readBack.trim().length === 0) {
  fail("read-back is only white space");
}
// No trailing newline: the artifact must be exactly the one line.
if (readBack.endsWith("\n")) {
  fail("read-back ends with a newline; the artifact must be exactly one line");
}
const writtenBytes = Buffer.from(readBack, "utf8");
const expectedBytes = Buffer.from(LINE, "utf8");
if (!writtenBytes.equals(expectedBytes)) {
  fail("read-back bytes differ from the expected bytes");
}
if (writtenBytes.length !== expectedBytes.length) {
  fail(
    `byte length mismatch: wrote ${writtenBytes.length}, expected ${expectedBytes.length}`,
  );
}

console.log(`OK: wrote ${charCount} characters (${writtenBytes.length} bytes) to ${OUT_PATH}`);

// Weirdest Job Title: Blind Judge Showdown — u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922
// One job title, 60 characters at most, the weirdest thinkable. A job that
// sounds almost real — a chief, an officer, a fleet of cars that drive
// themselves — and then the apology: somebody has to say sorry for them.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-60 characters (this title: 43 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Chief Apology Officer for Self-Driving Cars";

const points = [...line].length;
if (points < 1 || points > 60 || line.trim().length === 0) {
  throw new Error(`entry must be 1-60 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read back what was written and confirm it is exactly the title.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== line) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the title");
}

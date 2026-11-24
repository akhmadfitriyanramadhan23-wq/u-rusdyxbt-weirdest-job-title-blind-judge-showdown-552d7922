// Weirdest Job Title: Blind Judge Showdown — u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922
// One job title, 60 characters at most, the weirdest thinkable.
// It sounds almost like a real job — a chief, an officer, a fleet of cars
// that drive themselves — and then the apology: somebody has to say sorry
// for them, in person, every single day.
// Node 22, standard library only. Writes the title to /output/entry.txt.
// The sealed scorer wants 1-60 characters; this entry is 43 code points.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

const entry = "Chief Apology Officer for Self-Driving Cars";
const outDir = "/output";
const outFile = outDir + "/entry.txt";
const size = [...entry].length;
if (size < 1 || size > 60) throw new Error("entry must be 1-60 code points, got " + size);
if (entry.trim().length === 0) throw new Error("entry must not be blank");
if (entry.includes("\n")) throw new Error("entry must be a single line");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, entry);

// Read the file back and confirm it holds exactly the entry.
if (readFileSync(outFile, "utf8") !== entry) throw new Error("entry.txt does not match the entry");

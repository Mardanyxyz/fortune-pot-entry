import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune in a Pot — one kind, funny fortune for the houseplant on the
// windowsill. Deterministic, stdlib only, no network. Writes exactly one
// line to /output/entry.txt.
const fortune =
  "By spring you will outgrow this pot, and your keeper will rearrange the whole room so the sun never leaves you.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), fortune + "\n", "utf8");

// Verifies that every t('key') used in src exists in both TR and EN dictionaries
// and that both dictionaries expose the same set of keys.
//
//   node scripts/check-i18n.mjs                 -> summary + list of problems
//   node scripts/check-i18n.mjs --file=Users    -> keys missing for files matching "Users", with source lines
//
// Exit code is 1 when something is missing, so it can be used in CI.
import { readFileSync, readdirSync, statSync, mkdirSync, rmSync } from "node:fs";
import { join, extname, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const root = fileURLToPath(new URL("../src/", import.meta.url));
const fileFilter = process.argv.find((a) => a.startsWith("--file="))?.slice(7);

// Built next to node_modules so that the bundle can resolve "react".
const tmp = fileURLToPath(new URL("../node_modules/.cache/i18n-check/", import.meta.url));
mkdirSync(tmp, { recursive: true });
const outfile = join(tmp, "translations.mjs");
await build({
  entryPoints: [join(root, "contexts", "LanguageContext.tsx")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile,
  external: ["react"],
  alias: { "@": root.replace(/[\\/]$/, "") },
  logLevel: "silent",
});
const { translations } = await import(pathToFileURL(outfile).href);
rmSync(tmp, { recursive: true, force: true });

const flatten = (obj, prefix = "", out = {}) => {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object") flatten(v, key, out);
    else out[key] = v;
  }
  return out;
};

const tr = flatten(translations.tr);
const en = flatten(translations.en);

const walk = (dir, files = []) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, files);
    else if ([".ts", ".tsx"].includes(extname(p))) files.push(p);
  }
  return files;
};

// t('a.b'), t("a.b"), t(`a.b`)  - dynamic keys (template literals with ${}) are skipped
const re = /\bt\(\s*(['"`])([A-Za-z0-9_.-]+)\1/g;
const used = new Map();
for (const file of walk(root)) {
  const rel = relative(root, file);
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(line))) {
      if (!used.has(m[2])) used.set(m[2], []);
      used.get(m[2]).push({ file: rel, line: i + 1, text: line.trim() });
    }
  });
}

const missingTr = [];
const missingEn = [];
for (const [key, refs] of used) {
  if (!(key in tr)) missingTr.push([key, refs]);
  if (!(key in en)) missingEn.push([key, refs]);
}
const onlyTr = Object.keys(tr).filter((k) => !(k in en));
const onlyEn = Object.keys(en).filter((k) => !(k in tr));

if (fileFilter) {
  for (const [key, refs] of missingTr) {
    const hit = refs.filter((r) => r.file.includes(fileFilter));
    if (hit.length) console.log(`${key}  <=  ${hit[0].file}:${hit[0].line}  ${hit[0].text.slice(0, 150)}`);
  }
  process.exit(0);
}

const byFile = (list) => {
  const counts = {};
  for (const [, refs] of list) for (const f of new Set(refs.map((r) => r.file))) counts[f] = (counts[f] || 0) + 1;
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
};

console.log(`keys: tr=${Object.keys(tr).length} en=${Object.keys(en).length} used=${used.size}`);
console.log(`\nMissing in TR: ${missingTr.length}`);
byFile(missingTr).forEach(([f, n]) => console.log(`  ${String(n).padStart(4)}  ${f}`));
console.log(`\nMissing in EN: ${missingEn.length}`);
byFile(missingEn).forEach(([f, n]) => console.log(`  ${String(n).padStart(4)}  ${f}`));
console.log(`\nDefined only in TR: ${onlyTr.length}`, onlyTr.slice(0, 20));
console.log(`Defined only in EN: ${onlyEn.length}`, onlyEn.slice(0, 20));

process.exit(missingTr.length || missingEn.length || onlyTr.length || onlyEn.length ? 1 : 0);

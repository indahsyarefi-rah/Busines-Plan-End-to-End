import { execFileSync } from "node:child_process";
import { cp, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
const git = (...args) => execFileSync("git", args, { encoding: "utf8" }).trim();
const source = git("rev-parse", "--short", "HEAD");
if (git("status", "--porcelain"))
  throw Error("Commit source and test changes before publishing.");
const build = resolve("dist");
const temp = await mkdtemp(join(tmpdir(), "radar-pages-"));
const checkout = join(temp, "site");
try {
  git("fetch", "origin", "gh-pages:refs/remotes/origin/gh-pages");
  git("worktree", "add", "--detach", checkout, "origin/gh-pages");
  // Keep unrelated tracked Pages files, replacing only the application's output.
  for (const name of ["assets", "brand", "data", "index.html"])
    await rm(join(checkout, name), { recursive: true, force: true });
  await cp(build, checkout, { recursive: true });
  git("-C", checkout, "add", "--all");
  if (git("-C", checkout, "diff", "--cached", "--stat")) {
    git(
      "-C",
      checkout,
      "commit",
      "-m",
      `Publish pastel Radar Peluang from source ${source}`,
    );
    git("-C", checkout, "push", "origin", "HEAD:gh-pages");
  }
  console.log(
    `Published ${git("-C", checkout, "rev-parse", "--short", "HEAD")} from source ${source}`,
  );
} finally {
  try {
    git("worktree", "remove", "--force", checkout);
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
}

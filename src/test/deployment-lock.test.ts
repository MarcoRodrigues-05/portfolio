import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

type LockedPackage = {
  version?: string;
  resolved?: string;
  link?: boolean;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
};
const lock = JSON.parse(readFileSync("package-lock.json", "utf8")) as {
  packages: Record<string, LockedPackage>;
};

describe("Cross-platform deployment dependencies", () => {
  it("matches the manifest without depending on local folders", () => {
    const manifest = JSON.parse(readFileSync("package.json", "utf8"));
    expect(lock.packages[""]?.dependencies).toEqual(manifest.dependencies);
    expect(lock.packages[""]?.devDependencies).toEqual(manifest.devDependencies);
    for (const [path, entry] of Object.entries(lock.packages)) {
      expect(path === "" || path.startsWith("node_modules/"), path).toBe(true);
      expect(entry.link, path).not.toBe(true);
      if (entry.resolved) expect(entry.resolved, path).toMatch(/^https:\/\//);
    }
  });
  it.each(["lightningcss", "@tailwindcss/oxide", "rolldown"])(
    "locks every native platform package required by %s",
    (name) => {
      const parent = lock.packages[`node_modules/${name}`];
      expect(parent?.optionalDependencies).toBeDefined();
      for (const [nativeName, version] of Object.entries(parent!.optionalDependencies!)) {
        expect(lock.packages[`node_modules/${nativeName}`]?.version, nativeName).toBe(version);
      }
    },
  );
});

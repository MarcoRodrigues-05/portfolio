import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

type LockedPackage = {
  version?: string;
  optionalDependencies?: Record<string, string>;
};
const lock = JSON.parse(readFileSync("package-lock.json", "utf8")) as {
  packages: Record<string, LockedPackage>;
};

describe("Cross-platform deployment dependencies", () => {
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

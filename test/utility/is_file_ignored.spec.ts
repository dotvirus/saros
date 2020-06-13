import test from "ava-ts";
import { fileIgnorer } from "../../src/utility";

const tests = [
  [["test.*"], "test.json", true],
  [["test.json"], "test.json", true],
  [["test.*"], "test2.json", false],
  [["test*"], "test2.json", true],
  [["test.json"], "test2.json", false],
  [["test.json", "test2.json"], "test2.json", true],
  [[], "test2.json", false],
  [["test"], "test.mp4", false],
  [["test"], "test", true],
] as [string[], string, boolean][];

for (const testCase of tests) {
  test.serial(`Ignore ${testCase[1]}`, async (t) => {
    const isIgnoredFile = fileIgnorer(testCase[0]);
    const result = isIgnoredFile(testCase[1]);
    t.is(result, testCase[2]);
  });
}

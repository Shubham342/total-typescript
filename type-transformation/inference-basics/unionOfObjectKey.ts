import { Equal, Expect } from "../../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
} as const;

type x = typeof testingFrameworks;

type TestingFramework = keyof typeof testingFrameworks;

type labelTypes = x[keyof x]["label"];

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];

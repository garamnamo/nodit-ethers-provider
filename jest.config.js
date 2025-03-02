import { createDefaultEsmPreset } from "ts-jest";

/** @type {import("ts-jest").JestConfigWithTsJest} */
const config = {
  ...createDefaultEsmPreset(),
  moduleNameMapper: {
    "^(\\.{1,2}/.+)\\.js$": "$1",
  },
  forceExit: true,
};

export default config;

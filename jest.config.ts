import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/app/$1",
  },
  testEnvironment: "jsdom",
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;

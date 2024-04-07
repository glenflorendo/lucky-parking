import { type JestConfigWithTsJest } from 'ts-jest';
import { defaultsESM } from 'ts-jest/presets';

process.env.TZ = "UTC";

const config: JestConfigWithTsJest = {
  ...defaultsESM,
  testPathIgnorePatterns: ['dist'],
};

export default config;

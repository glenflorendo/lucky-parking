import { type JestConfigWithTsJest } from 'ts-jest';

process.env.TZ = "UTC";

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testPathIgnorePatterns: ['dist'],
};

export default config;

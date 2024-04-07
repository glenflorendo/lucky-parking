import { type JestConfigWithTsJest } from 'ts-jest';

process.env.TZ = "UTC";

const config: JestConfigWithTsJest = {
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    "\\.(css|jpg|less|png|sass|scss|styl|svg|ttf|woff|woff2)$": "./__mocks__/file-mock.js",
  },
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ['dist'],
  transform: {
    "^.+\\svg$": "./transform-svg.js",
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        isolatedModules: true,
        useESM: true,
      },
    ],
  },

};

export default config;

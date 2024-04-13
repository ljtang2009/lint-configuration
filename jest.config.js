/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset:          'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  transform:       {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        useESM:   true,
      },
    ],
  },
  coverageReporters: [
    'json',
    ['html-spa', { subdir: 'html' }],
  ],
};

export default config;

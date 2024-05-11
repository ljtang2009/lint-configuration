/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        useESM: true,
      },
    ],
  },
  coverageReporters: [
    'json',
    // XXX html-spa 会有路径问题
    // ['html-spa', { subdir: 'html-spa', verbose: true }],
    ['html', { subdir: 'html' }],
  ],
};

export default config;

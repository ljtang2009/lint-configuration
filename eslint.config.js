import globals from 'globals';
import { eslint, disableDuplicatedRules } from './dist/index.js';
import _ from 'lodash';
import { dirname, join } from 'desm';

const __dirname = dirname(import.meta.url);

const baseConfig = _.merge(
  _.cloneDeep(eslint.buildIn.default),
  eslint.stylisticPlus.default,
  eslint.stylisticJs.default,
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
);

const baseTSConfig = _.merge(
  _.cloneDeep(baseConfig),
  eslint.stylisticTs.default,
  eslint.ts.default,
);

let config = [
  {
    name: 'js',
    ..._.merge(_.cloneDeep(baseConfig), {
      files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
      ignores: [
        'dist/**/*',
        'coverage/**/*',
      ],
    }),
  },
  {
    name: 'ts/src',
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files: ['src/**/*.ts'],
      ignores: ['src/**/*.spec.ts'],
      languageOptions: {
        parserOptions: {
          project: join(import.meta.url, 'tsconfig.json'),
          tsconfigRootDir: __dirname,
        },
      },
    }),
  },
  {
    name: 'ts/test',
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files: ['src/**/*.spec.ts'],
      languageOptions: {
        parserOptions: {
          project: join(import.meta.url, 'tsconfig.test.json'),
          tsconfigRootDir: __dirname,
        },
      },
    }, eslint.jest.default),
  },
  {
    name: 'ts/root',
    ..._.merge(_.cloneDeep(baseTSConfig), {
      files: [
        '*.ts',
      ],
      languageOptions: {
        parserOptions: {
          project: join(import.meta.url, 'tsconfig.node.json'),
          tsconfigRootDir: __dirname,
        },
      },
    }),
  },
  {
    name: 'json',
    ..._.merge(_.cloneDeep(eslint.json.default), {
      files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
      ignores: [
        'coverage/**/*',
        'package.json',
      ],
    }),
  },
];

// 禁用重复规则
config = disableDuplicatedRules(config);

export default config;

import rules from './rules/index.ts';

export default {
  plugins: [],
  defaultSeverity: 'error',
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: [true, { severity: 'warning' }],
  reportNeedlessDisables: [true, { severity: 'warning' }],
  ignoreDisables: false,
  allowEmptyInput: true,
  rules,
};

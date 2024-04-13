import rules from './rules/index.js';

export default {
  plugins:                       [],
  defaultSeverity:               'error',
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables:    [true, { severity: 'warning' }],
  reportNeedlessDisables:        [true, { severity: 'warning' }],
  ignoreDisables:                false,
  rules,
};

import * as eslint from '@/eslint/index.js';
import getDuplicatedRules from './getDuplicatedRules.js';
import showJSONWithBrowser from '../showJSONWithBrowser.js';

const duplicatedRules = getDuplicatedRules(
  [
    eslint.buildIn.default.rules,
    eslint.stylisticPlus.default.rules,
    eslint.stylisticJs.default.rules,
    eslint.stylisticTs.default.rules,
    eslint.ts.default.rules,
  ],
);

showJSONWithBrowser(duplicatedRules);

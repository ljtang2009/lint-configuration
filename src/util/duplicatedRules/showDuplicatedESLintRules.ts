import * as eslint from '@/eslint/index.ts';
import getDuplicatedRules from './getDuplicatedRules.ts';
import showJSONWithBrowser from '../showJSONWithBrowser.ts';

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

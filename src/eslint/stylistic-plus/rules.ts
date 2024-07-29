// @see https://eslint.style/packages/plus

import stylisticRules from '@/eslint/stylistic/rules.ts';

export default {
  // https://eslint.style/rules/plus/indent-binary-ops
  'indent-binary-ops': stylisticRules['indent-binary-ops'],

  // https://eslint.style/rules/plus/type-generic-spacing
  'type-generic-spacing': stylisticRules['type-generic-spacing'],

  // https://eslint.style/rules/plus/type-named-tuple-spacing
  'type-named-tuple-spacing': stylisticRules['type-named-tuple-spacing'],
};

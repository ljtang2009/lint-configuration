// @see https://eslint.style/packages/ts

import stylisticRules from '@/eslint/stylistic/rules.ts';

export default {
  // https://eslint.style/rules/ts/block-spacing
  'block-spacing': stylisticRules['block-spacing'],

  // https://eslint.style/rules/ts/brace-style
  'brace-style': stylisticRules['brace-style'],

  // https://eslint.style/rules/ts/comma-dangle
  'comma-dangle': stylisticRules['comma-dangle'],

  // https://eslint.style/rules/ts/comma-spacing
  'comma-spacing': stylisticRules['comma-spacing'],

  // https://eslint.style/rules/ts/function-call-spacing
  'function-call-spacing': stylisticRules['function-call-spacing'],

  // WARNING Please read Issue #1824: Problems with the indent rule before using this rule!
  // https://eslint.style/rules/ts/indent
  indent: stylisticRules.indent,

  // https://eslint.style/rules/ts/key-spacing
  'key-spacing': stylisticRules['key-spacing'],

  // https://eslint.style/rules/ts/keyword-spacing
  // 'keyword-spacing': stylisticRules['keyword-spacing'],
  'keyword-spacing': ['off'],

  // https://eslint.style/rules/ts/lines-around-comment
  'lines-around-comment': stylisticRules['lines-around-comment'],

  // https://eslint.style/rules/ts/lines-between-class-members
  'lines-between-class-members': [
    stylisticRules['lines-between-class-members'][0],
    stylisticRules['lines-between-class-members'][1],
    {
      ...Object(stylisticRules['lines-between-class-members'][2]),
      exceptAfterOverload: true,
    },
  ],

  // https://eslint.style/rules/ts/member-delimiter-style
  'member-delimiter-style': stylisticRules['member-delimiter-style'],

  // https://eslint.style/rules/ts/no-extra-parens
  'no-extra-parens': stylisticRules['no-extra-parens'],

  // https://eslint.style/rules/ts/no-extra-semi
  'no-extra-semi': stylisticRules['no-extra-semi'],

  // https://eslint.style/rules/ts/object-curly-spacing
  'object-curly-spacing': stylisticRules['object-curly-spacing'],

  // https://eslint.style/rules/ts/padding-line-between-statements
  'padding-line-between-statements': stylisticRules['padding-line-between-statements'],

  // https://eslint.style/rules/ts/quote-props
  'quote-props': stylisticRules['quote-props'],

  // https://eslint.style/rules/ts/quotes
  quotes: stylisticRules.quotes,

  // https://eslint.style/rules/ts/semi
  semi: stylisticRules.semi,

  // https://eslint.style/rules/ts/space-before-blocks
  'space-before-blocks': stylisticRules['space-before-blocks'],

  // https://eslint.style/rules/ts/space-before-function-paren
  'space-before-function-paren': stylisticRules['space-before-function-paren'],

  // https://eslint.style/rules/ts/space-infix-ops
  'space-infix-ops': stylisticRules['space-infix-ops'],

  // https://eslint.style/rules/ts/type-annotation-spacing
  'type-annotation-spacing': stylisticRules['type-annotation-spacing'],
};

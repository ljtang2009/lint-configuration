// @see https://eslint.style/rules

import { addPluginName } from '../../util/ruleTools.js';

const rules = {
  // Enforce linebreaks after opening and before closing array brackets
  // https://eslint.style/rules/default/array-bracket-newline
  'array-bracket-newline': ['error', 'consistent'],

  // Enforce consistent spacing inside array brackets
  // https://eslint.style/rules/default/array-bracket-spacing
  'array-bracket-spacing': ['error', 'never'],

  // Enforce line breaks after each array element
  // https://eslint.style/rules/default/array-element-newline
  'array-element-newline': ['error', 'consistent'],

  // Require parentheses around arrow function
  // https://eslint.style/rules/default/arrow-parens
  'arrow-parens': ['error', 'always'],

  // Enforce consistent spacing before and after the arrow in arrow functions
  // https://eslint.style/rules/default/arrow-spacing
  'arrow-spacing': ['error', { before: true, after: true }],

  // Disallow or enforce spaces inside of blocks after opening block and before closing block
  // https://eslint.style/rules/default/block-spacing
  'block-spacing': ['error', 'always'],

  // Enforce consistent brace style for blocks
  // https://eslint.style/rules/default/brace-style
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],

  // Require or disallow trailing commas
  // https://eslint.style/rules/default/comma-dangle
  'comma-dangle': ['error', 'always-multiline'],

  // Enforce consistent spacing before and after commas
  // https://eslint.style/rules/default/comma-spacing
  'comma-spacing': ['error', { before: false, after: true }],

  // Enforce consistent comma style
  // https://eslint.style/rules/default/comma-style
  'comma-style': ['error', 'last'],

  // Enforce consistent spacing inside computed property brackets
  // https://eslint.style/rules/default/computed-property-spacing
  'computed-property-spacing': [
    'error',
    'never',
    { enforceForClassMembers: true },
  ],

  // Enforce consistent newlines before and after dots
  // https://eslint.style/rules/default/dot-location
  'dot-location': ['error', 'property'],

  // Require or disallow newline at the end of files
  // https://eslint.style/rules/default/eol-last
  'eol-last': ['error', 'always'],

  // Enforce line breaks between arguments of a function call
  // https://eslint.style/rules/default/function-call-argument-newline
  'function-call-argument-newline': ['error', 'consistent'],

  // Require or disallow spacing between function identifiers and their invocations
  // https://eslint.style/rules/default/function-call-spacing
  'function-call-spacing': ['error', 'never'],

  // Enforce consistent line breaks inside function parentheses
  // https://eslint.style/rules/default/function-paren-newline
  'function-paren-newline': ['error', 'multiline-arguments'],

  // Enforce consistent spacing around `*` operators in generator functions
  // https://eslint.style/rules/default/generator-star-spacing
  'generator-star-spacing': ['error', { before: false, after: true }],

  // Enforce the location of arrow function bodies
  // https://eslint.style/rules/default/implicit-arrow-linebreak
  'implicit-arrow-linebreak': ['error', 'beside'],

  // Enforce consistent indentation
  // https://eslint.style/rules/default/indent
  indent: [
    'error',
    2,
    {
      SwitchCase:               1,
      VariableDeclarator:       'first',
      FunctionDeclaration:      { parameters: 'first', body: 1 },
      FunctionExpression:       { parameters: 'first', body: 1 },
      CallExpression:           { arguments: 'first' },
      ArrayExpression:          'first',
      ObjectExpression:         'first',
      ImportDeclaration:        'first',
      flatTernaryExpressions:   true,
      offsetTernaryExpressions: true,
      ignoreComments:           false,
    },
  ],

  // Indentation for binary operators
  // https://eslint.style/rules/default/indent-binary-ops
  'indent-binary-ops': ['error', 2],

  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-child-element-spacing
  'jsx-child-element-spacing': 'error',

  // Enforce closing bracket location in JSX
  // https://eslint.style/rules/default/jsx-closing-bracket-location
  'jsx-closing-bracket-location': ['error', 'tag-aligned'],

  // Enforce closing tag location for multiline JSX
  // https://eslint.style/rules/default/jsx-closing-tag-location
  'jsx-closing-tag-location': 'error',

  // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
  // https://eslint.style/rules/default/jsx-curly-brace-presence
  'jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never', propElementValues: 'always' },
  ],

  // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-curly-newline
  'jsx-curly-newline': [
    'error',
    { multiline: 'consistent', singleline: 'consistent' },
  ],

  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-curly-spacing
  'jsx-curly-spacing': ['error', { when: 'never' }],

  // Enforce or disallow spaces around equal signs in JSX attributes
  // https://eslint.style/rules/default/jsx-equals-spacing
  'jsx-equals-spacing': ['error', 'never'],

  // Enforce proper position of the first property in JSX
  // https://eslint.style/rules/default/jsx-first-prop-new-line
  'jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

  // Enforce JSX indentation
  // https://eslint.style/rules/default/jsx-indent
  'jsx-indent': [
    'error',
    2,
    { checkAttributes: true, indentLogicalExpressions: true },
  ],

  // Enforce props indentation in JSX
  // https://eslint.style/rules/default/jsx-indent-props
  'jsx-indent-props': ['error', 'first'],

  // Enforce maximum of props on a single line in JSX
  // https://eslint.style/rules/default/jsx-max-props-per-line
  'jsx-max-props-per-line': 'off',

  // Require or prevent a new line after jsx elements and expressions.
  // https://eslint.style/rules/default/jsx-newline
  'jsx-newline': ['error', { prevent: false, allowMultilines: false }],

  // Require one JSX element per line
  // https://eslint.style/rules/default/jsx-one-expression-per-line
  'jsx-one-expression-per-line': 'off',

  // Enforce PascalCase for user-defined JSX components
  // https://eslint.style/rules/default/jsx-pascal-case
  'jsx-pascal-case': ['error', { allowAllCaps: true }],

  // Disallow multiple spaces between inline JSX props
  // https://eslint.style/rules/default/jsx-props-no-multi-spaces
  'jsx-props-no-multi-spaces': 'error',

  // Enforce the consistent use of either double or single quotes in JSX attributes
  // https://eslint.style/rules/default/jsx-quotes
  'jsx-quotes': ['error', 'prefer-double'],

  // Disallow extra closing tags for components without children
  // https://eslint.style/rules/default/jsx-self-closing-comp
  'jsx-self-closing-comp': ['error', {
    component: true,
    html:      true,
  }],

  // Enforce props alphabetical sorting
  // https://eslint.style/rules/default/jsx-sort-props
  'jsx-sort-props': ['error', {
    callbacksLast:  true,
    shorthandFirst: true,
    ignoreCase:     false,
    multiline:      'ignore',
    reservedFirst:  ['children', 'dangerouslySetInnerHTML', 'key', 'ref'],
    locale:         'auto',
  }],

  // Enforce whitespace in and around the JSX opening and closing brackets
  // https://eslint.style/rules/default/jsx-tag-spacing
  'jsx-tag-spacing': ['error', {
    closingSlash: 'never', beforeSelfClosing: 'proportional-always', afterOpening: 'never', beforeClosing: 'proportional-always',
  }],

  // Disallow missing parentheses around multiline JSX
  // https://eslint.style/rules/default/jsx-wrap-multilines
  'jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment:  'parens-new-line',
    return:      'parens-new-line',
    arrow:       'parens-new-line',
    condition:   'parens-new-line',
    logical:     'parens-new-line',
    prop:        'parens-new-line',
  }],

  // Enforce consistent spacing between keys and values in object literal properties
  // https://eslint.style/rules/default/key-spacing
  'key-spacing': ['error', {
    beforeColon: false,
    afterColon:  true,
    mode:        'strict',
    align:       {
      beforeColon: false,
      afterColon:  true,
      on:          'value',
      mode:        'strict',
    },
    // multiLine: {
    //   "beforeColon": false,
    //   "afterColon": true,
    //   "align": "value",
    //   mode: 'strict',
    // },
    // "singleLine": {
    //   "beforeColon": false,
    //   "afterColon": true,
    //   mode: 'strict',
    // },
  }],

  // Enforce consistent spacing before and after keywords
  // https://eslint.style/rules/default/keyword-spacing
  'keyword-spacing': ['error', {
    before: true,
    after:  true,
  }],

  // Enforce consistent linebreak style
  // eslint.style/rules/default/linebreak-style
  'linebreak-style': ['error', 'unix'],

  // Require empty lines around comments
  // https://eslint.style/rules/default/lines-around-comment
  'lines-around-comment': 'off',

  // Require or disallow an empty line between class members
  // https://eslint.style/rules/default/lines-between-class-members
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

  // Enforce a maximum line length
  // https://eslint.style/rules/default/max-len
  'max-len': ['error', {
    tabWidth:               2,
    ignoreComments:         true,
    ignoreTrailingComments: true,
    ignoreUrls:             true,
    ignoreStrings:          true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals:   true,
  }],

  // Enforce a maximum number of statements allowed per line
  // https://eslint.style/rules/default/max-statements-per-line
  'max-statements-per-line': 'off',

  // Require a specific member delimiter style for interfaces and type literals
  // https://eslint.style/rules/default/member-delimiter-style
  'member-delimiter-style': ['error', {
    multiline: {
      delimiter:   'semi',
      requireLast: true,
    },
    singleline: {
      delimiter:   'semi',
      requireLast: false,
    },
    multilineDetection: 'brackets',
  }],

  // Enforce newlines between operands of ternary expressions
  // https://eslint.style/rules/default/multiline-ternary
  'multiline-ternary': ['error', 'always-multiline'],

  // Enforce or disallow parentheses when invoking a constructor with no arguments
  // https://eslint.style/rules/default/new-parens
  'new-parens': ['error', 'always'],

  // Require a newline after each call in a method chain
  // https://eslint.style/rules/default/newline-per-chained-call
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],

  // Disallow arrow functions where they could be confused with comparisons
  // https://eslint.style/rules/default/no-confusing-arrow
  'no-confusing-arrow': ['error', { allowParens: true, onlyOneSimpleParam: false }],

  // Disallow unnecessary parentheses
  // https://eslint.style/rules/default/no-extra-parens
  'no-extra-parens': 'off',

  // Disallow unnecessary semicolons
  // https://eslint.style/rules/default/no-extra-semi
  'no-extra-semi': 'error',

  // Disallow leading or trailing decimal points in numeric literals
  // https://eslint.style/rules/default/no-floating-decimal
  'no-floating-decimal': 'error',

  // Disallow mixed binary operators
  // https://eslint.style/rules/default/no-mixed-operators
  'no-mixed-operators': ['error', {
    groups: [
      ['+', '-', '*', '/', '%', '**'],
      ['&', '|', '^', '~', '<<', '>>', '>>>'],
      ['==', '!=', '===', '!=='],
      ['&&', '||'],
      ['in', 'instanceof'],
    ],
    allowSamePrecedence: false,
  }],

  // Disallow mixed spaces and tabs for indentation
  // https://eslint.style/rules/default/no-mixed-spaces-and-tabs
  'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

  // Disallow multiple spaces
  // https://eslint.style/rules/default/no-multi-spaces
  'no-multi-spaces': ['error', {
    ignoreEOLComments: true,
    exceptions:        {
      Property:           true,
      BinaryExpression:   false,
      VariableDeclarator: false,
      ImportDeclaration:  false,
    },
    includeTabs: true,
  }],

  // Disallow multiple empty lines
  // https://eslint.style/rules/default/no-multiple-empty-lines
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

  // Disallow all tabs
  // https://eslint.style/rules/default/no-tabs
  'no-tabs': 'error',

  // Disallow trailing whitespace at the end of lines
  // https://eslint.style/rules/default/no-trailing-spaces
  'no-trailing-spaces': ['error', {
    skipBlankLines: false,
    ignoreComments: false,
  }],

  // Disallow whitespace before properties
  // https://eslint.style/rules/default/no-whitespace-before-property
  'no-whitespace-before-property': 'error',

  // Enforce the location of single-line statements
  // https://eslint.style/rules/default/nonblock-statement-body-position
  'nonblock-statement-body-position': ['error', 'beside'],

  // Enforce consistent line breaks after opening and before closing braces
  // https://eslint.style/rules/default/object-curly-newline
  'object-curly-newline': ['error', {
    ObjectExpression:  { minProperties: 4, multiline: true, consistent: true },
    ObjectPattern:     { minProperties: 4, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  }],

  // Enforce consistent spacing inside braces
  // https://eslint.style/rules/default/object-curly-spacing
  'object-curly-spacing': ['error', 'always'],

  // Enforce placing object properties on separate lines
  // https://eslint.style/rules/default/object-property-newline
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

  // Require or disallow newlines around variable declarations
  // https://eslint.style/rules/default/one-var-declaration-per-line
  'one-var-declaration-per-line': ['error', 'always'],

  // Enforce consistent linebreak style for operators
  // https://eslint.style/rules/default/operator-linebreak
  'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

  // Require or disallow padding within blocks
  // https://eslint.style/rules/default/padded-blocks
  'padded-blocks': ['error', {
    blocks:   'never',
    classes:  'never',
    switches: 'never',
  }, {
    allowSingleLineBlocks: true,
  }],

  // Require or disallow padding lines between statements
  // https://eslint.style/rules/default/padding-line-between-statements
  'padding-line-between-statements': 'off',

  // Require quotes around object literal property names
  // https://eslint.style/rules/default/quote-props
  'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

  // Enforce the consistent use of either backticks, double, or single quotes
  // https://eslint.style/rules/default/quotes
  quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

  // Enforce spacing between rest and spread operators and their expressions
  // https://eslint.style/rules/default/rest-spread-spacing
  'rest-spread-spacing': ['error', 'never'],

  // Require or disallow semicolons instead of ASI
  // https://eslint.style/rules/default/semi
  semi: ['error', 'always', { omitLastInOneLineBlock: false, omitLastInOneLineClassBody: false }],

  // Enforce consistent spacing before and after semicolons
  // https://eslint.style/rules/default/semi-spacing
  'semi-spacing': ['error', { before: false, after: true }],

  // Enforce location of semicolons
  // https://eslint.style/rules/default/semi-style
  'semi-style': ['error', 'last'],

  // Enforce consistent spacing before blocks
  // https://eslint.style/rules/default/space-before-blocks
  'space-before-blocks': ['error', 'always'],

  // Enforce consistent spacing before `function` definition opening parenthesis
  // https://eslint.style/rules/default/space-before-function-paren
  'space-before-function-paren': ['error', {
    anonymous:  'always',
    named:      'never',
    asyncArrow: 'always',
  }],

  // Enforce consistent spacing inside parentheses
  // https://eslint.style/rules/default/space-in-parens
  'space-in-parens': ['error', 'never'],

  // Require spacing around infix operators
  // https://eslint.style/rules/default/space-infix-ops
  'space-infix-ops': ['error', { int32Hint: false }],

  // Enforce consistent spacing before or after unary operators
  // https://eslint.style/rules/default/space-unary-ops
  'space-unary-ops': ['error', {
    words:    true,
    nonwords: false,
  }],

  // Enforce consistent spacing after the `//` or `/*` in a comment
  // https://eslint.style/rules/default/spaced-comment
  'spaced-comment': ['error', 'always', {
    line: {
      exceptions: ['-', '+'],
      markers:    ['=', '!', '/'],
    },
    block: {
      exceptions: ['-', '+'],
      markers:    ['=', '!', ':', '::'],
      balanced:   true,
    },
  }],

  // Enforce spacing around colons of switch statements
  // https://eslint.style/rules/default/switch-colon-spacing
  'switch-colon-spacing': ['error', { after: true, before: false }],

  // Require or disallow spacing around embedded expressions of template strings
  // https://eslint.style/rules/default/template-curly-spacing
  'template-curly-spacing': ['error', 'never'],

  // Require or disallow spacing between template tags and their literals
  // https://eslint.style/rules/default/template-tag-spacing
  'template-tag-spacing': ['error', 'never'],

  // Require consistent spacing around type annotations
  // https://eslint.style/rules/default/type-annotation-spacing
  'type-annotation-spacing': ['error', { before: false, after: true }],

  // type-generic-spacing Enforces consistent spacing inside TypeScript type generics
  // https://eslint.style/rules/default/type-generic-spacing
  'type-generic-spacing': 'error',

  // type-named-tuple-spacing Expect space before the type declaration in the named tuple
  // https://eslint.style/rules/default/type-named-tuple-spacing
  'type-named-tuple-spacing': 'error',

  // Require parentheses around immediate `function` invocations
  // https://eslint.style/rules/default/wrap-iife
  'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],

  // Require parenthesis around regex literals
  // https://eslint.style/rules/default/wrap-regex
  'wrap-regex': 'error',

  // Require or disallow spacing around the `*` in `yield*` expressions
  // https://eslint.style/rules/default/yield-star-spacing
  'yield-star-spacing': ['error', 'after'],
};

function getRules(pluginName: string): Record<string, unknown> {
  return addPluginName(pluginName, rules);
}

export default {
  getRules,
};

// @see https://typescript-eslint.io/rules/?=recommended

export default {
  // Disallow awaiting a value that is not a Thenable.
  // https://typescript-eslint.io/rules/await-thenable/
  'await-thenable': 'off',

  // Disallow @ts-<directive> comments or require descriptions after directives.
  // https://typescript-eslint.io/rules/ban-ts-comment/
  'ban-ts-comment': 'off',

  // Disallow certain types.
  // https://typescript-eslint.io/rules/ban-types/
  'ban-types': 'off',

  // Disallow generic Array constructors.
  // https://typescript-eslint.io/rules/no-array-constructor/
  // use eslint rule
  'no-array-constructor': 'off',

  // Require .toString() to only be called on objects which provide useful information when stringified.
  // https://typescript-eslint.io/rules/no-base-to-string/
  'no-base-to-string': 'off',

  // Disallow duplicate enum member values
  // https://typescript-eslint.io/rules/no-duplicate-enum-values/
  'no-duplicate-enum-values': 'error',

  // Disallow duplicate constituents of union or intersection types.
  // https://typescript-eslint.io/rules/no-duplicate-type-constituents/
  'no-duplicate-type-constituents': 'off',

  // Disallow the any type.
  // https://typescript-eslint.io/rules/no-explicit-any/
  'no-explicit-any': 'warn',

  // Disallow extra non-null assertions.
  // https://typescript-eslint.io/rules/no-extra-non-null-assertion/
  'no-extra-non-null-assertion': 'error',

  // Require Promise-like statements to be handled appropriately.
  // https://typescript-eslint.io/rules/no-floating-promises/
  'no-floating-promises': 'off',

  // Disallow iterating over an array with a for-in loop.
  // https://typescript-eslint.io/rules/no-for-in-array/
  'no-for-in-array': 'off',

  // Disallow the use of eval()-like methods.
  // https://typescript-eslint.io/rules/no-implied-eval/
  // use eslint rule https://eslint.org/docs/latest/rules/no-implied-eval
  'no-implied-eval': 'off',

  // Disallow literal numbers that lose precision.
  // https://typescript-eslint.io/rules/no-loss-of-precision/
  // use eslint rule
  'no-loss-of-precision': 'off',

  // Enforce valid definition of new and constructor.
  // https://typescript-eslint.io/rules/no-misused-new/
  'no-misused-new': 'off',

  // Disallow Promises in places not designed to handle them
  // https://typescript-eslint.io/rules/no-misused-promises/
  'no-misused-promises': 'off',

  // Disallow TypeScript namespaces.
  // https://typescript-eslint.io/rules/no-namespace/
  'no-namespace': [
    'error',
    {
      allowDeclarations:    true,
      allowDefinitionFiles: true,
    },
  ],

  // Disallow non-null assertions after an optional chain expression.
  // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
  'no-non-null-asserted-optional-chain': 'error',

  // Disallow members of unions and intersections that do nothing or override type information.
  // https://typescript-eslint.io/rules/no-redundant-type-constituents/
  'no-redundant-type-constituents': 'off',

  // Disallow aliasing this.
  // https://typescript-eslint.io/rules/no-this-alias/
  'no-this-alias': [
    'error',
    {
      allowDestructuring: true,
    },
  ],

  // Disallow type assertions that do not change the type of an expression.
  // https://typescript-eslint.io/rules/no-unnecessary-type-assertion/
  'no-unnecessary-type-assertion': 'off',

  // Disallow unnecessary constraints on generic types.
  // https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
  'no-unnecessary-type-constraint': 'error',

  // Disallow calling a function with a value with type any.
  // https://typescript-eslint.io/rules/no-unsafe-argument/
  'no-unsafe-argument': 'off',

  // Disallow assigning a value with type any to variables and properties.
  // https://typescript-eslint.io/rules/no-unsafe-assignment/
  'no-unsafe-assignment': 'off',

  // Disallow calling a value with type any.
  // https://typescript-eslint.io/rules/no-unsafe-call/
  'no-unsafe-call': 'off',

  // Disallow unsafe declaration merging.
  // https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
  'no-unsafe-declaration-merging': 'off',

  // Disallow comparing an enum value with a non-enum value.
  // https://typescript-eslint.io/rules/no-unsafe-enum-comparison/
  'no-unsafe-enum-comparison': 'off',

  // Disallow member access on a value with type any.
  // https://typescript-eslint.io/rules/no-unsafe-member-access/
  'no-unsafe-member-access': 'off',

  // Disallow returning a value with type any from a function.
  // https://typescript-eslint.io/rules/no-unsafe-return/
  'no-unsafe-return': 'off',

  // Disallow unused variables.
  // https://typescript-eslint.io/rules/no-unused-vars/
  // use eslint rule
  'no-unused-vars': 'off',

  // Disallow require statements except in import statements.
  // https://typescript-eslint.io/rules/no-var-requires/
  // repeat with https://typescript-eslint.io/rules/no-require-imports/
  'no-var-requires': 'off',

  // Enforce the use of as const over literal type.
  // https://typescript-eslint.io/rules/prefer-as-const/
  'prefer-as-const': 'error',

  // Disallow async functions which have no await expression.
  // https://typescript-eslint.io/rules/require-await/
  // use eslint rule
  'require-await': 'off',

  // Require both operands of addition to be the same type and be bigint, number, or string.
  // https://typescript-eslint.io/rules/restrict-plus-operands/
  'restrict-plus-operands': [
    'error',
    {
      allowAny:                false,
      allowBoolean:            false,
      allowNullish:            false,
      allowNumberAndString:    false,
      allowRegExp:             false,
      skipCompoundAssignments: false,
    },
  ],

  // Enforce template literal expressions to be of string type.
  // https://typescript-eslint.io/rules/restrict-template-expressions/
  'restrict-template-expressions': [
    'error',
    {
      allowAny:     false,
      allowBoolean: false,
      allowNullish: false,
      allowNumber:  false,
      allowRegExp:  false,
    },
  ],

  // Disallow certain triple slash directives in favor of ES6-style import declarations.
  // https://typescript-eslint.io/rules/triple-slash-reference/
  'triple-slash-reference': [
    'error',
    {
      path:  'never',
      types: 'always',
      lib:   'always',
    },
  ],

  // Enforce unbound methods are called with their expected scope.
  // https://typescript-eslint.io/rules/unbound-method/
  'unbound-method': 'off',
};

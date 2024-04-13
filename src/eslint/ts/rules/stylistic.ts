// @see https://typescript-eslint.io/rules/?=stylistic

export default {
  // Require that function overload signatures be consecutive.
  // https://typescript-eslint.io/rules/adjacent-overload-signatures
  'adjacent-overload-signatures': 'error',

  // Require consistently using either T[] or Array<T> for arrays.
  // https://typescript-eslint.io/rules/array-type
  'array-type': 'off',

  // Disallow // tslint:<rule-flag> comments.
  // https://typescript-eslint.io/rules/ban-tslint-comment/
  'ban-tslint-comment': 'off',

  // Enforce that literals on classes are exposed in a consistent style.
  // https://typescript-eslint.io/rules/class-literal-property-style/
  'class-literal-property-style': ['error', 'fields'],

  // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
  // https://typescript-eslint.io/rules/consistent-generic-constructors/
  'consistent-generic-constructors': ['error', 'constructor'],

  // Require or disallow the Record type.
  // https://typescript-eslint.io/rules/consistent-indexed-object-style/
  'consistent-indexed-object-style': ['error', 'record'],

  // Enforce consistent usage of type assertions.
  // https://typescript-eslint.io/rules/consistent-type-assertions/
  'consistent-type-assertions': [
    'error',
    {
      assertionStyle:              'as',
      objectLiteralTypeAssertions: 'never',
    },
  ],

  // Enforce type definitions to consistently use either interface or type.
  // https://typescript-eslint.io/rules/consistent-type-definitions/
  'consistent-type-definitions': ['error', 'interface'],

  // Enforce dot notation whenever possible.
  // https://typescript-eslint.io/rules/dot-notation/
  // use eslint rule
  'dot-notation': ['off'],

  // Disallow non-null assertion in locations that may be confusing.
  // https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
  'no-confusing-non-null-assertion': 'off',

  // Disallow empty functions.
  // https://typescript-eslint.io/rules/no-empty-function/
  // use eslint rule
  'no-empty-function': 'off',

  // Disallow the declaration of empty interfaces.
  // https://typescript-eslint.io/rules/no-empty-interface/
  'no-empty-interface': 'error',

  // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
  // https://typescript-eslint.io/rules/no-inferrable-types/
  'no-inferrable-types': 'error',

  // Enforce non-null assertions over explicit type casts.
  // https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
  'non-nullable-type-assertion-style': 'off',

  // Enforce the use of for-of loop over the standard for loop where possible.
  // https://typescript-eslint.io/rules/prefer-for-of/
  'prefer-for-of': 'error',

  // Enforce using function types instead of interfaces with call signatures.
  // https://typescript-eslint.io/rules/prefer-function-type/
  'prefer-function-type': 'error',

  // Enforce using the nullish coalescing operator instead of logical assignments or chaining.
  // https://typescript-eslint.io/rules/prefer-nullish-coalescing
  'prefer-nullish-coalescing': 'error',

  // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
  // https://typescript-eslint.io/rules/prefer-optional-chain/
  'prefer-optional-chain': 'error',

  // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings.
  // https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
  'prefer-string-starts-ends-with': 'error',
};

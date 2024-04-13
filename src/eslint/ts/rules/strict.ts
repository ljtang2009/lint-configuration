// @see https://typescript-eslint.io/rules/?=xrecommended-strict

export default {
  // Disallow using the delete operator on array values.
  // https://typescript-eslint.io/rules/no-array-delete/
  'no-array-delete': 'error',

  // Require expressions of type void to appear in statement position.
  // https://typescript-eslint.io/rules/no-confusing-void-expression/
  'no-confusing-void-expression': 'off',

  // Disallow using the delete operator on computed key expressions.
  // https://typescript-eslint.io/rules/no-dynamic-delete/
  'no-dynamic-delete': 'off',

  // Disallow classes used as namespaces.
  // https://typescript-eslint.io/rules/no-extraneous-class/
  'no-extraneous-class': 'off',

  // Disallow void type outside of generic or return types.
  // https://typescript-eslint.io/rules/no-invalid-void-type/
  'no-invalid-void-type': 'error',

  // Disallow the void operator except when used to discard a value.
  // https://typescript-eslint.io/rules/no-meaningless-void-operator/
  'no-meaningless-void-operator': 'error',

  // Disallow enums from having both number and string members.
  // https://typescript-eslint.io/rules/no-mixed-enums/
  'no-mixed-enums': 'error',

  // Disallow non-null assertions in the left operand of a nullish coalescing operator.
  // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing/
  'no-non-null-asserted-nullish-coalescing': 'error',

  // Disallow non-null assertions using the ! postfix operator.
  // https://typescript-eslint.io/rules/no-non-null-assertion/
  'no-non-null-assertion': 'off',

  // Disallow throwing literals as exceptions.
  // https://typescript-eslint.io/rules/no-throw-literal/
  'no-throw-literal': 'off',

  // Disallow unnecessary equality comparisons against boolean literals.
  // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
  'no-unnecessary-boolean-literal-compare': 'off',

  // Disallow conditionals where the type is always truthy or always falsy.
  // https://typescript-eslint.io/rules/no-unnecessary-condition/
  'no-unnecessary-condition': 'off',

  // Disallow type arguments that are equal to the default.
  // https://typescript-eslint.io/rules/no-unnecessary-type-arguments/
  'no-unnecessary-type-arguments': 'off',

  // Disallow unnecessary constructors.
  // https://typescript-eslint.io/rules/no-useless-constructor/
  // use eslint rule
  'no-useless-constructor': 'off',

  // Disallow unnecessary template literals.
  // https://typescript-eslint.io/rules/no-useless-template-literals/
  'no-useless-template-literals': 'error',

  // Enforce includes method over indexOf method.
  // https://typescript-eslint.io/rules/prefer-includes/
  'prefer-includes': 'error',

  // Require all enum members to be literal values.
  // https://typescript-eslint.io/rules/prefer-literal-enum-member/
  'prefer-literal-enum-member': 'error',

  // Require using namespace keyword over module keyword to declare custom TypeScript modules.
  // https://typescript-eslint.io/rules/prefer-namespace-keyword/
  'prefer-namespace-keyword': 'error',

  // Require using Error objects as Promise rejection reasons.
  // https://typescript-eslint.io/rules/prefer-promise-reject-errors/
  // use eslint rule
  'prefer-promise-reject-errors': 'off',

  // Enforce using type parameter when calling Array#reduce instead of casting.
  // https://typescript-eslint.io/rules/prefer-reduce-type-parameter/
  'prefer-reduce-type-parameter': 'off',

  // Enforce that this is used when only this type is returned.
  // https://typescript-eslint.io/rules/prefer-return-this-type/
  'prefer-return-this-type': 'off',

  // Enforce using @ts-expect-error over @ts-ignore.
  // https://typescript-eslint.io/rules/prefer-ts-expect-error/
  'prefer-ts-expect-error': 'error',

  // Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
  // https://typescript-eslint.io/rules/unified-signatures/
  'unified-signatures': ['error', { ignoreDifferentlyNamedParameters: false }],
};

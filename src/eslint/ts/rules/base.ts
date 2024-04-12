// @see https://typescript-eslint.io/rules/?=xrecommended-xstrict-xstylistic

export default {
  // Enforce that class methods utilize this.
  // https://typescript-eslint.io/rules/class-methods-use-this
  // use eslint rule
  'class-methods-use-this': 'off',

  // Require return statements to either always or never specify values.
  // https://typescript-eslint.io/rules/consistent-return/
  // TODO emit error: Could not find "consistent-return" in plugin "@typescript-eslint", so disable this rule
  // 'consistent-return': 'error',

  // Enforce consistent usage of type exports.
  // https://typescript-eslint.io/rules/consistent-type-exports/
  'consistent-type-exports': 'off',

  // Enforce consistent usage of type imports.
  // https://typescript-eslint.io/rules/consistent-type-imports/
  'consistent-type-imports': [
    'error',
    {
      fixStyle: 'separate-type-imports',
    },
  ],

  // Enforce default parameters to be last.
  // https://typescript-eslint.io/rules/default-param-last/
  // use eslint rule
  'default-param-last': 'off',

  // Require explicit return types on functions and class methods.
  // https://typescript-eslint.io/rules/
  'explicit-function-return-type': 'off',

  // Require explicit accessibility modifiers on class properties and methods.
  // https://typescript-eslint.io/rules/explicit-member-accessibility
  'explicit-member-accessibility': 'error',

  // Require explicit return and argument types on exported functions' and classes' public class methods.
  // https://typescript-eslint.io/rules/explicit-module-boundary-types/
  'explicit-module-boundary-types': 'off',

  // Require or disallow initialization in variable declarations.
  // https://typescript-eslint.io/rules/init-declarations/
  // use eslint rule
  'init-declarations': 'off',

  // Enforce a maximum number of parameters in function definitions.
  // https://typescript-eslint.io/rules/max-params/
  // use eslint rule
  'max-params': 'off',

  // member-ordering
  // https://typescript-eslint.io/rules/member-ordering/
  // priority：
  // 0. signature
  // 1. static > instance > decorated > abstract
  // 2. field > constructor > get > set > method
  // 3. public > protected > private > #private
  // 4. not readonly > readonly
  // 5. bottom of all
  'member-ordering': [
    'error',
    {
      default: [
        // #region signature
        'signature',
        'call-signature',
        'readonly-signature',
        // #endregion

        // #region static
        // Fields
        'public-static-field',
        'public-static-readonly-field',
        'protected-static-readonly-field',
        'protected-static-field',
        'private-static-field',
        'private-static-readonly-field',
        '#private-static-field',
        '#private-static-readonly-field',
        'static-field',
        'static-readonly-field',

        'static-initialization',

        // Getters
        'public-static-get',
        'protected-static-get',
        'private-static-get',
        '#private-static-get',
        'static-get',

        // Setters
        'public-static-set',
        'protected-static-set',
        'private-static-set',
        '#private-static-set',
        'static-set',

        // Methods
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        '#private-static-method',
        'static-method',
        // #endregion

        // #region instance
        // Fields
        'public-instance-field',
        'public-instance-readonly-field',
        'protected-instance-field',
        'protected-instance-readonly-field',
        'private-instance-field',
        'private-instance-readonly-field',
        '#private-instance-field',
        '#private-instance-readonly-field',
        'instance-field',
        'instance-readonly-field',

        // Constructors
        'public-constructor',
        'protected-constructor',
        'private-constructor',
        'constructor',

        // Getters
        'public-instance-get',
        'protected-instance-get',
        'private-instance-get',
        '#private-instance-get',
        'instance-get',

        // Setters
        'public-instance-set',
        'protected-instance-set',
        'private-instance-set',
        '#private-instance-set',
        'instance-set',

        // Methods
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
        '#private-instance-method',
        'instance-method',
        // #endregion

        // #region decorated
        // Fields
        'public-decorated-field',
        'public-decorated-readonly-field',
        'protected-decorated-field',
        'protected-decorated-readonly-field',
        'private-decorated-field',
        'private-decorated-readonly-field',
        'decorated-field',
        'decorated-readonly-field',

        // Getters
        'public-decorated-get',
        'protected-decorated-get',
        'private-decorated-get',
        'decorated-get',

        // Setters
        'public-decorated-set',
        'protected-decorated-set',
        'private-decorated-set',
        'decorated-set',

        // Methods
        'public-decorated-method',
        'protected-decorated-method',
        'private-decorated-method',
        'decorated-method',
        // #endregion

        // #region abstract
        // Fields
        'public-abstract-field',
        'public-abstract-readonly-field',
        'protected-abstract-field',
        'protected-abstract-readonly-field',
        'abstract-field',
        'abstract-readonly-field',

        // Getters
        'public-abstract-get',
        'protected-abstract-get',
        'abstract-get',

        // Setters
        'public-abstract-set',
        'protected-abstract-set',
        'abstract-set',

        // Methods
        'public-abstract-method',
        'protected-abstract-method',
        'abstract-method',
        // #endregion

        // #region bottom of all
        'field',
        'get',
        'set',
        'method',
        // #endregion
      ],
    },
  ],

  // Enforce using a particular method signature syntax.
  // https://typescript-eslint.io/rules/method-signature-style/
  'method-signature-style': ['error', 'property'],

  // Enforce naming conventions for everything across a codebase.
  // https://typescript-eslint.io/rules/naming-convention/#format
  'naming-convention': 'off',

  // Disallow duplicate class members.
  // https://typescript-eslint.io/rules/no-dupe-class-members/
  // use eslint rule
  'no-dupe-class-members': 'off',

  // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
  // https://typescript-eslint.io/rules/no-import-type-side-effects/
  'no-import-type-side-effects': 'error',

  // Disallow this keywords outside of classes or class-like objects.
  // https://typescript-eslint.io/rules/no-invalid-this/
  // use eslint rule
  'no-invalid-this': 'off',

  // Disallow function declarations that contain unsafe references inside loop statements.
  // https://typescript-eslint.io/rules/no-loop-func/
  // use eslint rule
  'no-loop-func': 'off',

  // Disallow magic numbers.
  // https://typescript-eslint.io/rules/no-magic-numbers/
  // use eslint rule
  'no-magic-numbers': 'off',

  // Disallow variable redeclaration.
  // https://typescript-eslint.io/rules/no-redeclare/
  // use eslint rule
  'no-redeclare': 'off',

  // Prefer the newer ES6-style imports over require().
  // https://typescript-eslint.io/rules/no-require-imports/
  'no-require-imports': ['error', { allow: ['/package\\.json$'] }],

  // Disallow specified modules when loaded by import.
  // https://typescript-eslint.io/rules/no-restricted-imports/
  // use eslint rule
  'no-restricted-imports': 'off',

  // Disallow variable declarations from shadowing variables declared in the outer scope.
  // https://typescript-eslint.io/rules/no-shadow/
  'no-shadow': 'off',

  // Disallow unnecessary namespace qualifiers.
  // https://typescript-eslint.io/rules/no-unnecessary-qualifier/
  'no-unnecessary-qualifier': 'off',

  // Require unary negation to take a number.
  // https://typescript-eslint.io/rules/no-unsafe-unary-minus/
  'no-unsafe-unary-minus': 'error',

  // Disallow unused expressions.
  // https://typescript-eslint.io/rules/no-unused-expressions/
  // use eslint rule
  'no-unused-expressions': 'off',

  // Disallow the use of variables before they are defined.
  // https://typescript-eslint.io/rules/no-use-before-define/
  'no-use-before-define': [
    'error',
    {
      enums:                true,
      typedefs:             true,
      ignoreTypeReferences: false,
    },
  ],

  // Disallow empty exports that don't change anything in a module file.
  // https://typescript-eslint.io/rules/no-useless-empty-export/
  'no-useless-empty-export': 'error',

  // Require or disallow parameter properties in class constructors.
  // https://typescript-eslint.io/rules/parameter-properties/
  'parameter-properties': 'off',

  // Require destructuring from arrays and/or objects.
  // https://typescript-eslint.io/rules/prefer-destructuring/#enforcefordeclarationwithtypeannotation
  // use eslint rule
  'prefer-destructuring': 'off',

  // Require each enum member value to be explicitly initialized.
  // https://typescript-eslint.io/rules/prefer-enum-initializers/
  'prefer-enum-initializers': 'off',

  // Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.
  // https://typescript-eslint.io/rules/prefer-find/
  'prefer-find': 'off',

  // Require private members to be marked as readonly if they're never modified outside of the constructor.
  // https://typescript-eslint.io/rules/prefer-readonly/
  'prefer-readonly': 'off',

  // Require function parameters to be typed as readonly to prevent accidental mutation of inputs.
  // https://typescript-eslint.io/rules/prefer-readonly-parameter-types/
  'prefer-readonly-parameter-types': 'off',

  // Enforce RegExp#exec over String#match if no global flag is provided.
  // https://typescript-eslint.io/rules/prefer-regexp-exec/
  'prefer-regexp-exec': 'off',

  // Require any function or method that returns a Promise to be marked async.
  // https://typescript-eslint.io/rules/promise-function-async/
  'promise-function-async': 'off',

  // Require Array#sort and Array#toSorted calls to always provide a compareFunction.
  // https://typescript-eslint.io/rules/require-array-sort-compare/
  'require-array-sort-compare': ['error', { ignoreStringArrays: true }],

  // Enforce consistent returning of awaited values.
  // https://typescript-eslint.io/rules/return-await
  'return-await': 'off',

  // Enforce constituents of a type union/intersection to be sorted alphabetically.
  // https://typescript-eslint.io/rules/sort-type-constituents/
  'sort-type-constituents': 'off',

  'strict-boolean-expressions': [
    'error',
    {
      allowString:                                            false,
      allowNumber:                                            false,
      allowNullableObject:                                    false,
      allowNullableBoolean:                                   false,
      allowNullableString:                                    false,
      allowNullableNumber:                                    false,
      allowNullableEnum:                                      false,
      allowAny:                                               false,
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    },
  ],

  // Require switch-case statements to be exhaustive.
  // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
  'switch-exhaustiveness-check': 'off',

  // Require type annotations in certain places.
  // https://typescript-eslint.io/rules/typedef/
  typedef: [
    'error',
    {
      arrayDestructuring:                false,
      arrowParameter:                    false,
      memberVariableDeclaration:         false,
      objectDestructuring:               false,
      parameter:                         false,
      propertyDeclaration:               true,
      variableDeclaration:               false,
      variableDeclarationIgnoreFunction: false,
    },
  ],
};

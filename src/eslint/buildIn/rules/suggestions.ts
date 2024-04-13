import confusingBrowserGlobals from 'confusing-browser-globals';

export default {
  // enforces getter/setter pairs in objects
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'off',

  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: true,
    },
  ],

  // treat var statements as if they were block scoped
  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  // require camel case names
  // https://eslint.org/docs/latest/rules/camelcase
  camelcase: [
    'error',
    {
      properties:          'always',
      ignoreDestructuring: false,
      ignoreImports:       false,
      ignoreGlobals:       false,
    },
  ],

  // enforce or disallow capitalization of the first letter of a comment
  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': ['off'],

  // enforce that class methods use "this"
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': [
    'error',
    {
      exceptMethods:         [],
      enforceForClassFields: true,
    },
  ],

  // specify the maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  complexity: ['error', 20],

  // require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],

  // enforces consistent naming when capturing the current execution context
  // https://eslint.org/docs/latest/rules/consistent-this
  'consistent-this': 'off',

  // specify curly brace conventions for all control statements
  // https://eslint.org/docs/rules/curly
  curly: ['error', 'multi-line', 'consistent'], // multiline

  // require default case in switch statements
  // https://eslint.org/docs/rules/default-case
  'default-case': ['error', { commentPattern: '^no default$' }],

  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': 'error',

  // Enforce default parameters to be last
  // https://eslint.org/docs/rules/default-param-last
  'default-param-last': 'error',

  // encourages use of dot notation whenever possible
  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': ['error', { allowKeywords: true }],

  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // requires function names to match the name of the variable or property to which they are
  // assigned
  // https://eslint.org/docs/rules/func-name-matching
  'func-name-matching': ['off'],

  // require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  'func-names': ['error', 'as-needed'],

  // enforces use of function declarations or expressions
  // https://eslint.org/docs/rules/func-style
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],

  // make sure for-in loops have an if statement
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  // disallow specified identifiers
  // https://eslint.org/docs/rules/id-denylist
  'id-denylist': 'off',

  // this option enforces minimum and maximum identifier lengths
  // https://eslint.org/docs/latest/rules/id-length
  'id-length': 'off',

  // require identifiers to match the provided regular expression
  // https://eslint.org/docs/latest/rules/id-match
  'id-match': ['off'],

  // enforce or disallow variable initializations at definition
  // https://eslint.org/docs/latest/rules/init-declarations
  'init-declarations': 'off',

  // Require or disallow logical assignment operator shorthand
  // https://eslint.org/docs/latest/rules/logical-assignment-operators
  'logical-assignment-operators': [
    'error',
    'always',
    { enforceForIfStatements: true },
  ],

  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // specify the maximum depth that blocks can be nested
  // https://eslint.org/docs/latest/rules/max-depth
  'max-depth': ['off'],

  // specify the max number of lines in a file
  // https://eslint.org/docs/rules/max-lines
  'max-lines': ['off'],

  // enforce a maximum function length
  // https://eslint.org/docs/rules/max-lines-per-function
  'max-lines-per-function': ['off'],

  // specify the maximum depth callbacks can be nested
  // https://eslint.org/docs/latest/rules/max-nested-callbacks
  'max-nested-callbacks': 'off',

  // limits the number of parameters that can be used in the function declaration.
  // https://eslint.org/docs/latest/rules/max-params
  'max-params': ['error', 3],

  // specify the maximum number of statement allowed in a function
  // https://eslint.org/docs/latest/rules/max-statements
  'max-statements': ['off'],

  // enforce a particular style for multiline comments
  // https://eslint.org/docs/rules/multiline-comment-style
  'multiline-comment-style': ['off'],

  // require a capital letter for constructors
  // https://eslint.org/docs/latest/rules/new-cap
  'new-cap': ['off'],

  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'error',

  // disallow use of the Array constructor
  // https://eslint.org/docs/latest/rules/no-array-constructor
  'no-array-constructor': 'error',

  // disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',

  // disallow use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // disallow lexical declarations in case/default clauses
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // disallow use of console
  // https://eslint.org/docs/latest/rules/no-console
  'no-console': 'error',

  // disallow use of the continue statement
  // https://eslint.org/docs/rules/no-continue
  'no-continue': 'error',

  // disallow deletion of variables
  // https://eslint.org/docs/latest/rules/no-delete-var
  'no-delete-var': 'error',

  // disallow division operators explicitly at beginning of regular expression
  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // disallow else after a return in an if
  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: false }],

  // disallow empty statements
  // https://eslint.org/docs/rules/no-else-return
  'no-empty': ['error', { allowEmptyCatch: false }],

  // disallow empty functions, except for standalone funcs/arrows
  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': [
    'error',
    {
      allow: [
        'functions',
        'arrowFunctions',
        'asyncFunctions',
        'generatorFunctions',
        'methods',
        'asyncMethods',
        'generatorMethods',
      ],
    },
  ],

  // Disallow empty static blocks
  // https://eslint.org/docs/latest/rules/no-empty-static-block
  'no-empty-static-block': 'error',

  // disallow comparisons to null without a type-checking operator
  // https://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'off',

  // disallow use of eval()
  // https://eslint.org/docs/rules/no-eval
  'no-eval': 'error',

  // disallow adding to native types
  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': 'error',

  // disallow unnecessary function binding
  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',

  // disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],

  // disallow Unnecessary Labels
  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',

  // disallow reassignments of native objects or read-only globals
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': ['error', { exceptions: [] }],

  // disallow implicit type conversions
  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],

  // disallow var and named functions in global scope
  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'off',

  // disallow use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',

  // disallow comments inline after code
  // https://eslint.org/docs/latest/rules/no-inline-comments
  'no-inline-comments': 'off',

  // disallow this keywords outside of classes or class-like objects
  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'off',

  // disallow usage of __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',

  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // disallow use of labels for anything other than loops and switches
  // https://eslint.org/docs/rules/no-labels
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

  // disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': 'error',

  // disallow if as the only statement in an else block
  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'error',

  // disallow creation of functions within loops
  // https://eslint.org/docs/rules/no-loop-func
  'no-loop-func': 'error',

  // disallow magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  'no-magic-numbers': ['off'],

  // disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  'no-multi-assign': ['error'],

  // disallow use of multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  'no-multi-str': 'error',

  // disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'off',

  // disallow nested ternary expressions
  // https://eslint.org/docs/latest/rules/no-nested-ternary
  'no-nested-ternary': 'error',

  // disallow use of new operator when not part of the assignment or comparison
  // https://eslint.org/docs/rules/no-new
  'no-new': 'error',

  // disallow use of new operator for Function object
  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',

  // disallows creating new instances of String, Number, and Boolean
  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',

  // Disallow \8 and \9 escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  'no-nonoctal-decimal-escape': 'error',

  // Disallow calls to the Object constructor without an argument
  // https://eslint.org/docs/latest/rules/no-object-constructor
  'no-object-constructor': 'off',

  // disallow use of (old style) octal literals
  // https://eslint.org/docs/rules/no-octal
  'no-octal': 'error',

  // disallow use of octal escape sequences in string literals, such as
  // https://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': 'error',

  // disallow reassignment of function parameters
  // disallow parameter object manipulation except for specific exclusions
  // rule: https://eslint.org/docs/rules/no-param-reassign.html
  'no-param-reassign': [
    'error',
    {
      props:                          true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.return value
        'ctx', // for Koa routing
        'context', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
      ],
    },
  ],

  // disallow use of unary operators, ++ and --
  // https://eslint.org/docs/rules/no-plusplusÍ
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

  // disallow usage of __proto__ property
  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',

  // disallow declaring the same variable more than once
  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',

  // disallow multiple spaces in a regular expression literal
  // https://eslint.org/docs/latest/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // Disallow specified names in exports
  // https://eslint.org/docs/rules/no-restricted-exports
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: [
        'default', // use `export default` to provide a default export
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    },
  ],

  // disallow specific globals
  // https://eslint.org/docs/latest/rules/no-restricted-globals
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message:
        'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message:
        'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
  ].concat(confusingBrowserGlobals),

  // disallow specific imports
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': [
    'off',
    {
      paths:    [],
      patterns: [],
    },
  ],

  // disallow certain object properties
  // https://eslint.org/docs/rules/no-restricted-properties
  'no-restricted-properties': [
    'error',
    {
      object:   'arguments',
      property: 'callee',
      message:  'arguments.callee is deprecated',
    },
    {
      object:   'global',
      property: 'isFinite',
      message:  'Please use Number.isFinite instead',
    },
    {
      object:   'self',
      property: 'isFinite',
      message:  'Please use Number.isFinite instead',
    },
    {
      object:   'window',
      property: 'isFinite',
      message:  'Please use Number.isFinite instead',
    },
    {
      object:   'global',
      property: 'isNaN',
      message:  'Please use Number.isNaN instead',
    },
    {
      object:   'self',
      property: 'isNaN',
      message:  'Please use Number.isNaN instead',
    },
    {
      object:   'window',
      property: 'isNaN',
      message:  'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message:  'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message:  'Please use Object.defineProperty instead.',
    },
    {
      object:   'Math',
      property: 'pow',
      message:  'Use the exponentiation operator (**) instead.',
    },
  ],

  // disallow certain syntax forms
  // https://eslint.org/docs/rules/no-restricted-syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message:
        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  // disallow use of assignment in return statement
  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',

  // disallow use of comma operator
  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',

  // disallow declaration of variables already declared in the outer scope
  // https://eslint.org/docs/latest/rules/no-shadow
  'no-shadow': 'off',

  // disallow shadowing of names such as arguments
  // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': 'error',

  // disallow the use of ternary operators
  // https://eslint.org/docs/latest/rules/no-ternary
  'no-ternary': 'off',

  // restrict what can be thrown as an exception
  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',

  // disallow use of undefined when initializing variables
  // https://eslint.org/docs/latest/rules/no-undef-init
  'no-undef-init': 'error',

  // disallow use of undefined variable
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',

  // disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': [
    'error',
    {
      allow:                ['__dirname'],
      allowAfterThis:       false,
      allowAfterSuper:      false,
      enforceInMethodNames: true,
    },
  ],

  // disallow the use of Boolean literals in conditional expressions
  // also, prefer `a || b` over `a ? a : b`
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // disallow usage of expressions in statement position
  // https://eslint.org/docs/rules/no-unused-expressions
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit:    false,
      allowTernary:         false,
      allowTaggedTemplates: false,
    },
  ],

  // disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'error',

  // disallow unnecessary .call() and .apply()
  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'off',

  // Disallow unnecessary catch clauses
  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'error',

  // disallow useless computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // disallow useless string concatenation
  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',

  // disallow unnecessary constructor
  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',

  // disallow unnecessary string escaping
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

  // disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport:        false,
      ignoreExport:        false,
    },
  ],

  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',

  // require let or const instead of var
  // https://eslint.org/docs/latest/rules/no-var
  'no-var': 'error',

  // disallow use of void operator
  // https://eslint.org/docs/rules/no-void
  'no-void': 'error',

  // disallow usage of configurable warning terms in comments: e.g. todo
  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': ['off'],

  // disallow use of the with statement
  // https://eslint.org/docs/rules/no-with
  'no-with': 'error',

  // require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'properties',
    {
      avoidQuotes: true,
    },
  ],

  // allow just one var statement per function
  // https://eslint.org/docs/latest/rules/one-var
  'one-var': ['error', 'never'],

  // require assignment operator shorthand where possible or prohibit it entirely
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // suggest using arrow functions as callbacks
  // https://eslint.org/docs/latest/rules/prefer-arrow-callback
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis:    true,
    },
  ],

  // suggest using of const declaration for variables that are never modified after declared
  // https://eslint.org/docs/latest/rules/prefer-const
  'prefer-const': [
    'error',
    {
      destructuring:          'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  // Prefer destructuring from arrays and objects
  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array:  false,
        object: true,
      },
      AssignmentExpression: {
        array:  true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  // Disallow the use of Math.pow in favor of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',

  // Suggest using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'off',

  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
  // https://eslint.org/docs/latest/rules/prefer-object-has-own
  'prefer-object-has-own': 'off',

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'error',

  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // Disallow use of the RegExp constructor in favor of regular expression literals
  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // require use of the second argument for parseInt()
  // https://eslint.org/docs/rules/radix
  radix: 'error',

  // require `await` in `async function` (note: this is a horrible rule that should never be used)
  // https://eslint.org/docs/rules/require-await
  'require-await': 'off',

  // Enforce the use of u flag on RegExp
  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': 'off',

  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',

  // import sorting
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': ['off'],

  // requires object keys to be sorted
  // https://eslint.org/docs/latest/rules/sort-keys
  'sort-keys': ['off'],

  // sort variables within the same declaration block
  // https://eslint.org/docs/latest/rules/sort-vars
  'sort-vars': 'off',

  // babel inserts `'use strict';` for us
  // https://eslint.org/docs/latest/rules/strict
  strict: ['error', 'never'],

  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  'symbol-description': 'error',

  // requires to declare all vars on top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'error',

  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  yoda: 'error',
};

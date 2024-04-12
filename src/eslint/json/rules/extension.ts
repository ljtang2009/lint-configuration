export default {
  // enforce line breaks after opening and before closing array brackets
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html
  'array-bracket-newline': ['error',
                            {
                              multiline: true,
                              minItems:  null,
                            }],

  // disallow or enforce spaces inside of brackets
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html
  'array-bracket-spacing': ['error', 'never'],

  // enforce line breaks between array elements
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html
  'array-element-newline': ['error', 'consistent'],

  // require or disallow trailing commas
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html
  'comma-dangle': ['error', 'never'],

  // enforce consistent comma style
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html
  'comma-style': ['error', 'last'],

  // enforce consistent indentation
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
  indent: ['error', 2],

  // enforce consistent spacing between keys and values in object literal properties
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html
  'key-spacing': ['error', {
    beforeColon: false,
    afterColon:  true,
    mode:        'strict',
  }],

  // disallow duplicate keys in object literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html
  'no-dupe-keys': 'error',

  // disallow leading or trailing decimal points in numeric literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html
  'no-floating-decimal': 'error',

  // disallow irregular whitespace
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html
  'no-irregular-whitespace': 'error',

  // disallow multiline strings
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html
  'no-multi-str': 'error',

  // disallow octal escape sequences in string literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html
  'no-octal-escape': 'error',

  // disallow legacy octal literals
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html
  'no-octal': 'error',

  // disallow sparse arrays
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html
  'no-sparse-arrays': 'error',

  // disallow unnecessary escape usage
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html
  'no-useless-escape': 'error',

  // enforce consistent line breaks inside braces
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html
  'object-curly-newline': ['error',
                           {
                             consistent: true,
                           }],

  // enforce consistent spacing inside braces
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html
  'object-curly-spacing': ['error', 'always'],

  // enforce placing object properties on separate lines
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

  // require quotes around object literal property names
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html
  'quote-props': ['error', 'always'],

  // enforce use of double or single quotes
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html
  quotes: ['error', 'double', { avoidEscape: false }],

  // disallow spaces after unary operators
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html
  'space-unary-ops': 'error',
};

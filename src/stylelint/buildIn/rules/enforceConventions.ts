// @see https://stylelint.io/user-guide/rules#enforce-conventions

export default {
  // #region Allowed, disallowed & required

  // Specify a list of allowed at-rules.
  // https://stylelint.io/user-guide/rules#enforce-conventions
  // 'at-rule-allowed-list': null,

  // Specify a list of disallowed at-rules.
  // https://stylelint.io/user-guide/rules/at-rule-disallowed-list/
  // 'at-rule-disallowed-list': null,

  // Disallow vendor prefixes for at-rules.
  // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
  'at-rule-no-vendor-prefix': true,

  // Specify a list of required properties for an at-rule.
  // https://stylelint.io/user-guide/rules/at-rule-property-required-list/
  // 'at-rule-property-required-list': null,

  // Require or disallow alpha channel for hex colors.
  // https://stylelint.io/user-guide/rules/color-hex-alpha/
  // 'color-hex-alpha': null,

  // Require (where possible) or disallow named colors.
  // https://stylelint.io/user-guide/rules/color-named/
  'color-named': ['never'],

  // Disallow hex colors.
  // https://stylelint.io/user-guide/rules/color-no-hex/
  // 'color-no-hex': null,

  // Specify a list of disallowed words within comments.
  // https://stylelint.io/user-guide/rules/comment-word-disallowed-list/
  // 'comment-word-disallowed-list': null,

  // Disallow !important within declarations.
  // https://stylelint.io/user-guide/rules/declaration-no-important/
  'declaration-no-important': true,

  // Specify a list of allowed property and unit pairs within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list/
  // 'declaration-property-unit-allowed-list': null,

  // Specify a list of disallowed property and unit pairs within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list/
  // 'declaration-property-unit-disallowed-list': null,

  // Specify a list of allowed property and value pairs within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list/
  // 'declaration-property-value-allowed-list': null,

  // Specify a list of disallowed property and value pairs within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list/
  // 'declaration-property-value-disallowed-list': null,

  // Specify a list of allowed functions.
  // https://stylelint.io/user-guide/rules/function-allowed-list/
  // 'function-allowed-list': null,

  // Specify a list of disallowed functions.
  // https://stylelint.io/user-guide/rules/function-disallowed-list/
  // 'function-disallowed-list': null,

  // Disallow scheme-relative urls.
  // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/
  'function-url-no-scheme-relative': true,

  // Specify a list of allowed URL schemes.
  // https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list/
  // 'function-url-scheme-allowed-list': null,

  // Specify a list of disallowed URL schemes.
  // https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list/
  // 'function-url-scheme-disallowed-list': null,

  // Disallow units for zero lengths.
  // https://stylelint.io/user-guide/rules/length-zero-no-unit/
  'length-zero-no-unit': true,

  // Specify a list of allowed media feature names.
  // https://stylelint.io/user-guide/rules/media-feature-name-allowed-list/
  // 'media-feature-name-allowed-list': null,

  // Specify a list of disallowed media feature names.
  // https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list/
  // 'media-feature-name-disallowed-list': null,

  // Disallow vendor prefixes for media feature names.
  // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
  'media-feature-name-no-vendor-prefix': true,

  // Specify a list of allowed name and unit pairs within media features.
  // https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list/
  // 'media-feature-name-unit-allowed-list': null,

  // Specify a list of allowed media feature name and value pairs.
  // https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list/
  // 'media-feature-name-value-allowed-list': null,

  // Specify a list of allowed properties.
  // https://stylelint.io/user-guide/rules/property-allowed-list/
  // 'property-allowed-list': null,

  // Specify a list of disallowed properties.
  // https://stylelint.io/user-guide/rules/property-disallowed-list/
  // 'property-disallowed-list': null,

  // Disallow vendor prefixes for properties.
  // https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
  'property-no-vendor-prefix': true,

  // Specify a list of disallowed properties for selectors within rules.
  // https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list/
  // 'rule-selector-property-disallowed-list': null,

  // Specify a list of disallowed attribute names.
  // https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list/
  // 'selector-attribute-name-disallowed-list': null,

  // Specify a list of allowed attribute operators.
  // https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list/
  // 'selector-attribute-operator-allowed-list': null,

  // Specify a list of disallowed attribute operators.
  // https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list/
  // 'selector-attribute-operator-disallowed-list': null,

  // Specify a list of allowed combinators.
  // https://stylelint.io/user-guide/rules/selector-combinator-allowed-list/
  // 'selector-combinator-allowed-list': null,

  // Specify a list of disallowed combinators.
  // https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list/
  // 'selector-combinator-disallowed-list': null,

  // Specify a list of disallowed selectors.
  // https://stylelint.io/user-guide/rules/selector-disallowed-list/
  // 'selector-disallowed-list': null,

  // Disallow qualifying a selector by type.
  // https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
  // 'selector-no-qualifying-type': null,

  // Disallow vendor prefixes for selectors.
  // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
  // 'selector-no-vendor-prefix': true,

  // Specify a list of allowed pseudo-class selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list/
  // 'selector-pseudo-class-allowed-list': null,

  // Specify a list of disallowed pseudo-class selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list/
  // 'selector-pseudo-class-disallowed-list': null,

  // Specify a list of allowed pseudo-element selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list/
  // 'selector-pseudo-element-allowed-list': null,

  // Specify a list of disallowed pseudo-element selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list/
  // 'selector-pseudo-element-disallowed-list': null,

  // Specify a list of allowed units.
  // https://stylelint.io/user-guide/rules/unit-allowed-list/
  // 'unit-allowed-list': null,

  // Specify a list of disallowed units.
  // https://stylelint.io/user-guide/rules/unit-disallowed-list/
  // 'unit-disallowed-list': null,

  // Disallow vendor prefixes for values.
  // https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
  // 'value-no-vendor-prefix': true,

  // #endregion

  // #region Case

  // Specify lowercase or uppercase for function names.
  // https://stylelint.io/user-guide/rules/function-name-case/
  'function-name-case': 'lower',

  // Specify lowercase or uppercase for type selectors.
  // https://stylelint.io/user-guide/rules/selector-type-case/
  'selector-type-case': 'lower',

  // Specify lowercase or uppercase for keywords values.
  // https://stylelint.io/user-guide/rules/value-keyword-case/
  'value-keyword-case': ['lower', {
    camelCaseSvgKeywords: true,
  }],

  // #endregion

  // #region Empty lines

  // Require or disallow an empty line before at-rules.
  // https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
  'at-rule-empty-line-before': ['always', {
    except: ['after-same-name', 'blockless-after-same-name-blockless', 'blockless-after-blockless'],
    ignore: ['after-comment', 'first-nested', 'inside-block'],
  }],

  // Require or disallow an empty line before comments.
  // https://stylelint.io/user-guide/rules/comment-empty-line-before/#except-first-nested
  // 'comment-empty-line-before': null,

  // Require or disallow an empty line before custom properties.
  // https://stylelint.io/user-guide/rules/custom-property-empty-line-before/
  // 'custom-property-empty-line-before': null,

  // Require or disallow an empty line before declarations.
  // https://stylelint.io/user-guide/rules/declaration-empty-line-before/
  // 'declaration-empty-line-before': null,

  // Require or disallow an empty line before rules.
  // https://stylelint.io/user-guide/rules/rule-empty-line-before/
  // 'rule-empty-line-before': null,

  // #endregion

  // #region Max & min

  // Limit the number of declarations within a single-line declaration block.
  // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
  'declaration-block-single-line-max-declarations': 1,

  // Limit the number of values for a list of properties within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-max-values/
  // 'declaration-property-max-values': null,

  // Limit the depth of nesting.
  // https://stylelint.io/user-guide/rules/max-nesting-depth/
  // 'max-nesting-depth': null,

  // Limit the number of decimal places allowed in numbers.
  // https://stylelint.io/user-guide/rules/number-max-precision/#insidefunctions-regex-int-regex-int-string-int
  // 'number-max-precision': 3,

  // Limit the number of attribute selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-attribute/
  // 'selector-max-attribute': null,

  // Limit the number of classes in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-class/
  // 'selector-max-class': null,

  // Limit the number of combinators in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-combinators/
  // 'selector-max-combinators': null,

  // Limit the number of compound selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
  // 'selector-max-compound-selectors': null,

  // Limit the number of ID selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-id/
  // 'selector-max-id': null,

  // Limit the number of pseudo-classes in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-pseudo-class/
  // 'selector-max-pseudo-class': null,

  // Limit the specificity of selectors.
  // https://stylelint.io/user-guide/rules/selector-max-specificity/
  // 'selector-max-specificity': null,

  // Limit the number of type selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-type/
  // 'selector-max-type': null,

  // Limit the number of universal selectors in a selector.
  // https://stylelint.io/user-guide/rules/selector-max-universal/
  // 'selector-max-universal': null,

  // Limit the minimum number of milliseconds for time values.
  // https://stylelint.io/user-guide/rules/time-min-milliseconds/
  // 'time-min-milliseconds': null,

  // #endregion

  // #region Notation

  // Specify percentage or number notation for alpha-values.
  // https://stylelint.io/user-guide/rules/alpha-value-notation/
  'alpha-value-notation': 'number',

  // Specify modern or legacy notation for color-functions.
  // https://stylelint.io/user-guide/rules/color-function-notation/
  // 'color-function-notation': null,

  // Specify short or long notation for hex colors.
  // https://stylelint.io/user-guide/rules/color-hex-length/
  'color-hex-length': 'short',

  // Require numeric or named (where possible) font-weight values.
  // https://stylelint.io/user-guide/rules/font-weight-notation/
  'font-weight-notation': 'numeric',

  // Specify number or angle notation for degree hues.
  // https://stylelint.io/user-guide/rules/hue-degree-notation/
  'hue-degree-notation': 'angle',

  // Specify string or URL notation for @import rules.
  // https://stylelint.io/user-guide/rules/import-notation/
  'import-notation': 'string',

  // Specify keyword or percentage notation for keyframe selectors.
  // https://stylelint.io/user-guide/rules/keyframe-selector-notation/
  'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',

  // Specify number or percentage notation for lightness.
  // https://stylelint.io/user-guide/rules/lightness-notation/
  'lightness-notation': 'number',

  // Specify context or prefix notation for media feature ranges.
  // https://stylelint.io/user-guide/rules/media-feature-range-notation/
  'media-feature-range-notation': 'context',

  // Specify simple or complex notation for :not() pseudo-class selectors.
  // https://stylelint.io/user-guide/rules/selector-not-notation/
  'selector-not-notation': 'complex',

  // Specify single or double colon notation for applicable pseudo-element selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
  'selector-pseudo-element-colon-notation': 'single',
  // #endregion

  // #region Pattern

  // Specify a pattern for comments.
  // https://stylelint.io/user-guide/rules/comment-pattern/
  'comment-pattern': null,

  // Specify a pattern for custom media query names.
  // https://stylelint.io/user-guide/rules/custom-media-pattern/
  'custom-media-pattern': null,

  // custom-property-pattern
  // https://stylelint.io/user-guide/rules/custom-property-pattern/
  'custom-property-pattern': null,

  // Specify a pattern for keyframe names.
  // https://stylelint.io/user-guide/rules/keyframes-name-pattern/
  'keyframes-name-pattern': null,

  // Specify a pattern for class selectors.
  // https://stylelint.io/user-guide/rules/selector-class-pattern/
  'selector-class-pattern': null,

  // Specify a pattern for ID selectors.
  // https://stylelint.io/user-guide/rules/selector-id-pattern/
  'selector-id-pattern': null,

  // Specify a pattern for the selectors of rules nested within rules.
  // https://stylelint.io/user-guide/rules/selector-nested-pattern/
  'selector-nested-pattern': null,
  // #endregion

  // #region Quotes

  // Require or disallow quotes for font family names.
  // https://stylelint.io/user-guide/rules/font-family-name-quotes/#always-where-required
  // 'font-family-name-quotes': null,

  // Require or disallow quotes for urls.
  // https://stylelint.io/user-guide/rules/function-url-quotes/
  'function-url-quotes': 'never',

  // Require or disallow quotes for attribute values.
  // https://stylelint.io/user-guide/rules/selector-attribute-quotes/
  'selector-attribute-quotes': 'always',

  // #endregion

  // #region Redundant

  // Disallow redundant longhand properties within declaration-block.
  // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/#true
  // 'declaration-block-no-redundant-longhand-properties': null,

  // Disallow redundant values within shorthand properties.
  // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
  // 'shorthand-property-no-redundant-values': null,

  // #endregion

  // #region Whitespace inside

  // Require or disallow whitespace on the inside of comment markers.
  // https://stylelint.io/user-guide/rules/comment-whitespace-inside/
  // 'comment-whitespace-inside': 'always',

  // #endregion
};

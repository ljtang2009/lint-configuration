// @see https://stylelint.io/user-guide/rules#avoid-errors

export default {
  // #region Descending

  // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
  // https://stylelint.io/user-guide/rules/no-descending-specificity/
  'no-descending-specificity': true,

  // #endregion

  // #region Duplicate

  // Disallow duplicate custom properties within declaration blocks.
  // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties/
  'declaration-block-no-duplicate-custom-properties': true,

  // Disallow duplicate properties within declaration blocks.
  // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
  'declaration-block-no-duplicate-properties': true,

  // Disallow duplicate names within font families.
  // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/
  'font-family-no-duplicate-names': true,

  // Disallow duplicate selectors within keyframe blocks.
  // https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors/
  'keyframe-block-no-duplicate-selectors': true,

  // no-duplicate-at-import-rules
  // https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/
  'no-duplicate-at-import-rules': true,

  // Disallow duplicate selectors.
  // https://stylelint.io/user-guide/rules/no-duplicate-selectors/
  'no-duplicate-selectors': [true, { disallowInList: false }],

  // #endregion

  // #region Empty

  // Disallow empty blocks.
  // https://stylelint.io/user-guide/rules/block-no-empty/
  'block-no-empty': true,

  // Disallow empty comments.
  // https://stylelint.io/user-guide/rules/comment-no-empty/
  'comment-no-empty': true,

  // Disallow empty sources.
  // https://stylelint.io/user-guide/rules/no-empty-source/
  'no-empty-source': true,

  // #endregion

  // #region Invalid

  // Disallow invalid hex colors.
  // https://stylelint.io/user-guide/rules/color-no-invalid-hex/
  'color-no-invalid-hex': true,

  // Disallow invalid unspaced operator within calc functions.
  // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
  'function-calc-no-unspaced-operator': true,

  // Disallow invalid !important within keyframe declarations.
  // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
  'keyframe-declaration-no-important': true,

  // Disallow invalid media queries.
  // https://stylelint.io/user-guide/rules/media-query-no-invalid/
  'media-query-no-invalid': true,

  // Disallow invalid named grid areas.
  // https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid/
  'named-grid-areas-no-invalid': true,

  // Disallow invalid double-slash comments.
  // https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/
  'no-invalid-double-slash-comments': true,

  // Disallow invalid position @import rules.
  // https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule/
  'no-invalid-position-at-import-rule': true,

  // Disallow invalid newlines within strings.
  // https://stylelint.io/user-guide/rules/string-no-newline/
  'string-no-newline': true,

  // #endregion

  // #region Irregular

  // Disallow irregular whitespaces.
  // https://stylelint.io/user-guide/rules/no-irregular-whitespace/
  'no-irregular-whitespace': true,

  // #endregion

  // #region Missing

  // Disallow missing var function for custom properties.
  // https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function/
  'custom-property-no-missing-var-function': true,

  // Disallow a missing generic family keyword within font families.
  // https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/
  'font-family-no-missing-generic-family-keyword': true,

  // #endregion

  // #region Non-standard

  // Disallow non-standard direction values for linear gradient functions.
  // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
  'function-linear-gradient-no-nonstandard-direction': true,

  // #endregion

  // #region Overrides

  // Disallow shorthand properties that override related longhand properties.
  // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
  'declaration-block-no-shorthand-property-overrides': true,

  // #endregion

  // #region Unmatchable

  // Disallow unmatchable An+B selectors.
  // https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable/
  'selector-anb-no-unmatchable': true,

  // #endregion

  // #region Unknown

  // Disallow unknown annotations.
  // https://stylelint.io/user-guide/rules/annotation-no-unknown/
  'annotation-no-unknown': true,

  // Disallow unknown at-rules.
  // https://stylelint.io/user-guide/rules/at-rule-no-unknown/
  'at-rule-no-unknown': true,

  // Disallow unknown values for properties within declarations.
  // https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown/
  'declaration-property-value-no-unknown': true,

  // Disallow unknown functions.
  // https://stylelint.io/user-guide/rules/function-no-unknown/
  'function-no-unknown': true,

  // Disallow unknown media feature names.
  // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/
  'media-feature-name-no-unknown': true,

  // Disallow unknown values for media features.
  // https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown/
  'media-feature-name-value-no-unknown': true,

  // Disallow unknown animations.
  // https://stylelint.io/user-guide/rules/no-unknown-animations/
  'no-unknown-animations': true,

  // Disallow unknown custom properties.
  // https://stylelint.io/user-guide/rules/no-unknown-custom-properties/
  'no-unknown-custom-properties': true,

  // Disallow unknown properties.
  // https://stylelint.io/user-guide/rules/property-no-unknown/
  'property-no-unknown': true,

  // Disallow unknown pseudo-class selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
  'selector-pseudo-class-no-unknown': true,

  // Disallow unknown pseudo-element selectors.
  // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
  'selector-pseudo-element-no-unknown': true,

  // Disallow unknown type selectors.
  // https://stylelint.io/user-guide/rules/selector-type-no-unknown/
  'selector-type-no-unknown': true,

  // Disallow unknown units.
  // https://stylelint.io/user-guide/rules/unit-no-unknown/
  'unit-no-unknown': true,

  // #endregion
};

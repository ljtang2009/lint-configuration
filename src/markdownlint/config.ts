/* eslint-disable camelcase */

export default {
// Default state for all rules
  default: true,

  // Path to configuration file to extend
  extends: null,

  // heading-increment - Heading levels should only increment by one level at a time
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md
  MD001: true,

  // heading-style - Heading style
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md003.md
  MD003: {
  // Heading style
    style: 'consistent',
  },

  // ul-style - Unordered list style
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md004.md
  MD004: {
  // List style
    style: 'consistent',
  },

  // list-indent - Inconsistent indentation for list items at the same level
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md005.md
  MD005: true,

  // ul-indent - Unordered list indentation
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md007.md
  MD007: {
  // Spaces for indent
    indent:         2,
    // Whether to indent the first level of the list
    start_indented: false,
    // Spaces for first level indent (when start_indented is set)
    start_indent:   2,
  },

  // no-trailing-spaces - Trailing spaces
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md009.md
  MD009: {
  // Spaces for line break
    br_spaces:             2,
    // Allow spaces for empty lines in list items
    list_item_empty_lines: false,
    // Include unnecessary breaks
    strict:                false,
  },

  // no-hard-tabs - Hard tabs
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md010.md
  MD010: {
  // Include code blocks
    code_blocks:           true,
    // Fenced code languages to ignore
    ignore_code_languages: [],
    // Number of spaces for each hard tab
    spaces_per_tab:        1,
  },

  // no-reversed-links - Reversed link syntax
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md011.md
  MD011: true,

  // no-multiple-blanks - Multiple consecutive blank lines
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md012.md
  MD012: {
  // Consecutive blank lines
    maximum: 1,
  },

  // line-length - Line length
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md
  MD013: false,
  // "MD013": {
  //   // Number of characters
  //   "line_length": 80,
  //   // Number of characters for headings
  //   "heading_line_length": 80,
  //   // Number of characters for code blocks
  //   "code_block_line_length": 80,
  //   // Include code blocks
  //   "code_blocks": true,
  //   // Include tables
  //   "tables": true,
  //   // Include headings
  //   "headings": true,
  //   // Strict length checking
  //   "strict": false,
  //   // Stern length checking
  //   "stern": false
  // },

  // commands-show-output - Dollar signs used before commands without showing output
  // @see  https://github.com/DavidAnson/markdownlint/blob/main/doc/md014.md
  MD014: true,

  // no-missing-space-atx - No space after hash on atx style heading
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md018.md
  MD018: true,

  // no-multiple-space-atx - Multiple spaces after hash on atx style heading
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md019.md
  MD019: true,

  // no-missing-space-closed-atx - No space inside hashes on closed atx style heading
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md020.md
  MD020: true,

  // no-multiple-space-closed-atx - Multiple spaces inside hashes on closed atx style heading
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md021.md
  MD021: true,

  // blanks-around-headings - Headings should be surrounded by blank lines
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md022.md
  MD022: {
  // Blank lines above heading
    lines_above: 1,
    // Blank lines below heading
    lines_below: 1,
  },

  // heading-start-left - Headings must start at the beginning of the line
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md023.md
  MD023: true,

  // no-duplicate-heading - Multiple headings with the same content
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md
  MD024: {
  // Only check sibling headings
    siblings_only: false,
  },

  // single-title/single-h1 - Multiple top-level headings in the same document
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md025.md
  MD025: {
  // Heading level
    level:              1,
    // RegExp for matching title in front matter
    front_matter_title: '^\\s*title\\s*[:=]',
  },

  // no-trailing-punctuation - Trailing punctuation in heading
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md026.md
  MD026: {
  // Punctuation characters
    punctuation: '.,;:!。，；：！',
  },

  // no-multiple-space-blockquote - Multiple spaces after blockquote symbol
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md027.md
  MD027: true,

  // no-blanks-blockquote - Blank line inside blockquote
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md028.md
  MD028: true,

  // ol-prefix - Ordered list item prefix
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md029.md
  MD029: {
  // List style
    style: 'one_or_ordered',
  },

  // list-marker-space - Spaces after list markers
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md030.md
  MD030: {
  // Spaces for single-line unordered list items
    ul_single: 1,
    // Spaces for single-line ordered list items
    ol_single: 1,
    // Spaces for multi-line unordered list items
    ul_multi:  1,
    // Spaces for multi-line ordered list items
    ol_multi:  1,
  },

  // blanks-around-fences - Fenced code blocks should be surrounded by blank lines
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md031.md
  MD031: {
  // Include list items
    list_items: true,
  },

  // blanks-around-lists - Lists should be surrounded by blank lines
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md032.md
  MD032: true,

  // no-inline-html - Inline HTML
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md033.md
  MD033: false,
  // "MD033": {
  //   // Allowed elements
  //   "allowed_elements": []
  // },

  // no-bare-urls - Bare URL used
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md034.md
  MD034: true,

  // hr-style - Horizontal rule style
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md035.md
  MD035: {
  // Horizontal rule style
    style: 'consistent',
  },

  // no-emphasis-as-heading - Emphasis used instead of a heading
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md036.md
  MD036: false,
  // "MD036": {
  //   // Punctuation characters
  //   "punctuation": ".,;:!?。，；：！？"
  // },

  // no-space-in-emphasis - Spaces inside emphasis markers
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md037.md
  MD037: true,

  // no-space-in-code - Spaces inside code span elements
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md038.md
  MD038: true,

  // no-space-in-links - Spaces inside link text
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md039.md
  MD039: true,

  // fenced-code-language - Fenced code blocks should have a language specified
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md040.md
  MD040: {
  // List of languages
    allowed_languages: [],
    // Require language only
    language_only:     false,
  },

  // first-line-heading/first-line-h1 - First line in a file should be a top-level heading
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md041.md
  MD041: {
  // Heading level
    level:              1,
    // RegExp for matching title in front matter
    front_matter_title: '^\\s*title\\s*[:=]',
  },

  // no-empty-links - No empty links
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md042.md
  MD042: true,

  // required-headings - Required heading structure
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md043.md
  MD043: false,

  // proper-names - Proper names should have the correct capitalization
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md044.md
  MD044: {
  // List of proper names
    names:         [],
    // Include code blocks
    code_blocks:   true,
    // Include HTML elements
    html_elements: true,
  },

  // no-alt-text - Images should have alternate text (alt text)
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md045.md
  MD045: true,

  // code-block-style - Code block style
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md046.md
  MD046: {
  // Block style
    style: 'consistent',
  },

  // single-trailing-newline - Files should end with a single newline character
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md047.md
  MD047: true,

  // code-fence-style - Code fence style
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md048.md
  MD048: {
  // Code fence style
    style: 'consistent',
  },

  // emphasis-style - Emphasis style
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md049.md
  MD049: {
  // Emphasis style
    style: 'consistent',
  },

  // strong-style - Strong style
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md050.md
  MD050: {
  // Strong style
    style: 'consistent',
  },

  // link-fragments - Link fragments should be valid
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md051.md
  MD051: true,

  // reference-links-images - Reference links and images should use a label that is defined
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md052.md
  MD052: {
  // Include shortcut syntax
    shortcut_syntax: false,
  },

  // link-image-reference-definitions - Link and image reference definitions should be needed
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md053.md
  MD053: {
  // Ignored definitions
    ignored_definitions: ['//'],
  },

  // link-image-style - Link and image style
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md054.md
  MD054: {
  // Allow autolinks
    autolink:   true,
    // Allow inline links and images
    inline:     true,
    // Allow full reference links and images
    full:       true,
    // Allow collapsed reference links and images
    collapsed:  true,
    // Allow shortcut reference links and images
    shortcut:   true,
    // Allow URLs as inline links
    url_inline: true,
  },

  // table-pipe-style - Table pipe style
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md055.md
  MD055: {
  // Table pipe style
    style: 'consistent',
  },

  // table-column-count - Table column count
  // @see https://github.com/DavidAnson/markdownlint/blob/main/doc/md056.md
  MD056: true,
};

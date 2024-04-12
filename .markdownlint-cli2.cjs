/* eslint-disable camelcase */
const lintUse = require('./dist/index.cjs');

// @note Because JavaScript code is cached after being loaded, edits to .markdownlint.cjs and .markdownlint-cli2.cjs require a restart of VS Code.

module.exports = lintUse.markdownlint.default;

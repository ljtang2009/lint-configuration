import { prettier } from './dist/index.js';

// edits to this file requires a restart of VS Code.

/** @type {import("prettier").Config} */
const config = {
  ...prettier.default,
};

export default config;

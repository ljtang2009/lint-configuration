import { stylelint } from './dist/index.js';
import _ from 'lodash';

/** @type {import('stylelint').Config} */
export default {
  ..._.merge(
    stylelint.buildIn.default,
    stylelint.order.default,
    stylelint.prettier.default,
    {
      ignoreFiles: ['coverage/**/*'],
    },
  ),
};

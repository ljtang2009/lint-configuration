import base from './base.js';
import stylistic from './stylistic.js';
import recommended from './recommended.js';
import strict from './strict.js';

export default {
  ...base,
  ...stylistic,
  ...recommended,
  ...strict,
};

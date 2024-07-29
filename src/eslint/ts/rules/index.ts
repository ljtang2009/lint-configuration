import base from './base.ts';
import stylistic from './stylistic.ts';
import recommended from './recommended.ts';
import strict from './strict.ts';

export default {
  ...base,
  ...stylistic,
  ...recommended,
  ...strict,
};

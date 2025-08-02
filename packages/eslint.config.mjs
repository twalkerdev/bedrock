// @ts-check
import { configs } from '../lib/eslint-config/dist/index.ts';

export default [
  ...configs,
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'build/**'],
  },
];

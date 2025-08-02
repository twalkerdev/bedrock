import * as js from '@chance/eslint';
import * as typescript from '@chance/eslint/typescript';
import { globals } from '@chance/eslint/globals';

/** @type {import("eslint").Linter.Config[]} */
export default [
  { ...js.getConfig({ ...globals.node, ...globals.browser }) },
  typescript.config,
  {
    ignores: ['dist/**'],
    rules: {
      'prefer-const': ['warn', { destructuring: 'all' }],
    },
  },
];

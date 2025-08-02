import * as js from '@chance/eslint';
import * as typescript from '@chance/eslint/typescript';
import { globals } from '@chance/eslint/globals';

/** @type {import("eslint").Linter.Config[]} */
export default [
  { ...js.getConfig({ ...globals.node }) },
  typescript.config,
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'build/**'],
    rules: {
      'prefer-const': ['warn', { destructuring: 'all' }],
    },
  },
];

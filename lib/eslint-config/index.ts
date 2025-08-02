// @ts-check
import * as eslintJs from '@chance/eslint';
import * as typescript from '@chance/eslint/typescript';
import { globals } from '@chance/eslint/globals';

export const js = eslintJs.getConfig({ ...globals.node });
export const ts = typescript.config;

/** @type {import("eslint").Linter.Config} */
export const overrides = {
  ignores: ['dist/**', '.next/**', 'node_modules/**', 'coverage/**'],
  rules: {
    'prefer-const': ['warn', { destructuring: 'all' }],
  },
};

/** @type {import("eslint").Linter.Config[]} */
export const configs = [js, ts, overrides];

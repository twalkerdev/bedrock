import * as js from "@chance/eslint";
import { globals } from "@chance/eslint/globals";
import * as typescript from "@chance/eslint/typescript";

/** @type {import("eslint").Linter.Config[]} */
export default [
	{ ...js.getConfig({ ...globals.node }) },
	typescript.config,
	{
		ignores: ["dist/**", "node_modules/**", "coverage/**", "build/**"],
		rules: {
			"prefer-const": ["warn", { destructuring: "all" }],
		},
	},
];

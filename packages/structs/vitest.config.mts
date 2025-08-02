import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["**/*.test.?(c|m)[jt]s?(x)"],
		globals: true,
		environment: "node",
		coverage: {
			provider: "istanbul",
			reporter: ["text", "html"],
			include: ["**/*.ts"],
			exclude: ["node_modules", "dist", "lib"],
			cleanOnRerun: true,
			all: true,
		},
	},
});

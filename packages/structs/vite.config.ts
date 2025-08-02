import path from "node:path";
import { defineConfig } from "vite";
import packageJson from "./package.json";

const getPackageName = () => {
	return packageJson.name;
};

const fileName = {
	es: `bedrock.esm.js`,
	cjs: `bedrock.cjs`,
	umd: `bedrock.umd.cjs`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

export default defineConfig({
	base: "./",
	build: {
		outDir: "./dist",
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: getPackageName(),
			formats,
			fileName: (format) => fileName[format],
		},
	},
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "src") },
			{ find: "@@", replacement: path.resolve(__dirname) },
		],
	},
});

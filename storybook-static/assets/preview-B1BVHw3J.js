const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"./DocsRenderer-CFRXHY34-DFPI0Fbz.js",
			"./iframe-LmFon-ay.js",
			"./index-pcvojpNF.js",
			"./index-DpPbLVjc.js",
			"./jsx-runtime-eAkVW3JC.js",
			"./index-I2cLBF4-.js",
			"./index-C_pJYAGD.js",
			"./index-jKZsjUty.js",
			"./index-DrFu-skq.js",
			"./react-18-CpP9hRgD.js",
		]),
) => i.map((i) => d[i]);
import { _ as a } from "./iframe-LmFon-ay.js";
import "../sb-preview/runtime.js";
const { global: s } = __STORYBOOK_MODULE_GLOBAL__;
var _ = Object.entries(s.TAGS_OPTIONS ?? {}).reduce((e, r) => {
		const [t, o] = r;
		return o.excludeFromDocsStories && (e[t] = !0), e;
	}, {}),
	d = {
		docs: {
			renderer: async () => {
				const { DocsRenderer: e } = await a(
					() => import("./DocsRenderer-CFRXHY34-DFPI0Fbz.js"),
					__vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
					import.meta.url,
				);
				return new e();
			},
			stories: {
				filter: (e) =>
					(e.tags || []).filter((r) => _[r]).length === 0 &&
					!e.parameters.docs?.disable,
			},
		},
	};
export { d as parameters };

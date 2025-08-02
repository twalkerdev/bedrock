import { j as e } from "./jsx-runtime-eAkVW3JC.js";
import "./index-pcvojpNF.js";
const n = ({
	src: s,
	width: a,
	height: t,
	radius: i,
	error: o = !0,
	loading: d = !0,
	onLoad: m,
	onError: c,
	...u
}) =>
	e.jsx(e.Fragment, {
		children: e.jsxs("div", {
			className: "tmp-design-image",
			...u,
			children: [
				"Image",
				e.jsx("span", { children: s }),
				e.jsx("br", {}),
				e.jsx("span", { children: a }),
				e.jsx("br", {}),
				e.jsx("span", { children: t }),
				e.jsx("br", {}),
				e.jsx("span", { children: i }),
				e.jsx("br", {}),
				e.jsx("span", { children: o }),
				e.jsx("br", {}),
				e.jsx("span", { children: d }),
				e.jsx("br", {}),
				e.jsx("span", { onClick: m, children: "onLoad" }),
				e.jsx("br", {}),
				e.jsx("span", { onClick: c, children: "onError" }),
			],
		}),
	});
n.__docgenInfo = {
	description: "",
	methods: [],
	displayName: "Image",
	props: {
		src: { required: !0, tsType: { name: "string" }, description: "src" },
		width: { required: !0, tsType: { name: "string" }, description: "width" },
		height: { required: !0, tsType: { name: "string" }, description: "height" },
		radius: {
			required: !1,
			tsType: {
				name: "union",
				raw: "string | number",
				elements: [{ name: "string" }, { name: "number" }],
			},
			description: "",
		},
		error: {
			required: !1,
			tsType: {
				name: "union",
				raw: "boolean | ReactNode",
				elements: [{ name: "boolean" }, { name: "ReactNode" }],
			},
			description: "",
			defaultValue: { value: "true", computed: !1 },
		},
		loading: {
			required: !1,
			tsType: {
				name: "union",
				raw: "boolean | ReactNode",
				elements: [{ name: "boolean" }, { name: "ReactNode" }],
			},
			description: "",
			defaultValue: { value: "true", computed: !1 },
		},
		onLoad: {
			required: !1,
			tsType: {
				name: "signature",
				type: "function",
				raw: "() => void",
				signature: { arguments: [], return: { name: "void" } },
			},
			description: "",
		},
		onError: {
			required: !1,
			tsType: {
				name: "signature",
				type: "function",
				raw: "() => void",
				signature: { arguments: [], return: { name: "void" } },
			},
			description: "",
		},
	},
};
const g = {
		title: "Example/Image",
		component: n,
		parameters: { layout: "centered" },
		tags: ["autodocs"],
	},
	r = { args: { src: "12333333", width: "200", height: "200" } };
r.parameters = {
	...r.parameters,
	docs: {
		...r.parameters?.docs,
		source: {
			originalSource: `{
  args: {
    src: "12333333",
    width: "200",
    height: "200"
  }
}`,
			...r.parameters?.docs?.source,
		},
	},
};
const h = ["Primary"];
export { r as Primary, h as __namedExportsOrder, g as default };

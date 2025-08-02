const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f || (m.f = ["./index-BAGAEgsd.js", "./index-pcvojpNF.js"]),
) => i.map((i) => d[i]);
import { _ as c } from "./iframe-LmFon-ay.js";
import { ah as d, ai as h, af as l, ag as u } from "./index-DpPbLVjc.js";
import { r as p, R as t } from "./index-pcvojpNF.js";
import {
	renderElement as E,
	unmountElement as x,
} from "./react-18-CpP9hRgD.js";
import "../sb-preview/runtime.js";
import "./jsx-runtime-eAkVW3JC.js";
import "./index-I2cLBF4-.js";
import "./index-C_pJYAGD.js";
import "./index-jKZsjUty.js";
import "./index-DrFu-skq.js";
var _ = { code: d, a: u, ...l },
	f = class extends p.Component {
		constructor() {
			super(...arguments), (this.state = { hasError: !1 });
		}
		static getDerivedStateFromError() {
			return { hasError: !0 };
		}
		componentDidCatch(r) {
			const { showException: e } = this.props;
			e(r);
		}
		render() {
			const { hasError: r } = this.state,
				{ children: e } = this.props;
			return r ? null : t.createElement(t.Fragment, null, e);
		}
	},
	F = class {
		constructor() {
			(this.render = async (r, e, n) => {
				const s = { ..._, ...e?.components },
					a = h;
				return new Promise((m, i) => {
					c(
						async () => {
							const { MDXProvider: o } = await import("./index-BAGAEgsd.js");
							return { MDXProvider: o };
						},
						__vite__mapDeps([0, 1]),
						import.meta.url,
					)
						.then(({ MDXProvider: o }) =>
							E(
								t.createElement(
									f,
									{ showException: i, key: Math.random() },
									t.createElement(
										o,
										{ components: s },
										t.createElement(a, { context: r, docsParameter: e }),
									),
								),
								n,
							),
						)
						.then(() => m());
				});
			}),
				(this.unmount = (r) => {
					x(r);
				});
		}
	};
export { F as DocsRenderer, _ as defaultComponents };

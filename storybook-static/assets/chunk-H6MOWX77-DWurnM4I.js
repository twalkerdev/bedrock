var n = Object.create,
	a = Object.defineProperty,
	c = Object.getOwnPropertyDescriptor,
	p = Object.getOwnPropertyNames,
	s = Object.getPrototypeOf,
	u = Object.prototype.hasOwnProperty,
	b = (e, r) => () => (
		r || (0, e[p(e)[0]])((r = { exports: {} }).exports, r), r.exports
	),
	P = (e, r) => {
		for (var t in r) a(e, t, { get: r[t], enumerable: !0 });
	},
	O = (e, r, t, o) => {
		if ((r && typeof r == "object") || typeof r == "function")
			for (const _ of p(r))
				!u.call(e, _) &&
					_ !== t &&
					a(e, _, {
						get: () => r[_],
						enumerable: !(o = c(r, _)) || o.enumerable,
					});
		return e;
	},
	l = (e, r, t) => (
		(t = e != null ? n(s(e)) : {}),
		O(
			!e || !e.__esModule ? a(t, "default", { value: e, enumerable: !0 }) : t,
			e,
		)
	);
export { P as _, l as a, b };

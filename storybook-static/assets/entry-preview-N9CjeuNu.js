const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"./react-18-CpP9hRgD.js",
			"./index-pcvojpNF.js",
			"./index-I2cLBF4-.js",
		]),
) => i.map((i) => d[i]);
import { _ as Ut } from "./chunk-H6MOWX77-DWurnM4I.js";
import { _ as bt } from "./iframe-LmFon-ay.js";
import { r as kt } from "./index-I2cLBF4-.js";
import { r as F, g as Ft, R as q } from "./index-pcvojpNF.js";
import "../sb-preview/runtime.js";
var Te = { exports: {} };
const Gt = "2.0.0",
	ut = 256,
	Mt = Number.MAX_SAFE_INTEGER || 9007199254740991,
	jt = 16,
	Xt = ut - 6,
	xt = [
		"major",
		"premajor",
		"minor",
		"preminor",
		"patch",
		"prepatch",
		"prerelease",
	];
var ce = {
		MAX_LENGTH: ut,
		MAX_SAFE_COMPONENT_LENGTH: jt,
		MAX_SAFE_BUILD_LENGTH: Xt,
		MAX_SAFE_INTEGER: Mt,
		RELEASE_TYPES: xt,
		SEMVER_SPEC_VERSION: Gt,
		FLAG_INCLUDE_PRERELEASE: 1,
		FLAG_LOOSE: 2,
	},
	$e = {};
const Vt =
	typeof process == "object" &&
	$e &&
	$e.NODE_DEBUG &&
	/\bsemver\b/i.test($e.NODE_DEBUG)
		? (...e) => console.error("SEMVER", ...e)
		: () => {};
var ue = Vt;
((e, t) => {
	const {
			MAX_SAFE_COMPONENT_LENGTH: r,
			MAX_SAFE_BUILD_LENGTH: n,
			MAX_LENGTH: o,
		} = ce,
		a = ue;
	t = e.exports = {};
	const l = (t.re = []),
		u = (t.safeRe = []),
		i = (t.src = []),
		d = (t.safeSrc = []),
		s = (t.t = {});
	let m = 0;
	const L = "[a-zA-Z0-9-]",
		E = [
			["\\s", 1],
			["\\d", o],
			[L, n],
		],
		W = (k) => {
			for (const [D, M] of E)
				k = k
					.split(`${D}*`)
					.join(`${D}{0,${M}}`)
					.split(`${D}+`)
					.join(`${D}{1,${M}}`);
			return k;
		},
		v = (k, D, M) => {
			const S = W(D),
				G = m++;
			a(k, G, D),
				(s[k] = G),
				(i[G] = D),
				(d[G] = S),
				(l[G] = new RegExp(D, M ? "g" : void 0)),
				(u[G] = new RegExp(S, M ? "g" : void 0));
		};
	v("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
		v("NUMERICIDENTIFIERLOOSE", "\\d+"),
		v("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${L}*`),
		v(
			"MAINVERSION",
			`(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})`,
		),
		v(
			"MAINVERSIONLOOSE",
			`(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})`,
		),
		v(
			"PRERELEASEIDENTIFIER",
			`(?:${i[s.NONNUMERICIDENTIFIER]}|${i[s.NUMERICIDENTIFIER]})`,
		),
		v(
			"PRERELEASEIDENTIFIERLOOSE",
			`(?:${i[s.NONNUMERICIDENTIFIER]}|${i[s.NUMERICIDENTIFIERLOOSE]})`,
		),
		v(
			"PRERELEASE",
			`(?:-(${i[s.PRERELEASEIDENTIFIER]}(?:\\.${i[s.PRERELEASEIDENTIFIER]})*))`,
		),
		v(
			"PRERELEASELOOSE",
			`(?:-?(${i[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[s.PRERELEASEIDENTIFIERLOOSE]})*))`,
		),
		v("BUILDIDENTIFIER", `${L}+`),
		v(
			"BUILD",
			`(?:\\+(${i[s.BUILDIDENTIFIER]}(?:\\.${i[s.BUILDIDENTIFIER]})*))`,
		),
		v("FULLPLAIN", `v?${i[s.MAINVERSION]}${i[s.PRERELEASE]}?${i[s.BUILD]}?`),
		v("FULL", `^${i[s.FULLPLAIN]}$`),
		v(
			"LOOSEPLAIN",
			`[v=\\s]*${i[s.MAINVERSIONLOOSE]}${i[s.PRERELEASELOOSE]}?${i[s.BUILD]}?`,
		),
		v("LOOSE", `^${i[s.LOOSEPLAIN]}$`),
		v("GTLT", "((?:<|>)?=?)"),
		v("XRANGEIDENTIFIERLOOSE", `${i[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
		v("XRANGEIDENTIFIER", `${i[s.NUMERICIDENTIFIER]}|x|X|\\*`),
		v(
			"XRANGEPLAIN",
			`[v=\\s]*(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:${i[s.PRERELEASE]})?${i[s.BUILD]}?)?)?`,
		),
		v(
			"XRANGEPLAINLOOSE",
			`[v=\\s]*(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:${i[s.PRERELEASELOOSE]})?${i[s.BUILD]}?)?)?`,
		),
		v("XRANGE", `^${i[s.GTLT]}\\s*${i[s.XRANGEPLAIN]}$`),
		v("XRANGELOOSE", `^${i[s.GTLT]}\\s*${i[s.XRANGEPLAINLOOSE]}$`),
		v(
			"COERCEPLAIN",
			`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`,
		),
		v("COERCE", `${i[s.COERCEPLAIN]}(?:$|[^\\d])`),
		v(
			"COERCEFULL",
			i[s.COERCEPLAIN] +
				`(?:${i[s.PRERELEASE]})?(?:${i[s.BUILD]})?(?:$|[^\\d])`,
		),
		v("COERCERTL", i[s.COERCE], !0),
		v("COERCERTLFULL", i[s.COERCEFULL], !0),
		v("LONETILDE", "(?:~>?)"),
		v("TILDETRIM", `(\\s*)${i[s.LONETILDE]}\\s+`, !0),
		(t.tildeTrimReplace = "$1~"),
		v("TILDE", `^${i[s.LONETILDE]}${i[s.XRANGEPLAIN]}$`),
		v("TILDELOOSE", `^${i[s.LONETILDE]}${i[s.XRANGEPLAINLOOSE]}$`),
		v("LONECARET", "(?:\\^)"),
		v("CARETTRIM", `(\\s*)${i[s.LONECARET]}\\s+`, !0),
		(t.caretTrimReplace = "$1^"),
		v("CARET", `^${i[s.LONECARET]}${i[s.XRANGEPLAIN]}$`),
		v("CARETLOOSE", `^${i[s.LONECARET]}${i[s.XRANGEPLAINLOOSE]}$`),
		v("COMPARATORLOOSE", `^${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]})$|^$`),
		v("COMPARATOR", `^${i[s.GTLT]}\\s*(${i[s.FULLPLAIN]})$|^$`),
		v(
			"COMPARATORTRIM",
			`(\\s*)${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]}|${i[s.XRANGEPLAIN]})`,
			!0,
		),
		(t.comparatorTrimReplace = "$1$2$3"),
		v(
			"HYPHENRANGE",
			`^\\s*(${i[s.XRANGEPLAIN]})\\s+-\\s+(${i[s.XRANGEPLAIN]})\\s*$`,
		),
		v(
			"HYPHENRANGELOOSE",
			`^\\s*(${i[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[s.XRANGEPLAINLOOSE]})\\s*$`,
		),
		v("STAR", "(<|>)?=?\\s*\\*"),
		v("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
		v("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Te, Te.exports);
var Z = Te.exports;
const Yt = Object.freeze({ loose: !0 }),
	Wt = Object.freeze({}),
	Ht = (e) => (e ? (typeof e != "object" ? Yt : e) : Wt);
var ye = Ht;
const je = /^[0-9]+$/,
	ft = (e, t) => {
		const r = je.test(e),
			n = je.test(t);
		return (
			r && n && ((e = +e), (t = +t)),
			e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
		);
	},
	Kt = (e, t) => ft(t, e);
var ht = { compareIdentifiers: ft, rcompareIdentifiers: Kt };
const ee = ue,
	{ MAX_LENGTH: Xe, MAX_SAFE_INTEGER: te } = ce,
	{ safeRe: re, t: ne } = Z,
	Bt = ye,
	{ compareIdentifiers: X } = ht;
const qt = class U {
	constructor(t, r) {
		if (((r = Bt(r)), t instanceof U)) {
			if (
				t.loose === !!r.loose &&
				t.includePrerelease === !!r.includePrerelease
			)
				return t;
			t = t.version;
		} else if (typeof t != "string")
			throw new TypeError(
				`Invalid version. Must be a string. Got type "${typeof t}".`,
			);
		if (t.length > Xe)
			throw new TypeError(`version is longer than ${Xe} characters`);
		ee("SemVer", t, r),
			(this.options = r),
			(this.loose = !!r.loose),
			(this.includePrerelease = !!r.includePrerelease);
		const n = t.trim().match(r.loose ? re[ne.LOOSE] : re[ne.FULL]);
		if (!n) throw new TypeError(`Invalid Version: ${t}`);
		if (
			((this.raw = t),
			(this.major = +n[1]),
			(this.minor = +n[2]),
			(this.patch = +n[3]),
			this.major > te || this.major < 0)
		)
			throw new TypeError("Invalid major version");
		if (this.minor > te || this.minor < 0)
			throw new TypeError("Invalid minor version");
		if (this.patch > te || this.patch < 0)
			throw new TypeError("Invalid patch version");
		n[4]
			? (this.prerelease = n[4].split(".").map((o) => {
					if (/^[0-9]+$/.test(o)) {
						const a = +o;
						if (a >= 0 && a < te) return a;
					}
					return o;
				}))
			: (this.prerelease = []),
			(this.build = n[5] ? n[5].split(".") : []),
			this.format();
	}
	format() {
		return (
			(this.version = `${this.major}.${this.minor}.${this.patch}`),
			this.prerelease.length &&
				(this.version += `-${this.prerelease.join(".")}`),
			this.version
		);
	}
	toString() {
		return this.version;
	}
	compare(t) {
		if (
			(ee("SemVer.compare", this.version, this.options, t), !(t instanceof U))
		) {
			if (typeof t == "string" && t === this.version) return 0;
			t = new U(t, this.options);
		}
		return t.version === this.version
			? 0
			: this.compareMain(t) || this.comparePre(t);
	}
	compareMain(t) {
		return (
			t instanceof U || (t = new U(t, this.options)),
			X(this.major, t.major) || X(this.minor, t.minor) || X(this.patch, t.patch)
		);
	}
	comparePre(t) {
		if (
			(t instanceof U || (t = new U(t, this.options)),
			this.prerelease.length && !t.prerelease.length)
		)
			return -1;
		if (!this.prerelease.length && t.prerelease.length) return 1;
		if (!this.prerelease.length && !t.prerelease.length) return 0;
		let r = 0;
		do {
			const n = this.prerelease[r],
				o = t.prerelease[r];
			if ((ee("prerelease compare", r, n, o), n === void 0 && o === void 0))
				return 0;
			if (o === void 0) return 1;
			if (n === void 0) return -1;
			if (n === o) continue;
			return X(n, o);
		} while (++r);
	}
	compareBuild(t) {
		t instanceof U || (t = new U(t, this.options));
		let r = 0;
		do {
			const n = this.build[r],
				o = t.build[r];
			if ((ee("build compare", r, n, o), n === void 0 && o === void 0))
				return 0;
			if (o === void 0) return 1;
			if (n === void 0) return -1;
			if (n === o) continue;
			return X(n, o);
		} while (++r);
	}
	inc(t, r, n) {
		if (t.startsWith("pre")) {
			if (!r && n === !1)
				throw new Error("invalid increment argument: identifier is empty");
			if (r) {
				const o = `-${r}`.match(
					this.options.loose ? re[ne.PRERELEASELOOSE] : re[ne.PRERELEASE],
				);
				if (!o || o[1] !== r) throw new Error(`invalid identifier: ${r}`);
			}
		}
		switch (t) {
			case "premajor":
				(this.prerelease.length = 0),
					(this.patch = 0),
					(this.minor = 0),
					this.major++,
					this.inc("pre", r, n);
				break;
			case "preminor":
				(this.prerelease.length = 0),
					(this.patch = 0),
					this.minor++,
					this.inc("pre", r, n);
				break;
			case "prepatch":
				(this.prerelease.length = 0),
					this.inc("patch", r, n),
					this.inc("pre", r, n);
				break;
			case "prerelease":
				this.prerelease.length === 0 && this.inc("patch", r, n),
					this.inc("pre", r, n);
				break;
			case "release":
				if (this.prerelease.length === 0)
					throw new Error(`version ${this.raw} is not a prerelease`);
				this.prerelease.length = 0;
				break;
			case "major":
				(this.minor !== 0 ||
					this.patch !== 0 ||
					this.prerelease.length === 0) &&
					this.major++,
					(this.minor = 0),
					(this.patch = 0),
					(this.prerelease = []);
				break;
			case "minor":
				(this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
					(this.patch = 0),
					(this.prerelease = []);
				break;
			case "patch":
				this.prerelease.length === 0 && this.patch++, (this.prerelease = []);
				break;
			case "pre": {
				const o = Number(n) ? 1 : 0;
				if (this.prerelease.length === 0) this.prerelease = [o];
				else {
					let a = this.prerelease.length;
					while (--a >= 0)
						typeof this.prerelease[a] == "number" &&
							(this.prerelease[a]++, (a = -2));
					if (a === -1) {
						if (r === this.prerelease.join(".") && n === !1)
							throw new Error(
								"invalid increment argument: identifier already exists",
							);
						this.prerelease.push(o);
					}
				}
				if (r) {
					let a = [r, o];
					n === !1 && (a = [r]),
						X(this.prerelease[0], r) === 0
							? isNaN(this.prerelease[1]) && (this.prerelease = a)
							: (this.prerelease = a);
				}
				break;
			}
			default:
				throw new Error(`invalid increment argument: ${t}`);
		}
		return (
			(this.raw = this.format()),
			this.build.length && (this.raw += `+${this.build.join(".")}`),
			this
		);
	}
};
var y = qt;
const xe = y,
	zt = (e, t, r = !1) => {
		if (e instanceof xe) return e;
		try {
			return new xe(e, t);
		} catch (n) {
			if (!r) return null;
			throw n;
		}
	};
var x = zt;
const Zt = x,
	Jt = (e, t) => {
		const r = Zt(e, t);
		return r ? r.version : null;
	};
var Qt = Jt;
const er = x,
	tr = (e, t) => {
		const r = er(e.trim().replace(/^[=v]+/, ""), t);
		return r ? r.version : null;
	};
var rr = tr;
const Ve = y,
	nr = (e, t, r, n, o) => {
		typeof r == "string" && ((o = n), (n = r), (r = void 0));
		try {
			return new Ve(e instanceof Ve ? e.version : e, r).inc(t, n, o).version;
		} catch {
			return null;
		}
	};
var sr = nr;
const Ye = x,
	ir = (e, t) => {
		const r = Ye(e, null, !0),
			n = Ye(t, null, !0),
			o = r.compare(n);
		if (o === 0) return null;
		const a = o > 0,
			l = a ? r : n,
			u = a ? n : r,
			i = !!l.prerelease.length;
		if (!!u.prerelease.length && !i) {
			if (!u.patch && !u.minor) return "major";
			if (u.compareMain(l) === 0)
				return u.minor && !u.patch ? "minor" : "patch";
		}
		const s = i ? "pre" : "";
		return r.major !== n.major
			? s + "major"
			: r.minor !== n.minor
				? s + "minor"
				: r.patch !== n.patch
					? s + "patch"
					: "prerelease";
	};
var or = ir;
const ar = y,
	lr = (e, t) => new ar(e, t).major;
var cr = lr;
const ur = y,
	fr = (e, t) => new ur(e, t).minor;
var hr = fr;
const pr = y,
	Er = (e, t) => new pr(e, t).patch;
var mr = Er;
const dr = x,
	$r = (e, t) => {
		const r = dr(e, t);
		return r && r.prerelease.length ? r.prerelease : null;
	};
var Rr = $r;
const We = y,
	vr = (e, t, r) => new We(e, r).compare(new We(t, r));
var P = vr;
const Ir = P,
	gr = (e, t, r) => Ir(t, e, r);
var Lr = gr;
const wr = P,
	Or = (e, t) => wr(e, t, !0);
var Nr = Or;
const He = y,
	Tr = (e, t, r) => {
		const n = new He(e, r),
			o = new He(t, r);
		return n.compare(o) || n.compareBuild(o);
	};
var Ae = Tr;
const Sr = Ae,
	yr = (e, t) => e.sort((r, n) => Sr(r, n, t));
var Ar = yr;
const Cr = Ae,
	_r = (e, t) => e.sort((r, n) => Cr(n, r, t));
var Dr = _r;
const Pr = P,
	br = (e, t, r) => Pr(e, t, r) > 0;
var fe = br;
const Ur = P,
	Fr = (e, t, r) => Ur(e, t, r) < 0;
var Ce = Fr;
const kr = P,
	Gr = (e, t, r) => kr(e, t, r) === 0;
var pt = Gr;
const Mr = P,
	jr = (e, t, r) => Mr(e, t, r) !== 0;
var Et = jr;
const Xr = P,
	xr = (e, t, r) => Xr(e, t, r) >= 0;
var _e = xr;
const Vr = P,
	Yr = (e, t, r) => Vr(e, t, r) <= 0;
var De = Yr;
const Wr = pt,
	Hr = Et,
	Kr = fe,
	Br = _e,
	qr = Ce,
	zr = De,
	Zr = (e, t, r, n) => {
		switch (t) {
			case "===":
				return (
					typeof e == "object" && (e = e.version),
					typeof r == "object" && (r = r.version),
					e === r
				);
			case "!==":
				return (
					typeof e == "object" && (e = e.version),
					typeof r == "object" && (r = r.version),
					e !== r
				);
			case "":
			case "=":
			case "==":
				return Wr(e, r, n);
			case "!=":
				return Hr(e, r, n);
			case ">":
				return Kr(e, r, n);
			case ">=":
				return Br(e, r, n);
			case "<":
				return qr(e, r, n);
			case "<=":
				return zr(e, r, n);
			default:
				throw new TypeError(`Invalid operator: ${t}`);
		}
	};
var mt = Zr;
const Jr = y,
	Qr = x,
	{ safeRe: se, t: ie } = Z,
	en = (e, t) => {
		if (e instanceof Jr) return e;
		if ((typeof e == "number" && (e = String(e)), typeof e != "string"))
			return null;
		t = t || {};
		let r = null;
		if (!t.rtl)
			r = e.match(t.includePrerelease ? se[ie.COERCEFULL] : se[ie.COERCE]);
		else {
			const i = t.includePrerelease ? se[ie.COERCERTLFULL] : se[ie.COERCERTL];
			let d;
			while ((d = i.exec(e)) && (!r || r.index + r[0].length !== e.length))
				(!r || d.index + d[0].length !== r.index + r[0].length) && (r = d),
					(i.lastIndex = d.index + d[1].length + d[2].length);
			i.lastIndex = -1;
		}
		if (r === null) return null;
		const n = r[2],
			o = r[3] || "0",
			a = r[4] || "0",
			l = t.includePrerelease && r[5] ? `-${r[5]}` : "",
			u = t.includePrerelease && r[6] ? `+${r[6]}` : "";
		return Qr(`${n}.${o}.${a}${l}${u}`, t);
	};
var tn = en;
class rn {
	constructor() {
		(this.max = 1e3), (this.map = new Map());
	}
	get(t) {
		const r = this.map.get(t);
		if (r !== void 0) return this.map.delete(t), this.map.set(t, r), r;
	}
	delete(t) {
		return this.map.delete(t);
	}
	set(t, r) {
		if (!this.delete(t) && r !== void 0) {
			if (this.map.size >= this.max) {
				const o = this.map.keys().next().value;
				this.delete(o);
			}
			this.map.set(t, r);
		}
		return this;
	}
}
var nn = rn,
	Re,
	Ke;
function b() {
	if (Ke) return Re;
	Ke = 1;
	const e = /\s+/g;
	class t {
		constructor(c, $) {
			if ((($ = o($)), c instanceof t))
				return c.loose === !!$.loose &&
					c.includePrerelease === !!$.includePrerelease
					? c
					: new t(c.raw, $);
			if (c instanceof a)
				return (
					(this.raw = c.value),
					(this.set = [[c]]),
					(this.formatted = void 0),
					this
				);
			if (
				((this.options = $),
				(this.loose = !!$.loose),
				(this.includePrerelease = !!$.includePrerelease),
				(this.raw = c.trim().replace(e, " ")),
				(this.set = this.raw
					.split("||")
					.map((h) => this.parseRange(h.trim()))
					.filter((h) => h.length)),
				!this.set.length)
			)
				throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
			if (this.set.length > 1) {
				const h = this.set[0];
				if (
					((this.set = this.set.filter((R) => !v(R[0]))), this.set.length === 0)
				)
					this.set = [h];
				else if (this.set.length > 1) {
					for (const R of this.set)
						if (R.length === 1 && k(R[0])) {
							this.set = [R];
							break;
						}
				}
			}
			this.formatted = void 0;
		}
		get range() {
			if (this.formatted === void 0) {
				this.formatted = "";
				for (let c = 0; c < this.set.length; c++) {
					c > 0 && (this.formatted += "||");
					const $ = this.set[c];
					for (let h = 0; h < $.length; h++)
						h > 0 && (this.formatted += " "),
							(this.formatted += $[h].toString().trim());
				}
			}
			return this.formatted;
		}
		format() {
			return this.range;
		}
		toString() {
			return this.range;
		}
		parseRange(c) {
			const h =
					((this.options.includePrerelease && E) | (this.options.loose && W)) +
					":" +
					c,
				R = n.get(h);
			if (R) return R;
			const p = this.options.loose,
				I = p ? i[d.HYPHENRANGELOOSE] : i[d.HYPHENRANGE];
			(c = c.replace(I, Dt(this.options.includePrerelease))),
				l("hyphen replace", c),
				(c = c.replace(i[d.COMPARATORTRIM], s)),
				l("comparator trim", c),
				(c = c.replace(i[d.TILDETRIM], m)),
				l("tilde trim", c),
				(c = c.replace(i[d.CARETTRIM], L)),
				l("caret trim", c);
			let w = c
				.split(" ")
				.map((N) => M(N, this.options))
				.join(" ")
				.split(/\s+/)
				.map((N) => _t(N, this.options));
			p &&
				(w = w.filter(
					(N) => (
						l("loose invalid filter", N, this.options),
						!!N.match(i[d.COMPARATORLOOSE])
					),
				)),
				l("range list", w);
			const g = new Map(),
				O = w.map((N) => new a(N, this.options));
			for (const N of O) {
				if (v(N)) return [N];
				g.set(N.value, N);
			}
			g.size > 1 && g.has("") && g.delete("");
			const C = [...g.values()];
			return n.set(h, C), C;
		}
		intersects(c, $) {
			if (!(c instanceof t)) throw new TypeError("a Range is required");
			return this.set.some(
				(h) =>
					D(h, $) &&
					c.set.some(
						(R) =>
							D(R, $) && h.every((p) => R.every((I) => p.intersects(I, $))),
					),
			);
		}
		test(c) {
			if (!c) return !1;
			if (typeof c == "string")
				try {
					c = new u(c, this.options);
				} catch {
					return !1;
				}
			for (let $ = 0; $ < this.set.length; $++)
				if (Pt(this.set[$], c, this.options)) return !0;
			return !1;
		}
	}
	Re = t;
	const r = nn,
		n = new r(),
		o = ye,
		a = he(),
		l = ue,
		u = y,
		{
			safeRe: i,
			t: d,
			comparatorTrimReplace: s,
			tildeTrimReplace: m,
			caretTrimReplace: L,
		} = Z,
		{ FLAG_INCLUDE_PRERELEASE: E, FLAG_LOOSE: W } = ce,
		v = (f) => f.value === "<0.0.0-0",
		k = (f) => f.value === "",
		D = (f, c) => {
			let $ = !0;
			const h = f.slice();
			let R = h.pop();
			while ($ && h.length)
				($ = h.every((p) => R.intersects(p, c))), (R = h.pop());
			return $;
		},
		M = (f, c) => (
			l("comp", f, c),
			(f = Tt(f, c)),
			l("caret", f),
			(f = G(f, c)),
			l("tildes", f),
			(f = yt(f, c)),
			l("xrange", f),
			(f = Ct(f, c)),
			l("stars", f),
			f
		),
		S = (f) => !f || f.toLowerCase() === "x" || f === "*",
		G = (f, c) =>
			f
				.trim()
				.split(/\s+/)
				.map(($) => Nt($, c))
				.join(" "),
		Nt = (f, c) => {
			const $ = c.loose ? i[d.TILDELOOSE] : i[d.TILDE];
			return f.replace($, (h, R, p, I, w) => {
				l("tilde", f, h, R, p, I, w);
				let g;
				return (
					S(R)
						? (g = "")
						: S(p)
							? (g = `>=${R}.0.0 <${+R + 1}.0.0-0`)
							: S(I)
								? (g = `>=${R}.${p}.0 <${R}.${+p + 1}.0-0`)
								: w
									? (l("replaceTilde pr", w),
										(g = `>=${R}.${p}.${I}-${w} <${R}.${+p + 1}.0-0`))
									: (g = `>=${R}.${p}.${I} <${R}.${+p + 1}.0-0`),
					l("tilde return", g),
					g
				);
			});
		},
		Tt = (f, c) =>
			f
				.trim()
				.split(/\s+/)
				.map(($) => St($, c))
				.join(" "),
		St = (f, c) => {
			l("caret", f, c);
			const $ = c.loose ? i[d.CARETLOOSE] : i[d.CARET],
				h = c.includePrerelease ? "-0" : "";
			return f.replace($, (R, p, I, w, g) => {
				l("caret", f, R, p, I, w, g);
				let O;
				return (
					S(p)
						? (O = "")
						: S(I)
							? (O = `>=${p}.0.0${h} <${+p + 1}.0.0-0`)
							: S(w)
								? p === "0"
									? (O = `>=${p}.${I}.0${h} <${p}.${+I + 1}.0-0`)
									: (O = `>=${p}.${I}.0${h} <${+p + 1}.0.0-0`)
								: g
									? (l("replaceCaret pr", g),
										p === "0"
											? I === "0"
												? (O = `>=${p}.${I}.${w}-${g} <${p}.${I}.${+w + 1}-0`)
												: (O = `>=${p}.${I}.${w}-${g} <${p}.${+I + 1}.0-0`)
											: (O = `>=${p}.${I}.${w}-${g} <${+p + 1}.0.0-0`))
									: (l("no pr"),
										p === "0"
											? I === "0"
												? (O = `>=${p}.${I}.${w}${h} <${p}.${I}.${+w + 1}-0`)
												: (O = `>=${p}.${I}.${w}${h} <${p}.${+I + 1}.0-0`)
											: (O = `>=${p}.${I}.${w} <${+p + 1}.0.0-0`)),
					l("caret return", O),
					O
				);
			});
		},
		yt = (f, c) => (
			l("replaceXRanges", f, c),
			f
				.split(/\s+/)
				.map(($) => At($, c))
				.join(" ")
		),
		At = (f, c) => {
			f = f.trim();
			const $ = c.loose ? i[d.XRANGELOOSE] : i[d.XRANGE];
			return f.replace($, (h, R, p, I, w, g) => {
				l("xRange", f, h, R, p, I, w, g);
				const O = S(p),
					C = O || S(I),
					N = C || S(w),
					H = N;
				return (
					R === "=" && H && (R = ""),
					(g = c.includePrerelease ? "-0" : ""),
					O
						? R === ">" || R === "<"
							? (h = "<0.0.0-0")
							: (h = "*")
						: R && H
							? (C && (I = 0),
								(w = 0),
								R === ">"
									? ((R = ">="),
										C
											? ((p = +p + 1), (I = 0), (w = 0))
											: ((I = +I + 1), (w = 0)))
									: R === "<=" && ((R = "<"), C ? (p = +p + 1) : (I = +I + 1)),
								R === "<" && (g = "-0"),
								(h = `${R + p}.${I}.${w}${g}`))
							: C
								? (h = `>=${p}.0.0${g} <${+p + 1}.0.0-0`)
								: N && (h = `>=${p}.${I}.0${g} <${p}.${+I + 1}.0-0`),
					l("xRange return", h),
					h
				);
			});
		},
		Ct = (f, c) => (l("replaceStars", f, c), f.trim().replace(i[d.STAR], "")),
		_t = (f, c) => (
			l("replaceGTE0", f, c),
			f.trim().replace(i[c.includePrerelease ? d.GTE0PRE : d.GTE0], "")
		),
		Dt = (f) => (c, $, h, R, p, I, w, g, O, C, N, H) => (
			S(h)
				? ($ = "")
				: S(R)
					? ($ = `>=${h}.0.0${f ? "-0" : ""}`)
					: S(p)
						? ($ = `>=${h}.${R}.0${f ? "-0" : ""}`)
						: I
							? ($ = `>=${$}`)
							: ($ = `>=${$}${f ? "-0" : ""}`),
			S(O)
				? (g = "")
				: S(C)
					? (g = `<${+O + 1}.0.0-0`)
					: S(N)
						? (g = `<${O}.${+C + 1}.0-0`)
						: H
							? (g = `<=${O}.${C}.${N}-${H}`)
							: f
								? (g = `<${O}.${C}.${+N + 1}-0`)
								: (g = `<=${g}`),
			`${$} ${g}`.trim()
		),
		Pt = (f, c, $) => {
			for (let h = 0; h < f.length; h++) if (!f[h].test(c)) return !1;
			if (c.prerelease.length && !$.includePrerelease) {
				for (let h = 0; h < f.length; h++)
					if (
						(l(f[h].semver),
						f[h].semver !== a.ANY && f[h].semver.prerelease.length > 0)
					) {
						const R = f[h].semver;
						if (
							R.major === c.major &&
							R.minor === c.minor &&
							R.patch === c.patch
						)
							return !0;
					}
				return !1;
			}
			return !0;
		};
	return Re;
}
var ve, Be;
function he() {
	if (Be) return ve;
	Be = 1;
	const e = Symbol("SemVer ANY");
	class t {
		static get ANY() {
			return e;
		}
		constructor(s, m) {
			if (((m = r(m)), s instanceof t)) {
				if (s.loose === !!m.loose) return s;
				s = s.value;
			}
			(s = s.trim().split(/\s+/).join(" ")),
				l("comparator", s, m),
				(this.options = m),
				(this.loose = !!m.loose),
				this.parse(s),
				this.semver === e
					? (this.value = "")
					: (this.value = this.operator + this.semver.version),
				l("comp", this);
		}
		parse(s) {
			const m = this.options.loose ? n[o.COMPARATORLOOSE] : n[o.COMPARATOR],
				L = s.match(m);
			if (!L) throw new TypeError(`Invalid comparator: ${s}`);
			(this.operator = L[1] !== void 0 ? L[1] : ""),
				this.operator === "=" && (this.operator = ""),
				L[2]
					? (this.semver = new u(L[2], this.options.loose))
					: (this.semver = e);
		}
		toString() {
			return this.value;
		}
		test(s) {
			if (
				(l("Comparator.test", s, this.options.loose),
				this.semver === e || s === e)
			)
				return !0;
			if (typeof s == "string")
				try {
					s = new u(s, this.options);
				} catch {
					return !1;
				}
			return a(s, this.operator, this.semver, this.options);
		}
		intersects(s, m) {
			if (!(s instanceof t)) throw new TypeError("a Comparator is required");
			return this.operator === ""
				? this.value === ""
					? !0
					: new i(s.value, m).test(this.value)
				: s.operator === ""
					? s.value === ""
						? !0
						: new i(this.value, m).test(s.semver)
					: ((m = r(m)),
						(m.includePrerelease &&
							(this.value === "<0.0.0-0" || s.value === "<0.0.0-0")) ||
						(!m.includePrerelease &&
							(this.value.startsWith("<0.0.0") || s.value.startsWith("<0.0.0")))
							? !1
							: !!(
									(this.operator.startsWith(">") &&
										s.operator.startsWith(">")) ||
									(this.operator.startsWith("<") &&
										s.operator.startsWith("<")) ||
									(this.semver.version === s.semver.version &&
										this.operator.includes("=") &&
										s.operator.includes("=")) ||
									(a(this.semver, "<", s.semver, m) &&
										this.operator.startsWith(">") &&
										s.operator.startsWith("<")) ||
									(a(this.semver, ">", s.semver, m) &&
										this.operator.startsWith("<") &&
										s.operator.startsWith(">"))
								));
		}
	}
	ve = t;
	const r = ye,
		{ safeRe: n, t: o } = Z,
		a = mt,
		l = ue,
		u = y,
		i = b();
	return ve;
}
const sn = b(),
	on = (e, t, r) => {
		try {
			t = new sn(t, r);
		} catch {
			return !1;
		}
		return t.test(e);
	};
var pe = on;
const an = b(),
	ln = (e, t) =>
		new an(e, t).set.map((r) =>
			r
				.map((n) => n.value)
				.join(" ")
				.trim()
				.split(" "),
		);
var cn = ln;
const un = y,
	fn = b(),
	hn = (e, t, r) => {
		let n = null,
			o = null,
			a = null;
		try {
			a = new fn(t, r);
		} catch {
			return null;
		}
		return (
			e.forEach((l) => {
				a.test(l) &&
					(!n || o.compare(l) === -1) &&
					((n = l), (o = new un(n, r)));
			}),
			n
		);
	};
var pn = hn;
const En = y,
	mn = b(),
	dn = (e, t, r) => {
		let n = null,
			o = null,
			a = null;
		try {
			a = new mn(t, r);
		} catch {
			return null;
		}
		return (
			e.forEach((l) => {
				a.test(l) &&
					(!n || o.compare(l) === 1) &&
					((n = l), (o = new En(n, r)));
			}),
			n
		);
	};
var $n = dn;
const Ie = y,
	Rn = b(),
	qe = fe,
	vn = (e, t) => {
		e = new Rn(e, t);
		let r = new Ie("0.0.0");
		if (e.test(r) || ((r = new Ie("0.0.0-0")), e.test(r))) return r;
		r = null;
		for (let n = 0; n < e.set.length; ++n) {
			const o = e.set[n];
			let a = null;
			o.forEach((l) => {
				const u = new Ie(l.semver.version);
				switch (l.operator) {
					case ">":
						u.prerelease.length === 0 ? u.patch++ : u.prerelease.push(0),
							(u.raw = u.format());
					case "":
					case ">=":
						(!a || qe(u, a)) && (a = u);
						break;
					case "<":
					case "<=":
						break;
					default:
						throw new Error(`Unexpected operation: ${l.operator}`);
				}
			}),
				a && (!r || qe(r, a)) && (r = a);
		}
		return r && e.test(r) ? r : null;
	};
var In = vn;
const gn = b(),
	Ln = (e, t) => {
		try {
			return new gn(e, t).range || "*";
		} catch {
			return null;
		}
	};
var wn = Ln;
const On = y,
	dt = he(),
	{ ANY: Nn } = dt,
	Tn = b(),
	Sn = pe,
	ze = fe,
	Ze = Ce,
	yn = De,
	An = _e,
	Cn = (e, t, r, n) => {
		(e = new On(e, n)), (t = new Tn(t, n));
		let o, a, l, u, i;
		switch (r) {
			case ">":
				(o = ze), (a = yn), (l = Ze), (u = ">"), (i = ">=");
				break;
			case "<":
				(o = Ze), (a = An), (l = ze), (u = "<"), (i = "<=");
				break;
			default:
				throw new TypeError('Must provide a hilo val of "<" or ">"');
		}
		if (Sn(e, t, n)) return !1;
		for (let d = 0; d < t.set.length; ++d) {
			const s = t.set[d];
			let m = null,
				L = null;
			if (
				(s.forEach((E) => {
					E.semver === Nn && (E = new dt(">=0.0.0")),
						(m = m || E),
						(L = L || E),
						o(E.semver, m.semver, n)
							? (m = E)
							: l(E.semver, L.semver, n) && (L = E);
				}),
				m.operator === u ||
					m.operator === i ||
					((!L.operator || L.operator === u) && a(e, L.semver)))
			)
				return !1;
			if (L.operator === i && l(e, L.semver)) return !1;
		}
		return !0;
	};
var Pe = Cn;
const _n = Pe,
	Dn = (e, t, r) => _n(e, t, ">", r);
var Pn = Dn;
const bn = Pe,
	Un = (e, t, r) => bn(e, t, "<", r);
var Fn = Un;
const Je = b(),
	kn = (e, t, r) => (
		(e = new Je(e, r)), (t = new Je(t, r)), e.intersects(t, r)
	);
var Gn = kn;
const Mn = pe,
	jn = P;
var Xn = (e, t, r) => {
	const n = [];
	let o = null,
		a = null;
	const l = e.sort((s, m) => jn(s, m, r));
	for (const s of l)
		Mn(s, t, r)
			? ((a = s), o || (o = s))
			: (a && n.push([o, a]), (a = null), (o = null));
	o && n.push([o, null]);
	const u = [];
	for (const [s, m] of n)
		s === m
			? u.push(s)
			: !m && s === l[0]
				? u.push("*")
				: m
					? s === l[0]
						? u.push(`<=${m}`)
						: u.push(`${s} - ${m}`)
					: u.push(`>=${s}`);
	const i = u.join(" || "),
		d = typeof t.raw == "string" ? t.raw : String(t);
	return i.length < d.length ? i : t;
};
const Qe = b(),
	be = he(),
	{ ANY: ge } = be,
	K = pe,
	Ue = P,
	xn = (e, t, r = {}) => {
		if (e === t) return !0;
		(e = new Qe(e, r)), (t = new Qe(t, r));
		let n = !1;
		e: for (const o of e.set) {
			for (const a of t.set) {
				const l = Yn(o, a, r);
				if (((n = n || l !== null), l)) continue e;
			}
			if (n) return !1;
		}
		return !0;
	},
	Vn = [new be(">=0.0.0-0")],
	et = [new be(">=0.0.0")],
	Yn = (e, t, r) => {
		if (e === t) return !0;
		if (e.length === 1 && e[0].semver === ge) {
			if (t.length === 1 && t[0].semver === ge) return !0;
			r.includePrerelease ? (e = Vn) : (e = et);
		}
		if (t.length === 1 && t[0].semver === ge) {
			if (r.includePrerelease) return !0;
			t = et;
		}
		const n = new Set();
		let o, a;
		for (const E of e)
			E.operator === ">" || E.operator === ">="
				? (o = tt(o, E, r))
				: E.operator === "<" || E.operator === "<="
					? (a = rt(a, E, r))
					: n.add(E.semver);
		if (n.size > 1) return null;
		let l;
		if (o && a) {
			if (((l = Ue(o.semver, a.semver, r)), l > 0)) return null;
			if (l === 0 && (o.operator !== ">=" || a.operator !== "<=")) return null;
		}
		for (const E of n) {
			if ((o && !K(E, String(o), r)) || (a && !K(E, String(a), r))) return null;
			for (const W of t) if (!K(E, String(W), r)) return !1;
			return !0;
		}
		let u,
			i,
			d,
			s,
			m =
				a && !r.includePrerelease && a.semver.prerelease.length ? a.semver : !1,
			L =
				o && !r.includePrerelease && o.semver.prerelease.length ? o.semver : !1;
		m &&
			m.prerelease.length === 1 &&
			a.operator === "<" &&
			m.prerelease[0] === 0 &&
			(m = !1);
		for (const E of t) {
			if (
				((s = s || E.operator === ">" || E.operator === ">="),
				(d = d || E.operator === "<" || E.operator === "<="),
				o)
			) {
				if (
					(L &&
						E.semver.prerelease &&
						E.semver.prerelease.length &&
						E.semver.major === L.major &&
						E.semver.minor === L.minor &&
						E.semver.patch === L.patch &&
						(L = !1),
					E.operator === ">" || E.operator === ">=")
				) {
					if (((u = tt(o, E, r)), u === E && u !== o)) return !1;
				} else if (o.operator === ">=" && !K(o.semver, String(E), r)) return !1;
			}
			if (a) {
				if (
					(m &&
						E.semver.prerelease &&
						E.semver.prerelease.length &&
						E.semver.major === m.major &&
						E.semver.minor === m.minor &&
						E.semver.patch === m.patch &&
						(m = !1),
					E.operator === "<" || E.operator === "<=")
				) {
					if (((i = rt(a, E, r)), i === E && i !== a)) return !1;
				} else if (a.operator === "<=" && !K(a.semver, String(E), r)) return !1;
			}
			if (!E.operator && (a || o) && l !== 0) return !1;
		}
		return !((o && d && !a && l !== 0) || (a && s && !o && l !== 0) || L || m);
	},
	tt = (e, t, r) => {
		if (!e) return t;
		const n = Ue(e.semver, t.semver, r);
		return n > 0
			? e
			: n < 0 || (t.operator === ">" && e.operator === ">=")
				? t
				: e;
	},
	rt = (e, t, r) => {
		if (!e) return t;
		const n = Ue(e.semver, t.semver, r);
		return n < 0
			? e
			: n > 0 || (t.operator === "<" && e.operator === "<=")
				? t
				: e;
	};
var Wn = xn;
const Le = Z,
	nt = ce,
	Hn = y,
	st = ht,
	Kn = x,
	Bn = Qt,
	qn = rr,
	zn = sr,
	Zn = or,
	Jn = cr,
	Qn = hr,
	es = mr,
	ts = Rr,
	rs = P,
	ns = Lr,
	ss = Nr,
	is = Ae,
	os = Ar,
	as = Dr,
	ls = fe,
	cs = Ce,
	us = pt,
	fs = Et,
	hs = _e,
	ps = De,
	Es = mt,
	ms = tn,
	ds = he(),
	$s = b(),
	Rs = pe,
	vs = cn,
	Is = pn,
	gs = $n,
	Ls = In,
	ws = wn,
	Os = Pe,
	Ns = Pn,
	Ts = Fn,
	Ss = Gn,
	ys = Xn,
	As = Wn;
var Cs = {
	parse: Kn,
	valid: Bn,
	clean: qn,
	inc: zn,
	diff: Zn,
	major: Jn,
	minor: Qn,
	patch: es,
	prerelease: ts,
	compare: rs,
	rcompare: ns,
	compareLoose: ss,
	compareBuild: is,
	sort: os,
	rsort: as,
	gt: ls,
	lt: cs,
	eq: us,
	neq: fs,
	gte: hs,
	lte: ps,
	cmp: Es,
	coerce: ms,
	Comparator: ds,
	Range: $s,
	satisfies: Rs,
	toComparators: vs,
	maxSatisfying: Is,
	minSatisfying: gs,
	minVersion: Ls,
	validRange: ws,
	outside: Os,
	gtr: Ns,
	ltr: Ts,
	intersects: Ss,
	simplifyRange: ys,
	subset: As,
	SemVer: Hn,
	re: Le.re,
	src: Le.src,
	tokens: Le.t,
	SEMVER_SPEC_VERSION: nt.SEMVER_SPEC_VERSION,
	RELEASE_TYPES: nt.RELEASE_TYPES,
	compareIdentifiers: st.compareIdentifiers,
	rcompareIdentifiers: st.rcompareIdentifiers,
};
const it = Ft(Cs);
var T = {}; /**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V = F,
	Fe = kt;
function $t(e) {
	var t = e,
		r = e;
	if (e.alternate) while (t.return) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? r : null;
}
function ot(e) {
	if ($t(e) !== e)
		throw Error("Unable to find node on an unmounted component.");
}
function _s(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = $t(e)), t === null))
			throw Error("Unable to find node on an unmounted component.");
		return t !== e ? null : e;
	}
	for (var r = e, n = t; ; ) {
		var o = r.return;
		if (o === null) break;
		var a = o.alternate;
		if (a === null) {
			if (((n = o.return), n !== null)) {
				r = n;
				continue;
			}
			break;
		}
		if (o.child === a.child) {
			for (a = o.child; a; ) {
				if (a === r) return ot(o), e;
				if (a === n) return ot(o), t;
				a = a.sibling;
			}
			throw Error("Unable to find node on an unmounted component.");
		}
		if (r.return !== n.return) (r = o), (n = a);
		else {
			for (var l = !1, u = o.child; u; ) {
				if (u === r) {
					(l = !0), (r = o), (n = a);
					break;
				}
				if (u === n) {
					(l = !0), (n = o), (r = a);
					break;
				}
				u = u.sibling;
			}
			if (!l) {
				for (u = a.child; u; ) {
					if (u === r) {
						(l = !0), (r = a), (n = o);
						break;
					}
					if (u === n) {
						(l = !0), (n = a), (r = o);
						break;
					}
					u = u.sibling;
				}
				if (!l)
					throw Error(
						"Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.",
					);
			}
		}
		if (r.alternate !== n)
			throw Error(
				"Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
			);
	}
	if (r.tag !== 3)
		throw Error("Unable to find node on an unmounted component.");
	return r.stateNode.current === r ? e : t;
}
var A = Object.assign;
function we(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function oe() {
	return !0;
}
function at() {
	return !1;
}
function _(e) {
	function t(r, n, o, a, l) {
		(this._reactName = r),
			(this._targetInst = o),
			(this.type = n),
			(this.nativeEvent = a),
			(this.target = l),
			(this.currentTarget = null);
		for (var u in e)
			e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(a) : a[u]));
		return (
			(this.isDefaultPrevented = (
				a.defaultPrevented != null
					? a.defaultPrevented
					: a.returnValue === !1
			)
				? oe
				: at),
			(this.isPropagationStopped = at),
			this
		);
	}
	return (
		A(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var r = this.nativeEvent;
				r &&
					(r.preventDefault
						? r.preventDefault()
						: typeof r.returnValue != "unknown" && (r.returnValue = !1),
					(this.isDefaultPrevented = oe));
			},
			stopPropagation: function () {
				var r = this.nativeEvent;
				r &&
					(r.stopPropagation
						? r.stopPropagation()
						: typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
					(this.isPropagationStopped = oe));
			},
			persist: () => {},
			isPersistent: oe,
		}),
		t
	);
}
var Y = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: (e) => e.timeStamp || Date.now(),
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Ds = _(Y),
	J = A({}, Y, { view: 0, detail: 0 });
_(J);
var Oe,
	Ne,
	B,
	Ee = A({}, J, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ke,
		button: 0,
		buttons: 0,
		relatedTarget: (e) =>
			e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget,
		movementX: (e) =>
			"movementX" in e
				? e.movementX
				: (e !== B &&
						(B && e.type === "mousemove"
							? ((Oe = e.screenX - B.screenX), (Ne = e.screenY - B.screenY))
							: (Ne = Oe = 0),
						(B = e)),
					Oe),
		movementY: (e) => ("movementY" in e ? e.movementY : Ne),
	});
_(Ee);
var Ps = A({}, Ee, { dataTransfer: 0 });
_(Ps);
var bs = A({}, J, { relatedTarget: 0 });
_(bs);
var Us = A({}, Y, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
_(Us);
var Fs = A({}, Y, {
	clipboardData: (e) =>
		"clipboardData" in e ? e.clipboardData : window.clipboardData,
});
_(Fs);
var ks = A({}, Y, { data: 0 });
_(ks);
var Gs = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	Ms = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	js = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function Xs(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = js[e]) ? !!t[e] : !1;
}
function ke() {
	return Xs;
}
var xs = A({}, J, {
	key: (e) => {
		if (e.key) {
			var t = Gs[e.key] || e.key;
			if (t !== "Unidentified") return t;
		}
		return e.type === "keypress"
			? ((e = we(e)), e === 13 ? "Enter" : String.fromCharCode(e))
			: e.type === "keydown" || e.type === "keyup"
				? Ms[e.keyCode] || "Unidentified"
				: "";
	},
	code: 0,
	location: 0,
	ctrlKey: 0,
	shiftKey: 0,
	altKey: 0,
	metaKey: 0,
	repeat: 0,
	locale: 0,
	getModifierState: ke,
	charCode: (e) => (e.type === "keypress" ? we(e) : 0),
	keyCode: (e) => (e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0),
	which: (e) =>
		e.type === "keypress"
			? we(e)
			: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0,
});
_(xs);
var Vs = A({}, Ee, {
	pointerId: 0,
	width: 0,
	height: 0,
	pressure: 0,
	tangentialPressure: 0,
	tiltX: 0,
	tiltY: 0,
	twist: 0,
	pointerType: 0,
	isPrimary: 0,
});
_(Vs);
var Ys = A({}, J, {
	touches: 0,
	targetTouches: 0,
	changedTouches: 0,
	altKey: 0,
	metaKey: 0,
	ctrlKey: 0,
	shiftKey: 0,
	getModifierState: ke,
});
_(Ys);
var Ws = A({}, Y, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
_(Ws);
var Hs = A({}, Ee, {
	deltaX: (e) =>
		"deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0,
	deltaY: (e) =>
		"deltaY" in e
			? e.deltaY
			: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
					? -e.wheelDelta
					: 0,
	deltaZ: 0,
	deltaMode: 0,
});
_(Hs);
function Ks(e, t, r, n, o, a, l, u, i) {
	var d = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(r, d);
	} catch (s) {
		this.onError(s);
	}
}
var z = !1,
	ae = null,
	le = !1,
	Se = null,
	Bs = {
		onError: (e) => {
			(z = !0), (ae = e);
		},
	};
function qs(e, t, r, n, o, a, l, u, i) {
	(z = !1), (ae = null), Ks.apply(Bs, arguments);
}
function zs(e, t, r, n, o, a, l, u, i) {
	if ((qs.apply(this, arguments), z)) {
		if (z) {
			var d = ae;
			(z = !1), (ae = null);
		} else
			throw Error(
				"clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.",
			);
		le || ((le = !0), (Se = d));
	}
}
var Ge = Array.isArray,
	Q = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
	Zs = Q[0],
	Js = Q[1],
	Qs = Q[2],
	ei = Q[3],
	ti = Q[4],
	ri = V.unstable_act;
function ni() {}
function si(e, t) {
	if (!e) return [];
	if (((e = _s(e)), !e)) return [];
	for (var r = e, n = []; ; ) {
		if (r.tag === 5 || r.tag === 6 || r.tag === 1 || r.tag === 0) {
			var o = r.stateNode;
			t(o) && n.push(o);
		}
		if (r.child) (r.child.return = r), (r = r.child);
		else {
			if (r === e) return n;
			while (!r.sibling) {
				if (!r.return || r.return === e) return n;
				r = r.return;
			}
			(r.sibling.return = r.return), (r = r.sibling);
		}
	}
}
function j(e, t) {
	if (e && !e._reactInternals) {
		var r = String(e);
		throw (
			((e = Ge(e)
				? "an array"
				: e && e.nodeType === 1 && e.tagName
					? "a DOM node"
					: r === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: r),
			Error(
				t +
					"(...): the first argument must be a React class instance. Instead received: " +
					(e + "."),
			))
		);
	}
}
function me(e) {
	return !(!e || e.nodeType !== 1 || !e.tagName);
}
function Me(e) {
	return me(e)
		? !1
		: e != null &&
				typeof e.render == "function" &&
				typeof e.setState == "function";
}
function Rt(e, t) {
	return Me(e) ? e._reactInternals.type === t : !1;
}
function de(e, t) {
	return j(e, "findAllInRenderedTree"), e ? si(e._reactInternals, t) : [];
}
function vt(e, t) {
	return (
		j(e, "scryRenderedDOMComponentsWithClass"),
		de(e, (r) => {
			if (me(r)) {
				var n = r.className;
				typeof n != "string" && (n = r.getAttribute("class") || "");
				var o = n.split(/\s+/);
				if (!Ge(t)) {
					if (t === void 0)
						throw Error(
							"TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.",
						);
					t = t.split(/\s+/);
				}
				return t.every((a) => o.indexOf(a) !== -1);
			}
			return !1;
		})
	);
}
function It(e, t) {
	return (
		j(e, "scryRenderedDOMComponentsWithTag"),
		de(e, (r) => me(r) && r.tagName.toUpperCase() === t.toUpperCase())
	);
}
function gt(e, t) {
	return j(e, "scryRenderedComponentsWithType"), de(e, (r) => Rt(r, t));
}
function lt(e, t, r) {
	var n = e.type || "unknown-event";
	(e.currentTarget = Js(r)), zs(n, t, void 0, e), (e.currentTarget = null);
}
function Lt(e, t, r) {
	for (var n = []; e; ) {
		n.push(e);
		do e = e.return;
		while (e && e.tag !== 5);
		e = e || null;
	}
	for (e = n.length; 0 < e--; ) t(n[e], "captured", r);
	for (e = 0; e < n.length; e++) t(n[e], "bubbled", r);
}
function wt(e, t) {
	var r = e.stateNode;
	if (!r) return null;
	var n = Qs(r);
	if (!n) return null;
	r = n[t];
	switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(n = !n.disabled) ||
				((e = e.type),
				(n = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !n);
			break;
		default:
			e = !1;
	}
	if (e) return null;
	if (r && typeof r != "function")
		throw Error(
			"Expected `" +
				t +
				"` listener to be a function, instead got a value of `" +
				typeof r +
				"` type.",
		);
	return r;
}
function ii(e, t, r) {
	e &&
		r &&
		r._reactName &&
		(t = wt(e, r._reactName)) &&
		(r._dispatchListeners == null && (r._dispatchListeners = []),
		r._dispatchInstances == null && (r._dispatchInstances = []),
		r._dispatchListeners.push(t),
		r._dispatchInstances.push(e));
}
function oi(e, t, r) {
	var n = r._reactName;
	t === "captured" && (n += "Capture"),
		(t = wt(e, n)) &&
			(r._dispatchListeners == null && (r._dispatchListeners = []),
			r._dispatchInstances == null && (r._dispatchInstances = []),
			r._dispatchListeners.push(t),
			r._dispatchInstances.push(e));
}
var Ot = {},
	ai = new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
function li(e) {
	return (t, r) => {
		if (V.isValidElement(t))
			throw Error(
				"TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.",
			);
		if (Me(t))
			throw Error(
				"TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.",
			);
		var n = "on" + e[0].toUpperCase() + e.slice(1),
			o = new ni();
		(o.target = t), (o.type = e.toLowerCase());
		var a = Zs(t),
			l = new Ds(n, o.type, a, o, t);
		l.persist(),
			A(l, r),
			ai.has(e)
				? l && l._reactName && ii(l._targetInst, null, l)
				: l && l._reactName && Lt(l._targetInst, oi, l),
			Fe.unstable_batchedUpdates(() => {
				if ((ei(t), l)) {
					var u = l._dispatchListeners,
						i = l._dispatchInstances;
					if (Ge(u))
						for (var d = 0; d < u.length && !l.isPropagationStopped(); d++)
							lt(l, u[d], i[d]);
					else u && lt(l, u, i);
					(l._dispatchListeners = null),
						(l._dispatchInstances = null),
						l.isPersistent() || l.constructor.release(l);
				}
				if (le) throw ((u = Se), (le = !1), (Se = null), u);
			}),
			ti();
	};
}
"blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate"
	.split(" ")
	.forEach((e) => {
		Ot[e] = li(e);
	});
T.Simulate = Ot;
T.act = ri;
T.findAllInRenderedTree = de;
T.findRenderedComponentWithType = (e, t) => {
	if ((j(e, "findRenderedComponentWithType"), (e = gt(e, t)), e.length !== 1))
		throw Error(
			"Did not find exactly one match (found: " +
				e.length +
				") for componentType:" +
				t,
		);
	return e[0];
};
T.findRenderedDOMComponentWithClass = (e, t) => {
	if (
		(j(e, "findRenderedDOMComponentWithClass"), (e = vt(e, t)), e.length !== 1)
	)
		throw Error(
			"Did not find exactly one match (found: " + e.length + ") for class:" + t,
		);
	return e[0];
};
T.findRenderedDOMComponentWithTag = (e, t) => {
	if ((j(e, "findRenderedDOMComponentWithTag"), (e = It(e, t)), e.length !== 1))
		throw Error(
			"Did not find exactly one match (found: " + e.length + ") for tag:" + t,
		);
	return e[0];
};
T.isCompositeComponent = Me;
T.isCompositeComponentWithType = Rt;
T.isDOMComponent = me;
T.isDOMComponentElement = (e) => !!(e && V.isValidElement(e) && e.tagName);
T.isElement = (e) => V.isValidElement(e);
T.isElementOfType = (e, t) => V.isValidElement(e) && e.type === t;
T.mockComponent = function (e, t) {
	return (
		(t = t || e.mockTagName || "div"),
		e.prototype.render.mockImplementation(function () {
			return V.createElement(t, null, this.props.children);
		}),
		this
	);
};
T.nativeTouchData = (e, t) => ({ touches: [{ pageX: e, pageY: t }] });
T.renderIntoDocument = (e) => {
	var t = document.createElement("div");
	return Fe.render(e, t);
};
T.scryRenderedComponentsWithType = gt;
T.scryRenderedDOMComponentsWithClass = vt;
T.scryRenderedDOMComponentsWithTag = It;
T.traverseTwoPhase = Lt;
const { global: ci } = __STORYBOOK_MODULE_GLOBAL__;
var ui = {};
Ut(ui, {
	decorators: () => Ri,
	mount: () => di,
	parameters: () => $i,
	render: () => fi,
	renderToCanvas: () => mi,
});
var fi = (e, t) => {
	const { id: r, component: n } = t;
	if (!n)
		throw new Error(
			`Unable to render story ${r} as the component annotation is missing from the default export`,
		);
	return q.createElement(n, { ...e });
};
function hi() {
	return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var { FRAMEWORK_OPTIONS: pi } = ci,
	Ei = class extends F.Component {
		constructor() {
			super(...arguments), (this.state = { hasError: !1 });
		}
		static getDerivedStateFromError() {
			return { hasError: !0 };
		}
		componentDidMount() {
			const { hasError: e } = this.state,
				{ showMain: t } = this.props;
			e || t();
		}
		componentDidCatch(e) {
			const { showException: t } = this.props;
			t(e);
		}
		render() {
			const { hasError: e } = this.state,
				{ children: t } = this.props;
			return e ? null : t;
		}
	},
	ct = pi?.strictMode ? F.StrictMode : F.Fragment;
async function mi(
	{
		storyContext: e,
		unboundStoryFn: t,
		showMain: r,
		showException: n,
		forceRemount: o,
	},
	a,
) {
	const { renderElement: l, unmountElement: u } = await bt(
			() => import("./react-18-CpP9hRgD.js"),
			__vite__mapDeps([0, 1, 2]),
			import.meta.url,
		),
		i = t,
		d = hi()
			? q.createElement(i, { ...e })
			: q.createElement(
					Ei,
					{ showMain: r, showException: n },
					q.createElement(i, { ...e }),
				),
		s = ct ? q.createElement(ct, null, d) : d;
	return (
		o && u(a), await l(s, a, e?.parameters?.react?.rootOptions), () => u(a)
	);
}
var di = (e) => async (t) => (
		t != null && (e.originalStoryFn = () => t),
		await e.renderToCanvas(),
		e.canvas
	),
	$i = { renderer: "react" },
	Ri = [
		(e, t) => {
			if (!t.parameters?.react?.rsc) return F.createElement(e, null);
			const r = it.major(F.version),
				n = it.minor(F.version);
			if (r < 18 || (r === 18 && n < 3))
				throw new Error("React Server Components require React >= 18.3");
			return F.createElement(F.Suspense, null, F.createElement(e, null));
		},
	];
export {
	Ri as decorators,
	di as mount,
	$i as parameters,
	fi as render,
	mi as renderToCanvas,
};

try {
	(() => {
		var co = Object.create;
		var ft = Object.defineProperty;
		var uo = Object.getOwnPropertyDescriptor;
		var po = Object.getOwnPropertyNames;
		var fo = Object.getPrototypeOf,
			ho = Object.prototype.hasOwnProperty;
		var pe = (e, t) => () => (e && (t = e((e = 0))), t);
		var Mt = (e, t) => () => (
				t || e((t = { exports: {} }).exports, t), t.exports
			),
			mn = (e, t) => {
				for (var n in t) ft(e, n, { get: t[n], enumerable: !0 });
			},
			yn = (e, t, n, r) => {
				if ((t && typeof t == "object") || typeof t == "function")
					for (const o of po(t))
						!ho.call(e, o) &&
							o !== n &&
							ft(e, o, {
								get: () => t[o],
								enumerable: !(r = uo(t, o)) || r.enumerable,
							});
				return e;
			};
		var gn = (e, t, n) => (
				(n = e != null ? co(fo(e)) : {}),
				yn(
					t || !e || !e.__esModule
						? ft(n, "default", { value: e, enumerable: !0 })
						: n,
					e,
				)
			),
			mo = (e) => yn(ft({}, "__esModule", { value: !0 }), e);
		var z = pe(() => {});
		var q = pe(() => {});
		var $ = pe(() => {});
		var Bt = {};
		mn(Bt, {
			Children: () => yo,
			Component: () => Ie,
			Fragment: () => go,
			Profiler: () => bo,
			PureComponent: () => vo,
			StrictMode: () => Eo,
			Suspense: () => Lt,
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => wo,
			cloneElement: () => Oo,
			createContext: () => So,
			createElement: () => V,
			createFactory: () => To,
			createRef: () => Io,
			default: () => m,
			forwardRef: () => Dt,
			isValidElement: () => jt,
			lazy: () => Ft,
			memo: () => Co,
			startTransition: () => Ro,
			unstable_act: () => _o,
			useCallback: () => je,
			useContext: () => Po,
			useDebugValue: () => xo,
			useDeferredValue: () => Ao,
			useEffect: () => le,
			useId: () => ko,
			useImperativeHandle: () => No,
			useInsertionEffect: () => Mo,
			useLayoutEffect: () => Lo,
			useMemo: () => Do,
			useReducer: () => jo,
			useRef: () => Fo,
			useState: () => ce,
			useSyncExternalStore: () => Bo,
			useTransition: () => Uo,
			version: () => Wo,
		});
		var m,
			yo,
			Ie,
			go,
			bo,
			vo,
			Eo,
			Lt,
			wo,
			Oo,
			So,
			V,
			To,
			Io,
			Dt,
			jt,
			Ft,
			Co,
			Ro,
			_o,
			je,
			Po,
			xo,
			Ao,
			le,
			ko,
			No,
			Mo,
			Lo,
			Do,
			jo,
			Fo,
			ce,
			Bo,
			Uo,
			Wo,
			Fe = pe(() => {
				z();
				q();
				$();
				(m = __REACT__),
					({
						Children: yo,
						Component: Ie,
						Fragment: go,
						Profiler: bo,
						PureComponent: vo,
						StrictMode: Eo,
						Suspense: Lt,
						__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: wo,
						cloneElement: Oo,
						createContext: So,
						createElement: V,
						createFactory: To,
						createRef: Io,
						forwardRef: Dt,
						isValidElement: jt,
						lazy: Ft,
						memo: Co,
						startTransition: Ro,
						unstable_act: _o,
						useCallback: je,
						useContext: Po,
						useDebugValue: xo,
						useDeferredValue: Ao,
						useEffect: le,
						useId: ko,
						useImperativeHandle: No,
						useInsertionEffect: Mo,
						useLayoutEffect: Lo,
						useMemo: Do,
						useReducer: jo,
						useRef: Fo,
						useState: ce,
						useSyncExternalStore: Bo,
						useTransition: Uo,
						version: Wo,
					} = __REACT__);
			});
		var ke,
			hl,
			qe,
			ml,
			yl,
			gl,
			bl,
			vl,
			El,
			bn,
			wl,
			vn,
			Ol,
			dt = pe(() => {
				z();
				q();
				$();
				(ke = __REACT_DOM__),
					({
						__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hl,
						createPortal: qe,
						createRoot: ml,
						findDOMNode: yl,
						flushSync: gl,
						hydrate: bl,
						hydrateRoot: vl,
						render: El,
						unmountComponentAtNode: bn,
						unstable_batchedUpdates: wl,
						unstable_renderSubtreeIntoContainer: vn,
						version: Ol,
					} = __REACT_DOM__);
			});
		var Cl,
			Rl,
			_l,
			Pl,
			xl,
			Al,
			kl,
			Nl,
			Ml,
			Ll,
			Dl,
			jl,
			Fl,
			Bl,
			Ul,
			Wl,
			Hl,
			Gl,
			Yl,
			zl,
			ql,
			$l,
			Vl,
			Kl,
			Ql,
			Xl,
			En,
			Jl,
			Zl,
			ec,
			tc,
			nc,
			rc,
			oc,
			ic,
			sc,
			ac,
			lc,
			cc,
			uc,
			pc,
			fc,
			dc,
			hc,
			mc,
			yc,
			gc,
			bc,
			wn,
			vc,
			Ec,
			wc,
			Oc,
			Sc,
			Tc,
			Ic,
			Cc,
			Rc,
			_c,
			Pc,
			xc,
			Ac,
			kc,
			On = pe(() => {
				z();
				q();
				$();
				(Cl = __STORYBOOK_CORE_EVENTS__),
					({
						ARGTYPES_INFO_REQUEST: Rl,
						ARGTYPES_INFO_RESPONSE: _l,
						CHANNEL_CREATED: Pl,
						CHANNEL_WS_DISCONNECT: xl,
						CONFIG_ERROR: Al,
						CREATE_NEW_STORYFILE_REQUEST: kl,
						CREATE_NEW_STORYFILE_RESPONSE: Nl,
						CURRENT_STORY_WAS_SET: Ml,
						DOCS_PREPARED: Ll,
						DOCS_RENDERED: Dl,
						FILE_COMPONENT_SEARCH_REQUEST: jl,
						FILE_COMPONENT_SEARCH_RESPONSE: Fl,
						FORCE_REMOUNT: Bl,
						FORCE_RE_RENDER: Ul,
						GLOBALS_UPDATED: Wl,
						NAVIGATE_URL: Hl,
						PLAY_FUNCTION_THREW_EXCEPTION: Gl,
						PRELOAD_ENTRIES: Yl,
						PREVIEW_BUILDER_PROGRESS: zl,
						PREVIEW_KEYDOWN: ql,
						REGISTER_SUBSCRIPTION: $l,
						REQUEST_WHATS_NEW_DATA: Vl,
						RESET_STORY_ARGS: Kl,
						RESULT_WHATS_NEW_DATA: Ql,
						SAVE_STORY_REQUEST: Xl,
						SAVE_STORY_RESPONSE: En,
						SELECT_STORY: Jl,
						SET_CONFIG: Zl,
						SET_CURRENT_STORY: ec,
						SET_FILTER: tc,
						SET_GLOBALS: nc,
						SET_INDEX: rc,
						SET_STORIES: oc,
						SET_WHATS_NEW_CACHE: ic,
						SHARED_STATE_CHANGED: sc,
						SHARED_STATE_SET: ac,
						STORIES_COLLAPSE_ALL: lc,
						STORIES_EXPAND_ALL: cc,
						STORY_ARGS_UPDATED: uc,
						STORY_CHANGED: pc,
						STORY_ERRORED: fc,
						STORY_FINISHED: dc,
						STORY_INDEX_INVALIDATED: hc,
						STORY_MISSING: mc,
						STORY_PREPARED: yc,
						STORY_RENDERED: gc,
						STORY_RENDER_PHASE_CHANGED: bc,
						STORY_SPECIFIED: wn,
						STORY_THREW_EXCEPTION: vc,
						STORY_UNCHANGED: Ec,
						TELEMETRY_ERROR: wc,
						TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: Oc,
						TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: Sc,
						TESTING_MODULE_CRASH_REPORT: Tc,
						TESTING_MODULE_PROGRESS_REPORT: Ic,
						TESTING_MODULE_RUN_ALL_REQUEST: Cc,
						TESTING_MODULE_RUN_REQUEST: Rc,
						TOGGLE_WHATS_NEW_NOTIFICATIONS: _c,
						UNHANDLED_ERRORS_WHILE_PLAYING: Pc,
						UPDATE_GLOBALS: xc,
						UPDATE_QUERY_PARAMS: Ac,
						UPDATE_STORY_ARGS: kc,
					} = __STORYBOOK_CORE_EVENTS__);
			});
		var Ut = pe(() => {
			z();
			q();
			$();
			On();
		});
		var Ru,
			_u,
			Pu,
			xu,
			Au,
			ku,
			Nu,
			Mu,
			Lu,
			Du,
			ju,
			Fu,
			Bu,
			Uu,
			Wu,
			Hu,
			Gu,
			Yu,
			zu,
			qu,
			$u,
			Vu,
			Ku,
			Qu,
			Tn,
			Xu,
			Ju,
			Zu,
			ep,
			tp,
			np,
			rp,
			op,
			ip,
			sp,
			ap,
			lp,
			cp,
			up,
			pp,
			fp,
			dp,
			hp,
			mp,
			yp,
			gp,
			In,
			bp,
			vp,
			Ep,
			wp,
			Op,
			Sp,
			Tp,
			Ip,
			Cp,
			Rp,
			_p,
			Pp,
			xp,
			Ap,
			kp,
			Np,
			Mp,
			Lp,
			Dp,
			jp,
			Fp,
			Bp,
			Up,
			Cn = pe(() => {
				z();
				q();
				$();
				(Ru = __STORYBOOK_COMPONENTS__),
					({
						A: _u,
						ActionBar: Pu,
						AddonPanel: xu,
						Badge: Au,
						Bar: ku,
						Blockquote: Nu,
						Button: Mu,
						ClipboardCode: Lu,
						Code: Du,
						DL: ju,
						Div: Fu,
						DocumentWrapper: Bu,
						EmptyTabContent: Uu,
						ErrorFormatter: Wu,
						FlexBar: Hu,
						Form: Gu,
						H1: Yu,
						H2: zu,
						H3: qu,
						H4: $u,
						H5: Vu,
						H6: Ku,
						HR: Qu,
						IconButton: Tn,
						IconButtonSkeleton: Xu,
						Icons: Ju,
						Img: Zu,
						LI: ep,
						Link: tp,
						ListItem: np,
						Loader: rp,
						Modal: op,
						OL: ip,
						P: sp,
						Placeholder: ap,
						Pre: lp,
						ProgressSpinner: cp,
						ResetWrapper: up,
						ScrollArea: pp,
						Separator: fp,
						Spaced: dp,
						Span: hp,
						StorybookIcon: mp,
						StorybookLogo: yp,
						Symbols: gp,
						SyntaxHighlighter: In,
						TT: bp,
						TabBar: vp,
						TabButton: Ep,
						TabWrapper: wp,
						Table: Op,
						Tabs: Sp,
						TabsState: Tp,
						TooltipLinkList: Ip,
						TooltipMessage: Cp,
						TooltipNote: Rp,
						UL: _p,
						WithTooltip: Pp,
						WithTooltipPure: xp,
						Zoom: Ap,
						codeCommon: kp,
						components: Np,
						createCopyToClipboardFunction: Mp,
						getStoryHref: Lp,
						icons: Dp,
						interleaveSeparators: jp,
						nameSpaceClassNames: Fp,
						resetComponents: Bp,
						withReset: Up,
					} = __STORYBOOK_COMPONENTS__);
			});
		var zp,
			qp,
			$p,
			Vp,
			Wt,
			Kp,
			ht,
			Ht,
			Qp,
			Xp,
			Jp,
			Zp,
			ef,
			tf,
			nf,
			rf,
			of,
			sf,
			$e,
			af,
			Z,
			Rn,
			lf,
			_n,
			cf,
			Pn = pe(() => {
				z();
				q();
				$();
				(zp = __STORYBOOK_THEMING__),
					({
						CacheProvider: qp,
						ClassNames: $p,
						Global: Vp,
						ThemeProvider: Wt,
						background: Kp,
						color: ht,
						convert: Ht,
						create: Qp,
						createCache: Xp,
						createGlobal: Jp,
						createReset: Zp,
						css: ef,
						darken: tf,
						ensure: nf,
						ignoreSsrWarning: rf,
						isPropValid: of,
						jsx: sf,
						keyframes: $e,
						lighten: af,
						styled: Z,
						themes: Rn,
						typography: lf,
						useTheme: _n,
						withTheme: cf,
					} = __STORYBOOK_THEMING__);
			});
		var An = Mt((mt) => {
			z();
			q();
			$();
			var Go = (Fe(), mo(Bt)),
				Yo = Symbol.for("react.element"),
				zo = Symbol.for("react.fragment"),
				qo = Object.prototype.hasOwnProperty,
				$o =
					Go.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
						.ReactCurrentOwner,
				Vo = { key: !0, ref: !0, __self: !0, __source: !0 };
			function xn(e, t, n) {
				var r,
					o = {},
					i = null,
					s = null;
				n !== void 0 && (i = "" + n),
					t.key !== void 0 && (i = "" + t.key),
					t.ref !== void 0 && (s = t.ref);
				for (r in t) qo.call(t, r) && !Vo.hasOwnProperty(r) && (o[r] = t[r]);
				if (e && e.defaultProps)
					for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
				return {
					$$typeof: Yo,
					type: e,
					key: i,
					ref: s,
					props: o,
					_owner: $o.current,
				};
			}
			mt.Fragment = zo;
			mt.jsx = xn;
			mt.jsxs = xn;
		});
		var Nn = Mt((bf, kn) => {
			z();
			q();
			$();
			kn.exports = An();
		});
		var Ln = Mt((Of, Mn) => {
			z();
			q();
			$();
			var yt = {
				linear: (e, t, n, r) => {
					var o = n - t;
					return (o * e) / r + t;
				},
				easeInQuad: (e, t, n, r) => {
					var o = n - t;
					return o * (e /= r) * e + t;
				},
				easeOutQuad: (e, t, n, r) => {
					var o = n - t;
					return -o * (e /= r) * (e - 2) + t;
				},
				easeInOutQuad: (e, t, n, r) => {
					var o = n - t;
					return (e /= r / 2) < 1
						? (o / 2) * e * e + t
						: (-o / 2) * (--e * (e - 2) - 1) + t;
				},
				easeInCubic: (e, t, n, r) => {
					var o = n - t;
					return o * (e /= r) * e * e + t;
				},
				easeOutCubic: (e, t, n, r) => {
					var o = n - t;
					return o * ((e = e / r - 1) * e * e + 1) + t;
				},
				easeInOutCubic: (e, t, n, r) => {
					var o = n - t;
					return (e /= r / 2) < 1
						? (o / 2) * e * e * e + t
						: (o / 2) * ((e -= 2) * e * e + 2) + t;
				},
				easeInQuart: (e, t, n, r) => {
					var o = n - t;
					return o * (e /= r) * e * e * e + t;
				},
				easeOutQuart: (e, t, n, r) => {
					var o = n - t;
					return -o * ((e = e / r - 1) * e * e * e - 1) + t;
				},
				easeInOutQuart: (e, t, n, r) => {
					var o = n - t;
					return (e /= r / 2) < 1
						? (o / 2) * e * e * e * e + t
						: (-o / 2) * ((e -= 2) * e * e * e - 2) + t;
				},
				easeInQuint: (e, t, n, r) => {
					var o = n - t;
					return o * (e /= r) * e * e * e * e + t;
				},
				easeOutQuint: (e, t, n, r) => {
					var o = n - t;
					return o * ((e = e / r - 1) * e * e * e * e + 1) + t;
				},
				easeInOutQuint: (e, t, n, r) => {
					var o = n - t;
					return (e /= r / 2) < 1
						? (o / 2) * e * e * e * e * e + t
						: (o / 2) * ((e -= 2) * e * e * e * e + 2) + t;
				},
				easeInSine: (e, t, n, r) => {
					var o = n - t;
					return -o * Math.cos((e / r) * (Math.PI / 2)) + o + t;
				},
				easeOutSine: (e, t, n, r) => {
					var o = n - t;
					return o * Math.sin((e / r) * (Math.PI / 2)) + t;
				},
				easeInOutSine: (e, t, n, r) => {
					var o = n - t;
					return (-o / 2) * (Math.cos((Math.PI * e) / r) - 1) + t;
				},
				easeInExpo: (e, t, n, r) => {
					var o = n - t;
					return e == 0 ? t : o * Math.pow(2, 10 * (e / r - 1)) + t;
				},
				easeOutExpo: (e, t, n, r) => {
					var o = n - t;
					return e == r ? t + o : o * (-Math.pow(2, (-10 * e) / r) + 1) + t;
				},
				easeInOutExpo: (e, t, n, r) => {
					var o = n - t;
					return e === 0
						? t
						: e === r
							? t + o
							: (e /= r / 2) < 1
								? (o / 2) * Math.pow(2, 10 * (e - 1)) + t
								: (o / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
				},
				easeInCirc: (e, t, n, r) => {
					var o = n - t;
					return -o * (Math.sqrt(1 - (e /= r) * e) - 1) + t;
				},
				easeOutCirc: (e, t, n, r) => {
					var o = n - t;
					return o * Math.sqrt(1 - (e = e / r - 1) * e) + t;
				},
				easeInOutCirc: (e, t, n, r) => {
					var o = n - t;
					return (e /= r / 2) < 1
						? (-o / 2) * (Math.sqrt(1 - e * e) - 1) + t
						: (o / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
				},
				easeInElastic: (e, t, n, r) => {
					var o = n - t,
						i,
						s,
						a;
					return (
						(a = 1.70158),
						(s = 0),
						(i = o),
						e === 0
							? t
							: (e /= r) === 1
								? t + o
								: (s || (s = r * 0.3),
									i < Math.abs(o)
										? ((i = o), (a = s / 4))
										: (a = (s / (2 * Math.PI)) * Math.asin(o / i)),
									-(
										i *
										Math.pow(2, 10 * (e -= 1)) *
										Math.sin(((e * r - a) * (2 * Math.PI)) / s)
									) + t)
					);
				},
				easeOutElastic: (e, t, n, r) => {
					var o = n - t,
						i,
						s,
						a;
					return (
						(a = 1.70158),
						(s = 0),
						(i = o),
						e === 0
							? t
							: (e /= r) === 1
								? t + o
								: (s || (s = r * 0.3),
									i < Math.abs(o)
										? ((i = o), (a = s / 4))
										: (a = (s / (2 * Math.PI)) * Math.asin(o / i)),
									i *
										Math.pow(2, -10 * e) *
										Math.sin(((e * r - a) * (2 * Math.PI)) / s) +
										o +
										t)
					);
				},
				easeInOutElastic: (e, t, n, r) => {
					var o = n - t,
						i,
						s,
						a;
					return (
						(a = 1.70158),
						(s = 0),
						(i = o),
						e === 0
							? t
							: (e /= r / 2) === 2
								? t + o
								: (s || (s = r * 0.44999999999999996),
									i < Math.abs(o)
										? ((i = o), (a = s / 4))
										: (a = (s / (2 * Math.PI)) * Math.asin(o / i)),
									e < 1
										? -0.5 *
												(i *
													Math.pow(2, 10 * (e -= 1)) *
													Math.sin(((e * r - a) * (2 * Math.PI)) / s)) +
											t
										: i *
												Math.pow(2, -10 * (e -= 1)) *
												Math.sin(((e * r - a) * (2 * Math.PI)) / s) *
												0.5 +
											o +
											t)
					);
				},
				easeInBack: (e, t, n, r, o) => {
					var i = n - t;
					return (
						o === void 0 && (o = 1.70158),
						i * (e /= r) * e * ((o + 1) * e - o) + t
					);
				},
				easeOutBack: (e, t, n, r, o) => {
					var i = n - t;
					return (
						o === void 0 && (o = 1.70158),
						i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + t
					);
				},
				easeInOutBack: (e, t, n, r, o) => {
					var i = n - t;
					return (
						o === void 0 && (o = 1.70158),
						(e /= r / 2) < 1
							? (i / 2) * (e * e * (((o *= 1.525) + 1) * e - o)) + t
							: (i / 2) * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + t
					);
				},
				easeInBounce: (e, t, n, r) => {
					var o = n - t,
						i;
					return (i = yt.easeOutBounce(r - e, 0, o, r)), o - i + t;
				},
				easeOutBounce: (e, t, n, r) => {
					var o = n - t;
					return (e /= r) < 0.36363636363636365
						? o * (7.5625 * e * e) + t
						: e < 0.7272727272727273
							? o * (7.5625 * (e -= 0.5454545454545454) * e + 0.75) + t
							: e < 0.9090909090909091
								? o * (7.5625 * (e -= 0.8181818181818182) * e + 0.9375) + t
								: o * (7.5625 * (e -= 0.9545454545454546) * e + 0.984375) + t;
				},
				easeInOutBounce: (e, t, n, r) => {
					var o = n - t,
						i;
					return e < r / 2
						? ((i = yt.easeInBounce(e * 2, 0, o, r)), i * 0.5 + t)
						: ((i = yt.easeOutBounce(e * 2 - r, 0, o, r)),
							i * 0.5 + o * 0.5 + t);
				},
			};
			Mn.exports = yt;
		});
		function Ko(e) {
			return (e * Math.PI) / 180;
		}
		function ue(e, t) {
			return e + Math.random() * (t - e);
		}
		function Qo(e, t) {
			return Math.floor(e + Math.random() * (t - e + 1));
		}
		function Gt(e) {
			const t = {},
				n = {},
				r = {},
				o = [
					...Object.keys(Vt),
					"confettiSource",
					"drawShape",
					"onConfettiComplete",
					"frameRate",
				],
				i = ["canvasRef"];
			for (const s in e) {
				const a = e[s];
				o.includes(s) ? (t[s] = a) : i.includes(s) ? (i[s] = a) : (r[s] = a);
			}
			return [t, r, n];
		}
		var $t,
			Dn,
			Ve,
			Ce,
			Xo,
			Yt,
			zt,
			Vt,
			qt,
			Jo,
			Ke,
			jn,
			Fn = pe(() => {
				z();
				q();
				$();
				$t = gn(Nn(), 1);
				Fe();
				Dn = gn(Ln(), 1);
				((e) => {
					(e[(e.Circle = 0)] = "Circle"),
						(e[(e.Square = 1)] = "Square"),
						(e[(e.Strip = 2)] = "Strip");
				})(Ve || (Ve = {}));
				((e) => {
					(e[(e.Positive = 1)] = "Positive"),
						(e[(e.Negative = -1)] = "Negative");
				})(Ce || (Ce = {}));
				(Xo = 1e3 / 60),
					(Yt = class {
						constructor(t, n, r, o) {
							this.getOptions = n;
							const {
								colors: i,
								initialVelocityX: s,
								initialVelocityY: a,
							} = this.getOptions();
							(this.context = t),
								(this.x = r),
								(this.y = o),
								(this.w = ue(5, 20)),
								(this.h = ue(5, 20)),
								(this.radius = ue(5, 10)),
								(this.vx = typeof s == "number" ? ue(-s, s) : ue(s.min, s.max)),
								(this.vy = typeof a == "number" ? ue(-a, 0) : ue(a.min, a.max)),
								(this.shape = Qo(0, 2)),
								(this.angle = Ko(ue(0, 360))),
								(this.angularSpin = ue(-0.2, 0.2)),
								(this.color = i[Math.floor(Math.random() * i.length)]),
								(this.rotateY = ue(0, 1)),
								(this.rotationDirection = ue(0, 1) ? Ce.Positive : Ce.Negative);
						}
						update(t) {
							const {
									gravity: n,
									wind: r,
									friction: o,
									opacity: i,
									drawShape: s,
								} = this.getOptions(),
								a = t / Xo;
							(this.x += this.vx * a),
								(this.y += this.vy * a),
								(this.vy += n * a),
								(this.vx += r * a),
								(this.vx *= o ** a),
								(this.vy *= o ** a),
								this.rotateY >= 1 && this.rotationDirection === Ce.Positive
									? (this.rotationDirection = Ce.Negative)
									: this.rotateY <= -1 &&
										this.rotationDirection === Ce.Negative &&
										(this.rotationDirection = Ce.Positive);
							const c = 0.1 * this.rotationDirection * a;
							if (
								((this.rotateY += c),
								(this.angle += this.angularSpin),
								this.context.save(),
								this.context.translate(this.x, this.y),
								this.context.rotate(this.angle),
								this.context.scale(1, this.rotateY),
								this.context.rotate(this.angle),
								this.context.beginPath(),
								(this.context.fillStyle = this.color),
								(this.context.strokeStyle = this.color),
								(this.context.globalAlpha = i),
								(this.context.lineCap = "round"),
								(this.context.lineWidth = 2),
								s && typeof s == "function")
							)
								s.call(this, this.context);
							else
								switch (this.shape) {
									case Ve.Circle: {
										this.context.beginPath(),
											this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
											this.context.fill();
										break;
									}
									case Ve.Square: {
										this.context.fillRect(
											-this.w / 2,
											-this.h / 2,
											this.w,
											this.h,
										);
										break;
									}
									case Ve.Strip: {
										this.context.fillRect(
											-this.w / 6,
											-this.h / 2,
											this.w / 3,
											this.h,
										);
										break;
									}
								}
							this.context.closePath(), this.context.restore();
						}
					}),
					(zt = class {
						constructor(t, n) {
							(this.x = 0),
								(this.y = 0),
								(this.w = 0),
								(this.h = 0),
								(this.lastNumberOfPieces = 0),
								(this.tweenProgress = 0),
								(this.tweenFrom = 0),
								(this.particles = []),
								(this.particlesGenerated = 0),
								(this.removeParticleAt = (o) => {
									this.particles.splice(o, 1);
								}),
								(this.getParticle = () => {
									const o = ue(this.x, this.w + this.x),
										i = ue(this.y, this.h + this.y);
									return new Yt(this.context, this.getOptions, o, i);
								}),
								(this.animate = (o) => {
									const {
											canvas: i,
											context: s,
											particlesGenerated: a,
											lastNumberOfPieces: c,
										} = this,
										{
											run: l,
											recycle: p,
											numberOfPieces: u,
											debug: f,
											tweenFunction: d,
											tweenDuration: h,
										} = this.getOptions();
									if (!l) return !1;
									const b = this.particles.length,
										x = p ? b : a;
									if (x < u) {
										c !== u &&
											((this.tweenProgress = 0),
											(this.tweenFrom = x),
											(this.lastNumberOfPieces = u)),
											(this.tweenProgress = Math.min(
												h,
												Math.max(0, this.tweenProgress + o),
											));
										const g = d(this.tweenProgress, this.tweenFrom, u, h),
											w = Math.round(g - x);
										for (let y = 0; y < w; y++)
											this.particles.push(this.getParticle());
										this.particlesGenerated += w;
									}
									f &&
										((s.font = "12px sans-serif"),
										(s.fillStyle = "#333"),
										(s.textAlign = "right"),
										s.fillText(`Particles: ${b}`, i.width - 10, i.height - 20));
									for (let g = this.particles.length - 1; g >= 0; g--) {
										const w = this.particles[g];
										w.update(o),
											(w.y > i.height ||
												w.y < -100 ||
												w.x > i.width + 100 ||
												w.x < -100) &&
												(p && x <= u
													? (this.particles[g] = this.getParticle())
													: this.removeParticleAt(g));
									}
									return b > 0 || x < u;
								}),
								(this.canvas = t);
							const r = this.canvas.getContext("2d");
							if (!r) throw new Error("Could not get canvas context");
							(this.context = r), (this.getOptions = n);
						}
					}),
					(Vt = {
						width: typeof window < "u" ? window.innerWidth : 300,
						height: typeof window < "u" ? window.innerHeight : 200,
						numberOfPieces: 200,
						friction: 0.99,
						wind: 0,
						gravity: 0.1,
						initialVelocityX: 4,
						initialVelocityY: 10,
						colors: [
							"#f44336",
							"#e91e63",
							"#9c27b0",
							"#673ab7",
							"#3f51b5",
							"#2196f3",
							"#03a9f4",
							"#00bcd4",
							"#009688",
							"#4CAF50",
							"#8BC34A",
							"#CDDC39",
							"#FFEB3B",
							"#FFC107",
							"#FF9800",
							"#FF5722",
							"#795548",
						],
						opacity: 1,
						debug: !1,
						tweenFunction: Dn.easeInOutQuad,
						tweenDuration: 5e3,
						recycle: !0,
						run: !0,
					}),
					(qt = class {
						constructor(t, n) {
							(this.lastFrameTime = 0),
								(this.setOptionsWithDefaults = (o) => {
									const i = {
										confettiSource: { x: 0, y: 0, w: this.canvas.width, h: 0 },
									};
									(this._options = { ...i, ...Vt, ...o }),
										Object.assign(this, o.confettiSource);
								}),
								(this.update = (o = 0) => {
									const {
											options: { run: i, onConfettiComplete: s, frameRate: a },
											canvas: c,
											context: l,
										} = this,
										p = Math.min(o - this.lastFrameTime, 50);
									if (a && p < 1e3 / a) {
										this.rafId = requestAnimationFrame(this.update);
										return;
									}
									(this.lastFrameTime = o - (a ? p % a : 0)),
										i &&
											((l.fillStyle = "white"),
											l.clearRect(0, 0, c.width, c.height)),
										this.generator.animate(p)
											? (this.rafId = requestAnimationFrame(this.update))
											: (s &&
													typeof s == "function" &&
													this.generator.particlesGenerated > 0 &&
													s.call(this, this),
												(this._options.run = !1));
								}),
								(this.reset = () => {
									this.generator &&
										this.generator.particlesGenerated > 0 &&
										((this.generator.particlesGenerated = 0),
										(this.generator.particles = []),
										(this.generator.lastNumberOfPieces = 0));
								}),
								(this.stop = () => {
									(this.options = { run: !1 }),
										this.rafId &&
											(cancelAnimationFrame(this.rafId), (this.rafId = void 0));
								}),
								(this.canvas = t);
							const r = this.canvas.getContext("2d");
							if (!r) throw new Error("Could not get canvas context");
							(this.context = r),
								(this.generator = new zt(this.canvas, () => this.options)),
								(this.options = n),
								this.update();
						}
						get options() {
							return this._options;
						}
						set options(t) {
							const n = this._options?.run,
								r = this._options?.recycle;
							this.setOptionsWithDefaults(t),
								this.generator &&
									(Object.assign(this.generator, this.options.confettiSource),
									typeof t.recycle == "boolean" &&
										t.recycle &&
										r === !1 &&
										(this.generator.lastNumberOfPieces =
											this.generator.particles.length)),
								typeof t.run == "boolean" && t.run && n === !1 && this.update();
						}
					}),
					(Jo = m.createRef()),
					(Ke = class extends m.Component {
						constructor(t) {
							super(t),
								(this.canvas = m.createRef()),
								(this.canvas = t.canvasRef || Jo);
						}
						componentDidMount() {
							if (this.canvas.current) {
								const t = Gt(this.props)[0];
								this.confetti = new qt(this.canvas.current, t);
							}
						}
						componentDidUpdate() {
							const t = Gt(this.props)[0];
							this.confetti && (this.confetti.options = t);
						}
						componentWillUnmount() {
							this.confetti && this.confetti.stop(), (this.confetti = void 0);
						}
						render() {
							const [t, n] = Gt(this.props),
								r = {
									zIndex: 2,
									position: "absolute",
									pointerEvents: "none",
									top: 0,
									left: 0,
									bottom: 0,
									right: 0,
									...n.style,
								};
							return (0, $t.jsx)("canvas", {
								width: t.width,
								height: t.height,
								ref: this.canvas,
								...n,
								style: r,
							});
						}
					});
				Ke.defaultProps = { ...Vt };
				Ke.displayName = "ReactConfetti";
				jn = m.forwardRef((e, t) => (0, $t.jsx)(Ke, { canvasRef: t, ...e }));
			});
		var Af,
			kf,
			Nf,
			Mf,
			Lf,
			Df,
			jf,
			Ff,
			Bf,
			Uf,
			Wf,
			Hf,
			Gf,
			Yf,
			zf,
			Bn,
			qf,
			$f,
			Vf,
			Kf,
			Qf,
			Xf,
			Jf,
			Zf,
			ed,
			td,
			nd,
			rd,
			od,
			id,
			sd,
			ad,
			ld,
			cd,
			ud,
			pd,
			fd,
			dd,
			hd,
			md,
			yd,
			gd,
			bd,
			vd,
			Ed,
			wd,
			Od,
			Sd,
			Td,
			Id,
			Cd,
			Rd,
			_d,
			Pd,
			xd,
			Ad,
			kd,
			Nd,
			Md,
			Ld,
			Dd,
			jd,
			Fd,
			Un,
			Bd,
			Ud,
			Wd,
			Hd,
			Gd,
			Yd,
			zd,
			qd,
			$d,
			Vd,
			Kd,
			Qd,
			Xd,
			Jd,
			Zd,
			eh,
			th,
			nh,
			rh,
			oh,
			ih,
			sh,
			ah,
			lh,
			ch,
			uh,
			ph,
			fh,
			dh,
			hh,
			mh,
			yh,
			gh,
			bh,
			vh,
			Eh,
			wh,
			Oh,
			Sh,
			Th,
			Ih,
			Ch,
			Rh,
			_h,
			Ph,
			xh,
			Ah,
			kh,
			Nh,
			Mh,
			Lh,
			Dh,
			jh,
			Fh,
			Bh,
			Uh,
			Wh,
			Hh,
			Gh,
			Yh,
			zh,
			qh,
			$h,
			Vh,
			Kh,
			Qh,
			Xh,
			Jh,
			Zh,
			em,
			tm,
			nm,
			rm,
			om,
			im,
			sm,
			am,
			lm,
			cm,
			um,
			pm,
			fm,
			dm,
			hm,
			mm,
			ym,
			gm,
			bm,
			vm,
			Em,
			wm,
			Om,
			Sm,
			Tm,
			Im,
			Cm,
			Rm,
			_m,
			Pm,
			xm,
			Am,
			km,
			Nm,
			Mm,
			Lm,
			Dm,
			jm,
			Fm,
			Bm,
			Um,
			Wm,
			Hm,
			Gm,
			Ym,
			zm,
			qm,
			$m,
			Vm,
			Km,
			Qm,
			Xm,
			Jm,
			Zm,
			ey,
			ty,
			ny,
			ry,
			oy,
			iy,
			sy,
			ay,
			ly,
			cy,
			uy,
			py,
			fy,
			dy,
			hy,
			my,
			yy,
			gy,
			by,
			vy,
			Ey,
			wy,
			Oy,
			Sy,
			Ty,
			Iy,
			Cy,
			Ry,
			_y,
			Py,
			xy,
			Ay,
			ky,
			Ny,
			My,
			Ly,
			Dy,
			jy,
			Fy,
			By,
			Uy,
			Wy,
			Hy,
			Gy,
			Yy,
			zy,
			qy,
			$y,
			Vy,
			Ky,
			Qy,
			Xy,
			Jy,
			Zy,
			eg,
			tg,
			ng,
			rg,
			og,
			ig,
			Wn = pe(() => {
				z();
				q();
				$();
				(Af = __STORYBOOK_ICONS__),
					({
						AccessibilityAltIcon: kf,
						AccessibilityIcon: Nf,
						AccessibilityIgnoredIcon: Mf,
						AddIcon: Lf,
						AdminIcon: Df,
						AlertAltIcon: jf,
						AlertIcon: Ff,
						AlignLeftIcon: Bf,
						AlignRightIcon: Uf,
						AppleIcon: Wf,
						ArrowBottomLeftIcon: Hf,
						ArrowBottomRightIcon: Gf,
						ArrowDownIcon: Yf,
						ArrowLeftIcon: zf,
						ArrowRightIcon: Bn,
						ArrowSolidDownIcon: qf,
						ArrowSolidLeftIcon: $f,
						ArrowSolidRightIcon: Vf,
						ArrowSolidUpIcon: Kf,
						ArrowTopLeftIcon: Qf,
						ArrowTopRightIcon: Xf,
						ArrowUpIcon: Jf,
						AzureDevOpsIcon: Zf,
						BackIcon: ed,
						BasketIcon: td,
						BatchAcceptIcon: nd,
						BatchDenyIcon: rd,
						BeakerIcon: od,
						BellIcon: id,
						BitbucketIcon: sd,
						BoldIcon: ad,
						BookIcon: ld,
						BookmarkHollowIcon: cd,
						BookmarkIcon: ud,
						BottomBarIcon: pd,
						BottomBarToggleIcon: fd,
						BoxIcon: dd,
						BranchIcon: hd,
						BrowserIcon: md,
						ButtonIcon: yd,
						CPUIcon: gd,
						CalendarIcon: bd,
						CameraIcon: vd,
						CameraStabilizeIcon: Ed,
						CategoryIcon: wd,
						CertificateIcon: Od,
						ChangedIcon: Sd,
						ChatIcon: Td,
						CheckIcon: Id,
						ChevronDownIcon: Cd,
						ChevronLeftIcon: Rd,
						ChevronRightIcon: _d,
						ChevronSmallDownIcon: Pd,
						ChevronSmallLeftIcon: xd,
						ChevronSmallRightIcon: Ad,
						ChevronSmallUpIcon: kd,
						ChevronUpIcon: Nd,
						ChromaticIcon: Md,
						ChromeIcon: Ld,
						CircleHollowIcon: Dd,
						CircleIcon: jd,
						ClearIcon: Fd,
						CloseAltIcon: Un,
						CloseIcon: Bd,
						CloudHollowIcon: Ud,
						CloudIcon: Wd,
						CogIcon: Hd,
						CollapseIcon: Gd,
						CommandIcon: Yd,
						CommentAddIcon: zd,
						CommentIcon: qd,
						CommentsIcon: $d,
						CommitIcon: Vd,
						CompassIcon: Kd,
						ComponentDrivenIcon: Qd,
						ComponentIcon: Xd,
						ContrastIcon: Jd,
						ContrastIgnoredIcon: Zd,
						ControlsIcon: eh,
						CopyIcon: th,
						CreditIcon: nh,
						CrossIcon: rh,
						DashboardIcon: oh,
						DatabaseIcon: ih,
						DeleteIcon: sh,
						DiamondIcon: ah,
						DirectionIcon: lh,
						DiscordIcon: ch,
						DocChartIcon: uh,
						DocListIcon: ph,
						DocumentIcon: fh,
						DownloadIcon: dh,
						DragIcon: hh,
						EditIcon: mh,
						EllipsisIcon: yh,
						EmailIcon: gh,
						ExpandAltIcon: bh,
						ExpandIcon: vh,
						EyeCloseIcon: Eh,
						EyeIcon: wh,
						FaceHappyIcon: Oh,
						FaceNeutralIcon: Sh,
						FaceSadIcon: Th,
						FacebookIcon: Ih,
						FailedIcon: Ch,
						FastForwardIcon: Rh,
						FigmaIcon: _h,
						FilterIcon: Ph,
						FlagIcon: xh,
						FolderIcon: Ah,
						FormIcon: kh,
						GDriveIcon: Nh,
						GithubIcon: Mh,
						GitlabIcon: Lh,
						GlobeIcon: Dh,
						GoogleIcon: jh,
						GraphBarIcon: Fh,
						GraphLineIcon: Bh,
						GraphqlIcon: Uh,
						GridAltIcon: Wh,
						GridIcon: Hh,
						GrowIcon: Gh,
						HeartHollowIcon: Yh,
						HeartIcon: zh,
						HomeIcon: qh,
						HourglassIcon: $h,
						InfoIcon: Vh,
						ItalicIcon: Kh,
						JumpToIcon: Qh,
						KeyIcon: Xh,
						LightningIcon: Jh,
						LightningOffIcon: Zh,
						LinkBrokenIcon: em,
						LinkIcon: tm,
						LinkedinIcon: nm,
						LinuxIcon: rm,
						ListOrderedIcon: om,
						ListUnorderedIcon: im,
						LocationIcon: sm,
						LockIcon: am,
						MarkdownIcon: lm,
						MarkupIcon: cm,
						MediumIcon: um,
						MemoryIcon: pm,
						MenuIcon: fm,
						MergeIcon: dm,
						MirrorIcon: hm,
						MobileIcon: mm,
						MoonIcon: ym,
						NutIcon: gm,
						OutboxIcon: bm,
						OutlineIcon: vm,
						PaintBrushIcon: Em,
						PaperClipIcon: wm,
						ParagraphIcon: Om,
						PassedIcon: Sm,
						PhoneIcon: Tm,
						PhotoDragIcon: Im,
						PhotoIcon: Cm,
						PhotoStabilizeIcon: Rm,
						PinAltIcon: _m,
						PinIcon: Pm,
						PlayAllHollowIcon: xm,
						PlayBackIcon: Am,
						PlayHollowIcon: km,
						PlayIcon: Nm,
						PlayNextIcon: Mm,
						PlusIcon: Lm,
						PointerDefaultIcon: Dm,
						PointerHandIcon: jm,
						PowerIcon: Fm,
						PrintIcon: Bm,
						ProceedIcon: Um,
						ProfileIcon: Wm,
						PullRequestIcon: Hm,
						QuestionIcon: Gm,
						RSSIcon: Ym,
						RedirectIcon: zm,
						ReduxIcon: qm,
						RefreshIcon: $m,
						ReplyIcon: Vm,
						RepoIcon: Km,
						RequestChangeIcon: Qm,
						RewindIcon: Xm,
						RulerIcon: Jm,
						SaveIcon: Zm,
						SearchIcon: ey,
						ShareAltIcon: ty,
						ShareIcon: ny,
						ShieldIcon: ry,
						SideBySideIcon: oy,
						SidebarAltIcon: iy,
						SidebarAltToggleIcon: sy,
						SidebarIcon: ay,
						SidebarToggleIcon: ly,
						SpeakerIcon: cy,
						StackedIcon: uy,
						StarHollowIcon: py,
						StarIcon: fy,
						StatusFailIcon: dy,
						StatusIcon: hy,
						StatusPassIcon: my,
						StatusWarnIcon: yy,
						StickerIcon: gy,
						StopAltHollowIcon: by,
						StopAltIcon: vy,
						StopIcon: Ey,
						StorybookIcon: wy,
						StructureIcon: Oy,
						SubtractIcon: Sy,
						SunIcon: Ty,
						SupportIcon: Iy,
						SweepIcon: Cy,
						SwitchAltIcon: Ry,
						SyncIcon: _y,
						TabletIcon: Py,
						ThumbsUpIcon: xy,
						TimeIcon: Ay,
						TimerIcon: ky,
						TransferIcon: Ny,
						TrashIcon: My,
						TwitterIcon: Ly,
						TypeIcon: Dy,
						UbuntuIcon: jy,
						UndoIcon: Fy,
						UnfoldIcon: By,
						UnlockIcon: Uy,
						UnpinIcon: Wy,
						UploadIcon: Hy,
						UserAddIcon: Gy,
						UserAltIcon: Yy,
						UserIcon: zy,
						UsersIcon: qy,
						VSCodeIcon: $y,
						VerifiedIcon: Vy,
						VideoIcon: Ky,
						WandIcon: Qy,
						WatchIcon: Xy,
						WindowsIcon: Jy,
						WrenchIcon: Zy,
						XIcon: eg,
						YoutubeIcon: tg,
						ZoomIcon: ng,
						ZoomOutIcon: rg,
						ZoomResetIcon: og,
						iconList: ig,
					} = __STORYBOOK_ICONS__);
			});
		var ao = {};
		mn(ao, { default: () => nl });
		function di({
			top: e = 0,
			left: t = 0,
			width: n = window.innerWidth,
			height: r = window.innerHeight,
			colors: o = [
				"#CA90FF",
				"#FC521F",
				"#66BF3C",
				"#FF4785",
				"#FFAE00",
				"#1EA7FD",
			],
			...i
		}) {
			const [s] = ce(() => {
				const a = document.createElement("div");
				return (
					a.setAttribute("id", "confetti-container"),
					a.setAttribute(
						"style",
						"position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;",
					),
					a
				);
			});
			return (
				le(
					() => (
						document.body.appendChild(s),
						() => {
							document.body.removeChild(s);
						}
					),
					[],
				),
				qe(
					m.createElement(
						fi,
						{ top: e, left: t, width: n, height: r },
						m.createElement(jn, { colors: o, drawShape: mi, ...i }),
					),
					s,
				)
			);
		}
		function hi(e, t) {
			return Math.floor(Math.random() * (t - e)) + e;
		}
		function mi(e) {
			switch (((this.shape = this.shape || hi(1, 6)), this.shape)) {
				case 2: {
					const t = this.w / 2,
						n = this.h / 2;
					e.moveTo(-t + 2, -n),
						e.lineTo(t - 2, -n),
						e.arcTo(t, -n, t, -n + 2, 2),
						e.lineTo(t, n - 2),
						e.arcTo(t, n, t - 2, n, 2),
						e.lineTo(-t + 2, n),
						e.arcTo(-t, n, -t, n - 2, 2),
						e.lineTo(-t, -n + 2),
						e.arcTo(-t, -n, -t + 2, -n, 2);
					break;
				}
				case 3: {
					e.rect(-4, -4, 8, 16), e.rect(-12, -4, 24, 8);
					break;
				}
				case 4: {
					e.rect(-4, -4, 8, 16), e.rect(-4, -4, 24, 8);
					break;
				}
				case 1: {
					e.arc(0, 0, this.radius, 0, 2 * Math.PI);
					break;
				}
				case 5: {
					e.moveTo(16, 4), e.lineTo(4, 24), e.lineTo(24, 24);
					break;
				}
				case 6: {
					e.arc(4, -4, 4, -Math.PI / 2, 0), e.lineTo(4, 0);
					break;
				}
			}
			e.closePath(), e.fill();
		}
		function Hn({ targetSelector: e, pulsating: t = !1 }) {
			return (
				le(() => {
					const n = document.querySelector(e);
					if (n)
						if (t) {
							(n.style.animation = "pulsate 3s infinite"),
								(n.style.transformOrigin = "center"),
								(n.style.animationTimingFunction = "ease-in-out");
							const r = `
        @keyframes pulsate {
          0% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
          }
          50% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
          }
          100% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
          }
        }
      `,
								o = document.createElement("style");
							(o.id = "sb-onboarding-pulsating-effect"),
								(o.innerHTML = r),
								document.head.appendChild(o);
						} else n.style.boxShadow = "rgba(2,156,253,1) 0 0 2px 1px";
					return () => {
						const r = document.querySelector("#sb-onboarding-pulsating-effect");
						r && r.remove(),
							n && ((n.style.animation = ""), (n.style.boxShadow = ""));
					};
				}, [e, t]),
				null
			);
		}
		function Ir(e) {
			return (t) => typeof t === e;
		}
		function vi(e, t) {
			const { length: n } = e;
			if (n !== t.length) return !1;
			for (let r = n; r-- !== 0; ) if (!re(e[r], t[r])) return !1;
			return !0;
		}
		function Ei(e, t) {
			if (e.byteLength !== t.byteLength) return !1;
			let n = new DataView(e.buffer),
				r = new DataView(t.buffer),
				o = e.byteLength;
			while (o--) if (n.getUint8(o) !== r.getUint8(o)) return !1;
			return !0;
		}
		function wi(e, t) {
			if (e.size !== t.size) return !1;
			for (const n of e.entries()) if (!t.has(n[0])) return !1;
			for (const n of e.entries()) if (!re(n[1], t.get(n[0]))) return !1;
			return !0;
		}
		function Oi(e, t) {
			if (e.size !== t.size) return !1;
			for (const n of e.entries()) if (!t.has(n[0])) return !1;
			return !0;
		}
		function re(e, t) {
			if (e === t) return !0;
			if (e && zn(e) && t && zn(t)) {
				if (e.constructor !== t.constructor) return !1;
				if (Array.isArray(e) && Array.isArray(t)) return vi(e, t);
				if (e instanceof Map && t instanceof Map) return wi(e, t);
				if (e instanceof Set && t instanceof Set) return Oi(e, t);
				if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return Ei(e, t);
				if (Yn(e) && Yn(t)) return e.source === t.source && e.flags === t.flags;
				if (e.valueOf !== Object.prototype.valueOf)
					return e.valueOf() === t.valueOf();
				if (e.toString !== Object.prototype.toString)
					return e.toString() === t.toString();
				const n = Object.keys(e),
					r = Object.keys(t);
				if (n.length !== r.length) return !1;
				for (let o = n.length; o-- !== 0; )
					if (!Object.prototype.hasOwnProperty.call(t, n[o])) return !1;
				for (let o = n.length; o-- !== 0; ) {
					const i = n[o];
					if (!(i === "_owner" && e.$$typeof) && !re(e[i], t[i])) return !1;
				}
				return !0;
			}
			return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
		}
		function Tt(e) {
			const t = Object.prototype.toString.call(e).slice(8, -1);
			if (/HTML\w+Element/.test(t)) return "HTMLElement";
			if (Ii(t)) return t;
		}
		function ye(e) {
			return (t) => Tt(t) === e;
		}
		function Ii(e) {
			return Si.includes(e);
		}
		function Ge(e) {
			return (t) => typeof t === e;
		}
		function Ci(e) {
			return Ti.includes(e);
		}
		function I(e) {
			if (e === null) return "null";
			switch (typeof e) {
				case "bigint":
					return "bigint";
				case "boolean":
					return "boolean";
				case "number":
					return "number";
				case "string":
					return "string";
				case "symbol":
					return "symbol";
				case "undefined":
					return "undefined";
			}
			return I.array(e)
				? "Array"
				: I.plainFunction(e)
					? "Function"
					: Tt(e) || "Object";
		}
		function _i(...e) {
			return e.every((t) => R.string(t) || R.array(t) || R.plainObject(t));
		}
		function Pi(e, t, n) {
			return Cr(e, t)
				? [e, t].every(R.array)
					? !e.some(Qn(n)) && t.some(Qn(n))
					: [e, t].every(R.plainObject)
						? !Object.entries(e).some(Kn(n)) && Object.entries(t).some(Kn(n))
						: t === n
				: !1;
		}
		function qn(e, t, n) {
			let { actual: r, key: o, previous: i, type: s } = n,
				a = Ee(e, o),
				c = Ee(t, o),
				l = [a, c].every(R.number) && (s === "increased" ? a < c : a > c);
			return (
				R.undefined(r) || (l = l && c === r),
				R.undefined(i) || (l = l && a === i),
				l
			);
		}
		function $n(e, t, n) {
			const { key: r, type: o, value: i } = n,
				s = Ee(e, r),
				a = Ee(t, r),
				c = o === "added" ? s : a,
				l = o === "added" ? a : s;
			if (!R.nullOrUndefined(i)) {
				if (R.defined(c)) {
					if (R.array(c) || R.plainObject(c)) return Pi(c, l, i);
				} else return re(l, i);
				return !1;
			}
			return [s, a].every(R.array)
				? !l.every(sn(c))
				: [s, a].every(R.plainObject)
					? xi(Object.keys(c), Object.keys(l))
					: ![s, a].every((p) => R.primitive(p) && R.defined(p)) &&
						(o === "added"
							? !R.defined(s) && R.defined(a)
							: R.defined(s) && !R.defined(a));
		}
		function Vn(e, t, { key: n } = {}) {
			let r = Ee(e, n),
				o = Ee(t, n);
			if (!Cr(r, o)) throw new TypeError("Inputs have different types");
			if (!_i(r, o)) throw new TypeError("Inputs don't have length");
			return (
				[r, o].every(R.plainObject) &&
					((r = Object.keys(r)), (o = Object.keys(o))),
				[r, o]
			);
		}
		function Kn(e) {
			return ([t, n]) =>
				R.array(e)
					? re(e, n) || e.some((r) => re(r, n) || (R.array(n) && sn(n)(r)))
					: R.plainObject(e) && e[t]
						? !!e[t] && re(e[t], n)
						: re(e, n);
		}
		function xi(e, t) {
			return t.some((n) => !e.includes(n));
		}
		function Qn(e) {
			return (t) =>
				R.array(e)
					? e.some((n) => re(n, t) || (R.array(t) && sn(t)(n)))
					: re(e, t);
		}
		function Qe(e, t) {
			return R.array(e) ? e.some((n) => re(n, t)) : re(e, t);
		}
		function sn(e) {
			return (t) => e.some((n) => re(n, t));
		}
		function Cr(...e) {
			return (
				e.every(R.array) ||
				e.every(R.number) ||
				e.every(R.plainObject) ||
				e.every(R.string)
			);
		}
		function Ee(e, t) {
			return R.plainObject(e) || R.array(e)
				? R.string(t)
					? t.split(".").reduce((n, r) => n && n[r], e)
					: R.number(t)
						? e[t]
						: e
				: e;
		}
		function Et(e, t) {
			if ([e, t].some(R.nullOrUndefined))
				throw new Error("Missing required parameters");
			if (![e, t].every((n) => R.plainObject(n) || R.array(n)))
				throw new Error("Expected plain objects or array");
			return {
				added: (n, r) => {
					try {
						return $n(e, t, { key: n, type: "added", value: r });
					} catch {
						return !1;
					}
				},
				changed: (n, r, o) => {
					try {
						const i = Ee(e, n),
							s = Ee(t, n),
							a = R.defined(r),
							c = R.defined(o);
						if (a || c) {
							const l = c ? Qe(o, i) : !Qe(r, i),
								p = Qe(r, s);
							return l && p;
						}
						return [i, s].every(R.array) || [i, s].every(R.plainObject)
							? !re(i, s)
							: i !== s;
					} catch {
						return !1;
					}
				},
				changedFrom: (n, r, o) => {
					if (!R.defined(n)) return !1;
					try {
						const i = Ee(e, n),
							s = Ee(t, n),
							a = R.defined(o);
						return Qe(r, i) && (a ? Qe(o, s) : !a);
					} catch {
						return !1;
					}
				},
				decreased: (n, r, o) => {
					if (!R.defined(n)) return !1;
					try {
						return qn(e, t, {
							key: n,
							actual: r,
							previous: o,
							type: "decreased",
						});
					} catch {
						return !1;
					}
				},
				emptied: (n) => {
					try {
						const [r, o] = Vn(e, t, { key: n });
						return !!r.length && !o.length;
					} catch {
						return !1;
					}
				},
				filled: (n) => {
					try {
						const [r, o] = Vn(e, t, { key: n });
						return !r.length && !!o.length;
					} catch {
						return !1;
					}
				},
				increased: (n, r, o) => {
					if (!R.defined(n)) return !1;
					try {
						return qn(e, t, {
							key: n,
							actual: r,
							previous: o,
							type: "increased",
						});
					} catch {
						return !1;
					}
				},
				removed: (n, r) => {
					try {
						return $n(e, t, { key: n, type: "removed", value: r });
					} catch {
						return !1;
					}
				},
			};
		}
		function Ni(e) {
			var t = !1;
			return () => {
				t ||
					((t = !0),
					window.Promise.resolve().then(() => {
						(t = !1), e();
					}));
			};
		}
		function Mi(e) {
			var t = !1;
			return () => {
				t ||
					((t = !0),
					setTimeout(() => {
						(t = !1), e();
					}, ki));
			};
		}
		function _r(e) {
			var t = {};
			return e && t.toString.call(e) === "[object Function]";
		}
		function Le(e, t) {
			if (e.nodeType !== 1) return [];
			var n = e.ownerDocument.defaultView,
				r = n.getComputedStyle(e, null);
			return t ? r[t] : r;
		}
		function an(e) {
			return e.nodeName === "HTML" ? e : e.parentNode || e.host;
		}
		function rt(e) {
			if (!e) return document.body;
			switch (e.nodeName) {
				case "HTML":
				case "BODY":
					return e.ownerDocument.body;
				case "#document":
					return e.body;
			}
			var t = Le(e),
				n = t.overflow,
				r = t.overflowX,
				o = t.overflowY;
			return /(auto|scroll|overlay)/.test(n + o + r) ? e : rt(an(e));
		}
		function Pr(e) {
			return e && e.referenceNode ? e.referenceNode : e;
		}
		function Ye(e) {
			return e === 11 ? Xn : e === 10 ? Jn : Xn || Jn;
		}
		function Ue(e) {
			if (!e) return document.documentElement;
			for (
				var t = Ye(10) ? document.body : null, n = e.offsetParent || null;
				n === t && e.nextElementSibling;
			)
				n = (e = e.nextElementSibling).offsetParent;
			var r = n && n.nodeName;
			return !r || r === "BODY" || r === "HTML"
				? e
					? e.ownerDocument.documentElement
					: document.documentElement
				: ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 &&
						Le(n, "position") === "static"
					? Ue(n)
					: n;
		}
		function ji(e) {
			var t = e.nodeName;
			return t === "BODY" ? !1 : t === "HTML" || Ue(e.firstElementChild) === e;
		}
		function Jt(e) {
			return e.parentNode !== null ? Jt(e.parentNode) : e;
		}
		function wt(e, t) {
			if (!e || !e.nodeType || !t || !t.nodeType)
				return document.documentElement;
			var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
				r = n ? e : t,
				o = n ? t : e,
				i = document.createRange();
			i.setStart(r, 0), i.setEnd(o, 0);
			var s = i.commonAncestorContainer;
			if ((e !== s && t !== s) || r.contains(o)) return ji(s) ? s : Ue(s);
			var a = Jt(e);
			return a.host ? wt(a.host, t) : wt(e, Jt(t).host);
		}
		function We(e) {
			var t =
					arguments.length > 1 && arguments[1] !== void 0
						? arguments[1]
						: "top",
				n = t === "top" ? "scrollTop" : "scrollLeft",
				r = e.nodeName;
			if (r === "BODY" || r === "HTML") {
				var o = e.ownerDocument.documentElement,
					i = e.ownerDocument.scrollingElement || o;
				return i[n];
			}
			return e[n];
		}
		function Fi(e, t) {
			var n =
					arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
				r = We(t, "top"),
				o = We(t, "left"),
				i = n ? -1 : 1;
			return (
				(e.top += r * i),
				(e.bottom += r * i),
				(e.left += o * i),
				(e.right += o * i),
				e
			);
		}
		function Zn(e, t) {
			var n = t === "x" ? "Left" : "Top",
				r = n === "Left" ? "Right" : "Bottom";
			return (
				Number.parseFloat(e["border" + n + "Width"]) +
				Number.parseFloat(e["border" + r + "Width"])
			);
		}
		function er(e, t, n, r) {
			return Math.max(
				t["offset" + e],
				t["scroll" + e],
				n["client" + e],
				n["offset" + e],
				n["scroll" + e],
				Ye(10)
					? Number.parseInt(n["offset" + e]) +
							Number.parseInt(r["margin" + (e === "Height" ? "Top" : "Left")]) +
							Number.parseInt(
								r["margin" + (e === "Height" ? "Bottom" : "Right")],
							)
					: 0,
			);
		}
		function xr(e) {
			var t = e.body,
				n = e.documentElement,
				r = Ye(10) && getComputedStyle(n);
			return { height: er("Height", t, n, r), width: er("Width", t, n, r) };
		}
		function xe(e) {
			return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
		}
		function Zt(e) {
			var t = {};
			try {
				if (Ye(10)) {
					t = e.getBoundingClientRect();
					var n = We(e, "top"),
						r = We(e, "left");
					(t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
				} else t = e.getBoundingClientRect();
			} catch {}
			var o = {
					left: t.left,
					top: t.top,
					width: t.right - t.left,
					height: t.bottom - t.top,
				},
				i = e.nodeName === "HTML" ? xr(e.ownerDocument) : {},
				s = i.width || e.clientWidth || o.width,
				a = i.height || e.clientHeight || o.height,
				c = e.offsetWidth - s,
				l = e.offsetHeight - a;
			if (c || l) {
				var p = Le(e);
				(c -= Zn(p, "x")), (l -= Zn(p, "y")), (o.width -= c), (o.height -= l);
			}
			return xe(o);
		}
		function ln(e, t) {
			var n =
					arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
				r = Ye(10),
				o = t.nodeName === "HTML",
				i = Zt(e),
				s = Zt(t),
				a = rt(e),
				c = Le(t),
				l = Number.parseFloat(c.borderTopWidth),
				p = Number.parseFloat(c.borderLeftWidth);
			n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
			var u = xe({
				top: i.top - s.top - l,
				left: i.left - s.left - p,
				width: i.width,
				height: i.height,
			});
			if (((u.marginTop = 0), (u.marginLeft = 0), !r && o)) {
				var f = Number.parseFloat(c.marginTop),
					d = Number.parseFloat(c.marginLeft);
				(u.top -= l - f),
					(u.bottom -= l - f),
					(u.left -= p - d),
					(u.right -= p - d),
					(u.marginTop = f),
					(u.marginLeft = d);
			}
			return (
				(r && !n ? t.contains(a) : t === a && a.nodeName !== "BODY") &&
					(u = Fi(u, t)),
				u
			);
		}
		function Wi(e) {
			var t =
					arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
				n = e.ownerDocument.documentElement,
				r = ln(e, n),
				o = Math.max(n.clientWidth, window.innerWidth || 0),
				i = Math.max(n.clientHeight, window.innerHeight || 0),
				s = t ? 0 : We(n),
				a = t ? 0 : We(n, "left"),
				c = {
					top: s - r.top + r.marginTop,
					left: a - r.left + r.marginLeft,
					width: o,
					height: i,
				};
			return xe(c);
		}
		function Ar(e) {
			var t = e.nodeName;
			if (t === "BODY" || t === "HTML") return !1;
			if (Le(e, "position") === "fixed") return !0;
			var n = an(e);
			return n ? Ar(n) : !1;
		}
		function kr(e) {
			if (!e || !e.parentElement || Ye()) return document.documentElement;
			for (var t = e.parentElement; t && Le(t, "transform") === "none"; )
				t = t.parentElement;
			return t || document.documentElement;
		}
		function cn(e, t, n, r) {
			var o =
					arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
				i = { top: 0, left: 0 },
				s = o ? kr(e) : wt(e, Pr(t));
			if (r === "viewport") i = Wi(s, o);
			else {
				var a = void 0;
				r === "scrollParent"
					? ((a = rt(an(t))),
						a.nodeName === "BODY" && (a = e.ownerDocument.documentElement))
					: r === "window"
						? (a = e.ownerDocument.documentElement)
						: (a = r);
				var c = ln(a, s, o);
				if (a.nodeName === "HTML" && !Ar(s)) {
					var l = xr(e.ownerDocument),
						p = l.height,
						u = l.width;
					(i.top += c.top - c.marginTop),
						(i.bottom = p + c.top),
						(i.left += c.left - c.marginLeft),
						(i.right = u + c.left);
				} else i = c;
			}
			n = n || 0;
			var f = typeof n == "number";
			return (
				(i.left += f ? n : n.left || 0),
				(i.top += f ? n : n.top || 0),
				(i.right -= f ? n : n.right || 0),
				(i.bottom -= f ? n : n.bottom || 0),
				i
			);
		}
		function Hi(e) {
			var t = e.width,
				n = e.height;
			return t * n;
		}
		function Nr(e, t, n, r, o) {
			var i =
				arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
			if (e.indexOf("auto") === -1) return e;
			var s = cn(n, r, i, o),
				a = {
					top: { width: s.width, height: t.top - s.top },
					right: { width: s.right - t.right, height: s.height },
					bottom: { width: s.width, height: s.bottom - t.bottom },
					left: { width: t.left - s.left, height: s.height },
				},
				c = Object.keys(a)
					.map((f) => fe({ key: f }, a[f], { area: Hi(a[f]) }))
					.sort((f, d) => d.area - f.area),
				l = c.filter((f) => {
					var d = f.width,
						h = f.height;
					return d >= n.clientWidth && h >= n.clientHeight;
				}),
				p = l.length > 0 ? l[0].key : c[0].key,
				u = e.split("-")[1];
			return p + (u ? "-" + u : "");
		}
		function Mr(e, t, n) {
			var r =
					arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
				o = r ? kr(t) : wt(t, Pr(n));
			return ln(n, o, r);
		}
		function Lr(e) {
			var t = e.ownerDocument.defaultView,
				n = t.getComputedStyle(e),
				r =
					Number.parseFloat(n.marginTop || 0) +
					Number.parseFloat(n.marginBottom || 0),
				o =
					Number.parseFloat(n.marginLeft || 0) +
					Number.parseFloat(n.marginRight || 0),
				i = { width: e.offsetWidth + o, height: e.offsetHeight + r };
			return i;
		}
		function Ot(e) {
			var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
			return e.replace(/left|right|bottom|top/g, (n) => t[n]);
		}
		function Dr(e, t, n) {
			n = n.split("-")[0];
			var r = Lr(e),
				o = { width: r.width, height: r.height },
				i = ["right", "left"].indexOf(n) !== -1,
				s = i ? "top" : "left",
				a = i ? "left" : "top",
				c = i ? "height" : "width",
				l = i ? "width" : "height";
			return (
				(o[s] = t[s] + t[c] / 2 - r[c] / 2),
				n === a ? (o[a] = t[a] - r[l]) : (o[a] = t[Ot(a)]),
				o
			);
		}
		function ot(e, t) {
			return Array.prototype.find ? e.find(t) : e.filter(t)[0];
		}
		function Gi(e, t, n) {
			if (Array.prototype.findIndex) return e.findIndex((o) => o[t] === n);
			var r = ot(e, (o) => o[t] === n);
			return e.indexOf(r);
		}
		function jr(e, t, n) {
			var r = n === void 0 ? e : e.slice(0, Gi(e, "name", n));
			return (
				r.forEach((o) => {
					o.function &&
						console.warn(
							"`modifier.function` is deprecated, use `modifier.fn`!",
						);
					var i = o.function || o.fn;
					o.enabled &&
						_r(i) &&
						((t.offsets.popper = xe(t.offsets.popper)),
						(t.offsets.reference = xe(t.offsets.reference)),
						(t = i(t, o)));
				}),
				t
			);
		}
		function Yi() {
			if (!this.state.isDestroyed) {
				var e = {
					instance: this,
					styles: {},
					arrowStyles: {},
					attributes: {},
					flipped: !1,
					offsets: {},
				};
				(e.offsets.reference = Mr(
					this.state,
					this.popper,
					this.reference,
					this.options.positionFixed,
				)),
					(e.placement = Nr(
						this.options.placement,
						e.offsets.reference,
						this.popper,
						this.reference,
						this.options.modifiers.flip.boundariesElement,
						this.options.modifiers.flip.padding,
					)),
					(e.originalPlacement = e.placement),
					(e.positionFixed = this.options.positionFixed),
					(e.offsets.popper = Dr(
						this.popper,
						e.offsets.reference,
						e.placement,
					)),
					(e.offsets.popper.position = this.options.positionFixed
						? "fixed"
						: "absolute"),
					(e = jr(this.modifiers, e)),
					this.state.isCreated
						? this.options.onUpdate(e)
						: ((this.state.isCreated = !0), this.options.onCreate(e));
			}
		}
		function Fr(e, t) {
			return e.some((n) => {
				var r = n.name,
					o = n.enabled;
				return o && r === t;
			});
		}
		function un(e) {
			for (
				var t = [!1, "ms", "Webkit", "Moz", "O"],
					n = e.charAt(0).toUpperCase() + e.slice(1),
					r = 0;
				r < t.length;
				r++
			) {
				var o = t[r],
					i = o ? "" + o + n : e;
				if (typeof document.body.style[i] < "u") return i;
			}
			return null;
		}
		function zi() {
			return (
				(this.state.isDestroyed = !0),
				Fr(this.modifiers, "applyStyle") &&
					(this.popper.removeAttribute("x-placement"),
					(this.popper.style.position = ""),
					(this.popper.style.top = ""),
					(this.popper.style.left = ""),
					(this.popper.style.right = ""),
					(this.popper.style.bottom = ""),
					(this.popper.style.willChange = ""),
					(this.popper.style[un("transform")] = "")),
				this.disableEventListeners(),
				this.options.removeOnDestroy &&
					this.popper.parentNode.removeChild(this.popper),
				this
			);
		}
		function Br(e) {
			var t = e.ownerDocument;
			return t ? t.defaultView : window;
		}
		function Ur(e, t, n, r) {
			var o = e.nodeName === "BODY",
				i = o ? e.ownerDocument.defaultView : e;
			i.addEventListener(t, n, { passive: !0 }),
				o || Ur(rt(i.parentNode), t, n, r),
				r.push(i);
		}
		function qi(e, t, n, r) {
			(n.updateBound = r),
				Br(e).addEventListener("resize", n.updateBound, { passive: !0 });
			var o = rt(e);
			return (
				Ur(o, "scroll", n.updateBound, n.scrollParents),
				(n.scrollElement = o),
				(n.eventsEnabled = !0),
				n
			);
		}
		function $i() {
			this.state.eventsEnabled ||
				(this.state = qi(
					this.reference,
					this.options,
					this.state,
					this.scheduleUpdate,
				));
		}
		function Vi(e, t) {
			return (
				Br(e).removeEventListener("resize", t.updateBound),
				t.scrollParents.forEach((n) => {
					n.removeEventListener("scroll", t.updateBound);
				}),
				(t.updateBound = null),
				(t.scrollParents = []),
				(t.scrollElement = null),
				(t.eventsEnabled = !1),
				t
			);
		}
		function Ki() {
			this.state.eventsEnabled &&
				(cancelAnimationFrame(this.scheduleUpdate),
				(this.state = Vi(this.reference, this.state)));
		}
		function pn(e) {
			return e !== "" && !isNaN(Number.parseFloat(e)) && isFinite(e);
		}
		function en(e, t) {
			Object.keys(t).forEach((n) => {
				var r = "";
				["width", "height", "top", "right", "bottom", "left"].indexOf(n) !==
					-1 &&
					pn(t[n]) &&
					(r = "px"),
					(e.style[n] = t[n] + r);
			});
		}
		function Qi(e, t) {
			Object.keys(t).forEach((n) => {
				var r = t[n];
				r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
			});
		}
		function Xi(e) {
			return (
				en(e.instance.popper, e.styles),
				Qi(e.instance.popper, e.attributes),
				e.arrowElement &&
					Object.keys(e.arrowStyles).length &&
					en(e.arrowElement, e.arrowStyles),
				e
			);
		}
		function Ji(e, t, n, r, o) {
			var i = Mr(o, t, e, n.positionFixed),
				s = Nr(
					n.placement,
					i,
					t,
					e,
					n.modifiers.flip.boundariesElement,
					n.modifiers.flip.padding,
				);
			return (
				t.setAttribute("x-placement", s),
				en(t, { position: n.positionFixed ? "fixed" : "absolute" }),
				n
			);
		}
		function Zi(e, t) {
			var n = e.offsets,
				r = n.popper,
				o = n.reference,
				i = Math.round,
				s = Math.floor,
				a = (x) => x,
				c = i(o.width),
				l = i(r.width),
				p = ["left", "right"].indexOf(e.placement) !== -1,
				u = e.placement.indexOf("-") !== -1,
				f = c % 2 === l % 2,
				d = c % 2 === 1 && l % 2 === 1,
				h = t ? (p || u || f ? i : s) : a,
				b = t ? i : a;
			return {
				left: h(d && !u && t ? r.left - 1 : r.left),
				top: b(r.top),
				bottom: b(r.bottom),
				right: h(r.right),
			};
		}
		function ts(e, t) {
			var n = t.x,
				r = t.y,
				o = e.offsets.popper,
				i = ot(
					e.instance.modifiers,
					(y) => y.name === "applyStyle",
				).gpuAcceleration;
			i !== void 0 &&
				console.warn(
					"WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!",
				);
			var s = i !== void 0 ? i : t.gpuAcceleration,
				a = Ue(e.instance.popper),
				c = Zt(a),
				l = { position: o.position },
				p = Zi(e, window.devicePixelRatio < 2 || !es),
				u = n === "bottom" ? "top" : "bottom",
				f = r === "right" ? "left" : "right",
				d = un("transform"),
				h = void 0,
				b = void 0;
			if (
				(u === "bottom"
					? a.nodeName === "HTML"
						? (b = -a.clientHeight + p.bottom)
						: (b = -c.height + p.bottom)
					: (b = p.top),
				f === "right"
					? a.nodeName === "HTML"
						? (h = -a.clientWidth + p.right)
						: (h = -c.width + p.right)
					: (h = p.left),
				s && d)
			)
				(l[d] = "translate3d(" + h + "px, " + b + "px, 0)"),
					(l[u] = 0),
					(l[f] = 0),
					(l.willChange = "transform");
			else {
				var x = u === "bottom" ? -1 : 1,
					g = f === "right" ? -1 : 1;
				(l[u] = b * x), (l[f] = h * g), (l.willChange = u + ", " + f);
			}
			var w = { "x-placement": e.placement };
			return (
				(e.attributes = fe({}, w, e.attributes)),
				(e.styles = fe({}, l, e.styles)),
				(e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles)),
				e
			);
		}
		function Wr(e, t, n) {
			var r = ot(e, (a) => {
					var c = a.name;
					return c === t;
				}),
				o =
					!!r && e.some((a) => a.name === n && a.enabled && a.order < r.order);
			if (!o) {
				var i = "`" + t + "`",
					s = "`" + n + "`";
				console.warn(
					s +
						" modifier is required by " +
						i +
						" modifier in order to work, be sure to include it before " +
						i +
						"!",
				);
			}
			return o;
		}
		function ns(e, t) {
			var n;
			if (!Wr(e.instance.modifiers, "arrow", "keepTogether")) return e;
			var r = t.element;
			if (typeof r == "string") {
				if (((r = e.instance.popper.querySelector(r)), !r)) return e;
			} else if (!e.instance.popper.contains(r))
				return (
					console.warn(
						"WARNING: `arrow.element` must be child of its popper element!",
					),
					e
				);
			var o = e.placement.split("-")[0],
				i = e.offsets,
				s = i.popper,
				a = i.reference,
				c = ["left", "right"].indexOf(o) !== -1,
				l = c ? "height" : "width",
				p = c ? "Top" : "Left",
				u = p.toLowerCase(),
				f = c ? "left" : "top",
				d = c ? "bottom" : "right",
				h = Lr(r)[l];
			a[d] - h < s[u] && (e.offsets.popper[u] -= s[u] - (a[d] - h)),
				a[u] + h > s[d] && (e.offsets.popper[u] += a[u] + h - s[d]),
				(e.offsets.popper = xe(e.offsets.popper));
			var b = a[u] + a[l] / 2 - h / 2,
				x = Le(e.instance.popper),
				g = Number.parseFloat(x["margin" + p]),
				w = Number.parseFloat(x["border" + p + "Width"]),
				y = b - e.offsets.popper[u] - g - w;
			return (
				(y = Math.max(Math.min(s[l] - h, y), 0)),
				(e.arrowElement = r),
				(e.offsets.arrow =
					((n = {}), He(n, u, Math.round(y)), He(n, f, ""), n)),
				e
			);
		}
		function rs(e) {
			return e === "end" ? "start" : e === "start" ? "end" : e;
		}
		function tr(e) {
			var t =
					arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
				n = Kt.indexOf(e),
				r = Kt.slice(n + 1).concat(Kt.slice(0, n));
			return t ? r.reverse() : r;
		}
		function os(e, t) {
			if (
				Fr(e.instance.modifiers, "inner") ||
				(e.flipped && e.placement === e.originalPlacement)
			)
				return e;
			var n = cn(
					e.instance.popper,
					e.instance.reference,
					t.padding,
					t.boundariesElement,
					e.positionFixed,
				),
				r = e.placement.split("-")[0],
				o = Ot(r),
				i = e.placement.split("-")[1] || "",
				s = [];
			switch (t.behavior) {
				case Qt.FLIP:
					s = [r, o];
					break;
				case Qt.CLOCKWISE:
					s = tr(r);
					break;
				case Qt.COUNTERCLOCKWISE:
					s = tr(r, !0);
					break;
				default:
					s = t.behavior;
			}
			return (
				s.forEach((a, c) => {
					if (r !== a || s.length === c + 1) return e;
					(r = e.placement.split("-")[0]), (o = Ot(r));
					var l = e.offsets.popper,
						p = e.offsets.reference,
						u = Math.floor,
						f =
							(r === "left" && u(l.right) > u(p.left)) ||
							(r === "right" && u(l.left) < u(p.right)) ||
							(r === "top" && u(l.bottom) > u(p.top)) ||
							(r === "bottom" && u(l.top) < u(p.bottom)),
						d = u(l.left) < u(n.left),
						h = u(l.right) > u(n.right),
						b = u(l.top) < u(n.top),
						x = u(l.bottom) > u(n.bottom),
						g =
							(r === "left" && d) ||
							(r === "right" && h) ||
							(r === "top" && b) ||
							(r === "bottom" && x),
						w = ["top", "bottom"].indexOf(r) !== -1,
						y =
							!!t.flipVariations &&
							((w && i === "start" && d) ||
								(w && i === "end" && h) ||
								(!w && i === "start" && b) ||
								(!w && i === "end" && x)),
						O =
							!!t.flipVariationsByContent &&
							((w && i === "start" && h) ||
								(w && i === "end" && d) ||
								(!w && i === "start" && x) ||
								(!w && i === "end" && b)),
						T = y || O;
					(f || g || T) &&
						((e.flipped = !0),
						(f || g) && (r = s[c + 1]),
						T && (i = rs(i)),
						(e.placement = r + (i ? "-" + i : "")),
						(e.offsets.popper = fe(
							{},
							e.offsets.popper,
							Dr(e.instance.popper, e.offsets.reference, e.placement),
						)),
						(e = jr(e.instance.modifiers, e, "flip")));
				}),
				e
			);
		}
		function is(e) {
			var t = e.offsets,
				n = t.popper,
				r = t.reference,
				o = e.placement.split("-")[0],
				i = Math.floor,
				s = ["top", "bottom"].indexOf(o) !== -1,
				a = s ? "right" : "bottom",
				c = s ? "left" : "top",
				l = s ? "width" : "height";
			return (
				n[a] < i(r[c]) && (e.offsets.popper[c] = i(r[c]) - n[l]),
				n[c] > i(r[a]) && (e.offsets.popper[c] = i(r[a])),
				e
			);
		}
		function ss(e, t, n, r) {
			var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
				i = +o[1],
				s = o[2];
			if (!i) return e;
			if (s.indexOf("%") === 0) {
				var a = void 0;
				switch (s) {
					case "%p":
						a = n;
						break;
					case "%":
					case "%r":
					default:
						a = r;
				}
				var c = xe(a);
				return (c[t] / 100) * i;
			} else if (s === "vh" || s === "vw") {
				var l = void 0;
				return (
					s === "vh"
						? (l = Math.max(
								document.documentElement.clientHeight,
								window.innerHeight || 0,
							))
						: (l = Math.max(
								document.documentElement.clientWidth,
								window.innerWidth || 0,
							)),
					(l / 100) * i
				);
			} else return i;
		}
		function as(e, t, n, r) {
			var o = [0, 0],
				i = ["right", "left"].indexOf(r) !== -1,
				s = e.split(/(\+|\-)/).map((p) => p.trim()),
				a = s.indexOf(ot(s, (p) => p.search(/,|\s/) !== -1));
			s[a] &&
				s[a].indexOf(",") === -1 &&
				console.warn(
					"Offsets separated by white space(s) are deprecated, use a comma (,) instead.",
				);
			var c = /\s*,\s*|\s+/,
				l =
					a !== -1
						? [
								s.slice(0, a).concat([s[a].split(c)[0]]),
								[s[a].split(c)[1]].concat(s.slice(a + 1)),
							]
						: [s];
			return (
				(l = l.map((p, u) => {
					var f = (u === 1 ? !i : i) ? "height" : "width",
						d = !1;
					return p
						.reduce(
							(h, b) =>
								h[h.length - 1] === "" && ["+", "-"].indexOf(b) !== -1
									? ((h[h.length - 1] = b), (d = !0), h)
									: d
										? ((h[h.length - 1] += b), (d = !1), h)
										: h.concat(b),
							[],
						)
						.map((h) => ss(h, f, t, n));
				})),
				l.forEach((p, u) => {
					p.forEach((f, d) => {
						pn(f) && (o[u] += f * (p[d - 1] === "-" ? -1 : 1));
					});
				}),
				o
			);
		}
		function ls(e, t) {
			var n = t.offset,
				r = e.placement,
				o = e.offsets,
				i = o.popper,
				s = o.reference,
				a = r.split("-")[0],
				c = void 0;
			return (
				pn(+n) ? (c = [+n, 0]) : (c = as(n, i, s, a)),
				a === "left"
					? ((i.top += c[0]), (i.left -= c[1]))
					: a === "right"
						? ((i.top += c[0]), (i.left += c[1]))
						: a === "top"
							? ((i.left += c[0]), (i.top -= c[1]))
							: a === "bottom" && ((i.left += c[0]), (i.top += c[1])),
				(e.popper = i),
				e
			);
		}
		function cs(e, t) {
			var n = t.boundariesElement || Ue(e.instance.popper);
			e.instance.reference === n && (n = Ue(n));
			var r = un("transform"),
				o = e.instance.popper.style,
				i = o.top,
				s = o.left,
				a = o[r];
			(o.top = ""), (o.left = ""), (o[r] = "");
			var c = cn(
				e.instance.popper,
				e.instance.reference,
				t.padding,
				n,
				e.positionFixed,
			);
			(o.top = i), (o.left = s), (o[r] = a), (t.boundaries = c);
			var l = t.priority,
				p = e.offsets.popper,
				u = {
					primary: (f) => {
						var d = p[f];
						return (
							p[f] < c[f] &&
								!t.escapeWithReference &&
								(d = Math.max(p[f], c[f])),
							He({}, f, d)
						);
					},
					secondary: (f) => {
						var d = f === "right" ? "left" : "top",
							h = p[d];
						return (
							p[f] > c[f] &&
								!t.escapeWithReference &&
								(h = Math.min(
									p[d],
									c[f] - (f === "right" ? p.width : p.height),
								)),
							He({}, d, h)
						);
					},
				};
			return (
				l.forEach((f) => {
					var d = ["left", "top"].indexOf(f) !== -1 ? "primary" : "secondary";
					p = fe({}, p, u[d](f));
				}),
				(e.offsets.popper = p),
				e
			);
		}
		function us(e) {
			var t = e.placement,
				n = t.split("-")[0],
				r = t.split("-")[1];
			if (r) {
				var o = e.offsets,
					i = o.reference,
					s = o.popper,
					a = ["bottom", "top"].indexOf(n) !== -1,
					c = a ? "left" : "top",
					l = a ? "width" : "height",
					p = { start: He({}, c, i[c]), end: He({}, c, i[c] + i[l] - s[l]) };
				e.offsets.popper = fe({}, s, p[r]);
			}
			return e;
		}
		function ps(e) {
			if (!Wr(e.instance.modifiers, "hide", "preventOverflow")) return e;
			var t = e.offsets.reference,
				n = ot(
					e.instance.modifiers,
					(r) => r.name === "preventOverflow",
				).boundaries;
			if (
				t.bottom < n.top ||
				t.left > n.right ||
				t.top > n.bottom ||
				t.right < n.left
			) {
				if (e.hide === !0) return e;
				(e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
			} else {
				if (e.hide === !1) return e;
				(e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
			}
			return e;
		}
		function fs(e) {
			var t = e.placement,
				n = t.split("-")[0],
				r = e.offsets,
				o = r.popper,
				i = r.reference,
				s = ["left", "right"].indexOf(n) !== -1,
				a = ["top", "left"].indexOf(n) === -1;
			return (
				(o[s ? "left" : "top"] = i[n] - (a ? o[s ? "width" : "height"] : 0)),
				(e.placement = Ot(t)),
				(e.offsets.popper = xe(o)),
				e
			);
		}
		function Ct(e) {
			var t = Object.prototype.toString.call(e).slice(8, -1);
			if (/HTML\w+Element/.test(t)) return "HTMLElement";
			if (bs(t)) return t;
		}
		function ge(e) {
			return (t) => Ct(t) === e;
		}
		function bs(e) {
			return ys.includes(e);
		}
		function ze(e) {
			return (t) => typeof t === e;
		}
		function vs(e) {
			return gs.includes(e);
		}
		function C(e) {
			if (e === null) return "null";
			switch (typeof e) {
				case "bigint":
					return "bigint";
				case "boolean":
					return "boolean";
				case "number":
					return "number";
				case "string":
					return "string";
				case "symbol":
					return "symbol";
				case "undefined":
					return "undefined";
			}
			if (C.array(e)) return "Array";
			if (C.plainFunction(e)) return "Function";
			var t = Ct(e);
			return t || "Object";
		}
		function Gr(e) {
			return (t) => typeof t === e;
		}
		function Ss(e, t) {
			var n = e.length;
			if (n !== t.length) return !1;
			for (var r = n; r-- !== 0; ) if (!ae(e[r], t[r])) return !1;
			return !0;
		}
		function Ts(e, t) {
			if (e.byteLength !== t.byteLength) return !1;
			for (
				var n = new DataView(e.buffer),
					r = new DataView(t.buffer),
					o = e.byteLength;
				o--;
			)
				if (n.getUint8(o) !== r.getUint8(o)) return !1;
			return !0;
		}
		function Is(e, t) {
			var n, r, o, i;
			if (e.size !== t.size) return !1;
			try {
				for (var s = nn(e.entries()), a = s.next(); !a.done; a = s.next()) {
					var c = a.value;
					if (!t.has(c[0])) return !1;
				}
			} catch (u) {
				n = { error: u };
			} finally {
				try {
					a && !a.done && (r = s.return) && r.call(s);
				} finally {
					if (n) throw n.error;
				}
			}
			try {
				for (var l = nn(e.entries()), p = l.next(); !p.done; p = l.next()) {
					var c = p.value;
					if (!ae(c[1], t.get(c[0]))) return !1;
				}
			} catch (u) {
				o = { error: u };
			} finally {
				try {
					p && !p.done && (i = l.return) && i.call(l);
				} finally {
					if (o) throw o.error;
				}
			}
			return !0;
		}
		function Cs(e, t) {
			var n, r;
			if (e.size !== t.size) return !1;
			try {
				for (var o = nn(e.entries()), i = o.next(); !i.done; i = o.next()) {
					var s = i.value;
					if (!t.has(s[0])) return !1;
				}
			} catch (a) {
				n = { error: a };
			} finally {
				try {
					i && !i.done && (r = o.return) && r.call(o);
				} finally {
					if (n) throw n.error;
				}
			}
			return !0;
		}
		function ae(e, t) {
			if (e === t) return !0;
			if (e && or(e) && t && or(t)) {
				if (e.constructor !== t.constructor) return !1;
				if (Array.isArray(e) && Array.isArray(t)) return Ss(e, t);
				if (e instanceof Map && t instanceof Map) return Is(e, t);
				if (e instanceof Set && t instanceof Set) return Cs(e, t);
				if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return Ts(e, t);
				if (rr(e) && rr(t)) return e.source === t.source && e.flags === t.flags;
				if (e.valueOf !== Object.prototype.valueOf)
					return e.valueOf() === t.valueOf();
				if (e.toString !== Object.prototype.toString)
					return e.toString() === t.toString();
				var n = Object.keys(e),
					r = Object.keys(t);
				if (n.length !== r.length) return !1;
				for (var o = n.length; o-- !== 0; )
					if (!Object.prototype.hasOwnProperty.call(t, n[o])) return !1;
				for (var o = n.length; o-- !== 0; ) {
					var i = n[o];
					if (!(i === "_owner" && e.$$typeof) && !ae(e[i], t[i])) return !1;
				}
				return !0;
			}
			return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
		}
		function Rs() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			return e.every((n) => A.string(n) || A.array(n) || A.plainObject(n));
		}
		function _s(e, t, n) {
			return Yr(e, t)
				? [e, t].every(A.array)
					? !e.some(cr(n)) && t.some(cr(n))
					: [e, t].every(A.plainObject)
						? !Object.entries(e).some(lr(n)) && Object.entries(t).some(lr(n))
						: t === n
				: !1;
		}
		function ir(e, t, n) {
			var r = n.actual,
				o = n.key,
				i = n.previous,
				s = n.type,
				a = we(e, o),
				c = we(t, o),
				l = [a, c].every(A.number) && (s === "increased" ? a < c : a > c);
			return (
				A.undefined(r) || (l = l && c === r),
				A.undefined(i) || (l = l && a === i),
				l
			);
		}
		function sr(e, t, n) {
			var r = n.key,
				o = n.type,
				i = n.value,
				s = we(e, r),
				a = we(t, r),
				c = o === "added" ? s : a,
				l = o === "added" ? a : s;
			if (!A.nullOrUndefined(i)) {
				if (A.defined(c)) {
					if (A.array(c) || A.plainObject(c)) return _s(c, l, i);
				} else return ae(l, i);
				return !1;
			}
			return [s, a].every(A.array)
				? !l.every(fn(c))
				: [s, a].every(A.plainObject)
					? Ps(Object.keys(c), Object.keys(l))
					: ![s, a].every((p) => A.primitive(p) && A.defined(p)) &&
						(o === "added"
							? !A.defined(s) && A.defined(a)
							: A.defined(s) && !A.defined(a));
		}
		function ar(e, t, n) {
			var r = n === void 0 ? {} : n,
				o = r.key,
				i = we(e, o),
				s = we(t, o);
			if (!Yr(i, s)) throw new TypeError("Inputs have different types");
			if (!Rs(i, s)) throw new TypeError("Inputs don't have length");
			return (
				[i, s].every(A.plainObject) &&
					((i = Object.keys(i)), (s = Object.keys(s))),
				[i, s]
			);
		}
		function lr(e) {
			return (t) => {
				var n = t[0],
					r = t[1];
				return A.array(e)
					? ae(e, r) || e.some((o) => ae(o, r) || (A.array(r) && fn(r)(o)))
					: A.plainObject(e) && e[n]
						? !!e[n] && ae(e[n], r)
						: ae(e, r);
			};
		}
		function Ps(e, t) {
			return t.some((n) => !e.includes(n));
		}
		function cr(e) {
			return (t) =>
				A.array(e)
					? e.some((n) => ae(n, t) || (A.array(t) && fn(t)(n)))
					: ae(e, t);
		}
		function Xe(e, t) {
			return A.array(e) ? e.some((n) => ae(n, t)) : ae(e, t);
		}
		function fn(e) {
			return (t) => e.some((n) => ae(n, t));
		}
		function Yr() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			return (
				e.every(A.array) ||
				e.every(A.number) ||
				e.every(A.plainObject) ||
				e.every(A.string)
			);
		}
		function we(e, t) {
			if (A.plainObject(e) || A.array(e)) {
				if (A.string(t)) {
					var n = t.split(".");
					return n.reduce((r, o) => r && r[o], e);
				}
				return A.number(t) ? e[t] : e;
			}
			return e;
		}
		function xs(e, t) {
			if ([e, t].some(A.nullOrUndefined))
				throw new Error("Missing required parameters");
			if (![e, t].every((u) => A.plainObject(u) || A.array(u)))
				throw new Error("Expected plain objects or array");
			var n = (u, f) => {
					try {
						return sr(e, t, { key: u, type: "added", value: f });
					} catch {
						return !1;
					}
				},
				r = (u, f, d) => {
					try {
						var h = we(e, u),
							b = we(t, u),
							x = A.defined(f),
							g = A.defined(d);
						if (x || g) {
							var w = g ? Xe(d, h) : !Xe(f, h),
								y = Xe(f, b);
							return w && y;
						}
						return [h, b].every(A.array) || [h, b].every(A.plainObject)
							? !ae(h, b)
							: h !== b;
					} catch {
						return !1;
					}
				},
				o = (u, f, d) => {
					if (!A.defined(u)) return !1;
					try {
						var h = we(e, u),
							b = we(t, u),
							x = A.defined(d);
						return Xe(f, h) && (x ? Xe(d, b) : !x);
					} catch {
						return !1;
					}
				},
				i = (u, f) =>
					A.defined(u)
						? (console.warn(
								"`changedTo` is deprecated! Replace it with `change`",
							),
							r(u, f))
						: !1,
				s = (u, f, d) => {
					if (!A.defined(u)) return !1;
					try {
						return ir(e, t, {
							key: u,
							actual: f,
							previous: d,
							type: "decreased",
						});
					} catch {
						return !1;
					}
				},
				a = (u) => {
					try {
						var f = ar(e, t, { key: u }),
							d = f[0],
							h = f[1];
						return !!d.length && !h.length;
					} catch {
						return !1;
					}
				},
				c = (u) => {
					try {
						var f = ar(e, t, { key: u }),
							d = f[0],
							h = f[1];
						return !d.length && !!h.length;
					} catch {
						return !1;
					}
				},
				l = (u, f, d) => {
					if (!A.defined(u)) return !1;
					try {
						return ir(e, t, {
							key: u,
							actual: f,
							previous: d,
							type: "increased",
						});
					} catch {
						return !1;
					}
				},
				p = (u, f) => {
					try {
						return sr(e, t, { key: u, type: "removed", value: f });
					} catch {
						return !1;
					}
				};
			return {
				added: n,
				changed: r,
				changedFrom: o,
				changedTo: i,
				decreased: s,
				emptied: a,
				filled: c,
				increased: l,
				removed: p,
			};
		}
		function ur(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t &&
					(r = r.filter(
						(o) => Object.getOwnPropertyDescriptor(e, o).enumerable,
					)),
					n.push.apply(n, r);
			}
			return n;
		}
		function J(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t] != null ? arguments[t] : {};
				t % 2
					? ur(Object(n), !0).forEach((r) => {
							ne(e, r, n[r]);
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: ur(Object(n)).forEach((r) => {
								Object.defineProperty(
									e,
									r,
									Object.getOwnPropertyDescriptor(n, r),
								);
							});
			}
			return e;
		}
		function it(e, t) {
			if (!(e instanceof t))
				throw new TypeError("Cannot call a class as a function");
		}
		function pr(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				(r.enumerable = r.enumerable || !1),
					(r.configurable = !0),
					"value" in r && (r.writable = !0),
					Object.defineProperty(e, qr(r.key), r);
			}
		}
		function st(e, t, n) {
			return (
				t && pr(e.prototype, t),
				n && pr(e, n),
				Object.defineProperty(e, "prototype", { writable: !1 }),
				e
			);
		}
		function ne(e, t, n) {
			return (
				(t = qr(t)),
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
						})
					: (e[t] = n),
				e
			);
		}
		function at(e, t) {
			if (typeof t != "function" && t !== null)
				throw new TypeError(
					"Super expression must either be null or a function",
				);
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 },
			})),
				Object.defineProperty(e, "prototype", { writable: !1 }),
				t && rn(e, t);
		}
		function St(e) {
			return (
				(St = Object.setPrototypeOf
					? Object.getPrototypeOf.bind()
					: (t) => t.__proto__ || Object.getPrototypeOf(t)),
				St(e)
			);
		}
		function rn(e, t) {
			return (
				(rn = Object.setPrototypeOf
					? Object.setPrototypeOf.bind()
					: (n, r) => ((n.__proto__ = r), n)),
				rn(e, t)
			);
		}
		function As() {
			if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
				return !1;
			if (typeof Proxy == "function") return !0;
			try {
				return (
					Boolean.prototype.valueOf.call(
						Reflect.construct(Boolean, [], () => {}),
					),
					!0
				);
			} catch {
				return !1;
			}
		}
		function ks(e, t) {
			if (e == null) return {};
			var n = {},
				r = Object.keys(e),
				o,
				i;
			for (i = 0; i < r.length; i++)
				(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
			return n;
		}
		function zr(e, t) {
			if (e == null) return {};
			var n = ks(e, t),
				r,
				o;
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(e);
				for (o = 0; o < i.length; o++)
					(r = i[o]),
						!(t.indexOf(r) >= 0) &&
							Object.prototype.propertyIsEnumerable.call(e, r) &&
							(n[r] = e[r]);
			}
			return n;
		}
		function Se(e) {
			if (e === void 0)
				throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called",
				);
			return e;
		}
		function Ns(e, t) {
			if (t && (typeof t == "object" || typeof t == "function")) return t;
			if (t !== void 0)
				throw new TypeError(
					"Derived constructors may only return object or undefined",
				);
			return Se(e);
		}
		function lt(e) {
			var t = As();
			return function () {
				var n = St(e),
					r;
				if (t) {
					var o = St(this).constructor;
					r = Reflect.construct(n, arguments, o);
				} else r = n.apply(this, arguments);
				return Ns(this, r);
			};
		}
		function Ms(e, t) {
			if (typeof e != "object" || e === null) return e;
			var n = e[Symbol.toPrimitive];
			if (n !== void 0) {
				var r = n.call(e, t || "default");
				if (typeof r != "object") return r;
				throw new TypeError("@@toPrimitive must return a primitive value.");
			}
			return (t === "string" ? String : Number)(e);
		}
		function qr(e) {
			var t = Ms(e, "string");
			return typeof t == "symbol" ? t : String(t);
		}
		function Fs(e, t, n, r) {
			return typeof e == "boolean"
				? e
				: typeof e == "function"
					? e(t, n, r)
					: e
						? !!e
						: !1;
		}
		function Bs(e, t) {
			return Object.hasOwnProperty.call(e, t);
		}
		function Us(e, t, n, r) {
			return r
				? new Error(r)
				: new Error(
						"Required "
							.concat(e[t], " `")
							.concat(t, "` was not specified in `")
							.concat(n, "`."),
					);
		}
		function Ws(e, t) {
			if (typeof e != "function") throw new TypeError(Ds);
			if (t && typeof t != "string") throw new TypeError(js);
		}
		function fr(e, t, n) {
			return (
				Ws(e, n),
				(r, o, i) => {
					for (
						var s = arguments.length, a = new Array(s > 3 ? s - 3 : 0), c = 3;
						c < s;
						c++
					)
						a[c - 3] = arguments[c];
					return Fs(t, r, o, i)
						? Bs(r, o)
							? e.apply(void 0, [r, o, i].concat(a))
							: Us(r, o, i, n)
						: e.apply(void 0, [r, o, i].concat(a));
				}
			);
		}
		function ve() {
			return !!(
				typeof window < "u" &&
				window.document &&
				window.document.createElement
			);
		}
		function Xt() {
			return "ontouchstart" in window && /Mobi/.test(navigator.userAgent);
		}
		function vt(e) {
			var t = e.title,
				n = e.data,
				r = e.warn,
				o = r === void 0 ? !1 : r,
				i = e.debug,
				s = i === void 0 ? !1 : i,
				a = o ? console.warn || console.error : console.log;
			s &&
				t &&
				n &&
				(console.groupCollapsed(
					"%creact-floater: ".concat(t),
					"color: #9b00ff; font-weight: bold; font-size: 12px;",
				),
				Array.isArray(n)
					? n.forEach((c) => {
							A.plainObject(c) && c.key
								? a.apply(console, [c.key, c.value])
								: a.apply(console, [c]);
						})
					: a.apply(console, [n]),
				console.groupEnd());
		}
		function Hs(e, t, n) {
			var r =
				arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
			e.addEventListener(t, n, r);
		}
		function Gs(e, t, n) {
			var r =
				arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
			e.removeEventListener(t, n, r);
		}
		function Ys(e, t, n) {
			var r =
					arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
				o;
			(o = (i) => {
				n(i), Gs(e, t, o);
			}),
				Hs(e, t, o, r);
		}
		function dr() {}
		function Kr(e) {
			var t = e.handleClick,
				n = e.styles,
				r = n.color,
				o = n.height,
				i = n.width,
				s = zr(n, zs);
			return m.createElement(
				"button",
				{ "aria-label": "close", onClick: t, style: s, type: "button" },
				m.createElement(
					"svg",
					{
						width: "".concat(i, "px"),
						height: "".concat(o, "px"),
						viewBox: "0 0 18 18",
						version: "1.1",
						xmlns: "http://www.w3.org/2000/svg",
						preserveAspectRatio: "xMidYMid",
					},
					m.createElement(
						"g",
						null,
						m.createElement("path", {
							d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
							fill: r,
						}),
					),
				),
			);
		}
		function Qr(e) {
			var t = e.content,
				n = e.footer,
				r = e.handleClick,
				o = e.open,
				i = e.positionWrapper,
				s = e.showCloseButton,
				a = e.title,
				c = e.styles,
				l = {
					content: m.isValidElement(t)
						? t
						: m.createElement(
								"div",
								{ className: "__floater__content", style: c.content },
								t,
							),
				};
			return (
				a &&
					(l.title = m.isValidElement(a)
						? a
						: m.createElement(
								"div",
								{ className: "__floater__title", style: c.title },
								a,
							)),
				n &&
					(l.footer = m.isValidElement(n)
						? n
						: m.createElement(
								"div",
								{ className: "__floater__footer", style: c.footer },
								n,
							)),
				(s || i) &&
					!A.boolean(o) &&
					(l.close = m.createElement(Kr, { styles: c.close, handleClick: r })),
				m.createElement(
					"div",
					{ className: "__floater__container", style: c.container },
					l.close,
					l.title,
					l.content,
					l.footer,
				)
			);
		}
		function $s(e) {
			var t = (0, tn.default)(qs, e.options || {});
			return {
				wrapper: {
					cursor: "help",
					display: "inline-flex",
					flexDirection: "column",
					zIndex: t.zIndex,
				},
				wrapperPosition: {
					left: -1e3,
					position: "absolute",
					top: -1e3,
					visibility: "hidden",
				},
				floater: {
					display: "inline-block",
					filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
					maxWidth: 300,
					opacity: 0,
					position: "relative",
					transition: "opacity 0.3s",
					visibility: "hidden",
					zIndex: t.zIndex,
				},
				floaterOpening: { opacity: 1, visibility: "visible" },
				floaterWithAnimation: {
					opacity: 1,
					transition: "opacity 0.3s, transform 0.2s",
					visibility: "visible",
				},
				floaterWithComponent: { maxWidth: "100%" },
				floaterClosing: { opacity: 0, visibility: "visible" },
				floaterCentered: {
					left: "50%",
					position: "fixed",
					top: "50%",
					transform: "translate(-50%, -50%)",
				},
				container: {
					backgroundColor: "#fff",
					color: "#666",
					minHeight: 60,
					minWidth: 200,
					padding: 20,
					position: "relative",
					zIndex: 10,
				},
				title: {
					borderBottom: "1px solid #555",
					color: "#555",
					fontSize: 18,
					marginBottom: 5,
					paddingBottom: 6,
					paddingRight: 18,
				},
				content: { fontSize: 15 },
				close: {
					backgroundColor: "transparent",
					border: 0,
					borderRadius: 0,
					color: "#555",
					fontSize: 0,
					height: 15,
					outline: "none",
					padding: 10,
					position: "absolute",
					right: 0,
					top: 0,
					width: 15,
					WebkitAppearance: "none",
				},
				footer: {
					borderTop: "1px solid #ccc",
					fontSize: 13,
					marginTop: 10,
					paddingTop: 5,
				},
				arrow: {
					color: "#fff",
					display: "inline-flex",
					length: 16,
					margin: 8,
					position: "absolute",
					spread: 32,
				},
				options: t,
			};
		}
		function Re() {
			return !!(
				typeof window < "u" &&
				window.document &&
				window.document.createElement
			);
		}
		function Zr(e) {
			return e ? e.getBoundingClientRect() : null;
		}
		function Zs(e = !0) {
			const { body: t, documentElement: n } = document;
			if (!t || !n) return 0;
			if (e) {
				const r = [
						t.scrollHeight,
						t.offsetHeight,
						n.clientHeight,
						n.scrollHeight,
						n.offsetHeight,
					].sort((i, s) => i - s),
					o = Math.floor(r.length / 2);
				return r.length % 2 === 0 ? (r[o - 1] + r[o]) / 2 : r[o];
			}
			return Math.max(
				t.scrollHeight,
				t.offsetHeight,
				n.clientHeight,
				n.scrollHeight,
				n.offsetHeight,
			);
		}
		function Pe(e) {
			return typeof e == "string" ? document.querySelector(e) : e;
		}
		function ea(e) {
			return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
		}
		function Rt(e, t, n) {
			if (!e) return Ne();
			const r = (0, Rr.default)(e);
			if (r) {
				if (r.isSameNode(Ne())) return n ? document : Ne();
				if (!(r.scrollHeight > r.offsetHeight) && !t)
					return (r.style.overflow = "initial"), Ne();
			}
			return r;
		}
		function ct(e, t) {
			if (!e) return !1;
			const n = Rt(e, t);
			return n ? !n.isSameNode(Ne()) : !1;
		}
		function ta(e) {
			return e.offsetParent !== document.body;
		}
		function tt(e, t = "fixed") {
			if (!e || !(e instanceof HTMLElement)) return !1;
			const { nodeName: n } = e,
				r = ea(e);
			return n === "BODY" || n === "HTML"
				? !1
				: r && r.position === t
					? !0
					: e.parentNode
						? tt(e.parentNode, t)
						: !1;
		}
		function na(e) {
			var t;
			if (!e) return !1;
			let n = e;
			while (n && n !== document.body) {
				if (n instanceof HTMLElement) {
					const { display: r, visibility: o } = getComputedStyle(n);
					if (r === "none" || o === "hidden") return !1;
				}
				n = (t = n.parentElement) != null ? t : null;
			}
			return !0;
		}
		function ra(e, t, n) {
			var r;
			let o = Zr(e),
				i = Rt(e, n),
				s = ct(e, n),
				a = 0,
				c = (r = o?.top) != null ? r : 0;
			return (
				i instanceof HTMLElement &&
					((a = i.scrollTop),
					!s && !tt(e) && (c += a),
					i.isSameNode(Ne()) || (c += Ne().scrollTop)),
				Math.floor(c - t)
			);
		}
		function oa(e, t, n) {
			var r;
			if (!e) return 0;
			let { offsetTop: o = 0, scrollTop: i = 0 } =
					(r = (0, Rr.default)(e)) != null ? r : {},
				s = e.getBoundingClientRect().top + i;
			o && (ct(e, n) || ta(e)) && (s -= o);
			const a = Math.floor(s - t);
			return a < 0 ? 0 : a;
		}
		function Ne() {
			var e;
			return (e = document.scrollingElement) != null
				? e
				: document.documentElement;
		}
		function ia(e, t) {
			const { duration: n, element: r } = t;
			return new Promise((o, i) => {
				const { scrollTop: s } = r,
					a = e > s ? e - s : s - e;
				Ai.default.top(r, e, { duration: a < 100 ? 50 : n }, (c) =>
					c && c.message !== "Element already at target scroll position"
						? i(c)
						: o(),
				);
			});
		}
		function eo(e = navigator.userAgent) {
			let t = e;
			return (
				typeof window > "u"
					? (t = "node")
					: document.documentMode
						? (t = "ie")
						: /Edge/.test(e)
							? (t = "edge")
							: window.opera || e.includes(" OPR/")
								? (t = "opera")
								: typeof window.InstallTrigger < "u"
									? (t = "firefox")
									: window.chrome
										? (t = "chrome")
										: /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(
												e,
											) && (t = "safari"),
				t
			);
		}
		function _e(e) {
			const t = [],
				n = (r) => {
					if (typeof r == "string" || typeof r == "number") t.push(r);
					else if (Array.isArray(r)) r.forEach((o) => n(o));
					else if (jt(r)) {
						const { children: o } = r.props;
						Array.isArray(o) ? o.forEach((i) => n(i)) : n(o);
					}
				};
			return n(e), t.join(" ").trim();
		}
		function sa(e, t) {
			return !R.plainObject(e) || !R.array(t)
				? !1
				: Object.keys(e).every((n) => t.includes(n));
		}
		function aa(e) {
			const t = /^#?([\da-f])([\da-f])([\da-f])$/i,
				n = e.replace(t, (o, i, s, a) => i + i + s + s + a + a),
				r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
			return r
				? [
						Number.parseInt(r[1], 16),
						Number.parseInt(r[2], 16),
						Number.parseInt(r[3], 16),
					]
				: [];
		}
		function hr(e) {
			return e.disableBeacon || e.placement === "center";
		}
		function mr() {
			return !["chrome", "safari", "firefox", "opera"].includes(eo());
		}
		function Ae({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
			const o = r ? console.warn || console.error : console.log;
			t &&
				(n && e
					? (console.groupCollapsed(
							`%creact-joyride: ${n}`,
							"color: #ff0044; font-weight: bold; font-size: 12px;",
						),
						Array.isArray(e)
							? e.forEach((i) => {
									R.plainObject(i) && i.key
										? o.apply(console, [i.key, i.value])
										: o.apply(console, [i]);
								})
							: o.apply(console, [e]),
						console.groupEnd())
					: console.error("Missing title or data props"));
		}
		function la(e) {
			return Object.keys(e);
		}
		function to(e, ...t) {
			if (!R.plainObject(e)) throw new TypeError("Expected an object");
			const n = {};
			for (const r in e)
				({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
			return n;
		}
		function ca(e, ...t) {
			if (!R.plainObject(e)) throw new TypeError("Expected an object");
			if (!t.length) return e;
			const n = {};
			for (const r in e)
				({}).hasOwnProperty.call(e, r) && t.includes(r) && (n[r] = e[r]);
			return n;
		}
		function ua(e) {
			const {
				isFirstStep: t,
				lifecycle: n,
				previousLifecycle: r,
				scrollToFirstStep: o,
				step: i,
				target: s,
			} = e;
			return (
				!i.disableScrolling &&
				(!t || o || n === k.TOOLTIP) &&
				i.placement !== "center" &&
				(!i.isFixed || !tt(s)) &&
				r !== n &&
				[k.BEACON, k.TOOLTIP].includes(n)
			);
		}
		function ma(e, t) {
			var n, r, o, i, s;
			let { floaterProps: a, styles: c } = e,
				l = (0, bt.default)((n = t.floaterProps) != null ? n : {}, a ?? {}),
				p = (0, bt.default)(c ?? {}, (r = t.styles) != null ? r : {}),
				u = (0, bt.default)(ha, p.options || {}),
				f = t.placement === "center" || t.disableBeacon,
				{ width: d } = u;
			window.innerWidth > 480 && (d = 380),
				"width" in u &&
					(d =
						typeof u.width == "number" && window.innerWidth < u.width
							? window.innerWidth - 30
							: u.width);
			const h = {
					bottom: 0,
					left: 0,
					overflow: "hidden",
					position: "absolute",
					right: 0,
					top: 0,
					zIndex: u.zIndex,
				},
				b = {
					beacon: {
						...et,
						display: f ? "none" : "inline-block",
						height: u.beaconSize,
						position: "relative",
						width: u.beaconSize,
						zIndex: u.zIndex,
					},
					beaconInner: {
						animation: "joyride-beacon-inner 1.2s infinite ease-in-out",
						backgroundColor: u.primaryColor,
						borderRadius: "50%",
						display: "block",
						height: "50%",
						left: "50%",
						opacity: 0.7,
						position: "absolute",
						top: "50%",
						transform: "translate(-50%, -50%)",
						width: "50%",
					},
					beaconOuter: {
						animation: "joyride-beacon-outer 1.2s infinite ease-in-out",
						backgroundColor: `rgba(${aa(u.primaryColor).join(",")}, 0.2)`,
						border: `2px solid ${u.primaryColor}`,
						borderRadius: "50%",
						boxSizing: "border-box",
						display: "block",
						height: "100%",
						left: 0,
						opacity: 0.9,
						position: "absolute",
						top: 0,
						transformOrigin: "center",
						width: "100%",
					},
					tooltip: {
						backgroundColor: u.backgroundColor,
						borderRadius: 5,
						boxSizing: "border-box",
						color: u.textColor,
						fontSize: 16,
						maxWidth: "100%",
						padding: 15,
						position: "relative",
						width: d,
					},
					tooltipContainer: { lineHeight: 1.4, textAlign: "center" },
					tooltipTitle: { fontSize: 18, margin: 0 },
					tooltipContent: { padding: "20px 10px" },
					tooltipFooter: {
						alignItems: "center",
						display: "flex",
						justifyContent: "flex-end",
						marginTop: 15,
					},
					tooltipFooterSpacer: { flex: 1 },
					buttonNext: {
						...et,
						backgroundColor: u.primaryColor,
						borderRadius: 4,
						color: "#fff",
					},
					buttonBack: {
						...et,
						color: u.primaryColor,
						marginLeft: "auto",
						marginRight: 5,
					},
					buttonClose: {
						...et,
						color: u.textColor,
						height: 14,
						padding: 15,
						position: "absolute",
						right: 0,
						top: 0,
						width: 14,
					},
					buttonSkip: { ...et, color: u.textColor, fontSize: 14 },
					overlay: {
						...h,
						backgroundColor: u.overlayColor,
						mixBlendMode: "hard-light",
					},
					overlayLegacy: { ...h },
					overlayLegacyCenter: { ...h, backgroundColor: u.overlayColor },
					spotlight: { ...yr, backgroundColor: "gray" },
					spotlightLegacy: {
						...yr,
						boxShadow: `0 0 0 9999px ${u.overlayColor}, ${u.spotlightShadow}`,
					},
					floaterStyles: {
						arrow: {
							color:
								(s =
									(i = (o = l?.styles) == null ? void 0 : o.arrow) == null
										? void 0
										: i.color) != null
									? s
									: u.arrowColor,
						},
						options: { zIndex: u.zIndex + 100 },
					},
					options: u,
				};
			return (0, bt.default)(b, p);
		}
		function ya(e) {
			return ca(
				e,
				"beaconComponent",
				"disableCloseOnEsc",
				"disableOverlay",
				"disableOverlayClose",
				"disableScrolling",
				"disableScrollParentFix",
				"floaterProps",
				"hideBackButton",
				"hideCloseButton",
				"locale",
				"showProgress",
				"showSkipButton",
				"spotlightClicks",
				"spotlightPadding",
				"styles",
				"tooltipComponent",
			);
		}
		function Be(e, t) {
			var n, r, o, i, s, a;
			const c = t ?? {},
				l = gt.default.all([fa, ya(e), c], {
					isMergeableObject: R.plainObject,
				}),
				p = ma(e, l),
				u = ct(Pe(l.target), l.disableScrollParentFix),
				f = gt.default.all([
					pa,
					(n = e.floaterProps) != null ? n : {},
					(r = l.floaterProps) != null ? r : {},
				]);
			return (
				(f.offset = l.offset),
				(f.styles = (0, gt.default)(
					(o = f.styles) != null ? o : {},
					p.floaterStyles,
				)),
				(f.offset +=
					(s = (i = e.spotlightPadding) != null ? i : l.spotlightPadding) !=
					null
						? s
						: 0),
				l.placementBeacon &&
					f.wrapperOptions &&
					(f.wrapperOptions.placement = l.placementBeacon),
				u &&
					f.options.preventOverflow &&
					(f.options.preventOverflow.boundariesElement = "window"),
				{
					...l,
					locale: gt.default.all([
						no,
						(a = e.locale) != null ? a : {},
						l.locale || {},
					]),
					floaterProps: f,
					styles: to(p, "floaterStyles"),
				}
			);
		}
		function ro(e, t = !1) {
			return R.plainObject(e)
				? e.target
					? !0
					: (Ae({
							title: "validateStep",
							data: "target is missing from the step",
							warn: !0,
							debug: t,
						}),
						!1)
				: (Ae({
						title: "validateStep",
						data: "step must be an object",
						warn: !0,
						debug: t,
					}),
					!1);
		}
		function gr(e, t = !1) {
			return R.array(e)
				? e.every((n) => ro(n, t))
				: (Ae({
						title: "validateSteps",
						data: "steps must be an array",
						warn: !0,
						debug: t,
					}),
					!1);
		}
		function ba(e) {
			return new ga(e);
		}
		function va({ styles: e }) {
			return V("div", {
				key: "JoyrideSpotlight",
				className: "react-joyride__spotlight",
				"data-test-id": "spotlight",
				style: e,
			});
		}
		function Ia({ styles: e, ...t }) {
			const { color: n, height: r, width: o, ...i } = e;
			return m.createElement(
				"button",
				{ style: i, type: "button", ...t },
				m.createElement(
					"svg",
					{
						height: typeof r == "number" ? `${r}px` : r,
						preserveAspectRatio: "xMidYMid",
						version: "1.1",
						viewBox: "0 0 18 18",
						width: typeof o == "number" ? `${o}px` : o,
						xmlns: "http://www.w3.org/2000/svg",
					},
					m.createElement(
						"g",
						null,
						m.createElement("path", {
							d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
							fill: n,
						}),
					),
				),
			);
		}
		function Ra(e) {
			const {
					backProps: t,
					closeProps: n,
					continuous: r,
					index: o,
					isLastStep: i,
					primaryProps: s,
					size: a,
					skipProps: c,
					step: l,
					tooltipProps: p,
				} = e,
				{
					content: u,
					hideBackButton: f,
					hideCloseButton: d,
					hideFooter: h,
					locale: b,
					showProgress: x,
					showSkipButton: g,
					styles: w,
					title: y,
				} = l,
				{ back: O, close: T, last: Q, next: N, skip: ee } = b,
				X = { primary: T };
			return (
				r &&
					((X.primary = i ? Q : N),
					x &&
						(X.primary = V("span", null, X.primary, " (", o + 1, "/", a, ")"))),
				X.primary &&
					(X.primary = V(
						"button",
						{
							"data-test-id": "button-primary",
							style: w.buttonNext,
							type: "button",
							...s,
						},
						X.primary,
					)),
				g &&
					!i &&
					(X.skip = V(
						"button",
						{
							"aria-live": "off",
							"data-test-id": "button-skip",
							style: w.buttonSkip,
							type: "button",
							...c,
						},
						ee,
					)),
				!f &&
					o > 0 &&
					(X.back = V(
						"button",
						{
							"data-test-id": "button-back",
							style: w.buttonBack,
							type: "button",
							...t,
						},
						O,
					)),
				(X.close =
					!d &&
					V(Ca, {
						"data-test-id": "button-close",
						styles: w.buttonClose,
						...n,
					})),
				V(
					"div",
					{
						key: "JoyrideTooltip",
						"aria-label": _e(y) || _e(u),
						className: "react-joyride__tooltip",
						style: w.tooltip,
						...p,
					},
					V(
						"div",
						{ style: w.tooltipContainer },
						y && V("h1", { "aria-label": _e(y), style: w.tooltipTitle }, y),
						V("div", { style: w.tooltipContent }, u),
					),
					!h &&
						V(
							"div",
							{ style: w.tooltipFooter },
							V("div", { style: w.tooltipFooterSpacer }, X.skip),
							X.back,
							X.primary,
						),
					X.close,
				)
			);
		}
		function Ha({ step: e, steps: t, onClose: n, onComplete: r }) {
			const [o, i] = ce(null),
				s = _n();
			return (
				le(() => {
					let a;
					return (
						i((c) => {
							const l = t.findIndex(({ key: p }) => p === e);
							return l === -1
								? null
								: l === c
									? c
									: ((a = setTimeout(i, 500, l)), null);
						}),
						() => clearTimeout(a)
					);
				}, [e, t]),
				o === null
					? null
					: m.createElement(Aa, {
							continuous: !0,
							steps: t,
							stepIndex: o,
							spotlightPadding: 0,
							disableCloseOnEsc: !0,
							disableOverlayClose: !0,
							disableScrolling: !0,
							callback: (a) => {
								a.action === Y.CLOSE && n(),
									a.action === Y.NEXT && a.index === a.size - 1 && r();
							},
							floaterProps: {
								disableAnimation: !0,
								styles: {
									arrow: { length: 20, spread: 2 },
									floater: {
										filter:
											s.base === "light"
												? "drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))"
												: "drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)",
									},
								},
							},
							tooltipComponent: Wa,
							styles: {
								overlay: {
									mixBlendMode: "unset",
									backgroundColor:
										t[o]?.target === "body" ? "rgba(27, 28, 29, 0.2)" : "none",
								},
								spotlight: {
									backgroundColor: "none",
									border: `solid 2px ${s.color.secondary}`,
									boxShadow: "0px 0px 0px 9999px rgba(27, 28, 29, 0.2)",
								},
								tooltip: {
									width: 280,
									color: s.color.lightest,
									background: s.color.secondary,
								},
								options: {
									zIndex: 9998,
									primaryColor: s.color.secondary,
									arrowColor: s.color.secondary,
								},
							},
						})
			);
		}
		function nl({ api: e }) {
			const [t, n] = ce(!0),
				[r, o] = ce(!1),
				[i, s] = ce("1:Intro"),
				[a, c] = ce(),
				[l, p] = ce(),
				[u, f] = ce(),
				[d, h] = ce(),
				b = je(
					(N) => {
						try {
							const { id: ee, refId: X } = e.getCurrentStoryData() || {};
							(ee !== N || X !== void 0) && e.selectStory(N);
						} catch {}
					},
					[e],
				),
				x = je(() => {
					const N = new URL(window.location.href),
						ee = decodeURIComponent(N.searchParams.get("path"));
					(N.search = `?path=${ee}&onboarding=false`),
						history.replaceState({}, "", N.href),
						e.setQueryParams({ onboarding: "false" }),
						n(!1);
				}, [e, n]),
				g = je(() => {
					e.emit(Gn, { step: "6:FinishedOnboarding", type: "telemetry" }),
						b("configure-your-project--docs"),
						x();
				}, [e, b, x]);
			if (
				(le(() => {
					e.setQueryParams({ onboarding: "true" }),
						b("example-button--primary"),
						e.togglePanel(!0),
						e.togglePanelPosition("bottom"),
						e.setSelectedPanel("addon-controls");
				}, [e, b]),
				le(() => {
					const N = new MutationObserver(() => {
						c(document.getElementById("control-primary")),
							p(document.getElementById("save-from-controls")),
							f(document.getElementById("create-new-story-form"));
					});
					return (
						N.observe(document.body, { childList: !0, subtree: !0 }),
						() => N.disconnect()
					);
				}, []),
				le(() => {
					s((N) =>
						["1:Intro", "5:StoryCreated", "6:FinishedOnboarding"].includes(N)
							? N
							: u
								? "4:CreateStory"
								: l
									? "3:SaveFromControls"
									: a
										? "2:Controls"
										: "1:Intro",
					);
				}, [u, a, l]),
				le(
					() =>
						e.on(En, ({ payload: N, success: ee }) => {
							!ee ||
								!N?.newStoryName ||
								(h(N),
								o(!0),
								s("5:StoryCreated"),
								setTimeout(() => e.clearNotification("save-story-success")));
						}),
					[e],
				),
				le(() => e.emit(Gn, { step: i, type: "telemetry" }), [e, i]),
				!t)
			)
				return null;
			const w = d?.sourceFileContent,
				y = w?.lastIndexOf(`export const ${d?.newStoryExportName}`),
				O = w?.slice(y).trim(),
				T = w?.slice(0, y).split(`
`).length,
				Q = [
					{
						key: "2:Controls",
						target: "#control-primary",
						title: "Interactive story playground",
						content: m.createElement(
							m.Fragment,
							null,
							"See how a story renders with different data and state without touching code. Try it out by toggling this button.",
							m.createElement(Hn, {
								targetSelector: "#control-primary",
								pulsating: !0,
							}),
						),
						offset: 20,
						placement: "right",
						disableBeacon: !0,
						disableOverlay: !0,
						spotlightClicks: !0,
						onNextButtonClick: () => {
							document.querySelector("#control-primary").click();
						},
					},
					{
						key: "3:SaveFromControls",
						target: 'button[aria-label="Create new story with these settings"]',
						title: "Save your changes as a new story",
						content: m.createElement(
							m.Fragment,
							null,
							"Great! Storybook stories represent the key states of each of your components. After modifying a story, you can save your changes from here or reset it.",
							m.createElement(Hn, {
								targetSelector:
									"button[aria-label='Create new story with these settings']",
							}),
						),
						offset: 6,
						placement: "top",
						disableBeacon: !0,
						disableOverlay: !0,
						spotlightClicks: !0,
						onNextButtonClick: () => {
							document
								.querySelector(
									'button[aria-label="Create new story with these settings"]',
								)
								.click();
						},
						styles: { tooltip: { width: 400 } },
					},
					{
						key: "5:StoryCreated",
						target: '#storybook-explorer-tree [data-selected="true"]',
						title: "You just added your first story!",
						content: m.createElement(
							m.Fragment,
							null,
							"Well done! You just created your first story from the Storybook manager. This automatically added a few lines of code in",
							" ",
							m.createElement(Za, null, d?.sourceFileName),
							".",
							O &&
								m.createElement(
									Wt,
									{ theme: Ht(Rn.dark) },
									m.createElement(
										el,
										null,
										m.createElement(
											In,
											{
												language: "jsx",
												showLineNumbers: !0,
												startingLineNumber: T,
											},
											O,
										),
									),
								),
						),
						offset: 12,
						placement: "right",
						disableBeacon: !0,
						disableOverlay: !0,
						styles: { tooltip: { width: 400 } },
					},
				];
			return m.createElement(
				Wt,
				{ theme: tl },
				r &&
					m.createElement(di, {
						numberOfPieces: 800,
						recycle: !1,
						tweenDuration: 2e4,
						onConfettiComplete: (N) => {
							N?.reset(), o(!1);
						},
					}),
				i === "1:Intro"
					? m.createElement(Ja, { onDismiss: () => s("2:Controls") })
					: m.createElement(Ha, {
							step: i,
							steps: Q,
							onClose: x,
							onComplete: g,
						}),
			);
		}
		var Zo,
			Er,
			ei,
			wr,
			ti,
			ni,
			de,
			ri,
			Me,
			oi,
			ii,
			on,
			si,
			Or,
			ai,
			Sr,
			Tr,
			li,
			ci,
			ui,
			pi,
			fi,
			Gn,
			yi,
			gi,
			Yn,
			zn,
			bi,
			Si,
			Ti,
			Ri,
			R,
			Ai,
			Rr,
			gt,
			bt,
			E,
			nt,
			ki,
			Li,
			Di,
			Xn,
			Jn,
			Bi,
			Ui,
			He,
			fe,
			es,
			Hr,
			Kt,
			Qt,
			ds,
			hs,
			It,
			nr,
			tn,
			ms,
			ys,
			gs,
			A,
			Es,
			ws,
			rr,
			or,
			Os,
			nn,
			Ls,
			Ds,
			js,
			U,
			Je,
			$r,
			Vr,
			zs,
			Xr,
			Jr,
			qs,
			Vs,
			Ks,
			dn,
			Qs,
			Xs,
			Js,
			_,
			Y,
			me,
			k,
			D,
			Ze,
			pa,
			no,
			fa,
			da,
			ha,
			et,
			yr,
			oo,
			br,
			ga,
			Ea,
			wa,
			Oa,
			Sa,
			Ta,
			Ca,
			_a,
			Pa,
			xa,
			io,
			Aa,
			ka,
			Na,
			Ma,
			La,
			Da,
			ja,
			Fa,
			Ba,
			Ua,
			Wa,
			Ga,
			so,
			Ya,
			za,
			qa,
			$a,
			Va,
			Ka,
			Qa,
			Xa,
			vr,
			Ja,
			Za,
			el,
			tl,
			lo = pe(() => {
				z();
				q();
				$();
				Fe();
				Fe();
				Cn();
				Ut();
				Pn();
				dt();
				dt();
				Fn();
				Wn();
				(Zo = Object.create),
					(Er = Object.defineProperty),
					(ei = Object.getOwnPropertyDescriptor),
					(wr = Object.getOwnPropertyNames),
					(ti = Object.getPrototypeOf),
					(ni = Object.prototype.hasOwnProperty),
					(de = (e, t) => () => (
						t || (0, e[wr(e)[0]])((t = { exports: {} }).exports, t), t.exports
					)),
					(ri = (e, t, n, r) => {
						if ((t && typeof t == "object") || typeof t == "function")
							for (const o of wr(t))
								!ni.call(e, o) &&
									o !== n &&
									Er(e, o, {
										get: () => t[o],
										enumerable: !(r = ei(t, o)) || r.enumerable,
									});
						return e;
					}),
					(Me = (e, t, n) => (
						(n = e != null ? Zo(ti(e)) : {}),
						ri(
							t || !e || !e.__esModule
								? Er(n, "default", { value: e, enumerable: !0 })
								: n,
							e,
						)
					)),
					(oi = de({
						"../../node_modules/scroll/index.js"(e, t) {
							var n = new Error("Element already at target scroll position"),
								r = new Error("Scroll cancelled"),
								o = Math.min,
								i = Date.now;
							t.exports = { left: s("scrollLeft"), top: s("scrollTop") };
							function s(l) {
								return (p, u, f, d) => {
									(f = f || {}),
										typeof f == "function" && ((d = f), (f = {})),
										typeof d != "function" && (d = c);
									var h = i(),
										b = p[l],
										x = f.ease || a,
										g = isNaN(f.duration) ? 350 : +f.duration,
										w = !1;
									return b === u ? d(n, p[l]) : requestAnimationFrame(O), y;
									function y() {
										w = !0;
									}
									function O(T) {
										if (w) return d(r, p[l]);
										var Q = i(),
											N = o(1, (Q - h) / g),
											ee = x(N);
										(p[l] = ee * (u - b) + b),
											N < 1
												? requestAnimationFrame(O)
												: requestAnimationFrame(() => {
														d(null, p[l]);
													});
									}
								};
							}
							function a(l) {
								return 0.5 * (1 - Math.cos(Math.PI * l));
							}
							function c() {}
						},
					})),
					(ii = de({
						"../../node_modules/scrollparent/scrollparent.js"(e, t) {
							((n, r) => {
								typeof define == "function" && define.amd
									? define([], r)
									: typeof t == "object" && t.exports
										? (t.exports = r())
										: (n.Scrollparent = r());
							})(e, () => {
								function n(o) {
									var i = getComputedStyle(o, null).getPropertyValue(
										"overflow",
									);
									return i.indexOf("scroll") > -1 || i.indexOf("auto") > -1;
								}
								function r(o) {
									if (o instanceof HTMLElement || o instanceof SVGElement) {
										for (var i = o.parentNode; i.parentNode; ) {
											if (n(i)) return i;
											i = i.parentNode;
										}
										return (
											document.scrollingElement || document.documentElement
										);
									}
								}
								return r;
							});
						},
					})),
					(on = de({
						"../../node_modules/deepmerge/dist/cjs.js"(e, t) {
							var n = (y) => r(y) && !o(y);
							function r(y) {
								return !!y && typeof y == "object";
							}
							function o(y) {
								var O = Object.prototype.toString.call(y);
								return O === "[object RegExp]" || O === "[object Date]" || a(y);
							}
							var i = typeof Symbol == "function" && Symbol.for,
								s = i ? Symbol.for("react.element") : 60103;
							function a(y) {
								return y.$$typeof === s;
							}
							function c(y) {
								return Array.isArray(y) ? [] : {};
							}
							function l(y, O) {
								return O.clone !== !1 && O.isMergeableObject(y)
									? g(c(y), y, O)
									: y;
							}
							function p(y, O, T) {
								return y.concat(O).map((Q) => l(Q, T));
							}
							function u(y, O) {
								if (!O.customMerge) return g;
								var T = O.customMerge(y);
								return typeof T == "function" ? T : g;
							}
							function f(y) {
								return Object.getOwnPropertySymbols
									? Object.getOwnPropertySymbols(y).filter((O) =>
											Object.propertyIsEnumerable.call(y, O),
										)
									: [];
							}
							function d(y) {
								return Object.keys(y).concat(f(y));
							}
							function h(y, O) {
								try {
									return O in y;
								} catch {
									return !1;
								}
							}
							function b(y, O) {
								return (
									h(y, O) &&
									!(
										Object.hasOwnProperty.call(y, O) &&
										Object.propertyIsEnumerable.call(y, O)
									)
								);
							}
							function x(y, O, T) {
								var Q = {};
								return (
									T.isMergeableObject(y) &&
										d(y).forEach((N) => {
											Q[N] = l(y[N], T);
										}),
									d(O).forEach((N) => {
										b(y, N) ||
											(h(y, N) && T.isMergeableObject(O[N])
												? (Q[N] = u(N, T)(y[N], O[N], T))
												: (Q[N] = l(O[N], T)));
									}),
									Q
								);
							}
							function g(y, O, T) {
								(T = T || {}),
									(T.arrayMerge = T.arrayMerge || p),
									(T.isMergeableObject = T.isMergeableObject || n),
									(T.cloneUnlessOtherwiseSpecified = l);
								var Q = Array.isArray(O),
									N = Array.isArray(y),
									ee = Q === N;
								return ee ? (Q ? T.arrayMerge(y, O, T) : x(y, O, T)) : l(O, T);
							}
							g.all = (y, O) => {
								if (!Array.isArray(y))
									throw new Error("first argument should be an array");
								return y.reduce((T, Q) => g(T, Q, O), {});
							};
							var w = g;
							t.exports = w;
						},
					})),
					(si = de({
						"../../node_modules/react-is/cjs/react-is.development.js"(e) {
							(() => {
								var t = typeof Symbol == "function" && Symbol.for,
									n = t ? Symbol.for("react.element") : 60103,
									r = t ? Symbol.for("react.portal") : 60106,
									o = t ? Symbol.for("react.fragment") : 60107,
									i = t ? Symbol.for("react.strict_mode") : 60108,
									s = t ? Symbol.for("react.profiler") : 60114,
									a = t ? Symbol.for("react.provider") : 60109,
									c = t ? Symbol.for("react.context") : 60110,
									l = t ? Symbol.for("react.async_mode") : 60111,
									p = t ? Symbol.for("react.concurrent_mode") : 60111,
									u = t ? Symbol.for("react.forward_ref") : 60112,
									f = t ? Symbol.for("react.suspense") : 60113,
									d = t ? Symbol.for("react.suspense_list") : 60120,
									h = t ? Symbol.for("react.memo") : 60115,
									b = t ? Symbol.for("react.lazy") : 60116,
									x = t ? Symbol.for("react.block") : 60121,
									g = t ? Symbol.for("react.fundamental") : 60117,
									w = t ? Symbol.for("react.responder") : 60118,
									y = t ? Symbol.for("react.scope") : 60119;
								function O(S) {
									return (
										typeof S == "string" ||
										typeof S == "function" ||
										S === o ||
										S === p ||
										S === s ||
										S === i ||
										S === f ||
										S === d ||
										(typeof S == "object" &&
											S !== null &&
											(S.$$typeof === b ||
												S.$$typeof === h ||
												S.$$typeof === a ||
												S.$$typeof === c ||
												S.$$typeof === u ||
												S.$$typeof === g ||
												S.$$typeof === w ||
												S.$$typeof === y ||
												S.$$typeof === x))
									);
								}
								function T(S) {
									if (typeof S == "object" && S !== null) {
										var te = S.$$typeof;
										switch (te) {
											case n:
												var Oe = S.type;
												switch (Oe) {
													case l:
													case p:
													case o:
													case s:
													case i:
													case f:
														return Oe;
													default:
														var hn = Oe && Oe.$$typeof;
														switch (hn) {
															case c:
															case u:
															case b:
															case h:
															case a:
																return hn;
															default:
																return te;
														}
												}
											case r:
												return te;
										}
									}
								}
								var Q = l,
									N = p,
									ee = c,
									X = a,
									he = n,
									_t = u,
									Pt = o,
									ut = b,
									xt = h,
									At = r,
									De = s,
									kt = i,
									be = f,
									Te = !1;
								function Nt(S) {
									return (
										Te ||
											((Te = !0),
											console.warn(
												"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.",
											)),
										pt(S) || T(S) === l
									);
								}
								function pt(S) {
									return T(S) === p;
								}
								function v(S) {
									return T(S) === c;
								}
								function P(S) {
									return T(S) === a;
								}
								function B(S) {
									return typeof S == "object" && S !== null && S.$$typeof === n;
								}
								function j(S) {
									return T(S) === u;
								}
								function M(S) {
									return T(S) === o;
								}
								function W(S) {
									return T(S) === b;
								}
								function L(S) {
									return T(S) === h;
								}
								function F(S) {
									return T(S) === r;
								}
								function H(S) {
									return T(S) === s;
								}
								function K(S) {
									return T(S) === i;
								}
								function G(S) {
									return T(S) === f;
								}
								(e.AsyncMode = Q),
									(e.ConcurrentMode = N),
									(e.ContextConsumer = ee),
									(e.ContextProvider = X),
									(e.Element = he),
									(e.ForwardRef = _t),
									(e.Fragment = Pt),
									(e.Lazy = ut),
									(e.Memo = xt),
									(e.Portal = At),
									(e.Profiler = De),
									(e.StrictMode = kt),
									(e.Suspense = be),
									(e.isAsyncMode = Nt),
									(e.isConcurrentMode = pt),
									(e.isContextConsumer = v),
									(e.isContextProvider = P),
									(e.isElement = B),
									(e.isForwardRef = j),
									(e.isFragment = M),
									(e.isLazy = W),
									(e.isMemo = L),
									(e.isPortal = F),
									(e.isProfiler = H),
									(e.isStrictMode = K),
									(e.isSuspense = G),
									(e.isValidElementType = O),
									(e.typeOf = T);
							})();
						},
					})),
					(Or = de({
						"../../node_modules/react-is/index.js"(e, t) {
							t.exports = si();
						},
					})),
					(ai = de({
						"../../node_modules/object-assign/index.js"(e, t) {
							var n = Object.getOwnPropertySymbols,
								r = Object.prototype.hasOwnProperty,
								o = Object.prototype.propertyIsEnumerable;
							function i(a) {
								if (a == null)
									throw new TypeError(
										"Object.assign cannot be called with null or undefined",
									);
								return Object(a);
							}
							function s() {
								try {
									if (!Object.assign) return !1;
									var a = new String("abc");
									if (((a[5] = "de"), Object.getOwnPropertyNames(a)[0] === "5"))
										return !1;
									for (var c = {}, l = 0; l < 10; l++)
										c["_" + String.fromCharCode(l)] = l;
									var p = Object.getOwnPropertyNames(c).map((f) => c[f]);
									if (p.join("") !== "0123456789") return !1;
									var u = {};
									return (
										"abcdefghijklmnopqrst".split("").forEach((f) => {
											u[f] = f;
										}),
										Object.keys(Object.assign({}, u)).join("") ===
											"abcdefghijklmnopqrst"
									);
								} catch {
									return !1;
								}
							}
							t.exports = s()
								? Object.assign
								: (a, c) => {
										for (var l, p = i(a), u, f = 1; f < arguments.length; f++) {
											l = Object(arguments[f]);
											for (var d in l) r.call(l, d) && (p[d] = l[d]);
											if (n) {
												u = n(l);
												for (var h = 0; h < u.length; h++)
													o.call(l, u[h]) && (p[u[h]] = l[u[h]]);
											}
										}
										return p;
									};
						},
					})),
					(Sr = de({
						"../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(e, t) {
							var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
							t.exports = n;
						},
					})),
					(Tr = de({
						"../../node_modules/prop-types/lib/has.js"(e, t) {
							t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
						},
					})),
					(li = de({
						"../../node_modules/prop-types/checkPropTypes.js"(e, t) {
							var n = () => {};
							(r = Sr()),
								(o = {}),
								(i = Tr()),
								(n = (a) => {
									var c = "Warning: " + a;
									typeof console < "u" && console.error(c);
									try {
										throw new Error(c);
									} catch {}
								});
							var r, o, i;
							function s(a, c, l, p, u) {
								for (var f in a)
									if (i(a, f)) {
										var d;
										try {
											if (typeof a[f] != "function") {
												var h = Error(
													(p || "React class") +
														": " +
														l +
														" type `" +
														f +
														"` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
														typeof a[f] +
														"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
												);
												throw ((h.name = "Invariant Violation"), h);
											}
											d = a[f](c, f, p, l, null, r);
										} catch (x) {
											d = x;
										}
										if (
											(d &&
												!(d instanceof Error) &&
												n(
													(p || "React class") +
														": type specification of " +
														l +
														" `" +
														f +
														"` is invalid; the type checker function must return `null` or an `Error` but returned a " +
														typeof d +
														". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
												),
											d instanceof Error && !(d.message in o))
										) {
											o[d.message] = !0;
											var b = u ? u() : "";
											n("Failed " + l + " type: " + d.message + (b ?? ""));
										}
									}
							}
							(s.resetWarningCache = () => {
								o = {};
							}),
								(t.exports = s);
						},
					})),
					(ci = de({
						"../../node_modules/prop-types/factoryWithTypeCheckers.js"(e, t) {
							var n = Or(),
								r = ai(),
								o = Sr(),
								i = Tr(),
								s = li(),
								a = () => {};
							a = (l) => {
								var p = "Warning: " + l;
								typeof console < "u" && console.error(p);
								try {
									throw new Error(p);
								} catch {}
							};
							function c() {
								return null;
							}
							t.exports = (l, p) => {
								var u = typeof Symbol == "function" && Symbol.iterator,
									f = "@@iterator";
								function d(v) {
									var P = v && ((u && v[u]) || v[f]);
									if (typeof P == "function") return P;
								}
								var h = "<<anonymous>>",
									b = {
										array: y("array"),
										bigint: y("bigint"),
										bool: y("boolean"),
										func: y("function"),
										number: y("number"),
										object: y("object"),
										string: y("string"),
										symbol: y("symbol"),
										any: O(),
										arrayOf: T,
										element: Q(),
										elementType: N(),
										instanceOf: ee,
										node: Pt(),
										objectOf: he,
										oneOf: X,
										oneOfType: _t,
										shape: xt,
										exact: At,
									};
								function x(v, P) {
									return v === P
										? v !== 0 || 1 / v === 1 / P
										: v !== v && P !== P;
								}
								function g(v, P) {
									(this.message = v),
										(this.data = P && typeof P == "object" ? P : {}),
										(this.stack = "");
								}
								g.prototype = Error.prototype;
								function w(v) {
									var P = {},
										B = 0;
									function j(W, L, F, H, K, G, S) {
										if (((H = H || h), (G = G || F), S !== o)) {
											if (p) {
												var te = new Error(
													"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types",
												);
												throw ((te.name = "Invariant Violation"), te);
											} else if (typeof console < "u") {
												var Oe = H + ":" + F;
												!P[Oe] &&
													B < 3 &&
													(a(
														"You are manually calling a React.PropTypes validation function for the `" +
															G +
															"` prop on `" +
															H +
															"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
													),
													(P[Oe] = !0),
													B++);
											}
										}
										return L[F] == null
											? W
												? L[F] === null
													? new g(
															"The " +
																K +
																" `" +
																G +
																"` is marked as required " +
																("in `" + H + "`, but its value is `null`."),
														)
													: new g(
															"The " +
																K +
																" `" +
																G +
																"` is marked as required in " +
																("`" + H + "`, but its value is `undefined`."),
														)
												: null
											: v(L, F, H, K, G);
									}
									var M = j.bind(null, !1);
									return (M.isRequired = j.bind(null, !0)), M;
								}
								function y(v) {
									function P(B, j, M, W, L, F) {
										var H = B[j],
											K = be(H);
										if (K !== v) {
											var G = Te(H);
											return new g(
												"Invalid " +
													W +
													" `" +
													L +
													"` of type " +
													("`" + G + "` supplied to `" + M + "`, expected ") +
													("`" + v + "`."),
												{ expectedType: v },
											);
										}
										return null;
									}
									return w(P);
								}
								function O() {
									return w(c);
								}
								function T(v) {
									function P(B, j, M, W, L) {
										if (typeof v != "function")
											return new g(
												"Property `" +
													L +
													"` of component `" +
													M +
													"` has invalid PropType notation inside arrayOf.",
											);
										var F = B[j];
										if (!Array.isArray(F)) {
											var H = be(F);
											return new g(
												"Invalid " +
													W +
													" `" +
													L +
													"` of type " +
													("`" +
														H +
														"` supplied to `" +
														M +
														"`, expected an array."),
											);
										}
										for (var K = 0; K < F.length; K++) {
											var G = v(F, K, M, W, L + "[" + K + "]", o);
											if (G instanceof Error) return G;
										}
										return null;
									}
									return w(P);
								}
								function Q() {
									function v(P, B, j, M, W) {
										var L = P[B];
										if (!l(L)) {
											var F = be(L);
											return new g(
												"Invalid " +
													M +
													" `" +
													W +
													"` of type " +
													("`" +
														F +
														"` supplied to `" +
														j +
														"`, expected a single ReactElement."),
											);
										}
										return null;
									}
									return w(v);
								}
								function N() {
									function v(P, B, j, M, W) {
										var L = P[B];
										if (!n.isValidElementType(L)) {
											var F = be(L);
											return new g(
												"Invalid " +
													M +
													" `" +
													W +
													"` of type " +
													("`" +
														F +
														"` supplied to `" +
														j +
														"`, expected a single ReactElement type."),
											);
										}
										return null;
									}
									return w(v);
								}
								function ee(v) {
									function P(B, j, M, W, L) {
										if (!(B[j] instanceof v)) {
											var F = v.name || h,
												H = pt(B[j]);
											return new g(
												"Invalid " +
													W +
													" `" +
													L +
													"` of type " +
													("`" + H + "` supplied to `" + M + "`, expected ") +
													("instance of `" + F + "`."),
											);
										}
										return null;
									}
									return w(P);
								}
								function X(v) {
									if (!Array.isArray(v))
										return (
											arguments.length > 1
												? a(
														"Invalid arguments supplied to oneOf, expected an array, got " +
															arguments.length +
															" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).",
													)
												: a(
														"Invalid argument supplied to oneOf, expected an array.",
													),
											c
										);
									function P(B, j, M, W, L) {
										for (var F = B[j], H = 0; H < v.length; H++)
											if (x(F, v[H])) return null;
										var K = JSON.stringify(v, (G, S) => {
											var te = Te(S);
											return te === "symbol" ? String(S) : S;
										});
										return new g(
											"Invalid " +
												W +
												" `" +
												L +
												"` of value `" +
												String(F) +
												"` " +
												("supplied to `" + M + "`, expected one of " + K + "."),
										);
									}
									return w(P);
								}
								function he(v) {
									function P(B, j, M, W, L) {
										if (typeof v != "function")
											return new g(
												"Property `" +
													L +
													"` of component `" +
													M +
													"` has invalid PropType notation inside objectOf.",
											);
										var F = B[j],
											H = be(F);
										if (H !== "object")
											return new g(
												"Invalid " +
													W +
													" `" +
													L +
													"` of type " +
													("`" +
														H +
														"` supplied to `" +
														M +
														"`, expected an object."),
											);
										for (var K in F)
											if (i(F, K)) {
												var G = v(F, K, M, W, L + "." + K, o);
												if (G instanceof Error) return G;
											}
										return null;
									}
									return w(P);
								}
								function _t(v) {
									if (!Array.isArray(v))
										return (
											a(
												"Invalid argument supplied to oneOfType, expected an instance of array.",
											),
											c
										);
									for (var P = 0; P < v.length; P++) {
										var B = v[P];
										if (typeof B != "function")
											return (
												a(
													"Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
														Nt(B) +
														" at index " +
														P +
														".",
												),
												c
											);
									}
									function j(M, W, L, F, H) {
										for (var K = [], G = 0; G < v.length; G++) {
											var S = v[G],
												te = S(M, W, L, F, H, o);
											if (te == null) return null;
											te.data &&
												i(te.data, "expectedType") &&
												K.push(te.data.expectedType);
										}
										var Oe =
											K.length > 0
												? ", expected one of type [" + K.join(", ") + "]"
												: "";
										return new g(
											"Invalid " +
												F +
												" `" +
												H +
												"` supplied to " +
												("`" + L + "`" + Oe + "."),
										);
									}
									return w(j);
								}
								function Pt() {
									function v(P, B, j, M, W) {
										return De(P[B])
											? null
											: new g(
													"Invalid " +
														M +
														" `" +
														W +
														"` supplied to " +
														("`" + j + "`, expected a ReactNode."),
												);
									}
									return w(v);
								}
								function ut(v, P, B, j, M) {
									return new g(
										(v || "React class") +
											": " +
											P +
											" type `" +
											B +
											"." +
											j +
											"` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
											M +
											"`.",
									);
								}
								function xt(v) {
									function P(B, j, M, W, L) {
										var F = B[j],
											H = be(F);
										if (H !== "object")
											return new g(
												"Invalid " +
													W +
													" `" +
													L +
													"` of type `" +
													H +
													"` " +
													("supplied to `" + M + "`, expected `object`."),
											);
										for (var K in v) {
											var G = v[K];
											if (typeof G != "function") return ut(M, W, L, K, Te(G));
											var S = G(F, K, M, W, L + "." + K, o);
											if (S) return S;
										}
										return null;
									}
									return w(P);
								}
								function At(v) {
									function P(B, j, M, W, L) {
										var F = B[j],
											H = be(F);
										if (H !== "object")
											return new g(
												"Invalid " +
													W +
													" `" +
													L +
													"` of type `" +
													H +
													"` " +
													("supplied to `" + M + "`, expected `object`."),
											);
										var K = r({}, B[j], v);
										for (var G in K) {
											var S = v[G];
											if (i(v, G) && typeof S != "function")
												return ut(M, W, L, G, Te(S));
											if (!S)
												return new g(
													"Invalid " +
														W +
														" `" +
														L +
														"` key `" +
														G +
														"` supplied to `" +
														M +
														"`.\nBad object: " +
														JSON.stringify(B[j], null, "  ") +
														`
Valid keys: ` +
														JSON.stringify(Object.keys(v), null, "  "),
												);
											var te = S(F, G, M, W, L + "." + G, o);
											if (te) return te;
										}
										return null;
									}
									return w(P);
								}
								function De(v) {
									switch (typeof v) {
										case "number":
										case "string":
										case "undefined":
											return !0;
										case "boolean":
											return !v;
										case "object":
											if (Array.isArray(v)) return v.every(De);
											if (v === null || l(v)) return !0;
											var P = d(v);
											if (P) {
												var B = P.call(v),
													j;
												if (P !== v.entries) {
													while (!(j = B.next()).done)
														if (!De(j.value)) return !1;
												} else
													while (!(j = B.next()).done) {
														var M = j.value;
														if (M && !De(M[1])) return !1;
													}
											} else return !1;
											return !0;
										default:
											return !1;
									}
								}
								function kt(v, P) {
									return v === "symbol"
										? !0
										: P
											? P["@@toStringTag"] === "Symbol" ||
												(typeof Symbol == "function" && P instanceof Symbol)
											: !1;
								}
								function be(v) {
									var P = typeof v;
									return Array.isArray(v)
										? "array"
										: v instanceof RegExp
											? "object"
											: kt(P, v)
												? "symbol"
												: P;
								}
								function Te(v) {
									if (typeof v > "u" || v === null) return "" + v;
									var P = be(v);
									if (P === "object") {
										if (v instanceof Date) return "date";
										if (v instanceof RegExp) return "regexp";
									}
									return P;
								}
								function Nt(v) {
									var P = Te(v);
									switch (P) {
										case "array":
										case "object":
											return "an " + P;
										case "boolean":
										case "date":
										case "regexp":
											return "a " + P;
										default:
											return P;
									}
								}
								function pt(v) {
									return !v.constructor || !v.constructor.name
										? h
										: v.constructor.name;
								}
								return (
									(b.checkPropTypes = s),
									(b.resetWarningCache = s.resetWarningCache),
									(b.PropTypes = b),
									b
								);
							};
						},
					})),
					(ui = de({
						"../../node_modules/prop-types/index.js"(e, t) {
							(n = Or()), (r = !0), (t.exports = ci()(n.isElement, r));
							var n, r;
						},
					})),
					(pi = de({
						"../../node_modules/react-innertext/index.js"(e, t) {
							var n = (i) => Object.prototype.hasOwnProperty.call(i, "props"),
								r = (i, s) => i + o(s),
								o = (i) =>
									i === null || typeof i == "boolean" || typeof i > "u"
										? ""
										: typeof i == "number"
											? i.toString()
											: typeof i == "string"
												? i
												: Array.isArray(i)
													? i.reduce(r, "")
													: n(i) &&
															Object.prototype.hasOwnProperty.call(
																i.props,
																"children",
															)
														? o(i.props.children)
														: "";
							(o.default = o), (t.exports = o);
						},
					})),
					(fi = Z.div(({ width: e, height: t, left: n, top: r }) => ({
						width: `${e}px`,
						height: `${t}px`,
						left: `${n}px`,
						top: `${r}px`,
						position: "relative",
						overflow: "hidden",
					})));
				Gn = "STORYBOOK_ADDON_ONBOARDING_CHANNEL";
				(yi = Ir("function")),
					(gi = (e) => e === null),
					(Yn = (e) =>
						Object.prototype.toString.call(e).slice(8, -1) === "RegExp"),
					(zn = (e) => !bi(e) && !gi(e) && (yi(e) || typeof e == "object")),
					(bi = Ir("undefined"));
				(Si = [
					"Array",
					"ArrayBuffer",
					"AsyncFunction",
					"AsyncGenerator",
					"AsyncGeneratorFunction",
					"Date",
					"Error",
					"Function",
					"Generator",
					"GeneratorFunction",
					"HTMLElement",
					"Map",
					"Object",
					"Promise",
					"RegExp",
					"Set",
					"WeakMap",
					"WeakSet",
				]),
					(Ti = [
						"bigint",
						"boolean",
						"null",
						"number",
						"string",
						"symbol",
						"undefined",
					]);
				Ri = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
				I.array = Array.isArray;
				I.arrayOf = (e, t) =>
					!I.array(e) && !I.function(t) ? !1 : e.every((n) => t(n));
				I.asyncGeneratorFunction = (e) => Tt(e) === "AsyncGeneratorFunction";
				I.asyncFunction = ye("AsyncFunction");
				I.bigint = Ge("bigint");
				I.boolean = (e) => e === !0 || e === !1;
				I.date = ye("Date");
				I.defined = (e) => !I.undefined(e);
				I.domElement = (e) =>
					I.object(e) &&
					!I.plainObject(e) &&
					e.nodeType === 1 &&
					I.string(e.nodeName) &&
					Ri.every((t) => t in e);
				I.empty = (e) =>
					(I.string(e) && e.length === 0) ||
					(I.array(e) && e.length === 0) ||
					(I.object(e) &&
						!I.map(e) &&
						!I.set(e) &&
						Object.keys(e).length === 0) ||
					(I.set(e) && e.size === 0) ||
					(I.map(e) && e.size === 0);
				I.error = ye("Error");
				I.function = Ge("function");
				I.generator = (e) =>
					I.iterable(e) && I.function(e.next) && I.function(e.throw);
				I.generatorFunction = ye("GeneratorFunction");
				I.instanceOf = (e, t) =>
					!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
				I.iterable = (e) =>
					!I.nullOrUndefined(e) && I.function(e[Symbol.iterator]);
				I.map = ye("Map");
				I.nan = (e) => Number.isNaN(e);
				I.null = (e) => e === null;
				I.nullOrUndefined = (e) => I.null(e) || I.undefined(e);
				I.number = (e) => Ge("number")(e) && !I.nan(e);
				I.numericString = (e) =>
					I.string(e) && e.length > 0 && !Number.isNaN(Number(e));
				I.object = (e) =>
					!I.nullOrUndefined(e) && (I.function(e) || typeof e == "object");
				I.oneOf = (e, t) => (I.array(e) ? e.indexOf(t) > -1 : !1);
				I.plainFunction = ye("Function");
				I.plainObject = (e) => {
					if (Tt(e) !== "Object") return !1;
					const t = Object.getPrototypeOf(e);
					return t === null || t === Object.getPrototypeOf({});
				};
				I.primitive = (e) => I.null(e) || Ci(typeof e);
				I.promise = ye("Promise");
				I.propertyOf = (e, t, n) => {
					if (!I.object(e) || !t) return !1;
					const r = e[t];
					return I.function(n) ? n(r) : I.defined(r);
				};
				I.regexp = ye("RegExp");
				I.set = ye("Set");
				I.string = Ge("string");
				I.symbol = Ge("symbol");
				I.undefined = Ge("undefined");
				I.weakMap = ye("WeakMap");
				I.weakSet = ye("WeakSet");
				R = I;
				(Ai = Me(oi(), 1)),
					(Rr = Me(ii(), 1)),
					(gt = Me(on(), 1)),
					(bt = Me(on(), 1)),
					(E = Me(ui())),
					(nt =
						typeof window < "u" &&
						typeof document < "u" &&
						typeof navigator < "u"),
					(ki = (() => {
						for (
							var e = ["Edge", "Trident", "Firefox"], t = 0;
							t < e.length;
							t += 1
						)
							if (nt && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
						return 0;
					})());
				(Li = nt && window.Promise), (Di = Li ? Ni : Mi);
				(Xn = nt && !!(window.MSInputMethodContext && document.documentMode)),
					(Jn = nt && /MSIE 10/.test(navigator.userAgent));
				(Bi = (e, t) => {
					if (!(e instanceof t))
						throw new TypeError("Cannot call a class as a function");
				}),
					(Ui = (() => {
						function e(t, n) {
							for (var r = 0; r < n.length; r++) {
								var o = n[r];
								(o.enumerable = o.enumerable || !1),
									(o.configurable = !0),
									"value" in o && (o.writable = !0),
									Object.defineProperty(t, o.key, o);
							}
						}
						return (t, n, r) => (n && e(t.prototype, n), r && e(t, r), t);
					})()),
					(He = (e, t, n) => (
						t in e
							? Object.defineProperty(e, t, {
									value: n,
									enumerable: !0,
									configurable: !0,
									writable: !0,
								})
							: (e[t] = n),
						e
					)),
					(fe =
						Object.assign ||
						((e) => {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var r in n)
									Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
							}
							return e;
						}));
				es = nt && /Firefox/i.test(navigator.userAgent);
				(Hr = [
					"auto-start",
					"auto",
					"auto-end",
					"top-start",
					"top",
					"top-end",
					"right-start",
					"right",
					"right-end",
					"bottom-end",
					"bottom",
					"bottom-start",
					"left-end",
					"left",
					"left-start",
				]),
					(Kt = Hr.slice(3));
				Qt = {
					FLIP: "flip",
					CLOCKWISE: "clockwise",
					COUNTERCLOCKWISE: "counterclockwise",
				};
				(ds = {
					shift: { order: 100, enabled: !0, fn: us },
					offset: { order: 200, enabled: !0, fn: ls, offset: 0 },
					preventOverflow: {
						order: 300,
						enabled: !0,
						fn: cs,
						priority: ["left", "right", "top", "bottom"],
						padding: 5,
						boundariesElement: "scrollParent",
					},
					keepTogether: { order: 400, enabled: !0, fn: is },
					arrow: { order: 500, enabled: !0, fn: ns, element: "[x-arrow]" },
					flip: {
						order: 600,
						enabled: !0,
						fn: os,
						behavior: "flip",
						padding: 5,
						boundariesElement: "viewport",
						flipVariations: !1,
						flipVariationsByContent: !1,
					},
					inner: { order: 700, enabled: !1, fn: fs },
					hide: { order: 800, enabled: !0, fn: ps },
					computeStyle: {
						order: 850,
						enabled: !0,
						fn: ts,
						gpuAcceleration: !0,
						x: "bottom",
						y: "right",
					},
					applyStyle: {
						order: 900,
						enabled: !0,
						fn: Xi,
						onLoad: Ji,
						gpuAcceleration: void 0,
					},
				}),
					(hs = {
						placement: "bottom",
						positionFixed: !1,
						eventsEnabled: !0,
						removeOnDestroy: !1,
						onCreate: () => {},
						onUpdate: () => {},
						modifiers: ds,
					}),
					(It = (() => {
						function e(t, n) {
							var o =
								arguments.length > 2 && arguments[2] !== void 0
									? arguments[2]
									: {};
							Bi(this, e),
								(this.scheduleUpdate = () =>
									requestAnimationFrame(this.update)),
								(this.update = Di(this.update.bind(this))),
								(this.options = fe({}, e.Defaults, o)),
								(this.state = {
									isDestroyed: !1,
									isCreated: !1,
									scrollParents: [],
								}),
								(this.reference = t && t.jquery ? t[0] : t),
								(this.popper = n && n.jquery ? n[0] : n),
								(this.options.modifiers = {}),
								Object.keys(fe({}, e.Defaults.modifiers, o.modifiers)).forEach(
									(s) => {
										this.options.modifiers[s] = fe(
											{},
											e.Defaults.modifiers[s] || {},
											o.modifiers ? o.modifiers[s] : {},
										);
									},
								),
								(this.modifiers = Object.keys(this.options.modifiers)
									.map((s) => fe({ name: s }, this.options.modifiers[s]))
									.sort((s, a) => s.order - a.order)),
								this.modifiers.forEach((s) => {
									s.enabled &&
										_r(s.onLoad) &&
										s.onLoad(
											this.reference,
											this.popper,
											this.options,
											s,
											this.state,
										);
								}),
								this.update();
							var i = this.options.eventsEnabled;
							i && this.enableEventListeners(), (this.state.eventsEnabled = i);
						}
						return (
							Ui(e, [
								{
									key: "update",
									value: function () {
										return Yi.call(this);
									},
								},
								{
									key: "destroy",
									value: function () {
										return zi.call(this);
									},
								},
								{
									key: "enableEventListeners",
									value: function () {
										return $i.call(this);
									},
								},
								{
									key: "disableEventListeners",
									value: function () {
										return Ki.call(this);
									},
								},
							]),
							e
						);
					})());
				It.Utils = window.PopperUtils;
				It.placements = Hr;
				It.Defaults = hs;
				(nr = It),
					(tn = Me(on())),
					(ms = [
						"innerHTML",
						"ownerDocument",
						"style",
						"attributes",
						"nodeValue",
					]),
					(ys = [
						"Array",
						"ArrayBuffer",
						"AsyncFunction",
						"AsyncGenerator",
						"AsyncGeneratorFunction",
						"Date",
						"Error",
						"Function",
						"Generator",
						"GeneratorFunction",
						"HTMLElement",
						"Map",
						"Object",
						"Promise",
						"RegExp",
						"Set",
						"WeakMap",
						"WeakSet",
					]),
					(gs = [
						"bigint",
						"boolean",
						"null",
						"number",
						"string",
						"symbol",
						"undefined",
					]);
				C.array = Array.isArray;
				C.arrayOf = (e, t) =>
					!C.array(e) && !C.function(t) ? !1 : e.every((n) => t(n));
				C.asyncGeneratorFunction = (e) => Ct(e) === "AsyncGeneratorFunction";
				C.asyncFunction = ge("AsyncFunction");
				C.bigint = ze("bigint");
				C.boolean = (e) => e === !0 || e === !1;
				C.date = ge("Date");
				C.defined = (e) => !C.undefined(e);
				C.domElement = (e) =>
					C.object(e) &&
					!C.plainObject(e) &&
					e.nodeType === 1 &&
					C.string(e.nodeName) &&
					ms.every((t) => t in e);
				C.empty = (e) =>
					(C.string(e) && e.length === 0) ||
					(C.array(e) && e.length === 0) ||
					(C.object(e) &&
						!C.map(e) &&
						!C.set(e) &&
						Object.keys(e).length === 0) ||
					(C.set(e) && e.size === 0) ||
					(C.map(e) && e.size === 0);
				C.error = ge("Error");
				C.function = ze("function");
				C.generator = (e) =>
					C.iterable(e) && C.function(e.next) && C.function(e.throw);
				C.generatorFunction = ge("GeneratorFunction");
				C.instanceOf = (e, t) =>
					!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
				C.iterable = (e) =>
					!C.nullOrUndefined(e) && C.function(e[Symbol.iterator]);
				C.map = ge("Map");
				C.nan = (e) => Number.isNaN(e);
				C.null = (e) => e === null;
				C.nullOrUndefined = (e) => C.null(e) || C.undefined(e);
				C.number = (e) => ze("number")(e) && !C.nan(e);
				C.numericString = (e) =>
					C.string(e) && e.length > 0 && !Number.isNaN(Number(e));
				C.object = (e) =>
					!C.nullOrUndefined(e) && (C.function(e) || typeof e == "object");
				C.oneOf = (e, t) => (C.array(e) ? e.indexOf(t) > -1 : !1);
				C.plainFunction = ge("Function");
				C.plainObject = (e) => {
					if (Ct(e) !== "Object") return !1;
					var t = Object.getPrototypeOf(e);
					return t === null || t === Object.getPrototypeOf({});
				};
				C.primitive = (e) => C.null(e) || vs(typeof e);
				C.promise = ge("Promise");
				C.propertyOf = (e, t, n) => {
					if (!C.object(e) || !t) return !1;
					var r = e[t];
					return C.function(n) ? n(r) : C.defined(r);
				};
				C.regexp = ge("RegExp");
				C.set = ge("Set");
				C.string = ze("string");
				C.symbol = ze("symbol");
				C.undefined = ze("undefined");
				C.weakMap = ge("WeakMap");
				C.weakSet = ge("WeakSet");
				A = C;
				(Es = Gr("function")),
					(ws = (e) => e === null),
					(rr = (e) =>
						Object.prototype.toString.call(e).slice(8, -1) === "RegExp"),
					(or = (e) => !Os(e) && !ws(e) && (Es(e) || typeof e == "object")),
					(Os = Gr("undefined")),
					(nn = (e) => {
						var t = typeof Symbol == "function" && Symbol.iterator,
							n = t && e[t],
							r = 0;
						if (n) return n.call(e);
						if (e && typeof e.length == "number")
							return {
								next: () => (
									e && r >= e.length && (e = void 0),
									{ value: e && e[r++], done: !e }
								),
							};
						throw new TypeError(
							t ? "Object is not iterable." : "Symbol.iterator is not defined.",
						);
					});
				(Ls = { flip: { padding: 20 }, preventOverflow: { padding: 10 } }),
					(Ds =
						"The typeValidator argument must be a function with the signature function(props, propName, componentName)."),
					(js =
						"The error message is optional, but must be a string if provided.");
				(U = {
					INIT: "init",
					IDLE: "idle",
					OPENING: "opening",
					OPEN: "open",
					CLOSING: "closing",
					ERROR: "error",
				}),
					(Je = ke.createPortal !== void 0);
				$r = ((e) => {
					at(n, e);
					var t = lt(n);
					function n() {
						return it(this, n), t.apply(this, arguments);
					}
					return (
						st(n, [
							{
								key: "componentDidMount",
								value: function () {
									ve() &&
										(this.node || this.appendNode(), Je || this.renderPortal());
								},
							},
							{
								key: "componentDidUpdate",
								value: function () {
									ve() && (Je || this.renderPortal());
								},
							},
							{
								key: "componentWillUnmount",
								value: function () {
									!ve() ||
										!this.node ||
										(Je || ke.unmountComponentAtNode(this.node),
										this.node &&
											this.node.parentNode === document.body &&
											(document.body.removeChild(this.node),
											(this.node = void 0)));
								},
							},
							{
								key: "appendNode",
								value: function () {
									var r = this.props,
										o = r.id,
										i = r.zIndex;
									this.node ||
										((this.node = document.createElement("div")),
										o && (this.node.id = o),
										i && (this.node.style.zIndex = i),
										document.body.appendChild(this.node));
								},
							},
							{
								key: "renderPortal",
								value: function () {
									if (!ve()) return null;
									var r = this.props,
										o = r.children,
										i = r.setRef;
									if ((this.node || this.appendNode(), Je))
										return ke.createPortal(o, this.node);
									var s = ke.unstable_renderSubtreeIntoContainer(
										this,
										o.length > 1 ? m.createElement("div", null, o) : o[0],
										this.node,
									);
									return i(s), null;
								},
							},
							{
								key: "renderReact16",
								value: function () {
									var r = this.props,
										o = r.hasChildren,
										i = r.placement,
										s = r.target;
									return o
										? this.renderPortal()
										: s || i === "center"
											? this.renderPortal()
											: null;
								},
							},
							{
								key: "render",
								value: function () {
									return Je ? this.renderReact16() : null;
								},
							},
						]),
						n
					);
				})(m.Component);
				ne($r, "propTypes", {
					children: E.default.oneOfType([E.default.element, E.default.array]),
					hasChildren: E.default.bool,
					id: E.default.oneOfType([E.default.string, E.default.number]),
					placement: E.default.string,
					setRef: E.default.func.isRequired,
					target: E.default.oneOfType([E.default.object, E.default.string]),
					zIndex: E.default.number,
				});
				Vr = ((e) => {
					at(n, e);
					var t = lt(n);
					function n() {
						return it(this, n), t.apply(this, arguments);
					}
					return (
						st(n, [
							{
								key: "parentStyle",
								get: function () {
									var r = this.props,
										o = r.placement,
										i = r.styles,
										s = i.arrow.length,
										a = {
											pointerEvents: "none",
											position: "absolute",
											width: "100%",
										};
									return (
										o.startsWith("top")
											? ((a.bottom = 0),
												(a.left = 0),
												(a.right = 0),
												(a.height = s))
											: o.startsWith("bottom")
												? ((a.left = 0),
													(a.right = 0),
													(a.top = 0),
													(a.height = s))
												: o.startsWith("left")
													? ((a.right = 0), (a.top = 0), (a.bottom = 0))
													: o.startsWith("right") &&
														((a.left = 0), (a.top = 0)),
										a
									);
								},
							},
							{
								key: "render",
								value: function () {
									var r = this.props,
										o = r.placement,
										i = r.setArrowRef,
										s = r.styles,
										a = s.arrow,
										c = a.color,
										l = a.display,
										p = a.length,
										u = a.margin,
										f = a.position,
										d = a.spread,
										h = { display: l, position: f },
										b,
										x = d,
										g = p;
									return (
										o.startsWith("top")
											? ((b = "0,0 "
													.concat(x / 2, ",")
													.concat(g, " ")
													.concat(x, ",0")),
												(h.bottom = 0),
												(h.marginLeft = u),
												(h.marginRight = u))
											: o.startsWith("bottom")
												? ((b = ""
														.concat(x, ",")
														.concat(g, " ")
														.concat(x / 2, ",0 0,")
														.concat(g)),
													(h.top = 0),
													(h.marginLeft = u),
													(h.marginRight = u))
												: o.startsWith("left")
													? ((g = d),
														(x = p),
														(b = "0,0 "
															.concat(x, ",")
															.concat(g / 2, " 0,")
															.concat(g)),
														(h.right = 0),
														(h.marginTop = u),
														(h.marginBottom = u))
													: o.startsWith("right") &&
														((g = d),
														(x = p),
														(b = ""
															.concat(x, ",")
															.concat(g, " ")
															.concat(x, ",0 0,")
															.concat(g / 2)),
														(h.left = 0),
														(h.marginTop = u),
														(h.marginBottom = u)),
										m.createElement(
											"div",
											{
												className: "__floater__arrow",
												style: this.parentStyle,
											},
											m.createElement(
												"span",
												{ ref: i, style: h },
												m.createElement(
													"svg",
													{
														width: x,
														height: g,
														version: "1.1",
														xmlns: "http://www.w3.org/2000/svg",
													},
													m.createElement("polygon", { points: b, fill: c }),
												),
											),
										)
									);
								},
							},
						]),
						n
					);
				})(m.Component);
				ne(Vr, "propTypes", {
					placement: E.default.string.isRequired,
					setArrowRef: E.default.func.isRequired,
					styles: E.default.object.isRequired,
				});
				zs = ["color", "height", "width"];
				Kr.propTypes = {
					handleClick: E.default.func.isRequired,
					styles: E.default.object.isRequired,
				};
				Qr.propTypes = {
					content: E.default.node.isRequired,
					footer: E.default.node,
					handleClick: E.default.func.isRequired,
					open: E.default.bool,
					positionWrapper: E.default.bool.isRequired,
					showCloseButton: E.default.bool.isRequired,
					styles: E.default.object.isRequired,
					title: E.default.node,
				};
				Xr = ((e) => {
					at(n, e);
					var t = lt(n);
					function n() {
						return it(this, n), t.apply(this, arguments);
					}
					return (
						st(n, [
							{
								key: "style",
								get: function () {
									var r = this.props,
										o = r.disableAnimation,
										i = r.component,
										s = r.placement,
										a = r.hideArrow,
										c = r.status,
										l = r.styles,
										p = l.arrow.length,
										u = l.floater,
										f = l.floaterCentered,
										d = l.floaterClosing,
										h = l.floaterOpening,
										b = l.floaterWithAnimation,
										x = l.floaterWithComponent,
										g = {};
									return (
										a ||
											(s.startsWith("top")
												? (g.padding = "0 0 ".concat(p, "px"))
												: s.startsWith("bottom")
													? (g.padding = "".concat(p, "px 0 0"))
													: s.startsWith("left")
														? (g.padding = "0 ".concat(p, "px 0 0"))
														: s.startsWith("right") &&
															(g.padding = "0 0 0 ".concat(p, "px"))),
										[U.OPENING, U.OPEN].indexOf(c) !== -1 &&
											(g = J(J({}, g), h)),
										c === U.CLOSING && (g = J(J({}, g), d)),
										c === U.OPEN && !o && (g = J(J({}, g), b)),
										s === "center" && (g = J(J({}, g), f)),
										i && (g = J(J({}, g), x)),
										J(J({}, u), g)
									);
								},
							},
							{
								key: "render",
								value: function () {
									var r = this.props,
										o = r.component,
										i = r.handleClick,
										s = r.hideArrow,
										a = r.setFloaterRef,
										c = r.status,
										l = {},
										p = ["__floater"];
									return (
										o
											? m.isValidElement(o)
												? (l.content = m.cloneElement(o, { closeFn: i }))
												: (l.content = o({ closeFn: i }))
											: (l.content = m.createElement(Qr, this.props)),
										c === U.OPEN && p.push("__floater__open"),
										s || (l.arrow = m.createElement(Vr, this.props)),
										m.createElement(
											"div",
											{ ref: a, className: p.join(" "), style: this.style },
											m.createElement(
												"div",
												{ className: "__floater__body" },
												l.content,
												l.arrow,
											),
										)
									);
								},
							},
						]),
						n
					);
				})(m.Component);
				ne(Xr, "propTypes", {
					component: E.default.oneOfType([E.default.func, E.default.element]),
					content: E.default.node,
					disableAnimation: E.default.bool.isRequired,
					footer: E.default.node,
					handleClick: E.default.func.isRequired,
					hideArrow: E.default.bool.isRequired,
					open: E.default.bool,
					placement: E.default.string.isRequired,
					positionWrapper: E.default.bool.isRequired,
					setArrowRef: E.default.func.isRequired,
					setFloaterRef: E.default.func.isRequired,
					showCloseButton: E.default.bool,
					status: E.default.string.isRequired,
					styles: E.default.object.isRequired,
					title: E.default.node,
				});
				Jr = ((e) => {
					at(n, e);
					var t = lt(n);
					function n() {
						return it(this, n), t.apply(this, arguments);
					}
					return (
						st(n, [
							{
								key: "render",
								value: function () {
									var r = this.props,
										o = r.children,
										i = r.handleClick,
										s = r.handleMouseEnter,
										a = r.handleMouseLeave,
										c = r.setChildRef,
										l = r.setWrapperRef,
										p = r.style,
										u = r.styles,
										f;
									if (o)
										if (m.Children.count(o) === 1)
											if (!m.isValidElement(o))
												f = m.createElement("span", null, o);
											else {
												var d = A.function(o.type) ? "innerRef" : "ref";
												f = m.cloneElement(m.Children.only(o), ne({}, d, c));
											}
										else f = o;
									return f
										? m.createElement(
												"span",
												{
													ref: l,
													style: J(J({}, u), p),
													onClick: i,
													onMouseEnter: s,
													onMouseLeave: a,
												},
												f,
											)
										: null;
								},
							},
						]),
						n
					);
				})(m.Component);
				ne(Jr, "propTypes", {
					children: E.default.node,
					handleClick: E.default.func.isRequired,
					handleMouseEnter: E.default.func.isRequired,
					handleMouseLeave: E.default.func.isRequired,
					setChildRef: E.default.func.isRequired,
					setWrapperRef: E.default.func.isRequired,
					style: E.default.object,
					styles: E.default.object.isRequired,
				});
				qs = { zIndex: 100 };
				(Vs = ["arrow", "flip", "offset"]),
					(Ks = ["position", "top", "right", "bottom", "left"]),
					(dn = ((e) => {
						at(n, e);
						var t = lt(n);
						function n(r) {
							var o;
							return (
								it(this, n),
								(o = t.call(this, r)),
								ne(Se(o), "setArrowRef", (i) => {
									o.arrowRef = i;
								}),
								ne(Se(o), "setChildRef", (i) => {
									o.childRef = i;
								}),
								ne(Se(o), "setFloaterRef", (i) => {
									o.floaterRef = i;
								}),
								ne(Se(o), "setWrapperRef", (i) => {
									o.wrapperRef = i;
								}),
								ne(Se(o), "handleTransitionEnd", () => {
									var i = o.state.status,
										s = o.props.callback;
									o.wrapperPopper && o.wrapperPopper.instance.update(),
										o.setState(
											{ status: i === U.OPENING ? U.OPEN : U.IDLE },
											() => {
												var a = o.state.status;
												s(a === U.OPEN ? "open" : "close", o.props);
											},
										);
								}),
								ne(Se(o), "handleClick", () => {
									var i = o.props,
										s = i.event,
										a = i.open;
									if (!A.boolean(a)) {
										var c = o.state,
											l = c.positionWrapper,
											p = c.status;
										(o.event === "click" || (o.event === "hover" && l)) &&
											(vt({
												title: "click",
												data: [
													{
														event: s,
														status: p === U.OPEN ? "closing" : "opening",
													},
												],
												debug: o.debug,
											}),
											o.toggle());
									}
								}),
								ne(Se(o), "handleMouseEnter", () => {
									var i = o.props,
										s = i.event,
										a = i.open;
									if (!(A.boolean(a) || Xt())) {
										var c = o.state.status;
										o.event === "hover" &&
											c === U.IDLE &&
											(vt({
												title: "mouseEnter",
												data: [{ key: "originalEvent", value: s }],
												debug: o.debug,
											}),
											clearTimeout(o.eventDelayTimeout),
											o.toggle());
									}
								}),
								ne(Se(o), "handleMouseLeave", () => {
									var i = o.props,
										s = i.event,
										a = i.eventDelay,
										c = i.open;
									if (!(A.boolean(c) || Xt())) {
										var l = o.state,
											p = l.status,
											u = l.positionWrapper;
										o.event === "hover" &&
											(vt({
												title: "mouseLeave",
												data: [{ key: "originalEvent", value: s }],
												debug: o.debug,
											}),
											a
												? [U.OPENING, U.OPEN].indexOf(p) !== -1 &&
													!u &&
													!o.eventDelayTimeout &&
													(o.eventDelayTimeout = setTimeout(() => {
														delete o.eventDelayTimeout, o.toggle();
													}, a * 1e3))
												: o.toggle(U.IDLE));
									}
								}),
								(o.state = {
									currentPlacement: r.placement,
									needsUpdate: !1,
									positionWrapper: r.wrapperOptions.position && !!r.target,
									status: U.INIT,
									statusWrapper: U.INIT,
								}),
								(o._isMounted = !1),
								(o.hasMounted = !1),
								ve() &&
									window.addEventListener("load", () => {
										o.popper && o.popper.instance.update(),
											o.wrapperPopper && o.wrapperPopper.instance.update();
									}),
								o
							);
						}
						return (
							st(n, [
								{
									key: "componentDidMount",
									value: function () {
										if (ve()) {
											var r = this.state.positionWrapper,
												o = this.props,
												i = o.children,
												s = o.open,
												a = o.target;
											(this._isMounted = !0),
												vt({
													title: "init",
													data: {
														hasChildren: !!i,
														hasTarget: !!a,
														isControlled: A.boolean(s),
														positionWrapper: r,
														target: this.target,
														floater: this.floaterRef,
													},
													debug: this.debug,
												}),
												this.hasMounted ||
													(this.initPopper(), (this.hasMounted = !0)),
												!i && a && A.boolean(s);
										}
									},
								},
								{
									key: "componentDidUpdate",
									value: function (r, o) {
										if (ve()) {
											var i = this.props,
												s = i.autoOpen,
												a = i.open,
												c = i.target,
												l = i.wrapperOptions,
												p = xs(o, this.state),
												u = p.changedFrom,
												f = p.changed;
											if (r.open !== a) {
												var d;
												A.boolean(a) && (d = a ? U.OPENING : U.CLOSING),
													this.toggle(d);
											}
											(r.wrapperOptions.position !== l.position ||
												r.target !== c) &&
												this.changeWrapperPosition(this.props),
												f("status", U.IDLE) && a
													? this.toggle(U.OPEN)
													: u("status", U.INIT, U.IDLE) &&
														s &&
														this.toggle(U.OPEN),
												this.popper &&
													f("status", U.OPENING) &&
													this.popper.instance.update(),
												this.floaterRef &&
													(f("status", U.OPENING) || f("status", U.CLOSING)) &&
													Ys(
														this.floaterRef,
														"transitionend",
														this.handleTransitionEnd,
													),
												f("needsUpdate", !0) && this.rebuildPopper();
										}
									},
								},
								{
									key: "componentWillUnmount",
									value: function () {
										ve() &&
											((this._isMounted = !1),
											this.popper && this.popper.instance.destroy(),
											this.wrapperPopper &&
												this.wrapperPopper.instance.destroy());
									},
								},
								{
									key: "initPopper",
									value: function () {
										var o =
												arguments.length > 0 && arguments[0] !== void 0
													? arguments[0]
													: this.target,
											i = this.state.positionWrapper,
											s = this.props,
											a = s.disableFlip,
											c = s.getPopper,
											l = s.hideArrow,
											p = s.offset,
											u = s.placement,
											f = s.wrapperOptions,
											d =
												u === "top" || u === "bottom"
													? "flip"
													: [
															"right",
															"bottom-end",
															"top-end",
															"left",
															"top-start",
															"bottom-start",
														];
										if (u === "center") this.setState({ status: U.IDLE });
										else if (o && this.floaterRef) {
											var h = this.options,
												b = h.arrow,
												x = h.flip,
												g = h.offset,
												w = zr(h, Vs);
											new nr(o, this.floaterRef, {
												placement: u,
												modifiers: J(
													{
														arrow: J(
															{ enabled: !l, element: this.arrowRef },
															b,
														),
														flip: J({ enabled: !a, behavior: d }, x),
														offset: J({ offset: "0, ".concat(p, "px") }, g),
													},
													w,
												),
												onCreate: (O) => {
													var T;
													if (
														((this.popper = O),
														!(
															(T = this.floaterRef) !== null &&
															T !== void 0 &&
															T.isConnected
														))
													) {
														this.setState({ needsUpdate: !0 });
														return;
													}
													c(O, "floater"),
														this._isMounted &&
															this.setState({
																currentPlacement: O.placement,
																status: U.IDLE,
															}),
														u !== O.placement &&
															setTimeout(() => {
																O.instance.update();
															}, 1);
												},
												onUpdate: (O) => {
													this.popper = O;
													var T = this.state.currentPlacement;
													this._isMounted &&
														O.placement !== T &&
														this.setState({ currentPlacement: O.placement });
												},
											});
										}
										if (i) {
											var y = A.undefined(f.offset) ? 0 : f.offset;
											new nr(this.target, this.wrapperRef, {
												placement: f.placement || u,
												modifiers: {
													arrow: { enabled: !1 },
													offset: { offset: "0, ".concat(y, "px") },
													flip: { enabled: !1 },
												},
												onCreate: (O) => {
													(this.wrapperPopper = O),
														this._isMounted &&
															this.setState({ statusWrapper: U.IDLE }),
														c(O, "wrapper"),
														u !== O.placement &&
															setTimeout(() => {
																O.instance.update();
															}, 1);
												},
											});
										}
									},
								},
								{
									key: "rebuildPopper",
									value: function () {
										this.floaterRefInterval = setInterval(() => {
											var o;
											(o = this.floaterRef) !== null &&
												o !== void 0 &&
												o.isConnected &&
												(clearInterval(this.floaterRefInterval),
												this.setState({ needsUpdate: !1 }),
												this.initPopper());
										}, 50);
									},
								},
								{
									key: "changeWrapperPosition",
									value: function (r) {
										var o = r.target,
											i = r.wrapperOptions;
										this.setState({ positionWrapper: i.position && !!o });
									},
								},
								{
									key: "toggle",
									value: function (r) {
										var o = this.state.status,
											i = o === U.OPEN ? U.CLOSING : U.OPENING;
										A.undefined(r) || (i = r), this.setState({ status: i });
									},
								},
								{
									key: "debug",
									get: function () {
										var r = this.props.debug;
										return (
											r ||
											(ve() &&
												"ReactFloaterDebug" in window &&
												!!window.ReactFloaterDebug)
										);
									},
								},
								{
									key: "event",
									get: function () {
										var r = this.props,
											o = r.disableHoverToClick,
											i = r.event;
										return i === "hover" && Xt() && !o ? "click" : i;
									},
								},
								{
									key: "options",
									get: function () {
										var r = this.props.options;
										return (0, tn.default)(Ls, r || {});
									},
								},
								{
									key: "styles",
									get: function () {
										var o = this.state,
											i = o.status,
											s = o.positionWrapper,
											a = o.statusWrapper,
											c = this.props.styles,
											l = (0, tn.default)($s(c), c);
										if (s) {
											var p;
											[U.IDLE].indexOf(i) === -1 || [U.IDLE].indexOf(a) === -1
												? (p = l.wrapperPosition)
												: (p = this.wrapperPopper.styles),
												(l.wrapper = J(J({}, l.wrapper), p));
										}
										if (this.target) {
											var u = window.getComputedStyle(this.target);
											this.wrapperStyles
												? (l.wrapper = J(J({}, l.wrapper), this.wrapperStyles))
												: ["relative", "static"].indexOf(u.position) === -1 &&
													((this.wrapperStyles = {}),
													s ||
														(Ks.forEach((f) => {
															this.wrapperStyles[f] = u[f];
														}),
														(l.wrapper = J(
															J({}, l.wrapper),
															this.wrapperStyles,
														)),
														(this.target.style.position = "relative"),
														(this.target.style.top = "auto"),
														(this.target.style.right = "auto"),
														(this.target.style.bottom = "auto"),
														(this.target.style.left = "auto")));
										}
										return l;
									},
								},
								{
									key: "target",
									get: function () {
										if (!ve()) return null;
										var r = this.props.target;
										return r
											? A.domElement(r)
												? r
												: document.querySelector(r)
											: this.childRef || this.wrapperRef;
									},
								},
								{
									key: "render",
									value: function () {
										var r = this.state,
											o = r.currentPlacement,
											i = r.positionWrapper,
											s = r.status,
											a = this.props,
											c = a.children,
											l = a.component,
											p = a.content,
											u = a.disableAnimation,
											f = a.footer,
											d = a.hideArrow,
											h = a.id,
											b = a.open,
											x = a.showCloseButton,
											g = a.style,
											w = a.target,
											y = a.title,
											O = m.createElement(
												Jr,
												{
													handleClick: this.handleClick,
													handleMouseEnter: this.handleMouseEnter,
													handleMouseLeave: this.handleMouseLeave,
													setChildRef: this.setChildRef,
													setWrapperRef: this.setWrapperRef,
													style: g,
													styles: this.styles.wrapper,
												},
												c,
											),
											T = {};
										return (
											i ? (T.wrapperInPortal = O) : (T.wrapperAsChildren = O),
											m.createElement(
												"span",
												null,
												m.createElement(
													$r,
													{
														hasChildren: !!c,
														id: h,
														placement: o,
														setRef: this.setFloaterRef,
														target: w,
														zIndex: this.styles.options.zIndex,
													},
													m.createElement(Xr, {
														component: l,
														content: p,
														disableAnimation: u,
														footer: f,
														handleClick: this.handleClick,
														hideArrow: d || o === "center",
														open: b,
														placement: o,
														positionWrapper: i,
														setArrowRef: this.setArrowRef,
														setFloaterRef: this.setFloaterRef,
														showCloseButton: x,
														status: s,
														styles: this.styles,
														title: y,
													}),
													T.wrapperInPortal,
												),
												T.wrapperAsChildren,
											)
										);
									},
								},
							]),
							n
						);
					})(m.Component));
				ne(dn, "propTypes", {
					autoOpen: E.default.bool,
					callback: E.default.func,
					children: E.default.node,
					component: fr(
						E.default.oneOfType([E.default.func, E.default.element]),
						(e) => !e.content,
					),
					content: fr(E.default.node, (e) => !e.component),
					debug: E.default.bool,
					disableAnimation: E.default.bool,
					disableFlip: E.default.bool,
					disableHoverToClick: E.default.bool,
					event: E.default.oneOf(["hover", "click"]),
					eventDelay: E.default.number,
					footer: E.default.node,
					getPopper: E.default.func,
					hideArrow: E.default.bool,
					id: E.default.oneOfType([E.default.string, E.default.number]),
					offset: E.default.number,
					open: E.default.bool,
					options: E.default.object,
					placement: E.default.oneOf([
						"top",
						"top-start",
						"top-end",
						"bottom",
						"bottom-start",
						"bottom-end",
						"left",
						"left-start",
						"left-end",
						"right",
						"right-start",
						"right-end",
						"auto",
						"center",
					]),
					showCloseButton: E.default.bool,
					style: E.default.object,
					styles: E.default.object,
					target: E.default.oneOfType([E.default.object, E.default.string]),
					title: E.default.node,
					wrapperOptions: E.default.shape({
						offset: E.default.number,
						placement: E.default.oneOf([
							"top",
							"top-start",
							"top-end",
							"bottom",
							"bottom-start",
							"bottom-end",
							"left",
							"left-start",
							"left-end",
							"right",
							"right-start",
							"right-end",
							"auto",
						]),
						position: E.default.bool,
					}),
				});
				ne(dn, "defaultProps", {
					autoOpen: !1,
					callback: dr,
					debug: !1,
					disableAnimation: !1,
					disableFlip: !1,
					disableHoverToClick: !1,
					event: "click",
					eventDelay: 0.4,
					getPopper: dr,
					hideArrow: !1,
					offset: 15,
					placement: "bottom",
					showCloseButton: !1,
					styles: {},
					target: null,
					wrapperOptions: { position: !1 },
				});
				(Qs = Me(pi(), 1)),
					(Xs = Object.defineProperty),
					(Js = (e, t, n) =>
						t in e
							? Xs(e, t, {
									enumerable: !0,
									configurable: !0,
									writable: !0,
									value: n,
								})
							: (e[t] = n)),
					(_ = (e, t, n) => (Js(e, typeof t != "symbol" ? t + "" : t, n), n)),
					(Y = {
						INIT: "init",
						START: "start",
						STOP: "stop",
						RESET: "reset",
						PREV: "prev",
						NEXT: "next",
						GO: "go",
						CLOSE: "close",
						SKIP: "skip",
						UPDATE: "update",
					}),
					(me = {
						TOUR_START: "tour:start",
						STEP_BEFORE: "step:before",
						BEACON: "beacon",
						TOOLTIP: "tooltip",
						STEP_AFTER: "step:after",
						TOUR_END: "tour:end",
						TOUR_STATUS: "tour:status",
						TARGET_NOT_FOUND: "error:target_not_found",
						ERROR: "error",
					}),
					(k = {
						INIT: "init",
						READY: "ready",
						BEACON: "beacon",
						TOOLTIP: "tooltip",
						COMPLETE: "complete",
						ERROR: "error",
					}),
					(D = {
						IDLE: "idle",
						READY: "ready",
						WAITING: "waiting",
						RUNNING: "running",
						PAUSED: "paused",
						SKIPPED: "skipped",
						FINISHED: "finished",
						ERROR: "error",
					});
				Ze = qe !== void 0;
				(pa = {
					options: { preventOverflow: { boundariesElement: "scrollParent" } },
					wrapperOptions: { offset: -18, position: !0 },
				}),
					(no = {
						back: "Back",
						close: "Close",
						last: "Last",
						next: "Next",
						open: "Open the dialog",
						skip: "Skip",
					}),
					(fa = {
						event: "click",
						placement: "bottom",
						offset: 10,
						disableBeacon: !1,
						disableCloseOnEsc: !1,
						disableOverlay: !1,
						disableOverlayClose: !1,
						disableScrollParentFix: !1,
						disableScrolling: !1,
						hideBackButton: !1,
						hideCloseButton: !1,
						hideFooter: !1,
						isFixed: !1,
						locale: no,
						showProgress: !1,
						showSkipButton: !1,
						spotlightClicks: !1,
						spotlightPadding: 10,
					}),
					(da = {
						continuous: !1,
						debug: !1,
						disableCloseOnEsc: !1,
						disableOverlay: !1,
						disableOverlayClose: !1,
						disableScrolling: !1,
						disableScrollParentFix: !1,
						getHelpers: void 0,
						hideBackButton: !1,
						run: !0,
						scrollOffset: 20,
						scrollDuration: 300,
						scrollToFirstStep: !1,
						showSkipButton: !1,
						showProgress: !1,
						spotlightClicks: !1,
						spotlightPadding: 10,
						steps: [],
					}),
					(ha = {
						arrowColor: "#fff",
						backgroundColor: "#fff",
						beaconSize: 36,
						overlayColor: "rgba(0, 0, 0, 0.5)",
						primaryColor: "#f04",
						spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
						textColor: "#333",
						width: 380,
						zIndex: 100,
					}),
					(et = {
						backgroundColor: "transparent",
						border: 0,
						borderRadius: 0,
						color: "#555",
						cursor: "pointer",
						fontSize: 16,
						lineHeight: 1,
						padding: 8,
						WebkitAppearance: "none",
					}),
					(yr = { borderRadius: 4, position: "absolute" });
				(oo = {
					action: "init",
					controlled: !1,
					index: 0,
					lifecycle: k.INIT,
					origin: null,
					size: 0,
					status: D.IDLE,
				}),
					(br = la(to(oo, "controlled", "size"))),
					(ga = class {
						constructor(e) {
							_(this, "beaconPopper"),
								_(this, "tooltipPopper"),
								_(this, "data", new Map()),
								_(this, "listener"),
								_(this, "store", new Map()),
								_(this, "addListener", (o) => {
									this.listener = o;
								}),
								_(this, "setSteps", (o) => {
									const { size: i, status: s } = this.getState(),
										a = { size: o.length, status: s };
									this.data.set("steps", o),
										s === D.WAITING && !i && o.length && (a.status = D.RUNNING),
										this.setState(a);
								}),
								_(this, "getPopper", (o) =>
									o === "beacon" ? this.beaconPopper : this.tooltipPopper,
								),
								_(this, "setPopper", (o, i) => {
									o === "beacon"
										? (this.beaconPopper = i)
										: (this.tooltipPopper = i);
								}),
								_(this, "cleanupPoppers", () => {
									(this.beaconPopper = null), (this.tooltipPopper = null);
								}),
								_(this, "close", (o = null) => {
									const { index: i, status: s } = this.getState();
									s === D.RUNNING &&
										this.setState({
											...this.getNextState({
												action: Y.CLOSE,
												index: i + 1,
												origin: o,
											}),
										});
								}),
								_(this, "go", (o) => {
									const { controlled: i, status: s } = this.getState();
									if (i || s !== D.RUNNING) return;
									const a = this.getSteps()[o];
									this.setState({
										...this.getNextState({ action: Y.GO, index: o }),
										status: a ? s : D.FINISHED,
									});
								}),
								_(this, "info", () => this.getState()),
								_(this, "next", () => {
									const { index: o, status: i } = this.getState();
									i === D.RUNNING &&
										this.setState(
											this.getNextState({ action: Y.NEXT, index: o + 1 }),
										);
								}),
								_(this, "open", () => {
									const { status: o } = this.getState();
									o === D.RUNNING &&
										this.setState({
											...this.getNextState({
												action: Y.UPDATE,
												lifecycle: k.TOOLTIP,
											}),
										});
								}),
								_(this, "prev", () => {
									const { index: o, status: i } = this.getState();
									i === D.RUNNING &&
										this.setState({
											...this.getNextState({ action: Y.PREV, index: o - 1 }),
										});
								}),
								_(this, "reset", (o = !1) => {
									const { controlled: i } = this.getState();
									i ||
										this.setState({
											...this.getNextState({ action: Y.RESET, index: 0 }),
											status: o ? D.RUNNING : D.READY,
										});
								}),
								_(this, "skip", () => {
									const { status: o } = this.getState();
									o === D.RUNNING &&
										this.setState({
											action: Y.SKIP,
											lifecycle: k.INIT,
											status: D.SKIPPED,
										});
								}),
								_(this, "start", (o) => {
									const { index: i, size: s } = this.getState();
									this.setState({
										...this.getNextState(
											{ action: Y.START, index: R.number(o) ? o : i },
											!0,
										),
										status: s ? D.RUNNING : D.WAITING,
									});
								}),
								_(this, "stop", (o = !1) => {
									const { index: i, status: s } = this.getState();
									[D.FINISHED, D.SKIPPED].includes(s) ||
										this.setState({
											...this.getNextState({
												action: Y.STOP,
												index: i + (o ? 1 : 0),
											}),
											status: D.PAUSED,
										});
								}),
								_(this, "update", (o) => {
									var i, s;
									if (!sa(o, br))
										throw new Error(
											`State is not valid. Valid keys: ${br.join(", ")}`,
										);
									this.setState({
										...this.getNextState(
											{
												...this.getState(),
												...o,
												action: (i = o.action) != null ? i : Y.UPDATE,
												origin: (s = o.origin) != null ? s : null,
											},
											!0,
										),
									});
								});
							const {
								continuous: t = !1,
								stepIndex: n,
								steps: r = [],
							} = e ?? {};
							this.setState(
								{
									action: Y.INIT,
									controlled: R.number(n),
									continuous: t,
									index: R.number(n) ? n : 0,
									lifecycle: k.INIT,
									origin: null,
									status: r.length ? D.READY : D.IDLE,
								},
								!0,
							),
								(this.beaconPopper = null),
								(this.tooltipPopper = null),
								(this.listener = null),
								this.setSteps(r);
						}
						getState() {
							return this.store.size
								? {
										action: this.store.get("action") || "",
										controlled: this.store.get("controlled") || !1,
										index: Number.parseInt(this.store.get("index"), 10),
										lifecycle: this.store.get("lifecycle") || "",
										origin: this.store.get("origin") || null,
										size: this.store.get("size") || 0,
										status: this.store.get("status") || "",
									}
								: { ...oo };
						}
						getNextState(e, t = !1) {
							var n, r, o, i, s;
							const {
									action: a,
									controlled: c,
									index: l,
									size: p,
									status: u,
								} = this.getState(),
								f = R.number(e.index) ? e.index : l,
								d = c && !t ? l : Math.min(Math.max(f, 0), p);
							return {
								action: (n = e.action) != null ? n : a,
								controlled: c,
								index: d,
								lifecycle: (r = e.lifecycle) != null ? r : k.INIT,
								origin: (o = e.origin) != null ? o : null,
								size: (i = e.size) != null ? i : p,
								status: d === p ? D.FINISHED : (s = e.status) != null ? s : u,
							};
						}
						getSteps() {
							const e = this.data.get("steps");
							return Array.isArray(e) ? e : [];
						}
						hasUpdatedState(e) {
							const t = JSON.stringify(e),
								n = JSON.stringify(this.getState());
							return t !== n;
						}
						setState(e, t = !1) {
							const n = this.getState(),
								{
									action: r,
									index: o,
									lifecycle: i,
									origin: s = null,
									size: a,
									status: c,
								} = { ...n, ...e };
							this.store.set("action", r),
								this.store.set("index", o),
								this.store.set("lifecycle", i),
								this.store.set("origin", s),
								this.store.set("size", a),
								this.store.set("status", c),
								t &&
									(this.store.set("controlled", e.controlled),
									this.store.set("continuous", e.continuous)),
								this.listener &&
									this.hasUpdatedState(n) &&
									this.listener(this.getState());
						}
						getHelpers() {
							return {
								close: this.close,
								go: this.go,
								info: this.info,
								next: this.next,
								open: this.open,
								prev: this.prev,
								reset: this.reset,
								skip: this.skip,
							};
						}
					});
				(Ea = va),
					(wa = class extends Ie {
						constructor() {
							super(...arguments),
								_(this, "isActive", !1),
								_(this, "resizeTimeout"),
								_(this, "scrollTimeout"),
								_(this, "scrollParent"),
								_(this, "state", {
									isScrolling: !1,
									mouseOverSpotlight: !1,
									showSpotlight: !0,
								}),
								_(this, "hideSpotlight", () => {
									const {
											continuous: e,
											disableOverlay: t,
											lifecycle: n,
										} = this.props,
										r = [k.BEACON, k.COMPLETE, k.ERROR];
									return t || (e ? r.includes(n) : n !== k.TOOLTIP);
								}),
								_(this, "handleMouseMove", (e) => {
									const { mouseOverSpotlight: t } = this.state,
										{
											height: n,
											left: r,
											position: o,
											top: i,
											width: s,
										} = this.spotlightStyles,
										a = o === "fixed" ? e.clientY : e.pageY,
										c = o === "fixed" ? e.clientX : e.pageX,
										l = a >= i && a <= i + n,
										p = c >= r && c <= r + s && l;
									p !== t && this.updateState({ mouseOverSpotlight: p });
								}),
								_(this, "handleScroll", () => {
									const { target: e } = this.props,
										t = Pe(e);
									if (this.scrollParent !== document) {
										const { isScrolling: n } = this.state;
										n ||
											this.updateState({ isScrolling: !0, showSpotlight: !1 }),
											clearTimeout(this.scrollTimeout),
											(this.scrollTimeout = window.setTimeout(() => {
												this.updateState({
													isScrolling: !1,
													showSpotlight: !0,
												});
											}, 50));
									} else tt(t, "sticky") && this.updateState({});
								}),
								_(this, "handleResize", () => {
									clearTimeout(this.resizeTimeout),
										(this.resizeTimeout = window.setTimeout(() => {
											this.isActive && this.forceUpdate();
										}, 100));
								});
						}
						componentDidMount() {
							const {
									debug: e,
									disableScrolling: t,
									disableScrollParentFix: n = !1,
									target: r,
								} = this.props,
								o = Pe(r);
							(this.scrollParent = Rt(o ?? document.body, n, !0)),
								(this.isActive = !0),
								!t &&
									ct(o, !0) &&
									Ae({
										title:
											"step has a custom scroll parent and can cause trouble with scrolling",
										data: [{ key: "parent", value: this.scrollParent }],
										debug: e,
									}),
								window.addEventListener("resize", this.handleResize);
						}
						componentDidUpdate(e) {
							var t;
							const { lifecycle: n, spotlightClicks: r } = this.props,
								{ changed: o } = Et(e, this.props);
							o("lifecycle", k.TOOLTIP) &&
								((t = this.scrollParent) == null ||
									t.addEventListener("scroll", this.handleScroll, {
										passive: !0,
									}),
								setTimeout(() => {
									const { isScrolling: i } = this.state;
									i || this.updateState({ showSpotlight: !0 });
								}, 100)),
								(o("spotlightClicks") ||
									o("disableOverlay") ||
									o("lifecycle")) &&
									(r && n === k.TOOLTIP
										? window.addEventListener(
												"mousemove",
												this.handleMouseMove,
												!1,
											)
										: n !== k.TOOLTIP &&
											window.removeEventListener(
												"mousemove",
												this.handleMouseMove,
											));
						}
						componentWillUnmount() {
							var e;
							(this.isActive = !1),
								window.removeEventListener("mousemove", this.handleMouseMove),
								window.removeEventListener("resize", this.handleResize),
								clearTimeout(this.resizeTimeout),
								clearTimeout(this.scrollTimeout),
								(e = this.scrollParent) == null ||
									e.removeEventListener("scroll", this.handleScroll);
						}
						get overlayStyles() {
							let { mouseOverSpotlight: e } = this.state,
								{
									disableOverlayClose: t,
									placement: n,
									styles: r,
								} = this.props,
								o = r.overlay;
							return (
								mr() &&
									(o =
										n === "center" ? r.overlayLegacyCenter : r.overlayLegacy),
								{
									cursor: t ? "default" : "pointer",
									height: Zs(),
									pointerEvents: e ? "none" : "auto",
									...o,
								}
							);
						}
						get spotlightStyles() {
							var e, t, n;
							const { showSpotlight: r } = this.state,
								{
									disableScrollParentFix: o = !1,
									spotlightClicks: i,
									spotlightPadding: s = 0,
									styles: a,
									target: c,
								} = this.props,
								l = Pe(c),
								p = Zr(l),
								u = tt(l),
								f = ra(l, s, o);
							return {
								...(mr() ? a.spotlightLegacy : a.spotlight),
								height: Math.round(((e = p?.height) != null ? e : 0) + s * 2),
								left: Math.round(((t = p?.left) != null ? t : 0) - s),
								opacity: r ? 1 : 0,
								pointerEvents: i ? "none" : "auto",
								position: u ? "fixed" : "absolute",
								top: f,
								transition: "opacity 0.2s",
								width: Math.round(((n = p?.width) != null ? n : 0) + s * 2),
							};
						}
						updateState(e) {
							this.isActive && this.setState((t) => ({ ...t, ...e }));
						}
						render() {
							const { showSpotlight: e } = this.state,
								{ onClickOverlay: t, placement: n } = this.props,
								{
									hideSpotlight: r,
									overlayStyles: o,
									spotlightStyles: i,
								} = this;
							if (r()) return null;
							let s = n !== "center" && e && V(Ea, { styles: i });
							if (eo() === "safari") {
								const { mixBlendMode: a, zIndex: c, ...l } = o;
								(s = V("div", { style: { ...l } }, s)),
									delete o.backgroundColor;
							}
							return V(
								"div",
								{
									className: "react-joyride__overlay",
									"data-test-id": "overlay",
									onClick: t,
									role: "presentation",
									style: o,
								},
								s,
							);
						}
					}),
					(Oa = class extends Ie {
						constructor() {
							super(...arguments), _(this, "node", null);
						}
						componentDidMount() {
							const { id: e } = this.props;
							Re() &&
								((this.node = document.createElement("div")),
								(this.node.id = e),
								document.body.appendChild(this.node),
								Ze || this.renderReact15());
						}
						componentDidUpdate() {
							Re() && (Ze || this.renderReact15());
						}
						componentWillUnmount() {
							!Re() ||
								!this.node ||
								(Ze || bn(this.node),
								this.node.parentNode === document.body &&
									(document.body.removeChild(this.node), (this.node = null)));
						}
						renderReact15() {
							if (!Re()) return;
							const { children: e } = this.props;
							this.node && vn(this, e, this.node);
						}
						renderReact16() {
							if (!Re() || !Ze) return null;
							const { children: e } = this.props;
							return this.node ? qe(e, this.node) : null;
						}
						render() {
							return Ze ? this.renderReact16() : null;
						}
					}),
					(Sa = class {
						constructor(e, t) {
							if (
								(_(this, "element"),
								_(this, "options"),
								_(this, "canBeTabbed", (n) => {
									const { tabIndex: r } = n;
									return r === null || r < 0 ? !1 : this.canHaveFocus(n);
								}),
								_(this, "canHaveFocus", (n) => {
									const r = /input|select|textarea|button|object/,
										o = n.nodeName.toLowerCase();
									return (
										((r.test(o) && !n.getAttribute("disabled")) ||
											(o === "a" && !!n.getAttribute("href"))) &&
										this.isVisible(n)
									);
								}),
								_(this, "findValidTabElements", () =>
									[].slice
										.call(this.element.querySelectorAll("*"), 0)
										.filter(this.canBeTabbed),
								),
								_(this, "handleKeyDown", (n) => {
									const { code: r = "Tab" } = this.options;
									n.code === r && this.interceptTab(n);
								}),
								_(this, "interceptTab", (n) => {
									n.preventDefault();
									const r = this.findValidTabElements(),
										{ shiftKey: o } = n;
									if (!r.length) return;
									let i = document.activeElement
										? r.indexOf(document.activeElement)
										: 0;
									i === -1 || (!o && i + 1 === r.length)
										? (i = 0)
										: o && i === 0
											? (i = r.length - 1)
											: (i += o ? -1 : 1),
										r[i].focus();
								}),
								_(this, "isHidden", (n) => {
									const r = n.offsetWidth <= 0 && n.offsetHeight <= 0,
										o = window.getComputedStyle(n);
									return r && !n.innerHTML
										? !0
										: (r && o.getPropertyValue("overflow") !== "visible") ||
												o.getPropertyValue("display") === "none";
								}),
								_(this, "isVisible", (n) => {
									let r = n;
									while (r)
										if (r instanceof HTMLElement) {
											if (r === document.body) break;
											if (this.isHidden(r)) return !1;
											r = r.parentNode;
										}
									return !0;
								}),
								_(this, "removeScope", () => {
									window.removeEventListener("keydown", this.handleKeyDown);
								}),
								_(this, "checkFocus", (n) => {
									document.activeElement !== n &&
										(n.focus(),
										window.requestAnimationFrame(() => this.checkFocus(n)));
								}),
								_(this, "setFocus", () => {
									const { selector: n } = this.options;
									if (!n) return;
									const r = this.element.querySelector(n);
									r && window.requestAnimationFrame(() => this.checkFocus(r));
								}),
								!(e instanceof HTMLElement))
							)
								throw new TypeError(
									"Invalid parameter: element must be an HTMLElement",
								);
							(this.element = e),
								(this.options = t),
								window.addEventListener("keydown", this.handleKeyDown, !1),
								this.setFocus();
						}
					}),
					(Ta = class extends Ie {
						constructor(e) {
							if (
								(super(e),
								_(this, "beacon", null),
								_(this, "setBeaconRef", (r) => {
									this.beacon = r;
								}),
								e.beaconComponent)
							)
								return;
							const t =
									document.head || document.getElementsByTagName("head")[0],
								n = document.createElement("style");
							(n.id = "joyride-beacon-animation"),
								e.nonce && n.setAttribute("nonce", e.nonce),
								n.appendChild(
									document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `),
								),
								t.appendChild(n);
						}
						componentDidMount() {
							const { shouldFocus: e } = this.props;
							R.domElement(this.beacon) ||
								console.warn("beacon is not a valid DOM element"),
								setTimeout(() => {
									R.domElement(this.beacon) && e && this.beacon.focus();
								}, 0);
						}
						componentWillUnmount() {
							const e = document.getElementById("joyride-beacon-animation");
							e?.parentNode && e.parentNode.removeChild(e);
						}
						render() {
							let {
									beaconComponent: e,
									continuous: t,
									index: n,
									isLastStep: r,
									locale: o,
									onClickOrHover: i,
									size: s,
									step: a,
									styles: c,
								} = this.props,
								l = R.string(o.open) ? o.open : (0, Qs.default)(o.open),
								p = {
									"aria-label": l,
									onClick: i,
									onMouseEnter: i,
									ref: this.setBeaconRef,
									title: l,
								},
								u;
							return (
								e
									? (u = V(e, {
											continuous: t,
											index: n,
											isLastStep: r,
											size: s,
											step: a,
											...p,
										}))
									: (u = V(
											"button",
											{
												key: "JoyrideBeacon",
												className: "react-joyride__beacon",
												"data-test-id": "button-beacon",
												style: c.beacon,
												type: "button",
												...p,
											},
											V("span", { style: c.beaconInner }),
											V("span", { style: c.beaconOuter }),
										)),
								u
							);
						}
					});
				Ca = Ia;
				(_a = Ra),
					(Pa = class extends Ie {
						constructor() {
							super(...arguments),
								_(this, "handleClickBack", (e) => {
									e.preventDefault();
									const { helpers: t } = this.props;
									t.prev();
								}),
								_(this, "handleClickClose", (e) => {
									e.preventDefault();
									const { helpers: t } = this.props;
									t.close("button_close");
								}),
								_(this, "handleClickPrimary", (e) => {
									e.preventDefault();
									const { continuous: t, helpers: n } = this.props;
									if (!t) {
										n.close("button_primary");
										return;
									}
									n.next();
								}),
								_(this, "handleClickSkip", (e) => {
									e.preventDefault();
									const { helpers: t } = this.props;
									t.skip();
								}),
								_(this, "getElementsProps", () => {
									let {
											continuous: e,
											isLastStep: t,
											setTooltipRef: n,
											step: r,
										} = this.props,
										o = _e(r.locale.back),
										i = _e(r.locale.close),
										s = _e(r.locale.last),
										a = _e(r.locale.next),
										c = _e(r.locale.skip),
										l = e ? a : i;
									return (
										t && (l = s),
										{
											backProps: {
												"aria-label": o,
												"data-action": "back",
												onClick: this.handleClickBack,
												role: "button",
												title: o,
											},
											closeProps: {
												"aria-label": i,
												"data-action": "close",
												onClick: this.handleClickClose,
												role: "button",
												title: i,
											},
											primaryProps: {
												"aria-label": l,
												"data-action": "primary",
												onClick: this.handleClickPrimary,
												role: "button",
												title: l,
											},
											skipProps: {
												"aria-label": c,
												"data-action": "skip",
												onClick: this.handleClickSkip,
												role: "button",
												title: c,
											},
											tooltipProps: {
												"aria-modal": !0,
												ref: n,
												role: "alertdialog",
											},
										}
									);
								});
						}
						render() {
							let {
									continuous: e,
									index: t,
									isLastStep: n,
									setTooltipRef: r,
									size: o,
									step: i,
								} = this.props,
								{ beaconComponent: s, tooltipComponent: a, ...c } = i,
								l;
							if (a) {
								const p = {
									...this.getElementsProps(),
									continuous: e,
									index: t,
									isLastStep: n,
									size: o,
									step: c,
									setTooltipRef: r,
								};
								l = V(a, { ...p });
							} else
								l = V(_a, {
									...this.getElementsProps(),
									continuous: e,
									index: t,
									isLastStep: n,
									size: o,
									step: i,
								});
							return l;
						}
					}),
					(xa = class extends Ie {
						constructor() {
							super(...arguments),
								_(this, "scope", null),
								_(this, "tooltip", null),
								_(this, "handleClickHoverBeacon", (e) => {
									const { step: t, store: n } = this.props;
									(e.type === "mouseenter" && t.event !== "hover") ||
										n.update({ lifecycle: k.TOOLTIP });
								}),
								_(this, "setTooltipRef", (e) => {
									this.tooltip = e;
								}),
								_(this, "setPopper", (e, t) => {
									var n;
									const {
										action: r,
										lifecycle: o,
										step: i,
										store: s,
									} = this.props;
									t === "wrapper"
										? s.setPopper("beacon", e)
										: s.setPopper("tooltip", e),
										s.getPopper("beacon") &&
											s.getPopper("tooltip") &&
											o === k.INIT &&
											s.update({ action: r, lifecycle: k.READY }),
										(n = i.floaterProps) != null &&
											n.getPopper &&
											i.floaterProps.getPopper(e, t);
								}),
								_(this, "renderTooltip", (e) => {
									const {
										continuous: t,
										helpers: n,
										index: r,
										size: o,
										step: i,
									} = this.props;
									return V(Pa, {
										continuous: t,
										helpers: n,
										index: r,
										isLastStep: r + 1 === o,
										setTooltipRef: this.setTooltipRef,
										size: o,
										step: i,
										...e,
									});
								});
						}
						componentDidMount() {
							const { debug: e, index: t } = this.props;
							Ae({
								title: `step:${t}`,
								data: [{ key: "props", value: this.props }],
								debug: e,
							});
						}
						componentDidUpdate(e) {
							var t;
							const {
									action: n,
									callback: r,
									continuous: o,
									controlled: i,
									debug: s,
									helpers: a,
									index: c,
									lifecycle: l,
									status: p,
									step: u,
									store: f,
								} = this.props,
								{ changed: d, changedFrom: h } = Et(e, this.props),
								b = a.info(),
								x = o && n !== Y.CLOSE && (c > 0 || n === Y.PREV),
								g = d("action") || d("index") || d("lifecycle") || d("status"),
								w = h("lifecycle", [k.TOOLTIP, k.INIT], k.INIT),
								y = d("action", [Y.NEXT, Y.PREV, Y.SKIP, Y.CLOSE]),
								O = i && c === e.index;
							if (
								(y &&
									(w || O) &&
									r({
										...b,
										index: e.index,
										lifecycle: k.COMPLETE,
										step: e.step,
										type: me.STEP_AFTER,
									}),
								u.placement === "center" &&
									p === D.RUNNING &&
									d("index") &&
									n !== Y.START &&
									l === k.INIT &&
									f.update({ lifecycle: k.READY }),
								g)
							) {
								const T = Pe(u.target),
									Q = !!T;
								Q && na(T)
									? (h("status", D.READY, D.RUNNING) ||
											h("lifecycle", k.INIT, k.READY)) &&
										r({ ...b, step: u, type: me.STEP_BEFORE })
									: (console.warn(
											Q ? "Target not visible" : "Target not mounted",
											u,
										),
										r({ ...b, type: me.TARGET_NOT_FOUND, step: u }),
										i || f.update({ index: c + (n === Y.PREV ? -1 : 1) }));
							}
							h("lifecycle", k.INIT, k.READY) &&
								f.update({ lifecycle: hr(u) || x ? k.TOOLTIP : k.BEACON }),
								d("index") &&
									Ae({
										title: `step:${l}`,
										data: [{ key: "props", value: this.props }],
										debug: s,
									}),
								d("lifecycle", k.BEACON) &&
									r({ ...b, step: u, type: me.BEACON }),
								d("lifecycle", k.TOOLTIP) &&
									(r({ ...b, step: u, type: me.TOOLTIP }),
									this.tooltip &&
										((this.scope = new Sa(this.tooltip, {
											selector: "[data-action=primary]",
										})),
										this.scope.setFocus())),
								h("lifecycle", [k.TOOLTIP, k.INIT], k.INIT) &&
									((t = this.scope) == null || t.removeScope(),
									f.cleanupPoppers());
						}
						componentWillUnmount() {
							var e;
							(e = this.scope) == null || e.removeScope();
						}
						get open() {
							const { lifecycle: e, step: t } = this.props;
							return hr(t) || e === k.TOOLTIP;
						}
						render() {
							const {
									continuous: e,
									debug: t,
									index: n,
									nonce: r,
									shouldScroll: o,
									size: i,
									step: s,
								} = this.props,
								a = Pe(s.target);
							return !ro(s) || !R.domElement(a)
								? null
								: V(
										"div",
										{
											key: `JoyrideStep-${n}`,
											className: "react-joyride__step",
										},
										V(
											dn,
											{
												...s.floaterProps,
												component: this.renderTooltip,
												debug: t,
												getPopper: this.setPopper,
												id: `react-joyride-step-${n}`,
												open: this.open,
												placement: s.placement,
												target: s.target,
											},
											V(Ta, {
												beaconComponent: s.beaconComponent,
												continuous: e,
												index: n,
												isLastStep: n + 1 === i,
												locale: s.locale,
												nonce: r,
												onClickOrHover: this.handleClickHoverBeacon,
												shouldFocus: o,
												size: i,
												step: s,
												styles: s.styles,
											}),
										),
									);
						}
					}),
					(io = class extends Ie {
						constructor(e) {
							super(e),
								_(this, "helpers"),
								_(this, "store"),
								_(this, "callback", (s) => {
									const { callback: a } = this.props;
									R.function(a) && a(s);
								}),
								_(this, "handleKeyboard", (s) => {
									const { index: a, lifecycle: c } = this.state,
										{ steps: l } = this.props,
										p = l[a];
									c === k.TOOLTIP &&
										s.code === "Escape" &&
										p &&
										!p.disableCloseOnEsc &&
										this.store.close("keyboard");
								}),
								_(this, "handleClickOverlay", () => {
									const { index: s } = this.state,
										{ steps: a } = this.props;
									Be(this.props, a[s]).disableOverlayClose ||
										this.helpers.close("overlay");
								}),
								_(this, "syncState", (s) => {
									this.setState(s);
								});
							const { debug: t, getHelpers: n, run: r, stepIndex: o } = e;
							(this.store = ba({ ...e, controlled: r && R.number(o) })),
								(this.helpers = this.store.getHelpers());
							const { addListener: i } = this.store;
							Ae({
								title: "init",
								data: [
									{ key: "props", value: this.props },
									{ key: "state", value: this.state },
								],
								debug: t,
							}),
								i(this.syncState),
								n && n(this.helpers),
								(this.state = this.store.getState());
						}
						componentDidMount() {
							if (!Re()) return;
							const {
									debug: e,
									disableCloseOnEsc: t,
									run: n,
									steps: r,
								} = this.props,
								{ start: o } = this.store;
							gr(r, e) && n && o(),
								t ||
									document.body.addEventListener(
										"keydown",
										this.handleKeyboard,
										{ passive: !0 },
									);
						}
						componentDidUpdate(e, t) {
							if (!Re()) return;
							const {
									action: n,
									controlled: r,
									index: o,
									lifecycle: i,
									status: s,
								} = this.state,
								{ debug: a, run: c, stepIndex: l, steps: p } = this.props,
								{ stepIndex: u, steps: f } = e,
								{
									reset: d,
									setSteps: h,
									start: b,
									stop: x,
									update: g,
								} = this.store,
								{ changed: w } = Et(e, this.props),
								{ changed: y, changedFrom: O } = Et(t, this.state),
								T = Be(this.props, p[o]),
								Q = !re(f, p),
								N = R.number(l) && w("stepIndex"),
								ee = Pe(T.target);
							if (
								(Q &&
									(gr(p, a) ? h(p) : console.warn("Steps are not valid", p)),
								w("run") && (c ? b(l) : x()),
								N)
							) {
								let he = R.number(u) && u < l ? Y.NEXT : Y.PREV;
								n === Y.STOP && (he = Y.START),
									[D.FINISHED, D.SKIPPED].includes(s) ||
										g({
											action: n === Y.CLOSE ? Y.CLOSE : he,
											index: l,
											lifecycle: k.INIT,
										});
							}
							!r &&
								s === D.RUNNING &&
								o === 0 &&
								!ee &&
								(this.store.update({ index: o + 1 }),
								this.callback({
									...this.state,
									type: me.TARGET_NOT_FOUND,
									step: T,
								}));
							const X = { ...this.state, index: o, step: T };
							if (
								y("action", [Y.NEXT, Y.PREV, Y.SKIP, Y.CLOSE]) &&
								y("status", D.PAUSED)
							) {
								const he = Be(this.props, p[t.index]);
								this.callback({
									...X,
									index: t.index,
									lifecycle: k.COMPLETE,
									step: he,
									type: me.STEP_AFTER,
								});
							}
							if (y("status", [D.FINISHED, D.SKIPPED])) {
								const he = Be(this.props, p[t.index]);
								r ||
									this.callback({
										...X,
										index: t.index,
										lifecycle: k.COMPLETE,
										step: he,
										type: me.STEP_AFTER,
									}),
									this.callback({
										...X,
										type: me.TOUR_END,
										step: he,
										index: t.index,
									}),
									d();
							} else
								O("status", [D.IDLE, D.READY], D.RUNNING)
									? this.callback({ ...X, type: me.TOUR_START })
									: (y("status") || y("action", Y.RESET)) &&
										this.callback({ ...X, type: me.TOUR_STATUS });
							this.scrollToStep(t),
								T.placement === "center" &&
									s === D.RUNNING &&
									i === k.INIT &&
									this.store.update({ lifecycle: k.READY });
						}
						componentWillUnmount() {
							const { disableCloseOnEsc: e } = this.props;
							e ||
								document.body.removeEventListener(
									"keydown",
									this.handleKeyboard,
								);
						}
						scrollToStep(e) {
							const { index: t, lifecycle: n, status: r } = this.state,
								{
									debug: o,
									disableScrollParentFix: i = !1,
									scrollDuration: s,
									scrollOffset: a = 20,
									scrollToFirstStep: c = !1,
									steps: l,
								} = this.props,
								p = Be(this.props, l[t]),
								u = Pe(p.target),
								f = ua({
									isFirstStep: t === 0,
									lifecycle: n,
									previousLifecycle: e.lifecycle,
									scrollToFirstStep: c,
									step: p,
									target: u,
								});
							if (r === D.RUNNING && f) {
								let d = ct(u, i),
									h = Rt(u, i),
									b = Math.floor(oa(u, a, i)) || 0;
								Ae({
									title: "scrollToStep",
									data: [
										{ key: "index", value: t },
										{ key: "lifecycle", value: n },
										{ key: "status", value: r },
									],
									debug: o,
								});
								const x = this.store.getPopper("beacon"),
									g = this.store.getPopper("tooltip");
								if (n === k.BEACON && x) {
									const { offsets: w, placement: y } = x;
									!["bottom"].includes(y) &&
										!d &&
										(b = Math.floor(w.popper.top - a));
								} else if (n === k.TOOLTIP && g) {
									const { flipped: w, offsets: y, placement: O } = g;
									["top", "right", "left"].includes(O) && !w && !d
										? (b = Math.floor(y.popper.top - a))
										: (b -= p.spotlightPadding);
								}
								(b = b >= 0 ? b : 0),
									r === D.RUNNING &&
										ia(b, { element: h, duration: s }).then(() => {
											setTimeout(() => {
												var w;
												(w = this.store.getPopper("tooltip")) == null ||
													w.instance.update();
											}, 10);
										});
							}
						}
						render() {
							if (!Re()) return null;
							const { index: e, lifecycle: t, status: n } = this.state,
								{
									continuous: r = !1,
									debug: o = !1,
									nonce: i,
									scrollToFirstStep: s = !1,
									steps: a,
								} = this.props,
								c = n === D.RUNNING,
								l = {};
							if (c && a[e]) {
								const p = Be(this.props, a[e]);
								(l.step = V(xa, {
									...this.state,
									callback: this.callback,
									continuous: r,
									debug: o,
									helpers: this.helpers,
									nonce: i,
									shouldScroll: !p.disableScrolling && (e !== 0 || s),
									step: p,
									store: this.store,
								})),
									(l.overlay = V(
										Oa,
										{ id: "react-joyride-portal" },
										V(wa, {
											...p,
											continuous: r,
											debug: o,
											lifecycle: t,
											onClickOverlay: this.handleClickOverlay,
										}),
									));
							}
							return V(
								"div",
								{ className: "react-joyride" },
								l.step,
								l.overlay,
							);
						}
					});
				_(io, "defaultProps", da);
				(Aa = io),
					(ka = Z.button`
  all: unset;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${({ theme: e, variant: t }) => (t === "primary" ? e.color.secondary : t === "secondary" ? e.color.lighter : t === "outline" ? "transparent" : t === "white" ? e.color.lightest : e.color.secondary)};
  color: ${({ theme: e, variant: t }) => (t === "primary" ? e.color.lightest : t === "secondary" || t === "outline" ? e.darkest : t === "white" ? e.color.secondary : e.color.lightest)};
  box-shadow: ${({ variant: e }) => (e === "secondary" || e === "outline" ? "#D9E8F2 0 0 0 1px inset" : "none")};
  height: 32px;
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: ${({ theme: e }) => e.typography.fonts.base};
  transition: background-color, box-shadow, color, opacity;
  transition-duration: 0.16s;
  transition-timing-function: ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme: e, variant: t }) => (t === "primary" ? "#0b94eb" : t === "secondary" ? "#eef4f9" : t === "outline" ? "transparent" : t === "white" ? e.color.lightest : "#0b94eb")};
    color: ${({ theme: e, variant: t }) => (t === "primary" ? e.color.lightest : t === "secondary" || t === "outline" ? e.darkest : t === "white" ? e.color.darkest : e.color.lightest)};
  }

  &:focus {
    box-shadow: ${({ variant: e }) => (e === "primary" ? "inset 0 0 0 1px rgba(0, 0, 0, 0.2)" : e === "secondary" || e === "outline" ? "inset 0 0 0 1px #0b94eb" : e === "white" ? "none" : "inset 0 0 0 2px rgba(0, 0, 0, 0.1)")};
  }
`),
					(Na = Dt(
						({ children: e, onClick: t, variant: n = "primary", ...r }, o) =>
							m.createElement(ka, { ref: o, onClick: t, variant: n, ...r }, e),
					)),
					(Ma = Z.div`
  padding: 15px;
  border-radius: 5px;
`),
					(La = Z.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),
					(Da = Z.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin: -5px -5px 5px 0;
`),
					(ja = Z.div`
  line-height: 18px;
  font-weight: 700;
  font-size: 14px;
  margin: 5px 5px 5px 0;
`),
					(Fa = Z.p`
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  text-wrap: balance;
  margin: 0;
  margin-top: 5px;
`),
					(Ba = Z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`),
					(Ua = Z.span`
  font-size: 13px;
`),
					(Wa = ({
						index: e,
						size: t,
						step: n,
						closeProps: r,
						primaryProps: o,
						tooltipProps: i,
					}) => (
						le(() => {
							const s = document.createElement("style");
							return (
								(s.id = "#sb-onboarding-arrow-style"),
								(s.innerHTML = `
      .__floater__arrow { container-type: size; }
      .__floater__arrow span { background: ${ht.secondary}; }
      .__floater__arrow span::before, .__floater__arrow span::after {
        content: '';
        display: block;
        width: 2px;
        height: 2px;
        background: ${ht.secondary};
        box-shadow: 0 0 0 2px ${ht.secondary};
        border-radius: 3px;
        flex: 0 0 2px;
      }
      @container (min-height: 1px) {
        .__floater__arrow span { flex-direction: column; }
      }
    `),
								document.head.appendChild(s),
								() => {
									const a = document.querySelector(
										"#sb-onboarding-arrow-style",
									);
									a && a.remove();
								}
							);
						}, []),
						m.createElement(
							Ma,
							{ ...i, style: n.styles?.tooltip },
							m.createElement(
								La,
								null,
								m.createElement(
									Da,
									null,
									n.title && m.createElement(ja, null, n.title),
									m.createElement(
										Tn,
										{ ...r, onClick: r.onClick, variant: "solid" },
										m.createElement(Un, null),
									),
								),
								m.createElement(Fa, null, n.content),
							),
							m.createElement(
								Ba,
								{ id: "buttonNext" },
								m.createElement(Ua, null, e + 1, " of ", t),
								!n.hideNextButton &&
									m.createElement(
										Na,
										{
											...o,
											onClick: n.onNextButtonClick || o.onClick,
											variant: "white",
										},
										e + 1 === t ? "Done" : "Next",
									),
							),
						)
					));
				(Ga = $e({ from: { opacity: 0 }, to: { opacity: 1 } })),
					(so = $e({
						from: { transform: "translate(0, 20px)", opacity: 0 },
						to: { transform: "translate(0, 0)", opacity: 1 },
					})),
					(Ya = $e({
						from: { opacity: 0, transform: "scale(0.8)" },
						to: { opacity: 1, transform: "scale(1)" },
					})),
					(za = $e({
						"0%": { transform: "rotate(0deg)" },
						"100%": { transform: "rotate(360deg)" },
					})),
					(qa = Z.div(({ visible: e }) => ({
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						display: "flex",
						opacity: e ? 1 : 0,
						alignItems: "center",
						justifyContent: "center",
						zIndex: 1e3,
						transition: "opacity 1s 0.5s",
					}))),
					($a = Z.div({
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						animation: `${Ga} 2s`,
						background: `
    radial-gradient(90% 90%, #ff4785 0%, #db5698 30%, #1ea7fdcc 100%),
    radial-gradient(circle, #ff4785 0%, transparent 80%),
    radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 20%, transparent 40%),
    radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 18%, transparent 30%)`,
						"&::before": {
							opacity: 0.5,
							background: `
      radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 10%, transparent 20%),
      radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 8%, transparent 20%)`,
							content: '""',
							position: "absolute",
							top: "-50vw",
							left: "-50vh",
							transform: "translate(-50%, -50%)",
							width: "calc(100vw + 100vh)",
							height: "calc(100vw + 100vh)",
							animation: `${za} 12s linear infinite`,
						},
					})),
					(Va = Z.div(({ visible: e }) => ({
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						color: "white",
						textAlign: "center",
						width: "90vw",
						minWidth: 290,
						maxWidth: 410,
						opacity: e ? 1 : 0,
						transition: "opacity 0.5s",
						h1: {
							fontSize: 45,
							fontWeight: "bold",
							animation: `${so} 1.5s 1s backwards`,
						},
					}))),
					(Ka = Z.div({
						display: "flex",
						marginTop: 40,
						div: {
							display: "flex",
							flexBasis: "33.33%",
							flexDirection: "column",
							alignItems: "center",
							animation: `${so} 1s backwards`,
							"&:nth-child(1)": { animationDelay: "2s" },
							"&:nth-child(2)": { animationDelay: "2.5s" },
							"&:nth-child(3)": { animationDelay: "3s" },
						},
						svg: { marginBottom: 10 },
					})),
					(Qa = Z.button({
						display: "inline-flex",
						position: "relative",
						alignItems: "center",
						justifyContent: "center",
						marginTop: 40,
						width: 48,
						height: 48,
						padding: 0,
						borderRadius: "50%",
						border: 0,
						outline: "none",
						background: "rgba(255, 255, 255, 0.3)",
						cursor: "pointer",
						transition: "background 0.2s",
						animation: `${Ya} 1.5s 4s backwards`,
						"&:hover, &:focus": { background: "rgba(255, 255, 255, 0.4)" },
					})),
					(Xa = Z(Bn)({ width: 30, color: "white" })),
					(vr = Z.svg(({ progress: e }) => ({
						position: "absolute",
						top: -1,
						left: -1,
						width: "50px!important",
						height: "50px!important",
						transform: "rotate(-90deg)",
						color: "white",
						circle: {
							r: "24",
							cx: "25",
							cy: "25",
							fill: "transparent",
							stroke: e ? "currentColor" : "transparent",
							strokeWidth: "1",
							strokeLinecap: "round",
							strokeDasharray: Math.PI * 48,
						},
					}))),
					(Ja = ({ onDismiss: e, duration: t = 6e3 }) => {
						const [n, r] = ce(-4e5 / t),
							[o, i] = ce(!0),
							s = n >= 100,
							a = je(() => {
								i(!1);
								const c = setTimeout(e, 1500);
								return () => clearTimeout(c);
							}, [e]);
						return (
							le(() => {
								if (!t) return;
								const c = 1e3 / 50,
									l = 100 / (t / c),
									p = setInterval(() => r((u) => u + l), c);
								return () => clearInterval(p);
							}, [t]),
							le(() => {
								s && a();
							}, [s, a]),
							m.createElement(
								qa,
								{ visible: o },
								m.createElement($a, null),
								m.createElement(
									Va,
									{ visible: o },
									m.createElement(
										"h1",
										null,
										"Meet your new frontend workshop",
									),
									m.createElement(
										Ka,
										null,
										m.createElement(
											"div",
											null,
											m.createElement(
												"svg",
												{
													xmlns: "http://www.w3.org/2000/svg",
													width: "33",
													height: "32",
												},
												m.createElement("path", {
													d: "M4.06 0H32.5v28.44h-3.56V32H.5V3.56h3.56V0Zm21.33 7.11H4.06v21.33h21.33V7.11Z",
													fill: "currentColor",
												}),
											),
											"Development",
										),
										m.createElement(
											"div",
											null,
											m.createElement(
												"svg",
												{
													xmlns: "http://www.w3.org/2000/svg",
													width: "32",
													height: "32",
												},
												m.createElement("path", {
													d: "M15.95 32c-1.85 0-3.1-1.55-3.1-3.54 0-1.1.45-2.78 1.35-5.03.9-2.3 1.35-4.51 1.35-6.81a22.21 22.21 0 0 0-5.1 3.67c-2.5 2.47-4.95 4.9-7.55 4.9-1.6 0-2.9-1.1-2.9-2.43 0-1.46 1.35-2.91 4.3-3.62 1.45-.36 3.1-.75 4.95-1.06 1.8-.31 3.8-1.02 5.9-2.08a23.77 23.77 0 0 0-6.1-2.12C5.3 13.18 2.3 12.6 1 11.28.35 10.6 0 9.9 0 9.14 0 7.82 1.2 6.8 2.95 6.8c2.65 0 5.75 3.1 7.95 5.3 1.1 1.1 2.65 2.21 4.65 3.27v-.57c0-1.77-.15-3.23-.55-4.3-.8-2.11-2.05-5.43-2.05-6.97 0-2.04 1.3-3.54 3.1-3.54 1.75 0 3.1 1.41 3.1 3.54 0 1.06-.45 2.78-1.35 5.12-.9 2.35-1.35 4.6-1.35 6.72 2.85-1.59 2.5-1.41 4.95-3.5 2.35-2.29 4-3.7 4.9-4.23.95-.58 1.9-.84 2.9-.84 1.6 0 2.8.97 2.8 2.34 0 1.5-1.25 2.78-4.15 3.62-1.4.4-3.05.75-4.9 1.1-1.9.36-3.9 1.07-6.1 2.13a23.3 23.3 0 0 0 5.95 2.08c3.65.7 6.75 1.32 8.15 2.6.7.67 1.05 1.33 1.05 2.08 0 1.33-1.2 2.43-2.95 2.43-2.95 0-6.75-4.15-8.2-5.61-.7-.7-2.2-1.72-4.4-2.96v.57c0 1.9.45 4.03 1.3 6.32.85 2.3 1.3 3.94 1.3 4.95 0 2.08-1.35 3.54-3.1 3.54Z",
													fill: "currentColor",
												}),
											),
											"Testing",
										),
										m.createElement(
											"div",
											null,
											m.createElement(
												"svg",
												{
													xmlns: "http://www.w3.org/2000/svg",
													width: "33",
													height: "32",
												},
												m.createElement("path", {
													d: "M.5 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Zm16 12.44A12.44 12.44 0 0 1 4.3 13.53a8 8 0 1 0 9.73-9.73 12.44 12.44 0 1 1 2.47 24.64ZM12.06 16a4.44 4.44 0 1 1 0-8.89 4.44 4.44 0 0 1 0 8.89Z",
													fill: "currentColor",
													fillRule: "evenodd",
												}),
											),
											"Documentation",
										),
									),
									m.createElement(
										Qa,
										{ onClick: a },
										m.createElement(Xa, null),
										m.createElement(
											vr,
											{ xmlns: "http://www.w3.org/2000/svg" },
											m.createElement("circle", null),
										),
										m.createElement(
											vr,
											{ xmlns: "http://www.w3.org/2000/svg", progress: !0 },
											m.createElement("circle", {
												strokeDashoffset:
													Math.PI *
													48 *
													(1 - Math.max(0, Math.min(n, 100)) / 100),
											}),
										),
									),
								),
							)
						);
					}),
					(Za = Z.span(({ theme: e }) => ({
						display: "inline-flex",
						borderRadius: 3,
						padding: "0 5px",
						marginBottom: -2,
						opacity: 0.8,
						fontFamily: e.typography.fonts.mono,
						fontSize: 11,
						border: e.base === "dark" ? e.color.darkest : e.color.lightest,
						color: e.base === "dark" ? e.color.lightest : e.color.darkest,
						backgroundColor: e.base === "dark" ? "black" : e.color.light,
						boxSizing: "border-box",
						lineHeight: "17px",
					}))),
					(el = Z.div(({ theme: e }) => ({
						background: e.background.content,
						borderRadius: 3,
						marginTop: 15,
						padding: 10,
						fontSize: e.typography.size.s1,
						".linenumber": { opacity: 0.5 },
					}))),
					(tl = Ht());
			});
		z();
		q();
		$();
		z();
		q();
		$();
		Fe();
		dt();
		Ut();
		z();
		q();
		$();
		var Hc = __STORYBOOK_API__,
			{
				ActiveTabs: Gc,
				Consumer: Yc,
				ManagerContext: zc,
				Provider: qc,
				RequestResponseError: $c,
				addons: Sn,
				combineParameters: Vc,
				controlOrMetaKey: Kc,
				controlOrMetaSymbol: Qc,
				eventMatchesShortcut: Xc,
				eventToShortcut: Jc,
				experimental_MockUniversalStore: Zc,
				experimental_UniversalStore: eu,
				experimental_requestResponse: tu,
				experimental_useUniversalStore: nu,
				isMacLike: ru,
				isShortcutTaken: ou,
				keyToSymbol: iu,
				merge: su,
				mockChannel: au,
				optionOrAltSymbol: lu,
				shortcutMatchesShortcut: cu,
				shortcutToHumanString: uu,
				types: pu,
				useAddonState: fu,
				useArgTypes: du,
				useArgs: hu,
				useChannel: mu,
				useGlobalTypes: yu,
				useGlobals: gu,
				useParameter: bu,
				useSharedState: vu,
				useStoryPrepared: Eu,
				useStorybookApi: wu,
				useStorybookState: Ou,
			} = __STORYBOOK_API__;
		var rl = Ft(() => Promise.resolve().then(() => (lo(), ao)));
		Sn.register("@storybook/addon-onboarding", async (e) => {
			const t = e.getUrlState(),
				n = t.path === "/onboarding" || t.queryParams.onboarding === "true";
			e.once(wn, () => {
				if (
					!(
						e.getData("example-button--primary") ||
						document.getElementById("example-button--primary")
					)
				) {
					console.warn(
						"[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/storybook/tree/next/code/addons/onboarding#uninstalling",
					);
					return;
				}
				if (!n || window.innerWidth < 730) return;
				e.togglePanel(!0),
					e.togglePanelPosition("bottom"),
					e.setSelectedPanel("addon-controls");
				const r = document.createElement("div");
				(r.id = "storybook-addon-onboarding"),
					document.body.appendChild(r),
					ke.render(
						m.createElement(
							Lt,
							{ fallback: m.createElement("div", null) },
							m.createElement(rl, { api: e }),
						),
						r,
					);
			});
		});
	})();
} catch (e) {
	console.error(
		"[Storybook] One of your manager-entries failed: " + import.meta.url,
		e,
	);
}

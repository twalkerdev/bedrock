try {
	(() => {
		var re = Object.create;
		var W = Object.defineProperty;
		var ie = Object.getOwnPropertyDescriptor;
		var ce = Object.getOwnPropertyNames;
		var ae = Object.getPrototypeOf,
			se = Object.prototype.hasOwnProperty;
		var E = ((e) =>
			typeof require < "u"
				? require
				: typeof Proxy < "u"
					? new Proxy(e, {
							get: (o, a) => (typeof require < "u" ? require : o)[a],
						})
					: e)(function (e) {
			if (typeof require < "u") return require.apply(this, arguments);
			throw Error('Dynamic require of "' + e + '" is not supported');
		});
		var D = (e, o) => () => (e && (o = e((e = 0))), o);
		var le = (e, o) => () => (
			o || e((o = { exports: {} }).exports, o), o.exports
		);
		var ue = (e, o, a, r) => {
			if ((o && typeof o == "object") || typeof o == "function")
				for (const i of ce(o))
					!se.call(e, i) &&
						i !== a &&
						W(e, i, {
							get: () => o[i],
							enumerable: !(r = ie(o, i)) || r.enumerable,
						});
			return e;
		};
		var de = (e, o, a) => (
			(a = e != null ? re(ae(e)) : {}),
			ue(
				o || !e || !e.__esModule
					? W(a, "default", { value: e, enumerable: !0 })
					: a,
				e,
			)
		);
		var m = D(() => {});
		var h = D(() => {});
		var f = D(() => {});
		var X = le((Q, V) => {
			m();
			h();
			f();
			(function (e) {
				if (typeof Q == "object" && typeof V < "u") V.exports = e();
				else if (typeof define == "function" && define.amd) define([], e);
				else {
					var o;
					typeof window < "u" || typeof window < "u"
						? (o = window)
						: typeof self < "u"
							? (o = self)
							: (o = this),
						(o.memoizerific = e());
				}
			})(() => {
				var e, o, a;
				return (function r(i, I, s) {
					function n(c, d) {
						if (!I[c]) {
							if (!i[c]) {
								var l = typeof E == "function" && E;
								if (!d && l) return l(c, !0);
								if (t) return t(c, !0);
								var k = new Error("Cannot find module '" + c + "'");
								throw ((k.code = "MODULE_NOT_FOUND"), k);
							}
							var p = (I[c] = { exports: {} });
							i[c][0].call(
								p.exports,
								(b) => {
									var y = i[c][1][b];
									return n(y || b);
								},
								p,
								p.exports,
								r,
								i,
								I,
								s,
							);
						}
						return I[c].exports;
					}
					for (var t = typeof E == "function" && E, u = 0; u < s.length; u++)
						n(s[u]);
					return n;
				})(
					{
						1: [
							(r, i, I) => {
								i.exports = (s) => {
									if (typeof Map != "function" || s) {
										var n = r("./similar");
										return new n();
									} else return new Map();
								};
							},
							{ "./similar": 2 },
						],
						2: [
							(r, i, I) => {
								function s() {
									return (
										(this.list = []),
										(this.lastItem = void 0),
										(this.size = 0),
										this
									);
								}
								(s.prototype.get = function (n) {
									var t;
									if (this.lastItem && this.isEqual(this.lastItem.key, n))
										return this.lastItem.val;
									if (((t = this.indexOf(n)), t >= 0))
										return (this.lastItem = this.list[t]), this.list[t].val;
								}),
									(s.prototype.set = function (n, t) {
										var u;
										return this.lastItem && this.isEqual(this.lastItem.key, n)
											? ((this.lastItem.val = t), this)
											: ((u = this.indexOf(n)),
												u >= 0
													? ((this.lastItem = this.list[u]),
														(this.list[u].val = t),
														this)
													: ((this.lastItem = { key: n, val: t }),
														this.list.push(this.lastItem),
														this.size++,
														this));
									}),
									(s.prototype.delete = function (n) {
										var t;
										if (
											(this.lastItem &&
												this.isEqual(this.lastItem.key, n) &&
												(this.lastItem = void 0),
											(t = this.indexOf(n)),
											t >= 0)
										)
											return this.size--, this.list.splice(t, 1)[0];
									}),
									(s.prototype.has = function (n) {
										var t;
										return this.lastItem && this.isEqual(this.lastItem.key, n)
											? !0
											: ((t = this.indexOf(n)),
												t >= 0 ? ((this.lastItem = this.list[t]), !0) : !1);
									}),
									(s.prototype.forEach = function (n, t) {
										var u;
										for (u = 0; u < this.size; u++)
											n.call(
												t || this,
												this.list[u].val,
												this.list[u].key,
												this,
											);
									}),
									(s.prototype.indexOf = function (n) {
										var t;
										for (t = 0; t < this.size; t++)
											if (this.isEqual(this.list[t].key, n)) return t;
										return -1;
									}),
									(s.prototype.isEqual = (n, t) =>
										n === t || (n !== n && t !== t)),
									(i.exports = s);
							},
							{},
						],
						3: [
							(r, i, I) => {
								var s = r("map-or-similar");
								i.exports = (c) => {
									var d = new s(!1),
										l = [];
									return (k) => {
										var p = () => {
											var b = d,
												y,
												R,
												T = arguments.length - 1,
												x = Array(T + 1),
												O = !0,
												A;
											if ((p.numArgs || p.numArgs === 0) && p.numArgs !== T + 1)
												throw new Error(
													"Memoizerific functions should always be called with the same number of arguments",
												);
											for (A = 0; A < T; A++) {
												if (
													((x[A] = { cacheItem: b, arg: arguments[A] }),
													b.has(arguments[A]))
												) {
													b = b.get(arguments[A]);
													continue;
												}
												(O = !1),
													(y = new s(!1)),
													b.set(arguments[A], y),
													(b = y);
											}
											return (
												O &&
													(b.has(arguments[T])
														? (R = b.get(arguments[T]))
														: (O = !1)),
												O ||
													((R = k.apply(null, arguments)),
													b.set(arguments[T], R)),
												c > 0 &&
													((x[T] = { cacheItem: b, arg: arguments[T] }),
													O ? n(l, x) : l.push(x),
													l.length > c && t(l.shift())),
												(p.wasMemoized = O),
												(p.numArgs = T + 1),
												R
											);
										};
										return (
											(p.limit = c),
											(p.wasMemoized = !1),
											(p.cache = d),
											(p.lru = l),
											p
										);
									};
								};
								function n(c, d) {
									var l = c.length,
										k = d.length,
										p,
										b,
										y;
									for (b = 0; b < l; b++) {
										for (p = !0, y = 0; y < k; y++)
											if (!u(c[b][y].arg, d[y].arg)) {
												p = !1;
												break;
											}
										if (p) break;
									}
									c.push(c.splice(b, 1)[0]);
								}
								function t(c) {
									var d = c.length,
										l = c[d - 1],
										k,
										p;
									for (
										l.cacheItem.delete(l.arg), p = d - 2;
										p >= 0 &&
										((l = c[p]), (k = l.cacheItem.get(l.arg)), !k || !k.size);
										p--
									)
										l.cacheItem.delete(l.arg);
								}
								function u(c, d) {
									return c === d || (c !== c && d !== d);
								}
							},
							{ "map-or-similar": 1 },
						],
					},
					{},
					[3],
				)(3);
			});
		});
		m();
		h();
		f();
		m();
		h();
		f();
		m();
		h();
		f();
		m();
		h();
		f();
		var g = __REACT__,
			{
				Children: Ee,
				Component: we,
				Fragment: M,
				Profiler: Be,
				PureComponent: Re,
				StrictMode: xe,
				Suspense: Le,
				__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Pe,
				cloneElement: De,
				createContext: Me,
				createElement: Ue,
				createFactory: Ge,
				createRef: Ne,
				forwardRef: Fe,
				isValidElement: He,
				lazy: qe,
				memo: w,
				startTransition: ze,
				unstable_act: Ke,
				useCallback: U,
				useContext: Ve,
				useDebugValue: Ye,
				useDeferredValue: We,
				useEffect: je,
				useId: $e,
				useImperativeHandle: Ze,
				useInsertionEffect: Je,
				useLayoutEffect: Qe,
				useMemo: j,
				useReducer: Xe,
				useRef: eo,
				useState: G,
				useSyncExternalStore: oo,
				useTransition: to,
				version: no,
			} = __REACT__;
		m();
		h();
		f();
		var so = __STORYBOOK_API__,
			{
				ActiveTabs: lo,
				Consumer: uo,
				ManagerContext: Io,
				Provider: po,
				RequestResponseError: mo,
				addons: N,
				combineParameters: ho,
				controlOrMetaKey: fo,
				controlOrMetaSymbol: go,
				eventMatchesShortcut: bo,
				eventToShortcut: ko,
				experimental_MockUniversalStore: yo,
				experimental_UniversalStore: Co,
				experimental_requestResponse: _o,
				experimental_useUniversalStore: So,
				isMacLike: vo,
				isShortcutTaken: To,
				keyToSymbol: Ao,
				merge: Oo,
				mockChannel: Eo,
				optionOrAltSymbol: wo,
				shortcutMatchesShortcut: Bo,
				shortcutToHumanString: Ro,
				types: $,
				useAddonState: xo,
				useArgTypes: Lo,
				useArgs: Po,
				useChannel: Do,
				useGlobalTypes: Mo,
				useGlobals: L,
				useParameter: P,
				useSharedState: Uo,
				useStoryPrepared: Go,
				useStorybookApi: No,
				useStorybookState: Fo,
			} = __STORYBOOK_API__;
		m();
		h();
		f();
		var Vo = __STORYBOOK_COMPONENTS__,
			{
				A: Yo,
				ActionBar: Wo,
				AddonPanel: jo,
				Badge: $o,
				Bar: Zo,
				Blockquote: Jo,
				Button: Qo,
				ClipboardCode: Xo,
				Code: et,
				DL: ot,
				Div: tt,
				DocumentWrapper: nt,
				EmptyTabContent: rt,
				ErrorFormatter: it,
				FlexBar: ct,
				Form: at,
				H1: st,
				H2: lt,
				H3: ut,
				H4: dt,
				H5: It,
				H6: pt,
				HR: mt,
				IconButton: B,
				IconButtonSkeleton: ht,
				Icons: ft,
				Img: gt,
				LI: bt,
				Link: kt,
				ListItem: yt,
				Loader: Ct,
				Modal: _t,
				OL: St,
				P: vt,
				Placeholder: Tt,
				Pre: At,
				ProgressSpinner: Ot,
				ResetWrapper: Et,
				ScrollArea: wt,
				Separator: Bt,
				Spaced: Rt,
				Span: xt,
				StorybookIcon: Lt,
				StorybookLogo: Pt,
				Symbols: Dt,
				SyntaxHighlighter: Mt,
				TT: Ut,
				TabBar: Gt,
				TabButton: Nt,
				TabWrapper: Ft,
				Table: Ht,
				Tabs: qt,
				TabsState: zt,
				TooltipLinkList: F,
				TooltipMessage: Kt,
				TooltipNote: Vt,
				UL: Yt,
				WithTooltip: H,
				WithTooltipPure: Wt,
				Zoom: jt,
				codeCommon: $t,
				components: Zt,
				createCopyToClipboardFunction: Jt,
				getStoryHref: Qt,
				icons: Xt,
				interleaveSeparators: en,
				nameSpaceClassNames: on,
				resetComponents: tn,
				withReset: nn,
			} = __STORYBOOK_COMPONENTS__;
		m();
		h();
		f();
		var ln = __STORYBOOK_ICONS__,
			{
				AccessibilityAltIcon: un,
				AccessibilityIcon: dn,
				AccessibilityIgnoredIcon: In,
				AddIcon: pn,
				AdminIcon: mn,
				AlertAltIcon: hn,
				AlertIcon: fn,
				AlignLeftIcon: gn,
				AlignRightIcon: bn,
				AppleIcon: kn,
				ArrowBottomLeftIcon: yn,
				ArrowBottomRightIcon: Cn,
				ArrowDownIcon: _n,
				ArrowLeftIcon: Sn,
				ArrowRightIcon: vn,
				ArrowSolidDownIcon: Tn,
				ArrowSolidLeftIcon: An,
				ArrowSolidRightIcon: On,
				ArrowSolidUpIcon: En,
				ArrowTopLeftIcon: wn,
				ArrowTopRightIcon: Bn,
				ArrowUpIcon: Rn,
				AzureDevOpsIcon: xn,
				BackIcon: Ln,
				BasketIcon: Pn,
				BatchAcceptIcon: Dn,
				BatchDenyIcon: Mn,
				BeakerIcon: Un,
				BellIcon: Gn,
				BitbucketIcon: Nn,
				BoldIcon: Fn,
				BookIcon: Hn,
				BookmarkHollowIcon: qn,
				BookmarkIcon: zn,
				BottomBarIcon: Kn,
				BottomBarToggleIcon: Vn,
				BoxIcon: Yn,
				BranchIcon: Wn,
				BrowserIcon: jn,
				ButtonIcon: $n,
				CPUIcon: Zn,
				CalendarIcon: Jn,
				CameraIcon: Qn,
				CameraStabilizeIcon: Xn,
				CategoryIcon: er,
				CertificateIcon: or,
				ChangedIcon: tr,
				ChatIcon: nr,
				CheckIcon: rr,
				ChevronDownIcon: ir,
				ChevronLeftIcon: cr,
				ChevronRightIcon: ar,
				ChevronSmallDownIcon: sr,
				ChevronSmallLeftIcon: lr,
				ChevronSmallRightIcon: ur,
				ChevronSmallUpIcon: dr,
				ChevronUpIcon: Ir,
				ChromaticIcon: pr,
				ChromeIcon: mr,
				CircleHollowIcon: hr,
				CircleIcon: Z,
				ClearIcon: fr,
				CloseAltIcon: gr,
				CloseIcon: br,
				CloudHollowIcon: kr,
				CloudIcon: yr,
				CogIcon: Cr,
				CollapseIcon: _r,
				CommandIcon: Sr,
				CommentAddIcon: vr,
				CommentIcon: Tr,
				CommentsIcon: Ar,
				CommitIcon: Or,
				CompassIcon: Er,
				ComponentDrivenIcon: wr,
				ComponentIcon: Br,
				ContrastIcon: Rr,
				ContrastIgnoredIcon: xr,
				ControlsIcon: Lr,
				CopyIcon: Pr,
				CreditIcon: Dr,
				CrossIcon: Mr,
				DashboardIcon: Ur,
				DatabaseIcon: Gr,
				DeleteIcon: Nr,
				DiamondIcon: Fr,
				DirectionIcon: Hr,
				DiscordIcon: qr,
				DocChartIcon: zr,
				DocListIcon: Kr,
				DocumentIcon: Vr,
				DownloadIcon: Yr,
				DragIcon: Wr,
				EditIcon: jr,
				EllipsisIcon: $r,
				EmailIcon: Zr,
				ExpandAltIcon: Jr,
				ExpandIcon: Qr,
				EyeCloseIcon: Xr,
				EyeIcon: ei,
				FaceHappyIcon: oi,
				FaceNeutralIcon: ti,
				FaceSadIcon: ni,
				FacebookIcon: ri,
				FailedIcon: ii,
				FastForwardIcon: ci,
				FigmaIcon: ai,
				FilterIcon: si,
				FlagIcon: li,
				FolderIcon: ui,
				FormIcon: di,
				GDriveIcon: Ii,
				GithubIcon: pi,
				GitlabIcon: mi,
				GlobeIcon: hi,
				GoogleIcon: fi,
				GraphBarIcon: gi,
				GraphLineIcon: bi,
				GraphqlIcon: ki,
				GridAltIcon: yi,
				GridIcon: q,
				GrowIcon: Ci,
				HeartHollowIcon: _i,
				HeartIcon: Si,
				HomeIcon: vi,
				HourglassIcon: Ti,
				InfoIcon: Ai,
				ItalicIcon: Oi,
				JumpToIcon: Ei,
				KeyIcon: wi,
				LightningIcon: Bi,
				LightningOffIcon: Ri,
				LinkBrokenIcon: xi,
				LinkIcon: Li,
				LinkedinIcon: Pi,
				LinuxIcon: Di,
				ListOrderedIcon: Mi,
				ListUnorderedIcon: Ui,
				LocationIcon: Gi,
				LockIcon: Ni,
				MarkdownIcon: Fi,
				MarkupIcon: Hi,
				MediumIcon: qi,
				MemoryIcon: zi,
				MenuIcon: Ki,
				MergeIcon: Vi,
				MirrorIcon: Yi,
				MobileIcon: Wi,
				MoonIcon: ji,
				NutIcon: $i,
				OutboxIcon: Zi,
				OutlineIcon: Ji,
				PaintBrushIcon: Qi,
				PaperClipIcon: Xi,
				ParagraphIcon: ec,
				PassedIcon: oc,
				PhoneIcon: tc,
				PhotoDragIcon: nc,
				PhotoIcon: z,
				PhotoStabilizeIcon: rc,
				PinAltIcon: ic,
				PinIcon: cc,
				PlayAllHollowIcon: ac,
				PlayBackIcon: sc,
				PlayHollowIcon: lc,
				PlayIcon: uc,
				PlayNextIcon: dc,
				PlusIcon: Ic,
				PointerDefaultIcon: pc,
				PointerHandIcon: mc,
				PowerIcon: hc,
				PrintIcon: fc,
				ProceedIcon: gc,
				ProfileIcon: bc,
				PullRequestIcon: kc,
				QuestionIcon: yc,
				RSSIcon: Cc,
				RedirectIcon: _c,
				ReduxIcon: Sc,
				RefreshIcon: J,
				ReplyIcon: vc,
				RepoIcon: Tc,
				RequestChangeIcon: Ac,
				RewindIcon: Oc,
				RulerIcon: Ec,
				SaveIcon: wc,
				SearchIcon: Bc,
				ShareAltIcon: Rc,
				ShareIcon: xc,
				ShieldIcon: Lc,
				SideBySideIcon: Pc,
				SidebarAltIcon: Dc,
				SidebarAltToggleIcon: Mc,
				SidebarIcon: Uc,
				SidebarToggleIcon: Gc,
				SpeakerIcon: Nc,
				StackedIcon: Fc,
				StarHollowIcon: Hc,
				StarIcon: qc,
				StatusFailIcon: zc,
				StatusIcon: Kc,
				StatusPassIcon: Vc,
				StatusWarnIcon: Yc,
				StickerIcon: Wc,
				StopAltHollowIcon: jc,
				StopAltIcon: $c,
				StopIcon: Zc,
				StorybookIcon: Jc,
				StructureIcon: Qc,
				SubtractIcon: Xc,
				SunIcon: ea,
				SupportIcon: oa,
				SweepIcon: ta,
				SwitchAltIcon: na,
				SyncIcon: ra,
				TabletIcon: ia,
				ThumbsUpIcon: ca,
				TimeIcon: aa,
				TimerIcon: sa,
				TransferIcon: la,
				TrashIcon: ua,
				TwitterIcon: da,
				TypeIcon: Ia,
				UbuntuIcon: pa,
				UndoIcon: ma,
				UnfoldIcon: ha,
				UnlockIcon: fa,
				UnpinIcon: ga,
				UploadIcon: ba,
				UserAddIcon: ka,
				UserAltIcon: ya,
				UserIcon: Ca,
				UsersIcon: _a,
				VSCodeIcon: Sa,
				VerifiedIcon: va,
				VideoIcon: Ta,
				WandIcon: Aa,
				WatchIcon: Oa,
				WindowsIcon: Ea,
				WrenchIcon: wa,
				XIcon: Ba,
				YoutubeIcon: Ra,
				ZoomIcon: xa,
				ZoomOutIcon: La,
				ZoomResetIcon: Pa,
				iconList: Da,
			} = __STORYBOOK_ICONS__;
		m();
		h();
		f();
		var Fa = __STORYBOOK_CLIENT_LOGGER__,
			{
				deprecate: Ha,
				logger: K,
				once: qa,
				pretty: za,
			} = __STORYBOOK_CLIENT_LOGGER__;
		var Y = de(X());
		m();
		h();
		f();
		var Qa = __STORYBOOK_THEMING__,
			{
				CacheProvider: Xa,
				ClassNames: es,
				Global: os,
				ThemeProvider: ts,
				background: ns,
				color: rs,
				convert: is,
				create: cs,
				createCache: as,
				createGlobal: ss,
				createReset: ls,
				css: us,
				darken: ds,
				ensure: Is,
				ignoreSsrWarning: ps,
				isPropValid: ms,
				jsx: hs,
				keyframes: fs,
				lighten: gs,
				styled: ee,
				themes: bs,
				typography: ks,
				useTheme: ys,
				withTheme: Cs,
			} = __STORYBOOK_THEMING__;
		m();
		h();
		f();
		function oe(e) {
			for (var o = [], a = 1; a < arguments.length; a++)
				o[a - 1] = arguments[a];
			var r = Array.from(typeof e == "string" ? [e] : e);
			r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
			var i = r.reduce((n, t) => {
				var u = t.match(/\n([\t ]+|(?!\s).)/g);
				return u
					? n.concat(
							u.map((c) => {
								var d, l;
								return (l =
									(d = c.match(/[\t ]/g)) === null || d === void 0
										? void 0
										: d.length) !== null && l !== void 0
									? l
									: 0;
							}),
						)
					: n;
			}, []);
			if (i.length) {
				var I = new RegExp(
					`
[	 ]{` +
						Math.min.apply(Math, i) +
						"}",
					"g",
				);
				r = r.map((n) =>
					n.replace(
						I,
						`
`,
					),
				);
			}
			r[0] = r[0].replace(/^\r?\n/, "");
			var s = r[0];
			return (
				o.forEach((n, t) => {
					var u = s.match(/(?:^|\n)( *)$/),
						c = u ? u[1] : "",
						d = n;
					typeof n == "string" &&
						n.includes(`
`) &&
						(d = String(n)
							.split(`
`)
							.map((l, k) => (k === 0 ? l : "" + c + l))
							.join(`
`)),
						(s += d + r[t + 1]);
				}),
				s
			);
		}
		var te = "storybook/background",
			C = "backgrounds",
			Ie = {
				light: { name: "light", value: "#F8F8F8" },
				dark: { name: "dark", value: "#333" },
			},
			pe = w(() => {
				const e = P(C),
					[o, a, r] = L(),
					[i, I] = G(!1),
					{ options: s = Ie, disable: n = !0 } = e || {};
				if (n) return null;
				const t = o[C] || {},
					u = t.value,
					c = t.grid || !1,
					d = s[u],
					l = !!r?.[C],
					k = Object.keys(s).length;
				return g.createElement(me, {
					length: k,
					backgroundMap: s,
					item: d,
					updateGlobals: a,
					backgroundName: u,
					setIsTooltipVisible: I,
					isLocked: l,
					isGridActive: c,
					isTooltipVisible: i,
				});
			}),
			me = w((e) => {
				const {
						item: o,
						length: a,
						updateGlobals: r,
						setIsTooltipVisible: i,
						backgroundMap: I,
						backgroundName: s,
						isLocked: n,
						isGridActive: t,
						isTooltipVisible: u,
					} = e,
					c = U(
						(d) => {
							r({ [C]: d });
						},
						[r],
					);
				return g.createElement(
					M,
					null,
					g.createElement(
						B,
						{
							key: "grid",
							active: t,
							disabled: n,
							title: "Apply a grid to the preview",
							onClick: () => c({ value: s, grid: !t }),
						},
						g.createElement(q, null),
					),
					a > 0
						? g.createElement(
								H,
								{
									key: "background",
									placement: "top",
									closeOnOutsideClick: !0,
									tooltip: ({ onHide: d }) =>
										g.createElement(F, {
											links: [
												...(o
													? [
															{
																id: "reset",
																title: "Reset background",
																icon: g.createElement(J, null),
																onClick: () => {
																	c({ value: void 0, grid: t }), d();
																},
															},
														]
													: []),
												...Object.entries(I).map(([l, k]) => ({
													id: l,
													title: k.name,
													icon: g.createElement(Z, {
														color: k?.value || "grey",
													}),
													active: l === s,
													onClick: () => {
														c({ value: l, grid: t }), d();
													},
												})),
											],
										}),
									onVisibleChange: i,
								},
								g.createElement(
									B,
									{
										disabled: n,
										key: "background",
										title: "Change the background of the preview",
										active: !!o || u,
									},
									g.createElement(z, null),
								),
							)
						: null,
				);
			}),
			he = ee.span(
				({ background: e }) => ({
					borderRadius: "1rem",
					display: "block",
					height: "1rem",
					width: "1rem",
					background: e,
				}),
				({ theme: e }) => ({
					boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
				}),
			),
			fe = (e, o = [], a) => {
				if (e === "transparent") return "transparent";
				if (o.find((i) => i.value === e) || e) return e;
				const r = o.find((i) => i.name === a);
				if (r) return r.value;
				if (a) {
					const i = o.map((I) => I.name).join(", ");
					K.warn(oe`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${i}.
      `);
				}
				return "transparent";
			},
			ne = (0, Y.default)(1e3)((e, o, a, r, i, I) => ({
				id: e || o,
				title: o,
				onClick: () => {
					i({ selected: a, name: o });
				},
				value: a,
				right: r ? g.createElement(he, { background: a }) : void 0,
				active: I,
			})),
			ge = (0, Y.default)(10)((e, o, a) => {
				const r = e.map(({ name: i, value: I }) =>
					ne(null, i, I, !0, a, I === o),
				);
				return o !== "transparent"
					? [ne("reset", "Clear background", "transparent", null, a, !1), ...r]
					: r;
			}),
			be = { default: null, disable: !0, values: [] },
			ke = w(() => {
				const e = P(C, be),
					[o, a] = G(!1),
					[r, i] = L(),
					I = r[C]?.value,
					s = j(() => fe(I, e.values, e.default), [e, I]);
				Array.isArray(e) &&
					K.warn(
						"Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md",
					);
				const n = U(
					(t) => {
						i({ [C]: { ...r[C], value: t } });
					},
					[e, r, i],
				);
				return e.disable
					? null
					: g.createElement(
							H,
							{
								placement: "top",
								closeOnOutsideClick: !0,
								tooltip: ({ onHide: t }) =>
									g.createElement(F, {
										links: ge(e.values, s, ({ selected: u }) => {
											s !== u && n(u), t();
										}),
									}),
								onVisibleChange: a,
							},
							g.createElement(
								B,
								{
									key: "background",
									title: "Change the background of the preview",
									active: s !== "transparent" || o,
								},
								g.createElement(z, null),
							),
						);
			}),
			ye = w(() => {
				const [e, o] = L(),
					{ grid: a } = P(C, { grid: { disable: !1 } });
				if (a?.disable) return null;
				const r = e[C]?.grid || !1;
				return g.createElement(
					B,
					{
						key: "background",
						active: r,
						title: "Apply a grid to the preview",
						onClick: () => o({ [C]: { ...e[C], grid: !r } }),
					},
					g.createElement(q, null),
				);
			});
		N.register(te, () => {
			N.add(te, {
				title: "Backgrounds",
				type: $.TOOL,
				match: ({ viewMode: e, tabId: o }) =>
					!!(e && e.match(/^(story|docs)$/)) && !o,
				render: () =>
					FEATURES?.backgroundsStoryGlobals
						? g.createElement(pe, null)
						: g.createElement(
								M,
								null,
								g.createElement(ke, null),
								g.createElement(ye, null),
							),
			});
		});
	})();
} catch (e) {
	console.error(
		"[Storybook] One of your manager-entries failed: " + import.meta.url,
		e,
	);
}

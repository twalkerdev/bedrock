try {
	(() => {
		var me = Object.create;
		var J = Object.defineProperty;
		var he = Object.getOwnPropertyDescriptor;
		var fe = Object.getOwnPropertyNames;
		var ge = Object.getPrototypeOf,
			be = Object.prototype.hasOwnProperty;
		var x = ((e) =>
			typeof require < "u"
				? require
				: typeof Proxy < "u"
					? new Proxy(e, {
							get: (t, l) => (typeof require < "u" ? require : t)[l],
						})
					: e)(function (e) {
			if (typeof require < "u") return require.apply(this, arguments);
			throw Error('Dynamic require of "' + e + '" is not supported');
		});
		var U = (e, t) => () => (e && (t = e((e = 0))), t);
		var ye = (e, t) => () => (
			t || e((t = { exports: {} }).exports, t), t.exports
		);
		var we = (e, t, l, s) => {
			if ((t && typeof t == "object") || typeof t == "function")
				for (const a of fe(t))
					!be.call(e, a) &&
						a !== l &&
						J(e, a, {
							get: () => t[a],
							enumerable: !(s = he(t, a)) || s.enumerable,
						});
			return e;
		};
		var Se = (e, t, l) => (
			(l = e != null ? me(ge(e)) : {}),
			we(
				t || !e || !e.__esModule
					? J(l, "default", { value: e, enumerable: !0 })
					: l,
				e,
			)
		);
		var f = U(() => {});
		var g = U(() => {});
		var b = U(() => {});
		var ce = ye((ae, Z) => {
			f();
			g();
			b();
			(function (e) {
				if (typeof ae == "object" && typeof Z < "u") Z.exports = e();
				else if (typeof define == "function" && define.amd) define([], e);
				else {
					var t;
					typeof window < "u" || typeof window < "u"
						? (t = window)
						: typeof self < "u"
							? (t = self)
							: (t = this),
						(t.memoizerific = e());
				}
			})(() => {
				var e, t, l;
				return (function s(a, y, u) {
					function o(n, I) {
						if (!y[n]) {
							if (!a[n]) {
								var r = typeof x == "function" && x;
								if (!I && r) return r(n, !0);
								if (i) return i(n, !0);
								var d = new Error("Cannot find module '" + n + "'");
								throw ((d.code = "MODULE_NOT_FOUND"), d);
							}
							var p = (y[n] = { exports: {} });
							a[n][0].call(
								p.exports,
								(h) => {
									var w = a[n][1][h];
									return o(w || h);
								},
								p,
								p.exports,
								s,
								a,
								y,
								u,
							);
						}
						return y[n].exports;
					}
					for (var i = typeof x == "function" && x, m = 0; m < u.length; m++)
						o(u[m]);
					return o;
				})(
					{
						1: [
							(s, a, y) => {
								a.exports = (u) => {
									if (typeof Map != "function" || u) {
										var o = s("./similar");
										return new o();
									} else return new Map();
								};
							},
							{ "./similar": 2 },
						],
						2: [
							(s, a, y) => {
								function u() {
									return (
										(this.list = []),
										(this.lastItem = void 0),
										(this.size = 0),
										this
									);
								}
								(u.prototype.get = function (o) {
									var i;
									if (this.lastItem && this.isEqual(this.lastItem.key, o))
										return this.lastItem.val;
									if (((i = this.indexOf(o)), i >= 0))
										return (this.lastItem = this.list[i]), this.list[i].val;
								}),
									(u.prototype.set = function (o, i) {
										var m;
										return this.lastItem && this.isEqual(this.lastItem.key, o)
											? ((this.lastItem.val = i), this)
											: ((m = this.indexOf(o)),
												m >= 0
													? ((this.lastItem = this.list[m]),
														(this.list[m].val = i),
														this)
													: ((this.lastItem = { key: o, val: i }),
														this.list.push(this.lastItem),
														this.size++,
														this));
									}),
									(u.prototype.delete = function (o) {
										var i;
										if (
											(this.lastItem &&
												this.isEqual(this.lastItem.key, o) &&
												(this.lastItem = void 0),
											(i = this.indexOf(o)),
											i >= 0)
										)
											return this.size--, this.list.splice(i, 1)[0];
									}),
									(u.prototype.has = function (o) {
										var i;
										return this.lastItem && this.isEqual(this.lastItem.key, o)
											? !0
											: ((i = this.indexOf(o)),
												i >= 0 ? ((this.lastItem = this.list[i]), !0) : !1);
									}),
									(u.prototype.forEach = function (o, i) {
										var m;
										for (m = 0; m < this.size; m++)
											o.call(
												i || this,
												this.list[m].val,
												this.list[m].key,
												this,
											);
									}),
									(u.prototype.indexOf = function (o) {
										var i;
										for (i = 0; i < this.size; i++)
											if (this.isEqual(this.list[i].key, o)) return i;
										return -1;
									}),
									(u.prototype.isEqual = (o, i) =>
										o === i || (o !== o && i !== i)),
									(a.exports = u);
							},
							{},
						],
						3: [
							(s, a, y) => {
								var u = s("map-or-similar");
								a.exports = (n) => {
									var I = new u(!1),
										r = [];
									return (d) => {
										var p = () => {
											var h = I,
												w,
												R,
												S = arguments.length - 1,
												D = Array(S + 1),
												T = !0,
												k;
											if ((p.numArgs || p.numArgs === 0) && p.numArgs !== S + 1)
												throw new Error(
													"Memoizerific functions should always be called with the same number of arguments",
												);
											for (k = 0; k < S; k++) {
												if (
													((D[k] = { cacheItem: h, arg: arguments[k] }),
													h.has(arguments[k]))
												) {
													h = h.get(arguments[k]);
													continue;
												}
												(T = !1),
													(w = new u(!1)),
													h.set(arguments[k], w),
													(h = w);
											}
											return (
												T &&
													(h.has(arguments[S])
														? (R = h.get(arguments[S]))
														: (T = !1)),
												T ||
													((R = d.apply(null, arguments)),
													h.set(arguments[S], R)),
												n > 0 &&
													((D[S] = { cacheItem: h, arg: arguments[S] }),
													T ? o(r, D) : r.push(D),
													r.length > n && i(r.shift())),
												(p.wasMemoized = T),
												(p.numArgs = S + 1),
												R
											);
										};
										return (
											(p.limit = n),
											(p.wasMemoized = !1),
											(p.cache = I),
											(p.lru = r),
											p
										);
									};
								};
								function o(n, I) {
									var r = n.length,
										d = I.length,
										p,
										h,
										w;
									for (h = 0; h < r; h++) {
										for (p = !0, w = 0; w < d; w++)
											if (!m(n[h][w].arg, I[w].arg)) {
												p = !1;
												break;
											}
										if (p) break;
									}
									n.push(n.splice(h, 1)[0]);
								}
								function i(n) {
									var I = n.length,
										r = n[I - 1],
										d,
										p;
									for (
										r.cacheItem.delete(r.arg), p = I - 2;
										p >= 0 &&
										((r = n[p]), (d = r.cacheItem.get(r.arg)), !d || !d.size);
										p--
									)
										r.cacheItem.delete(r.arg);
								}
								function m(n, I) {
									return n === I || (n !== n && I !== I);
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
		f();
		g();
		b();
		f();
		g();
		b();
		f();
		g();
		b();
		f();
		g();
		b();
		var c = __REACT__,
			{
				Children: $e,
				Component: Je,
				Fragment: M,
				Profiler: Qe,
				PureComponent: Xe,
				StrictMode: et,
				Suspense: tt,
				__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ot,
				cloneElement: nt,
				createContext: rt,
				createElement: N,
				createFactory: it,
				createRef: lt,
				forwardRef: at,
				isValidElement: ct,
				lazy: st,
				memo: Q,
				startTransition: dt,
				unstable_act: pt,
				useCallback: X,
				useContext: ut,
				useDebugValue: It,
				useDeferredValue: mt,
				useEffect: O,
				useId: ht,
				useImperativeHandle: ft,
				useInsertionEffect: gt,
				useLayoutEffect: bt,
				useMemo: yt,
				useReducer: wt,
				useRef: ee,
				useState: z,
				useSyncExternalStore: St,
				useTransition: vt,
				version: kt,
			} = __REACT__;
		f();
		g();
		b();
		var Rt = __STORYBOOK_API__,
			{
				ActiveTabs: Tt,
				Consumer: At,
				ManagerContext: xt,
				Provider: Ot,
				RequestResponseError: Lt,
				addons: H,
				combineParameters: Bt,
				controlOrMetaKey: Pt,
				controlOrMetaSymbol: Dt,
				eventMatchesShortcut: Mt,
				eventToShortcut: Vt,
				experimental_MockUniversalStore: Ut,
				experimental_UniversalStore: Nt,
				experimental_requestResponse: zt,
				experimental_useUniversalStore: Ht,
				isMacLike: Gt,
				isShortcutTaken: Ft,
				keyToSymbol: qt,
				merge: Wt,
				mockChannel: Yt,
				optionOrAltSymbol: jt,
				shortcutMatchesShortcut: Kt,
				shortcutToHumanString: Zt,
				types: te,
				useAddonState: $t,
				useArgTypes: Jt,
				useArgs: Qt,
				useChannel: Xt,
				useGlobalTypes: eo,
				useGlobals: G,
				useParameter: F,
				useSharedState: to,
				useStoryPrepared: oo,
				useStorybookApi: oe,
				useStorybookState: no,
			} = __STORYBOOK_API__;
		f();
		g();
		b();
		var co = __STORYBOOK_COMPONENTS__,
			{
				A: so,
				ActionBar: po,
				AddonPanel: uo,
				Badge: Io,
				Bar: mo,
				Blockquote: ho,
				Button: fo,
				ClipboardCode: go,
				Code: bo,
				DL: yo,
				Div: wo,
				DocumentWrapper: So,
				EmptyTabContent: vo,
				ErrorFormatter: ko,
				FlexBar: Co,
				Form: _o,
				H1: Eo,
				H2: Ro,
				H3: To,
				H4: Ao,
				H5: xo,
				H6: Oo,
				HR: Lo,
				IconButton: L,
				IconButtonSkeleton: Bo,
				Icons: Po,
				Img: Do,
				LI: Mo,
				Link: Vo,
				ListItem: Uo,
				Loader: No,
				Modal: zo,
				OL: Ho,
				P: Go,
				Placeholder: Fo,
				Pre: qo,
				ProgressSpinner: Wo,
				ResetWrapper: Yo,
				ScrollArea: jo,
				Separator: Ko,
				Spaced: Zo,
				Span: $o,
				StorybookIcon: Jo,
				StorybookLogo: Qo,
				Symbols: Xo,
				SyntaxHighlighter: en,
				TT: tn,
				TabBar: on,
				TabButton: nn,
				TabWrapper: rn,
				Table: ln,
				Tabs: an,
				TabsState: cn,
				TooltipLinkList: q,
				TooltipMessage: sn,
				TooltipNote: dn,
				UL: pn,
				WithTooltip: W,
				WithTooltipPure: un,
				Zoom: In,
				codeCommon: mn,
				components: hn,
				createCopyToClipboardFunction: fn,
				getStoryHref: gn,
				icons: bn,
				interleaveSeparators: yn,
				nameSpaceClassNames: wn,
				resetComponents: Sn,
				withReset: vn,
			} = __STORYBOOK_COMPONENTS__;
		f();
		g();
		b();
		var Rn = __STORYBOOK_THEMING__,
			{
				CacheProvider: Tn,
				ClassNames: An,
				Global: Y,
				ThemeProvider: xn,
				background: On,
				color: Ln,
				convert: Bn,
				create: Pn,
				createCache: Dn,
				createGlobal: Mn,
				createReset: Vn,
				css: Un,
				darken: Nn,
				ensure: zn,
				ignoreSsrWarning: Hn,
				isPropValid: Gn,
				jsx: Fn,
				keyframes: qn,
				lighten: Wn,
				styled: v,
				themes: Yn,
				typography: jn,
				useTheme: Kn,
				withTheme: Zn,
			} = __STORYBOOK_THEMING__;
		f();
		g();
		b();
		var er = __STORYBOOK_ICONS__,
			{
				AccessibilityAltIcon: tr,
				AccessibilityIcon: or,
				AccessibilityIgnoredIcon: nr,
				AddIcon: rr,
				AdminIcon: ir,
				AlertAltIcon: lr,
				AlertIcon: ar,
				AlignLeftIcon: cr,
				AlignRightIcon: sr,
				AppleIcon: dr,
				ArrowBottomLeftIcon: pr,
				ArrowBottomRightIcon: ur,
				ArrowDownIcon: Ir,
				ArrowLeftIcon: mr,
				ArrowRightIcon: hr,
				ArrowSolidDownIcon: fr,
				ArrowSolidLeftIcon: gr,
				ArrowSolidRightIcon: br,
				ArrowSolidUpIcon: yr,
				ArrowTopLeftIcon: wr,
				ArrowTopRightIcon: Sr,
				ArrowUpIcon: vr,
				AzureDevOpsIcon: kr,
				BackIcon: Cr,
				BasketIcon: _r,
				BatchAcceptIcon: Er,
				BatchDenyIcon: Rr,
				BeakerIcon: Tr,
				BellIcon: Ar,
				BitbucketIcon: xr,
				BoldIcon: Or,
				BookIcon: Lr,
				BookmarkHollowIcon: Br,
				BookmarkIcon: Pr,
				BottomBarIcon: Dr,
				BottomBarToggleIcon: Mr,
				BoxIcon: Vr,
				BranchIcon: Ur,
				BrowserIcon: ne,
				ButtonIcon: Nr,
				CPUIcon: zr,
				CalendarIcon: Hr,
				CameraIcon: Gr,
				CameraStabilizeIcon: Fr,
				CategoryIcon: qr,
				CertificateIcon: Wr,
				ChangedIcon: Yr,
				ChatIcon: jr,
				CheckIcon: Kr,
				ChevronDownIcon: Zr,
				ChevronLeftIcon: $r,
				ChevronRightIcon: Jr,
				ChevronSmallDownIcon: Qr,
				ChevronSmallLeftIcon: Xr,
				ChevronSmallRightIcon: ei,
				ChevronSmallUpIcon: ti,
				ChevronUpIcon: oi,
				ChromaticIcon: ni,
				ChromeIcon: ri,
				CircleHollowIcon: ii,
				CircleIcon: li,
				ClearIcon: ai,
				CloseAltIcon: ci,
				CloseIcon: si,
				CloudHollowIcon: di,
				CloudIcon: pi,
				CogIcon: ui,
				CollapseIcon: Ii,
				CommandIcon: mi,
				CommentAddIcon: hi,
				CommentIcon: fi,
				CommentsIcon: gi,
				CommitIcon: bi,
				CompassIcon: yi,
				ComponentDrivenIcon: wi,
				ComponentIcon: Si,
				ContrastIcon: vi,
				ContrastIgnoredIcon: ki,
				ControlsIcon: Ci,
				CopyIcon: _i,
				CreditIcon: Ei,
				CrossIcon: Ri,
				DashboardIcon: Ti,
				DatabaseIcon: Ai,
				DeleteIcon: xi,
				DiamondIcon: Oi,
				DirectionIcon: Li,
				DiscordIcon: Bi,
				DocChartIcon: Pi,
				DocListIcon: Di,
				DocumentIcon: Mi,
				DownloadIcon: Vi,
				DragIcon: Ui,
				EditIcon: Ni,
				EllipsisIcon: zi,
				EmailIcon: Hi,
				ExpandAltIcon: Gi,
				ExpandIcon: Fi,
				EyeCloseIcon: qi,
				EyeIcon: Wi,
				FaceHappyIcon: Yi,
				FaceNeutralIcon: ji,
				FaceSadIcon: Ki,
				FacebookIcon: Zi,
				FailedIcon: $i,
				FastForwardIcon: Ji,
				FigmaIcon: Qi,
				FilterIcon: Xi,
				FlagIcon: el,
				FolderIcon: tl,
				FormIcon: ol,
				GDriveIcon: nl,
				GithubIcon: rl,
				GitlabIcon: il,
				GlobeIcon: ll,
				GoogleIcon: al,
				GraphBarIcon: cl,
				GraphLineIcon: sl,
				GraphqlIcon: dl,
				GridAltIcon: pl,
				GridIcon: ul,
				GrowIcon: j,
				HeartHollowIcon: Il,
				HeartIcon: ml,
				HomeIcon: hl,
				HourglassIcon: fl,
				InfoIcon: gl,
				ItalicIcon: bl,
				JumpToIcon: yl,
				KeyIcon: wl,
				LightningIcon: Sl,
				LightningOffIcon: vl,
				LinkBrokenIcon: kl,
				LinkIcon: Cl,
				LinkedinIcon: _l,
				LinuxIcon: El,
				ListOrderedIcon: Rl,
				ListUnorderedIcon: Tl,
				LocationIcon: Al,
				LockIcon: xl,
				MarkdownIcon: Ol,
				MarkupIcon: Ll,
				MediumIcon: Bl,
				MemoryIcon: Pl,
				MenuIcon: Dl,
				MergeIcon: Ml,
				MirrorIcon: Vl,
				MobileIcon: re,
				MoonIcon: Ul,
				NutIcon: Nl,
				OutboxIcon: zl,
				OutlineIcon: Hl,
				PaintBrushIcon: Gl,
				PaperClipIcon: Fl,
				ParagraphIcon: ql,
				PassedIcon: Wl,
				PhoneIcon: Yl,
				PhotoDragIcon: jl,
				PhotoIcon: Kl,
				PhotoStabilizeIcon: Zl,
				PinAltIcon: $l,
				PinIcon: Jl,
				PlayAllHollowIcon: Ql,
				PlayBackIcon: Xl,
				PlayHollowIcon: ea,
				PlayIcon: ta,
				PlayNextIcon: oa,
				PlusIcon: na,
				PointerDefaultIcon: ra,
				PointerHandIcon: ia,
				PowerIcon: la,
				PrintIcon: aa,
				ProceedIcon: ca,
				ProfileIcon: sa,
				PullRequestIcon: da,
				QuestionIcon: pa,
				RSSIcon: ua,
				RedirectIcon: Ia,
				ReduxIcon: ma,
				RefreshIcon: ie,
				ReplyIcon: ha,
				RepoIcon: fa,
				RequestChangeIcon: ga,
				RewindIcon: ba,
				RulerIcon: ya,
				SaveIcon: wa,
				SearchIcon: Sa,
				ShareAltIcon: va,
				ShareIcon: ka,
				ShieldIcon: Ca,
				SideBySideIcon: _a,
				SidebarAltIcon: Ea,
				SidebarAltToggleIcon: Ra,
				SidebarIcon: Ta,
				SidebarToggleIcon: Aa,
				SpeakerIcon: xa,
				StackedIcon: Oa,
				StarHollowIcon: La,
				StarIcon: Ba,
				StatusFailIcon: Pa,
				StatusIcon: Da,
				StatusPassIcon: Ma,
				StatusWarnIcon: Va,
				StickerIcon: Ua,
				StopAltHollowIcon: Na,
				StopAltIcon: za,
				StopIcon: Ha,
				StorybookIcon: Ga,
				StructureIcon: Fa,
				SubtractIcon: qa,
				SunIcon: Wa,
				SupportIcon: Ya,
				SweepIcon: ja,
				SwitchAltIcon: Ka,
				SyncIcon: Za,
				TabletIcon: le,
				ThumbsUpIcon: $a,
				TimeIcon: Ja,
				TimerIcon: Qa,
				TransferIcon: K,
				TrashIcon: Xa,
				TwitterIcon: ec,
				TypeIcon: tc,
				UbuntuIcon: oc,
				UndoIcon: nc,
				UnfoldIcon: rc,
				UnlockIcon: ic,
				UnpinIcon: lc,
				UploadIcon: ac,
				UserAddIcon: cc,
				UserAltIcon: sc,
				UserIcon: dc,
				UsersIcon: pc,
				VSCodeIcon: uc,
				VerifiedIcon: Ic,
				VideoIcon: mc,
				WandIcon: hc,
				WatchIcon: fc,
				WindowsIcon: gc,
				WrenchIcon: bc,
				XIcon: yc,
				YoutubeIcon: wc,
				ZoomIcon: Sc,
				ZoomOutIcon: vc,
				ZoomResetIcon: kc,
				iconList: Cc,
			} = __STORYBOOK_ICONS__;
		var $ = Se(ce()),
			B = "storybook/viewport",
			A = "viewport",
			pe = {
				mobile1: {
					name: "Small mobile",
					styles: { height: "568px", width: "320px" },
					type: "mobile",
				},
				mobile2: {
					name: "Large mobile",
					styles: { height: "896px", width: "414px" },
					type: "mobile",
				},
				tablet: {
					name: "Tablet",
					styles: { height: "1112px", width: "834px" },
					type: "tablet",
				},
			},
			P = {
				name: "Reset viewport",
				styles: { height: "100%", width: "100%" },
				type: "desktop",
			},
			ke = { [A]: { value: void 0, isRotated: !1 } },
			Ce = { viewport: "reset", viewportRotated: !1 },
			_e = FEATURES?.viewportStoryGlobals ? ke : Ce,
			ue = (e, t) => e.indexOf(t),
			Ee = (e, t) => {
				const l = ue(e, t);
				return l === e.length - 1 ? e[0] : e[l + 1];
			},
			Re = (e, t) => {
				const l = ue(e, t);
				return l < 1 ? e[e.length - 1] : e[l - 1];
			},
			Ie = async (e, t, l, s) => {
				await e.setAddonShortcut(B, {
					label: "Previous viewport",
					defaultShortcut: ["alt", "shift", "V"],
					actionName: "previous",
					action: () => {
						l({ viewport: Re(s, t) });
					},
				}),
					await e.setAddonShortcut(B, {
						label: "Next viewport",
						defaultShortcut: ["alt", "V"],
						actionName: "next",
						action: () => {
							l({ viewport: Ee(s, t) });
						},
					}),
					await e.setAddonShortcut(B, {
						label: "Reset viewport",
						defaultShortcut: ["alt", "control", "V"],
						actionName: "reset",
						action: () => {
							l(_e);
						},
					});
			},
			Te = v.div(() => ({ display: "inline-flex", alignItems: "center" })),
			se = v.div(({ theme: e }) => ({
				display: "inline-block",
				textDecoration: "none",
				padding: 10,
				fontWeight: e.typography.weight.bold,
				fontSize: e.typography.size.s2 - 1,
				lineHeight: "1",
				height: 40,
				border: "none",
				borderTop: "3px solid transparent",
				borderBottom: "3px solid transparent",
				background: "transparent",
			})),
			Ae = v(L)(() => ({ display: "inline-flex", alignItems: "center" })),
			xe = v.div(({ theme: e }) => ({
				fontSize: e.typography.size.s2 - 1,
				marginLeft: 10,
			})),
			Oe = {
				desktop: c.createElement(ne, null),
				mobile: c.createElement(re, null),
				tablet: c.createElement(le, null),
				other: c.createElement(M, null),
			},
			Le = ({ api: e }) => {
				const t = F(A),
					[l, s, a] = G(),
					[y, u] = z(!1),
					{ options: o = pe, disable: i } = t || {},
					m = l?.[A] || {},
					n = m.value,
					I = m.isRotated,
					r = o[n] || P,
					d = y || r !== P,
					p = A in a,
					h = Object.keys(o).length;
				if (
					(O(() => {
						Ie(e, n, s, Object.keys(o));
					}, [o, n, s, e]),
					r.styles === null || !o || h < 1)
				)
					return null;
				if (typeof r.styles == "function")
					return (
						console.warn(
							"Addon Viewport no longer supports dynamic styles using a function, use css calc() instead",
						),
						null
					);
				const w = I ? r.styles.height : r.styles.width,
					R = I ? r.styles.width : r.styles.height;
				return i
					? null
					: c.createElement(Be, {
							item: r,
							updateGlobals: s,
							viewportMap: o,
							viewportName: n,
							isRotated: I,
							setIsTooltipVisible: u,
							isLocked: p,
							isActive: d,
							width: w,
							height: R,
						});
			},
			Be = c.memo((e) => {
				const {
						item: t,
						viewportMap: l,
						viewportName: s,
						isRotated: a,
						updateGlobals: y,
						setIsTooltipVisible: u,
						isLocked: o,
						isActive: i,
						width: m,
						height: n,
					} = e,
					I = X((r) => y({ [A]: r }), [y]);
				return c.createElement(
					M,
					null,
					c.createElement(
						W,
						{
							placement: "bottom",
							tooltip: ({ onHide: r }) =>
								c.createElement(q, {
									links: [
										...(length > 0 && t !== P
											? [
													{
														id: "reset",
														title: "Reset viewport",
														icon: c.createElement(ie, null),
														onClick: () => {
															I({ value: void 0, isRotated: !1 }), r();
														},
													},
												]
											: []),
										...Object.entries(l).map(([d, p]) => ({
											id: d,
											title: p.name,
											icon: Oe[p.type],
											active: d === s,
											onClick: () => {
												I({ value: d, isRotated: !1 }), r();
											},
										})),
									],
								}),
							closeOnOutsideClick: !0,
							onVisibleChange: u,
						},
						c.createElement(
							Ae,
							{
								disabled: o,
								key: "viewport",
								title: "Change the size of the preview",
								active: i,
								onDoubleClick: () => {
									I({ value: void 0, isRotated: !1 });
								},
							},
							c.createElement(j, null),
							t !== P
								? c.createElement(xe, null, t.name, " ", a ? "(L)" : "(P)")
								: null,
						),
					),
					c.createElement(Y, {
						styles: {
							'iframe[data-is-storybook="true"]': { width: m, height: n },
						},
					}),
					t !== P
						? c.createElement(
								Te,
								null,
								c.createElement(
									se,
									{ title: "Viewport width" },
									m.replace("px", ""),
								),
								o
									? "/"
									: c.createElement(
											L,
											{
												key: "viewport-rotate",
												title: "Rotate viewport",
												onClick: () => {
													I({ value: s, isRotated: !a });
												},
											},
											c.createElement(K, null),
										),
								c.createElement(
									se,
									{ title: "Viewport height" },
									n.replace("px", ""),
								),
							)
						: null,
				);
			}),
			Pe = (0, $.default)(50)((e) => [
				...De,
				...Object.entries(e).map(([t, { name: l, ...s }]) => ({
					...s,
					id: t,
					title: l,
				})),
			]),
			V = { id: "reset", title: "Reset viewport", styles: null, type: "other" },
			De = [V],
			Me = (0, $.default)(50)((e, t, l, s) =>
				e
					.filter((a) => a.id !== V.id || t.id !== a.id)
					.map((a) => ({
						...a,
						onClick: () => {
							l({ viewport: a.id }), s();
						},
					})),
			),
			Ve = ({ width: e, height: t, ...l }) => ({ ...l, height: e, width: t }),
			Ue = v.div(() => ({ display: "inline-flex", alignItems: "center" })),
			de = v.div(({ theme: e }) => ({
				display: "inline-block",
				textDecoration: "none",
				padding: 10,
				fontWeight: e.typography.weight.bold,
				fontSize: e.typography.size.s2 - 1,
				lineHeight: "1",
				height: 40,
				border: "none",
				borderTop: "3px solid transparent",
				borderBottom: "3px solid transparent",
				background: "transparent",
			})),
			Ne = v(L)(() => ({ display: "inline-flex", alignItems: "center" })),
			ze = v.div(({ theme: e }) => ({
				fontSize: e.typography.size.s2 - 1,
				marginLeft: 10,
			})),
			He = (e, t, l) => {
				if (t === null) return;
				const s = typeof t == "function" ? t(e) : t;
				return l ? Ve(s) : s;
			},
			Ge = Q(() => {
				const [e, t] = G(),
					{
						viewports: l = pe,
						defaultOrientation: s,
						defaultViewport: a,
						disable: y,
					} = F(A, {}),
					u = Pe(l),
					o = oe(),
					[i, m] = z(!1);
				a &&
					!u.find((d) => d.id === a) &&
					console.warn(
						`Cannot find "defaultViewport" of "${a}" in addon-viewport configs, please check the "viewports" setting in the configuration.`,
					),
					O(() => {
						Ie(o, e, t, Object.keys(l));
					}, [l, e, e.viewport, t, o]),
					O(() => {
						const d = s === "landscape";
						((a && e.viewport !== a) || (s && e.viewportRotated !== d)) &&
							t({ viewport: a, viewportRotated: d });
					}, [s, a, t]);
				const n =
						u.find((d) => d.id === e.viewport) ||
						u.find((d) => d.id === a) ||
						u.find((d) => d.default) ||
						V,
					I = ee(),
					r = He(I.current, n.styles, e.viewportRotated);
				return (
					O(() => {
						I.current = r;
					}, [n]),
					y || Object.entries(l).length === 0
						? null
						: c.createElement(
								M,
								null,
								c.createElement(
									W,
									{
										placement: "top",
										tooltip: ({ onHide: d }) =>
											c.createElement(q, { links: Me(u, n, t, d) }),
										closeOnOutsideClick: !0,
										onVisibleChange: m,
									},
									c.createElement(
										Ne,
										{
											key: "viewport",
											title: "Change the size of the preview",
											active: i || !!r,
											onDoubleClick: () => {
												t({ viewport: V.id });
											},
										},
										c.createElement(j, null),
										r
											? c.createElement(
													ze,
													null,
													e.viewportRotated
														? `${n.title} (L)`
														: `${n.title} (P)`,
												)
											: null,
									),
								),
								r
									? c.createElement(
											Ue,
											null,
											c.createElement(Y, {
												styles: {
													'iframe[data-is-storybook="true"]': {
														...(r || { width: "100%", height: "100%" }),
													},
												},
											}),
											c.createElement(
												de,
												{ title: "Viewport width" },
												r.width.replace("px", ""),
											),
											c.createElement(
												L,
												{
													key: "viewport-rotate",
													title: "Rotate viewport",
													onClick: () => {
														t({ viewportRotated: !e.viewportRotated });
													},
												},
												c.createElement(K, null),
											),
											c.createElement(
												de,
												{ title: "Viewport height" },
												r.height.replace("px", ""),
											),
										)
									: null,
							)
				);
			});
		H.register(B, (e) => {
			H.add(B, {
				title: "viewport / media-queries",
				type: te.TOOL,
				match: ({ viewMode: t, tabId: l }) => t === "story" && !l,
				render: () =>
					FEATURES?.viewportStoryGlobals ? N(Le, { api: e }) : N(Ge, null),
			});
		});
	})();
} catch (e) {
	console.error(
		"[Storybook] One of your manager-entries failed: " + import.meta.url,
		e,
	);
}

try {
	(() => {
		var l = __REACT__,
			{
				Children: se,
				Component: ie,
				Fragment: ue,
				Profiler: de,
				PureComponent: ce,
				StrictMode: pe,
				Suspense: me,
				__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: be,
				cloneElement: _e,
				createContext: ye,
				createElement: ke,
				createFactory: Se,
				createRef: Te,
				forwardRef: ve,
				isValidElement: Ce,
				lazy: Oe,
				memo: fe,
				startTransition: Ie,
				unstable_act: Ee,
				useCallback: v,
				useContext: xe,
				useDebugValue: ge,
				useDeferredValue: Ae,
				useEffect: x,
				useId: Re,
				useImperativeHandle: he,
				useInsertionEffect: Le,
				useLayoutEffect: De,
				useMemo: we,
				useReducer: Be,
				useRef: L,
				useState: D,
				useSyncExternalStore: Pe,
				useTransition: Me,
				version: Ne,
			} = __REACT__;
		var Ge = __STORYBOOK_API__,
			{
				ActiveTabs: We,
				Consumer: Ke,
				ManagerContext: Ye,
				Provider: $e,
				RequestResponseError: qe,
				addons: g,
				combineParameters: ze,
				controlOrMetaKey: je,
				controlOrMetaSymbol: Ze,
				eventMatchesShortcut: Je,
				eventToShortcut: Qe,
				experimental_MockUniversalStore: Xe,
				experimental_UniversalStore: et,
				experimental_requestResponse: tt,
				experimental_useUniversalStore: ot,
				isMacLike: rt,
				isShortcutTaken: nt,
				keyToSymbol: lt,
				merge: at,
				mockChannel: st,
				optionOrAltSymbol: it,
				shortcutMatchesShortcut: ut,
				shortcutToHumanString: dt,
				types: w,
				useAddonState: ct,
				useArgTypes: pt,
				useArgs: mt,
				useChannel: bt,
				useGlobalTypes: B,
				useGlobals: A,
				useParameter: _t,
				useSharedState: yt,
				useStoryPrepared: kt,
				useStorybookApi: P,
				useStorybookState: St,
			} = __STORYBOOK_API__;
		var ft = __STORYBOOK_COMPONENTS__,
			{
				A: It,
				ActionBar: Et,
				AddonPanel: xt,
				Badge: gt,
				Bar: At,
				Blockquote: Rt,
				Button: ht,
				ClipboardCode: Lt,
				Code: Dt,
				DL: wt,
				Div: Bt,
				DocumentWrapper: Pt,
				EmptyTabContent: Mt,
				ErrorFormatter: Nt,
				FlexBar: Ut,
				Form: Vt,
				H1: Ht,
				H2: Ft,
				H3: Gt,
				H4: Wt,
				H5: Kt,
				H6: Yt,
				HR: $t,
				IconButton: M,
				IconButtonSkeleton: qt,
				Icons: R,
				Img: zt,
				LI: jt,
				Link: Zt,
				ListItem: Jt,
				Loader: Qt,
				Modal: Xt,
				OL: eo,
				P: to,
				Placeholder: oo,
				Pre: ro,
				ProgressSpinner: no,
				ResetWrapper: lo,
				ScrollArea: ao,
				Separator: N,
				Spaced: so,
				Span: io,
				StorybookIcon: uo,
				StorybookLogo: co,
				Symbols: po,
				SyntaxHighlighter: mo,
				TT: bo,
				TabBar: _o,
				TabButton: yo,
				TabWrapper: ko,
				Table: So,
				Tabs: To,
				TabsState: vo,
				TooltipLinkList: U,
				TooltipMessage: Co,
				TooltipNote: Oo,
				UL: fo,
				WithTooltip: V,
				WithTooltipPure: Io,
				Zoom: Eo,
				codeCommon: xo,
				components: go,
				createCopyToClipboardFunction: Ao,
				getStoryHref: Ro,
				icons: ho,
				interleaveSeparators: Lo,
				nameSpaceClassNames: Do,
				resetComponents: wo,
				withReset: Bo,
			} = __STORYBOOK_COMPONENTS__;
		var W = { type: "item", value: "" },
			K = (o, t) => ({
				...t,
				name: t.name || o,
				description: t.description || o,
				toolbar: {
					...t.toolbar,
					items: t.toolbar.items.map((e) => {
						const r = typeof e == "string" ? { value: e, title: e } : e;
						return (
							r.type === "reset" &&
								t.toolbar.icon &&
								((r.icon = t.toolbar.icon), (r.hideIcon = !0)),
							{ ...W, ...r }
						);
					}),
				},
			}),
			Y = ["reset"],
			$ = (o) => o.filter((t) => !Y.includes(t.type)).map((t) => t.value),
			_ = "addon-toolbars",
			q = async (o, t, e) => {
				e &&
					e.next &&
					(await o.setAddonShortcut(_, {
						label: e.next.label,
						defaultShortcut: e.next.keys,
						actionName: `${t}:next`,
						action: e.next.action,
					})),
					e &&
						e.previous &&
						(await o.setAddonShortcut(_, {
							label: e.previous.label,
							defaultShortcut: e.previous.keys,
							actionName: `${t}:previous`,
							action: e.previous.action,
						})),
					e &&
						e.reset &&
						(await o.setAddonShortcut(_, {
							label: e.reset.label,
							defaultShortcut: e.reset.keys,
							actionName: `${t}:reset`,
							action: e.reset.action,
						}));
			},
			z = (o) => (t) => {
				const {
						id: e,
						toolbar: { items: r, shortcuts: n },
					} = t,
					d = P(),
					[y, i] = A(),
					a = L([]),
					u = y[e],
					C = v(() => {
						i({ [e]: "" });
					}, [i]),
					O = v(() => {
						const s = a.current,
							p = s.indexOf(u),
							m = p === s.length - 1 ? 0 : p + 1,
							c = a.current[m];
						i({ [e]: c });
					}, [a, u, i]),
					f = v(() => {
						const s = a.current,
							p = s.indexOf(u),
							m = p > -1 ? p : 0,
							c = m === 0 ? s.length - 1 : m - 1,
							b = a.current[c];
						i({ [e]: b });
					}, [a, u, i]);
				return (
					x(() => {
						n &&
							q(d, e, {
								next: { ...n.next, action: O },
								previous: { ...n.previous, action: f },
								reset: { ...n.reset, action: C },
							});
					}, [d, e, n, O, f, C]),
					x(() => {
						a.current = $(r);
					}, []),
					l.createElement(o, { cycleValues: a.current, ...t })
				);
			},
			H = ({ currentValue: o, items: t }) =>
				o != null && t.find((e) => e.value === o && e.type !== "reset"),
			j = ({ currentValue: o, items: t }) => {
				const e = H({ currentValue: o, items: t });
				if (e) return e.icon;
			},
			Z = ({ currentValue: o, items: t }) => {
				const e = H({ currentValue: o, items: t });
				if (e) return e.title;
			},
			J = ({
				active: o,
				disabled: t,
				title: e,
				icon: r,
				description: n,
				onClick: d,
			}) =>
				l.createElement(
					M,
					{ active: o, title: n, disabled: t, onClick: t ? () => {} : d },
					r &&
						l.createElement(R, { icon: r, __suppressDeprecationWarning: !0 }),
					e ? `\xA0${e}` : null,
				),
			Q = ({
				right: o,
				title: t,
				value: e,
				icon: r,
				hideIcon: n,
				onClick: d,
				disabled: y,
				currentValue: i,
			}) => {
				const a = r && l.createElement(R, { style: { opacity: 1 }, icon: r }),
					u = {
						id: e ?? "_reset",
						active: i === e,
						right: o,
						title: t,
						disabled: y,
						onClick: d,
					};
				return r && !n && (u.icon = a), u;
			},
			X = z(
				({
					id: o,
					name: t,
					description: e,
					toolbar: {
						icon: r,
						items: n,
						title: d,
						preventDynamicIcon: y,
						dynamicTitle: i,
					},
				}) => {
					let [a, u, C] = A(),
						[O, f] = D(!1),
						s = a[o],
						p = !!s,
						m = o in C,
						c = r,
						b = d;
					y || (c = j({ currentValue: s, items: n }) || c),
						i && (b = Z({ currentValue: s, items: n }) || b),
						!b && !c && console.warn(`Toolbar '${t}' has no title or icon`);
					const F = v(
						(E) => {
							u({ [o]: E });
						},
						[o, u],
					);
					return l.createElement(
						V,
						{
							placement: "top",
							tooltip: ({ onHide: E }) => {
								const G = n
									.filter(({ type: I }) => {
										let h = !0;
										return I === "reset" && !s && (h = !1), h;
									})
									.map((I) =>
										Q({
											...I,
											currentValue: s,
											disabled: m,
											onClick: () => {
												F(I.value), E();
											},
										}),
									);
								return l.createElement(U, { links: G });
							},
							closeOnOutsideClick: !0,
							onVisibleChange: f,
						},
						l.createElement(J, {
							active: O || p,
							disabled: m,
							description: e || "",
							icon: c,
							title: b || "",
						}),
					);
				},
			),
			ee = () => {
				const o = B(),
					t = Object.keys(o).filter((e) => !!o[e].toolbar);
				return t.length
					? l.createElement(
							l.Fragment,
							null,
							l.createElement(N, null),
							t.map((e) => {
								const r = K(e, o[e]);
								return l.createElement(X, { key: e, id: e, ...r });
							}),
						)
					: null;
			};
		g.register(_, () =>
			g.add(_, {
				title: _,
				type: w.TOOL,
				match: ({ tabId: o }) => !o,
				render: () => l.createElement(ee, null),
			}),
		);
	})();
} catch (e) {
	console.error(
		"[Storybook] One of your manager-entries failed: " + import.meta.url,
		e,
	);
}

try {
	(() => {
		var v = __STORYBOOK_API__,
			{
				ActiveTabs: O,
				Consumer: T,
				ManagerContext: h,
				Provider: g,
				RequestResponseError: C,
				addons: n,
				combineParameters: U,
				controlOrMetaKey: w,
				controlOrMetaSymbol: f,
				eventMatchesShortcut: A,
				eventToShortcut: D,
				experimental_MockUniversalStore: x,
				experimental_UniversalStore: P,
				experimental_requestResponse: M,
				experimental_useUniversalStore: R,
				isMacLike: B,
				isShortcutTaken: E,
				keyToSymbol: I,
				merge: K,
				mockChannel: N,
				optionOrAltSymbol: G,
				shortcutMatchesShortcut: L,
				shortcutToHumanString: Y,
				types: q,
				useAddonState: F,
				useArgTypes: H,
				useArgs: j,
				useChannel: V,
				useGlobalTypes: z,
				useGlobals: J,
				useParameter: Q,
				useSharedState: W,
				useStoryPrepared: X,
				useStorybookApi: Z,
				useStorybookState: $,
			} = __STORYBOOK_API__;
		var a = (() => {
				let e;
				return (
					typeof window < "u"
						? (e = window)
						: typeof globalThis < "u"
							? (e = globalThis)
							: typeof window < "u"
								? (e = window)
								: typeof self < "u"
									? (e = self)
									: (e = {}),
					e
				);
			})(),
			i = "tag-filters",
			m = "static-filter";
		n.register(i, (e) => {
			const p = Object.entries(a.TAGS_OPTIONS ?? {}).reduce((o, t) => {
				const [r, u] = t;
				return u.excludeFromSidebar && (o[r] = !0), o;
			}, {});
			e.experimental_setFilter(m, (o) => {
				const t = o.tags ?? [];
				return (
					(t.includes("dev") || o.type === "docs") &&
					t.filter((r) => p[r]).length === 0
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

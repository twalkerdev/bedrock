try {
	(() => {
		var y = __STORYBOOK_API__,
			{
				ActiveTabs: b,
				Consumer: S,
				ManagerContext: v,
				Provider: C,
				RequestResponseError: E,
				addons: d,
				combineParameters: O,
				controlOrMetaKey: U,
				controlOrMetaSymbol: T,
				eventMatchesShortcut: D,
				eventToShortcut: A,
				experimental_MockUniversalStore: h,
				experimental_UniversalStore: R,
				experimental_requestResponse: w,
				experimental_useUniversalStore: I,
				isMacLike: P,
				isShortcutTaken: g,
				keyToSymbol: x,
				merge: M,
				mockChannel: N,
				optionOrAltSymbol: B,
				shortcutMatchesShortcut: K,
				shortcutToHumanString: V,
				types: f,
				useAddonState: q,
				useArgTypes: G,
				useArgs: L,
				useChannel: Y,
				useGlobalTypes: $,
				useGlobals: H,
				useParameter: Q,
				useSharedState: j,
				useStoryPrepared: z,
				useStorybookApi: F,
				useStorybookState: J,
			} = __STORYBOOK_API__;
		var e = "storybook/links",
			n = {
				NAVIGATE: `${e}/navigate`,
				REQUEST: `${e}/request`,
				RECEIVE: `${e}/receive`,
			};
		d.register(e, (o) => {
			o.on(n.REQUEST, ({ kind: p, name: l }) => {
				const u = o.storyId(p, l);
				o.emit(n.RECEIVE, u);
			});
		});
	})();
} catch (e) {
	console.error(
		"[Storybook] One of your manager-entries failed: " + import.meta.url,
		e,
	);
}

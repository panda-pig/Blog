declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"aws": {
"compare/security-group-vs-nacl.en.md": {
	id: "compare/security-group-vs-nacl.en.md";
  slug: "compare/security-group-vs-naclen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/security-group-vs-nacl.ja.md": {
	id: "compare/security-group-vs-nacl.ja.md";
  slug: "compare/security-group-vs-naclja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/security-group-vs-nacl.md": {
	id: "compare/security-group-vs-nacl.md";
  slug: "compare/security-group-vs-nacl";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-ec2.en.md": {
	id: "compute/amazon-ec2.en.md";
  slug: "compute/amazon-ec2en";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-ec2.ja.md": {
	id: "compute/amazon-ec2.ja.md";
  slug: "compute/amazon-ec2ja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-ec2.md": {
	id: "compute/amazon-ec2.md";
  slug: "compute/amazon-ec2";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/amazon-vpc.en.md": {
	id: "networking/amazon-vpc.en.md";
  slug: "networking/amazon-vpcen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/amazon-vpc.ja.md": {
	id: "networking/amazon-vpc.ja.md";
  slug: "networking/amazon-vpcja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/amazon-vpc.md": {
	id: "networking/amazon-vpc.md";
  slug: "networking/amazon-vpc";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/internet-gateway.en.md": {
	id: "networking/internet-gateway.en.md";
  slug: "networking/internet-gatewayen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/internet-gateway.ja.md": {
	id: "networking/internet-gateway.ja.md";
  slug: "networking/internet-gatewayja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/internet-gateway.md": {
	id: "networking/internet-gateway.md";
  slug: "networking/internet-gateway";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/nat-gateway.en.md": {
	id: "networking/nat-gateway.en.md";
  slug: "networking/nat-gatewayen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/nat-gateway.ja.md": {
	id: "networking/nat-gateway.ja.md";
  slug: "networking/nat-gatewayja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/nat-gateway.md": {
	id: "networking/nat-gateway.md";
  slug: "networking/nat-gateway";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/network-acl.en.md": {
	id: "networking/network-acl.en.md";
  slug: "networking/network-aclen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/network-acl.ja.md": {
	id: "networking/network-acl.ja.md";
  slug: "networking/network-aclja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/network-acl.md": {
	id: "networking/network-acl.md";
  slug: "networking/network-acl";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/security-group.en.md": {
	id: "networking/security-group.en.md";
  slug: "networking/security-groupen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/security-group.ja.md": {
	id: "networking/security-group.ja.md";
  slug: "networking/security-groupja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/security-group.md": {
	id: "networking/security-group.md";
  slug: "networking/security-group";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/subnet-route-table.en.md": {
	id: "networking/subnet-route-table.en.md";
  slug: "networking/subnet-route-tableen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/subnet-route-table.ja.md": {
	id: "networking/subnet-route-table.ja.md";
  slug: "networking/subnet-route-tableja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/subnet-route-table.md": {
	id: "networking/subnet-route-table.md";
  slug: "networking/subnet-route-table";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
};
"blog": {
"jlpt-grammar-deck-study-cards.en.md": {
	id: "jlpt-grammar-deck-study-cards.en.md";
  slug: "jlpt-grammar-deck-study-cards";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jlpt-grammar-deck-study-cards.ja.md": {
	id: "jlpt-grammar-deck-study-cards.ja.md";
  slug: "jlpt-grammar-deck-study-cards";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jlpt-grammar-deck-study-cards.md": {
	id: "jlpt-grammar-deck-study-cards.md";
  slug: "jlpt-grammar-deck-study-cards";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jlpt-sprint-desk-study-loop.en.md": {
	id: "jlpt-sprint-desk-study-loop.en.md";
  slug: "jlpt-sprint-desk-study-loop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jlpt-sprint-desk-study-loop.ja.md": {
	id: "jlpt-sprint-desk-study-loop.ja.md";
  slug: "jlpt-sprint-desk-study-loop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jlpt-sprint-desk-study-loop.md": {
	id: "jlpt-sprint-desk-study-loop.md";
  slug: "jlpt-sprint-desk-study-loop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"macos-chatgpt-codex-flickering-fix.en.md": {
	id: "macos-chatgpt-codex-flickering-fix.en.md";
  slug: "macos-chatgpt-codex-flickering-fix";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"macos-chatgpt-codex-flickering-fix.ja.md": {
	id: "macos-chatgpt-codex-flickering-fix.ja.md";
  slug: "macos-chatgpt-codex-flickering-fix";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"macos-chatgpt-codex-flickering-fix.md": {
	id: "macos-chatgpt-codex-flickering-fix.md";
  slug: "macos-chatgpt-codex-flickering-fix";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"welcome.en.md": {
	id: "welcome.en.md";
  slug: "welcome";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"welcome.ja.md": {
	id: "welcome.ja.md";
  slug: "welcome";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"welcome.md": {
	id: "welcome.md";
  slug: "welcome";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}

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
"architecture/cost-optimization.en.md": {
	id: "architecture/cost-optimization.en.md";
  slug: "architecture/cost-optimizationen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/cost-optimization.ja.md": {
	id: "architecture/cost-optimization.ja.md";
  slug: "architecture/cost-optimizationja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/cost-optimization.md": {
	id: "architecture/cost-optimization.md";
  slug: "architecture/cost-optimization";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/decoupling-event-driven-architecture.en.md": {
	id: "architecture/decoupling-event-driven-architecture.en.md";
  slug: "architecture/decoupling-event-driven-architectureen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/decoupling-event-driven-architecture.ja.md": {
	id: "architecture/decoupling-event-driven-architecture.ja.md";
  slug: "architecture/decoupling-event-driven-architectureja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/decoupling-event-driven-architecture.md": {
	id: "architecture/decoupling-event-driven-architecture.md";
  slug: "architecture/decoupling-event-driven-architecture";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/scalability-elasticity.en.md": {
	id: "architecture/scalability-elasticity.en.md";
  slug: "architecture/scalability-elasticityen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/scalability-elasticity.ja.md": {
	id: "architecture/scalability-elasticity.ja.md";
  slug: "architecture/scalability-elasticityja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/scalability-elasticity.md": {
	id: "architecture/scalability-elasticity.md";
  slug: "architecture/scalability-elasticity";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/serverless-architecture.en.md": {
	id: "architecture/serverless-architecture.en.md";
  slug: "architecture/serverless-architectureen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/serverless-architecture.ja.md": {
	id: "architecture/serverless-architecture.ja.md";
  slug: "architecture/serverless-architectureja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/serverless-architecture.md": {
	id: "architecture/serverless-architecture.md";
  slug: "architecture/serverless-architecture";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-concepts.en.md": {
	id: "cloud-practitioner/cloud-concepts.en.md";
  slug: "cloud-practitioner/cloud-conceptsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-concepts.ja.md": {
	id: "cloud-practitioner/cloud-concepts.ja.md";
  slug: "cloud-practitioner/cloud-conceptsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-concepts.md": {
	id: "cloud-practitioner/cloud-concepts.md";
  slug: "cloud-practitioner/cloud-concepts";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
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
"compute/ec2-auto-scaling.en.md": {
	id: "compute/ec2-auto-scaling.en.md";
  slug: "compute/ec2-auto-scalingen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/ec2-auto-scaling.ja.md": {
	id: "compute/ec2-auto-scaling.ja.md";
  slug: "compute/ec2-auto-scalingja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/ec2-auto-scaling.md": {
	id: "compute/ec2-auto-scaling.md";
  slug: "compute/ec2-auto-scaling";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-aurora.en.md": {
	id: "database/amazon-aurora.en.md";
  slug: "database/amazon-auroraen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-aurora.ja.md": {
	id: "database/amazon-aurora.ja.md";
  slug: "database/amazon-auroraja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-aurora.md": {
	id: "database/amazon-aurora.md";
  slug: "database/amazon-aurora";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-documentdb.en.md": {
	id: "database/amazon-documentdb.en.md";
  slug: "database/amazon-documentdben";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-documentdb.ja.md": {
	id: "database/amazon-documentdb.ja.md";
  slug: "database/amazon-documentdbja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-documentdb.md": {
	id: "database/amazon-documentdb.md";
  slug: "database/amazon-documentdb";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-dynamodb.en.md": {
	id: "database/amazon-dynamodb.en.md";
  slug: "database/amazon-dynamodben";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-dynamodb.ja.md": {
	id: "database/amazon-dynamodb.ja.md";
  slug: "database/amazon-dynamodbja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-dynamodb.md": {
	id: "database/amazon-dynamodb.md";
  slug: "database/amazon-dynamodb";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-elasticache.en.md": {
	id: "database/amazon-elasticache.en.md";
  slug: "database/amazon-elasticacheen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-elasticache.ja.md": {
	id: "database/amazon-elasticache.ja.md";
  slug: "database/amazon-elasticacheja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-elasticache.md": {
	id: "database/amazon-elasticache.md";
  slug: "database/amazon-elasticache";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-managed-blockchain.en.md": {
	id: "database/amazon-managed-blockchain.en.md";
  slug: "database/amazon-managed-blockchainen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-managed-blockchain.ja.md": {
	id: "database/amazon-managed-blockchain.ja.md";
  slug: "database/amazon-managed-blockchainja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-managed-blockchain.md": {
	id: "database/amazon-managed-blockchain.md";
  slug: "database/amazon-managed-blockchain";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-neptune.en.md": {
	id: "database/amazon-neptune.en.md";
  slug: "database/amazon-neptuneen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-neptune.ja.md": {
	id: "database/amazon-neptune.ja.md";
  slug: "database/amazon-neptuneja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-neptune.md": {
	id: "database/amazon-neptune.md";
  slug: "database/amazon-neptune";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-rds.en.md": {
	id: "database/amazon-rds.en.md";
  slug: "database/amazon-rdsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-rds.ja.md": {
	id: "database/amazon-rds.ja.md";
  slug: "database/amazon-rdsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-rds.md": {
	id: "database/amazon-rds.md";
  slug: "database/amazon-rds";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/dynamodb-accelerator-dax.en.md": {
	id: "database/dynamodb-accelerator-dax.en.md";
  slug: "database/dynamodb-accelerator-daxen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/dynamodb-accelerator-dax.ja.md": {
	id: "database/dynamodb-accelerator-dax.ja.md";
  slug: "database/dynamodb-accelerator-daxja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/dynamodb-accelerator-dax.md": {
	id: "database/dynamodb-accelerator-dax.md";
  slug: "database/dynamodb-accelerator-dax";
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
"storage/amazon-ebs.en.md": {
	id: "storage/amazon-ebs.en.md";
  slug: "storage/amazon-ebsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-ebs.ja.md": {
	id: "storage/amazon-ebs.ja.md";
  slug: "storage/amazon-ebsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-ebs.md": {
	id: "storage/amazon-ebs.md";
  slug: "storage/amazon-ebs";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-efs.en.md": {
	id: "storage/amazon-efs.en.md";
  slug: "storage/amazon-efsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-efs.ja.md": {
	id: "storage/amazon-efs.ja.md";
  slug: "storage/amazon-efsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-efs.md": {
	id: "storage/amazon-efs.md";
  slug: "storage/amazon-efs";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-fsx.en.md": {
	id: "storage/amazon-fsx.en.md";
  slug: "storage/amazon-fsxen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-fsx.ja.md": {
	id: "storage/amazon-fsx.ja.md";
  slug: "storage/amazon-fsxja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-fsx.md": {
	id: "storage/amazon-fsx.md";
  slug: "storage/amazon-fsx";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-s3.en.md": {
	id: "storage/amazon-s3.en.md";
  slug: "storage/amazon-s3en";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-s3.ja.md": {
	id: "storage/amazon-s3.ja.md";
  slug: "storage/amazon-s3ja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/amazon-s3.md": {
	id: "storage/amazon-s3.md";
  slug: "storage/amazon-s3";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-backup.en.md": {
	id: "storage/aws-backup.en.md";
  slug: "storage/aws-backupen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-backup.ja.md": {
	id: "storage/aws-backup.ja.md";
  slug: "storage/aws-backupja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-backup.md": {
	id: "storage/aws-backup.md";
  slug: "storage/aws-backup";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-elastic-disaster-recovery.en.md": {
	id: "storage/aws-elastic-disaster-recovery.en.md";
  slug: "storage/aws-elastic-disaster-recoveryen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-elastic-disaster-recovery.ja.md": {
	id: "storage/aws-elastic-disaster-recovery.ja.md";
  slug: "storage/aws-elastic-disaster-recoveryja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-elastic-disaster-recovery.md": {
	id: "storage/aws-elastic-disaster-recovery.md";
  slug: "storage/aws-elastic-disaster-recovery";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-storage-gateway.en.md": {
	id: "storage/aws-storage-gateway.en.md";
  slug: "storage/aws-storage-gatewayen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-storage-gateway.ja.md": {
	id: "storage/aws-storage-gateway.ja.md";
  slug: "storage/aws-storage-gatewayja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-storage-gateway.md": {
	id: "storage/aws-storage-gateway.md";
  slug: "storage/aws-storage-gateway";
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
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}

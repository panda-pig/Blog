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
"architecture/aws-shared-responsibility-model.en.md": {
	id: "architecture/aws-shared-responsibility-model.en.md";
  slug: "architecture/aws-shared-responsibility-modelen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/aws-shared-responsibility-model.ja.md": {
	id: "architecture/aws-shared-responsibility-model.ja.md";
  slug: "architecture/aws-shared-responsibility-modelja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/aws-shared-responsibility-model.md": {
	id: "architecture/aws-shared-responsibility-model.md";
  slug: "architecture/aws-shared-responsibility-model";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
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
"architecture/disaster-recovery-strategies.en.md": {
	id: "architecture/disaster-recovery-strategies.en.md";
  slug: "architecture/disaster-recovery-strategiesen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/disaster-recovery-strategies.ja.md": {
	id: "architecture/disaster-recovery-strategies.ja.md";
  slug: "architecture/disaster-recovery-strategiesja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/disaster-recovery-strategies.md": {
	id: "architecture/disaster-recovery-strategies.md";
  slug: "architecture/disaster-recovery-strategies";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/high-availability-fault-tolerance.en.md": {
	id: "architecture/high-availability-fault-tolerance.en.md";
  slug: "architecture/high-availability-fault-toleranceen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/high-availability-fault-tolerance.ja.md": {
	id: "architecture/high-availability-fault-tolerance.ja.md";
  slug: "architecture/high-availability-fault-toleranceja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/high-availability-fault-tolerance.md": {
	id: "architecture/high-availability-fault-tolerance.md";
  slug: "architecture/high-availability-fault-tolerance";
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
"cloud-practitioner/aws-global-infrastructure.en.md": {
	id: "cloud-practitioner/aws-global-infrastructure.en.md";
  slug: "cloud-practitioner/aws-global-infrastructureen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/aws-global-infrastructure.ja.md": {
	id: "cloud-practitioner/aws-global-infrastructure.ja.md";
  slug: "cloud-practitioner/aws-global-infrastructureja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/aws-global-infrastructure.md": {
	id: "cloud-practitioner/aws-global-infrastructure.md";
  slug: "cloud-practitioner/aws-global-infrastructure";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/client-server-model.en.md": {
	id: "cloud-practitioner/client-server-model.en.md";
  slug: "cloud-practitioner/client-server-modelen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/client-server-model.ja.md": {
	id: "cloud-practitioner/client-server-model.ja.md";
  slug: "cloud-practitioner/client-server-modelja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/client-server-model.md": {
	id: "cloud-practitioner/client-server-model.md";
  slug: "cloud-practitioner/client-server-model";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-computing-and-aws-benefits.en.md": {
	id: "cloud-practitioner/cloud-computing-and-aws-benefits.en.md";
  slug: "cloud-practitioner/cloud-computing-and-aws-benefitsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-computing-and-aws-benefits.ja.md": {
	id: "cloud-practitioner/cloud-computing-and-aws-benefits.ja.md";
  slug: "cloud-practitioner/cloud-computing-and-aws-benefitsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-computing-and-aws-benefits.md": {
	id: "cloud-practitioner/cloud-computing-and-aws-benefits.md";
  slug: "cloud-practitioner/cloud-computing-and-aws-benefits";
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
"cloud-practitioner/cloud-service-models-and-management-responsibility.en.md": {
	id: "cloud-practitioner/cloud-service-models-and-management-responsibility.en.md";
  slug: "cloud-practitioner/cloud-service-models-and-management-responsibilityen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-service-models-and-management-responsibility.ja.md": {
	id: "cloud-practitioner/cloud-service-models-and-management-responsibility.ja.md";
  slug: "cloud-practitioner/cloud-service-models-and-management-responsibilityja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-service-models-and-management-responsibility.md": {
	id: "cloud-practitioner/cloud-service-models-and-management-responsibility.md";
  slug: "cloud-practitioner/cloud-service-models-and-management-responsibility";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/client-vpn-vs-site-to-site-vpn-vs-privatelink-vs-direct-connect.en.md": {
	id: "compare/client-vpn-vs-site-to-site-vpn-vs-privatelink-vs-direct-connect.en.md";
  slug: "compare/client-vpn-vs-site-to-site-vpn-vs-privatelink-vs-direct-connecten";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/client-vpn-vs-site-to-site-vpn-vs-privatelink-vs-direct-connect.ja.md": {
	id: "compare/client-vpn-vs-site-to-site-vpn-vs-privatelink-vs-direct-connect.ja.md";
  slug: "compare/client-vpn-vs-site-to-site-vpn-vs-privatelink-vs-direct-connectja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/client-vpn-vs-site-to-site-vpn-vs-privatelink-vs-direct-connect.md": {
	id: "compare/client-vpn-vs-site-to-site-vpn-vs-privatelink-vs-direct-connect.md";
  slug: "compare/client-vpn-vs-site-to-site-vpn-vs-privatelink-vs-direct-connect";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/cloudwatch-vs-cloudtrail-vs-config.en.md": {
	id: "compare/cloudwatch-vs-cloudtrail-vs-config.en.md";
  slug: "compare/cloudwatch-vs-cloudtrail-vs-configen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/cloudwatch-vs-cloudtrail-vs-config.ja.md": {
	id: "compare/cloudwatch-vs-cloudtrail-vs-config.ja.md";
  slug: "compare/cloudwatch-vs-cloudtrail-vs-configja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/cloudwatch-vs-cloudtrail-vs-config.md": {
	id: "compare/cloudwatch-vs-cloudtrail-vs-config.md";
  slug: "compare/cloudwatch-vs-cloudtrail-vs-config";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/console-vs-cli-vs-sdk-vs-cloudformation.en.md": {
	id: "compare/console-vs-cli-vs-sdk-vs-cloudformation.en.md";
  slug: "compare/console-vs-cli-vs-sdk-vs-cloudformationen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/console-vs-cli-vs-sdk-vs-cloudformation.ja.md": {
	id: "compare/console-vs-cli-vs-sdk-vs-cloudformation.ja.md";
  slug: "compare/console-vs-cli-vs-sdk-vs-cloudformationja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/console-vs-cli-vs-sdk-vs-cloudformation.md": {
	id: "compare/console-vs-cli-vs-sdk-vs-cloudformation.md";
  slug: "compare/console-vs-cli-vs-sdk-vs-cloudformation";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/dax-vs-elasticache-vs-read-replica-vs-cloudfront.en.md": {
	id: "compare/dax-vs-elasticache-vs-read-replica-vs-cloudfront.en.md";
  slug: "compare/dax-vs-elasticache-vs-read-replica-vs-cloudfronten";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/dax-vs-elasticache-vs-read-replica-vs-cloudfront.ja.md": {
	id: "compare/dax-vs-elasticache-vs-read-replica-vs-cloudfront.ja.md";
  slug: "compare/dax-vs-elasticache-vs-read-replica-vs-cloudfrontja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/dax-vs-elasticache-vs-read-replica-vs-cloudfront.md": {
	id: "compare/dax-vs-elasticache-vs-read-replica-vs-cloudfront.md";
  slug: "compare/dax-vs-elasticache-vs-read-replica-vs-cloudfront";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/dms-vs-sct.en.md": {
	id: "compare/dms-vs-sct.en.md";
  slug: "compare/dms-vs-scten";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/dms-vs-sct.ja.md": {
	id: "compare/dms-vs-sct.ja.md";
  slug: "compare/dms-vs-sctja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/dms-vs-sct.md": {
	id: "compare/dms-vs-sct.md";
  slug: "compare/dms-vs-sct";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/drs-vs-aws-backup-vs-ebs-snapshot-vs-storage-gateway.en.md": {
	id: "compare/drs-vs-aws-backup-vs-ebs-snapshot-vs-storage-gateway.en.md";
  slug: "compare/drs-vs-aws-backup-vs-ebs-snapshot-vs-storage-gatewayen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/drs-vs-aws-backup-vs-ebs-snapshot-vs-storage-gateway.ja.md": {
	id: "compare/drs-vs-aws-backup-vs-ebs-snapshot-vs-storage-gateway.ja.md";
  slug: "compare/drs-vs-aws-backup-vs-ebs-snapshot-vs-storage-gatewayja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/drs-vs-aws-backup-vs-ebs-snapshot-vs-storage-gateway.md": {
	id: "compare/drs-vs-aws-backup-vs-ebs-snapshot-vs-storage-gateway.md";
  slug: "compare/drs-vs-aws-backup-vs-ebs-snapshot-vs-storage-gateway";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/ec2-vs-lambda-vs-fargate.en.md": {
	id: "compare/ec2-vs-lambda-vs-fargate.en.md";
  slug: "compare/ec2-vs-lambda-vs-fargateen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/ec2-vs-lambda-vs-fargate.ja.md": {
	id: "compare/ec2-vs-lambda-vs-fargate.ja.md";
  slug: "compare/ec2-vs-lambda-vs-fargateja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/ec2-vs-lambda-vs-fargate.md": {
	id: "compare/ec2-vs-lambda-vs-fargate.md";
  slug: "compare/ec2-vs-lambda-vs-fargate";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/ecs-vs-eks.en.md": {
	id: "compare/ecs-vs-eks.en.md";
  slug: "compare/ecs-vs-eksen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/ecs-vs-eks.ja.md": {
	id: "compare/ecs-vs-eks.ja.md";
  slug: "compare/ecs-vs-eksja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/ecs-vs-eks.md": {
	id: "compare/ecs-vs-eks.md";
  slug: "compare/ecs-vs-eks";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/multi-az-vs-multi-region.en.md": {
	id: "compare/multi-az-vs-multi-region.en.md";
  slug: "compare/multi-az-vs-multi-regionen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/multi-az-vs-multi-region.ja.md": {
	id: "compare/multi-az-vs-multi-region.ja.md";
  slug: "compare/multi-az-vs-multi-regionja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/multi-az-vs-multi-region.md": {
	id: "compare/multi-az-vs-multi-region.md";
  slug: "compare/multi-az-vs-multi-region";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/rds-vs-aurora-vs-dynamodb.en.md": {
	id: "compare/rds-vs-aurora-vs-dynamodb.en.md";
  slug: "compare/rds-vs-aurora-vs-dynamodben";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/rds-vs-aurora-vs-dynamodb.ja.md": {
	id: "compare/rds-vs-aurora-vs-dynamodb.ja.md";
  slug: "compare/rds-vs-aurora-vs-dynamodbja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/rds-vs-aurora-vs-dynamodb.md": {
	id: "compare/rds-vs-aurora-vs-dynamodb.md";
  slug: "compare/rds-vs-aurora-vs-dynamodb";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/rds-vs-dynamodb-vs-documentdb-vs-neptune.en.md": {
	id: "compare/rds-vs-dynamodb-vs-documentdb-vs-neptune.en.md";
  slug: "compare/rds-vs-dynamodb-vs-documentdb-vs-neptuneen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/rds-vs-dynamodb-vs-documentdb-vs-neptune.ja.md": {
	id: "compare/rds-vs-dynamodb-vs-documentdb-vs-neptune.ja.md";
  slug: "compare/rds-vs-dynamodb-vs-documentdb-vs-neptuneja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/rds-vs-dynamodb-vs-documentdb-vs-neptune.md": {
	id: "compare/rds-vs-dynamodb-vs-documentdb-vs-neptune.md";
  slug: "compare/rds-vs-dynamodb-vs-documentdb-vs-neptune";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/route-53-vs-cloudfront-vs-global-accelerator.en.md": {
	id: "compare/route-53-vs-cloudfront-vs-global-accelerator.en.md";
  slug: "compare/route-53-vs-cloudfront-vs-global-acceleratoren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/route-53-vs-cloudfront-vs-global-accelerator.ja.md": {
	id: "compare/route-53-vs-cloudfront-vs-global-accelerator.ja.md";
  slug: "compare/route-53-vs-cloudfront-vs-global-acceleratorja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/route-53-vs-cloudfront-vs-global-accelerator.md": {
	id: "compare/route-53-vs-cloudfront-vs-global-accelerator.md";
  slug: "compare/route-53-vs-cloudfront-vs-global-accelerator";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/s3-vs-ebs-vs-efs-vs-fsx.en.md": {
	id: "compare/s3-vs-ebs-vs-efs-vs-fsx.en.md";
  slug: "compare/s3-vs-ebs-vs-efs-vs-fsxen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/s3-vs-ebs-vs-efs-vs-fsx.ja.md": {
	id: "compare/s3-vs-ebs-vs-efs-vs-fsx.ja.md";
  slug: "compare/s3-vs-ebs-vs-efs-vs-fsxja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/s3-vs-ebs-vs-efs-vs-fsx.md": {
	id: "compare/s3-vs-ebs-vs-efs-vs-fsx.md";
  slug: "compare/s3-vs-ebs-vs-efs-vs-fsx";
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
"compare/sqs-vs-sns-vs-eventbridge.en.md": {
	id: "compare/sqs-vs-sns-vs-eventbridge.en.md";
  slug: "compare/sqs-vs-sns-vs-eventbridgeen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/sqs-vs-sns-vs-eventbridge.ja.md": {
	id: "compare/sqs-vs-sns-vs-eventbridge.ja.md";
  slug: "compare/sqs-vs-sns-vs-eventbridgeja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/sqs-vs-sns-vs-eventbridge.md": {
	id: "compare/sqs-vs-sns-vs-eventbridge.md";
  slug: "compare/sqs-vs-sns-vs-eventbridge";
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
"compute/amazon-ecr.en.md": {
	id: "compute/amazon-ecr.en.md";
  slug: "compute/amazon-ecren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-ecr.ja.md": {
	id: "compute/amazon-ecr.ja.md";
  slug: "compute/amazon-ecrja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-ecr.md": {
	id: "compute/amazon-ecr.md";
  slug: "compute/amazon-ecr";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-ecs.en.md": {
	id: "compute/amazon-ecs.en.md";
  slug: "compute/amazon-ecsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-ecs.ja.md": {
	id: "compute/amazon-ecs.ja.md";
  slug: "compute/amazon-ecsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-ecs.md": {
	id: "compute/amazon-ecs.md";
  slug: "compute/amazon-ecs";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-eks.en.md": {
	id: "compute/amazon-eks.en.md";
  slug: "compute/amazon-eksen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-eks.ja.md": {
	id: "compute/amazon-eks.ja.md";
  slug: "compute/amazon-eksja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-eks.md": {
	id: "compute/amazon-eks.md";
  slug: "compute/amazon-eks";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-lightsail.en.md": {
	id: "compute/amazon-lightsail.en.md";
  slug: "compute/amazon-lightsailen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-lightsail.ja.md": {
	id: "compute/amazon-lightsail.ja.md";
  slug: "compute/amazon-lightsailja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/amazon-lightsail.md": {
	id: "compute/amazon-lightsail.md";
  slug: "compute/amazon-lightsail";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-batch.en.md": {
	id: "compute/aws-batch.en.md";
  slug: "compute/aws-batchen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-batch.ja.md": {
	id: "compute/aws-batch.ja.md";
  slug: "compute/aws-batchja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-batch.md": {
	id: "compute/aws-batch.md";
  slug: "compute/aws-batch";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-elastic-beanstalk.en.md": {
	id: "compute/aws-elastic-beanstalk.en.md";
  slug: "compute/aws-elastic-beanstalken";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-elastic-beanstalk.ja.md": {
	id: "compute/aws-elastic-beanstalk.ja.md";
  slug: "compute/aws-elastic-beanstalkja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-elastic-beanstalk.md": {
	id: "compute/aws-elastic-beanstalk.md";
  slug: "compute/aws-elastic-beanstalk";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-fargate.en.md": {
	id: "compute/aws-fargate.en.md";
  slug: "compute/aws-fargateen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-fargate.ja.md": {
	id: "compute/aws-fargate.ja.md";
  slug: "compute/aws-fargateja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-fargate.md": {
	id: "compute/aws-fargate.md";
  slug: "compute/aws-fargate";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-lambda.en.md": {
	id: "compute/aws-lambda.en.md";
  slug: "compute/aws-lambdaen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-lambda.ja.md": {
	id: "compute/aws-lambda.ja.md";
  slug: "compute/aws-lambdaja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-lambda.md": {
	id: "compute/aws-lambda.md";
  slug: "compute/aws-lambda";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-outposts.en.md": {
	id: "compute/aws-outposts.en.md";
  slug: "compute/aws-outpostsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-outposts.ja.md": {
	id: "compute/aws-outposts.ja.md";
  slug: "compute/aws-outpostsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/aws-outposts.md": {
	id: "compute/aws-outposts.md";
  slug: "compute/aws-outposts";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/container-vs-virtual-machine.en.md": {
	id: "compute/container-vs-virtual-machine.en.md";
  slug: "compute/container-vs-virtual-machineen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/container-vs-virtual-machine.ja.md": {
	id: "compute/container-vs-virtual-machine.ja.md";
  slug: "compute/container-vs-virtual-machineja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/container-vs-virtual-machine.md": {
	id: "compute/container-vs-virtual-machine.md";
  slug: "compute/container-vs-virtual-machine";
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
"compute/ec2-instance-types-and-pricing-models.en.md": {
	id: "compute/ec2-instance-types-and-pricing-models.en.md";
  slug: "compute/ec2-instance-types-and-pricing-modelsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/ec2-instance-types-and-pricing-models.ja.md": {
	id: "compute/ec2-instance-types-and-pricing-models.ja.md";
  slug: "compute/ec2-instance-types-and-pricing-modelsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compute/ec2-instance-types-and-pricing-models.md": {
	id: "compute/ec2-instance-types-and-pricing-models.md";
  slug: "compute/ec2-instance-types-and-pricing-models";
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
"devops/aws-cloudformation.en.md": {
	id: "devops/aws-cloudformation.en.md";
  slug: "devops/aws-cloudformationen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-cloudformation.ja.md": {
	id: "devops/aws-cloudformation.ja.md";
  slug: "devops/aws-cloudformationja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-cloudformation.md": {
	id: "devops/aws-cloudformation.md";
  slug: "devops/aws-cloudformation";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-resource-access-console-cli-sdk-iac.en.md": {
	id: "devops/aws-resource-access-console-cli-sdk-iac.en.md";
  slug: "devops/aws-resource-access-console-cli-sdk-iacen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-resource-access-console-cli-sdk-iac.ja.md": {
	id: "devops/aws-resource-access-console-cli-sdk-iac.ja.md";
  slug: "devops/aws-resource-access-console-cli-sdk-iacja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-resource-access-console-cli-sdk-iac.md": {
	id: "devops/aws-resource-access-console-cli-sdk-iac.md";
  slug: "devops/aws-resource-access-console-cli-sdk-iac";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-api-gateway.en.md": {
	id: "messaging/amazon-api-gateway.en.md";
  slug: "messaging/amazon-api-gatewayen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-api-gateway.ja.md": {
	id: "messaging/amazon-api-gateway.ja.md";
  slug: "messaging/amazon-api-gatewayja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-api-gateway.md": {
	id: "messaging/amazon-api-gateway.md";
  slug: "messaging/amazon-api-gateway";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-eventbridge.en.md": {
	id: "messaging/amazon-eventbridge.en.md";
  slug: "messaging/amazon-eventbridgeen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-eventbridge.ja.md": {
	id: "messaging/amazon-eventbridge.ja.md";
  slug: "messaging/amazon-eventbridgeja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-eventbridge.md": {
	id: "messaging/amazon-eventbridge.md";
  slug: "messaging/amazon-eventbridge";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-sns.en.md": {
	id: "messaging/amazon-sns.en.md";
  slug: "messaging/amazon-snsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-sns.ja.md": {
	id: "messaging/amazon-sns.ja.md";
  slug: "messaging/amazon-snsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-sns.md": {
	id: "messaging/amazon-sns.md";
  slug: "messaging/amazon-sns";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-sqs.en.md": {
	id: "messaging/amazon-sqs.en.md";
  slug: "messaging/amazon-sqsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-sqs.ja.md": {
	id: "messaging/amazon-sqs.ja.md";
  slug: "messaging/amazon-sqsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-sqs.md": {
	id: "messaging/amazon-sqs.md";
  slug: "messaging/amazon-sqs";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-database-migration-service.en.md": {
	id: "migration/aws-database-migration-service.en.md";
  slug: "migration/aws-database-migration-serviceen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-database-migration-service.ja.md": {
	id: "migration/aws-database-migration-service.ja.md";
  slug: "migration/aws-database-migration-serviceja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-database-migration-service.md": {
	id: "migration/aws-database-migration-service.md";
  slug: "migration/aws-database-migration-service";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-datasync.en.md": {
	id: "migration/aws-datasync.en.md";
  slug: "migration/aws-datasyncen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-datasync.ja.md": {
	id: "migration/aws-datasync.ja.md";
  slug: "migration/aws-datasyncja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-datasync.md": {
	id: "migration/aws-datasync.md";
  slug: "migration/aws-datasync";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/amazon-cloudwatch.en.md": {
	id: "monitoring/amazon-cloudwatch.en.md";
  slug: "monitoring/amazon-cloudwatchen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/amazon-cloudwatch.ja.md": {
	id: "monitoring/amazon-cloudwatch.ja.md";
  slug: "monitoring/amazon-cloudwatchja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/amazon-cloudwatch.md": {
	id: "monitoring/amazon-cloudwatch.md";
  slug: "monitoring/amazon-cloudwatch";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/amazon-cloudfront.en.md": {
	id: "networking/amazon-cloudfront.en.md";
  slug: "networking/amazon-cloudfronten";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/amazon-cloudfront.ja.md": {
	id: "networking/amazon-cloudfront.ja.md";
  slug: "networking/amazon-cloudfrontja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/amazon-cloudfront.md": {
	id: "networking/amazon-cloudfront.md";
  slug: "networking/amazon-cloudfront";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/amazon-route-53.en.md": {
	id: "networking/amazon-route-53.en.md";
  slug: "networking/amazon-route-53en";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/amazon-route-53.ja.md": {
	id: "networking/amazon-route-53.ja.md";
  slug: "networking/amazon-route-53ja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/amazon-route-53.md": {
	id: "networking/amazon-route-53.md";
  slug: "networking/amazon-route-53";
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
"networking/aws-client-vpn.en.md": {
	id: "networking/aws-client-vpn.en.md";
  slug: "networking/aws-client-vpnen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-client-vpn.ja.md": {
	id: "networking/aws-client-vpn.ja.md";
  slug: "networking/aws-client-vpnja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-client-vpn.md": {
	id: "networking/aws-client-vpn.md";
  slug: "networking/aws-client-vpn";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-direct-connect.en.md": {
	id: "networking/aws-direct-connect.en.md";
  slug: "networking/aws-direct-connecten";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-direct-connect.ja.md": {
	id: "networking/aws-direct-connect.ja.md";
  slug: "networking/aws-direct-connectja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-direct-connect.md": {
	id: "networking/aws-direct-connect.md";
  slug: "networking/aws-direct-connect";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-global-accelerator.en.md": {
	id: "networking/aws-global-accelerator.en.md";
  slug: "networking/aws-global-acceleratoren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-global-accelerator.ja.md": {
	id: "networking/aws-global-accelerator.ja.md";
  slug: "networking/aws-global-acceleratorja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-global-accelerator.md": {
	id: "networking/aws-global-accelerator.md";
  slug: "networking/aws-global-accelerator";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-privatelink-and-vpc-endpoints.en.md": {
	id: "networking/aws-privatelink-and-vpc-endpoints.en.md";
  slug: "networking/aws-privatelink-and-vpc-endpointsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-privatelink-and-vpc-endpoints.ja.md": {
	id: "networking/aws-privatelink-and-vpc-endpoints.ja.md";
  slug: "networking/aws-privatelink-and-vpc-endpointsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-privatelink-and-vpc-endpoints.md": {
	id: "networking/aws-privatelink-and-vpc-endpoints.md";
  slug: "networking/aws-privatelink-and-vpc-endpoints";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-site-to-site-vpn.en.md": {
	id: "networking/aws-site-to-site-vpn.en.md";
  slug: "networking/aws-site-to-site-vpnen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-site-to-site-vpn.ja.md": {
	id: "networking/aws-site-to-site-vpn.ja.md";
  slug: "networking/aws-site-to-site-vpnja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-site-to-site-vpn.md": {
	id: "networking/aws-site-to-site-vpn.md";
  slug: "networking/aws-site-to-site-vpn";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-transit-gateway.en.md": {
	id: "networking/aws-transit-gateway.en.md";
  slug: "networking/aws-transit-gatewayen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-transit-gateway.ja.md": {
	id: "networking/aws-transit-gateway.ja.md";
  slug: "networking/aws-transit-gatewayja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/aws-transit-gateway.md": {
	id: "networking/aws-transit-gateway.md";
  slug: "networking/aws-transit-gateway";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/elastic-load-balancing.en.md": {
	id: "networking/elastic-load-balancing.en.md";
  slug: "networking/elastic-load-balancingen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/elastic-load-balancing.ja.md": {
	id: "networking/elastic-load-balancing.ja.md";
  slug: "networking/elastic-load-balancingja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/elastic-load-balancing.md": {
	id: "networking/elastic-load-balancing.md";
  slug: "networking/elastic-load-balancing";
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
"networking/vpn-components-vgw-customer-gateway.en.md": {
	id: "networking/vpn-components-vgw-customer-gateway.en.md";
  slug: "networking/vpn-components-vgw-customer-gatewayen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/vpn-components-vgw-customer-gateway.ja.md": {
	id: "networking/vpn-components-vgw-customer-gateway.ja.md";
  slug: "networking/vpn-components-vgw-customer-gatewayja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"networking/vpn-components-vgw-customer-gateway.md": {
	id: "networking/vpn-components-vgw-customer-gateway.md";
  slug: "networking/vpn-components-vgw-customer-gateway";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-cost-optimized-architectures.en.md": {
	id: "saa-c03/design-cost-optimized-architectures.en.md";
  slug: "saa-c03/design-cost-optimized-architecturesen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-cost-optimized-architectures.ja.md": {
	id: "saa-c03/design-cost-optimized-architectures.ja.md";
  slug: "saa-c03/design-cost-optimized-architecturesja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-cost-optimized-architectures.md": {
	id: "saa-c03/design-cost-optimized-architectures.md";
  slug: "saa-c03/design-cost-optimized-architectures";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-high-performing-architectures.en.md": {
	id: "saa-c03/design-high-performing-architectures.en.md";
  slug: "saa-c03/design-high-performing-architecturesen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-high-performing-architectures.ja.md": {
	id: "saa-c03/design-high-performing-architectures.ja.md";
  slug: "saa-c03/design-high-performing-architecturesja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-high-performing-architectures.md": {
	id: "saa-c03/design-high-performing-architectures.md";
  slug: "saa-c03/design-high-performing-architectures";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-resilient-architectures.en.md": {
	id: "saa-c03/design-resilient-architectures.en.md";
  slug: "saa-c03/design-resilient-architecturesen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-resilient-architectures.ja.md": {
	id: "saa-c03/design-resilient-architectures.ja.md";
  slug: "saa-c03/design-resilient-architecturesja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-resilient-architectures.md": {
	id: "saa-c03/design-resilient-architectures.md";
  slug: "saa-c03/design-resilient-architectures";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-secure-architectures.en.md": {
	id: "saa-c03/design-secure-architectures.en.md";
  slug: "saa-c03/design-secure-architecturesen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-secure-architectures.ja.md": {
	id: "saa-c03/design-secure-architectures.ja.md";
  slug: "saa-c03/design-secure-architecturesja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/design-secure-architectures.md": {
	id: "saa-c03/design-secure-architectures.md";
  slug: "saa-c03/design-secure-architectures";
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
"storage/ebs-snapshot-data-lifecycle-manager.en.md": {
	id: "storage/ebs-snapshot-data-lifecycle-manager.en.md";
  slug: "storage/ebs-snapshot-data-lifecycle-manageren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/ebs-snapshot-data-lifecycle-manager.ja.md": {
	id: "storage/ebs-snapshot-data-lifecycle-manager.ja.md";
  slug: "storage/ebs-snapshot-data-lifecycle-managerja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/ebs-snapshot-data-lifecycle-manager.md": {
	id: "storage/ebs-snapshot-data-lifecycle-manager.md";
  slug: "storage/ebs-snapshot-data-lifecycle-manager";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/s3-security-management.en.md": {
	id: "storage/s3-security-management.en.md";
  slug: "storage/s3-security-managementen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/s3-security-management.ja.md": {
	id: "storage/s3-security-management.ja.md";
  slug: "storage/s3-security-managementja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/s3-security-management.md": {
	id: "storage/s3-security-management.md";
  slug: "storage/s3-security-management";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/s3-storage-classes-lifecycle.en.md": {
	id: "storage/s3-storage-classes-lifecycle.en.md";
  slug: "storage/s3-storage-classes-lifecycleen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/s3-storage-classes-lifecycle.ja.md": {
	id: "storage/s3-storage-classes-lifecycle.ja.md";
  slug: "storage/s3-storage-classes-lifecycleja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/s3-storage-classes-lifecycle.md": {
	id: "storage/s3-storage-classes-lifecycle.md";
  slug: "storage/s3-storage-classes-lifecycle";
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

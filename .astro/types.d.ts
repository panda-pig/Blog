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
"ai-ml/ai-ml-core-concepts.en.md": {
	id: "ai-ml/ai-ml-core-concepts.en.md";
  slug: "ai-ml/ai-ml-core-conceptsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/ai-ml-core-concepts.ja.md": {
	id: "ai-ml/ai-ml-core-concepts.ja.md";
  slug: "ai-ml/ai-ml-core-conceptsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/ai-ml-core-concepts.md": {
	id: "ai-ml/ai-ml-core-concepts.md";
  slug: "ai-ml/ai-ml-core-concepts";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-bedrock.en.md": {
	id: "ai-ml/amazon-bedrock.en.md";
  slug: "ai-ml/amazon-bedrocken";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-bedrock.ja.md": {
	id: "ai-ml/amazon-bedrock.ja.md";
  slug: "ai-ml/amazon-bedrockja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-bedrock.md": {
	id: "ai-ml/amazon-bedrock.md";
  slug: "ai-ml/amazon-bedrock";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-comprehend.en.md": {
	id: "ai-ml/amazon-comprehend.en.md";
  slug: "ai-ml/amazon-comprehenden";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-comprehend.ja.md": {
	id: "ai-ml/amazon-comprehend.ja.md";
  slug: "ai-ml/amazon-comprehendja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-comprehend.md": {
	id: "ai-ml/amazon-comprehend.md";
  slug: "ai-ml/amazon-comprehend";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-kendra.en.md": {
	id: "ai-ml/amazon-kendra.en.md";
  slug: "ai-ml/amazon-kendraen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-kendra.ja.md": {
	id: "ai-ml/amazon-kendra.ja.md";
  slug: "ai-ml/amazon-kendraja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-kendra.md": {
	id: "ai-ml/amazon-kendra.md";
  slug: "ai-ml/amazon-kendra";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-lex.en.md": {
	id: "ai-ml/amazon-lex.en.md";
  slug: "ai-ml/amazon-lexen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-lex.ja.md": {
	id: "ai-ml/amazon-lex.ja.md";
  slug: "ai-ml/amazon-lexja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-lex.md": {
	id: "ai-ml/amazon-lex.md";
  slug: "ai-ml/amazon-lex";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-personalize.en.md": {
	id: "ai-ml/amazon-personalize.en.md";
  slug: "ai-ml/amazon-personalizeen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-personalize.ja.md": {
	id: "ai-ml/amazon-personalize.ja.md";
  slug: "ai-ml/amazon-personalizeja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-personalize.md": {
	id: "ai-ml/amazon-personalize.md";
  slug: "ai-ml/amazon-personalize";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-polly.en.md": {
	id: "ai-ml/amazon-polly.en.md";
  slug: "ai-ml/amazon-pollyen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-polly.ja.md": {
	id: "ai-ml/amazon-polly.ja.md";
  slug: "ai-ml/amazon-pollyja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-polly.md": {
	id: "ai-ml/amazon-polly.md";
  slug: "ai-ml/amazon-polly";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-q-business-developer.en.md": {
	id: "ai-ml/amazon-q-business-developer.en.md";
  slug: "ai-ml/amazon-q-business-developeren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-q-business-developer.ja.md": {
	id: "ai-ml/amazon-q-business-developer.ja.md";
  slug: "ai-ml/amazon-q-business-developerja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-q-business-developer.md": {
	id: "ai-ml/amazon-q-business-developer.md";
  slug: "ai-ml/amazon-q-business-developer";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-rekognition.en.md": {
	id: "ai-ml/amazon-rekognition.en.md";
  slug: "ai-ml/amazon-rekognitionen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-rekognition.ja.md": {
	id: "ai-ml/amazon-rekognition.ja.md";
  slug: "ai-ml/amazon-rekognitionja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-rekognition.md": {
	id: "ai-ml/amazon-rekognition.md";
  slug: "ai-ml/amazon-rekognition";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-sagemaker-jumpstart.en.md": {
	id: "ai-ml/amazon-sagemaker-jumpstart.en.md";
  slug: "ai-ml/amazon-sagemaker-jumpstarten";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-sagemaker-jumpstart.ja.md": {
	id: "ai-ml/amazon-sagemaker-jumpstart.ja.md";
  slug: "ai-ml/amazon-sagemaker-jumpstartja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-sagemaker-jumpstart.md": {
	id: "ai-ml/amazon-sagemaker-jumpstart.md";
  slug: "ai-ml/amazon-sagemaker-jumpstart";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-sagemaker.en.md": {
	id: "ai-ml/amazon-sagemaker.en.md";
  slug: "ai-ml/amazon-sagemakeren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-sagemaker.ja.md": {
	id: "ai-ml/amazon-sagemaker.ja.md";
  slug: "ai-ml/amazon-sagemakerja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-sagemaker.md": {
	id: "ai-ml/amazon-sagemaker.md";
  slug: "ai-ml/amazon-sagemaker";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-textract.en.md": {
	id: "ai-ml/amazon-textract.en.md";
  slug: "ai-ml/amazon-textracten";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-textract.ja.md": {
	id: "ai-ml/amazon-textract.ja.md";
  slug: "ai-ml/amazon-textractja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-textract.md": {
	id: "ai-ml/amazon-textract.md";
  slug: "ai-ml/amazon-textract";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-transcribe.en.md": {
	id: "ai-ml/amazon-transcribe.en.md";
  slug: "ai-ml/amazon-transcribeen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-transcribe.ja.md": {
	id: "ai-ml/amazon-transcribe.ja.md";
  slug: "ai-ml/amazon-transcribeja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-transcribe.md": {
	id: "ai-ml/amazon-transcribe.md";
  slug: "ai-ml/amazon-transcribe";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-translate.en.md": {
	id: "ai-ml/amazon-translate.en.md";
  slug: "ai-ml/amazon-translateen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-translate.ja.md": {
	id: "ai-ml/amazon-translate.ja.md";
  slug: "ai-ml/amazon-translateja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/amazon-translate.md": {
	id: "ai-ml/amazon-translate.md";
  slug: "ai-ml/amazon-translate";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/aws-ai-ml-three-layer-stack.en.md": {
	id: "ai-ml/aws-ai-ml-three-layer-stack.en.md";
  slug: "ai-ml/aws-ai-ml-three-layer-stacken";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/aws-ai-ml-three-layer-stack.ja.md": {
	id: "ai-ml/aws-ai-ml-three-layer-stack.ja.md";
  slug: "ai-ml/aws-ai-ml-three-layer-stackja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"ai-ml/aws-ai-ml-three-layer-stack.md": {
	id: "ai-ml/aws-ai-ml-three-layer-stack.md";
  slug: "ai-ml/aws-ai-ml-three-layer-stack";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-athena.en.md": {
	id: "analytics/amazon-athena.en.md";
  slug: "analytics/amazon-athenaen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-athena.ja.md": {
	id: "analytics/amazon-athena.ja.md";
  slug: "analytics/amazon-athenaja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-athena.md": {
	id: "analytics/amazon-athena.md";
  slug: "analytics/amazon-athena";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-emr.en.md": {
	id: "analytics/amazon-emr.en.md";
  slug: "analytics/amazon-emren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-emr.ja.md": {
	id: "analytics/amazon-emr.ja.md";
  slug: "analytics/amazon-emrja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-emr.md": {
	id: "analytics/amazon-emr.md";
  slug: "analytics/amazon-emr";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-msk.en.md": {
	id: "analytics/amazon-msk.en.md";
  slug: "analytics/amazon-msken";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-msk.ja.md": {
	id: "analytics/amazon-msk.ja.md";
  slug: "analytics/amazon-mskja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-msk.md": {
	id: "analytics/amazon-msk.md";
  slug: "analytics/amazon-msk";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-opensearch-service.en.md": {
	id: "analytics/amazon-opensearch-service.en.md";
  slug: "analytics/amazon-opensearch-serviceen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-opensearch-service.ja.md": {
	id: "analytics/amazon-opensearch-service.ja.md";
  slug: "analytics/amazon-opensearch-serviceja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-opensearch-service.md": {
	id: "analytics/amazon-opensearch-service.md";
  slug: "analytics/amazon-opensearch-service";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-quicksight.en.md": {
	id: "analytics/amazon-quicksight.en.md";
  slug: "analytics/amazon-quicksighten";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-quicksight.ja.md": {
	id: "analytics/amazon-quicksight.ja.md";
  slug: "analytics/amazon-quicksightja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/amazon-quicksight.md": {
	id: "analytics/amazon-quicksight.md";
  slug: "analytics/amazon-quicksight";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/aws-glue.en.md": {
	id: "analytics/aws-glue.en.md";
  slug: "analytics/aws-glueen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/aws-glue.ja.md": {
	id: "analytics/aws-glue.ja.md";
  slug: "analytics/aws-glueja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/aws-glue.md": {
	id: "analytics/aws-glue.md";
  slug: "analytics/aws-glue";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/aws-lake-formation.en.md": {
	id: "analytics/aws-lake-formation.en.md";
  slug: "analytics/aws-lake-formationen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/aws-lake-formation.ja.md": {
	id: "analytics/aws-lake-formation.ja.md";
  slug: "analytics/aws-lake-formationja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/aws-lake-formation.md": {
	id: "analytics/aws-lake-formation.md";
  slug: "analytics/aws-lake-formation";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/data-analytics-core-concepts.en.md": {
	id: "analytics/data-analytics-core-concepts.en.md";
  slug: "analytics/data-analytics-core-conceptsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/data-analytics-core-concepts.ja.md": {
	id: "analytics/data-analytics-core-concepts.ja.md";
  slug: "analytics/data-analytics-core-conceptsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"analytics/data-analytics-core-concepts.md": {
	id: "analytics/data-analytics-core-concepts.md";
  slug: "analytics/data-analytics-core-concepts";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/aws-cloud-adoption-framework.en.md": {
	id: "architecture/aws-cloud-adoption-framework.en.md";
  slug: "architecture/aws-cloud-adoption-frameworken";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/aws-cloud-adoption-framework.ja.md": {
	id: "architecture/aws-cloud-adoption-framework.ja.md";
  slug: "architecture/aws-cloud-adoption-frameworkja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/aws-cloud-adoption-framework.md": {
	id: "architecture/aws-cloud-adoption-framework.md";
  slug: "architecture/aws-cloud-adoption-framework";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
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
"architecture/aws-well-architected-framework.en.md": {
	id: "architecture/aws-well-architected-framework.en.md";
  slug: "architecture/aws-well-architected-frameworken";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/aws-well-architected-framework.ja.md": {
	id: "architecture/aws-well-architected-framework.ja.md";
  slug: "architecture/aws-well-architected-frameworkja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/aws-well-architected-framework.md": {
	id: "architecture/aws-well-architected-framework.md";
  slug: "architecture/aws-well-architected-framework";
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
"architecture/data-analytics-ml-pipeline.en.md": {
	id: "architecture/data-analytics-ml-pipeline.en.md";
  slug: "architecture/data-analytics-ml-pipelineen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/data-analytics-ml-pipeline.ja.md": {
	id: "architecture/data-analytics-ml-pipeline.ja.md";
  slug: "architecture/data-analytics-ml-pipelineja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/data-analytics-ml-pipeline.md": {
	id: "architecture/data-analytics-ml-pipeline.md";
  slug: "architecture/data-analytics-ml-pipeline";
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
"architecture/multi-account-architecture.en.md": {
	id: "architecture/multi-account-architecture.en.md";
  slug: "architecture/multi-account-architectureen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/multi-account-architecture.ja.md": {
	id: "architecture/multi-account-architecture.ja.md";
  slug: "architecture/multi-account-architectureja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"architecture/multi-account-architecture.md": {
	id: "architecture/multi-account-architecture.md";
  slug: "architecture/multi-account-architecture";
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
"cloud-practitioner/clf-exam-quick-review.en.md": {
	id: "cloud-practitioner/clf-exam-quick-review.en.md";
  slug: "cloud-practitioner/clf-exam-quick-reviewen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/clf-exam-quick-review.ja.md": {
	id: "cloud-practitioner/clf-exam-quick-review.ja.md";
  slug: "cloud-practitioner/clf-exam-quick-reviewja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/clf-exam-quick-review.md": {
	id: "cloud-practitioner/clf-exam-quick-review.md";
  slug: "cloud-practitioner/clf-exam-quick-review";
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
"cloud-practitioner/cloud-technology-services.en.md": {
	id: "cloud-practitioner/cloud-technology-services.en.md";
  slug: "cloud-practitioner/cloud-technology-servicesen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-technology-services.ja.md": {
	id: "cloud-practitioner/cloud-technology-services.ja.md";
  slug: "cloud-practitioner/cloud-technology-servicesja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"cloud-practitioner/cloud-technology-services.md": {
	id: "cloud-practitioner/cloud-technology-services.md";
  slug: "cloud-practitioner/cloud-technology-services";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/amazon-athena-vs-amazon-redshift.en.md": {
	id: "compare/amazon-athena-vs-amazon-redshift.en.md";
  slug: "compare/amazon-athena-vs-amazon-redshiften";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/amazon-athena-vs-amazon-redshift.ja.md": {
	id: "compare/amazon-athena-vs-amazon-redshift.ja.md";
  slug: "compare/amazon-athena-vs-amazon-redshiftja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/amazon-athena-vs-amazon-redshift.md": {
	id: "compare/amazon-athena-vs-amazon-redshift.md";
  slug: "compare/amazon-athena-vs-amazon-redshift";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/aws-ai-services-vs-sagemaker-vs-ml-infrastructure.en.md": {
	id: "compare/aws-ai-services-vs-sagemaker-vs-ml-infrastructure.en.md";
  slug: "compare/aws-ai-services-vs-sagemaker-vs-ml-infrastructureen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/aws-ai-services-vs-sagemaker-vs-ml-infrastructure.ja.md": {
	id: "compare/aws-ai-services-vs-sagemaker-vs-ml-infrastructure.ja.md";
  slug: "compare/aws-ai-services-vs-sagemaker-vs-ml-infrastructureja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/aws-ai-services-vs-sagemaker-vs-ml-infrastructure.md": {
	id: "compare/aws-ai-services-vs-sagemaker-vs-ml-infrastructure.md";
  slug: "compare/aws-ai-services-vs-sagemaker-vs-ml-infrastructure";
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
"compare/inspector-vs-guardduty-vs-macie-vs-detective-vs-security-hub.en.md": {
	id: "compare/inspector-vs-guardduty-vs-macie-vs-detective-vs-security-hub.en.md";
  slug: "compare/inspector-vs-guardduty-vs-macie-vs-detective-vs-security-huben";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/inspector-vs-guardduty-vs-macie-vs-detective-vs-security-hub.ja.md": {
	id: "compare/inspector-vs-guardduty-vs-macie-vs-detective-vs-security-hub.ja.md";
  slug: "compare/inspector-vs-guardduty-vs-macie-vs-detective-vs-security-hubja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/inspector-vs-guardduty-vs-macie-vs-detective-vs-security-hub.md": {
	id: "compare/inspector-vs-guardduty-vs-macie-vs-detective-vs-security-hub.md";
  slug: "compare/inspector-vs-guardduty-vs-macie-vs-detective-vs-security-hub";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/kinesis-data-streams-vs-amazon-data-firehose.en.md": {
	id: "compare/kinesis-data-streams-vs-amazon-data-firehose.en.md";
  slug: "compare/kinesis-data-streams-vs-amazon-data-firehoseen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/kinesis-data-streams-vs-amazon-data-firehose.ja.md": {
	id: "compare/kinesis-data-streams-vs-amazon-data-firehose.ja.md";
  slug: "compare/kinesis-data-streams-vs-amazon-data-firehoseja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/kinesis-data-streams-vs-amazon-data-firehose.md": {
	id: "compare/kinesis-data-streams-vs-amazon-data-firehose.md";
  slug: "compare/kinesis-data-streams-vs-amazon-data-firehose";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/kms-vs-secrets-manager-vs-acm.en.md": {
	id: "compare/kms-vs-secrets-manager-vs-acm.en.md";
  slug: "compare/kms-vs-secrets-manager-vs-acmen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/kms-vs-secrets-manager-vs-acm.ja.md": {
	id: "compare/kms-vs-secrets-manager-vs-acm.ja.md";
  slug: "compare/kms-vs-secrets-manager-vs-acmja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/kms-vs-secrets-manager-vs-acm.md": {
	id: "compare/kms-vs-secrets-manager-vs-acm.md";
  slug: "compare/kms-vs-secrets-manager-vs-acm";
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
"compare/sagemaker-jumpstart-vs-bedrock-vs-amazon-q.en.md": {
	id: "compare/sagemaker-jumpstart-vs-bedrock-vs-amazon-q.en.md";
  slug: "compare/sagemaker-jumpstart-vs-bedrock-vs-amazon-qen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/sagemaker-jumpstart-vs-bedrock-vs-amazon-q.ja.md": {
	id: "compare/sagemaker-jumpstart-vs-bedrock-vs-amazon-q.ja.md";
  slug: "compare/sagemaker-jumpstart-vs-bedrock-vs-amazon-qja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/sagemaker-jumpstart-vs-bedrock-vs-amazon-q.md": {
	id: "compare/sagemaker-jumpstart-vs-bedrock-vs-amazon-q.md";
  slug: "compare/sagemaker-jumpstart-vs-bedrock-vs-amazon-q";
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
"compare/waf-vs-shield-vs-security-group.en.md": {
	id: "compare/waf-vs-shield-vs-security-group.en.md";
  slug: "compare/waf-vs-shield-vs-security-groupen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/waf-vs-shield-vs-security-group.ja.md": {
	id: "compare/waf-vs-shield-vs-security-group.ja.md";
  slug: "compare/waf-vs-shield-vs-security-groupja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"compare/waf-vs-shield-vs-security-group.md": {
	id: "compare/waf-vs-shield-vs-security-group.md";
  slug: "compare/waf-vs-shield-vs-security-group";
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
"database/amazon-redshift.en.md": {
	id: "database/amazon-redshift.en.md";
  slug: "database/amazon-redshiften";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-redshift.ja.md": {
	id: "database/amazon-redshift.ja.md";
  slug: "database/amazon-redshiftja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-redshift.md": {
	id: "database/amazon-redshift.md";
  slug: "database/amazon-redshift";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-timestream.en.md": {
	id: "database/amazon-timestream.en.md";
  slug: "database/amazon-timestreamen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-timestream.ja.md": {
	id: "database/amazon-timestream.ja.md";
  slug: "database/amazon-timestreamja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"database/amazon-timestream.md": {
	id: "database/amazon-timestream.md";
  slug: "database/amazon-timestream";
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
"devops/aws-cdk.en.md": {
	id: "devops/aws-cdk.en.md";
  slug: "devops/aws-cdken";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-cdk.ja.md": {
	id: "devops/aws-cdk.ja.md";
  slug: "devops/aws-cdkja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-cdk.md": {
	id: "devops/aws-cdk.md";
  slug: "devops/aws-cdk";
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
"devops/aws-codeartifact.en.md": {
	id: "devops/aws-codeartifact.en.md";
  slug: "devops/aws-codeartifacten";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codeartifact.ja.md": {
	id: "devops/aws-codeartifact.ja.md";
  slug: "devops/aws-codeartifactja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codeartifact.md": {
	id: "devops/aws-codeartifact.md";
  slug: "devops/aws-codeartifact";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codebuild.en.md": {
	id: "devops/aws-codebuild.en.md";
  slug: "devops/aws-codebuilden";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codebuild.ja.md": {
	id: "devops/aws-codebuild.ja.md";
  slug: "devops/aws-codebuildja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codebuild.md": {
	id: "devops/aws-codebuild.md";
  slug: "devops/aws-codebuild";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codedeploy.en.md": {
	id: "devops/aws-codedeploy.en.md";
  slug: "devops/aws-codedeployen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codedeploy.ja.md": {
	id: "devops/aws-codedeploy.ja.md";
  slug: "devops/aws-codedeployja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codedeploy.md": {
	id: "devops/aws-codedeploy.md";
  slug: "devops/aws-codedeploy";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codepipeline.en.md": {
	id: "devops/aws-codepipeline.en.md";
  slug: "devops/aws-codepipelineen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codepipeline.ja.md": {
	id: "devops/aws-codepipeline.ja.md";
  slug: "devops/aws-codepipelineja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-codepipeline.md": {
	id: "devops/aws-codepipeline.md";
  slug: "devops/aws-codepipeline";
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
"devops/aws-sam.en.md": {
	id: "devops/aws-sam.en.md";
  slug: "devops/aws-samen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-sam.ja.md": {
	id: "devops/aws-sam.ja.md";
  slug: "devops/aws-samja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"devops/aws-sam.md": {
	id: "devops/aws-sam.md";
  slug: "devops/aws-sam";
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
"messaging/amazon-kinesis-data-streams-firehose.en.md": {
	id: "messaging/amazon-kinesis-data-streams-firehose.en.md";
  slug: "messaging/amazon-kinesis-data-streams-firehoseen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-kinesis-data-streams-firehose.ja.md": {
	id: "messaging/amazon-kinesis-data-streams-firehose.ja.md";
  slug: "messaging/amazon-kinesis-data-streams-firehoseja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-kinesis-data-streams-firehose.md": {
	id: "messaging/amazon-kinesis-data-streams-firehose.md";
  slug: "messaging/amazon-kinesis-data-streams-firehose";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-mq.en.md": {
	id: "messaging/amazon-mq.en.md";
  slug: "messaging/amazon-mqen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-mq.ja.md": {
	id: "messaging/amazon-mq.ja.md";
  slug: "messaging/amazon-mqja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/amazon-mq.md": {
	id: "messaging/amazon-mq.md";
  slug: "messaging/amazon-mq";
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
"messaging/aws-appflow.en.md": {
	id: "messaging/aws-appflow.en.md";
  slug: "messaging/aws-appflowen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/aws-appflow.ja.md": {
	id: "messaging/aws-appflow.ja.md";
  slug: "messaging/aws-appflowja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/aws-appflow.md": {
	id: "messaging/aws-appflow.md";
  slug: "messaging/aws-appflow";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/aws-step-functions.en.md": {
	id: "messaging/aws-step-functions.en.md";
  slug: "messaging/aws-step-functionsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/aws-step-functions.ja.md": {
	id: "messaging/aws-step-functions.ja.md";
  slug: "messaging/aws-step-functionsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"messaging/aws-step-functions.md": {
	id: "messaging/aws-step-functions.md";
  slug: "messaging/aws-step-functions";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-application-discovery-service.en.md": {
	id: "migration/aws-application-discovery-service.en.md";
  slug: "migration/aws-application-discovery-serviceen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-application-discovery-service.ja.md": {
	id: "migration/aws-application-discovery-service.ja.md";
  slug: "migration/aws-application-discovery-serviceja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-application-discovery-service.md": {
	id: "migration/aws-application-discovery-service.md";
  slug: "migration/aws-application-discovery-service";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-application-migration-service.en.md": {
	id: "migration/aws-application-migration-service.en.md";
  slug: "migration/aws-application-migration-serviceen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-application-migration-service.ja.md": {
	id: "migration/aws-application-migration-service.ja.md";
  slug: "migration/aws-application-migration-serviceja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-application-migration-service.md": {
	id: "migration/aws-application-migration-service.md";
  slug: "migration/aws-application-migration-service";
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
"migration/aws-migration-hub.en.md": {
	id: "migration/aws-migration-hub.en.md";
  slug: "migration/aws-migration-huben";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-migration-hub.ja.md": {
	id: "migration/aws-migration-hub.ja.md";
  slug: "migration/aws-migration-hubja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-migration-hub.md": {
	id: "migration/aws-migration-hub.md";
  slug: "migration/aws-migration-hub";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-schema-conversion-tool.en.md": {
	id: "migration/aws-schema-conversion-tool.en.md";
  slug: "migration/aws-schema-conversion-toolen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-schema-conversion-tool.ja.md": {
	id: "migration/aws-schema-conversion-tool.ja.md";
  slug: "migration/aws-schema-conversion-toolja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-schema-conversion-tool.md": {
	id: "migration/aws-schema-conversion-tool.md";
  slug: "migration/aws-schema-conversion-tool";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-transfer-family.en.md": {
	id: "migration/aws-transfer-family.en.md";
  slug: "migration/aws-transfer-familyen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-transfer-family.ja.md": {
	id: "migration/aws-transfer-family.ja.md";
  slug: "migration/aws-transfer-familyja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"migration/aws-transfer-family.md": {
	id: "migration/aws-transfer-family.md";
  slug: "migration/aws-transfer-family";
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
"monitoring/aws-cloudtrail.en.md": {
	id: "monitoring/aws-cloudtrail.en.md";
  slug: "monitoring/aws-cloudtrailen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-cloudtrail.ja.md": {
	id: "monitoring/aws-cloudtrail.ja.md";
  slug: "monitoring/aws-cloudtrailja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-cloudtrail.md": {
	id: "monitoring/aws-cloudtrail.md";
  slug: "monitoring/aws-cloudtrail";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-config.en.md": {
	id: "monitoring/aws-config.en.md";
  slug: "monitoring/aws-configen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-config.ja.md": {
	id: "monitoring/aws-config.ja.md";
  slug: "monitoring/aws-configja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-config.md": {
	id: "monitoring/aws-config.md";
  slug: "monitoring/aws-config";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-health-dashboard.en.md": {
	id: "monitoring/aws-health-dashboard.en.md";
  slug: "monitoring/aws-health-dashboarden";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-health-dashboard.ja.md": {
	id: "monitoring/aws-health-dashboard.ja.md";
  slug: "monitoring/aws-health-dashboardja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-health-dashboard.md": {
	id: "monitoring/aws-health-dashboard.md";
  slug: "monitoring/aws-health-dashboard";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-systems-manager.en.md": {
	id: "monitoring/aws-systems-manager.en.md";
  slug: "monitoring/aws-systems-manageren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-systems-manager.ja.md": {
	id: "monitoring/aws-systems-manager.ja.md";
  slug: "monitoring/aws-systems-managerja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-systems-manager.md": {
	id: "monitoring/aws-systems-manager.md";
  slug: "monitoring/aws-systems-manager";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-trusted-advisor.en.md": {
	id: "monitoring/aws-trusted-advisor.en.md";
  slug: "monitoring/aws-trusted-advisoren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-trusted-advisor.ja.md": {
	id: "monitoring/aws-trusted-advisor.ja.md";
  slug: "monitoring/aws-trusted-advisorja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-trusted-advisor.md": {
	id: "monitoring/aws-trusted-advisor.md";
  slug: "monitoring/aws-trusted-advisor";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-well-architected-tool.en.md": {
	id: "monitoring/aws-well-architected-tool.en.md";
  slug: "monitoring/aws-well-architected-toolen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-well-architected-tool.ja.md": {
	id: "monitoring/aws-well-architected-tool.ja.md";
  slug: "monitoring/aws-well-architected-toolja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-well-architected-tool.md": {
	id: "monitoring/aws-well-architected-tool.md";
  slug: "monitoring/aws-well-architected-tool";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-x-ray.en.md": {
	id: "monitoring/aws-x-ray.en.md";
  slug: "monitoring/aws-x-rayen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-x-ray.ja.md": {
	id: "monitoring/aws-x-ray.ja.md";
  slug: "monitoring/aws-x-rayja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"monitoring/aws-x-ray.md": {
	id: "monitoring/aws-x-ray.md";
  slug: "monitoring/aws-x-ray";
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
"saa-c03/saa-exam-quick-review.en.md": {
	id: "saa-c03/saa-exam-quick-review.en.md";
  slug: "saa-c03/saa-exam-quick-reviewen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/saa-exam-quick-review.ja.md": {
	id: "saa-c03/saa-exam-quick-review.ja.md";
  slug: "saa-c03/saa-exam-quick-reviewja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/saa-exam-quick-review.md": {
	id: "saa-c03/saa-exam-quick-review.md";
  slug: "saa-c03/saa-exam-quick-review";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/scenario-keyword-index.en.md": {
	id: "saa-c03/scenario-keyword-index.en.md";
  slug: "saa-c03/scenario-keyword-indexen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/scenario-keyword-index.ja.md": {
	id: "saa-c03/scenario-keyword-index.ja.md";
  slug: "saa-c03/scenario-keyword-indexja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"saa-c03/scenario-keyword-index.md": {
	id: "saa-c03/scenario-keyword-index.md";
  slug: "saa-c03/scenario-keyword-index";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-cognito.en.md": {
	id: "security/amazon-cognito.en.md";
  slug: "security/amazon-cognitoen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-cognito.ja.md": {
	id: "security/amazon-cognito.ja.md";
  slug: "security/amazon-cognitoja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-cognito.md": {
	id: "security/amazon-cognito.md";
  slug: "security/amazon-cognito";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-detective.en.md": {
	id: "security/amazon-detective.en.md";
  slug: "security/amazon-detectiveen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-detective.ja.md": {
	id: "security/amazon-detective.ja.md";
  slug: "security/amazon-detectiveja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-detective.md": {
	id: "security/amazon-detective.md";
  slug: "security/amazon-detective";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-guardduty.en.md": {
	id: "security/amazon-guardduty.en.md";
  slug: "security/amazon-guarddutyen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-guardduty.ja.md": {
	id: "security/amazon-guardduty.ja.md";
  slug: "security/amazon-guarddutyja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-guardduty.md": {
	id: "security/amazon-guardduty.md";
  slug: "security/amazon-guardduty";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-inspector.en.md": {
	id: "security/amazon-inspector.en.md";
  slug: "security/amazon-inspectoren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-inspector.ja.md": {
	id: "security/amazon-inspector.ja.md";
  slug: "security/amazon-inspectorja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-inspector.md": {
	id: "security/amazon-inspector.md";
  slug: "security/amazon-inspector";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-macie.en.md": {
	id: "security/amazon-macie.en.md";
  slug: "security/amazon-macieen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-macie.ja.md": {
	id: "security/amazon-macie.ja.md";
  slug: "security/amazon-macieja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/amazon-macie.md": {
	id: "security/amazon-macie.md";
  slug: "security/amazon-macie";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-certificate-manager.en.md": {
	id: "security/aws-certificate-manager.en.md";
  slug: "security/aws-certificate-manageren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-certificate-manager.ja.md": {
	id: "security/aws-certificate-manager.ja.md";
  slug: "security/aws-certificate-managerja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-certificate-manager.md": {
	id: "security/aws-certificate-manager.md";
  slug: "security/aws-certificate-manager";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-control-tower.en.md": {
	id: "security/aws-control-tower.en.md";
  slug: "security/aws-control-toweren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-control-tower.ja.md": {
	id: "security/aws-control-tower.ja.md";
  slug: "security/aws-control-towerja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-control-tower.md": {
	id: "security/aws-control-tower.md";
  slug: "security/aws-control-tower";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-iam-identity-center.en.md": {
	id: "security/aws-iam-identity-center.en.md";
  slug: "security/aws-iam-identity-centeren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-iam-identity-center.ja.md": {
	id: "security/aws-iam-identity-center.ja.md";
  slug: "security/aws-iam-identity-centerja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-iam-identity-center.md": {
	id: "security/aws-iam-identity-center.md";
  slug: "security/aws-iam-identity-center";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-iam.en.md": {
	id: "security/aws-iam.en.md";
  slug: "security/aws-iamen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-iam.ja.md": {
	id: "security/aws-iam.ja.md";
  slug: "security/aws-iamja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-iam.md": {
	id: "security/aws-iam.md";
  slug: "security/aws-iam";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-kms.en.md": {
	id: "security/aws-kms.en.md";
  slug: "security/aws-kmsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-kms.ja.md": {
	id: "security/aws-kms.ja.md";
  slug: "security/aws-kmsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-kms.md": {
	id: "security/aws-kms.md";
  slug: "security/aws-kms";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-organizations.en.md": {
	id: "security/aws-organizations.en.md";
  slug: "security/aws-organizationsen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-organizations.ja.md": {
	id: "security/aws-organizations.ja.md";
  slug: "security/aws-organizationsja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-organizations.md": {
	id: "security/aws-organizations.md";
  slug: "security/aws-organizations";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-secrets-manager.en.md": {
	id: "security/aws-secrets-manager.en.md";
  slug: "security/aws-secrets-manageren";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-secrets-manager.ja.md": {
	id: "security/aws-secrets-manager.ja.md";
  slug: "security/aws-secrets-managerja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-secrets-manager.md": {
	id: "security/aws-secrets-manager.md";
  slug: "security/aws-secrets-manager";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-security-hub.en.md": {
	id: "security/aws-security-hub.en.md";
  slug: "security/aws-security-huben";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-security-hub.ja.md": {
	id: "security/aws-security-hub.ja.md";
  slug: "security/aws-security-hubja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-security-hub.md": {
	id: "security/aws-security-hub.md";
  slug: "security/aws-security-hub";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-shield.en.md": {
	id: "security/aws-shield.en.md";
  slug: "security/aws-shielden";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-shield.ja.md": {
	id: "security/aws-shield.ja.md";
  slug: "security/aws-shieldja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-shield.md": {
	id: "security/aws-shield.md";
  slug: "security/aws-shield";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-waf.en.md": {
	id: "security/aws-waf.en.md";
  slug: "security/aws-wafen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-waf.ja.md": {
	id: "security/aws-waf.ja.md";
  slug: "security/aws-wafja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"security/aws-waf.md": {
	id: "security/aws-waf.md";
  slug: "security/aws-waf";
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
"storage/aws-snow-family.en.md": {
	id: "storage/aws-snow-family.en.md";
  slug: "storage/aws-snow-familyen";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-snow-family.ja.md": {
	id: "storage/aws-snow-family.ja.md";
  slug: "storage/aws-snow-familyja";
  body: string;
  collection: "aws";
  data: any
} & { render(): Render[".md"] };
"storage/aws-snow-family.md": {
	id: "storage/aws-snow-family.md";
  slug: "storage/aws-snow-family";
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

const awsUi = {
  zh: {
    siteTitle: 'AWS 学习手册',
    siteDescription: 'Panda 整理的 AWS 服务、架构、考试重点与易混淆知识笔记。',
    heroTitle: '学习手册',
    heroMeta: 'Cloud Practitioner · SAA-C03 · 服务与架构速查',
    heroDescription: '把复杂的云服务，整理成可以随时翻阅的理解。',
    searchPlaceholder: '搜索服务、术语或知识点…',
    noResults: '没有找到相关内容',
    domainType: '领域',
    topicType: '专题',
    noteType: '笔记',
    compareType: '对比',
    serviceMap: 'SERVICE MAP',
    coreDomains: '核心领域',
    coreDomainsDescription: '按服务领域快速进入知识笔记',
    quickReference: 'QUICK REFERENCE',
    specialTopics: '专题速查',
    specialTopicsDescription: '围绕考试、选型与术语集中整理',
    freshNotes: 'FRESH NOTES',
    recentlyUpdated: '最近更新',
    handmade: '手工整理 · 持续校正 · 仅作学习备忘',
    serviceDomain: 'SERVICE DOMAIN',
    publicNotes: 'PUBLIC NOTES',
    knowledgeNotes: '知识笔记',
    curatedFromNotion: '提炼自个人学习手册',
    topicIndex: 'TOPIC INDEX',
    topics: '服务与主题',
    specialIndex: '专题目录',
    topicScope: '快速查看本领域涉及的知识范围',
    readNote: '阅读笔记',
    backHome: '返回手册首页',
    browseOther: '浏览其他 AWS 知识领域',
    domainDirectory: '领域目录',
    recentlyOrganized: '最近整理',
    keepReading: 'KEEP READING',
    relatedNotes: '相关笔记',
    breadcrumbLabel: '面包屑',
    domainDirectoryLabel: 'AWS 领域目录',
    representativeServicesLabel: '代表服务',
  },
  en: {
    siteTitle: 'AWS Study Handbook',
    siteDescription: 'Panda’s notes on AWS services, architecture, exam topics, and commonly confused concepts.',
    heroTitle: 'Study Handbook',
    heroMeta: 'Cloud Practitioner · SAA-C03 · Services & Architecture',
    heroDescription: 'Complex cloud services, organized into notes you can revisit anytime.',
    searchPlaceholder: 'Search services, terms, or concepts…',
    noResults: 'No related content found',
    domainType: 'Domain',
    topicType: 'Topic',
    noteType: 'Note',
    compareType: 'Compare',
    serviceMap: 'SERVICE MAP',
    coreDomains: 'Core Domains',
    coreDomainsDescription: 'Browse notes by AWS service domain',
    quickReference: 'QUICK REFERENCE',
    specialTopics: 'Quick Reference',
    specialTopicsDescription: 'Exam topics, service selection, and terminology',
    freshNotes: 'FRESH NOTES',
    recentlyUpdated: 'Recently Updated',
    handmade: 'Hand-curated · Continuously refined · For learning reference',
    serviceDomain: 'SERVICE DOMAIN',
    publicNotes: 'PUBLIC NOTES',
    knowledgeNotes: 'Knowledge Notes',
    curatedFromNotion: 'Curated from my personal study handbook',
    topicIndex: 'TOPIC INDEX',
    topics: 'Services & Topics',
    specialIndex: 'Topic Index',
    topicScope: 'A quick view of the knowledge covered in this domain',
    readNote: 'Read note',
    backHome: 'Back to the handbook',
    browseOther: 'Explore other AWS knowledge domains',
    domainDirectory: 'Domain Directory',
    recentlyOrganized: 'Last organized',
    keepReading: 'KEEP READING',
    relatedNotes: 'Related Notes',
    breadcrumbLabel: 'Breadcrumb',
    domainDirectoryLabel: 'AWS domain directory',
    representativeServicesLabel: 'Representative services',
  },
  ja: {
    siteTitle: 'AWS 学習ハンドブック',
    siteDescription: 'AWS サービス、アーキテクチャ、試験ポイント、混同しやすい概念を整理した Panda の学習ノート。',
    heroTitle: '学習ハンドブック',
    heroMeta: 'Cloud Practitioner · SAA-C03 · サービスとアーキテクチャ',
    heroDescription: '複雑なクラウドサービスを、いつでも読み返せるノートに整理。',
    searchPlaceholder: 'サービス・用語・知識を検索…',
    noResults: '関連する内容が見つかりません',
    domainType: '分野',
    topicType: '特集',
    noteType: 'ノート',
    compareType: '比較',
    serviceMap: 'SERVICE MAP',
    coreDomains: '主要分野',
    coreDomainsDescription: 'サービス分野から知識ノートを探す',
    quickReference: 'QUICK REFERENCE',
    specialTopics: 'クイックリファレンス',
    specialTopicsDescription: '試験、サービス選定、用語をまとめて確認',
    freshNotes: 'FRESH NOTES',
    recentlyUpdated: '最近の更新',
    handmade: '手作業で整理 · 継続的に修正 · 学習用メモ',
    serviceDomain: 'SERVICE DOMAIN',
    publicNotes: 'PUBLIC NOTES',
    knowledgeNotes: '知識ノート',
    curatedFromNotion: '個人学習ハンドブックから公開用に整理',
    topicIndex: 'TOPIC INDEX',
    topics: 'サービスとテーマ',
    specialIndex: '特集一覧',
    topicScope: 'この分野で扱う知識を一覧で確認',
    readNote: 'ノートを読む',
    backHome: 'ハンドブックへ戻る',
    browseOther: 'ほかの AWS 分野を見る',
    domainDirectory: '分野一覧',
    recentlyOrganized: '最終整理',
    keepReading: 'KEEP READING',
    relatedNotes: '関連ノート',
    breadcrumbLabel: 'パンくずリスト',
    domainDirectoryLabel: 'AWS 分野一覧',
    representativeServicesLabel: '代表的なサービス',
  },
};

const domainCopy: Record<string, any> = {
  compute: {
    en: ['Compute', 'Compute services for applications, functions, and containers.'],
    ja: ['コンピューティング', 'アプリ、関数、コンテナを実行するためのコンピューティングサービス。'],
  },
  storage: {
    en: ['Storage', 'Object, block, file, and hybrid cloud storage.'],
    ja: ['ストレージ', 'オブジェクト、ブロック、ファイル、ハイブリッドクラウドのストレージ。'],
  },
  database: {
    en: ['Database', 'Relational and non-relational data services.'],
    ja: ['データベース', 'リレーショナルおよび非リレーショナルのデータサービス。'],
  },
  networking: {
    en: ['Networking', 'Build isolated and secure cloud networks.'],
    ja: ['ネットワーク', '分離された安全なクラウドネットワークを構築。'],
  },
  security: {
    en: ['Security', 'Identity, access management, and threat protection.'],
    ja: ['セキュリティ', 'ID、アクセス管理、脅威からの保護。'],
  },
  messaging: {
    en: ['Messaging', 'Reliable messaging and event integration.'],
    ja: ['メッセージング', '信頼性の高いメッセージ配信とイベント連携。'],
  },
  monitoring: {
    en: ['Monitoring', 'Metrics, logs, auditing, and observability.'],
    ja: ['モニタリング', 'メトリクス、ログ、監査、オブザーバビリティ。'],
  },
  devops: {
    en: ['DevOps', 'Automated delivery and infrastructure toolchains.'],
    ja: ['開発と運用', 'デリバリーとインフラを自動化するツール群。'],
  },
  migration: {
    en: ['Migration', 'Move applications and data to the cloud.'],
    ja: ['移行', 'アプリケーションとデータのクラウド移行。'],
  },
  analytics: {
    en: ['Analytics', 'Data processing, analytics, and visualization.'],
    ja: ['分析', 'データ処理、分析、可視化。'],
  },
  'ai-ml': {
    en: ['Artificial Intelligence', 'Build generative AI and machine learning capabilities.'],
    ja: ['人工知能', '生成 AI と機械学習の機能を構築。'],
  },
  architecture: {
    en: ['Architecture', 'Architecture patterns, best practices, and design decisions.'],
    ja: ['アーキテクチャ', '設計パターン、ベストプラクティス、設計判断。'],
  },
  compare: {
    en: ['Common Comparisons', 'Compare services with similar names, purposes, or exam scenarios.'],
    ja: ['混同しやすい比較', '名称、用途、試験シナリオが似たサービスを比較。'],
  },
};

const specialCopy: Record<string, any> = {
  compare: {
    en: ['Common Comparisons', 'Compare services with similar purposes or names.', 'Security Group vs NACL'],
    ja: ['混同しやすい比較', '用途や名称が似たサービスをまとめて比較。', 'Security Group vs NACL'],
  },
  'cloud-practitioner': {
    en: ['Cloud Practitioner Topics', 'Cloud foundations, shared responsibility, pricing, and core services.', 'Foundations & common questions'],
    ja: ['Cloud Practitioner 試験ポイント', 'クラウド基礎、責任共有モデル、料金、主要サービス。', '基礎知識と頻出問題'],
  },
  'saa-c03': {
    en: ['SAA-C03 Topics', 'Architecture selection, high availability, security, and cost.', 'Architecture scenarios'],
    ja: ['SAA-C03 試験ポイント', '構成選定、高可用性、セキュリティ、コスト。', 'アーキテクチャ問題'],
  },
  glossary: {
    en: ['Trilingual AWS Glossary', 'AWS services, abbreviations, and exam terminology in three languages.', 'English · 中文 · 日本語'],
    ja: ['3言語 AWS 用語対照表', 'AWS のサービス名、略語、試験用語を3言語で整理。', '日本語 · 中文 · English'],
  },
};

const topicCopy: Record<string, Record<string, string>> = {
  en: {
    'S3 存储类别与生命周期': 'S3 Storage Classes & Lifecycle',
    'S3 安全与管理': 'S3 Security & Management',
    'EBS 快照与生命周期管理': 'EBS Snapshot & Data Lifecycle Manager',
    'Container 与 Virtual Machine': 'Container vs Virtual Machine',
    'EC2 实例类型与计费模型': 'EC2 Instance Types and Pricing Models',
    'VPN Components：VGW & Customer Gateway': 'VPN Components: VGW & Customer Gateway',
    'AWS 资源交互方式｜Console・CLI・SDK・IaC': 'Ways to Interact with AWS: Console, CLI, SDK, and IaC',
    'AWS Well-Architected Framework': 'AWS Well-Architected Framework',
    'AWS 责任共担模型': 'AWS Shared Responsibility Model',
    'Multi-AZ 与 Multi-Region': 'Multi-AZ vs Multi-Region',
    'High Availability & Fault Tolerance': 'High Availability & Fault Tolerance',
    '可扩展性与弹性': 'Scalability & Elasticity',
    '灾难恢复策略': 'Disaster Recovery Strategies',
    '解耦与事件驱动': 'Decoupling and Event-Driven Architecture',
    '无服务器架构': 'Serverless Architecture',
    '成本优化': 'Cost Optimization',
    '云概念': 'Cloud Concepts',
    '客户端—服务器模型': 'Client–Server Model',
    '云计算与 AWS 的优势': 'Cloud Computing and the Benefits of AWS',
    'AWS 全球基础设施': 'AWS Global Infrastructure',
    '云服务模型与管理责任': 'Cloud Service Models and Management Responsibility',
    '安全架构设计': 'Design Secure Architectures',
    '弹性架构设计': 'Design Resilient Architectures',
    '高性能架构设计': 'Design High-Performing Architectures',
    '成本优化架构设计': 'Design Cost-Optimized Architectures',
  },
  ja: {
    'S3 存储类别与生命周期': 'S3 ストレージクラスとライフサイクル',
    'S3 安全与管理': 'S3 セキュリティと管理',
    'EBS 快照与生命周期管理': 'EBS スナップショットと Data Lifecycle Manager',
    'Container 与 Virtual Machine': 'Container と Virtual Machine',
    'EC2 实例类型与计费模型': 'EC2 インスタンスタイプと料金モデル',
    'VPN Components：VGW & Customer Gateway': 'VPN コンポーネント：VGW と Customer Gateway',
    'AWS 资源交互方式｜Console・CLI・SDK・IaC': 'AWS の操作方法：Console・CLI・SDK・IaC',
    'AWS Well-Architected Framework': 'AWS Well-Architected Framework',
    'AWS 责任共担模型': 'AWS 責任共有モデル',
    'Multi-AZ 与 Multi-Region': 'Multi-AZ と Multi-Region',
    'High Availability & Fault Tolerance': '高可用性とフォールトトレランス',
    '可扩展性与弹性': 'スケーラビリティと弾力性',
    '灾难恢复策略': '災害復旧戦略',
    '解耦与事件驱动': '疎結合とイベント駆動',
    '无服务器架构': 'サーバーレスアーキテクチャ',
    '成本优化': 'コスト最適化',
    '云概念': 'クラウド概念',
    '客户端—服务器模型': 'クライアント—サーバーモデル',
    '云计算与 AWS 的优势': 'クラウドコンピューティングと AWS の利点',
    'AWS 全球基础设施': 'AWS グローバルインフラストラクチャ',
    '云服务模型与管理责任': 'クラウドサービスモデルと管理責任',
    '安全架构设计': 'セキュアなアーキテクチャの設計',
    '弹性架构设计': '回復性の高いアーキテクチャの設計',
    '高性能架构设计': '高性能アーキテクチャの設計',
    '成本优化架构设计': 'コスト最適化アーキテクチャの設計',
  },
};

export function getAwsUi(lang = 'zh') {
  return awsUi[lang as keyof typeof awsUi] || awsUi.zh;
}

export function getAwsDomainCopy(domain: any, lang = 'zh') {
  if (lang === 'zh') {
    return { localName: domain.nameZh, description: domain.description };
  }

  const copy = domainCopy[domain.slug]?.[lang] || domainCopy[domain.slug]?.en;
  return {
    localName: copy?.[0] || domain.name,
    description: copy?.[1] || domain.description,
  };
}

export function getAwsSpecialCopy(item: any, lang = 'zh') {
  if (lang === 'zh') return item;
  const copy = specialCopy[item.slug]?.[lang] || specialCopy[item.slug]?.en;
  return {
    ...item,
    title: copy?.[0] || item.title,
    description: copy?.[1] || item.description,
    preview: copy?.[2] || item.preview,
  };
}

export function getAwsTopicLabel(topic: string, lang = 'zh') {
  if (lang === 'zh') return topic;
  return topicCopy[lang]?.[topic] || topic;
}

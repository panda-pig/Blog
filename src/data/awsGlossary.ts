import { awsGlossaryNoteTranslations } from "./awsGlossaryNotes";

export type AwsGlossaryNote = {
  zh: string;
  en: string;
  ja: string;
};

export type AwsGlossaryEntry = {
  term: string;
  english: string;
  chinese: string;
  japanese: string;
  note: AwsGlossaryNote;
  frequency: number;
};

const rows = [
  {
    "term": "Access Denied",
    "english": "Access Denied",
    "chinese": "访问被拒绝",
    "japanese": "アクセス拒否（必要な Allow がない、または明示的な Deny や権限境界などによって AWS API リクエストが拒否された状態）",
    "note": "从错误中的 Action 入手，检查当前 Principal、直接与继承 Policy、显式 Deny、Resource 和 Condition。",
    "frequency": 5
  },
  {
    "term": "Access Key",
    "english": "AWS Access Key",
    "chinese": "AWS 访问密钥",
    "japanese": "AWS アクセスキー（AWS API リクエストへの署名に使用する認証情報。長期キーは必要な場合だけ使用し、安全な手順で更新する）",
    "note": "API 请求签名凭证。长期 Key 通常属于 IAM User；临时 Key 还包含 Session Token。必须使用长期 Key 时，以“创建新 Key→更新并验证→停用旧 Key→删除旧 Key”的顺序轮换。",
    "frequency": 4
  },
  {
    "term": "Access Key ID",
    "english": "Access Key ID",
    "chinese": "访问密钥 ID",
    "japanese": "アクセスキー ID（AWS API の認証情報一式を識別するための公開側の識別子）",
    "note": "用于标识一组 API 凭证，类似用户名而非密码；请求仍需 Secret，临时凭证还需 Session Token。",
    "frequency": 5
  },
  {
    "term": "Account Alias",
    "english": "AWS Account Alias",
    "chinese": "AWS 账户别名",
    "japanese": "AWS アカウントエイリアス（IAM ユーザーのサインイン時にアカウント ID の代わりに使える一意の別名）",
    "note": "用于简化 IAM User 登录 URL；必须唯一，但不会创建新 Account，也不会改变权限。",
    "frequency": 3
  },
  {
    "term": "ACM",
    "english": "AWS Certificate Manager",
    "chinese": "SSL/TLS 证书管理",
    "japanese": "AWS Certificate Manager（SSL/TLS 証明書管理）",
    "note": "集中申请、部署和续订 SSL/TLS 证书。",
    "frequency": 3
  },
  {
    "term": "Action",
    "english": "Action",
    "chinese": "操作",
    "japanese": "アクション（ポリシーで許可または拒否する AWS API 操作を指定する要素）",
    "note": "指定 AWS API 操作，例如 s3:GetObject；最小权限应避免不必要的 service:*。",
    "frequency": 5
  },
  {
    "term": "ACU",
    "english": "Aurora Capacity Unit",
    "chinese": "Aurora 容量单位",
    "japanese": "Aurora Capacity Unit（Aurora 容量単位）",
    "note": "Aurora Serverless 的计算容量单位，包含相应 Memory、CPU 与 Network 能力。",
    "frequency": 3
  },
  {
    "term": "AdministratorAccess",
    "english": "AWS Managed Policy AdministratorAccess",
    "chinese": "管理员访问策略",
    "japanese": "AdministratorAccess（すべての AWS アクションをすべてのリソースに対して許可する、非常に広範な管理権限の AWS 管理ポリシー）",
    "note": "AWS Managed Policy；核心为 Effect Allow、Action *、Resource *，可附加给 User、Group 或 Role。权限极广，不应作为普通用户默认策略。",
    "frequency": 5
  },
  {
    "term": "Agentless Discovery",
    "english": "Agentless Discovery",
    "chinese": "无代理发现",
    "japanese": "エージェントレス検出",
    "note": "课程中的 VMware 配置／性能采集无需逐台安装发现代理；覆盖范围与进程连接级采集不同。",
    "frequency": 3
  },
  {
    "term": "Agility",
    "english": "Agility",
    "chinese": "敏捷性",
    "japanese": "アジリティ（必要なリソースを短時間で試作・変更・展開できる俊敏性）",
    "note": "强调更快试验、创建、修改和部署，不等于系统按负载自动增减容量。",
    "frequency": 3
  },
  {
    "term": "ALB",
    "english": "Application Load Balancer",
    "chinese": "应用负载均衡器",
    "japanese": "Application Load Balancer（アプリケーションロードバランサー）",
    "note": "第 7 层 HTTP/HTTPS；按 Host、Path、Header、Method、Query、Source IP 路由。目标类型：Instance、IP、Lambda。",
    "frequency": 5
  },
  {
    "term": "Alert Subscription",
    "english": "Cost Anomaly Detection Alert Subscription",
    "chinese": "成本异常告警订阅",
    "japanese": "異常通知サブスクリプション",
    "note": "配置接收者、频率和通知阈值；Individual 用 SNS，Daily／Weekly 汇总用邮件。",
    "frequency": 2
  },
  {
    "term": "Alias Record",
    "english": "Alias Record",
    "chinese": "别名记录",
    "japanese": "エイリアスレコード",
    "note": "Route 53 扩展；可用于 Zone Apex，指向受支持 AWS Target，并继承目标 TTL。",
    "frequency": 5
  },
  {
    "term": "ALPN",
    "english": "Application-Layer Protocol Negotiation",
    "chinese": "应用层协议协商",
    "japanese": "Application-Layer Protocol Negotiation（アプリケーション層プロトコルネゴシエーション）",
    "note": "TLS 扩展，用于在握手时协商 HTTP/1.1、HTTP/2 等上层协议。",
    "frequency": 3
  },
  {
    "term": "Amazon AppFlow",
    "english": "Amazon AppFlow",
    "chinese": "SaaS 托管数据集成",
    "japanese": "Amazon AppFlow（SaaS データ連携）",
    "note": "Salesforce 等 SaaS 与受支持目标间搬运数据；触发、方向与 PrivateLink 支持依 Connector 与 Region。",
    "frequency": 3
  },
  {
    "term": "Amazon Cognito",
    "english": "Amazon Cognito",
    "chinese": "应用客户身份服务",
    "japanese": "Amazon Cognito（顧客 ID・アクセス管理）",
    "note": "面向 Web/Mobile App 用户。User Pool 负责 Sign-up/Sign-in 与 Token；Identity Pool 把身份换成受 IAM Role 限制的 Temporary AWS Credentials。",
    "frequency": 5
  },
  {
    "term": "Amazon Connect",
    "english": "Amazon Connect",
    "chinese": "云联络中心服务",
    "japanese": "Amazon Connect（クラウドコンタクトセンターサービス）",
    "note": "IVR、Queue、Agent、Chat、Callback。",
    "frequency": 3
  },
  {
    "term": "Amazon Data Firehose",
    "english": "Amazon Data Firehose",
    "chinese": "托管数据投递服务",
    "japanese": "Amazon Data Firehose（配信ストリーム）",
    "note": "面向目标的近实时托管投递，按大小或时间缓冲；可转换、压缩、格式转换。投递到 Redshift 时实际先写 S3，再由 COPY 加载。不是供多个消费者自行重放的流。",
    "frequency": 5
  },
  {
    "term": "Amazon Detective",
    "english": "Amazon Detective",
    "chinese": "安全事件调查与根因分析",
    "japanese": "Amazon Detective（セキュリティ調査・根本原因分析サービス）",
    "note": "通过可视化关系和时间线调查安全事件。",
    "frequency": 3
  },
  {
    "term": "Amazon EC2",
    "english": "Amazon Elastic Compute Cloud",
    "chinese": "弹性计算云",
    "japanese": "Amazon EC2（仮想サーバーを必要に応じて起動・停止・拡張できるコンピューティングサービス）",
    "note": "IaaS 计算服务，通过组合 AMI、实例类型、网络、存储以及身份与权限进行配置。",
    "frequency": 5
  },
  {
    "term": "Amazon GuardDuty",
    "english": "Amazon GuardDuty",
    "chinese": "智能威胁检测",
    "japanese": "Amazon GuardDuty（インテリジェントな脅威検出）",
    "note": "持续分析行为与威胁情报，发现可疑活动。",
    "frequency": 4
  },
  {
    "term": "Amazon Inspector",
    "english": "Amazon Inspector",
    "chinese": "漏洞管理",
    "japanese": "Amazon Inspector（脆弱性管理サービス）",
    "note": "持续扫描工作负载的软件漏洞和 CVE。",
    "frequency": 3
  },
  {
    "term": "Amazon Macie",
    "english": "Amazon Macie",
    "chinese": "S3 敏感数据发现",
    "japanese": "Amazon Macie（S3 機密データ検出サービス）",
    "note": "使用机器学习发现 S3 中的 PII 等敏感数据。",
    "frequency": 3
  },
  {
    "term": "Amazon MQ",
    "english": "Amazon MQ",
    "chinese": "托管消息代理服务",
    "japanese": "Amazon MQ（マネージドメッセージブローカー）",
    "note": "为需要 JMS、AMQP、MQTT、OpenWire、STOMP 等既有协议或最小改造迁移的系统提供托管 broker。新建云原生应用通常优先 SQS/SNS。ActiveMQ active/standby 可用 EFS；RabbitMQ 多 AZ 集群使用独立 EBS 与复制，不能套用同一架构图。",
    "frequency": 4
  },
  {
    "term": "Amazon Pinpoint",
    "english": "Amazon Pinpoint",
    "chinese": "客户分群和多渠道营销（历史）",
    "japanese": "Amazon Pinpoint（顧客セグメント・マルチチャネル施策）",
    "note": "课程定位 Segment、Campaign、Journey；2025-05-20 停新客，2026-10-30 结束支持；消息 API 与营销迁移分开核对。",
    "frequency": 2
  },
  {
    "term": "Amazon SES",
    "english": "Amazon Simple Email Service",
    "chinese": "应用程序邮件发送服务",
    "japanese": "Amazon Simple Email Service（アプリケーション向けメール送信サービス）",
    "note": "通过 API 或 SMTP 发送事务性、通知性和营销邮件。 Lecture 372：可按支持 Region／Receipt Rules 接收入站邮件；API 接受、投递、Open／Click 各不等同。SES 也有个性化模板；SPF／DKIM 不是正文加密。",
    "frequency": 3
  },
  {
    "term": "Amazon WorkSpaces",
    "english": "Amazon WorkSpaces",
    "chinese": "托管式云桌面服务",
    "japanese": "Amazon WorkSpaces（フルマネージド型クラウドデスクトップサービス）",
    "note": "为用户提供完整 Windows 或 Linux 云桌面。",
    "frequency": 3
  },
  {
    "term": "Amazon WorkSpaces Applications",
    "english": "Amazon WorkSpaces Applications (formerly Amazon AppStream 2.0)",
    "chinese": "托管式桌面应用流式交付服务",
    "japanese": "Amazon WorkSpaces Applications（旧 Amazon AppStream 2.0、デスクトップアプリケーション配信サービス）",
    "note": "旧题和课程中常见名称为 Amazon AppStream 2.0。",
    "frequency": 3
  },
  {
    "term": "Amazon WorkSpaces Secure Browser",
    "english": "Amazon WorkSpaces Secure Browser (formerly Amazon WorkSpaces Web)",
    "chinese": "托管式隔离浏览器服务",
    "japanese": "Amazon WorkSpaces Secure Browser（旧 Amazon WorkSpaces Web、分離ブラウザーサービス）",
    "note": "从现有浏览器进入云端隔离浏览会话。",
    "frequency": 3
  },
  {
    "term": "AMI",
    "english": "Amazon Machine Image",
    "chinese": "Amazon 机器映像",
    "japanese": "Amazon マシンイメージ",
    "note": "可启动 EC2 模板；EBS-backed AMI 依赖 Snapshot。Region 级，跨 Region 需 Copy AMI；Deregister 不等于自动删除 Backing Snapshot。",
    "frequency": 5
  },
  {
    "term": "Anycast IP",
    "english": "Anycast Internet Protocol Address",
    "chinese": "任播 IP 地址",
    "japanese": "エニーキャスト IP",
    "note": "同一地址从多个 Edge 位置发布，网络把客户端导向合适入口；Global Accelerator 用它提供稳定全球入口。",
    "frequency": 4
  },
  {
    "term": "API",
    "english": "Application Programming Interface",
    "chinese": "应用程序编程接口",
    "japanese": "アプリケーション・プログラミング・インターフェース",
    "note": "软件系统之间进行调用和数据交换的接口。",
    "frequency": 3
  },
  {
    "term": "API Call",
    "english": "Application Programming Interface Call",
    "chinese": "API 调用",
    "japanese": "API 呼び出し（プログラムや AWS マネジメントコンソールが AWS サービスの操作を実行するために送信するリクエスト）",
    "note": "Console 操作底层也会触发一个或多个 API Call；IAM Policy 的 Action 控制这些调用是否被授权。",
    "frequency": 4
  },
  {
    "term": "API Gateway",
    "english": "Amazon API Gateway",
    "chinese": "API 网关",
    "japanese": "Amazon API Gateway（API の作成・公開・管理サービス）",
    "note": "Serverless API Front Door。Backend 可为 Lambda、HTTP 或 AWS Service。IAM 适合 AWS Identity，Cognito 适合 App User，Lambda Authorizer 适合 Custom Auth；API Key 主要用于识别、限额和计量。",
    "frequency": 5
  },
  {
    "term": "Application Version",
    "english": "Elastic Beanstalk Application Version",
    "chinese": "应用版本",
    "japanese": "アプリケーションバージョン",
    "note": "Elastic Beanstalk 中一次可部署的应用代码包；Environment 同一时间运行一个 Version。",
    "frequency": 3
  },
  {
    "term": "Architecture Pattern",
    "english": "Architecture Pattern",
    "chinese": "架构模式",
    "japanese": "アーキテクチャパターン",
    "note": "可复用的设计方法，如解耦、缓存、无状态多 AZ；为具体方案提供思路。",
    "frequency": 3
  },
  {
    "term": "ASG",
    "english": "Auto Scaling Group",
    "chinese": "自动伸缩组",
    "japanese": "Auto Scaling グループ（自動スケーリンググループ）",
    "note": "维护 Min ≤ Desired ≤ Max；可跨 AZ 启动实例，并按 Target Tracking、Step、Scheduled、Predictive 等策略扩缩。 Desired=1 的跨 AZ ASG 是自动替换，不等于同时多 AZ 服务或零中断；Hook 是有限等待，准备完成后再验证健康。 来源：Lecture 367。",
    "frequency": 5
  },
  {
    "term": "AssumeRole",
    "english": "AWS STS AssumeRole",
    "chinese": "代入 IAM 角色",
    "japanese": "AssumeRole（信頼されたプリンシパルが AWS STS を通じて IAM ロールの一時認証情報を取得する操作）",
    "note": "代入成功后获得有到期时间的 Access Key ID、Secret Access Key 和 Session Token。",
    "frequency": 5
  },
  {
    "term": "At-Least-Once Delivery",
    "english": "At-Least-Once Delivery",
    "chinese": "至少一次投递",
    "japanese": "少なくとも1回の配信",
    "note": "消息可能重复，因此消费者必须设计成幂等。",
    "frequency": 4
  },
  {
    "term": "Athena",
    "english": "Amazon Athena",
    "chinese": "S3 无服务器 SQL 查询",
    "japanese": "S3 サーバーレス SQL",
    "note": "V2 知识库首批核心词条",
    "frequency": 4
  },
  {
    "term": "Attribute",
    "english": "Attribute",
    "chinese": "属性",
    "japanese": "属性（アトリビュート）",
    "note": "DynamoDB Item 中的字段和值。",
    "frequency": 4
  },
  {
    "term": "Aurora",
    "english": "Amazon Aurora",
    "chinese": "AWS 云原生关系型数据库",
    "japanese": "Amazon Aurora（クラウドネイティブリレーショナルデータベース）",
    "note": "MySQL/PostgreSQL-compatible；6 Copies / 3 AZ，共享 Cluster Storage，1 Writer + 最多 15 Readers。",
    "frequency": 5
  },
  {
    "term": "Aurora Backtrack",
    "english": "Aurora Backtrack",
    "chinese": "Aurora 快速回退",
    "japanese": "Aurora バックトラック",
    "note": "Aurora MySQL 功能，创建 Cluster 时启用，可在 Backtrack Window 内快速倒回，最长 72 小时。",
    "frequency": 4
  },
  {
    "term": "Aurora Database Clone",
    "english": "Aurora Database Cloning",
    "chinese": "Aurora 数据库克隆",
    "japanese": "Aurora データベースクローン",
    "note": "利用 Copy-on-Write 快速创建独立可读写 Cluster，适合 Dev/Test/Staging。",
    "frequency": 4
  },
  {
    "term": "Aurora Global Database",
    "english": "Amazon Aurora Global Database",
    "chinese": "Aurora 全球数据库",
    "japanese": "Amazon Aurora Global Database（グローバルデータベース）",
    "note": "Primary Region 写入，Secondary Regions 提供全球读取与 Region-level DR。",
    "frequency": 5
  },
  {
    "term": "Aurora Replica Auto Scaling",
    "english": "Aurora Replica Auto Scaling",
    "chinese": "Aurora 副本自动扩缩",
    "japanese": "Aurora レプリカオートスケーリング",
    "note": "根据 Reader CPU / Connection 等指标自动增加或减少 Aurora Replicas。",
    "frequency": 4
  },
  {
    "term": "Aurora Serverless",
    "english": "Amazon Aurora Serverless",
    "chinese": "Aurora 无服务器计算",
    "japanese": "Amazon Aurora Serverless（サーバーレス）",
    "note": "根据负载自动调整 Aurora Writer / Reader 的计算容量。",
    "frequency": 4
  },
  {
    "term": "Authentication",
    "english": "Authentication",
    "chinese": "身份验证",
    "japanese": "認証（にんしょう）",
    "note": "确认用户或实体是谁。",
    "frequency": 5
  },
  {
    "term": "Authenticator App",
    "english": "Authenticator Application",
    "chinese": "身份验证器应用",
    "japanese": "認証アプリ（仮想 MFA デバイスとして TOTP コードを生成し、ログイン時の追加認証に使用するアプリケーション）",
    "note": "首次通过 QR Code 或 Secret Key 绑定，后续登录输入当前 TOTP Code。",
    "frequency": 4
  },
  {
    "term": "Authoritative DNS",
    "english": "Authoritative Domain Name System",
    "chinese": "权威 DNS",
    "japanese": "権威DNS",
    "note": "保存并返回某 Zone 的最终 DNS Records；与替 Client 递归查询的 Resolver 不同。",
    "frequency": 4
  },
  {
    "term": "Authorization",
    "english": "Authorization",
    "chinese": "授权",
    "japanese": "認可（にんか）",
    "note": "决定主体可以执行哪些操作。",
    "frequency": 5
  },
  {
    "term": "Auto Scaling",
    "english": "Amazon EC2 Auto Scaling",
    "chinese": "自动扩缩容",
    "japanese": "オートスケーリング",
    "note": "根据指标自动增加或减少实例；负责容量，ELB 负责分发流量。",
    "frequency": 5
  },
  {
    "term": "Auto-assign public IPv4",
    "english": "Auto-assign Public IPv4 Address",
    "chinese": "自动分配公有 IPv4",
    "japanese": "パブリック IPv4 アドレスの自動割り当て",
    "note": "只控制实例是否自动获得公有 IPv4，不单独决定子网公私属性。",
    "frequency": 3
  },
  {
    "term": "Automated Backup",
    "english": "Automated Backup",
    "chinese": "自动备份",
    "japanese": "自動バックアップ",
    "note": "RDS 自动备份结合日志支持保留期内时间点恢复。",
    "frequency": 4
  },
  {
    "term": "Availability",
    "english": "Service Availability",
    "chinese": "服务可用性",
    "japanese": "可用性",
    "note": "服务在需要时能否被成功访问。",
    "frequency": 5
  },
  {
    "term": "AWS",
    "english": "Amazon Web Services",
    "chinese": "亚马逊云科技 / 云服务平台",
    "japanese": "アマゾン・ウェブ・サービス",
    "note": "全球云平台；考试围绕安全、可靠性、弹性、按需付费和责任共担模型展开。",
    "frequency": 5
  },
  {
    "term": "AWS Account",
    "english": "Amazon Web Services Account",
    "chinese": "AWS 账户",
    "japanese": "AWS アカウント（AWS リソース、認証、請求を管理する単位）",
    "note": "AWS 资源、身份和账单的管理边界；同一 Account 可包含多个 IAM 身份，但不同身份不是不同 Account。",
    "frequency": 5
  },
  {
    "term": "AWS Amplify",
    "english": "AWS Amplify",
    "chinese": "Web 与移动应用全栈开发及托管平台",
    "japanese": "AWS Amplify（Web・モバイル向けフルスタック開発・ホスティングプラットフォーム）",
    "note": "面向前端团队的构建、托管和云后端连接平台。 Lecture 381：Hosting、Backend 与 Libraries 分工；课程 Gen 1 CLI 与当前 Gen 2 TypeScript／CDK 区分。原生移动客户端有自己的发布渠道；实际后端 IAM／数据授权仍需设计。",
    "frequency": 3
  },
  {
    "term": "AWS API",
    "english": "AWS Application Programming Interface",
    "chinese": "AWS 应用程序编程接口",
    "japanese": "AWS API（AWS のアプリケーションプログラミングインターフェース）",
    "note": "管理 AWS 资源的各种方式最终都会与 AWS API 交互。",
    "frequency": 3
  },
  {
    "term": "AWS Application Discovery Service",
    "english": "AWS Application Discovery Service",
    "chinese": "AWS 本地环境发现与应用依赖分析",
    "japanese": "AWS Application Discovery Service（アプリケーション検出・依存関係分析サービス）",
    "note": "收集配置、利用率、进程、连接与依赖；无代理与代理的覆盖不同，不执行磁盘复制。自 2025-11-07 起停止接纳新客户，既有客户可继续使用，新项目按官方引导评估 AWS Transform。",
    "frequency": 3
  },
  {
    "term": "AWS AppSync",
    "english": "AWS AppSync",
    "chinese": "托管 GraphQL API 与实时数据服务",
    "japanese": "AWS AppSync（フルマネージド型 GraphQL API・リアルタイムデータサービス）",
    "note": "GraphQL Schema、Resolver、Data Source、Subscription。",
    "frequency": 3
  },
  {
    "term": "AWS Architecture Center",
    "english": "AWS Architecture Center",
    "chinese": "AWS 架构资源中心",
    "japanese": "AWS アーキテクチャセンター",
    "note": "获取参考架构示例、图示、最佳实践与设计选择资源的门户。",
    "frequency": 2
  },
  {
    "term": "AWS Artifact",
    "english": "AWS Artifact",
    "chinese": "合规文档与协议自助服务",
    "japanese": "AWS Artifact（コンプライアンス文書・契約のセルフサービス）",
    "note": "获取 AWS 合规报告并管理适用协议；不扫描客户资源。",
    "frequency": 4
  },
  {
    "term": "AWS Audit Manager",
    "english": "AWS Audit Manager",
    "chinese": "审计证据自动收集与评估管理",
    "japanese": "AWS Audit Manager（監査証拠の自動収集・評価支援）",
    "note": "按审计框架组织控制并持续收集客户环境证据。",
    "frequency": 4
  },
  {
    "term": "AWS Backup",
    "english": "AWS Backup",
    "chinese": "集中式备份服务",
    "japanese": "AWS Backup（一元管理型バックアップサービス）",
    "note": "统一管理多服务备份：Plan、Rule、Assignment、Job、Recovery Point、Restore Test。功能依资源／Region；Vault Lock 需区分 Governance 与 Compliance 宽限期结束后的不可变保护。",
    "frequency": 4
  },
  {
    "term": "AWS Backup Vault Lock",
    "english": "AWS Backup Vault Lock",
    "chinese": "AWS Backup 不可变保留锁",
    "japanese": "AWS Backup ボールトロック",
    "note": "Governance 可按权限解除；Compliance 宽限期至少 3 天，结束后锁不可移除，包括 Root／AWS。",
    "frequency": 4
  },
  {
    "term": "AWS Batch",
    "english": "AWS Batch",
    "chinese": "批处理计算服务",
    "japanese": "AWS Batch（バッチコンピューティングサービス）",
    "note": "适合排队执行大量非实时计算任务；会自动调度和扩缩计算资源。 Array Job 与 Multi-node Parallel 分开；EC2-based MNP 不支持 Spot Compute Environment，Fargate 不支持 MNP。 来源：Lecture 366。 Lecture 379：Job Definition／Job Queue／Compute Environment 分工；Lambda 也支持兼容的 Container Image／Custom Runtime。Batch 不受 Lambda 15 分钟上限，但仍有 Timeout、计算模式与配额边界。",
    "frequency": 3
  },
  {
    "term": "AWS Billing and Cost Management",
    "english": "AWS Billing and Cost Management",
    "chinese": "AWS 账单与成本管理",
    "japanese": "AWS 請求とコスト管理",
    "note": "账单、付款、成本分析与治理的统一入口。",
    "frequency": 5
  },
  {
    "term": "AWS Budgets",
    "english": "AWS Budgets",
    "chinese": "AWS 预算与阈值告警",
    "japanese": "AWS Budgets（コストや使用量の実績値・予測値にしきい値を設定して通知するサービス）",
    "note": "Zero Spend Budget 适合尽早发现 Free Tier 超额使用；可同时针对实际值和预测值设置通知。",
    "frequency": 5
  },
  {
    "term": "AWS Builder ID",
    "english": "AWS Builder ID",
    "chinese": "AWS 构建者身份",
    "japanese": "AWS Builder ID",
    "note": "Lecture 391；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "AWS Certification Account",
    "english": "AWS Certification Account",
    "chinese": "AWS 认证账号",
    "japanese": "AWS 認定アカウント",
    "note": "Lecture 391–394；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "AWS CLI",
    "english": "AWS Command Line Interface",
    "chinese": "AWS 命令行界面",
    "japanese": "AWS CLI（ターミナルからコマンドやシェルスクリプトで AWS API を操作するコマンドラインツール）",
    "note": "在 Terminal 中通过命令和 Shell Script 调用 AWS API；aws configure 保存 Profile 的凭证、默认 Region 与输出格式，但不授予 IAM 权限。人员优先 Identity Center / 临时凭证。",
    "frequency": 4
  },
  {
    "term": "AWS CLI Profile",
    "english": "AWS CLI named profile",
    "chinese": "AWS CLI 命名配置档案",
    "japanese": "AWS CLI プロファイル（認証情報、リージョン、出力形式などの設定を名前付きで分離し、切り替えて使用する設定単位）",
    "note": "用 --profile 明确选择；Profile 是本地配置单元，不是 IAM 身份或权限策略。",
    "frequency": 3
  },
  {
    "term": "AWS Cloud Adoption Framework",
    "english": "AWS Cloud Adoption Framework (AWS CAF)",
    "chinese": "AWS 云采用框架",
    "japanese": "AWS クラウド導入フレームワーク",
    "note": "通过业务、人员、治理、平台、安全和运营六个视角提升云就绪能力。",
    "frequency": 4
  },
  {
    "term": "AWS CloudShell",
    "english": "AWS CloudShell",
    "chinese": "浏览器云命令行环境",
    "japanese": "AWS CloudShell（ブラウザ上で事前設定済みの AWS CLI を使用し、コンソールの IAM 権限に基づく一時認証情報を自動取得するシェル環境）",
    "note": "无需本地安装 CLI；使用当前 Console 身份的临时轮换凭证。$HOME 提供按 Region 分离的持久存储，单次命令可用 --region 覆盖默认 Region。",
    "frequency": 3
  },
  {
    "term": "AWS CodeBuild",
    "english": "AWS CodeBuild",
    "chinese": "托管构建与测试服务",
    "japanese": "AWS CodeBuild（フルマネージド型ビルド・テストサービス）",
    "note": "读取 buildspec，编译、测试、打包并输出 Artifact。",
    "frequency": 3
  },
  {
    "term": "AWS CodePipeline",
    "english": "AWS CodePipeline",
    "chinese": "持续交付流水线编排服务",
    "japanese": "AWS CodePipeline（継続的デリバリーパイプライン管理サービス）",
    "note": "编排 Source、Build、Test、Approval、Deploy 等阶段。",
    "frequency": 3
  },
  {
    "term": "AWS Compute Optimizer",
    "english": "AWS Compute Optimizer",
    "chinese": "AWS 计算资源优化建议",
    "japanese": "AWS Compute Optimizer（コンピューティングリソースの適正化推奨）",
    "note": "根据利用率数据提供资源规格与配置建议。",
    "frequency": 4
  },
  {
    "term": "AWS Config",
    "english": "AWS Config",
    "chinese": "资源配置与合规",
    "japanese": "リソース構成とコンプライアンス",
    "note": "V2 知识库首批核心词条",
    "frequency": 5
  },
  {
    "term": "aws configure",
    "english": "AWS CLI configure command",
    "chinese": "AWS CLI 配置命令",
    "japanese": "aws configure（AWS CLI のプロファイルに認証情報、既定リージョン、既定の出力形式などを保存する設定コマンド）",
    "note": "保存客户端配置，不创建 IAM User、不附加 Policy、也不保证后续 API 调用有权限。",
    "frequency": 4
  },
  {
    "term": "AWS Control Tower",
    "english": "AWS Control Tower",
    "chinese": "多账户 Landing Zone 与治理",
    "japanese": "AWS Control Tower（マルチアカウント環境の構築・統制）",
    "note": "Landing Zone、Account Factory、Controls 和治理 Dashboard。",
    "frequency": 4
  },
  {
    "term": "AWS Cost Explorer",
    "english": "AWS Cost Explorer",
    "chinese": "AWS 成本与用量分析",
    "japanese": "AWS Cost Explorer（コストと使用量の可視化・分析）",
    "note": "分析历史成本、趋势、分组与预测。 Lecture 376：当前成本图表未来预测最多 12 个月；课程 18 个月说法需校正。资源级／小时粒度有开启与支持条件，非实时；购买承诺前看稳定基线。",
    "frequency": 5
  },
  {
    "term": "AWS Credits",
    "english": "AWS Promotional Credits",
    "chinese": "AWS 促销额度",
    "japanese": "AWS クレジット（対象となる AWS 利用料金に充当できる販促残高）",
    "note": "可抵扣符合条件的 AWS 使用费用；有效期、适用服务和获得方式以账户中的条款为准。",
    "frequency": 2
  },
  {
    "term": "AWS DMS",
    "english": "AWS Database Migration Service",
    "chinese": "数据库迁移服务",
    "japanese": "データベース移行サービス",
    "note": "数据库数据迁移可选 Full Load、CDC 或二者组合；Multi-AZ 保护复制计算层。异构 Schema 可由 SCT 或受支持的 DMS Schema Conversion 转换；端点连通不等于迁移完整验证。",
    "frequency": 4
  },
  {
    "term": "AWS DRS",
    "english": "AWS Elastic Disaster Recovery",
    "chinese": "AWS 弹性灾难恢复",
    "japanese": "AWS Elastic Disaster Recovery（災害復旧サービス）",
    "note": "持续块级复制到低成本暂存区，灾难时启动恢复实例并协助 Failback；生产流量 Failover 由外部流量管理完成。与 MGN 计划 Cutover、独立长期备份区分。",
    "frequency": 4
  },
  {
    "term": "AWS End User Messaging",
    "english": "AWS End User Messaging",
    "chinese": "终端用户消息服务",
    "japanese": "AWS End User Messaging（エンドユーザー向けメッセージ）",
    "note": "SMS、Voice、Mobile Push、OTP、号码验证等受支持 API 不因 Pinpoint 结束支持一起结束；邮件与客户旅程按迁移方案分别选择。",
    "frequency": 2
  },
  {
    "term": "AWS Health Dashboard",
    "english": "AWS Health Dashboard",
    "chinese": "账户相关的 AWS 服务健康与事件通知",
    "japanese": "AWS Health Dashboard（アカウント別のサービス稼働状況）",
    "note": "查看 AWS 服务事件、计划变更和账户通知是否影响自己的资源。",
    "frequency": 4
  },
  {
    "term": "AWS IoT Core",
    "english": "AWS IoT Core",
    "chinese": "物联网设备安全连接与消息服务",
    "japanese": "AWS IoT Core（IoT デバイス接続・メッセージングサービス）",
    "note": "设备证书、MQTT Topic、Rules Engine、Device Shadow。",
    "frequency": 3
  },
  {
    "term": "AWS KMS",
    "english": "AWS Key Management Service",
    "chinese": "密钥管理服务",
    "japanese": "AWS KMS（暗号鍵管理サービス）",
    "note": "创建、控制和审计用于数据加密的密钥。",
    "frequency": 5
  },
  {
    "term": "AWS License Manager",
    "english": "AWS License Manager",
    "chinese": "软件许可证集中管理",
    "japanese": "AWS License Manager（ソフトウェアライセンスの一元管理）",
    "note": "跟踪 BYOL 和混合环境许可证使用并防止超用。",
    "frequency": 3
  },
  {
    "term": "AWS Managed Policy",
    "english": "AWS Managed Policy",
    "chinese": "AWS 托管策略",
    "japanese": "AWS 管理ポリシー（AWS が作成・管理し、複数の IAM アイデンティティにアタッチできるポリシー）",
    "note": "由 AWS 创建维护，可附加给多个身份；AWS 可能更新其权限内容。",
    "frequency": 4
  },
  {
    "term": "AWS Management Console",
    "english": "AWS Management Console",
    "chinese": "AWS 管理控制台",
    "japanese": "AWS マネジメントコンソール（ウェブ画面から AWS サービスを操作する管理画面）",
    "note": "Web 图形界面；Multi-session 可并行保存多个登录上下文，但 Session 不是新 Account；区域级资源还受 Region 选择影响。",
    "frequency": 3
  },
  {
    "term": "AWS Marketplace",
    "english": "AWS Marketplace",
    "chinese": "AWS 第三方产品数字市场",
    "japanese": "AWS Marketplace（サードパーティ製品・サービスのデジタルカタログ）",
    "note": "发现、购买和部署第三方软件、数据与专业服务。",
    "frequency": 4
  },
  {
    "term": "AWS Migration Hub",
    "english": "AWS Migration Hub",
    "chinese": "AWS 迁移项目统一管理与跟踪中心",
    "japanese": "AWS Migration Hub（移行プロジェクトの一元管理・進捗追跡）",
    "note": "汇总资产、应用、波次与迁移状态，不是主要复制引擎。自 2025-11-07 起停止接纳新客户，既有项目可继续使用；新项目按官方引导评估 AWS Transform。",
    "frequency": 3
  },
  {
    "term": "AWS Network Firewall",
    "english": "AWS Network Firewall",
    "chinese": "AWS 网络防火墙",
    "japanese": "AWS Network Firewall",
    "note": "托管 VPC 网络检查，结合无/有状态规则、域名与入侵规则；路由必须经过端点，有状态正反路径需对称。",
    "frequency": 4
  },
  {
    "term": "AWS Organizations",
    "english": "AWS Organizations",
    "chinese": "多账户集中管理",
    "japanese": "AWS Organizations（複数アカウントの一元管理）",
    "note": "管理账户、OU、SCP 和合并计费；SCP 只限制、不授予。",
    "frequency": 5
  },
  {
    "term": "AWS ParallelCluster",
    "english": "AWS ParallelCluster",
    "chinese": "HPC 集群部署与管理工具",
    "japanese": "AWS ParallelCluster（HPC クラスター管理ツール）",
    "note": "AWS 支持的开源配置式集群管理工具；资源仍计费，当前文档注明 3.16.0 起不再支持 AWS Batch 调度器。 来源：Lecture 366。",
    "frequency": 4
  },
  {
    "term": "AWS Partner Network",
    "english": "AWS Partner Network",
    "chinese": "AWS 合作伙伴网络",
    "japanese": "AWS パートナーネットワーク",
    "note": "寻找咨询、实施、迁移、托管与技术合作伙伴的生态网络。",
    "frequency": 3
  },
  {
    "term": "AWS Pricing Calculator",
    "english": "AWS Pricing Calculator",
    "chinese": "AWS 定价计算器",
    "japanese": "AWS Pricing Calculator（AWS 利用料金の見積もり）",
    "note": "部署前根据架构假设估算 AWS 费用。",
    "frequency": 5
  },
  {
    "term": "AWS SCT",
    "english": "AWS Schema Conversion Tool",
    "chinese": "Schema 转换工具",
    "japanese": "スキーマ変換ツール",
    "note": "评估并转换异构 Schema／代码对象；受支持路径也可用 DMS Schema Conversion。转换支持范围、人工修复与应用 SQL 验证需要检查，持续搬数据由 DMS 完成。",
    "frequency": 4
  },
  {
    "term": "AWS SDK",
    "english": "AWS Software Development Kit",
    "chinese": "AWS 软件开发工具包",
    "japanese": "AWS SDK（アプリケーションコードから AWS API を呼び出すための、プログラミング言語別のソフトウェア開発キット）",
    "note": "语言相关 Library，用于在应用代码中调用 AWS API；通过 Credential Provider Chain 获取 Role、Identity Center 或其他临时/长期凭证。",
    "frequency": 4
  },
  {
    "term": "AWS Secrets Manager",
    "english": "AWS Secrets Manager",
    "chinese": "机密与凭证管理",
    "japanese": "AWS Secrets Manager（シークレット・認証情報管理）",
    "note": "安全保存并可自动轮换密码、Token 和 API Key。",
    "frequency": 4
  },
  {
    "term": "AWS Security Hub",
    "english": "AWS Security Hub",
    "chinese": "安全态势集中管理",
    "japanese": "AWS Security Hub（セキュリティ態勢の一元管理）",
    "note": "聚合并标准化多个安全服务的 Findings。",
    "frequency": 3
  },
  {
    "term": "AWS Service Catalog",
    "english": "AWS Service Catalog",
    "chinese": "已批准 IT 服务目录",
    "japanese": "AWS Service Catalog（承認済み IT サービスのカタログ管理）",
    "note": "让用户从企业批准的产品目录中受控自助部署。",
    "frequency": 4
  },
  {
    "term": "AWS Shield",
    "english": "AWS Shield",
    "chinese": "DDoS 防护",
    "japanese": "AWS Shield（DDoS 保護サービス）",
    "note": "保护 AWS 应用免受 DoS 与 DDoS 攻击。",
    "frequency": 4
  },
  {
    "term": "AWS Snowball Edge",
    "english": "AWS Snowball Edge Storage Optimized",
    "chinese": "AWS 离线数据迁移与边缘计算设备",
    "japanese": "AWS Snowball Edge（オフラインデータ移行・エッジコンピューティングデバイス）",
    "note": "课程经典离线迁移设备；自 2025-11-07 起不接纳新客户，2026-12-31 停止商业 Region 设备支持（公告对指定 GovCloud／ADC 既有作业有例外）。物理搬运不自动完成数据库 CDC，需算装载、物流、导入、验证与最终增量。",
    "frequency": 3
  },
  {
    "term": "AWS Solutions Library",
    "english": "AWS Solutions Library",
    "chinese": "AWS 解决方案库",
    "japanese": "AWS ソリューションライブラリ",
    "note": "按业务与技术用例组织 Solutions 和 Guidance；部分提供可部署代码／模板，逐项核对交付内容。",
    "frequency": 2
  },
  {
    "term": "AWS Step Functions",
    "english": "AWS Step Functions",
    "chinese": "无服务器工作流编排",
    "japanese": "AWS Step Functions（ワークフローオーケストレーション）",
    "note": "State Machine 编排多步骤流程，支持 Sequence、Choice、Parallel、Wait、Retry/Catch 与 Callback/Human Approval。它负责编排，不执行应用代码。",
    "frequency": 5
  },
  {
    "term": "AWS Support API",
    "english": "AWS Support API",
    "chinese": "AWS 支持服务 API",
    "japanese": "AWS Support API（サポート API）",
    "note": "课程中的 TA 程序访问可指 Support API 的 TA 操作；与专用 Trusted Advisor API 分开核对，适用计划和 IAM 必不可少。",
    "frequency": 2
  },
  {
    "term": "AWS Support Plans",
    "english": "AWS Support Plans",
    "chinese": "AWS 支持计划",
    "japanese": "AWS サポートプラン",
    "note": "根据业务关键程度提供不同技术支持、响应目标与主动指导。",
    "frequency": 5
  },
  {
    "term": "AWS Systems Manager",
    "english": "AWS Systems Manager",
    "chinese": "集中式运维管理",
    "japanese": "AWS Systems Manager（統合運用管理サービス）",
    "note": "集中管理节点、补丁、命令和运维自动化。 Lecture 374–375：Session、Run Command、Patch、Maintenance Windows、Automation 分工；Automation 的 API 步骤不一定要求目标 Agent。会话权限、网络与日志配置分别检查。",
    "frequency": 4
  },
  {
    "term": "AWS Tags",
    "english": "AWS Resource Tags",
    "chinese": "AWS 资源标签",
    "japanese": "AWS リソースタグ（リソースへ付与するキーと値の任意メタデータ）",
    "note": "Key-Value 元数据，用于分类、成本、自动化和治理；Tag 本身不授予访问权限。",
    "frequency": 4
  },
  {
    "term": "AWS Three-Phase Migration Process",
    "english": "Assess → Mobilize → Migrate & Modernize",
    "chinese": "AWS 三阶段迁移流程",
    "japanese": "AWS 3段階移行プロセス",
    "note": "描述迁移项目的推进顺序：评估、准备、迁移与现代化。",
    "frequency": 5
  },
  {
    "term": "AWS Transfer Family",
    "english": "AWS Transfer Family",
    "chinese": "AWS 托管文件传输服务",
    "japanese": "AWS Transfer Family（マネージドファイル転送サービス）",
    "note": "为 SFTP、FTPS、FTP、AS2 等业务文件交换提供托管入口。",
    "frequency": 3
  },
  {
    "term": "AWS Transform MGN",
    "english": "AWS Transform MGN (formerly AWS Application Migration Service)",
    "chinese": "AWS 服务器与应用迁移服务",
    "japanese": "AWS Transform MGN（サーバー・アプリケーション移行サービス）",
    "note": "原 AWS Application Migration Service，于 2026-06-08 更名；持续块级复制、测试后计划 Cutover 到 EC2。与 DRS 长期灾备及 Failback 区分，迁移后仍需 HA／备份／现代化。",
    "frequency": 4
  },
  {
    "term": "AWS Trusted Advisor",
    "english": "AWS Trusted Advisor",
    "chinese": "AWS 最佳实践检查与优化建议",
    "japanese": "AWS Trusted Advisor（ベストプラクティスに基づく最適化推奨）",
    "note": "六类检查：成本、性能、安全、容错、服务限制、卓越运营；建议／Excluded Items 不等于整改。当前覆盖、刷新与 API 按主页面核对。",
    "frequency": 4
  },
  {
    "term": "AWS WAF",
    "english": "AWS Web Application Firewall",
    "chinese": "Web 应用防火墙",
    "japanese": "AWS WAF（ウェブアプリケーションファイアウォール）",
    "note": "按规则过滤 HTTP(S) 请求，防御 SQL 注入和 XSS。",
    "frequency": 4
  },
  {
    "term": "AWS Well-Architected Framework",
    "english": "AWS Well-Architected Framework",
    "chinese": "AWS 架构最佳实践框架",
    "japanese": "AWS Well-Architected Framework（優れた設計のためのベストプラクティス体系）",
    "note": "用六大支柱持续评审和改进工作负载；六项通用设计原则指导实践。一次改进可改善多支柱，仍需按业务目标说明取舍。",
    "frequency": 5
  },
  {
    "term": "AWS Well-Architected Six Pillars",
    "english": "AWS Well-Architected Framework Six Pillars",
    "chinese": "Well-Architected 六大支柱",
    "japanese": "AWS Well-Architected の 6 本の柱（運用上の優秀性・セキュリティ・信頼性・パフォーマンス効率・コスト最適化・持続可能性）",
    "note": "运、安、稳、快、省、绿。六大支柱是评审维度，与六项通用设计原则、Trusted Advisor 六类检查不同。",
    "frequency": 5
  },
  {
    "term": "AWS Well-Architected Tool",
    "english": "AWS Well-Architected Tool",
    "chinese": "架构评审与风险改进工具",
    "japanese": "AWS Well-Architected Tool（Well-Architected レビュー支援サービス）",
    "note": "按六大支柱评审 Workload，记录 Risk、Improvement Plan 与 Milestone；Lens 是问题与最佳实践，Milestone 是评审快照，不是业务备份。",
    "frequency": 4
  },
  {
    "term": "AWS X-Ray",
    "english": "AWS X-Ray",
    "chinese": "分布式请求追踪服务",
    "japanese": "AWS X-Ray（分散トレーシング・性能分析サービス）",
    "note": "通过 Trace 和 Service Map 定位调用链延迟与错误。",
    "frequency": 4
  },
  {
    "term": "aws_s3",
    "english": "PostgreSQL aws_s3 Extension",
    "chinese": "PostgreSQL 的 S3 数据导入扩展",
    "japanese": "PostgreSQL の S3 データインポート拡張",
    "note": "Aurora PostgreSQL 可导入支持格式的 S3 表数据到现有表；不是任意整库备份恢复或自动创建集群。",
    "frequency": 3
  },
  {
    "term": "AZ",
    "english": "Availability Zone",
    "chinese": "可用区",
    "japanese": "AWS アベイラビリティーゾーン（リージョン内で障害分離されたインフラストラクチャ拠点）",
    "note": "Region 内一个或多个离散数据中心组成的故障隔离边界；高可用架构通常至少跨 2 个 AZ。",
    "frequency": 5
  },
  {
    "term": "Backup & Restore",
    "english": "Backup and Restore",
    "chinese": "备份与恢复策略",
    "japanese": "バックアップと復元",
    "note": "依靠可信备份重建／恢复应用；成本与恢复时间通常较低／较长，实际需验证业务 RTO。",
    "frequency": 5
  },
  {
    "term": "Backup Plan",
    "english": "Backup Plan",
    "chinese": "备份计划",
    "japanese": "バックアッププラン",
    "note": "由多条备份规则组成；还须选中资源、授权并成功执行任务，才能得到可用恢复点。",
    "frequency": 4
  },
  {
    "term": "Backup Rule",
    "english": "Backup Rule",
    "chinese": "备份规则",
    "japanese": "バックアップルール",
    "note": "定义频率、执行窗口、保留、生命周期和 Copy；启动窗口、完成窗口与保留期作用不同。",
    "frequency": 4
  },
  {
    "term": "Backup Vault",
    "english": "Backup Vault",
    "chinese": "备份保管库",
    "japanese": "バックアップボールト",
    "note": "逻辑管理 Recovery Points、访问、加密与锁的容器；不能直接当作用户管理的普通 S3 Bucket。",
    "frequency": 4
  },
  {
    "term": "Bastion Host",
    "english": "Bastion Host / SSH Jump Host",
    "chinese": "堡垒机 / 跳板机",
    "japanese": "踏み台サーバー",
    "note": "传统公有子网 SSH 管理入口；私有目标可仅允许 Bastion SG。管理登录与应用出网是不同路径。",
    "frequency": 4
  },
  {
    "term": "Batch Processing",
    "english": "Batch Processing",
    "chinese": "批处理",
    "japanese": "バッチ処理",
    "note": "集中处理一批任务，通常不要求即时返回；常用于报表、模拟、ETL。",
    "frequency": 3
  },
  {
    "term": "Beanstalk Environment",
    "english": "Elastic Beanstalk Environment",
    "chinese": "Beanstalk 环境",
    "japanese": "Elastic Beanstalk 環境",
    "note": "运行特定 Application Version 的 AWS Resource Collection，可分为 Dev、Test、Prod。",
    "frequency": 4
  },
  {
    "term": "BGP",
    "english": "Border Gateway Protocol",
    "chinese": "边界网关协议",
    "japanese": "ボーダーゲートウェイプロトコル",
    "note": "用于在网络之间动态交换路由。",
    "frequency": 4
  },
  {
    "term": "Block Storage",
    "english": "Block Storage",
    "chinese": "块存储",
    "japanese": "ブロックストレージ",
    "note": "按块提供低延迟随机读写，像硬盘。",
    "frequency": 5
  },
  {
    "term": "Block-level Replication",
    "english": "Block-level Replication",
    "chinese": "块级复制",
    "japanese": "ブロックレベルレプリケーション",
    "note": "持续复制变化的数据块，可用于 MGN 计划迁移或 DRS 灾备；可能同步损坏／恶意修改，不替代独立不可变备份与应用一致性验证。",
    "frequency": 4
  },
  {
    "term": "Bootstrapping",
    "english": "Bootstrapping",
    "chinese": "引导初始化",
    "japanese": "ブートストラップ（起動時にソフトウェアの導入や設定を自動化して利用可能な状態にする処理）",
    "note": "将启动脚本设计为可重复执行且幂等，可提高 Auto Scaling 重建实例时的可靠性。",
    "frequency": 3
  },
  {
    "term": "Boto3",
    "english": "AWS SDK for Python (Boto3)",
    "chinese": "Python 版 AWS SDK",
    "japanese": "Boto3（Python アプリケーションから AWS サービスの API を呼び出すための AWS SDK for Python）",
    "note": "用于 Python Application Code 调用 AWS；课程提到 Boto，现代 Python 开发通常使用 Boto3。",
    "frequency": 3
  },
  {
    "term": "Bucket",
    "english": "Amazon S3 Bucket",
    "chinese": "S3 存储桶",
    "japanese": "S3 バケット",
    "note": "对象容器以及 Region、权限、Versioning、Lifecycle 的管理边界；General Purpose Bucket 可选择 Shared Global 或 Account Regional Namespace。",
    "frequency": 5
  },
  {
    "term": "Business Continuity",
    "english": "Business Continuity",
    "chinese": "业务连续性",
    "japanese": "事業継続性",
    "note": "确保故障或灾害发生时关键业务仍可持续运行。",
    "frequency": 3
  },
  {
    "term": "Cache Coherency",
    "english": "Cache Coherency",
    "chinese": "缓存一致性 / 协调",
    "japanese": "キャッシュの整合性",
    "note": "源数据、缓存与各副本的新鲜度按写入/失效策略管理；靠近数据库或使用共享缓存都不自动保证写后立即一致。 来源：Lecture 364。",
    "frequency": 4
  },
  {
    "term": "Cache Hit",
    "english": "Cache Hit",
    "chinese": "缓存命中",
    "japanese": "キャッシュヒット",
    "note": "请求数据已在 Cache 中，直接返回而不访问 Source Database。",
    "frequency": 3
  },
  {
    "term": "Cache Key",
    "english": "Cache Key",
    "chinese": "缓存键",
    "japanese": "キャッシュキー",
    "note": "定义哪些请求可以复用答案；按路径、参数、业务实体及必要的用户/租户授权上下文设计。 来源：Lecture 364。",
    "frequency": 4
  },
  {
    "term": "Cache Miss",
    "english": "Cache Miss",
    "chinese": "缓存未命中",
    "japanese": "キャッシュミス",
    "note": "Cache 不含目标数据，Application 查询 Source 后通常把结果写回 Cache。",
    "frequency": 3
  },
  {
    "term": "Cache-Aside",
    "english": "Cache-Aside / Lazy Loading",
    "chinese": "旁路缓存模式 / 延迟加载",
    "japanese": "キャッシュアサイド（遅延読み込み）",
    "note": "灵活且只缓存实际读取的数据，但首个 Miss 较慢，并需处理 Stale Data、TTL 与 Invalidation。",
    "frequency": 4
  },
  {
    "term": "Campaign",
    "english": "Amazon Pinpoint Campaign",
    "chinese": "营销触达活动",
    "japanese": "キャンペーン",
    "note": "向选定受众执行计划性触达；Segment 是受众，Journey 是多步流程。",
    "frequency": 2
  },
  {
    "term": "Capacity Reservation",
    "english": "On-Demand Capacity Reservation",
    "chinese": "按需容量预留",
    "japanese": "オンデマンドキャパシティ予約（特定のアベイラビリティーゾーンで EC2 コンピューティング容量を確保する仕組み）",
    "note": "用于保证容量而非提供折扣；未使用的容量仍会计费，并有 Open 与 Targeted 两种应用方式。",
    "frequency": 5
  },
  {
    "term": "Cascade Failure",
    "english": "Cascading Failure",
    "chinese": "级联故障",
    "japanese": "カスケード障害",
    "note": "一个组件故障继续影响下游；可通过队列、重试、限流和熔断降低风险。",
    "frequency": 3
  },
  {
    "term": "CDN",
    "english": "Content Delivery Network",
    "chinese": "内容分发网络",
    "japanese": "コンテンツデリバリーネットワーク",
    "note": "把内容缓存或分发到靠近用户的节点。",
    "frequency": 4
  },
  {
    "term": "Certification Benefit",
    "english": "AWS Certification Benefit",
    "chinese": "AWS 认证福利",
    "japanese": "AWS 認定の特典",
    "note": "Lecture 392；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Certification Path",
    "english": "AWS Certification Path",
    "chinese": "认证学习路线",
    "japanese": "認定資格の学習ルート",
    "note": "Lecture 395–397；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "CGW",
    "english": "Customer Gateway",
    "chinese": "客户网关",
    "japanese": "カスタマーゲートウェイ",
    "note": "代表客户侧路由器、防火墙或 VPN 设备。",
    "frequency": 4
  },
  {
    "term": "Change Data Capture (CDC)",
    "english": "Change Data Capture",
    "chinese": "变更数据捕获",
    "japanese": "変更データキャプチャ",
    "note": "持续捕获源数据库变化并复制到目标；依赖受支持的源日志、保留与正确起点。CDC-only 需一致基线，低停机仍有受控切换。",
    "frequency": 4
  },
  {
    "term": "Change Set",
    "english": "CloudFormation Change Set",
    "chinese": "资源变更预览",
    "japanese": "変更セット",
    "note": "预览资源增删改与替换；只有 Execute 后才更改，预校验不保证最终成功。",
    "frequency": 4
  },
  {
    "term": "Checkpointing",
    "english": "Checkpointing",
    "chinese": "计算进度检查点保存",
    "japanese": "チェックポイント保存",
    "note": "保存计算进度以支持中断后继续；恢复需应用与调度配合，重要进度应保存到可恢复的持久层。 来源：Lecture 366。",
    "frequency": 3
  },
  {
    "term": "CIDR",
    "english": "Classless Inter-Domain Routing",
    "chinese": "无类别域间路由",
    "japanese": "クラスレスドメイン間ルーティング",
    "note": "用前缀长度表示 IP 地址范围。",
    "frequency": 5
  },
  {
    "term": "Client VPN",
    "english": "AWS Client VPN",
    "chinese": "客户端 VPN",
    "japanese": "AWS Client VPN（クライアント向けリモートアクセス VPN）",
    "note": "个人远程用户安全接入 VPC。",
    "frequency": 4
  },
  {
    "term": "Cloud Computing",
    "english": "Cloud Computing",
    "chinese": "云计算",
    "japanese": "クラウドコンピューティング（必要な IT リソースをインターネット経由でオンデマンド利用する形態）",
    "note": "通过互联网按需获取计算、存储、数据库等 IT 资源，并按使用量付费、快速扩缩容。",
    "frequency": 5
  },
  {
    "term": "CloudFormation",
    "english": "AWS CloudFormation",
    "chinese": "基础设施即代码",
    "japanese": "AWS CloudFormation（コードによるインフラストラクチャ管理サービス）",
    "note": "通过模板声明并重复创建 AWS 资源；适合标准化、版本控制和灾备重建。 Lecture 369–371：声明式 Template 与 Stack；Change Set 预览不等于执行成功。部署 Role、资源替换与数据保护分开；IaC 模板不是业务数据备份。",
    "frequency": 5
  },
  {
    "term": "CloudFormation Service Role",
    "english": "AWS CloudFormation Service Role",
    "chinese": "CloudFormation 部署服务角色",
    "japanese": "CloudFormation サービスロール",
    "note": "服务使用 Role 创建／更新／删除；已有栈的操作者可复用该 Role，需收紧栈操作与角色权限。",
    "frequency": 4
  },
  {
    "term": "CloudFormation Stack",
    "english": "AWS CloudFormation Stack",
    "chinese": "CloudFormation 资源栈",
    "japanese": "CloudFormation スタック",
    "note": "作为整体创建、更新、删除的一组资源；不是模板文件。",
    "frequency": 4
  },
  {
    "term": "CloudFormation Template",
    "english": "AWS CloudFormation Template",
    "chinese": "CloudFormation 模板",
    "japanese": "CloudFormation テンプレート",
    "note": "使用 YAML 或 JSON 声明所需 AWS 资源。 Lecture 369–370：Resources、Parameter、Logical ID 与 Physical ID 分开；Region／AMI／AZ 应参数化，Ref／GetAtt 建立依赖，必要时 DependsOn。Template 不能代替数据备份。",
    "frequency": 5
  },
  {
    "term": "CloudFront",
    "english": "Amazon CloudFront",
    "chinese": "内容分发网络",
    "japanese": "コンテンツ配信ネットワーク",
    "note": "HTTP/HTTPS CDN；Cache Hit 在 Edge 返回。私有 S3 用 OAC，私有 ALB/NLB/EC2 用 VPC Origin；支持 Geo Restriction 与 Invalidation。",
    "frequency": 5
  },
  {
    "term": "CloudFront Cache Invalidation",
    "english": "Amazon CloudFront Cache Invalidation",
    "chinese": "CloudFront 缓存失效",
    "japanese": "CloudFront キャッシュ無効化",
    "note": "在 TTL 到期前主动使指定 Path 的 Edge Cache 失效；下一次请求再从 Origin 获取新内容。 只处理对应 CloudFront 缓存范围，不会同步清 API Gateway/Redis/DAX；不改变源数据，需与版本化 Key/TTL 和其他层失效协同。 来源：Lecture 364。",
    "frequency": 5
  },
  {
    "term": "CloudFront Geo Restriction",
    "english": "Amazon CloudFront Geographic Restriction",
    "chinese": "CloudFront 地理限制",
    "japanese": "CloudFront 地理的制限",
    "note": "在 Distribution 层按国家使用 Allow List 或 Block List 控制内容访问；被阻止通常返回 403。",
    "frequency": 4
  },
  {
    "term": "CloudFront VPC Origin",
    "english": "Amazon CloudFront VPC Origin",
    "chinese": "CloudFront VPC 源站",
    "japanese": "CloudFront VPC オリジン",
    "note": "让 CloudFront 私有连接 VPC 内的 ALB、NLB 或 EC2，后端无需直接暴露到 Internet。",
    "frequency": 4
  },
  {
    "term": "CloudTrail",
    "english": "AWS CloudTrail",
    "chinese": "API 操作审计日志",
    "japanese": "AWS CloudTrail（API 操作の監査ログサービス）",
    "note": "记录谁在何时对什么资源执行了什么 API 操作；回答“谁做了什么”。",
    "frequency": 5
  },
  {
    "term": "CloudWatch",
    "english": "Amazon CloudWatch",
    "chinese": "监控与可观测性服务",
    "japanese": "Amazon CloudWatch（モニタリング・ログ・オブザーバビリティサービス）",
    "note": "监控 Metrics、Logs、Alarm 和 Dashboard；回答“系统现在表现如何”。",
    "frequency": 5
  },
  {
    "term": "CloudWatch Logs",
    "english": "Amazon CloudWatch Logs",
    "chinese": "日志管理服务",
    "japanese": "Amazon CloudWatch Logs（ログ管理サービス）",
    "note": "集中收集和查询应用、系统及 Lambda 日志。",
    "frequency": 4
  },
  {
    "term": "Cluster",
    "english": "Cluster",
    "chinese": "集群",
    "japanese": "クラスター",
    "note": "一组共同提供计算或编排能力的资源；ECS/EKS 都使用 Cluster 概念。",
    "frequency": 3
  },
  {
    "term": "Cluster Placement Group",
    "english": "Cluster Placement Group",
    "chinese": "集群放置组",
    "japanese": "クラスタープレイスメントグループ（単一 AZ 内で EC2 を近接配置して低遅延と高スループットを重視する配置戦略）",
    "note": "适合紧密耦合和 HPC 工作负载。资源集中在单个 AZ，因此不提供 Multi-AZ 高可用性。",
    "frequency": 5
  },
  {
    "term": "CNAME",
    "english": "Canonical Name Record",
    "chinese": "规范名称记录",
    "japanese": "CNAMEレコード",
    "note": "标准 Name-to-Name Record；不能用于 Zone Apex。",
    "frequency": 4
  },
  {
    "term": "Cognito Identity Pool",
    "english": "Amazon Cognito Identity Pool",
    "chinese": "Cognito 身份池",
    "japanese": "Cognito ID プール",
    "note": "把 User Pool 或外部 IdP 身份换成 Temporary AWS Credentials，让 App User 按 IAM Role/Policy 直接访问 AWS Resource；可配置认证或访客身份。",
    "frequency": 5
  },
  {
    "term": "Cognito User Pool",
    "english": "Amazon Cognito User Pool",
    "chinese": "Cognito 用户池",
    "japanese": "Cognito ユーザープール",
    "note": "应用用户目录与 Authentication，完成注册/登录并返回 ID、Access、Refresh Token；Token 可由 API Gateway/ALB 验证，但不是 AWS Access Key。",
    "frequency": 5
  },
  {
    "term": "Compensatory Scoring",
    "english": "Compensatory Scoring",
    "chinese": "补偿计分",
    "japanese": "補償型の採点方式",
    "note": "Lecture 388；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Compliance",
    "english": "Compliance",
    "chinese": "合规性",
    "japanese": "コンプライアンス（法令・規制・業界基準への適合）",
    "note": "选择 Region 时先检查数据驻留、监管、数据保护和行业合规要求。",
    "frequency": 4
  },
  {
    "term": "Compute Environment",
    "english": "AWS Batch Compute Environment",
    "chinese": "批作业计算环境",
    "japanese": "コンピュート環境",
    "note": "定义执行任务的计算资源环境；按 ECS／EKS 与 EC2／Fargate 的支持组合检查。",
    "frequency": 3
  },
  {
    "term": "Compute Optimized Instance",
    "english": "Compute Optimized Instance",
    "chinese": "计算优化型实例",
    "japanese": "コンピューティング最適化インスタンス（高い CPU 性能を重視した EC2 インスタンス）",
    "note": "适合高性能 Web 服务器、批处理、游戏服务器和科学计算等 CPU 密集型工作负载。",
    "frequency": 4
  },
  {
    "term": "Compute Resource",
    "english": "Compute Resource",
    "chinese": "计算资源",
    "japanese": "コンピューティングリソース",
    "note": "CPU、内存、GPU 和运行实例等执行计算所需资源。",
    "frequency": 2
  },
  {
    "term": "Condition",
    "english": "Condition",
    "chinese": "条件",
    "japanese": "条件（MFA、送信元 IP、タグ、組織などのリクエストコンテキストに基づいて規則の適用条件を指定する任意要素）",
    "note": "可选元素，用于依据请求上下文限制策略何时生效。",
    "frequency": 5
  },
  {
    "term": "Connection Refused",
    "english": "Connection Refused",
    "chinese": "连接被拒绝",
    "japanese": "接続拒否（宛先へ到達したが対象ポートでサービスが待ち受けていない、または明示的に拒否された状態）",
    "note": "通常应优先检查操作系统服务、监听端口和主机防火墙；网络路径被阻断更常表现为连接超时。",
    "frequency": 4
  },
  {
    "term": "Connection Timeout",
    "english": "Connection Timeout",
    "chinese": "连接超时",
    "japanese": "接続タイムアウト（応答が返らず、接続試行が制限時間を超えた状態）",
    "note": "除 Security Group 外，还应检查 NACL、路由、Internet Gateway、公有 IP 和防火墙等完整通信路径。",
    "frequency": 4
  },
  {
    "term": "Console Multi-session Support",
    "english": "AWS Management Console Multi-session Support",
    "chinese": "AWS 控制台多会话支持",
    "japanese": "AWS マネジメントコンソールのマルチセッション機能（同じブラウザーで複数のログイン状態を並行利用する機能）",
    "note": "Add Session 可并行登录相同或不同 Account 的身份；Session 不是新 Account，不改变资源归属或权限。",
    "frequency": 3
  },
  {
    "term": "Consumer",
    "english": "Message Consumer",
    "chinese": "消息消费者",
    "japanese": "コンシューマー",
    "note": "读取并处理消息的一方；处理失败时要考虑重试和幂等。",
    "frequency": 3
  },
  {
    "term": "Container",
    "english": "Container",
    "chinese": "容器",
    "japanese": "コンテナ",
    "note": "共享宿主机内核，启动快、可移植；比 VM 更轻量。",
    "frequency": 4
  },
  {
    "term": "Container Image",
    "english": "Container Image",
    "chinese": "容器镜像",
    "japanese": "コンテナイメージ",
    "note": "只读模板；容器是镜像运行后的实例。",
    "frequency": 4
  },
  {
    "term": "Content Domain",
    "english": "Content Domain",
    "chinese": "考试内容域",
    "japanese": "試験の出題分野",
    "note": "Lecture 388；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "CORS",
    "english": "Cross-Origin Resource Sharing",
    "chinese": "跨源资源共享",
    "japanese": "オリジン間リソース共有",
    "note": "Origin = Scheme + Host + Port；CORS 配在被请求目标端，只约束浏览器跨源响应，不授予 S3 权限。",
    "frequency": 4
  },
  {
    "term": "Cost Allocation Tag",
    "english": "Cost Allocation Tag",
    "chinese": "成本分配标签",
    "japanese": "コスト配分タグ",
    "note": "按项目、部门、环境等维度归属和分析成本。",
    "frequency": 4
  },
  {
    "term": "Cost Anomaly Detection",
    "english": "AWS Cost Anomaly Detection",
    "chinese": "AWS 成本异常检测",
    "japanese": "コスト異常検知",
    "note": "ML 学习支出模式；Monitor 定义范围，通知另有阈值；账单数据有延迟，不自动停资源。",
    "frequency": 3
  },
  {
    "term": "Cost Monitor",
    "english": "Cost Anomaly Detection Cost Monitor",
    "chinese": "成本异常监测范围",
    "japanese": "コストモニター",
    "note": "定义按服务、账户、标签或成本类别等监测哪些支出，不是预设预算金额。",
    "frequency": 2
  },
  {
    "term": "Credential Provider Chain",
    "english": "AWS Credential Provider Chain",
    "chinese": "AWS 凭证提供程序链",
    "japanese": "認証情報プロバイダーチェーン（AWS SDK やツールがロール、IAM Identity Center、環境変数、設定ファイル、メタデータなどから認証情報を順番に探索する仕組み）",
    "note": "让 SDK / Tool 自动寻找并刷新适用凭证；避免在应用代码中直接写 Secret。",
    "frequency": 4
  },
  {
    "term": "Credential Rotation",
    "english": "Credential Rotation",
    "chinese": "凭证轮换",
    "japanese": "認証情報のローテーション（古い認証情報を安全に新しいものへ切り替え、漏えいや長期利用のリスクを減らす運用）",
    "note": "长期 Access Key 的安全轮换顺序：创建新 Key、更新所有使用方、验证新 Key、停用旧 Key、确认无异常后删除旧 Key。",
    "frequency": 4
  },
  {
    "term": "Cross-Zone Load Balancing",
    "english": "Cross-Zone Load Balancing",
    "chinese": "跨可用区负载均衡",
    "japanese": "クロスゾーン負荷分散",
    "note": "ALB 在负载均衡器级别默认开启；NLB/GWLB 默认关闭。启用后需留意跨 AZ 数据传输与成本。",
    "frequency": 4
  },
  {
    "term": "CRR",
    "english": "Cross-Region Replication",
    "chinese": "跨区域复制",
    "japanese": "クロスリージョンレプリケーション",
    "note": "不同 Region 的异步对象复制；两端需 Versioning。是否跨账户是独立维度。",
    "frequency": 5
  },
  {
    "term": "CSI Driver",
    "english": "Container Storage Interface Driver",
    "chinese": "容器存储接口驱动",
    "japanese": "CSI ドライバー",
    "note": "连接 Kubernetes 存储请求与实际存储系统的 Driver。StorageClass/PVC 描述需求，EBS/EFS CSI Driver 负责与 AWS Storage 集成；Driver 本身不是存储服务。",
    "frequency": 4
  },
  {
    "term": "Custom Lens",
    "english": "Custom Lens",
    "chinese": "自定义架构评审视角",
    "japanese": "カスタムレンズ",
    "note": "将组织或特定技术的最佳实践表达成评审问题，扩展 AWS 提供的视角。",
    "frequency": 2
  },
  {
    "term": "Customer Managed Policy",
    "english": "Customer Managed Policy",
    "chinese": "客户托管策略",
    "japanese": "カスタマー管理ポリシー（利用者が作成・管理し、複数の IAM アイデンティティで再利用できるポリシー）",
    "note": "客户创建的独立 Managed Policy，可复用、集中更新并使用策略版本。",
    "frequency": 5
  },
  {
    "term": "Cutover",
    "english": "Migration Cutover",
    "chinese": "迁移正式切换",
    "japanese": "移行のカットオーバー",
    "note": "计划切换至目标环境，通常控制源写入、追平并验证，再切连接／流量；需要处理回退的新数据。",
    "frequency": 5
  },
  {
    "term": "Data Center",
    "english": "AWS Data Center",
    "chinese": "物理数据中心",
    "japanese": "AWS データセンター（コンピューティング設備を収容する物理施設）",
    "note": "承载服务器、存储和网络设备的物理设施；一个 AZ 可以由一个或多个离散数据中心组成。",
    "frequency": 4
  },
  {
    "term": "Data Residency",
    "english": "Data Residency",
    "chinese": "数据驻留",
    "japanese": "データレジデンシー",
    "note": "数据必须存储在指定国家、地区或地点；常影响 Region 和 Outposts 选择。",
    "frequency": 3
  },
  {
    "term": "Database",
    "english": "Database",
    "chinese": "数据库",
    "japanese": "データベース",
    "note": "长期组织、查询、更新和分析业务数据的系统。",
    "frequency": 5
  },
  {
    "term": "DDoS",
    "english": "Distributed Denial of Service",
    "chinese": "分布式拒绝服务攻击",
    "japanese": "分散型サービス拒否攻撃",
    "note": "由大量分布式来源同时发起的拒绝服务攻击。",
    "frequency": 4
  },
  {
    "term": "Declarative",
    "english": "Declarative Configuration",
    "chinese": "声明式配置",
    "japanese": "宣言的構成",
    "note": "描述最终需要什么资源，由工具决定具体创建步骤。",
    "frequency": 4
  },
  {
    "term": "Dedicated Host",
    "english": "Dedicated Host",
    "chinese": "专用主机",
    "japanese": "専有ホスト（単一顧客専用の物理 EC2 サーバーを割り当てる購入オプション）",
    "note": "提供物理服务器级可见性与放置控制，更适合按插槽或核心计费的自带许可证需求。",
    "frequency": 3
  },
  {
    "term": "Dedicated Instance",
    "english": "Dedicated Instance",
    "chinese": "专用实例",
    "japanese": "専有インスタンス（単一顧客専用のハードウェア上で実行される EC2 インスタンス）",
    "note": "与按物理主机分配并管理的 Dedicated Host 不同，它不提供主机级可见性，也不支持按插槽或核心管理许可证。",
    "frequency": 3
  },
  {
    "term": "Default Output Format",
    "english": "AWS CLI default output format",
    "chinese": "默认输出格式",
    "japanese": "既定の出力形式（AWS CLI のレスポンスを JSON、table、text、YAML などのどの形式で表示するかを定める設定）",
    "note": "只控制命令结果的显示方式，可被 --output 覆盖，不影响 API 权限或资源状态。",
    "frequency": 2
  },
  {
    "term": "Default Region",
    "english": "AWS CLI default Region",
    "chinese": "默认区域",
    "japanese": "既定のリージョン（コマンドでリージョンを明示しない場合に AWS CLI が使用する標準の AWS リージョン）",
    "note": "可被 --region、环境变量或其他高优先级配置覆盖；决定请求区域上下文，不会授予或绕过 IAM 权限。",
    "frequency": 4
  },
  {
    "term": "Default Route",
    "english": "Default Route",
    "chinese": "默认路由",
    "japanese": "デフォルトルート",
    "note": "IPv4 常写 0.0.0.0/0，IPv6 常写 ::/0。",
    "frequency": 5
  },
  {
    "term": "Delete Marker",
    "english": "Amazon S3 Delete Marker",
    "chinese": "删除标记",
    "japanese": "削除マーカー",
    "note": "Versioning 下不指定 Version ID 的普通 Delete 所创建；删除 Marker 可让旧版本重新可见。",
    "frequency": 4
  },
  {
    "term": "Delete on Termination",
    "english": "Delete on Termination",
    "chinese": "终止时删除",
    "japanese": "終了時に削除",
    "note": "决定 EC2 Terminate 时是否删除对应 EBS。Root 常见默认 Yes、额外 Data Volume 常见 No，但必须检查实际 Block Device Mapping。",
    "frequency": 5
  },
  {
    "term": "DeletionPolicy",
    "english": "CloudFormation DeletionPolicy",
    "chinese": "删除栈或移除资源时的保留策略",
    "japanese": "削除ポリシー",
    "note": "删除 Stack／从模板移除资源时控制 Delete、Retain 或受支持的 Snapshot。",
    "frequency": 3
  },
  {
    "term": "Dependency",
    "english": "Dependency",
    "chinese": "依赖项",
    "japanese": "依存関係（いぞんかんけい）",
    "note": "应用运行依赖的库或组件；容器镜像通常把依赖一起封装。",
    "frequency": 2
  },
  {
    "term": "Deployment",
    "english": "Deployment",
    "chinese": "部署",
    "japanese": "デプロイメント",
    "note": "把应用、配置或版本发布到运行环境。",
    "frequency": 3
  },
  {
    "term": "Deregistration Delay",
    "english": "Deregistration Delay",
    "chinese": "注销延迟 / 连接排空",
    "japanese": "登録解除の遅延（コネクションドレイニング）",
    "note": "Target Group 从目标移除或 ASG 缩容时保护进行中的连接；Classic Load Balancer 的旧称是 Connection Draining。",
    "frequency": 5
  },
  {
    "term": "Direct Connect",
    "english": "AWS Direct Connect",
    "chinese": "AWS 专线连接",
    "japanese": "AWS Direct Connect（AWS への専用ネットワーク接続）",
    "note": "专用连接提供稳定带宽；默认不加密。",
    "frequency": 4
  },
  {
    "term": "Direct Connect Gateway",
    "english": "AWS Direct Connect Gateway",
    "chinese": "Direct Connect 网关",
    "japanese": "Direct Connect ゲートウェイ",
    "note": "全球性逻辑网关，可关联受支持的 VGW/TGW 扩展专线访问；本身不是让所有 VPC 自动传递互通的路由枢纽。",
    "frequency": 4
  },
  {
    "term": "Directly Attached Policy",
    "english": "Directly Attached Policy",
    "chinese": "直接附加策略",
    "japanese": "直接アタッチされたポリシー（グループを経由せず、IAM ユーザーやロールなどのアイデンティティに直接付与されたポリシー）",
    "note": "权限直接来自该身份上的策略；把 User 移出 Group 不会自动撤销这部分权限。",
    "frequency": 4
  },
  {
    "term": "Directory Bucket",
    "english": "Amazon S3 Directory Bucket",
    "chinese": "目录存储桶",
    "japanese": "ディレクトリバケット",
    "note": "用于 S3 Express One Zone 的特殊 Bucket Type，位于指定 AZ；不是控制台中的 Folder。",
    "frequency": 3
  },
  {
    "term": "Discovery Agent",
    "english": "AWS Application Discovery Agent",
    "chinese": "应用发现代理",
    "japanese": "アプリケーション検出エージェント",
    "note": "收集服务器配置、利用率、进程与网络连接，帮助发现依赖与制定波次；与磁盘复制代理分开。",
    "frequency": 3
  },
  {
    "term": "DKIM",
    "english": "DomainKeys Identified Mail",
    "chinese": "域名邮件签名验证",
    "japanese": "DKIM（ドメイン鍵によるメール署名認証）",
    "note": "通过邮件签名与 DNS 公钥验证发信域；不是邮件内容加密。",
    "frequency": 2
  },
  {
    "term": "DLM",
    "english": "Amazon Data Lifecycle Manager",
    "chinese": "数据生命周期管理器",
    "japanese": "データライフサイクルマネージャー",
    "note": "自动创建、保留和删除 EBS 快照与 EBS-backed AMI。",
    "frequency": 4
  },
  {
    "term": "DLQ",
    "english": "Dead-Letter Queue",
    "chinese": "死信队列",
    "japanese": "デッドレターキュー",
    "note": "保存多次处理失败的消息，方便隔离、排查和重新处理。 先分失败阶段：SQS 消费失败、SNS 订阅交付失败、Lambda 异步最终执行失败；不同层分别配置。FIFO 移去 DLQ 可能影响完整业务顺序，需修复与 Redrive。 来源：Lecture 363。",
    "frequency": 5
  },
  {
    "term": "DMS",
    "english": "AWS Database Migration Service",
    "chinese": "数据库迁移服务",
    "japanese": "データベース移行サービス",
    "note": "V2 知识库首批核心词条",
    "frequency": 4
  },
  {
    "term": "DMS Endpoint",
    "english": "AWS DMS Source / Target Endpoint",
    "chinese": "DMS 源／目标连接端点",
    "japanese": "DMS ソース／ターゲットエンドポイント",
    "note": "保存数据库连接、凭据／Secret、端口与 TLS 配置；网络与数据库权限仍需验证。",
    "frequency": 4
  },
  {
    "term": "DMS Schema Conversion",
    "english": "AWS DMS Schema Conversion",
    "chinese": "DMS 托管 Schema 转换",
    "japanese": "DMS スキーマ変換",
    "note": "托管的 Schema／代码对象评估与转换功能；使用迁移项目等资源；数据迁移另由 DMS 完成。",
    "frequency": 4
  },
  {
    "term": "DNS",
    "english": "Domain Name System",
    "chinese": "域名系统",
    "japanese": "ドメインネームシステム",
    "note": "分层、分布式名称系统；Recursive Resolver 查找并缓存，Authoritative DNS 返回最终 Record。",
    "frequency": 5
  },
  {
    "term": "DNS64",
    "english": "DNS64 (AAAA Record Synthesis)",
    "chinese": "DNS64 / 合成 IPv6 DNS 记录",
    "japanese": "DNS64（AAAA レコード合成）",
    "note": "为仅有 IPv4 地址的目标合成 IPv6 DNS 答案，配合 NAT64 与路由实现 IPv6 客户端访问 IPv4-only 服务；DNS 本身不转发业务包。",
    "frequency": 3
  },
  {
    "term": "Document Database",
    "english": "Document Database",
    "chinese": "文档数据库",
    "japanese": "ドキュメントデータベース",
    "note": "以类似 JSON 的文档保存半结构化和嵌套数据。",
    "frequency": 3
  },
  {
    "term": "DocumentDB",
    "english": "Amazon DocumentDB (with MongoDB compatibility)",
    "chinese": "文档数据库服务",
    "japanese": "ドキュメントデータベース",
    "note": "面向 MongoDB 兼容工作负载和复杂文档数据。",
    "frequency": 2
  },
  {
    "term": "Domain Registrar",
    "english": "Domain Registrar",
    "chinese": "域名注册商",
    "japanese": "ドメインレジストラ",
    "note": "管理域名注册续费与 Parent Delegation；不等于 DNS Provider。",
    "frequency": 4
  },
  {
    "term": "DoS",
    "english": "Denial of Service",
    "chinese": "拒绝服务攻击",
    "japanese": "サービス拒否攻撃",
    "note": "通常由单一来源耗尽目标服务资源。",
    "frequency": 3
  },
  {
    "term": "Drift Detection",
    "english": "CloudFormation Drift Detection",
    "chinese": "基础设施配置漂移检测",
    "japanese": "ドリフト検出",
    "note": "对受支持资源比较实际配置与声明；不是自动持续纠偏。",
    "frequency": 3
  },
  {
    "term": "DSSE-KMS",
    "english": "Dual-layer Server-Side Encryption with AWS KMS keys",
    "chinese": "KMS 双层服务端加密",
    "japanese": "AWS KMS キーによる二層サーバー側暗号化",
    "note": "两层独立静态加密，面向高合规需求；不是 TLS + SSE-KMS。",
    "frequency": 3
  },
  {
    "term": "Dual Stack",
    "english": "IPv4/IPv6 Dual Stack",
    "chinese": "IPv4/IPv6 双栈",
    "japanese": "IPv4/IPv6 デュアルスタック",
    "note": "同时使用 IPv4 与 IPv6；两类路由与规则独立，双栈子网中 IPv4 耗尽仍可能阻止实例创建。",
    "frequency": 4
  },
  {
    "term": "Durability",
    "english": "Data Durability",
    "chinese": "数据持久性",
    "japanese": "耐久性",
    "note": "数据是否长期保持、不永久丢失。",
    "frequency": 5
  },
  {
    "term": "DynamoDB",
    "english": "Amazon DynamoDB",
    "chinese": "无服务器 NoSQL 数据库",
    "japanese": "サーバーレス NoSQL",
    "note": "Serverless Key-Value/Document NoSQL；Item 最大 400 KB。Provisioned 使用 RCU/WCU，On-Demand 适合未知突发。Streams 保留 24h；Global Tables 为 Multi-Region Multi-Active；PITR 最长 35 天并恢复到新表。",
    "frequency": 5
  },
  {
    "term": "DynamoDB Accelerator (DAX)",
    "english": "DynamoDB Accelerator",
    "chinese": "DynamoDB 加速器",
    "japanese": "DynamoDB アクセラレータ",
    "note": "DynamoDB 专用托管内存缓存，可把适合的读取降到微秒级。",
    "frequency": 4
  },
  {
    "term": "DynamoDB Streams",
    "english": "Amazon DynamoDB Streams",
    "chinese": "DynamoDB 变更流",
    "japanese": "DynamoDB Streams",
    "note": "按时间顺序捕获 Item Create/Update/Delete；记录保留 24 小时。需要更长保留或更多流式消费者时评估 Kinesis Data Streams for DynamoDB。",
    "frequency": 5
  },
  {
    "term": "EBS",
    "english": "Amazon Elastic Block Store",
    "chinese": "弹性块存储",
    "japanese": "Amazon EBS（永続ブロックストレージ）",
    "note": "EC2 的持久网络块存储；Volume 属于单一 AZ，普通卷通常单实例。Attach 后新卷仍需 Format/Mount，Terminate 是否删除看 Delete on Termination。",
    "frequency": 5
  },
  {
    "term": "EBS Encryption",
    "english": "Amazon EBS Encryption",
    "chinese": "EBS 加密",
    "japanese": "EBS 暗号化",
    "note": "KMS 透明加密 Volume、Snapshot 与 EC2-EBS 传输。未加密卷不能原地转换；常用 Snapshot/Copy 创建新加密卷。",
    "frequency": 4
  },
  {
    "term": "EBS Multi-Attach",
    "english": "Amazon EBS Multi-Attach",
    "chinese": "EBS 多重挂载",
    "japanese": "EBS マルチアタッチ",
    "note": "同一 io1/io2 卷供同一 AZ 内多台兼容 Nitro EC2 访问的 Shared Block；需 Cluster-aware Application/File System，性能由所有实例共享。",
    "frequency": 4
  },
  {
    "term": "EC2",
    "english": "Amazon Elastic Compute Cloud",
    "chinese": "弹性云服务器 / 虚拟机",
    "japanese": "Amazon EC2（仮想サーバー）",
    "note": "用户管理操作系统、补丁和运行环境；适合长期运行、需要系统控制权的工作负载。",
    "frequency": 5
  },
  {
    "term": "EC2 Hibernate",
    "english": "EC2 Instance Hibernation",
    "chinese": "EC2 休眠",
    "japanese": "EC2 休止（RAM の内容を暗号化されたルート EBS に保存し、次回起動時にプロセス状態を復元する機能）",
    "note": "必须在启动时预先启用，并使用受支持的 AMI、实例类型，以及已加密且容量充足的 EBS 根卷。它不能替代备份、灾难恢复或 Multi-AZ 高可用性。",
    "frequency": 5
  },
  {
    "term": "EC2 Instance Connect",
    "english": "EC2 Instance Connect",
    "chinese": "EC2 实例连接",
    "japanese": "EC2 Instance Connect（一時的な SSH 公開鍵をインスタンスへ送信して接続する仕組み）",
    "note": "仍然使用 SSH；需要检查 IAM 权限、操作系统用户名、EIC 软件、网络路径和 22 端口。",
    "frequency": 4
  },
  {
    "term": "EC2 Instance Profile",
    "english": "Amazon EC2 Instance Profile",
    "chinese": "EC2 实例配置文件",
    "japanese": "EC2 インスタンスプロファイル（IAM ロールを EC2 インスタンスへ渡すためのコンテナ）",
    "note": "EC2 通过 IMDS 获取角色的临时凭证；不要在实例内用 aws configure 保存人员长期访问密钥。",
    "frequency": 5
  },
  {
    "term": "EC2 Instance Type",
    "english": "EC2 Instance Type",
    "chinese": "EC2 实例类型",
    "japanese": "EC2 インスタンスタイプ（CPU、メモリ、ネットワーク、ストレージ性能の組み合わせを定義するインスタンス構成）",
    "note": "名称通常按实例家族、代际、附加能力和规格大小解读，应分别评估性能需求与成本需求。",
    "frequency": 5
  },
  {
    "term": "EC2 User Data",
    "english": "Amazon EC2 User Data",
    "chinese": "EC2 用户数据",
    "japanese": "EC2 ユーザーデータ",
    "note": "默认在首次 Launch 执行启动初始化；Running 不等于脚本或应用已 Ready。稳定重组件放 AMI，轻量动态配置放 User Data。 与 Launch Lifecycle Hook 不是天然严格串行；需幂等、Role、网络和明确完成信号。默认首次启动行为与反复执行配置区分。 来源：Lecture 367。",
    "frequency": 4
  },
  {
    "term": "ECMP",
    "english": "Equal-Cost Multi-Path Routing",
    "chinese": "等价多路径路由",
    "japanese": "等コストマルチパス",
    "note": "TGW 等场景可在多条等价 VPN 路径上分担多个流的总吞吐；依赖路由/BGP 配置，不保证单流叠加所有带宽。",
    "frequency": 4
  },
  {
    "term": "ECR",
    "english": "Amazon Elastic Container Registry",
    "chinese": "容器镜像仓库",
    "japanese": "Amazon ECR",
    "note": "Private/Public Container Registry，只存储和分发 Image。Private Pull 需 IAM/Repository Policy；ECS 启动时由 Task Execution Role 拉 Image。Lifecycle Policy 清理旧 Image，Tag Immutability 防覆盖，二者目标不同。",
    "frequency": 4
  },
  {
    "term": "ECS",
    "english": "Amazon Elastic Container Service",
    "chinese": "AWS 容器编排服务",
    "japanese": "Amazon ECS",
    "note": "AWS 原生容器编排。Task Definition 是模板，Task 是运行实例，Service 维持 Desired Count。Task Role 给应用；Execution Role 给 Agent。EC2 模式要分别扩 Task 与底层 Cluster Capacity。",
    "frequency": 5
  },
  {
    "term": "ECS Capacity Provider",
    "english": "Amazon ECS Capacity Provider",
    "chinese": "ECS 容量提供程序",
    "japanese": "ECS キャパシティプロバイダー",
    "note": "定义 Task 从哪里获得计算容量。可使用 FARGATE、FARGATE_SPOT 或 ASG Capacity Provider；Strategy 的 Base / Weight 控制最低量与相对分配。",
    "frequency": 5
  },
  {
    "term": "ECS Task Execution Role",
    "english": "Amazon ECS Task Execution IAM Role",
    "chinese": "ECS 任务执行角色",
    "japanese": "ECS タスク実行 IAM ロール",
    "note": "供 ECS/Fargate Agent 在 Task 启动与运行管理阶段使用，例如拉取 Private ECR Image、发送 Logs、读取启动所需 Secret；不是应用业务代码的权限。",
    "frequency": 5
  },
  {
    "term": "ECS Task Role",
    "english": "Amazon ECS Task IAM Role",
    "chinese": "ECS 任务角色",
    "japanese": "ECS タスク IAM ロール",
    "note": "授予 Container 内 Application 调用 AWS API 的权限；权限随 Task 提供，与底层 EC2/Fargate 计算方式解耦。",
    "frequency": 5
  },
  {
    "term": "EDA",
    "english": "Event-Driven Architecture",
    "chinese": "事件驱动架构",
    "japanese": "イベント駆動型アーキテクチャ",
    "note": "组件通过事件协作，降低耦合；常与 EventBridge、SNS、SQS、Lambda 组合。",
    "frequency": 4
  },
  {
    "term": "Edge",
    "english": "Edge",
    "chinese": "图关系边",
    "japanese": "エッジ",
    "note": "图数据库中连接两个节点的关系。",
    "frequency": 2
  },
  {
    "term": "Edge Location",
    "english": "AWS Edge Location",
    "chinese": "边缘站点",
    "japanese": "AWS エッジロケーション（利用者に近いコンテンツ配信拠点）",
    "note": "靠近终端用户的边缘设施，用于降低访问延迟；不是 Region、AZ 或普通应用数据中心。",
    "frequency": 5
  },
  {
    "term": "EDNS Client Subnet",
    "english": "Extension Mechanisms for DNS Client Subnet",
    "chinese": "EDNS 客户端子网",
    "japanese": "EDNSクライアントサブネット",
    "note": "Resolver 可携带截断的 Client Subnet，帮助地理/延迟/IP 路由判断；并非总是可用。",
    "frequency": 3
  },
  {
    "term": "EFA",
    "english": "Elastic Fabric Adapter",
    "chinese": "弹性 Fabric 适配器",
    "japanese": "Elastic Fabric Adapter（HPC 向け低遅延通信）",
    "note": "为兼容 HPC/AI/ML 程序加速节点通信，可通过 Libfabric 使用 OS-bypass。EFA with ENA 与不支持普通 IP 的 EFA-only 区分。 来源：Lecture 366。",
    "frequency": 4
  },
  {
    "term": "Effect",
    "english": "Effect",
    "chinese": "效果",
    "japanese": "効果（ポリシーステートメントがアクセスを許可するか拒否するかを Allow または Deny で指定する要素）",
    "note": "取值为 Allow 或 Deny；适用的显式 Deny 优先于 Allow。",
    "frequency": 5
  },
  {
    "term": "EFS",
    "english": "Amazon Elastic File System",
    "chinese": "弹性文件系统",
    "japanese": "Amazon EFS（共有ファイルシステム）",
    "note": "托管 NFS 共享文件系统；Regional 可跨 AZ，多客户端通过各 AZ Mount Target 访问，容量自动 Grow/Shrink。",
    "frequency": 4
  },
  {
    "term": "EFS Mount Target",
    "english": "Amazon EFS Mount Target",
    "chinese": "EFS 挂载目标",
    "japanese": "EFS マウントターゲット",
    "note": "EFS 在 VPC/AZ 中的网络入口；通常每个业务 AZ 一个。SG 允许来自客户端 SG 的 NFS TCP 2049。",
    "frequency": 4
  },
  {
    "term": "EFS One Zone",
    "english": "Amazon EFS One Zone",
    "chinese": "EFS 单可用区",
    "japanese": "EFS One Zone",
    "note": "数据存放在单 AZ，成本较低但不具备跨 AZ 数据冗余；其他 AZ 客户端访问可能产生额外延迟与传输费。",
    "frequency": 3
  },
  {
    "term": "EFS Throughput Mode",
    "english": "Amazon EFS Throughput Mode",
    "chinese": "EFS 吞吐模式",
    "japanese": "EFS スループットモード",
    "note": "Elastic 适合不可预测或突发；Provisioned 适合已知持续吞吐；Bursting 与文件系统存储量相关。",
    "frequency": 4
  },
  {
    "term": "Egress-only Internet Gateway",
    "english": "Egress-only Internet Gateway",
    "chinese": "仅出站互联网网关",
    "japanese": "Egress-only インターネットゲートウェイ",
    "note": "有状态 IPv6 仅出站网关，允许主动连接的相关返回，不做 NAT；不负责访问 IPv4-only 目标。",
    "frequency": 5
  },
  {
    "term": "EKS",
    "english": "Amazon Elastic Kubernetes Service",
    "chinese": "托管 Kubernetes 服务",
    "japanese": "Amazon EKS",
    "note": "托管 Kubernetes。Pod 跑在 Node；Managed Node Group 背后是 EC2 + ASG；Fargate Profile 让指定 Pod 不自管 Node；Auto Mode 按 Pod 需求自动提供受管 EC2，二者不是同义词。Storage 通过 CSI Driver 接 EBS/EFS。",
    "frequency": 4
  },
  {
    "term": "EKS Auto Mode",
    "english": "Amazon EKS Auto Mode",
    "chinese": "EKS 自动模式",
    "japanese": "Amazon EKS Auto Mode",
    "note": "根据 Pod 请求自动 Provision 与管理更多 EC2 基础设施容量。它仍使用受管 EC2 Instances，不等于 Fargate 的无 Node Group 计算模型。",
    "frequency": 4
  },
  {
    "term": "Elastic Beanstalk",
    "english": "AWS Elastic Beanstalk",
    "chinese": "面向开发者的托管应用部署服务",
    "japanese": "AWS Elastic Beanstalk（アプリケーションのデプロイ・管理サービス）",
    "note": "以 Application / Version / Environment 管理 Web 或 Worker App；底层真实资源仍可见、可配置并计费。",
    "frequency": 3
  },
  {
    "term": "Elastic IP",
    "english": "Elastic IP Address",
    "chinese": "弹性 IP 地址",
    "japanese": "Elastic IP アドレス（AWS アカウントに割り当てて別の EC2 または ENI へ再関連付けできる固定パブリック IPv4）",
    "note": "Allocate 是向账户分配地址，Associate 是关联到 EC2/ENI，Disassociate 是解除关联，Release 是归还 AWS。Stop/Start 后仍保留，但应确认当前计费规则。同 Region 且兼容 Network Border Group 时可重新关联到另一 AZ 的实例；原 ENI/EBS 不能跨 AZ 搬迁，重绑不保留会话或数据状态。来源：Lecture 367。",
    "frequency": 5
  },
  {
    "term": "Elastic Network Interface (ENI)",
    "english": "Elastic Network Interface",
    "chinese": "弹性网络接口",
    "japanese": "Elastic Network Interface（EC2 に IP、Security Group、MAC アドレスなどのネットワーク識別情報を与える仮想ネットワークカード）",
    "note": "ENI 属于特定 Subnet，因此其 AZ 固定。辅助 ENI 可迁移到同一 AZ 的其他 EC2，但不能跨 AZ 移动。",
    "frequency": 5
  },
  {
    "term": "ElastiCache",
    "english": "Amazon ElastiCache",
    "chinese": "托管内存数据存储与缓存",
    "japanese": "Amazon ElastiCache（マネージドインメモリデータストア）",
    "note": "缓存热点数据、Session 和排行榜；Application 负责 Cache Key、TTL、Invalidation 与一致性。",
    "frequency": 5
  },
  {
    "term": "Elasticity",
    "english": "Elasticity",
    "chinese": "弹性",
    "japanese": "エラスティシティ（需要変動に応じてリソースを動的に増減する性質）",
    "note": "系统不只能够扩容，还会随着负载变化自动缩容，使供给贴近需求。",
    "frequency": 5
  },
  {
    "term": "ELB",
    "english": "Elastic Load Balancing",
    "chinese": "弹性负载均衡",
    "japanese": "Elastic Load Balancing（マネージド負荷分散サービス）",
    "note": "统一入口，把流量分配给健康目标；结合多 AZ 和 ASG 提升可用性与弹性。",
    "frequency": 5
  },
  {
    "term": "ENA",
    "english": "Elastic Network Adapter",
    "chinese": "弹性网络适配器",
    "japanese": "Elastic Network Adapter（拡張ネットワーキング）",
    "note": "常规 IP 网络的 Enhanced Networking；带宽、PPS、延迟取决于实例与驱动，不是统一固定 100 Gbps。 来源：Lecture 366。",
    "frequency": 4
  },
  {
    "term": "Encryption at Rest",
    "english": "Encryption at Rest",
    "chinese": "静态加密",
    "japanese": "保管中の暗号化",
    "note": "保护已经存储在介质中的数据。",
    "frequency": 5
  },
  {
    "term": "Encryption in Transit",
    "english": "Encryption in Transit",
    "chinese": "传输中加密",
    "japanese": "転送中の暗号化",
    "note": "保护网络传输过程中的数据。",
    "frequency": 5
  },
  {
    "term": "Environment",
    "english": "Environment",
    "chinese": "运行环境",
    "japanese": "環境（かんきょう）",
    "note": "可指开发、测试、生产环境，也可指应用所依赖的整体运行条件。",
    "frequency": 2
  },
  {
    "term": "Ephemeral Port",
    "english": "Ephemeral Port",
    "chinese": "临时端口",
    "japanese": "エフェメラルポート",
    "note": "客户端短期使用的动态端口；NACL 返回流量常需放行。",
    "frequency": 4
  },
  {
    "term": "ESL +30",
    "english": "English as a Second Language (ESL) +30 Minutes",
    "chinese": "非英语母语考生英语考试加时",
    "japanese": "英語を母語としない受験者向け30分延長",
    "note": "Lecture 393；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Event Source Mapping",
    "english": "Event Source Mapping",
    "chinese": "事件源映射",
    "japanese": "イベントソースマッピング",
    "note": "Lambda 主动轮询 SQS、Kinesis、DynamoDB Streams 等事件源的配置。 SQS 场景轮询后同步调用 Lambda；成功删除，失败按可见性与队列策略处理。Partial Batch Response 需配置与 Handler 返回配合。 来源：Lecture 363。",
    "frequency": 3
  },
  {
    "term": "EventBridge",
    "english": "Amazon EventBridge",
    "chinese": "事件总线服务",
    "japanese": "Amazon EventBridge（イベントバス）",
    "note": "按规则匹配并路由事件，适合事件驱动架构和 SaaS 集成。",
    "frequency": 4
  },
  {
    "term": "Exam Accommodation",
    "english": "Exam Accommodation",
    "chinese": "考试便利安排",
    "japanese": "受験上の配慮",
    "note": "Lecture 393；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Exam Guide",
    "english": "AWS Certification Exam Guide",
    "chinese": "考试指南",
    "japanese": "試験ガイド",
    "note": "Lecture 388；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Exam Voucher",
    "english": "Exam Voucher",
    "chinese": "考试优惠券",
    "japanese": "試験バウチャー",
    "note": "Lecture 392、397；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Execution Role",
    "english": "Lambda Execution Role",
    "chinese": "Lambda 执行角色",
    "japanese": "Lambda 実行ロール",
    "note": "决定 Lambda 运行时可以访问哪些 AWS 资源，不决定谁可以调用 Lambda。",
    "frequency": 4
  },
  {
    "term": "Explicit Deny",
    "english": "Explicit Deny",
    "chinese": "显式拒绝",
    "japanese": "明示的な拒否（適用される Allow より優先してアクセスを拒否する規則）",
    "note": "适用的显式 Deny 会覆盖其他 Policy 中的 Allow，是 IAM 权限评估的最高优先级判断。",
    "frequency": 5
  },
  {
    "term": "External Session Store",
    "english": "External Session Store",
    "chinese": "外部会话存储",
    "japanese": "外部セッションストア",
    "note": "Cookie 常只保存 Session ID，真正 Session State 放在所有 Web 节点可访问的共享存储中。",
    "frequency": 5
  },
  {
    "term": "FaaS",
    "english": "Function as a Service",
    "chinese": "函数即服务",
    "japanese": "FaaS（関数実行サービス）",
    "note": "以函数为部署和执行单位；Lambda 是 AWS 的典型 FaaS。",
    "frequency": 3
  },
  {
    "term": "Failback",
    "english": "Failback",
    "chinese": "灾后回切",
    "japanese": "フェイルバック",
    "note": "主站修复后，将灾备期间的新数据同步回源环境，再验证并回切业务；不是只修改 DNS。",
    "frequency": 4
  },
  {
    "term": "Failover",
    "english": "Failover",
    "chinese": "故障切换",
    "japanese": "フェイルオーバー",
    "note": "主资源故障时把流量或工作负载切换到备用资源。",
    "frequency": 5
  },
  {
    "term": "Failover Routing",
    "english": "Failover Routing Policy",
    "chinese": "故障转移路由",
    "japanese": "フェイルオーバールーティング",
    "note": "Primary/Secondary Active-Passive；全部不健康时可能 Fail-open。",
    "frequency": 5
  },
  {
    "term": "Fan-out",
    "english": "Publish/Subscribe Fan-out",
    "chinese": "发布订阅扇出",
    "japanese": "パブリッシュ／サブスクライブ型ファンアウト",
    "note": "一次发布向多个独立订阅分发；SNS→多个 SQS 给每个业务缓冲与失败隔离，不提供跨分支原子成功。 来源：Lecture 363。",
    "frequency": 5
  },
  {
    "term": "Fargate",
    "english": "AWS Fargate",
    "chinese": "无服务器容器计算引擎",
    "japanese": "AWS Fargate（ファーゲート）",
    "note": "Serverless Container Compute，不是编排器。ECS 以 Task、EKS 以 Pod 使用 Fargate；无需管理 EC2 Node。EKS Auto Mode 自动管理 EC2 Capacity，并不等于 Fargate。",
    "frequency": 5
  },
  {
    "term": "Fast Snapshot Restore",
    "english": "Amazon EBS Fast Snapshot Restore",
    "chinese": "快速快照恢复",
    "japanese": "高速スナップショット復元",
    "note": "按 Snapshot + AZ 启用，以额外成本消除从 Snapshot 新建卷的首次访问 Lazy-loading 延迟。",
    "frequency": 3
  },
  {
    "term": "Federation",
    "english": "Identity Federation",
    "chinese": "身份联合",
    "japanese": "フェデレーション（外部の ID プロバイダーと連携し、AWS アカウントごとに長期利用者を作成せず、一時認証情報でアクセスする仕組み）",
    "note": "通过外部 IdP 登录并取得 AWS 临时凭证，不必在每个账户重复创建长期 IAM User；当前人类员工访问 AWS 的首选方式之一。",
    "frequency": 4
  },
  {
    "term": "File Storage",
    "english": "File Storage",
    "chinese": "文件存储",
    "japanese": "ファイルストレージ",
    "note": "提供目录、路径和共享文件系统语义。",
    "frequency": 5
  },
  {
    "term": "Flag for Review",
    "english": "Flag for Review",
    "chinese": "标记待复查",
    "japanese": "見直し用のフラグ",
    "note": "Lecture 389、394；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Foreign Key",
    "english": "Foreign Key",
    "chinese": "外键",
    "japanese": "外部キー",
    "note": "引用另一张表主键并建立关系。",
    "frequency": 4
  },
  {
    "term": "Forwarded IP",
    "english": "Forwarded IP Address",
    "chinese": "代理转发的客户端 IP",
    "japanese": "転送されたクライアント IP アドレス",
    "note": "代理链可在 X-Forwarded-For 等 Header 携带来源；WAF 需显式规则与可信代理/位置，缺失与无效 Header 处理不同。 来源：Lecture 365。",
    "frequency": 4
  },
  {
    "term": "Free account plan",
    "english": "AWS Free Account Plan",
    "chinese": "AWS 免费账户计划",
    "japanese": "AWS 無料アカウントプラン（期間とクレジット上限のある学習・検証向けプラン）",
    "note": "当前计划规则可能变化；应以 AWS 官方账户与计费文档为准，避免把它等同于所有服务永久免费。",
    "frequency": 2
  },
  {
    "term": "FSx",
    "english": "Amazon FSx",
    "chinese": "托管文件系统系列",
    "japanese": "マネージドファイルシステム",
    "note": "V2 知识库首批核心词条",
    "frequency": 3
  },
  {
    "term": "Full Load",
    "english": "Full Load",
    "chinese": "全量加载",
    "japanese": "フルロード",
    "note": "迁移已有数据；单独 Full Load 不持续追踪后续写入，与 CDC 组合时还需正确源日志配置。",
    "frequency": 5
  },
  {
    "term": "Fully Managed Service",
    "english": "Fully Managed Service",
    "chinese": "完全托管服务",
    "japanese": "フルマネージドサービス",
    "note": "AWS 承担更多运维工作；这是程度描述，不是严格统一的产品分类。",
    "frequency": 3
  },
  {
    "term": "Game Day",
    "english": "Game Day",
    "chinese": "故障响应与恢复演练",
    "japanese": "ゲームデイ（障害対応・復旧演習）",
    "note": "有计划地检验人员、流程与系统；设定范围、成功指标、停止条件、恢复与复盘。",
    "frequency": 3
  },
  {
    "term": "Gateway Endpoint",
    "english": "Gateway VPC Endpoint",
    "chinese": "网关型 VPC 端点",
    "japanese": "ゲートウェイ VPC エンドポイント",
    "note": "S3/DynamoDB 通过服务 Prefix List 路由访问；端点本身免费、不关联 SG，不能经其他 VPC/本地网络转借。",
    "frequency": 5
  },
  {
    "term": "GDPR",
    "english": "General Data Protection Regulation",
    "chinese": "欧盟《通用数据保护条例》",
    "japanese": "EU 一般データ保護規則",
    "note": "保护欧盟个人数据和隐私；实际要求需按业务和法律确认。",
    "frequency": 2
  },
  {
    "term": "General Purpose Bucket",
    "english": "Amazon S3 General Purpose Bucket",
    "chinese": "通用存储桶",
    "japanese": "汎用バケット",
    "note": "常规 S3 Bucket 类型，支持广泛 S3 功能；不同于 Express One Zone 的 Directory Bucket。",
    "frequency": 4
  },
  {
    "term": "General Purpose Instance",
    "english": "General Purpose Instance",
    "chinese": "通用型实例",
    "japanese": "汎用インスタンス（コンピューティング、メモリ、ネットワーク資源のバランスを重視した EC2 インスタンス）",
    "note": "适合 Web 服务器、中小型数据库和开发环境等广泛用途。",
    "frequency": 4
  },
  {
    "term": "Geolocation Routing",
    "english": "Geolocation Routing Policy",
    "chinese": "地理位置路由",
    "japanese": "位置情報ルーティング",
    "note": "按用户 Country / Continent / US State 规则返回；建议配置 Default。",
    "frequency": 4
  },
  {
    "term": "Geoproximity Routing",
    "english": "Geoproximity Routing Policy",
    "chinese": "地理邻近路由",
    "japanese": "地理的近接性ルーティング",
    "note": "按 User + Resource 地理距离选择，并用 Bias 调整边界；Bias 不是百分比。",
    "frequency": 4
  },
  {
    "term": "Glacier Deep Archive",
    "english": "Amazon S3 Glacier Deep Archive",
    "chinese": "Glacier 深度归档",
    "japanese": "S3 Glacier Deep Archive",
    "note": "长期封存、极低成本、恢复时间最长。",
    "frequency": 5
  },
  {
    "term": "Glacier Flexible Retrieval",
    "english": "Amazon S3 Glacier Flexible Retrieval",
    "chinese": "Glacier 灵活检索",
    "japanese": "S3 Glacier Flexible Retrieval",
    "note": "归档数据，可等待分钟到小时恢复。",
    "frequency": 5
  },
  {
    "term": "Glacier Instant Retrieval",
    "english": "Amazon S3 Glacier Instant Retrieval",
    "chinese": "Glacier 即时检索",
    "japanese": "S3 Glacier Instant Retrieval",
    "note": "极少访问但需要毫秒级取回。",
    "frequency": 5
  },
  {
    "term": "Glacier Vault Lock",
    "english": "Amazon S3 Glacier Vault Lock",
    "chinese": "Glacier 保险库锁",
    "japanese": "Glacier ボールトロック",
    "note": "锁定 Vault Lock Policy 后不可再更改或删除，用于 WORM 合规。",
    "frequency": 3
  },
  {
    "term": "Global Accelerator",
    "english": "AWS Global Accelerator",
    "chinese": "全球网络加速",
    "japanese": "AWS Global Accelerator（グローバルネットワーク高速化サービス）",
    "note": "无缓存的全球 TCP/UDP 加速；IPv4 默认两个静态 Anycast IP，按位置与健康状态路由到 Regional Endpoint Group。",
    "frequency": 4
  },
  {
    "term": "Global Service",
    "english": "AWS Global Service",
    "chinese": "全球级服务",
    "japanese": "AWS グローバルサービス（単一リージョンに限定されないサービス）",
    "note": "服务控制面或配置不局限于单一 Region；WAF 的作用范围仍取决于所保护资源。",
    "frequency": 5
  },
  {
    "term": "Global Tables",
    "english": "DynamoDB Global Tables",
    "chinese": "DynamoDB 全球表",
    "japanese": "グローバルテーブル",
    "note": "Multi-Region、Multi-Active 的 DynamoDB 复制能力。",
    "frequency": 5
  },
  {
    "term": "Golden AMI",
    "english": "Golden Amazon Machine Image",
    "chinese": "黄金镜像",
    "japanese": "ゴールデンAMI",
    "note": "预烘焙稳定、重复、耗时的 OS 依赖与应用组件，以加快启动并减少配置漂移。",
    "frequency": 5
  },
  {
    "term": "gp2",
    "english": "General Purpose SSD (gp2)",
    "chinese": "通用型 SSD gp2",
    "japanese": "汎用 SSD（gp2）",
    "note": "旧一代通用 EBS SSD；基线 IOPS 与容量耦合并使用 Burst 模型。",
    "frequency": 4
  },
  {
    "term": "gp3",
    "english": "General Purpose SSD (gp3)",
    "chinese": "通用型 SSD gp3",
    "japanese": "汎用 SSD（gp3）",
    "note": "通用 EBS SSD；容量、IOPS、Throughput 可较独立配置，通常是新建通用卷的首选。",
    "frequency": 5
  },
  {
    "term": "Graph Database",
    "english": "Graph Database",
    "chinese": "图数据库",
    "japanese": "グラフデータベース",
    "note": "以节点、边和属性表达并查询复杂关系。",
    "frequency": 3
  },
  {
    "term": "GWLB",
    "english": "Gateway Load Balancer",
    "chinese": "网关负载均衡器",
    "japanese": "Gateway Load Balancer（ゲートウェイロードバランサー）",
    "note": "第 3 层安全设备服务链；通过 GWLBe 和路由表导流，使用 GENEVE（UDP 6081）封装。",
    "frequency": 3
  },
  {
    "term": "GWLBe",
    "english": "Gateway Load Balancer Endpoint",
    "chinese": "网关负载均衡器端点",
    "japanese": "Gateway Load Balancer エンドポイント",
    "note": "通过路由表将流量透明地送往 GWLB 服务链，常用于集中式防火墙、IDS/IPS、DPI。",
    "frequency": 3
  },
  {
    "term": "HA",
    "english": "High Availability",
    "chinese": "高可用性",
    "japanese": "高可用性（こうかようせい）",
    "note": "通过多 AZ、冗余、健康检查与自动替换减少停机；不等于完全零中断。",
    "frequency": 5
  },
  {
    "term": "Health Check Grace Period",
    "english": "Health Check Grace Period",
    "chinese": "健康检查宽限期",
    "japanese": "ヘルスチェック猶予期間",
    "note": "实例进入 InService 后的一段保护时间，ASG 暂不因 EC2/ELB 健康检查失败立即替换它。",
    "frequency": 5
  },
  {
    "term": "Heterogeneous Migration",
    "english": "Heterogeneous Database Migration",
    "chinese": "异构数据库迁移",
    "japanese": "異種データベース移行",
    "note": "不同数据库引擎通常先转换 Schema／代码再迁移数据；SCT 或 DMS Schema Conversion 按支持范围选择。",
    "frequency": 4
  },
  {
    "term": "High Risk Issue",
    "english": "High Risk Issue (HRI)",
    "chinese": "高风险问题",
    "japanese": "高リスクの問題",
    "note": "HRI：可能对业务带来显著负面影响的架构或运营选择；需按实际影响安排整改。",
    "frequency": 3
  },
  {
    "term": "Homogeneous Migration",
    "english": "Homogeneous Database Migration",
    "chinese": "同构数据库迁移",
    "japanese": "同種データベース移行",
    "note": "按相同／兼容数据库引擎判断；位置从本地变成 AWS 不会自动变异构，仍需检查版本与对象兼容性。",
    "frequency": 4
  },
  {
    "term": "Hosted Zone",
    "english": "Hosted Zone",
    "chinese": "托管区域",
    "japanese": "ホストゾーン",
    "note": "包含 DNS Records 的权威命名空间；Private Zone 命中但缺 Record 时不回退 Public。",
    "frequency": 5
  },
  {
    "term": "Hot Standby",
    "english": "Hot Standby",
    "chinese": "热备用",
    "japanese": "ホットスタンバイ",
    "note": "具备足够容量的备用环境可以是 Active/Passive；不能把所有 Hot Site 都等同多活。",
    "frequency": 4
  },
  {
    "term": "HPC",
    "english": "High Performance Computing",
    "chinese": "高性能计算",
    "japanese": "ハイパフォーマンスコンピューティング",
    "note": "一种计算架构/工作负载类别；按计算、通信、存储 I/O 与数据搬运瓶颈组合服务。 来源：Lecture 366。",
    "frequency": 4
  },
  {
    "term": "Hybrid Cloud",
    "english": "Hybrid Cloud",
    "chinese": "混合云",
    "japanese": "ハイブリッドクラウド",
    "note": "本地数据中心与公有云协同；Outposts、Direct Connect 常出现在相关场景。",
    "frequency": 4
  },
  {
    "term": "IaC",
    "english": "Infrastructure as Code",
    "chinese": "基础设施即代码",
    "japanese": "Infrastructure as Code（コードによるインフラストラクチャ管理）",
    "note": "用模板或代码声明并版本化管理基础设施。",
    "frequency": 5
  },
  {
    "term": "IAM",
    "english": "AWS Identity and Access Management",
    "chinese": "身份与访问管理",
    "japanese": "AWS Identity and Access Management（AWS のアイデンティティとアクセス権限を管理するグローバルサービス）",
    "note": "账户级/global 视角的身份与权限服务；默认拒绝，显式拒绝优先，并遵循最小权限原则。",
    "frequency": 5
  },
  {
    "term": "IAM Access Advisor",
    "english": "IAM Access Advisor / Service Last Accessed Information",
    "chinese": "IAM 访问顾问／最后访问时间信息",
    "japanese": "IAM アクセスアドバイザー（利用者、グループ、ロール、ポリシーに許可されたサービスや操作の最終アクセス情報と権限元を確認する機能）",
    "note": "User、Group、Role、Policy 等的 Last Accessed 审查；可查看 Service／Action 的最后访问时间并追踪权限来源，不是完整实时审计日志。",
    "frequency": 4
  },
  {
    "term": "IAM Access Analyzer",
    "english": "AWS Identity and Access Management Access Analyzer",
    "chinese": "访问权限分析器",
    "japanese": "IAM Access Analyzer（外部アクセス・未使用アクセスの分析）",
    "note": "分析外部访问、策略和未使用访问，帮助实现最小权限。",
    "frequency": 4
  },
  {
    "term": "IAM Credentials Report",
    "english": "IAM Credential Report",
    "chinese": "IAM 凭证报告",
    "japanese": "IAM 認証情報レポート（ルートアカウント行と IAM ユーザーのパスワード、MFA、アクセスキー、署名証明書の状態や最終利用・更新情報を一覧化する CSV レポート）",
    "note": "账户级 CSV，汇总 Root Account 行与 IAM User 的 Password、MFA、Access Key、签名证书及最后使用／轮换信息；不包含 Role 临时凭证或服务专用凭证。",
    "frequency": 4
  },
  {
    "term": "IAM DB Authentication",
    "english": "IAM Database Authentication",
    "chinese": "IAM 数据库认证",
    "japanese": "IAM データベース認証",
    "note": "使用 SigV4 短期 Token 替代长期数据库密码，支持特定 RDS/Aurora Engine。",
    "frequency": 4
  },
  {
    "term": "IAM Group",
    "english": "IAM User Group",
    "chinese": "IAM 用户组",
    "japanese": "IAM ユーザーグループ（複数の IAM ユーザーへ共通権限を割り当てるための集合）",
    "note": "只能包含 IAM User，不能包含其他 Group；User 可以同时属于多个 Group，Group 本身不能登录或被 Assume。",
    "frequency": 4
  },
  {
    "term": "IAM Identity Center",
    "english": "AWS IAM Identity Center",
    "chinese": "员工单点登录与多账户访问",
    "japanese": "AWS IAM Identity Center（従業員向け SSO・マルチアカウントアクセス）",
    "note": "集中管理员工访问多个 AWS 账户和应用。",
    "frequency": 3
  },
  {
    "term": "IAM Password Policy",
    "english": "IAM Account Password Policy",
    "chinese": "IAM 账户密码策略",
    "japanese": "IAM パスワードポリシー（同一 AWS アカウント内の IAM ユーザーのコンソールパスワードについて、長さ、文字種、有効期限、再利用制限などを定める規則）",
    "note": "只控制 IAM User Console Password；不控制 Root Password、Access Key 或 IAM Identity Center Password。",
    "frequency": 5
  },
  {
    "term": "IAM Policy",
    "english": "IAM Policy",
    "chinese": "权限策略",
    "japanese": "IAM ポリシー（AWS の操作とリソースに対する許可・拒否を JSON で定義する権限文書）",
    "note": "JSON 权限文档；顶层通常包含 Version 与 Statement。Identity-based Policy 不写 Principal，显式 Deny 优先。",
    "frequency": 5
  },
  {
    "term": "IAM Role",
    "english": "IAM Role",
    "chinese": "IAM 角色",
    "japanese": "IAM ロール（信頼された主体が一時的に引き受け、許可された AWS 操作を実行するための IAM アイデンティティ）",
    "note": "Trust Policy 决定谁能代入，Permissions Policy 决定代入后能做什么；通过 STS 提供临时凭证，适用于工作负载、联合身份和跨账户访问。",
    "frequency": 5
  },
  {
    "term": "IAM User",
    "english": "IAM User",
    "chinese": "IAM 用户",
    "japanese": "IAM ユーザー（AWS アカウント内で長期的な認証情報を持つ利用者。現在は従業員の通常利用には IAM Identity Center や認証連携による一時認証情報が推奨される）",
    "note": "AWS 账户内的长期身份，可拥有 Console Password 或 Access Key，也可属于多个 Group；当前人类员工默认优先 IAM Identity Center／身份联合与临时凭证，只有特定兼容场景才创建 IAM User。",
    "frequency": 4
  },
  {
    "term": "iam:PassRole",
    "english": "IAM PassRole permission",
    "chinese": "将 IAM 角色传递给 AWS 服务的权限",
    "japanese": "iam:PassRole（指定した IAM ロールを AWS サービスへ渡すことをユーザーに許可する IAM 権限）",
    "note": "PassRole 不是 AssumeRole；它允许调用者把指定 Role 交给 AWS Service，应限制可传递的 Role 与目标服务。 Lecture 371：指定／更换 CloudFormation 服务 Role 时需 PassRole；已有 Stack 的有权限操作者可复用绑定 Role，即使没有该 Role 的 PassRole。应同时限制 Stack 操作权限与服务角色权限。",
    "frequency": 5
  },
  {
    "term": "IAMFullAccess",
    "english": "IAMFullAccess",
    "chinese": "IAM 完全访问策略",
    "japanese": "IAMFullAccess（IAM サービスのユーザー、グループ、ロール、ポリシーなどを管理する完全アクセス権限の AWS 管理ポリシー）",
    "note": "提供 IAM 服务的完整管理权限；不等于对所有 AWS 服务和资源的 AdministratorAccess。",
    "frequency": 4
  },
  {
    "term": "IAMReadOnlyAccess",
    "english": "IAMReadOnlyAccess",
    "chinese": "IAM 只读访问策略",
    "japanese": "IAMReadOnlyAccess（IAM のユーザー、グループ、ロール、ポリシーなどを取得・一覧表示できる読み取り専用の AWS 管理ポリシー）",
    "note": "主要授予 IAM 的 Get 与 List 权限；可以查看 IAM 资源，但不能创建、修改或删除。",
    "frequency": 5
  },
  {
    "term": "Idempotency",
    "english": "Idempotency",
    "chinese": "幂等性",
    "japanese": "冪等性（べきとうせい）",
    "note": "同一请求重复执行不会产生额外副作用；队列、重试和支付题目高频。",
    "frequency": 5
  },
  {
    "term": "Identity-based Policy",
    "english": "Identity-based Policy",
    "chinese": "基于身份的策略",
    "japanese": "アイデンティティベースのポリシー（IAM ユーザー、グループ、またはロールに付与する権限ポリシー）",
    "note": "附加或嵌入 IAM 身份；主体由附加对象隐含确定，因此不能使用 Principal 元素。",
    "frequency": 5
  },
  {
    "term": "IGW",
    "english": "Internet Gateway",
    "chinese": "互联网网关",
    "japanese": "インターネットゲートウェイ",
    "note": "让公有子网资源与互联网双向通信；实例仍需公有 IP 和正确路由。",
    "frequency": 5
  },
  {
    "term": "Imperative",
    "english": "Imperative Configuration",
    "chinese": "命令式配置",
    "japanese": "命令的構成",
    "note": "明确描述每一步怎么执行。",
    "frequency": 3
  },
  {
    "term": "Implementation Guide",
    "english": "Implementation Guide",
    "chinese": "实施指南",
    "japanese": "実装ガイド",
    "note": "说明方案架构、前提、版本、Region、参数、部署、费用、操作及删除／保留等实施事项。",
    "frequency": 2
  },
  {
    "term": "Implicit Deny",
    "english": "Implicit Deny",
    "chinese": "隐式拒绝",
    "japanese": "暗黙的な拒否（アクセスを許可する適用可能な Allow が存在しないため、既定で拒否される状態）",
    "note": "IAM 默认拒绝；没有适用 Allow 时请求保持 Implicit Deny。",
    "frequency": 5
  },
  {
    "term": "Improvement Plan",
    "english": "Improvement Plan",
    "chinese": "架构改进计划",
    "japanese": "改善計画",
    "note": "依据评审风险与建议形成动作；团队落实负责人、优先级、期限、验收与回退方法。",
    "frequency": 3
  },
  {
    "term": "Inbound Resolver Endpoint",
    "english": "Route 53 Resolver Inbound Endpoint",
    "chinese": "入站解析器端点",
    "japanese": "インバウンドリゾルバーエンドポイント",
    "note": "On-prem → AWS Private DNS；需 Conditional Forwarding、网络可达和 TCP/UDP 53。",
    "frequency": 5
  },
  {
    "term": "Inbound Rule",
    "english": "Inbound Rule",
    "chinese": "入站规则",
    "japanese": "インバウンドルール（リソースへ入ってくる通信を許可する Security Group の規則）",
    "note": "按来源、协议和端口范围定义；Security Group 不支持显式拒绝规则。",
    "frequency": 4
  },
  {
    "term": "Infrastructure",
    "english": "Infrastructure",
    "chinese": "基础设施",
    "japanese": "インフラストラクチャ",
    "note": "计算、网络、存储和安全等底层资源的总称。",
    "frequency": 3
  },
  {
    "term": "Infrastructure Composer",
    "english": "AWS Infrastructure Composer（formerly Application Composer）",
    "chinese": "可视化基础设施模板编辑工具",
    "japanese": "AWS Infrastructure Composer（視覚的テンプレート作成）",
    "note": "Application Composer 新名称；公告 2026-10-29 停新客、2026-12-07 结束支持，VS Code 工具中的体验保留，CloudFormation 不受影响。",
    "frequency": 2
  },
  {
    "term": "Inherited Policy",
    "english": "Inherited Policy",
    "chinese": "继承策略",
    "japanese": "継承されたポリシー（IAM ユーザーが所属グループを通じて受け取る権限ポリシー）",
    "note": "User 通过 Group 获得的权限；移出该 Group 后，这一来源的权限失效。",
    "frequency": 5
  },
  {
    "term": "Inline Policy",
    "english": "Inline Policy",
    "chinese": "内联策略",
    "japanese": "インラインポリシー（単一の IAM ユーザー、グループ、またはロールに直接埋め込む一対一のポリシー）",
    "note": "可嵌入单个 User、Group 或 Role；随身份删除，不适合跨身份复用。",
    "frequency": 5
  },
  {
    "term": "Instance Profile",
    "english": "IAM Instance Profile",
    "chinese": "实例配置文件",
    "japanese": "インスタンスプロファイル",
    "note": "把 IAM Role 传递给 EC2 的容器；Beanstalk 中与服务自身使用的 Service Role 不同。",
    "frequency": 5
  },
  {
    "term": "Instance Scheduler on AWS",
    "english": "Instance Scheduler on AWS",
    "chinese": "实例定时启停解决方案",
    "japanese": "Instance Scheduler on AWS（定時起動・停止）",
    "note": "CloudFormation 部署的 AWS Solution；DynamoDB 存计划、Lambda 执行、标签选 EC2／RDS 等目标，Stop 后仍可能有费用。",
    "frequency": 2
  },
  {
    "term": "Instance Store",
    "english": "Amazon EC2 Instance Store",
    "chinese": "EC2 实例存储",
    "japanese": "EC2 インスタンスストア",
    "note": "宿主机本地临时块存储；Reboot 通常保留，Stop/Hibernate/Terminate 或宿主机故障会丢失。仅用于 Cache、Buffer、Scratch、可重建数据。",
    "frequency": 4
  },
  {
    "term": "Instance Warmup",
    "english": "Instance Warmup",
    "chinese": "实例预热期",
    "japanese": "インスタンスのウォームアップ",
    "note": "让新实例在充分初始化前不被当作已贡献完整容量，避免指标失真和重复扩容。",
    "frequency": 5
  },
  {
    "term": "Interface Endpoint",
    "english": "Interface VPC Endpoint",
    "chinese": "接口型 VPC 端点",
    "japanese": "インターフェイス VPC エンドポイント",
    "note": "子网内 ENI/私有 IP + SG，基于 PrivateLink；检查服务支持、Private DNS、权限与每 AZ/数据费用。",
    "frequency": 5
  },
  {
    "term": "io2",
    "english": "Provisioned IOPS SSD (io2)",
    "chinese": "预置 IOPS SSD io2",
    "japanese": "プロビジョンド IOPS SSD（io2）",
    "note": "面向关键数据库和持续高 IOPS、低延迟工作负载；实际性能仍受 EC2 EBS Bandwidth 限制。",
    "frequency": 5
  },
  {
    "term": "IOPS",
    "english": "Input/Output Operations Per Second",
    "chinese": "每秒输入/输出操作数",
    "japanese": "IOPS（1 秒あたりの入出力操作数）",
    "note": "衡量每秒读写操作次数，随机小块 I/O 常关注。",
    "frequency": 5
  },
  {
    "term": "IP-based Routing",
    "english": "IP-based Routing Policy",
    "chinese": "基于 IP 的路由",
    "japanese": "IPベースルーティング",
    "note": "按已知 ISP / Customer CIDR 定向；建议 Default *；不支持 Private Hosted Zone。",
    "frequency": 3
  },
  {
    "term": "IPv6",
    "english": "Internet Protocol Version 6",
    "chinese": "互联网协议第六版",
    "japanese": "インターネットプロトコル バージョン 6",
    "note": "128 位地址、独立 IPv6 路由/安全规则；AWS 支持公网与私有 IPv6，公网范围不等于自动公网可达。",
    "frequency": 4
  },
  {
    "term": "Isolation",
    "english": "Isolation",
    "chinese": "隔离",
    "japanese": "分離 / アイソレーション",
    "note": "通过虚拟化、权限和网络边界隔离不同客户或工作负载。",
    "frequency": 3
  },
  {
    "term": "Item",
    "english": "Item",
    "chinese": "项目 / 数据项",
    "japanese": "項目（アイテム）",
    "note": "DynamoDB 表中的一条记录，由多个 Attribute 组成。",
    "frequency": 4
  },
  {
    "term": "Job Definition",
    "english": "AWS Batch Job Definition",
    "chinese": "批作业运行定义",
    "japanese": "ジョブ定義",
    "note": "不仅是镜像，还包括命令、CPU／内存、权限与超时等运行配置。",
    "frequency": 3
  },
  {
    "term": "Job Queue",
    "english": "AWS Batch Job Queue",
    "chinese": "批作业队列",
    "japanese": "ジョブキュー",
    "note": "保存等待调度的 Batch Jobs 并关联计算环境；不是通用消息队列 SQS。",
    "frequency": 3
  },
  {
    "term": "JOIN",
    "english": "SQL JOIN",
    "chinese": "多表连接",
    "japanese": "結合（JOIN）",
    "note": "根据关联键组合多张关系表的数据。",
    "frequency": 5
  },
  {
    "term": "Journey",
    "english": "Amazon Pinpoint Journey",
    "chinese": "客户营销旅程",
    "japanese": "ジャーニー",
    "note": "按条件、等待、分支与渠道组织客户触达，不是通用 AWS 资源状态机。",
    "frequency": 2
  },
  {
    "term": "K8s",
    "english": "Kubernetes",
    "chinese": "容器编排平台",
    "japanese": "Kubernetes（クバネティス）",
    "note": "K8s 是开源平台；EKS 是 AWS 托管版 Kubernetes。",
    "frequency": 3
  },
  {
    "term": "Kinesis Data Streams",
    "english": "Amazon Kinesis Data Streams",
    "chinese": "实时数据流服务",
    "japanese": "Amazon Kinesis Data Streams（リアルタイムストリーム）",
    "note": "可重放的实时流。Partition Key 决定分片；同一分片内按序。支持 Provisioned 与 On-demand；保留期可扩展至 365 天。Shared throughput 与 Enhanced Fan-Out 要区分。",
    "frequency": 5
  },
  {
    "term": "Lambda",
    "english": "AWS Lambda",
    "chinese": "无服务器函数计算",
    "japanese": "AWS Lambda（ラムダ）",
    "note": "Serverless Function Compute，最长 900 秒。Reserved Concurrency 保留并限流；Provisioned Concurrency 预热；SnapStart 从预初始化快照恢复。访问 Private VPC Resource 要配置 VPC/Subnet/SG；高并发连接 RDS 优先 RDS Proxy。",
    "frequency": 5
  },
  {
    "term": "Lambda On-failure Destination",
    "english": "AWS Lambda Asynchronous On-failure Destination",
    "chinese": "Lambda 异步失败目标",
    "japanese": "Lambda 非同期呼び出しの失敗時送信先",
    "note": "异步事件最终失败/耗尽相应处理策略后发送调用记录；与原始事件型 Async DLQ 及上游交付失败区分。 来源：Lecture 363。",
    "frequency": 4
  },
  {
    "term": "Lambda SnapStart",
    "english": "AWS Lambda SnapStart",
    "chinese": "Lambda 快照启动",
    "japanese": "Lambda SnapStart",
    "note": "发布 Version 时先初始化函数并创建加密的内存/磁盘状态快照，调用时从快照恢复以减少初始化延迟；它不是并发配额。",
    "frequency": 4
  },
  {
    "term": "Latency Routing",
    "english": "Latency-based Routing Policy",
    "chinese": "延迟路由",
    "japanese": "レイテンシールーティング",
    "note": "返回 AWS 预计网络延迟最低的 Region；不是地理最近，也不是实时 Ping。",
    "frequency": 5
  },
  {
    "term": "Least Privilege",
    "english": "Principle of Least Privilege",
    "chinese": "最低权限原则",
    "japanese": "最小権限の原則（業務に必要な最小限のアクセス権だけを付与する考え方）",
    "note": "从完成当前任务所需的最少 Action、Resource 和条件开始授权，降低安全风险、误操作和意外费用。",
    "frequency": 5
  },
  {
    "term": "Legal Hold",
    "english": "S3 Object Lock Legal Hold",
    "chinese": "法律保留",
    "japanese": "リーガルホールド",
    "note": "独立于保留期且无自动到期日；由有权限者显式移除。",
    "frequency": 4
  },
  {
    "term": "Lens",
    "english": "Lens",
    "chinese": "架构评审视角",
    "japanese": "レンズ（設計評価の観点）",
    "note": "用于一致评审架构的一套问题和最佳实践；随场景与版本变化。",
    "frequency": 3
  },
  {
    "term": "Lifecycle Hook",
    "english": "Amazon EC2 Auto Scaling Lifecycle Hook",
    "chinese": "Auto Scaling 生命周期钩子",
    "japanese": "Auto Scaling ライフサイクルフック",
    "note": "在 Launch/Termination 流程提供有限 Wait 窗口，自动化完成任务并报告 CompleteLifecycleAction；可用 Heartbeat，不能保证故障时可现场做最新一致快照。 来源：Lecture 367。",
    "frequency": 4
  },
  {
    "term": "Lifecycle Policy",
    "english": "Amazon S3 Lifecycle Policy",
    "chinese": "S3 生命周期策略",
    "japanese": "S3 ライフサイクルポリシー",
    "note": "按 Prefix / Tag / Age 等规则自动 Transition 或 Expiration；Current 与 Noncurrent Version 可分别治理，并可清理 Delete Marker 与未完成 Multipart。",
    "frequency": 5
  },
  {
    "term": "Lightsail",
    "english": "Amazon Lightsail",
    "chinese": "简化版云服务器",
    "japanese": "Amazon Lightsail（簡易型仮想サーバーサービス）",
    "note": "固定套餐、配置简单，适合小型网站和入门项目；复杂架构通常选择 EC2。",
    "frequency": 2
  },
  {
    "term": "Link Aggregation Group",
    "english": "Link Aggregation Group",
    "chinese": "链路聚合组",
    "japanese": "リンクアグリゲーショングループ",
    "note": "聚合兼容的 Direct Connect 连接；带宽聚合与站点冗余应分别考虑。",
    "frequency": 3
  },
  {
    "term": "Listener Rule",
    "english": "Listener Rule",
    "chinese": "监听器规则",
    "japanese": "リスナールール",
    "note": "由 Priority、Condition、Action 组成；数值较小的优先级先匹配，Default Rule 最后执行。",
    "frequency": 5
  },
  {
    "term": "Log Group",
    "english": "Log Group",
    "chinese": "日志组",
    "japanese": "ロググループ",
    "note": "按应用或资源组织多个日志流，并设置保留期。",
    "frequency": 3
  },
  {
    "term": "Log Stream",
    "english": "Log Stream",
    "chinese": "日志流",
    "japanese": "ログストリーム",
    "note": "来自同一具体来源的一系列日志事件，例如某个 Lambda 实例。",
    "frequency": 3
  },
  {
    "term": "Logical ID",
    "english": "CloudFormation Logical ID",
    "chinese": "模板内资源逻辑标识",
    "japanese": "論理 ID",
    "note": "模板内用于引用资源的名称，不是 AWS 实际资源 ID。",
    "frequency": 3
  },
  {
    "term": "Long Polling",
    "english": "SQS Long Polling",
    "chinese": "长轮询",
    "japanese": "ロングポーリング",
    "note": "ReceiveMessageWaitTimeSeconds 大于 0 即长轮询，最长 20 秒。等待消息到达后再返回，减少空响应、假空响应和 API 成本；它不延长消息的 Visibility Timeout。",
    "frequency": 5
  },
  {
    "term": "Longest Prefix Match",
    "english": "Longest Prefix Match",
    "chinese": "最长前缀匹配",
    "japanese": "最長プレフィックス一致",
    "note": "目的地址匹配最具体的路由优先。",
    "frequency": 5
  },
  {
    "term": "Loose Coupling",
    "english": "Loosely Coupled Architecture",
    "chinese": "松散耦合",
    "japanese": "疎結合（そけつごう）",
    "note": "组件可独立扩缩和故障恢复；SQS 是考试中最典型的解耦服务。",
    "frequency": 5
  },
  {
    "term": "Low Latency",
    "english": "Low Latency",
    "chinese": "低延迟",
    "japanese": "低レイテンシ（要求から応答までの遅延が小さい状態）",
    "note": "强调单次请求响应时间，不等于高吞吐量；选择 Region、边缘位置和缓存时常见。",
    "frequency": 3
  },
  {
    "term": "Maintenance Windows",
    "english": "AWS Systems Manager Maintenance Windows",
    "chinese": "运维维护窗口",
    "japanese": "メンテナンスウィンドウ",
    "note": "定义 Schedule、Duration／Cutoff、Targets 与 Tasks；不是补丁引擎或保证强制杀掉进程。",
    "frequency": 3
  },
  {
    "term": "Managed Blockchain",
    "english": "Amazon Managed Blockchain",
    "chinese": "托管区块链",
    "japanese": "マネージドブロックチェーン",
    "note": "面向多组织共享、可验证且难以篡改账本的托管服务。",
    "frequency": 1
  },
  {
    "term": "Managed Node",
    "english": "Systems Manager Managed Node",
    "chinese": "受 Systems Manager 管理的节点",
    "japanese": "マネージドノード",
    "note": "可涵盖 EC2 与混合节点；需要注册、节点权限和连通，Online 不等于操作者有会话权限。",
    "frequency": 3
  },
  {
    "term": "Managed Node Group",
    "english": "Amazon EKS Managed Node Group",
    "chinese": "托管节点组",
    "japanese": "EKS マネージドノードグループ",
    "note": "由 EKS 自动化 Provisioning 与 Lifecycle 的 EC2 Worker Nodes，底层仍是 EC2 + ASG；不是 Serverless。",
    "frequency": 4
  },
  {
    "term": "Managed Service",
    "english": "Managed Service",
    "chinese": "托管服务",
    "japanese": "マネージドサービス",
    "note": "AWS 管理部分底层工作，但用户仍可能配置容量、版本和网络。",
    "frequency": 4
  },
  {
    "term": "Manual Snapshot",
    "english": "Manual Snapshot",
    "chinese": "手动数据库快照",
    "japanese": "手動スナップショット",
    "note": "保存明确时间点；Restore 会创建新 DB / Cluster，不会原地覆盖 Source。",
    "frequency": 4
  },
  {
    "term": "Medium Risk Issue",
    "english": "Medium Risk Issue (MRI)",
    "chinese": "中风险问题",
    "japanese": "中リスクの問題",
    "note": "MRI：可能对业务带来负面影响、程度低于 HRI 的架构或运营选择；仍需安排处理或接受理由。",
    "frequency": 3
  },
  {
    "term": "Memcached",
    "english": "Memcached",
    "chinese": "分布式内存缓存引擎",
    "japanese": "Memcached（分散型インメモリキャッシュ）",
    "note": "简单 Key-Value、多线程；Node-based 主要通过 Sharding 扩展。",
    "frequency": 4
  },
  {
    "term": "Memory Optimized Instance",
    "english": "Memory Optimized Instance",
    "chinese": "内存优化型实例",
    "japanese": "メモリ最適化インスタンス（大容量メモリと高速なメモリアクセスを重視した EC2 インスタンス）",
    "note": "适合内存缓存、实时分析和大型数据库等内存密集型工作负载。",
    "frequency": 4
  },
  {
    "term": "Message Group ID",
    "english": "Message Group ID",
    "chinese": "消息组 ID",
    "japanese": "メッセージグループ ID",
    "note": "FIFO 中用于定义顺序边界：同一组严格有序并串行推进，不同组可并行处理。Deduplication ID 解决生产端重复，Group ID 解决顺序与并发，两者职责不同。 FIFO 毒消息主要阻塞同组，其他组可并行；移入 DLQ 或重放前检查业务完整顺序和幂等。 来源：Lecture 363。",
    "frequency": 5
  },
  {
    "term": "Metadata",
    "english": "Object Metadata",
    "chinese": "对象元数据",
    "japanese": "オブジェクトメタデータ",
    "note": "描述对象内容与属性；用户元数据修改通常需重写对象。",
    "frequency": 4
  },
  {
    "term": "MFA",
    "english": "Multi-Factor Authentication",
    "chinese": "多因素认证",
    "japanese": "多要素認証（パスワードなどの第一要素に加えて、パスキーや認証アプリなど別の要素を要求する本人確認方式）",
    "note": "在第一因素之外增加额外认证因素；本身不授予权限。Root 与高权限身份优先启用，当前 Root / IAM User 最多可注册 8 个设备。",
    "frequency": 5
  },
  {
    "term": "MFA Delete",
    "english": "Amazon S3 MFA Delete",
    "chinese": "MFA 删除保护",
    "japanese": "MFA 削除",
    "note": "永久删除 Specific Version 或改变 Versioning 状态时要求 MFA；只有 Root 能启停。",
    "frequency": 5
  },
  {
    "term": "Migration Evaluator",
    "english": "AWS Migration Evaluator",
    "chinese": "AWS 迁移评估与商业案例服务",
    "japanese": "Migration Evaluator（移行評価・ビジネスケース作成サービス）",
    "note": "根据现有环境、许可和目标方案建立数据驱动的迁移 Business Case。",
    "frequency": 3
  },
  {
    "term": "Milestone",
    "english": "Milestone",
    "chinese": "评审里程碑",
    "japanese": "マイルストーン",
    "note": "记录设计、测试、上线或改进时点的评审状态，用于比较架构演进。",
    "frequency": 3
  },
  {
    "term": "Mount Target",
    "english": "Amazon EFS Mount Target",
    "chinese": "EFS 挂载目标",
    "japanese": "EFS マウントターゲット",
    "note": "EFS 在某个 AZ 子网中的网络入口。",
    "frequency": 5
  },
  {
    "term": "MPI",
    "english": "Message Passing Interface",
    "chinese": "消息传递接口",
    "japanese": "メッセージパッシングインターフェース",
    "note": "多进程/多节点计算常用的消息传递接口；紧耦合任务的通信延迟可能成为扩展瓶颈。 来源：Lecture 366。",
    "frequency": 3
  },
  {
    "term": "Multi-AZ",
    "english": "Multi-Availability Zone Deployment",
    "chinese": "多可用区部署",
    "japanese": "マルチ AZ 配置",
    "note": "跨 AZ 降低单 AZ 故障影响；具体是否可读取决于产品和部署类型。",
    "frequency": 5
  },
  {
    "term": "Multi-AZ DB Cluster",
    "english": "Multi-AZ DB Cluster",
    "chinese": "多可用区数据库集群",
    "japanese": "マルチ AZ DB クラスター",
    "note": "跨 3 AZ 同时提供高可用与可读副本。",
    "frequency": 5
  },
  {
    "term": "Multi-node Parallel Job",
    "english": "AWS Batch Multi-node Parallel Job",
    "chinese": "Batch 多节点并行作业",
    "japanese": "AWS Batch マルチノード並列ジョブ",
    "note": "一项协作执行的多节点任务；EC2-based MNP 不支持 Spot Compute Environment，Fargate 不支持 MNP。 来源：Lecture 366。",
    "frequency": 4
  },
  {
    "term": "Multi-Region",
    "english": "Multi-Region Architecture",
    "chinese": "多区域架构",
    "japanese": "マルチリージョン構成",
    "note": "跨 AWS Region 部署，用于区域级灾备、全球低延迟或合规。",
    "frequency": 5
  },
  {
    "term": "Multi-site Active/Active",
    "english": "Multi-site Active/Active",
    "chinese": "多站点双活／多活",
    "japanese": "マルチサイト・アクティブ／アクティブ",
    "note": "多个站点平时同时服务；需要数据一致性、故障流量与容量设计，不自动代表数据库多主写入。",
    "frequency": 5
  },
  {
    "term": "Multi-Tenancy",
    "english": "Multi-Tenancy",
    "chinese": "多租户",
    "japanese": "マルチテナンシー",
    "note": "多个客户共享底层基础设施，但逻辑上隔离；云计算常见模式。",
    "frequency": 3
  },
  {
    "term": "Multi-Value Answer Routing",
    "english": "Multi-Value Answer Routing Policy",
    "chinese": "多值应答路由",
    "japanese": "複数値回答ルーティング",
    "note": "每条 Record 可独立健康检查，一次最多返回 8 个健康答案；不是 ELB 且不支持 Alias。",
    "frequency": 4
  },
  {
    "term": "Multipart Upload",
    "english": "Multipart Upload",
    "chinese": "分段上传",
    "japanese": "マルチパートアップロード",
    "note": "把大对象分 Part 并行上传；失败只重传 Part。超过 5 GB 必须使用，约 100 MB 以上可考虑。",
    "frequency": 4
  },
  {
    "term": "Multiple Choice",
    "english": "Multiple Choice",
    "chinese": "单选题",
    "japanese": "単一選択問題",
    "note": "Lecture 388；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Multiple Response",
    "english": "Multiple Response",
    "chinese": "多选题",
    "japanese": "複数選択問題",
    "note": "Lecture 388；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "NACL",
    "english": "Network Access Control List",
    "chinese": "网络访问控制列表",
    "japanese": "ネットワーク ACL",
    "note": "子网级、无状态、可允许和拒绝；入站和出站规则都要显式配置。",
    "frequency": 5
  },
  {
    "term": "NAT Gateway",
    "english": "Network Address Translation Gateway",
    "chinese": "NAT 网关",
    "japanese": "NAT ゲートウェイ",
    "note": "托管 NAT 支持私有资源主动建立连接。Public Zonal NAT 使用公有子网/EIP；Regional NAT 按 VPC/AZ 模式扩展、无需承载公有子网；Private NAT 用于私网转换。IPv6→IPv4 可用 NAT64，IPv6→IPv6 仅出站用 EIGW。",
    "frequency": 5
  },
  {
    "term": "NAT Instance",
    "english": "Network Address Translation Instance",
    "chinese": "网络地址转换实例",
    "japanese": "NAT インスタンス",
    "note": "用自管 EC2 做 NAT；公网路径、Source/Destination Check 关闭、OS 转发/NAT、SG 与私有路由都要配置。",
    "frequency": 3
  },
  {
    "term": "NAT64",
    "english": "IPv6-to-IPv4 Network Address Translation",
    "chinese": "IPv6 到 IPv4 地址转换",
    "japanese": "NAT64（IPv6/IPv4 アドレス変換）",
    "note": "NAT Gateway 支持 IPv6 客户端到 IPv4-only 目标的转换；IPv6 到 IPv6 原生仅出站用 EIGW，两种需求分开。",
    "frequency": 4
  },
  {
    "term": "Neptune",
    "english": "Amazon Neptune",
    "chinese": "图数据库服务",
    "japanese": "グラフデータベース",
    "note": "用于复杂关系遍历、欺诈检测和知识图谱。",
    "frequency": 2
  },
  {
    "term": "Network Border Group",
    "english": "Network Border Group",
    "chinese": "网络边界组",
    "japanese": "ネットワークボーダーグループ",
    "note": "公网地址通告与使用的范围；EIP 属于特定 Region 和 Network Border Group，在兼容范围重新关联。 来源：Lecture 367。",
    "frequency": 3
  },
  {
    "term": "NFS",
    "english": "Network File System",
    "chinese": "网络文件系统",
    "japanese": "ネットワークファイルシステム",
    "note": "Linux 常用共享文件协议；EFS 常使用 TCP 2049。",
    "frequency": 5
  },
  {
    "term": "NLB",
    "english": "Network Load Balancer",
    "chinese": "网络负载均衡器",
    "japanese": "Network Load Balancer（ネットワークロードバランサー）",
    "note": "每个启用 AZ 提供静态 IP，可关联 EIP；目标类型支持 Instance、IP、ALB。",
    "frequency": 4
  },
  {
    "term": "Noncurrent Version",
    "english": "Amazon S3 Noncurrent Object Version",
    "chinese": "非当前对象版本",
    "japanese": "非現行バージョン",
    "note": "同 Key 被新版本覆盖后形成的历史版本，可独立 Transition 或 Permanent Delete。",
    "frequency": 4
  },
  {
    "term": "NoSQL",
    "english": "Not Only SQL",
    "chinese": "非关系型数据库范式",
    "japanese": "NoSQL データベース",
    "note": "不是“没有结构”，而是不用传统固定关系表作为唯一模型。",
    "frequency": 5
  },
  {
    "term": "Object",
    "english": "Amazon S3 Object",
    "chinese": "S3 对象",
    "japanese": "S3 オブジェクト",
    "note": "数据、Key 和 Metadata 等组成的对象存储单位。",
    "frequency": 5
  },
  {
    "term": "Object Key",
    "english": "Amazon S3 Object Key",
    "chinese": "S3 对象键",
    "japanese": "S3 オブジェクトキー",
    "note": "对象在 Bucket 中的唯一完整名称；斜线只是 Key 的一部分，控制台据此显示 Folder。",
    "frequency": 5
  },
  {
    "term": "Object Lock",
    "english": "Amazon S3 Object Lock",
    "chinese": "S3 对象锁",
    "japanese": "S3 オブジェクトロック",
    "note": "基于 Versioning 的 WORM；Compliance 不可绕过，Governance 可授权绕过，Legal Hold 无固定到期日。",
    "frequency": 5
  },
  {
    "term": "Object Storage",
    "english": "Object Storage",
    "chinese": "对象存储",
    "japanese": "オブジェクトストレージ",
    "note": "以对象和元数据为单位，通过 API/HTTP 访问。",
    "frequency": 5
  },
  {
    "term": "Object Tags",
    "english": "Amazon S3 Object Tags",
    "chinese": "S3 对象标签",
    "japanese": "S3 オブジェクトタグ",
    "note": "可单独管理，用于分类、生命周期和权限条件。",
    "frequency": 4
  },
  {
    "term": "On-premises",
    "english": "On-premises",
    "chinese": "本地数据中心 / 本地机房",
    "japanese": "オンプレミス環境（企業が自社で所有・運用するサーバーやデータセンター）",
    "note": "企业自行采购、部署、维护和扩容基础设施；与云上的按需获取、快速扩缩容形成对比。",
    "frequency": 4
  },
  {
    "term": "OnVUE",
    "english": "OnVUE",
    "chinese": "在线监考考试",
    "japanese": "オンライン監督付き試験",
    "note": "Lecture 391、394；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Orchestration",
    "english": "Container Orchestration",
    "chinese": "容器编排",
    "japanese": "コンテナオーケストレーション",
    "note": "负责部署、扩缩、调度、网络和故障恢复；ECS、EKS 都属于编排服务。",
    "frequency": 4
  },
  {
    "term": "Origin Access Control (OAC)",
    "english": "CloudFront Origin Access Control",
    "chinese": "源站访问控制",
    "japanese": "オリジンアクセスコントロール",
    "note": "CloudFront 对私有 S3 Origin 发起经签名的授权请求；需配合 Bucket Policy。S3 Website Endpoint 不能使用 OAC。",
    "frequency": 5
  },
  {
    "term": "OS-bypass",
    "english": "Operating System Bypass",
    "chinese": "绕过内核网络栈的通信机制",
    "japanese": "OS バイパス（カーネルのネットワークスタックを迂回）",
    "note": "兼容程序经 Libfabric 等用户态通信路径减少内核开销；不表示绕过 AWS 网络安全控制。 来源：Lecture 366。",
    "frequency": 3
  },
  {
    "term": "Outbound Resolver Endpoint",
    "english": "Route 53 Resolver Outbound Endpoint",
    "chinese": "出站解析器端点",
    "japanese": "アウトバウンドリゾルバーエンドポイント",
    "note": "AWS → On-prem DNS 的转发出口；必须结合 Resolver Rule。",
    "frequency": 5
  },
  {
    "term": "Outbound Rule",
    "english": "Outbound Rule",
    "chinese": "出站规则",
    "japanese": "アウトバウンドルール（リソースから外へ出ていく通信を許可する Security Group の規則）",
    "note": "Security Group 是有状态的，已允许通信的返回流量不依赖反方向规则。",
    "frequency": 4
  },
  {
    "term": "Outposts",
    "english": "AWS Outposts",
    "chinese": "AWS 本地部署服务",
    "japanese": "AWS Outposts（オンプレミス向け AWS インフラストラクチャ）",
    "note": "把 AWS 基础设施和服务部署到客户本地机房；用于低延迟、数据驻留和混合云。 Lecture 378：AWS 管基础设施，客户负责现场机架物理安全与电力／网络等。需要持续 Parent Region 连接；服务列表与数据驻留按产品／配置核对。",
    "frequency": 3
  },
  {
    "term": "PaaS",
    "english": "Platform as a Service",
    "chinese": "平台即服务",
    "japanese": "PaaS（サービスとしてのプラットフォーム）",
    "note": "开发者主要管理应用和数据，平台负责运行环境与基础设施。",
    "frequency": 2
  },
  {
    "term": "Paid account plan",
    "english": "AWS Paid Account Plan",
    "chinese": "AWS 付费账户计划",
    "japanese": "AWS 有料アカウントプラン（従量課金で継続利用するアカウントプラン）",
    "note": "按实际使用量持续计费；注册奖励和可获得额度仍取决于当期 AWS 规则。",
    "frequency": 2
  },
  {
    "term": "Partial Batch Response",
    "english": "Partial Batch Response",
    "chinese": "部分批次响应",
    "japanese": "部分バッチレスポンス",
    "note": "SQS/Lambda 场景需 ReportBatchItemFailures 与 Handler 返回失败项配合，减少已成功项重复处理；FIFO 首次失败后停止并报告未处理项。 来源：Lecture 363。",
    "frequency": 4
  },
  {
    "term": "Partition Key",
    "english": "Partition Key",
    "chinese": "分区键",
    "japanese": "パーティションキー",
    "note": "决定 DynamoDB Item 的分布，也是 Query 必须指定的键部分。",
    "frequency": 5
  },
  {
    "term": "Partition Placement Group",
    "english": "Partition Placement Group",
    "chinese": "分区放置组",
    "japanese": "パーティションプレイスメントグループ（多数の EC2 を独立したラック集合ごとの障害分離グループへ分ける配置戦略）",
    "note": "每个 AZ 最多 7 个 Partition。一个 Partition 不是单个机架，而是一组相互独立的机架，每个 Partition 可放置多个实例。",
    "frequency": 5
  },
  {
    "term": "Passkey",
    "english": "Passkey",
    "chinese": "通行密钥",
    "japanese": "パスキー（FIDO 規格と公開鍵暗号を利用し、パスワードより強い耐フィッシング性を持つ認証方式）",
    "note": "AWS 支持设备绑定 Security Key 和同步 Passkey；属于抗钓鱼 MFA 选择。",
    "frequency": 4
  },
  {
    "term": "Patch Baseline",
    "english": "Systems Manager Patch Baseline",
    "chinese": "补丁批准基线",
    "japanese": "パッチベースライン",
    "note": "规定哪些补丁被批准；不是应用漏洞扫描报告。",
    "frequency": 3
  },
  {
    "term": "Patch Manager",
    "english": "AWS Systems Manager Patch Manager",
    "chinese": "集中补丁管理",
    "japanese": "Patch Manager（パッチ管理）",
    "note": "以 Patch Baseline 管理批准规则；Scan 检查，Install 安装，按 OS 支持与重启设置执行。",
    "frequency": 4
  },
  {
    "term": "Pearson VUE",
    "english": "Pearson VUE",
    "chinese": "认证考试服务供应商",
    "japanese": "認定試験の配信事業者",
    "note": "Lecture 391、394；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Percona XtraBackup",
    "english": "Percona XtraBackup",
    "chinese": "MySQL 物理备份工具",
    "japanese": "MySQL 物理バックアップツール",
    "note": "受支持的物理备份可经 S3 创建 Aurora MySQL 集群；核对版本、格式、Region 与后续 binlog／CDC。",
    "frequency": 3
  },
  {
    "term": "Permissions Policy",
    "english": "IAM Permissions Policy",
    "chinese": "IAM 权限策略",
    "japanese": "アクセス許可ポリシー（IAM ユーザーやロールなどが実行できる AWS のアクションと対象リソースを定義するポリシー）",
    "note": "Role 上的 Permissions Policy 决定 Role Session 能做什么；它不负责决定谁能 AssumeRole。",
    "frequency": 5
  },
  {
    "term": "Physical ID",
    "english": "CloudFormation Physical ID",
    "chinese": "实际资源物理标识",
    "japanese": "物理 ID",
    "note": "实际资源的标识；Replacement 会创建新的物理资源。",
    "frequency": 3
  },
  {
    "term": "PII",
    "english": "Personally Identifiable Information",
    "chinese": "个人身份信息",
    "japanese": "個人を特定できる情報",
    "note": "能够直接或间接识别个人身份的数据。",
    "frequency": 3
  },
  {
    "term": "Pilot Light",
    "english": "Pilot Light",
    "chinese": "指示灯灾备策略",
    "japanese": "パイロットライト",
    "note": "保留核心数据／复制与最少组件，完整应用仍需启动或部署；RPO 由数据机制决定。",
    "frequency": 5
  },
  {
    "term": "Point of Presence",
    "english": "AWS Point of Presence",
    "chinese": "边缘接入点",
    "japanese": "AWS Point of Presence（利用者に近いエッジネットワーク拠点）",
    "note": "PoP 是边缘网络接入位置的统称；在基础考试语境中常与 Edge Location 一起出现。",
    "frequency": 4
  },
  {
    "term": "Point-in-Time Recovery (PITR)",
    "english": "Point-in-Time Recovery",
    "chinese": "时间点恢复",
    "japanese": "ポイントインタイムリカバリ",
    "note": "恢复到受支持保留窗口内指定时间，通常创建新 DB／Cluster，不覆盖 Source；日志上传周期不等于恢复选择粒度。AWS Backup 连续备份最长 35 天、不转冷存储；支持与 Copy 行为依资源／Region。",
    "frequency": 5
  },
  {
    "term": "Poison Message",
    "english": "Poison Message",
    "chinese": "持续失败的毒消息",
    "japanese": "ポイズンメッセージ（繰り返し失敗するメッセージ）",
    "note": "同一消息反复消费失败；FIFO 主要阻塞同一 Message Group。DLQ 隔离后仍需修复与重放，检查业务完整顺序。 来源：Lecture 363。",
    "frequency": 4
  },
  {
    "term": "Policy Language Version",
    "english": "Policy Language Version",
    "chinese": "策略语言版本",
    "japanese": "ポリシー言語バージョン（IAM ポリシーの構文機能を指定する Version 要素の値）",
    "note": "通常使用 2012-10-17；它是策略语言语法版本，不是资源版本或策略修改日期。",
    "frequency": 4
  },
  {
    "term": "Policy Statement",
    "english": "Policy Statement",
    "chinese": "策略语句",
    "japanese": "ポリシーステートメント（Effect、Action、Resource、Condition などで一つの権限規則を表す記述）",
    "note": "IAM JSON Policy 中权限规则的核心；Statement 可为单个对象或多个语句的数组。",
    "frequency": 5
  },
  {
    "term": "Policy Wildcard",
    "english": "Policy Wildcard",
    "chinese": "策略通配符",
    "japanese": "ポリシーのワイルドカード（アクション名やリソース範囲の複数の値を * または ? でまとめて一致させる記号）",
    "note": "Action 中匹配 API 操作名称，Resource 中匹配资源范围；所在字段不同，含义不同。",
    "frequency": 5
  },
  {
    "term": "Portability",
    "english": "Portability",
    "chinese": "可移植性",
    "japanese": "ポータビリティ / 可搬性",
    "note": "应用在不同环境间迁移和运行的能力；容器通常用于提升可移植性。",
    "frequency": 2
  },
  {
    "term": "PPS",
    "english": "Packets Per Second",
    "chinese": "每秒数据包数",
    "japanese": "1 秒あたりのパケット数",
    "note": "衡量处理数据包的能力；大量小包可能先受 PPS 限制，不能只看总 Gbps。 来源：Lecture 366。",
    "frequency": 3
  },
  {
    "term": "Practice Exam",
    "english": "Practice Exam",
    "chinese": "模拟考试",
    "japanese": "模擬試験",
    "note": "Lecture 387–389、397；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Predictive Scaling",
    "english": "Predictive Scaling",
    "chinese": "预测伸缩",
    "japanese": "予測スケーリング",
    "note": "根据历史负载生成预测并提前扩容，适合稳定重复的周期模式。",
    "frequency": 4
  },
  {
    "term": "Presigned URL",
    "english": "Amazon S3 Presigned URL",
    "chinese": "预签名 URL",
    "japanese": "署名付き URL",
    "note": "限时 Bearer URL；Console 常见 1 分钟–12 小时，CLI/SDK 最长 7 天；继承签名者权限，不会把对象设为 Public。",
    "frequency": 5
  },
  {
    "term": "Price-Capacity-Optimized",
    "english": "Price-Capacity-Optimized Allocation Strategy",
    "chinese": "价格容量优化分配策略",
    "japanese": "価格・キャパシティ最適化（中断リスクが低い容量プールの中から価格も考慮して Spot を割り当てる戦略）",
    "note": "同时考虑价格与可用容量，是一般 Spot 工作负载优先考虑的分配策略。",
    "frequency": 4
  },
  {
    "term": "Primary ENI",
    "english": "Primary Elastic Network Interface",
    "chinese": "主网络接口",
    "japanese": "プライマリ ENI（EC2 起動時に Device Index 0 として使用される主要ネットワークインターフェイス）",
    "note": "不能从实例分离，为实例提供主私有 IPv4 地址和基本网络位置。",
    "frequency": 3
  },
  {
    "term": "Primary Key",
    "english": "Primary Key",
    "chinese": "主键",
    "japanese": "主キー",
    "note": "唯一标识一条记录或 Item 的键。",
    "frequency": 5
  },
  {
    "term": "Principal",
    "english": "Principal",
    "chinese": "主体",
    "japanese": "プリンシパル（リソースベースまたは信頼ポリシーで、規則の対象となるアカウント、ユーザー、ロール、サービスなどの主体）",
    "note": "常见于 Resource-based Policy 与 Trust Policy；Identity-based Policy 不能使用 Principal。IAM Group 不能作为 Principal。",
    "frequency": 5
  },
  {
    "term": "Private IP",
    "english": "Private IP Address",
    "chinese": "私有 IP 地址",
    "japanese": "プライベート IP アドレス（VPC など到達可能なプライベートネットワーク内で通信するための IP アドレス）",
    "note": "主私有 IPv4 地址在 Stop/Hibernate 后再 Start 时通常保持不变。它不能从互联网直接访问，但可通过 VPN、堡垒机、Direct Connect 或 EC2 Instance Connect Endpoint 等私有路径使用。",
    "frequency": 5
  },
  {
    "term": "Private Subnet",
    "english": "Private Subnet",
    "chinese": "私有子网",
    "japanese": "プライベートサブネット",
    "note": "没有到 IGW 的直接路由，可经 NAT 主动出网。",
    "frequency": 5
  },
  {
    "term": "PrivateLink",
    "english": "AWS PrivateLink",
    "chinese": "AWS 私有链接",
    "japanese": "AWS PrivateLink（AWS サービスへのプライベート接続）",
    "note": "私密访问指定服务，不打通整个网络。",
    "frequency": 5
  },
  {
    "term": "Producer",
    "english": "Message Producer",
    "chinese": "消息生产者",
    "japanese": "プロデューサー",
    "note": "创建并发送消息或事件的一方。",
    "frequency": 3
  },
  {
    "term": "Production-scale Testing",
    "english": "Production-scale Testing",
    "chinese": "生产规模测试",
    "japanese": "本番規模のテスト",
    "note": "在合适环境用代表性生产负载、数据量与依赖验证性能、容量和故障路径；安排费用与清理。",
    "frequency": 3
  },
  {
    "term": "Provisioned Concurrency",
    "english": "AWS Lambda Provisioned Concurrency",
    "chinese": "预置并发",
    "japanese": "プロビジョニング済み同時実行数",
    "note": "提前初始化并保持指定数量的 Lambda Execution Environments，降低 Cold Start；需要 Version/Alias 并额外计费，不是最大并发上限。",
    "frequency": 5
  },
  {
    "term": "Provisioning",
    "english": "Resource Provisioning",
    "chinese": "资源预置 / 配置",
    "japanese": "プロビジョニング",
    "note": "创建并配置基础设施资源；Deployment 更偏向发布应用或版本。",
    "frequency": 3
  },
  {
    "term": "Pub/Sub",
    "english": "Publish / Subscribe",
    "chinese": "发布 / 订阅",
    "japanese": "パブリッシュ／サブスクライブ",
    "note": "发布者不需要知道订阅者；适合一对多广播。",
    "frequency": 4
  },
  {
    "term": "Public IP",
    "english": "Public IP Address",
    "chinese": "公有 IP 地址",
    "japanese": "パブリック IP アドレス（インターネット上でルーティング可能な IP アドレス）",
    "note": "自动分配的公有 IPv4 在 Stop/Hibernate 后会被释放，再次 Start 时通常会变化。即使拥有公有 IP，缺少 IGW、路由、SG/NACL 或监听服务时仍无法访问。",
    "frequency": 5
  },
  {
    "term": "Public Subnet",
    "english": "Public Subnet",
    "chinese": "公有子网",
    "japanese": "パブリックサブネット",
    "note": "路由表含到 IGW 的直接路由；资源公网通信还需公网地址和安全规则。",
    "frequency": 5
  },
  {
    "term": "Pull",
    "english": "Pull Model",
    "chinese": "拉取模式",
    "japanese": "プル型",
    "note": "消费者主动读取消息；SQS 典型为 Pull。",
    "frequency": 4
  },
  {
    "term": "Purpose-Built Database",
    "english": "Purpose-Built Database",
    "chinese": "专用数据库",
    "japanese": "専用データベース",
    "note": "按数据模型和访问模式选择最合适的数据库。",
    "frequency": 4
  },
  {
    "term": "Push",
    "english": "Push Model",
    "chinese": "推送模式",
    "japanese": "プッシュ型",
    "note": "服务主动把消息发送给订阅者；SNS 典型为 Push。",
    "frequency": 4
  },
  {
    "term": "Query",
    "english": "Query",
    "chinese": "查询操作",
    "japanese": "クエリ",
    "note": "DynamoDB Query 按 Partition Key 定位数据，通常比 Scan 高效。",
    "frequency": 5
  },
  {
    "term": "Queue",
    "english": "Message Queue",
    "chinese": "消息队列",
    "japanese": "メッセージキュー",
    "note": "消息通常由一个消费者处理；用于排队、缓冲和削峰。",
    "frequency": 4
  },
  {
    "term": "RBAC",
    "english": "Role-Based Access Control",
    "chinese": "基于角色的访问控制",
    "japanese": "ロールベースアクセス制御",
    "note": "为 ElastiCache Valkey / Redis OSS 提供比单一 AUTH Token 更细粒度的授权。",
    "frequency": 3
  },
  {
    "term": "RDS",
    "english": "Amazon Relational Database Service",
    "chinese": "托管关系型数据库服务",
    "japanese": "Amazon RDS（マネージドリレーショナルデータベース）",
    "note": "应用通过 Endpoint + Port 访问；AWS 管底层 Host 与大量运维，客户仍管 Data、Schema、Query、Security 与 Recovery。",
    "frequency": 5
  },
  {
    "term": "RDS Custom",
    "english": "Amazon RDS Custom",
    "chinese": "可定制托管关系数据库",
    "japanese": "Amazon RDS Custom（カスタムマネージド DB）",
    "note": "为需要 OS / DB 深度定制的 Oracle、SQL Server 工作负载提供更高管理权限。",
    "frequency": 3
  },
  {
    "term": "RDS Proxy",
    "english": "Amazon RDS Proxy",
    "chinese": "RDS 数据库代理",
    "japanese": "Amazon RDS Proxy（データベースプロキシ）",
    "note": "通过 Connection Pooling / Multiplexing 复用 Backend DB Connection，适合 Lambda Connection Storm。",
    "frequency": 5
  },
  {
    "term": "RDS Storage Auto Scaling",
    "english": "RDS Storage Auto Scaling",
    "chinese": "RDS 存储自动扩展",
    "japanese": "RDS ストレージオートスケーリング",
    "note": "在存储空间不足并满足持续时间与修改约束时自动提高 Allocated Storage。",
    "frequency": 4
  },
  {
    "term": "Read Replica",
    "english": "Read Replica",
    "chinese": "只读副本",
    "japanese": "リードレプリカ",
    "note": "Application 必须连接 Replica Endpoint 才能分担读；可能有 Replica Lag，可 Promote 为独立 DB。",
    "frequency": 5
  },
  {
    "term": "Reader Endpoint",
    "english": "Reader Endpoint",
    "chinese": "读取端点",
    "japanese": "リーダーエンドポイント",
    "note": "为通用读取连接提供统一入口；新 Reader 可被 Endpoint 使用。",
    "frequency": 5
  },
  {
    "term": "Recovery Point",
    "english": "Recovery Point",
    "chinese": "备份恢复点",
    "japanese": "復旧ポイント",
    "note": "可用备份或受支持连续备份的恢复依据；检查状态、保留、一致性、权限和实际恢复能力。",
    "frequency": 4
  },
  {
    "term": "Recycle Bin",
    "english": "Recycle Bin for AWS Resources",
    "chinese": "AWS 回收站",
    "japanese": "AWS Recycle Bin",
    "note": "用 Retention Rule 防止误删；已进入 Recycle Bin 的资源在保留期内仍计费，删除 Rule 不会立刻清除它们。",
    "frequency": 3
  },
  {
    "term": "Redis OSS",
    "english": "Redis Open Source Software",
    "chinese": "Redis 开源引擎",
    "japanese": "Redis OSS（オープンソースエンジン）",
    "note": "支持丰富数据结构、Replication、Session 与 Leaderboard；新 Workload 也应评估 Valkey。",
    "frequency": 4
  },
  {
    "term": "Redundancy",
    "english": "Redundancy",
    "chinese": "冗余",
    "japanese": "冗長性（じょうちょうせい）",
    "note": "通过复制组件和路径降低单点故障风险。",
    "frequency": 5
  },
  {
    "term": "Refactor / Re-architect",
    "english": "Refactor / Re-architect",
    "chinese": "重构、重新架构",
    "japanese": "リファクタリング／再設計",
    "note": "修改或重写代码，利用云原生能力重新设计架构。",
    "frequency": 5
  },
  {
    "term": "Reference Architecture",
    "english": "Reference Architecture",
    "chinese": "参考架构",
    "japanese": "リファレンスアーキテクチャ",
    "note": "针对场景说明服务组合、数据流、信任边界和设计思路；需按业务约束调整并验证。",
    "frequency": 3
  },
  {
    "term": "Region",
    "english": "AWS Region",
    "chinese": "区域",
    "japanese": "AWS リージョン（複数のアベイラビリティーゾーンを含む独立した地理的領域）",
    "note": "选择 Region 时依次检查合规、延迟、服务可用性和价格；跨 Region 常用于灾备、合规或全球低延迟。",
    "frequency": 5
  },
  {
    "term": "Region Selector",
    "english": "AWS Console Region Selector",
    "chinese": "区域选择器",
    "japanese": "AWS コンソールのリージョンセレクター（操作対象リージョンを切り替える機能）",
    "note": "决定控制台当前操作的 Region；区域级资源在不同 Region 中分别显示，全球级服务通常不随之改变。",
    "frequency": 4
  },
  {
    "term": "Regional NAT Gateway",
    "english": "Regional Network Address Translation Gateway",
    "chinese": "区域性 NAT 网关",
    "japanese": "リージョナル NAT ゲートウェイ",
    "note": "VPC 范围的公有 NAT，按模式跨 AZ 扩展；无需选择承载公有子网。单 ID 不等于单 AZ 或固定单 AZ 费用。",
    "frequency": 4
  },
  {
    "term": "Regional Service",
    "english": "AWS Regional Service",
    "chinese": "区域级服务",
    "japanese": "AWS リージョナルサービス（単一リージョンを作用範囲とするサービス）",
    "note": "资源和操作归属于指定 Region；切换控制台 Region 会看到不同的区域级资源。",
    "frequency": 5
  },
  {
    "term": "Registry",
    "english": "Container Registry",
    "chinese": "容器镜像仓库",
    "japanese": "コンテナレジストリ",
    "note": "用于保存、版本化和分发镜像；AWS 对应 ECR。",
    "frequency": 3
  },
  {
    "term": "Rehost",
    "english": "Rehost (Lift and Shift)",
    "chinese": "重新托管、原样迁移",
    "japanese": "再ホスト（リフト・アンド・シフト）",
    "note": "基本不改应用，把单个服务器或应用迁往 AWS。",
    "frequency": 5
  },
  {
    "term": "Relational Database",
    "english": "Relational Database",
    "chinese": "关系数据库",
    "japanese": "リレーショナルデータベース",
    "note": "用表、键与关系组织数据，支持 SQL、JOIN 和事务。",
    "frequency": 5
  },
  {
    "term": "Relocate",
    "english": "Relocate",
    "chinese": "重新放置、整个平台迁移",
    "japanese": "再配置（プラットフォーム全体の移行）",
    "note": "将整个虚拟化或容器平台整体迁往 AWS 上的同类环境。",
    "frequency": 4
  },
  {
    "term": "Replacement",
    "english": "CloudFormation Resource Replacement",
    "chinese": "更新时资源替换",
    "japanese": "リソースの置換",
    "note": "Modify 也可能替换资源；应检查数据、停机与 UpdateReplacePolicy。",
    "frequency": 3
  },
  {
    "term": "Replatform",
    "english": "Replatform (Lift, Tinker and Shift)",
    "chinese": "更换平台、小幅优化后迁移",
    "japanese": "再プラットフォーム化",
    "note": "不改变核心架构，进行有限云优化后迁移。",
    "frequency": 5
  },
  {
    "term": "Replica",
    "english": "Replica",
    "chinese": "副本",
    "japanese": "レプリカ（複製）",
    "note": "可用于 Read Scaling、Failover 或 Durability，具体能力取决于服务与复制方式。",
    "frequency": 4
  },
  {
    "term": "Replication Agent",
    "english": "AWS Replication Agent",
    "chinese": "复制代理",
    "japanese": "レプリケーションエージェント",
    "note": "在支持的源服务器复制磁盘块，供 MGN 计划迁移或 DRS 灾备使用；目的由服务决定。",
    "frequency": 4
  },
  {
    "term": "Repurchase",
    "english": "Repurchase (Drop and Shop)",
    "chinese": "重新购买、更换产品",
    "japanese": "再購入（SaaS への置き換え）",
    "note": "放弃旧软件，改用新的产品或 SaaS。",
    "frequency": 4
  },
  {
    "term": "Reserved Concurrency",
    "english": "AWS Lambda Reserved Concurrency",
    "chinese": "预留并发",
    "japanese": "予約済み同時実行数",
    "note": "为 Function 保留并同时限制最大并发，隔离账户 Regional Concurrency Pool；设为 0 可让函数持续被 Throttle。它不会预热执行环境。",
    "frequency": 5
  },
  {
    "term": "Reserved Instance",
    "english": "Reserved Instance",
    "chinese": "预留实例",
    "japanese": "リザーブドインスタンス（一定期間の利用コミットメントにより EC2 料金の割引を受ける課金上の仕組み）",
    "note": "折扣与容量预留是两个概念。Regional RI 提供更灵活的折扣，Zonal RI 还包含指定 AZ 的容量预留。",
    "frequency": 5
  },
  {
    "term": "Resolver Rule",
    "english": "Route 53 Resolver Rule",
    "chinese": "解析器规则",
    "japanese": "リゾルバールール",
    "note": "指定转发 Domain 与目标 DNS IP，并关联 VPC；冲突时最具体 Domain 匹配。",
    "frequency": 4
  },
  {
    "term": "Resource",
    "english": "Resource",
    "chinese": "资源",
    "japanese": "リソース（ポリシーステートメントの適用対象となる AWS リソースを ARN などで指定する要素）",
    "note": "指定规则作用的 AWS 资源；可以精确限定时避免使用 *。",
    "frequency": 5
  },
  {
    "term": "Resource Assignment",
    "english": "AWS Backup Resource Assignment",
    "chinese": "备份资源分配",
    "japanese": "バックアップ対象リソースの割り当て",
    "note": "按资源范围／ARN／类型／标签匹配目标，并依赖服务支持与 IAM 权限；不是贴标签后立即完成备份。",
    "frequency": 4
  },
  {
    "term": "Resource-based Policy",
    "english": "Resource-based Policy",
    "chinese": "基于资源的策略",
    "japanese": "リソースベースのポリシー（AWS リソース側に設定し、どのプリンシパルに何を許可・拒否するかを定義するポリシー）",
    "note": "附加在资源上，通常通过 Principal 指定主体；跨账户授权高频。",
    "frequency": 5
  },
  {
    "term": "Retain",
    "english": "Retain",
    "chinese": "保留、暂不迁移",
    "japanese": "保持（現環境に残す）",
    "note": "应用仍有价值，但由于合规、依赖或收益等原因当前暂不迁移。",
    "frequency": 4
  },
  {
    "term": "Retire",
    "english": "Retire",
    "chinese": "停用、下线",
    "japanese": "廃止（システムを停止する）",
    "note": "确认系统不再需要，直接关闭并停止维护。",
    "frequency": 4
  },
  {
    "term": "Root User",
    "english": "AWS Account Root User",
    "chinese": "AWS 账户根用户",
    "japanese": "AWS アカウントのルートユーザー（アカウント作成時の最高権限を持つ本人確認主体）",
    "note": "只用于必须由根用户完成的少数账户任务；启用 MFA，不创建访问密钥，不用于日常管理。",
    "frequency": 5
  },
  {
    "term": "Route 53",
    "english": "Amazon Route 53",
    "chinese": "权威 DNS、域名与流量路由服务",
    "japanese": "Amazon Route 53（DNS・ドメイン登録・ヘルスチェック・ルーティング）",
    "note": "提供权威 DNS、Domain Registration、Health-aware Routing 与 Route 53 Resolver；不承载后续应用流量。",
    "frequency": 5
  },
  {
    "term": "Route 53 Health Check",
    "english": "Amazon Route 53 Health Check",
    "chinese": "Route 53 健康检查",
    "japanese": "Route 53 ヘルスチェック",
    "note": "产生健康信号；必须关联 Record / Policy 才影响 DNS。Private Resource 常用 CloudWatch Alarm。",
    "frequency": 5
  },
  {
    "term": "Route 53 Resolver",
    "english": "Amazon Route 53 Resolver",
    "chinese": "Route 53 解析器",
    "japanese": "Route 53 Resolver",
    "note": "VPC 默认递归解析器；解析 VPC Local、Private Hosted Zone 与 Public DNS。",
    "frequency": 5
  },
  {
    "term": "Route 53 Routing Policy",
    "english": "Amazon Route 53 Routing Policy",
    "chinese": "Route 53 路由策略",
    "japanese": "Route 53 ルーティングポリシー",
    "note": "决定权威 DNS 返回哪个 Record；不是应用流量代理。包括 Simple、Weighted、Latency、Failover、Geolocation、Geoproximity、IP-based 与 Multi-Value。",
    "frequency": 5
  },
  {
    "term": "Route Propagation",
    "english": "Route Propagation",
    "chinese": "路由传播",
    "japanese": "ルート伝播",
    "note": "将网关/附件可达路由安装到路由表；TGW 附件可传播到多张表。Propagation 不自动补齐 VPC 内所有远端路由。",
    "frequency": 4
  },
  {
    "term": "Route Table",
    "english": "Route Table",
    "chinese": "路由表",
    "japanese": "ルートテーブル",
    "note": "决定网络流量下一跳；不负责允许或拒绝具体连接。",
    "frequency": 5
  },
  {
    "term": "Route Table Association",
    "english": "Route Table Association",
    "chinese": "路由表关联",
    "japanese": "ルートテーブルの関連付け",
    "note": "子网关联有效 VPC 路由表；TGW 附件关联一张 TGW 表，决定从该附件进入的流量查哪张表。",
    "frequency": 4
  },
  {
    "term": "RPO",
    "english": "Recovery Point Objective",
    "chinese": "恢复点目标",
    "japanese": "目標復旧時点",
    "note": "业务最多允许丢失多长时间的数据，是恢复点目标；实际数据缺口由有效恢复点与故障时刻决定，不能把目标当作复制承诺。",
    "frequency": 5
  },
  {
    "term": "RTO",
    "english": "Recovery Time Objective",
    "chinese": "恢复时间目标",
    "japanese": "目標復旧時間",
    "note": "业务故障后允许的最大中断时间，是恢复时间目标；要计入应用、网络、身份、DNS 与流量恢复，用端到端演练验证。",
    "frequency": 5
  },
  {
    "term": "Run Command",
    "english": "AWS Systems Manager Run Command",
    "chinese": "批量远程命令执行",
    "japanese": "Run Command（一括コマンド実行）",
    "note": "通过 SSM Document 向有 Agent、权限和网络的 Managed Nodes 执行命令。",
    "frequency": 4
  },
  {
    "term": "Runtime",
    "english": "Runtime",
    "chinese": "运行时",
    "japanese": "ランタイム",
    "note": "程序执行所需的软件环境，例如 Python、Java 或容器运行时。",
    "frequency": 2
  },
  {
    "term": "S3",
    "english": "Amazon Simple Storage Service",
    "chinese": "对象存储",
    "japanese": "Amazon S3（オブジェクトストレージ）",
    "note": "Region 级对象存储；单 Object 当前常用上限 50 TB，Single PUT 最大 5 GB；Key 是完整名称，Folder 只是 Prefix。",
    "frequency": 5
  },
  {
    "term": "S3 Access Point",
    "english": "Amazon S3 Access Point",
    "chinese": "S3 访问点",
    "japanese": "S3 アクセスポイント",
    "note": "同一 Bucket 的命名访问入口，拥有独立 DNS 与 Policy；可按 Prefix/团队隔离，并可设 VPC-only，不复制对象。",
    "frequency": 4
  },
  {
    "term": "S3 Account Regional Namespace",
    "english": "Amazon S3 Account Regional Namespace",
    "chinese": "S3 账户区域命名空间",
    "japanese": "S3 アカウントリージョナル名前空間",
    "note": "账户专属的区域 Bucket 命名空间；完整名称含 Account ID、Region 与 -an 后缀。",
    "frequency": 3
  },
  {
    "term": "S3 Batch Operations",
    "english": "Amazon S3 Batch Operations",
    "chinese": "S3 批量操作",
    "japanese": "S3 バッチオペレーション",
    "note": "对大量 Existing Objects 执行 Copy、Tag、Restore、Lambda 等 Managed Job，并提供进度、重试与报告。",
    "frequency": 4
  },
  {
    "term": "S3 Batch Replication",
    "english": "Amazon S3 Batch Replication",
    "chinese": "S3 批量复制",
    "japanese": "S3 バッチレプリケーション",
    "note": "补复制 Replication Rule 生效前的 Existing Objects、失败对象等；不同于持续复制新版本。",
    "frequency": 4
  },
  {
    "term": "S3 Block Public Access",
    "english": "Amazon S3 Block Public Access",
    "chinese": "S3 阻止公共访问",
    "japanese": "S3 ブロックパブリックアクセス",
    "note": "防止公共 Policy 或 ACL 造成误公开的 Guardrail；它不是授予权限的 Policy。",
    "frequency": 5
  },
  {
    "term": "S3 Bucket Key",
    "english": "Amazon S3 Bucket Key",
    "chinese": "S3 存储桶密钥",
    "japanese": "S3 バケットキー",
    "note": "降低 SSE-KMS 对 KMS 的请求次数与成本；仍属于 SSE-KMS。",
    "frequency": 4
  },
  {
    "term": "S3 Bucket Policy",
    "english": "Amazon S3 Bucket Policy",
    "chinese": "S3 存储桶策略",
    "japanese": "S3 バケットポリシー",
    "note": "附加到 Bucket 的 Resource-based Policy；GetObject 必须匹配 Object ARN（bucket/*）。",
    "frequency": 5
  },
  {
    "term": "S3 Byte-Range Fetch",
    "english": "Amazon S3 Byte-Range Fetch",
    "chinese": "S3 字节范围读取",
    "japanese": "S3 バイト範囲取得",
    "note": "并行读取对象不同 Byte Range，或只取得 Header / 局部内容。",
    "frequency": 3
  },
  {
    "term": "S3 Event Notifications",
    "english": "Amazon S3 Event Notifications",
    "chinese": "S3 事件通知",
    "japanese": "S3 イベント通知",
    "note": "Object 事件可直达 SNS、SQS Standard、Lambda；复杂过滤、Replay 或 FIFO 使用 EventBridge。",
    "frequency": 5
  },
  {
    "term": "S3 Express One Zone",
    "english": "Amazon S3 Express One Zone",
    "chinese": "S3 Express 单可用区",
    "japanese": "S3 Express One Zone（1 ゾーンの高性能ストレージクラス）",
    "note": "使用 Directory Bucket 的单 AZ 高性能存储；适合与 Compute 同 AZ 的 AI/ML、HPC、Media 等高频低延迟 Workload。",
    "frequency": 3
  },
  {
    "term": "S3 File Gateway",
    "english": "Amazon S3 File Gateway",
    "chinese": "S3 文件网关",
    "japanese": "Amazon S3 ファイルゲートウェイ",
    "note": "本地 NFS/SMB 文件映射为 S3 对象。",
    "frequency": 4
  },
  {
    "term": "S3 Intelligent-Tiering",
    "english": "Amazon S3 Intelligent-Tiering",
    "chinese": "S3 智能分层",
    "japanese": "S3 Intelligent-Tiering（自動階層化ストレージクラス）",
    "note": "适合访问模式未知或变化的数据，自动在访问层间移动；仍需核算监控/自动化费用与对象特征。",
    "frequency": 5
  },
  {
    "term": "S3 Inventory",
    "english": "Amazon S3 Inventory",
    "chinese": "S3 清单",
    "japanese": "S3 インベントリ",
    "note": "周期生成对象级属性清单，可作为 Athena 查询和 Batch Operations Manifest 来源。",
    "frequency": 4
  },
  {
    "term": "S3 Object Lambda",
    "english": "Amazon S3 Object Lambda",
    "chinese": "S3 对象 Lambda",
    "japanese": "S3 Object Lambda",
    "note": "读取时动态脱敏、富化或转换且不改原对象；自 2025-11-07 起新客户不可默认使用，需核对资格。",
    "frequency": 4
  },
  {
    "term": "S3 One Zone-IA",
    "english": "Amazon S3 One Zone-Infrequent Access",
    "chinese": "S3 单可用区-低频访问",
    "japanese": "S3 1 ゾーン-IA（1 ゾーン低頻度アクセス）",
    "note": "单 AZ、低频访问、毫秒取回，适合可重建或已有其他副本的数据。",
    "frequency": 4
  },
  {
    "term": "S3 Outposts",
    "english": "Amazon S3 on Outposts",
    "chinese": "Outposts 本地对象存储",
    "japanese": "Amazon S3 on Outposts（Outposts 向けオブジェクトストレージ）",
    "note": "在客户地点的 Outposts 上提供 S3 对象存储。",
    "frequency": 4
  },
  {
    "term": "S3 Prefix",
    "english": "Amazon S3 Object Key Prefix",
    "chinese": "S3 键前缀",
    "japanese": "S3 プレフィックス",
    "note": "Object Key 开头字符串；用于组织对象、Lifecycle/Event Filter，也构成 S3 per-prefix 请求性能扩展维度。",
    "frequency": 4
  },
  {
    "term": "S3 Requester Pays",
    "english": "Amazon S3 Requester Pays",
    "chinese": "S3 请求者付费",
    "japanese": "S3 リクエスタ支払い",
    "note": "Requester 承担 Request 与 Download Cost，Owner 仍承担 Storage；Requester 必须认证且仍需授权。",
    "frequency": 3
  },
  {
    "term": "S3 Server Access Logging",
    "english": "Amazon S3 Server Access Logging",
    "chinese": "S3 服务器访问日志",
    "japanese": "S3 サーバーアクセスログ",
    "note": "将请求日志延迟投递到同 Region、同 Account 的专用 Bucket；避免 Logging Loop。",
    "frequency": 4
  },
  {
    "term": "S3 Standard",
    "english": "Amazon S3 Standard",
    "chinese": "S3 标准存储",
    "japanese": "S3 Standard（標準ストレージクラス）",
    "note": "频繁访问、多 AZ、低延迟的默认存储类别。",
    "frequency": 5
  },
  {
    "term": "S3 Standard-IA",
    "english": "Amazon S3 Standard-Infrequent Access",
    "chinese": "S3 标准-低频访问",
    "japanese": "S3 Standard-IA（標準-低頻度アクセス）",
    "note": "低频访问但需要毫秒级取回；有检索费。",
    "frequency": 5
  },
  {
    "term": "S3 Static Website Hosting",
    "english": "Amazon S3 Static Website Hosting",
    "chinese": "S3 静态网站托管",
    "japanese": "S3 静的ウェブサイトホスティング",
    "note": "Website Endpoint 提供 Index/Error 语义但原生仅 HTTP；直接公开需 Public GetObject。",
    "frequency": 4
  },
  {
    "term": "S3 Storage Class Analysis",
    "english": "Amazon S3 Storage Class Analysis",
    "chinese": "S3 存储类别分析",
    "japanese": "S3 ストレージクラス分析",
    "note": "分析访问模式，为 Standard 到 Standard-IA 的 Lifecycle Transition 时机提供建议。",
    "frequency": 3
  },
  {
    "term": "S3 Storage Lens",
    "english": "Amazon S3 Storage Lens",
    "chinese": "S3 存储透镜",
    "japanese": "S3 Storage Lens（ストレージ分析）",
    "note": "跨 Organization、Account、Region、Bucket 聚合 S3 使用、成本、保护、活动和性能指标。",
    "frequency": 4
  },
  {
    "term": "S3 Transfer Acceleration",
    "english": "Amazon S3 Transfer Acceleration",
    "chinese": "S3 传输加速",
    "japanese": "S3 Transfer Acceleration（転送高速化）",
    "note": "Client 经就近 Edge 进入 AWS Global Network，加速远距离到单一 S3 Bucket 的对象传输。",
    "frequency": 4
  },
  {
    "term": "SageMaker",
    "english": "Amazon SageMaker",
    "chinese": "机器学习平台",
    "japanese": "機械学習プラットフォーム",
    "note": "V2 知识库首批核心词条",
    "frequency": 3
  },
  {
    "term": "Savings Plans",
    "english": "Savings Plans",
    "chinese": "节省计划",
    "japanese": "Savings Plans（1 年または 3 年の時間当たり利用額をコミットしてコンピューティング料金の割引を受ける仕組み）",
    "note": "包括 Compute Savings Plans 和 EC2 Instance Savings Plans；没有两年期选项，也不保证容量。",
    "frequency": 5
  },
  {
    "term": "sc1",
    "english": "Cold HDD (sc1)",
    "chinese": "冷数据 HDD",
    "japanese": "Cold HDD（sc1）",
    "note": "低成本、低频大容量顺序访问 EBS HDD；不能作为 Boot Volume，不适合随机 I/O。",
    "frequency": 3
  },
  {
    "term": "Scalability",
    "english": "Scalability",
    "chinese": "可扩展性",
    "japanese": "スケーラビリティ（需要増加に合わせて処理能力を拡張できる性質）",
    "note": "纵向扩展改变单机规格（Scale Up/Down）；横向扩展改变节点数量（Scale Out/In）。",
    "frequency": 5
  },
  {
    "term": "Scale Out / In",
    "english": "Horizontal Scaling",
    "chinese": "横向扩展 / 缩减",
    "japanese": "スケールアウト / イン",
    "note": "通过增加或减少实例数量扩缩；云架构中更有弹性、更常考。",
    "frequency": 4
  },
  {
    "term": "Scale Up / Down",
    "english": "Vertical Scaling",
    "chinese": "纵向扩展 / 缩减",
    "japanese": "スケールアップ / ダウン",
    "note": "提高或降低单台机器配置；可能需要停机，且存在单机上限。",
    "frequency": 3
  },
  {
    "term": "Scaled Score",
    "english": "Scaled Score",
    "chinese": "换算分数",
    "japanese": "換算スコア",
    "note": "Lecture 388；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "Scan",
    "english": "Scan",
    "chinese": "全表 / 全索引扫描",
    "japanese": "スキャン",
    "note": "读取大量 Items 后过滤，通常消耗更多读取容量。",
    "frequency": 4
  },
  {
    "term": "Scheduled Scaling",
    "english": "Scheduled Scaling",
    "chinese": "计划伸缩",
    "japanese": "スケジュールされたスケーリング",
    "note": "在明确时间点预先修改 Min、Desired、Max，适合每日开盘、定时活动等可预测时段。",
    "frequency": 4
  },
  {
    "term": "Schema",
    "english": "Schema",
    "chinese": "数据结构定义",
    "japanese": "スキーマ",
    "note": "定义表、列、类型和约束；DynamoDB 仍有主键 Schema。",
    "frequency": 5
  },
  {
    "term": "SDDC",
    "english": "Software-Defined Data Center",
    "chinese": "软件定义数据中心",
    "japanese": "ソフトウェア定義データセンター",
    "note": "VMware Cloud on AWS 的 VMware 软件定义数据中心背景；vSphere、vSAN、NSX 分别联系计算、存储与网络。",
    "frequency": 2
  },
  {
    "term": "Secondary ENI",
    "english": "Secondary Elastic Network Interface",
    "chinese": "辅助网络接口",
    "japanese": "セカンダリ ENI（既存の EC2 に追加でアタッチする独立した仮想ネットワークインターフェイス）",
    "note": "可在同一 AZ 内分离并附加，从而迁移私有 IP、MAC 地址和 Security Group 等网络身份信息；增加 ENI 不代表带宽自动翻倍。",
    "frequency": 4
  },
  {
    "term": "Secondary Private IP",
    "english": "Secondary Private IP Address",
    "chinese": "辅助私有 IP 地址",
    "japanese": "セカンダリプライベート IP アドレス（同じ ENI に追加で割り当てるプライベート IP アドレス）",
    "note": "它不是第二张虚拟网卡，而是同一张 ENI 在主私有 IP 之外持有的附加地址。",
    "frequency": 3
  },
  {
    "term": "Secret Access Key",
    "english": "Secret Access Key",
    "chinese": "秘密访问密钥",
    "japanese": "シークレットアクセスキー（AWS API リクエストの署名に使用する秘密値で、作成時以外は再表示できない認証情報）",
    "note": "必须保密，不能共享或硬编码；丢失后不能恢复，只能创建并验证新 Key 后撤销旧 Key。",
    "frequency": 5
  },
  {
    "term": "Security Finding",
    "english": "Security Finding",
    "chinese": "安全调查结果",
    "japanese": "セキュリティ検出結果",
    "note": "安全服务检测到的风险记录，通常带严重级别和建议。",
    "frequency": 3
  },
  {
    "term": "Security Group",
    "english": "Security Group",
    "chinese": "安全组",
    "japanese": "セキュリティグループ（EC2 などのリソースに適用するステートフルな仮想ファイアウォール）",
    "note": "只支持 Allow 规则。关联多个 Security Group 时，允许规则取并集，返回流量会自动允许。",
    "frequency": 5
  },
  {
    "term": "Security Key",
    "english": "FIDO Security Key",
    "chinese": "安全密钥",
    "japanese": "セキュリティキー（FIDO 規格に基づく公開鍵認証を行う、耐フィッシング性の高い物理認証デバイス）",
    "note": "课程中的 U2F Security Key 是较旧表述；当前 AWS 文档主要使用 FIDO Passkey / Security Key。",
    "frequency": 4
  },
  {
    "term": "Segment",
    "english": "Amazon Pinpoint Segment",
    "chinese": "营销受众分群",
    "japanese": "セグメント（対象者グループ）",
    "note": "按用户属性／行为等条件组织受众，不是网络子网。",
    "frequency": 2
  },
  {
    "term": "Self-Managed",
    "english": "Self-Managed Service",
    "chinese": "自行管理",
    "japanese": "セルフマネージド",
    "note": "用户负责安装、补丁、备份、扩缩和高可用，例如在 EC2 自建数据库。",
    "frequency": 3
  },
  {
    "term": "Serverless",
    "english": "Serverless Computing",
    "chinese": "无服务器计算",
    "japanese": "サーバーレスコンピューティング",
    "note": "并非没有服务器，而是用户不管理底层服务器；典型服务有 Lambda、Fargate、DynamoDB。",
    "frequency": 5
  },
  {
    "term": "Service",
    "english": "ECS Service",
    "chinese": "ECS 服务",
    "japanese": "ECS サービス",
    "note": "持续维持指定数量的 Task，并可配合负载均衡和自动扩缩。",
    "frequency": 4
  },
  {
    "term": "Service Availability in a Region",
    "english": "AWS Service Availability by Region",
    "chinese": "区域服务可用性",
    "japanese": "リージョン別サービス提供状況（各リージョンで利用できる AWS サービスの範囲）",
    "note": "表示某项 AWS 服务或功能是否在目标 Region 提供，不是系统运行时间或高可用性指标。",
    "frequency": 4
  },
  {
    "term": "Service Role",
    "english": "IAM Role for an AWS Service",
    "chinese": "AWS 服务角色",
    "japanese": "サービスロール（AWS サービスが利用者に代わって処理を実行するために引き受ける IAM ロール）",
    "note": "由 AWS Service Assume，代表用户执行服务管理操作；Beanstalk Service Role 与 EC2 Instance Profile 是不同身份。",
    "frequency": 5
  },
  {
    "term": "Session Manager",
    "english": "AWS Systems Manager Session Manager",
    "chinese": "安全会话管理",
    "japanese": "セッションマネージャー",
    "note": "无需开放 SSH/RDP 入站端口即可建立受控会话。 Lecture 374：直接 Shell 无需入站 22 或 SSH Key，但需要 Agent、节点与用户权限、出站服务连接。CloudTrail API 审计不是 Shell 内容；SSH／Port Forwarding 会话负载不支持 Session 日志记录。",
    "frequency": 4
  },
  {
    "term": "Session Token",
    "english": "Session Token",
    "chinese": "会话令牌",
    "japanese": "セッショントークン（STS などが発行する一時的な Access Key ID と Secret Access Key とともに使用する、期限付き認証情報の追加要素）",
    "note": "临时凭证的第三个组成部分，必须与临时 Access Key 一起使用并在到期后失效。",
    "frequency": 5
  },
  {
    "term": "Shard",
    "english": "Shard",
    "chinese": "分片",
    "japanese": "シャード（データ分片）",
    "note": "通过把不同 Key 分布到多个 Partition 实现水平容量扩展。",
    "frequency": 4
  },
  {
    "term": "Sid",
    "english": "Statement ID",
    "chinese": "语句标识符",
    "japanese": "ステートメント ID（ポリシー内の各 Statement を識別しやすくする任意の識別子）",
    "note": "可选元素，用于标识 Statement，便于阅读和定位；本身不授予权限。",
    "frequency": 3
  },
  {
    "term": "Simple Routing",
    "english": "Simple Routing Policy",
    "chinese": "简单路由",
    "japanese": "シンプルルーティング",
    "note": "无特殊决策逻辑；一个 Record 可含多个 Values，但不能逐 Value 绑定 Health Check。",
    "frequency": 3
  },
  {
    "term": "Simulation",
    "english": "Simulation",
    "chinese": "模拟计算",
    "japanese": "シミュレーション",
    "note": "通常属于计算密集型批处理场景，可考虑 AWS Batch 和 Spot 实例。",
    "frequency": 2
  },
  {
    "term": "Site-to-Site VPN",
    "english": "AWS Site-to-Site VPN",
    "chinese": "站点到站点 VPN",
    "japanese": "AWS Site-to-Site VPN（拠点間 VPN）",
    "note": "通过 IPsec 隧道连接完整网络。",
    "frequency": 4
  },
  {
    "term": "Snapshot",
    "english": "Amazon EBS Snapshot",
    "chinese": "EBS 快照",
    "japanese": "EBS スナップショット",
    "note": "Region 级块级时间点备份；底层增量但可完整恢复。跨 AZ Create Volume，跨 Region Copy Snapshot；不能直接 Attach。",
    "frequency": 5
  },
  {
    "term": "Snapshot Archive",
    "english": "Amazon EBS Snapshots Archive",
    "chinese": "快照归档层",
    "japanese": "EBS スナップショットアーカイブ",
    "note": "长期低频保留 EBS Snapshot 的低成本层；恢复慢并存在最短计费期，具体时长和价格需查当前文档。",
    "frequency": 3
  },
  {
    "term": "SNI",
    "english": "Server Name Indication",
    "chinese": "服务器名称指示",
    "japanese": "Server Name Indication（サーバー名表示）",
    "note": "让同一 TLS Listener/端点根据客户端提供的主机名选择匹配证书，实现多域名托管。",
    "frequency": 4
  },
  {
    "term": "SNS",
    "english": "Amazon Simple Notification Service",
    "chinese": "通知与发布订阅服务",
    "japanese": "Amazon SNS（通知サービス）",
    "note": "Push 型 Pub/Sub。可靠 fan-out 常用 SNS→多个 SQS，为每个订阅者提供独立缓冲与重试隔离；Subscription Filter Policy 可按消息属性或消息体筛选。SNS FIFO 支持归档与回放，不能再绝对记成“完全不持久化”。",
    "frequency": 5
  },
  {
    "term": "SNS Subscription DLQ",
    "english": "Amazon SNS Subscription Dead-Letter Queue",
    "chinese": "SNS 订阅死信队列",
    "japanese": "SNS サブスクリプションのデッドレターキュー",
    "note": "在订阅级配置 SQS DLQ，捕获 SNS 无法成功交付的消息；Lambda 已接受后执行失败另看 Lambda 异步策略。 来源：Lecture 363。",
    "frequency": 4
  },
  {
    "term": "Sort Key",
    "english": "Sort Key",
    "chinese": "排序键",
    "japanese": "ソートキー",
    "note": "与 Partition Key 组成复合主键，并支持同分区内范围查询。",
    "frequency": 4
  },
  {
    "term": "Sorted Set",
    "english": "Sorted Set",
    "chinese": "有序集合",
    "japanese": "ソート済みセット",
    "note": "实时游戏排行榜的经典数据结构。",
    "frequency": 3
  },
  {
    "term": "Source/Destination Check",
    "english": "Source/Destination Check",
    "chinese": "源/目标检查",
    "japanese": "送信元／送信先チェック（EC2 を通過するトラフィックの送信元または送信先がそのインスタンス自身であることを確認する機能）",
    "note": "当 EC2 作为 NAT Instance、路由器或防火墙设备转发其他主机的流量时，需要关闭此检查。",
    "frequency": 4
  },
  {
    "term": "SPF",
    "english": "Sender Policy Framework",
    "chinese": "发件来源授权验证",
    "japanese": "SPF（送信元認証）",
    "note": "DNS 声明允许的发件来源，验证 MAIL FROM 域等身份；不是正文加密。",
    "frequency": 2
  },
  {
    "term": "SPOF",
    "english": "Single Point of Failure",
    "chinese": "单点故障",
    "japanese": "単一障害点",
    "note": "一个组件故障会导致整个系统不可用。",
    "frequency": 5
  },
  {
    "term": "Spot Capacity Pool",
    "english": "Spot Capacity Pool",
    "chinese": "Spot 容量池",
    "japanese": "Spot キャパシティプール（インスタンスタイプ、アベイラビリティーゾーン、プラットフォームなどで区別される未使用容量の集合）",
    "note": "分散到多个容量池有助于降低中断风险，应避免固定在单一实例类型和单一 AZ。",
    "frequency": 3
  },
  {
    "term": "Spot Fleet",
    "english": "EC2 Spot Fleet",
    "chinese": "竞价型实例队列",
    "japanese": "スポットフリート（複数の Spot キャパシティプールから目標容量を満たすようインスタンス群を起動する仕組み）",
    "note": "考试常考分配策略。新设计还应比较 EC2 Fleet 与 Auto Scaling 的 Spot 能力。",
    "frequency": 4
  },
  {
    "term": "Spot Instance",
    "english": "EC2 Spot Instance",
    "chinese": "竞价型实例",
    "japanese": "スポットインスタンス（AWS の未使用 EC2 キャパシティを割引価格で利用する中断可能なインスタンス）",
    "note": "工作负载必须能容忍中断。中断通知通常仅在约两分钟前以尽力而为方式提供，应结合检查点和重试设计。",
    "frequency": 5
  },
  {
    "term": "Spread Placement Group",
    "english": "Spread Placement Group",
    "chinese": "分散放置组",
    "japanese": "スプレッドプレイスメントグループ（少数の重要な EC2 を異なる基盤ハードウェアへ分散して障害分離を高める配置戦略）",
    "note": "机架级模式下，每个组在每个 AZ 最多放置 7 个运行中实例；主机级模式仅适用于 Outposts。",
    "frequency": 5
  },
  {
    "term": "SQL",
    "english": "Structured Query Language",
    "chinese": "结构化查询语言",
    "japanese": "構造化照会言語",
    "note": "用于定义、查询和修改关系数据库数据。",
    "frequency": 5
  },
  {
    "term": "SQS",
    "english": "Amazon Simple Queue Service",
    "chinese": "消息队列服务",
    "japanese": "Amazon SQS（メッセージキュー）",
    "note": "Pull 型工作队列。Standard 为至少一次投递与尽力排序，消费者必须幂等；FIFO 依靠 Message Group ID 保证组内顺序。当前单条消息最大 1 MiB；用 ApproximateNumberOfMessagesVisible 或 backlog per instance 驱动扩缩容。",
    "frequency": 5
  },
  {
    "term": "SR-IOV",
    "english": "Single Root I/O Virtualization",
    "chinese": "单根 I/O 虚拟化",
    "japanese": "シングルルート I/O 仮想化",
    "note": "相关 Enhanced Networking 的底层 I/O 虚拟化机制；降低虚拟化开销，不是某个业务队列或调度器。 来源：Lecture 366。",
    "frequency": 3
  },
  {
    "term": "SRR",
    "english": "Same-Region Replication",
    "chinese": "同区域复制",
    "japanese": "同一リージョンレプリケーション",
    "note": "同一 Region 的异步对象复制；两端需 Versioning，可跨账户。",
    "frequency": 3
  },
  {
    "term": "SSE-C",
    "english": "Server-Side Encryption with Customer-Provided Keys",
    "chinese": "客户提供密钥的服务端加密",
    "japanese": "顧客提供キーによるサーバー側暗号化",
    "note": "客户保管密钥，S3 执行加解密且不保存密钥；每次请求带 Key，必须 HTTPS。",
    "frequency": 4
  },
  {
    "term": "SSE-KMS",
    "english": "Server-Side Encryption with AWS KMS keys",
    "chinese": "KMS 密钥的服务端加密",
    "japanese": "AWS KMS キーによるサーバー側暗号化",
    "note": "需要同时满足 S3 与 KMS 权限；关注 KMS 调用审计、费用与配额。",
    "frequency": 5
  },
  {
    "term": "SSE-S3",
    "english": "Server-Side Encryption with Amazon S3 managed keys",
    "chinese": "S3 托管密钥的服务端加密",
    "japanese": "S3 管理キーによるサーバー側暗号化",
    "note": "当前 S3 默认静态加密；AES-256，运维最少。",
    "frequency": 5
  },
  {
    "term": "SSL/TLS Certificate",
    "english": "SSL/TLS Certificate",
    "chinese": "SSL/TLS 证书",
    "japanese": "SSL/TLS 証明書",
    "note": "证明服务身份并支持 TLS 加密连接。",
    "frequency": 4
  },
  {
    "term": "SSM Automation",
    "english": "AWS Systems Manager Automation",
    "chinese": "运维流程自动化",
    "japanese": "Systems Manager Automation（運用自動化）",
    "note": "以 Runbook 编排 AWS API／资源操作；不是每类步骤都必须有节点 Agent。",
    "frequency": 4
  },
  {
    "term": "st1",
    "english": "Throughput Optimized HDD (st1)",
    "chinese": "吞吐优化型 HDD",
    "japanese": "スループット最適化 HDD（st1）",
    "note": "面向日志、大数据和大块顺序 I/O；关注 Throughput，不能作为 Boot Volume。",
    "frequency": 4
  },
  {
    "term": "Staging Area",
    "english": "Replication Staging Area",
    "chinese": "复制暂存区",
    "japanese": "レプリケーションのステージング領域",
    "note": "MGN／DRS 用低成本复制服务器、EBS 等暂存源数据；完整应用在测试／正式恢复实例运行。",
    "frequency": 4
  },
  {
    "term": "Stateful",
    "english": "Stateful",
    "chinese": "有状态",
    "japanese": "ステートフル",
    "note": "会跟踪已允许连接及相关返回流量。",
    "frequency": 5
  },
  {
    "term": "Stateless",
    "english": "Stateless",
    "chinese": "无状态",
    "japanese": "ステートレス",
    "note": "每个方向独立评估，不跟踪连接。",
    "frequency": 5
  },
  {
    "term": "Stateless Architecture",
    "english": "Stateless Architecture",
    "chinese": "无状态架构",
    "japanese": "ステートレスアーキテクチャ",
    "note": "Web 节点不保存必须依赖本机的会话或业务状态；State 外置后更易横向扩展和替换。",
    "frequency": 5
  },
  {
    "term": "Step Scaling",
    "english": "Step Scaling",
    "chinese": "步进伸缩",
    "japanese": "ステップスケーリング",
    "note": "适合负载越严重就需要越大扩缩幅度的场景。",
    "frequency": 4
  },
  {
    "term": "Sticky Sessions",
    "english": "Sticky Sessions",
    "chinese": "会话粘滞",
    "japanese": "スティッキーセッション",
    "note": "用负载均衡器或应用 Cookie 将同一客户端在一段时间内路由到同一目标；无状态或外置 Session 通常更易扩展。",
    "frequency": 4
  },
  {
    "term": "Storage Gateway",
    "english": "AWS Storage Gateway",
    "chinese": "混合云存储网关",
    "japanese": "AWS Storage Gateway（ハイブリッドクラウドストレージゲートウェイ）",
    "note": "本地应用以文件、卷或磁带接口接入 AWS 存储。",
    "frequency": 4
  },
  {
    "term": "Storage Optimized Instance",
    "english": "Storage Optimized Instance",
    "chinese": "存储优化型实例",
    "japanese": "ストレージ最適化インスタンス（ローカルストレージへの高い連続読み書き性能を重視した EC2 インスタンス）",
    "note": "这是实例家族分类，与 EBS 的 gp3、io2 等卷类型属于不同选择维度。",
    "frequency": 4
  },
  {
    "term": "Subnet",
    "english": "Subnet",
    "chinese": "子网",
    "japanese": "サブネット",
    "note": "Subnet 只能属于一个 AZ；是否公有取决于路由表是否指向 Internet Gateway。",
    "frequency": 5
  },
  {
    "term": "Table",
    "english": "Table",
    "chinese": "表",
    "japanese": "テーブル",
    "note": "关系数据库中由行列组成；DynamoDB 中由 Items 组成。",
    "frequency": 5
  },
  {
    "term": "Tape Gateway",
    "english": "AWS Storage Gateway Tape Gateway",
    "chinese": "磁带网关",
    "japanese": "テープゲートウェイ",
    "note": "用虚拟磁带替代物理磁带备份基础设施。",
    "frequency": 4
  },
  {
    "term": "Target Group",
    "english": "Target Group",
    "chinese": "目标组",
    "japanese": "ターゲットグループ",
    "note": "定义后端目标、端口、协议与健康检查；目标可处于 initial、healthy、unhealthy、draining、unused 等状态。",
    "frequency": 5
  },
  {
    "term": "Target Tracking Scaling",
    "english": "Target Tracking Scaling",
    "chinese": "目标跟踪伸缩",
    "japanese": "ターゲット追跡スケーリング",
    "note": "适合 CPU、ALBRequestCountPerTarget 等可按容量变化的指标；RequestCountPerTarget 不是未完成请求数。",
    "frequency": 5
  },
  {
    "term": "Task",
    "english": "ECS Task",
    "chinese": "ECS 任务 / 运行实例",
    "japanese": "ECS タスク",
    "note": "Task Definition 的一次实际运行；可以单次运行，也可由 Service 持续维护。",
    "frequency": 4
  },
  {
    "term": "Task Definition",
    "english": "ECS Task Definition",
    "chinese": "ECS 任务定义",
    "japanese": "ECS タスク定義",
    "note": "描述容器镜像、CPU、内存、端口和环境变量；相当于运行模板。",
    "frequency": 4
  },
  {
    "term": "Temporary Credentials",
    "english": "Temporary Security Credentials",
    "chinese": "临时安全凭证",
    "japanese": "一時的なセキュリティ認証情報",
    "note": "有有效期的 Access Key、Secret Key 和 Session Token。",
    "frequency": 5
  },
  {
    "term": "Temporary Security Credentials",
    "english": "AWS Temporary Security Credentials",
    "chinese": "AWS 临时安全凭证",
    "japanese": "AWS 一時的セキュリティ認証情報（Access Key ID、Secret Access Key、Session Token で構成され、有効期限がある API 認証情報）",
    "note": "会到期；用于 Role、Identity Center 与 Federation。人员和工作负载均优先于长期 IAM User Access Key。",
    "frequency": 5
  },
  {
    "term": "Three-Tier Architecture",
    "english": "Three-Tier Architecture",
    "chinese": "三层架构",
    "japanese": "3層アーキテクチャ",
    "note": "将入口/表现、应用逻辑和数据层分离；各层独立设计扩展、安全与高可用。",
    "frequency": 5
  },
  {
    "term": "Throughput",
    "english": "Storage Throughput",
    "chinese": "存储吞吐量",
    "japanese": "スループット",
    "note": "衡量每秒传输的数据量，大文件顺序 I/O 常关注。",
    "frequency": 5
  },
  {
    "term": "Tight Coupling",
    "english": "Tightly Coupled Architecture",
    "chinese": "紧密耦合",
    "japanese": "密結合（みつけつごう）",
    "note": "组件互相直接依赖，容易导致级联故障和扩展困难。",
    "frequency": 3
  },
  {
    "term": "TLS",
    "english": "Transport Layer Security",
    "chinese": "传输层安全协议",
    "japanese": "トランスポート層セキュリティ",
    "note": "用于建立加密网络连接的现代协议。",
    "frequency": 5
  },
  {
    "term": "TLS Termination",
    "english": "Transport Layer Security Termination",
    "chinese": "TLS 终止",
    "japanese": "TLS 終端",
    "note": "负载均衡器负责证书与握手、解密客户端流量；Certificate 决定身份，Security Policy 决定协议与密码套件。",
    "frequency": 4
  },
  {
    "term": "Topic",
    "english": "Topic",
    "chinese": "主题",
    "japanese": "トピック",
    "note": "SNS 中用于发布消息的逻辑入口；一个消息可推送给多个订阅者。",
    "frequency": 3
  },
  {
    "term": "TOTP",
    "english": "Time-Based One-Time Password",
    "chinese": "基于时间的一次性密码",
    "japanese": "時刻同期型ワンタイムパスワード（共有秘密と現在時刻から一定間隔で生成される、一度限りの認証コード）",
    "note": "Authenticator App 或硬件令牌生成的短时 Code；不是固定的第二个密码。",
    "frequency": 4
  },
  {
    "term": "Traffic Mirroring",
    "english": "Amazon VPC Traffic Mirroring",
    "chinese": "VPC 流量镜像",
    "japanese": "VPC トラフィックミラーリング",
    "note": "复制受支持 ENI 网络报文到 ENI/NLB/GWLB Endpoint 等目标作分析；旁路副本不自动阻断，TLS 仍需处理解密条件。",
    "frequency": 4
  },
  {
    "term": "Transit Gateway",
    "english": "AWS Transit Gateway",
    "chinese": "中转网关",
    "japanese": "トランジットゲートウェイ",
    "note": "集中连接多个 VPC 与本地网络。",
    "frequency": 4
  },
  {
    "term": "Trigger",
    "english": "Trigger",
    "chinese": "触发器",
    "japanese": "トリガー",
    "note": "引发 Lambda 或自动化流程执行的事件来源。",
    "frequency": 3
  },
  {
    "term": "Trust Policy",
    "english": "IAM Role Trust Policy",
    "chinese": "IAM 角色信任策略",
    "japanese": "信頼ポリシー（どのプリンシパルが IAM ロールを引き受けられるかを定義する、ロール必須のリソースベースポリシー）",
    "note": "决定谁可以 AssumeRole；不能替代决定 Role Session 能做什么的 Permissions Policy。",
    "frequency": 5
  },
  {
    "term": "Trusted Advisor API",
    "english": "AWS Trusted Advisor API",
    "chinese": "Trusted Advisor 推荐接口",
    "japanese": "AWS Trusted Advisor API（推奨事項 API）",
    "note": "专用接口访问检查、推荐与相关资源等；按自己的操作、计划、权限与端点规则使用。",
    "frequency": 2
  },
  {
    "term": "Trusted Entity",
    "english": "IAM Role Trusted Entity",
    "chinese": "IAM 角色受信任实体",
    "japanese": "信頼されたエンティティ（IAM ロールの信頼ポリシーで、そのロールを引き受けることを許可された主体）",
    "note": "说明谁能 AssumeRole；可以是 AWS Service、Account、User、Role 或 Federated Principal。",
    "frequency": 4
  },
  {
    "term": "TTL",
    "english": "Time to Live",
    "chinese": "生存时间",
    "japanese": "TTL（生存時間）",
    "note": "控制 Recursive Resolver 缓存时长；降低 TTL 不会清除已有旧缓存。 缓存语境表示条目有效/保留时间；到期通常由后续请求回源，不是 DB 更新后主动推送。多层缓存分别配置，旧下层值可再次回填；DynamoDB TTL 又是另一种过期删除机制。 来源：Lecture 364。",
    "frequency": 5
  },
  {
    "term": "Unscored Questions",
    "english": "Unscored Questions",
    "chinese": "不计分题",
    "japanese": "採点対象外の問題",
    "note": "Lecture 388；考前准备／认证管理术语，不属于技术题出题频率评分。完整解释见考试准备专题或学习路线。",
    "frequency": 1
  },
  {
    "term": "UpdateReplacePolicy",
    "english": "CloudFormation UpdateReplacePolicy",
    "chinese": "替换旧物理资源时的处置策略",
    "japanese": "更新時置換ポリシー",
    "note": "更新导致 Replacement 时处置旧资源；Retain／Snapshot 仍可能继续计费。",
    "frequency": 3
  },
  {
    "term": "Valkey",
    "english": "Valkey",
    "chinese": "开源键值数据存储引擎",
    "japanese": "Valkey（オープンソース・キー値データストア）",
    "note": "ElastiCache 支持的现代内存数据存储引擎，适合 Cache、Session、Sorted Set 与 HA。",
    "frequency": 4
  },
  {
    "term": "Versioning",
    "english": "Amazon S3 Versioning",
    "chinese": "S3 版本控制",
    "japanese": "S3 バージョニング",
    "note": "Bucket 级版本控制；同 Key 覆盖生成新 Version，普通 Delete 添加 Delete Marker；Suspend 不删除历史版本。",
    "frequency": 5
  },
  {
    "term": "Vertex",
    "english": "Vertex / Node",
    "chinese": "图节点",
    "japanese": "頂点 / ノード",
    "note": "图数据库中表示实体的节点。",
    "frequency": 2
  },
  {
    "term": "VGW",
    "english": "Virtual Private Gateway",
    "chinese": "虚拟私有网关",
    "japanese": "仮想プライベートゲートウェイ",
    "note": "单个 VPC 一侧的传统私有连接网关。",
    "frequency": 4
  },
  {
    "term": "Virtual Interface",
    "english": "Virtual Interface",
    "chinese": "虚拟接口",
    "japanese": "仮想インターフェイス",
    "note": "Direct Connect 的逻辑接口，如 Private/Public/Transit VIF。",
    "frequency": 4
  },
  {
    "term": "Virtual MFA Device",
    "english": "Virtual Multi-Factor Authentication Device",
    "chinese": "虚拟 MFA 设备",
    "japanese": "仮想 MFA デバイス（認証アプリで TOTP コードを生成し、パスワードに加えて本人確認を行うソフトウェア認証器）",
    "note": "通过 QR Code 或 Secret Configuration Key 绑定；这些配置可生成 TOTP，必须按敏感凭证保护。",
    "frequency": 5
  },
  {
    "term": "Visibility Timeout",
    "english": "Visibility Timeout",
    "chinese": "可见性超时",
    "japanese": "可視性タイムアウト",
    "note": "消息被接收后在一段时间内对其他消费者不可见；处理成功必须 DeleteMessage。超时前未删除会重新可见，造成重复处理，因此消费者要幂等。默认 30 秒、最大 12 小时，可用 ChangeMessageVisibility 动态延长；它不等于消息保留期。",
    "frequency": 5
  },
  {
    "term": "VM",
    "english": "Virtual Machine",
    "chinese": "虚拟机",
    "japanese": "仮想マシン",
    "note": "每台 VM 通常包含完整操作系统；隔离强但启动和资源开销高于容器。",
    "frequency": 2
  },
  {
    "term": "VM Import/Export",
    "english": "VM Import/Export",
    "chinese": "虚拟机镜像导入／导出",
    "japanese": "仮想マシンイメージのインポート／エクスポート",
    "note": "将受支持 VM 镜像导入原生 EC2；导出范围受格式、操作系统、磁盘、加密、来源和许可限制。",
    "frequency": 2
  },
  {
    "term": "VMware Cloud on AWS",
    "english": "VMware Cloud on AWS",
    "chinese": "AWS 基础设施上的 VMware 云环境",
    "japanese": "AWS 上の VMware クラウド環境",
    "note": "保留 VMware 工具与运维模型延伸到 AWS；平台 Relocate 与原生 EC2 Rehost 区分，当前销售经 Broadcom。",
    "frequency": 2
  },
  {
    "term": "Volume Gateway",
    "english": "AWS Storage Gateway Volume Gateway",
    "chinese": "卷网关",
    "japanese": "ボリュームゲートウェイ",
    "note": "向本地提供 iSCSI 卷并把数据备份到 AWS。",
    "frequency": 4
  },
  {
    "term": "VPC",
    "english": "Amazon Virtual Private Cloud",
    "chinese": "虚拟私有云",
    "japanese": "Amazon VPC（仮想プライベートクラウド）",
    "note": "Region 级逻辑隔离网络；CIDR 规划、路由、安全组和 NACL 都属于 VPC 核心。",
    "frequency": 5
  },
  {
    "term": "VPC Endpoint",
    "english": "Virtual Private Cloud Endpoint",
    "chinese": "VPC 端点",
    "japanese": "VPC エンドポイント",
    "note": "私密访问支持的 AWS 服务或端点服务。",
    "frequency": 5
  },
  {
    "term": "VPC Flow Logs",
    "english": "Amazon Virtual Private Cloud Flow Logs",
    "chinese": "VPC 流日志",
    "japanese": "VPC フローログ",
    "note": "网络连接元数据，支持 VPC/Subnet/ENI 范围和 CloudWatch Logs/S3/Firehose 等投递；不含 Payload，ACCEPT 不等于业务成功。",
    "frequency": 5
  },
  {
    "term": "VPC Peering",
    "english": "Virtual Private Cloud Peering",
    "chinese": "VPC 对等连接",
    "japanese": "VPC ピアリング",
    "note": "两 VPC 私网直连：地址不能重叠、双方路由与安全规则必须完整；非传递，不能借对方 NAT/VPN/DX/Gateway Endpoint。",
    "frequency": 5
  },
  {
    "term": "VPN",
    "english": "Virtual Private Network",
    "chinese": "虚拟专用网络",
    "japanese": "仮想プライベートネットワーク",
    "note": "通过加密隧道保护网络通信。",
    "frequency": 4
  },
  {
    "term": "VPN CloudHub",
    "english": "AWS VPN CloudHub",
    "chinese": "VPN 云枢纽",
    "japanese": "AWS VPN CloudHub",
    "note": "多个站点 VPN 汇聚同一 VGW，按 BGP 路由交换实现分支互联；检查非重叠地址与设备/路由配置。",
    "frequency": 3
  },
  {
    "term": "Warm Standby",
    "english": "Warm Standby",
    "chinese": "温备用灾备策略",
    "japanese": "ウォームスタンバイ",
    "note": "缩小版但完整可服务的系统已运行；灾难时扩容、验证并切换流量。",
    "frequency": 5
  },
  {
    "term": "Web Application",
    "english": "Web Application",
    "chinese": "Web 应用程序",
    "japanese": "Web アプリケーション",
    "note": "通过浏览器访问的应用，常由 ALB、EC2/ECS、RDS 和 S3 构成。",
    "frequency": 2
  },
  {
    "term": "Web Server Environment",
    "english": "Elastic Beanstalk Web Server Environment",
    "chinese": "Web 服务器环境",
    "japanese": "Webサーバー環境",
    "note": "处理 Client HTTP/HTTPS 请求的 Beanstalk 环境，常包含 ELB、ASG 与 EC2。",
    "frequency": 3
  },
  {
    "term": "Weighted Routing",
    "english": "Weighted Routing Policy",
    "chinese": "加权路由",
    "japanese": "加重ルーティング",
    "note": "按相对权重选择 DNS Answer；适合 Canary / Blue-Green，但不保证精确请求比例。",
    "frequency": 5
  },
  {
    "term": "Worker Environment",
    "english": "Elastic Beanstalk Worker Environment",
    "chinese": "工作环境",
    "japanese": "ワーカー環境",
    "note": "从 SQS 拉取消息并执行异步后台任务，可按 Queue Backlog 扩缩。",
    "frequency": 4
  },
  {
    "term": "Workload",
    "english": "Workload",
    "chinese": "工作负载",
    "japanese": "ワークロード",
    "note": "共同交付业务价值的一组组件；先界定业务、负责人、环境和涉及运行位置。",
    "frequency": 3
  },
  {
    "term": "WORM",
    "english": "Write Once, Read Many",
    "chinese": "一次写入、多次读取",
    "japanese": "一度書き込み・複数回読み取り",
    "note": "描述不可变保留能力；具体谁能解除与何时不可修改，要按资源、模式、宽限期与保留条件判断。",
    "frequency": 4
  },
  {
    "term": "Write-Through",
    "english": "Write-Through",
    "chinese": "写穿缓存模式",
    "japanese": "ライトスルー",
    "note": "降低 Stale Risk，可与 Lazy Loading 和 TTL 组合，但会增加 Write Path 工作。",
    "frequency": 4
  },
  {
    "term": "Writer Endpoint",
    "english": "Writer Endpoint / Cluster Endpoint",
    "chinese": "写入端点",
    "japanese": "ライターエンドポイント",
    "note": "用于 Read/Write、DDL 与 Transaction，Failover 后指向新的 Writer。",
    "frequency": 5
  },
  {
    "term": "Zero Spend Budget",
    "english": "Zero Spend Budget",
    "chinese": "零支出预算",
    "japanese": "ゼロ支出予算（料金が発生し始めた時点で通知する AWS Budgets のテンプレート）",
    "note": "适合尽早发现 Free Tier 超额使用或意外产生的小额费用。",
    "frequency": 3
  },
  {
    "term": "Zonal Resource",
    "english": "AWS Zonal Resource",
    "chinese": "可用区级资源",
    "japanese": "AWS ゾーナルリソース（特定のアベイラビリティーゾーンに配置されるリソース）",
    "note": "资源实例位于特定 AZ；架构需要自行通过多 AZ 部署处理可用区故障。",
    "frequency": 5
  }
] as const;

export const awsGlossaryEntries: AwsGlossaryEntry[] = [...rows]
  .sort((a, b) => b.frequency - a.frequency || a.term.localeCompare(b.term, "en"))
  .map((row) => {
    const translation = awsGlossaryNoteTranslations[row.term];

    return {
      term: row.term,
      english: row.english,
      chinese: row.chinese,
      japanese: row.japanese,
      note: {
        zh: row.note,
        en: translation.en,
        ja: translation.ja,
      },
      frequency: row.frequency,
    };
  });

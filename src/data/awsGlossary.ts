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
    "japanese": "AWS アクセスキー（AWS API リクエストに署名するための Access Key ID と Secret Access Key から成る認証情報）",
    "note": "API 请求签名凭证；长期 Key 通常属于 IAM User，临时 Key 还包含 Session Token。优先临时凭证，不共享或硬编码 Secret。",
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
    "term": "AdministratorAccess",
    "english": "AWS Managed Policy AdministratorAccess",
    "chinese": "管理员访问策略",
    "japanese": "AdministratorAccess（すべての AWS アクションをすべてのリソースに対して許可する、非常に広範な管理権限の AWS 管理ポリシー）",
    "note": "AWS Managed Policy；核心为 Effect Allow、Action \"*\"、Resource \"*\"，可附加给 User、Group 或 Role。权限极广，不应作为普通用户默认策略。",
    "frequency": 5
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
    "note": "第 7 层 HTTP/HTTPS；支持路径、主机名路由和 WebSocket。",
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
    "term": "Amazon Detective",
    "english": "Amazon Detective",
    "chinese": "安全事件调查与根因分析",
    "japanese": "Amazon Detective（セキュリティ調査・根本原因分析サービス）",
    "note": "通过可视化关系和时间线调查安全事件。",
    "frequency": 3
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
    "term": "Amazon SES",
    "english": "Amazon Simple Email Service",
    "chinese": "应用程序邮件发送服务",
    "japanese": "Amazon Simple Email Service（アプリケーション向けメール送信サービス）",
    "note": "通过 API 或 SMTP 发送事务性、通知性和营销邮件。",
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
    "chinese": "机器镜像",
    "japanese": "Amazon マシンイメージ",
    "note": "用于启动 EC2 的模板，包含 OS、软件和配置；AMI 可包含一个或多个 EBS 快照。",
    "frequency": 4
  },
  {
    "term": "Anycast IP",
    "english": "Anycast Internet Protocol Address",
    "chinese": "任播 IP 地址",
    "japanese": "エニーキャスト IP",
    "note": "同一 IP 从多个网络位置发布，用户进入较近入口。",
    "frequency": 3
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
    "note": "托管 API 前门，不是 VPC 路由网关。",
    "frequency": 5
  },
  {
    "term": "ASG",
    "english": "Auto Scaling Group",
    "chinese": "自动伸缩组",
    "japanese": "Auto Scaling グループ（自動スケーリンググループ）",
    "note": "维护期望、最小和最大实例数；常与 ALB 和多 AZ 组合。",
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
    "note": "",
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
    "japanese": "Amazon Aurora（クラウドネイティブなリレーショナルデータベース）",
    "note": "兼容 MySQL/PostgreSQL，存储层跨多个 AZ 复制；属于 RDS 家族。",
    "frequency": 5
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
    "note": "面向前端团队的构建、托管和云后端连接平台。",
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
    "note": "收集服务器配置、性能、进程、连接和应用依赖。",
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
    "note": "集中管理多种 AWS 服务的备份与保留策略。",
    "frequency": 4
  },
  {
    "term": "AWS Batch",
    "english": "AWS Batch",
    "chinese": "批处理计算服务",
    "japanese": "AWS Batch（バッチコンピューティングサービス）",
    "note": "适合排队执行大量非实时计算任务；会自动调度和扩缩计算资源。",
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
    "japanese": "AWS Budgets（予算の設定・アラート）",
    "note": "按实际或预测成本、用量等阈值发出告警。",
    "frequency": 5
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
    "note": "无需本地安装 CLI；自动使用当前 Console 身份的临时、轮换凭证，权限不会超过当前身份。",
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
    "note": "",
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
    "note": "分析历史成本、趋势、分组与预测。",
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
    "note": "通过全量加载和持续复制进行低停机数据库迁移。",
    "frequency": 4
  },
  {
    "term": "AWS DRS",
    "english": "AWS Elastic Disaster Recovery",
    "chinese": "AWS 弹性灾难恢复",
    "japanese": "AWS Elastic Disaster Recovery（災害復旧サービス）",
    "note": "持续块级复制服务器并在灾难时快速启动恢复实例。",
    "frequency": 4
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
    "note": "课程中的统一迁移控制台；当前相关体验进一步整合进 AWS Transform。",
    "frequency": 3
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
    "note": "评估并转换异构数据库的 Schema 和代码对象。",
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
    "note": "课程中的经典离线迁移设备；当前不向新客户开放，且计划于 2026-12-31 停止商业区域设备支持。",
    "frequency": 3
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
    "note": "集中管理节点、补丁、命令和运维自动化。",
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
    "note": "2026 年 6 月由 AWS Application Migration Service 更名；持续块级复制并迁移服务器。",
    "frequency": 4
  },
  {
    "term": "AWS Trusted Advisor",
    "english": "AWS Trusted Advisor",
    "chinese": "AWS 最佳实践检查与优化建议",
    "japanese": "AWS Trusted Advisor（ベストプラクティスに基づく最適化推奨）",
    "note": "针对成本、性能、安全、容错和配额给出最佳实践建议。",
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
    "note": "用六大支柱持续评审和改进工作负载。",
    "frequency": 5
  },
  {
    "term": "AWS Well-Architected Six Pillars",
    "english": "AWS Well-Architected Framework Six Pillars",
    "chinese": "Well-Architected 六大支柱",
    "japanese": "AWS Well-Architected の 6 本の柱（運用上の優秀性・セキュリティ・信頼性・パフォーマンス効率・コスト最適化・持続可能性）",
    "note": "运、安、稳、快、省、绿。",
    "frequency": 5
  },
  {
    "term": "AWS Well-Architected Tool",
    "english": "AWS Well-Architected Tool",
    "chinese": "架构评审与风险改进工具",
    "japanese": "AWS Well-Architected Tool（Well-Architected レビュー支援サービス）",
    "note": "按六大支柱评审 Workload，记录 Risk、Improvement Plan 与 Milestone。",
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
    "term": "AZ",
    "english": "Availability Zone",
    "chinese": "可用区",
    "japanese": "AWS アベイラビリティーゾーン（リージョン内で障害分離されたインフラストラクチャ拠点）",
    "note": "Region 内一个或多个离散数据中心组成的故障隔离边界；高可用架构通常至少跨 2 个 AZ。",
    "frequency": 5
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
    "note": "持续复制发生变化的数据块以降低 RPO。",
    "frequency": 4
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
    "note": "对象容器及权限、Region、Versioning、Lifecycle 管理边界。",
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
    "term": "Cache Hit",
    "english": "Cache Hit",
    "chinese": "缓存命中",
    "japanese": "キャッシュヒット",
    "note": "请求的数据已在缓存中，可直接返回。",
    "frequency": 4
  },
  {
    "term": "Cache Miss",
    "english": "Cache Miss",
    "chinese": "缓存未命中",
    "japanese": "キャッシュミス",
    "note": "缓存没有目标数据，需要回源数据库或服务。",
    "frequency": 4
  },
  {
    "term": "Cache-Aside",
    "english": "Cache-Aside Pattern",
    "chinese": "旁路缓存模式",
    "japanese": "キャッシュアサイド",
    "note": "应用先查缓存，未命中时查数据库并回填。",
    "frequency": 4
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
    "note": "持续捕获源数据库变化并复制到目标。",
    "frequency": 4
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
    "note": "通过模板声明并重复创建 AWS 资源；适合标准化、版本控制和灾备重建。",
    "frequency": 5
  },
  {
    "term": "CloudFormation Template",
    "english": "AWS CloudFormation Template",
    "chinese": "CloudFormation 模板",
    "japanese": "CloudFormation テンプレート",
    "note": "使用 YAML 或 JSON 声明所需 AWS 资源。",
    "frequency": 5
  },
  {
    "term": "CloudFront",
    "english": "Amazon CloudFront",
    "chinese": "内容分发网络",
    "japanese": "コンテンツ配信ネットワーク",
    "note": "通过全球边缘站点缓存和分发内容，降低用户访问延迟。",
    "frequency": 5
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
    "term": "Compliance",
    "english": "Compliance",
    "chinese": "合规性",
    "japanese": "コンプライアンス（法令・規制・業界基準への適合）",
    "note": "选择 Region 时先检查数据驻留、监管、数据保护和行业合规要求。",
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
    "term": "CORS",
    "english": "Cross-Origin Resource Sharing",
    "chinese": "跨源资源共享",
    "japanese": "オリジン間リソース共有",
    "note": "浏览器跨源规则，不是身份授权机制。",
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
    "term": "Credential Provider Chain",
    "english": "AWS Credential Provider Chain",
    "chinese": "AWS 凭证提供程序链",
    "japanese": "認証情報プロバイダーチェーン（AWS SDK やツールがロール、IAM Identity Center、環境変数、設定ファイル、メタデータなどから認証情報を順番に探索する仕組み）",
    "note": "让 SDK / Tool 自动寻找并刷新适用凭证；避免在应用代码中直接写 Secret。",
    "frequency": 4
  },
  {
    "term": "CRR",
    "english": "Cross-Region Replication",
    "chinese": "跨区域复制",
    "japanese": "クロスリージョンレプリケーション",
    "note": "按规则把对象复制到另一个 Region。",
    "frequency": 5
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
    "japanese": "専有ホスト",
    "note": "用户获得整台物理服务器的可见性与控制，常用于许可证合规。",
    "frequency": 3
  },
  {
    "term": "Dedicated Instance",
    "english": "Dedicated Instance",
    "chinese": "专用实例",
    "japanese": "専有インスタンス",
    "note": "实例运行在单租户硬件上，但用户不控制具体物理主机。",
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
    "note": "Versioning 下普通删除产生的当前删除标记。",
    "frequency": 4
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
    "term": "Direct Connect",
    "english": "AWS Direct Connect",
    "chinese": "AWS 专线连接",
    "japanese": "AWS Direct Connect（AWS への専用ネットワーク接続）",
    "note": "专用连接提供稳定带宽；默认不加密。",
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
    "note": "保存多次处理失败的消息，方便隔离、排查和重新处理。",
    "frequency": 5
  },
  {
    "term": "DMS",
    "english": "AWS Database Migration Service",
    "chinese": "数据库迁移服务",
    "japanese": "データベース移行サービス",
    "note": "",
    "frequency": 4
  },
  {
    "term": "DNS",
    "english": "Domain Name System",
    "chinese": "域名系统",
    "japanese": "ドメインネームシステム",
    "note": "把域名解析为可访问的网络地址或服务入口。",
    "frequency": 4
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
    "term": "DoS",
    "english": "Denial of Service",
    "chinese": "拒绝服务攻击",
    "japanese": "サービス拒否攻撃",
    "note": "通常由单一来源耗尽目标服务资源。",
    "frequency": 3
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
    "note": "",
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
    "term": "EBS",
    "english": "Amazon Elastic Block Store",
    "chinese": "块存储",
    "japanese": "Amazon EBS（EC2 向けの永続ブロックストレージサービス）",
    "note": "EBS Volume 属于指定 Account、Region 和 AZ，不属于创建它的 IAM User 私人所有；可见性取决于 Account、Region 和 Policy。",
    "frequency": 5
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
    "term": "ECR",
    "english": "Amazon Elastic Container Registry",
    "chinese": "容器镜像仓库",
    "japanese": "Amazon ECR",
    "note": "ECR 只负责存镜像；ECS/EKS 负责运行和编排镜像。",
    "frequency": 4
  },
  {
    "term": "ECS",
    "english": "Amazon Elastic Container Service",
    "chinese": "AWS 容器编排服务",
    "japanese": "Amazon ECS",
    "note": "AWS 原生容器编排，学习和运维成本通常低于 EKS。",
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
    "chinese": "共享文件存储",
    "japanese": "Amazon EFS（ファイルストレージ）",
    "note": "Linux NFS 文件系统，可跨 AZ 被多个 EC2 同时挂载。",
    "frequency": 4
  },
  {
    "term": "EKS",
    "english": "Amazon Elastic Kubernetes Service",
    "chinese": "托管 Kubernetes 服务",
    "japanese": "Amazon EKS",
    "note": "考试出现 Kubernetes、跨云兼容或现有 K8s 工作负载时优先考虑 EKS。",
    "frequency": 4
  },
  {
    "term": "Elastic Beanstalk",
    "english": "AWS Elastic Beanstalk",
    "chinese": "应用部署与托管服务",
    "japanese": "AWS Elastic Beanstalk（ウェブアプリケーションのデプロイ・管理サービス）",
    "note": "PaaS 风格；上传代码后自动配置 EC2、ALB、Auto Scaling 等，底层资源仍可见和管理。",
    "frequency": 3
  },
  {
    "term": "Elastic IP",
    "english": "Elastic IP Address",
    "chinese": "弹性 IP 地址",
    "japanese": "Elastic IP アドレス",
    "note": "可由客户分配和重新关联的静态公有 IPv4。",
    "frequency": 4
  },
  {
    "term": "ElastiCache",
    "english": "Amazon ElastiCache",
    "chinese": "托管内存缓存",
    "japanese": "マネージドインメモリキャッシュ",
    "note": "通用后端缓存，减少重复数据库读取。",
    "frequency": 4
  },
  {
    "term": "Elasticity",
    "english": "Elasticity",
    "chinese": "弹性",
    "japanese": "エラスティシティ（需要変動に応じてリソースを動的に増減する性質）",
    "note": "容量随实际需求快速增加或减少，核心是供给与负载动态匹配。",
    "frequency": 5
  },
  {
    "term": "ELB",
    "english": "Elastic Load Balancing",
    "chinese": "弹性负载均衡",
    "japanese": "Elastic Load Balancing（マネージド負荷分散サービス）",
    "note": "将流量分配到多个目标并执行健康检查；ALB、NLB 都属于 ELB 产品族。",
    "frequency": 5
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
    "term": "Event Source Mapping",
    "english": "Event Source Mapping",
    "chinese": "事件源映射",
    "japanese": "イベントソースマッピング",
    "note": "Lambda 主动轮询 SQS、Kinesis、DynamoDB Streams 等事件源的配置。",
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
    "term": "FaaS",
    "english": "Function as a Service",
    "chinese": "函数即服务",
    "japanese": "FaaS（関数実行サービス）",
    "note": "以函数为部署和执行单位；Lambda 是 AWS 的典型 FaaS。",
    "frequency": 3
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
    "term": "Fargate",
    "english": "AWS Fargate",
    "chinese": "无服务器容器计算引擎",
    "japanese": "AWS Fargate（ファーゲート）",
    "note": "不是容器编排平台，而是 ECS/EKS 的 Serverless 计算选项；无需管理 EC2。",
    "frequency": 5
  },
  {
    "term": "Federation",
    "english": "Identity Federation",
    "chinese": "身份联合",
    "japanese": "フェデレーション（ID 連携）",
    "note": "使用外部身份登录 AWS，而不重复创建长期账号。",
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
    "term": "Foreign Key",
    "english": "Foreign Key",
    "chinese": "外键",
    "japanese": "外部キー",
    "note": "引用另一张表主键并建立关系。",
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
    "note": "",
    "frequency": 3
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
    "term": "GDPR",
    "english": "General Data Protection Regulation",
    "chinese": "欧盟《通用数据保护条例》",
    "japanese": "EU 一般データ保護規則",
    "note": "保护欧盟个人数据和隐私；实际要求需按业务和法律确认。",
    "frequency": 2
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
    "term": "Global Accelerator",
    "english": "AWS Global Accelerator",
    "chinese": "全球网络加速",
    "japanese": "AWS Global Accelerator（グローバルネットワーク高速化サービス）",
    "note": "加速全球 TCP/UDP 并按健康状态切换端点。",
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
    "note": "",
    "frequency": 3
  },
  {
    "term": "HA",
    "english": "High Availability",
    "chinese": "高可用性",
    "japanese": "高可用性（こうかようせい）",
    "note": "通过多 AZ、冗余和自动故障转移减少停机；不等于完全不中断。",
    "frequency": 5
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
    "term": "IAM Access Analyzer",
    "english": "AWS Identity and Access Management Access Analyzer",
    "chinese": "访问权限分析器",
    "japanese": "IAM Access Analyzer（外部アクセス・未使用アクセスの分析）",
    "note": "分析外部访问、策略和未使用访问，帮助实现最小权限。",
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
    "japanese": "IAM ロール",
    "note": "提供临时凭证；EC2、Lambda 和跨账户访问应优先使用 Role。",
    "frequency": 5
  },
  {
    "term": "IAM User",
    "english": "IAM User",
    "chinese": "IAM 用户",
    "japanese": "IAM ユーザー（AWS アカウント内で個人やアプリケーションを表す長期アイデンティティ）",
    "note": "可以拥有控制台密码或 Access Key，也可属于多个 Group；工作负载和多账户员工访问通常优先使用临时凭证。",
    "frequency": 4
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
    "term": "Implicit Deny",
    "english": "Implicit Deny",
    "chinese": "隐式拒绝",
    "japanese": "暗黙的な拒否（アクセスを許可する適用可能な Allow が存在しないため、既定で拒否される状態）",
    "note": "IAM 默认拒绝；没有适用 Allow 时请求保持 Implicit Deny。",
    "frequency": 5
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
    "term": "Instance Store",
    "english": "Amazon EC2 Instance Store",
    "chinese": "EC2 实例存储",
    "japanese": "インスタンスストア",
    "note": "宿主机本地临时块存储；Stop/Terminate 会丢失。",
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
    "term": "JOIN",
    "english": "SQL JOIN",
    "chinese": "多表连接",
    "japanese": "結合（JOIN）",
    "note": "根据关联键组合多张关系表的数据。",
    "frequency": 5
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
    "term": "Lambda",
    "english": "AWS Lambda",
    "chinese": "无服务器函数计算",
    "japanese": "AWS Lambda（ラムダ）",
    "note": "事件触发、自动扩缩容、按调用和执行时长计费；单次执行最长 15 分钟，不适合长期进程。",
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
    "term": "Lifecycle Policy",
    "english": "Amazon S3 Lifecycle Policy",
    "chinese": "S3 生命周期策略",
    "japanese": "S3 ライフサイクルポリシー",
    "note": "按规则转存储类别、过期对象和清理旧版本。",
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
    "term": "Managed Blockchain",
    "english": "Amazon Managed Blockchain",
    "chinese": "托管区块链",
    "japanese": "マネージドブロックチェーン",
    "note": "面向多组织共享、可验证且难以篡改账本的托管服务。",
    "frequency": 1
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
    "english": "Manual DB Snapshot",
    "chinese": "手动数据库快照",
    "japanese": "手動 DB スナップショット",
    "note": "用户手动创建的指定时刻数据库状态备份，保留至显式删除。",
    "frequency": 4
  },
  {
    "term": "Memcached",
    "english": "Memcached",
    "chinese": "分布式内存缓存引擎",
    "japanese": "Memcached（分散型インメモリキャッシュエンジン）",
    "note": "功能较轻的分布式内存缓存。",
    "frequency": 3
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
    "term": "Migration Evaluator",
    "english": "AWS Migration Evaluator",
    "chinese": "AWS 迁移评估与商业案例服务",
    "japanese": "Migration Evaluator（移行評価・ビジネスケース作成サービス）",
    "note": "根据现有环境、许可和目标方案建立数据驱动的迁移 Business Case。",
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
    "term": "Multi-AZ",
    "english": "Multi-AZ Deployment",
    "chinese": "多可用区部署",
    "japanese": "マルチ AZ 配置",
    "note": "主要目标是高可用和自动故障转移，不用于提升读取性能。",
    "frequency": 5
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
    "term": "Multi-Tenancy",
    "english": "Multi-Tenancy",
    "chinese": "多租户",
    "japanese": "マルチテナンシー",
    "note": "多个客户共享底层基础设施，但逻辑上隔离；云计算常见模式。",
    "frequency": 3
  },
  {
    "term": "Multipart Upload",
    "english": "Multipart Upload",
    "chinese": "分段上传",
    "japanese": "マルチパートアップロード",
    "note": "把大对象分段并行上传；超过 5 GB 必须使用。",
    "frequency": 4
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
    "note": "允许私有子网主动访问互联网，但不允许互联网主动连接私有实例；部署在公有子网。",
    "frequency": 5
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
    "note": "第 4 层 TCP/UDP/TLS；适合极高性能、超低延迟和固定 IP。",
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
    "note": "对象在 Bucket 中的唯一名称；斜线只是 Prefix 表现。",
    "frequency": 5
  },
  {
    "term": "Object Lock",
    "english": "Amazon S3 Object Lock",
    "chinese": "S3 对象锁",
    "japanese": "S3 オブジェクトロック",
    "note": "在保留期内防止对象被修改或删除。",
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
    "term": "Orchestration",
    "english": "Container Orchestration",
    "chinese": "容器编排",
    "japanese": "コンテナオーケストレーション",
    "note": "负责部署、扩缩、调度、网络和故障恢复；ECS、EKS 都属于编排服务。",
    "frequency": 4
  },
  {
    "term": "Outposts",
    "english": "AWS Outposts",
    "chinese": "AWS 本地部署服务",
    "japanese": "AWS Outposts（オンプレミス向け AWS インフラストラクチャ）",
    "note": "把 AWS 基础设施和服务部署到客户本地机房；用于低延迟、数据驻留和混合云。",
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
    "term": "Partition Key",
    "english": "Partition Key",
    "chinese": "分区键",
    "japanese": "パーティションキー",
    "note": "决定 DynamoDB Item 的分布，也是 Query 必须指定的键部分。",
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
    "term": "Permissions Policy",
    "english": "IAM Permissions Policy",
    "chinese": "IAM 权限策略",
    "japanese": "アクセス許可ポリシー",
    "note": "决定主体获得哪些 AWS 操作权限。",
    "frequency": 5
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
    "note": "把数据库恢复到保留窗口内的特定时间点。",
    "frequency": 5
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
    "term": "Presigned URL",
    "english": "Amazon S3 Presigned URL",
    "chinese": "预签名 URL",
    "japanese": "署名付き URL",
    "note": "在签名者权限范围内提供有过期时间的临时访问。",
    "frequency": 5
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
    "term": "RDS",
    "english": "Amazon Relational Database Service",
    "chinese": "托管关系型数据库",
    "japanese": "Amazon RDS",
    "note": "AWS 管理备份、补丁和基础设施；Multi-AZ 提高可用性，Read Replica 提高读取能力。",
    "frequency": 5
  },
  {
    "term": "Read Replica",
    "english": "Read Replica",
    "chinese": "只读副本",
    "japanese": "リードレプリカ",
    "note": "主要用于扩展读取和报表查询；通常为异步复制，可跨 Region。",
    "frequency": 5
  },
  {
    "term": "Redis OSS",
    "english": "Redis Open Source Software",
    "chinese": "Redis 开源引擎",
    "japanese": "Redis OSS（オープンソースのインメモリデータストア）",
    "note": "支持丰富数据结构、复制、排行榜和会话等场景。",
    "frequency": 3
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
    "term": "Replatform",
    "english": "Replatform (Lift, Tinker and Shift)",
    "chinese": "更换平台、小幅优化后迁移",
    "japanese": "再プラットフォーム化",
    "note": "不改变核心架构，进行有限云优化后迁移。",
    "frequency": 5
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
    "term": "Resource",
    "english": "Resource",
    "chinese": "资源",
    "japanese": "リソース（ポリシーステートメントの適用対象となる AWS リソースを ARN などで指定する要素）",
    "note": "指定规则作用的 AWS 资源；可以精确限定时避免使用 *。",
    "frequency": 5
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
    "chinese": "DNS 与域名服务",
    "japanese": "Amazon Route 53（DNS・ドメイン登録・トラフィックルーティングサービス）",
    "note": "负责 DNS 解析、域名注册、健康检查和流量路由。",
    "frequency": 5
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
    "term": "RPO",
    "english": "Recovery Point Objective",
    "chinese": "恢复点目标",
    "japanese": "目標復旧時点",
    "note": "业务最多允许丢失多长时间的数据。",
    "frequency": 5
  },
  {
    "term": "RTO",
    "english": "Recovery Time Objective",
    "chinese": "恢复时间目标",
    "japanese": "目標復旧時間",
    "note": "业务故障后允许的最大恢复时间。",
    "frequency": 5
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
    "note": "按对象和 Bucket 存储，极高耐久性；不作为传统块设备挂载给 EC2。",
    "frequency": 5
  },
  {
    "term": "S3 Access Point",
    "english": "Amazon S3 Access Point",
    "chinese": "S3 访问点",
    "japanese": "S3 アクセスポイント",
    "note": "为不同应用或团队提供独立入口和策略。",
    "frequency": 4
  },
  {
    "term": "S3 Express One Zone",
    "english": "Amazon S3 Express One Zone",
    "chinese": "S3 Express 单可用区",
    "japanese": "S3 Express One Zone（1 ゾーンの高性能ストレージクラス）",
    "note": "单 AZ 极高性能对象存储。",
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
    "note": "适合访问模式未知或变化的数据，自动调整访问层。",
    "frequency": 5
  },
  {
    "term": "S3 One Zone-IA",
    "english": "Amazon S3 One Zone-Infrequent Access",
    "chinese": "S3 单可用区-低频访问",
    "japanese": "S3 1 ゾーン-IA（1 ゾーン低頻度アクセス）",
    "note": "单 AZ、成本较低，适合可重建数据。",
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
    "term": "SageMaker",
    "english": "Amazon SageMaker",
    "chinese": "机器学习平台",
    "japanese": "機械学習プラットフォーム",
    "note": "",
    "frequency": 3
  },
  {
    "term": "Scalability",
    "english": "Scalability",
    "chinese": "可扩展性",
    "japanese": "スケーラビリティ（需要増加に合わせて処理能力を拡張できる性質）",
    "note": "系统能够通过纵向或横向扩展承载更大负载；不必然意味着会自动缩容。",
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
    "term": "Scan",
    "english": "Scan",
    "chinese": "全表 / 全索引扫描",
    "japanese": "スキャン",
    "note": "读取大量 Items 后过滤，通常消耗更多读取容量。",
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
    "japanese": "セキュリティグループ",
    "note": "实例级、有状态、只写允许规则；返回流量自动放行。",
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
    "term": "Session Manager",
    "english": "AWS Systems Manager Session Manager",
    "chinese": "安全会话管理",
    "japanese": "セッションマネージャー",
    "note": "无需开放 SSH/RDP 入站端口即可建立受控会话。",
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
    "term": "Sid",
    "english": "Statement ID",
    "chinese": "语句标识符",
    "japanese": "ステートメント ID（ポリシー内の各 Statement を識別しやすくする任意の識別子）",
    "note": "可选元素，用于标识 Statement，便于阅读和定位；本身不授予权限。",
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
    "english": "EBS Snapshot",
    "chinese": "EBS 快照",
    "japanese": "EBS スナップショット",
    "note": "增量备份，可跨 AZ 恢复卷，也可复制到其他 Region。",
    "frequency": 4
  },
  {
    "term": "SNS",
    "english": "Amazon Simple Notification Service",
    "chinese": "通知与发布订阅服务",
    "japanese": "Amazon SNS（通知サービス）",
    "note": "Push、Pub/Sub、广播；Fan-out 常见架构是 SNS 同时推送到多个 SQS。",
    "frequency": 5
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
    "term": "SPOF",
    "english": "Single Point of Failure",
    "chinese": "单点故障",
    "japanese": "単一障害点",
    "note": "一个组件故障会导致整个系统不可用。",
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
    "note": "Pull 模式、缓冲和解耦；Standard 至少一次投递，FIFO 保证顺序和去重。",
    "frequency": 5
  },
  {
    "term": "SRR",
    "english": "Same-Region Replication",
    "chinese": "同区域复制",
    "japanese": "同一リージョンレプリケーション",
    "note": "按规则在同一 Region 内复制 S3 对象。",
    "frequency": 3
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
    "term": "Storage Gateway",
    "english": "AWS Storage Gateway",
    "chinese": "混合云存储网关",
    "japanese": "AWS Storage Gateway（ハイブリッドクラウドストレージゲートウェイ）",
    "note": "本地应用以文件、卷或磁带接口接入 AWS 存储。",
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
    "japanese": "信頼ポリシー",
    "note": "决定谁可以代入 IAM Role。",
    "frequency": 5
  },
  {
    "term": "Valkey",
    "english": "Valkey",
    "chinese": "开源键值数据存储引擎",
    "japanese": "Valkey（オープンソースのキー・バリューデータストア）",
    "note": "ElastiCache 支持的内存数据存储引擎之一。",
    "frequency": 3
  },
  {
    "term": "Versioning",
    "english": "Amazon S3 Versioning",
    "chinese": "S3 版本控制",
    "japanese": "S3 バージョニング",
    "note": "保留对象历史版本，防误覆盖与误删。",
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
    "note": "SQS 消息被读取后暂时对其他消费者不可见；应大于实际处理时间。",
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
    "term": "VPN",
    "english": "Virtual Private Network",
    "chinese": "虚拟专用网络",
    "japanese": "仮想プライベートネットワーク",
    "note": "通过加密隧道保护网络通信。",
    "frequency": 4
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
    "term": "Write-Through",
    "english": "Write-Through Cache",
    "chinese": "写穿缓存模式",
    "japanese": "ライトスルー",
    "note": "写数据库时同步更新缓存，提高缓存新鲜度。",
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

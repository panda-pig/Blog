export type AwsGlossaryNoteTranslation = {
  en: string;
  ja: string;
};

export const awsGlossaryNoteTranslations: Record<string, AwsGlossaryNoteTranslation> = {
  "Access Denied": {
    "en": "Start with the denied Action, then check the current principal, direct and inherited policies, explicit denies, resources, and conditions.",
    "ja": "アクセス拒否（必要な Allow がない、または明示的な Deny や権限境界などによって AWS API リクエストが拒否された状態）"
  },
  "Access Key": {
    "en": "API signing credentials. Long-term keys usually belong to IAM users; temporary keys also include a session token. When long-term keys are unavoidable, create a new key, update and verify consumers, then deactivate and delete the old key.",
    "ja": "AWS API リクエスト署名用の認証情報。長期キーは通常 IAM User に属し、一時認証情報には Session Token も含まれる。長期キーが必要な場合は、新規作成、利用先の更新・検証、旧キーの無効化、削除の順でローテーションする。"
  },
  "Access Key ID": {
    "en": "Identifies a set of API credentials; it is like a username, not a password. A secret is still required, plus a session token for temporary credentials.",
    "ja": "アクセスキー ID（AWS API の認証情報一式を識別するための公開側の識別子）"
  },
  "Account Alias": {
    "en": "Simplifies the IAM user sign-in URL. It must be unique, but it neither creates a new account nor changes permissions.",
    "ja": "AWS アカウントエイリアス（IAM ユーザーのサインイン時にアカウント ID の代わりに使える一意の別名）"
  },
  "ACM": {
    "en": "Centrally provisions, deploys, and renews SSL/TLS certificates.",
    "ja": "SSL/TLS 証明書の発行、デプロイ、更新を一元管理する。"
  },
  "Action": {
    "en": "Specifies an AWS API operation such as s3:GetObject; least privilege avoids unnecessary service:* grants.",
    "ja": "アクション（ポリシーで許可または拒否する AWS API 操作を指定する要素）"
  },
  "AdministratorAccess": {
    "en": "An AWS managed policy with extremely broad permissions; it should not be the default policy for ordinary users.",
    "ja": "AdministratorAccess（すべての AWS アクションをすべてのリソースに対して許可する、非常に広範な管理権限の AWS 管理ポリシー）"
  },
  "Agility": {
    "en": "Focuses on faster experimentation, creation, change, and deployment; it is not automatic capacity scaling with load.",
    "ja": "迅速な試作・作成・変更・Deployment を指す。負荷に応じた自動的な容量増減とは異なる。"
  },
  "ALB": {
    "en": "Layer 7 HTTP/HTTPS; supports path-based and host-based routing, plus WebSocket.",
    "ja": "レイヤー 7 の HTTP/HTTPS。パスベース、ホストベースのルーティングと WebSocket に対応。"
  },
  "Amazon Connect": {
    "en": "Provides IVR, queues, agents, chat, and callback capabilities for a cloud contact center.",
    "ja": "Cloud Contact Center 向けに IVR、Queue、Agent、Chat、Callback を提供する。"
  },
  "Amazon Detective": {
    "en": "Investigates security incidents through visual relationships and timelines.",
    "ja": "関係性の可視化とタイムラインを使って、セキュリティインシデントを調査する。"
  },
  "Amazon GuardDuty": {
    "en": "Continuously analyzes activity and threat intelligence to identify suspicious behavior.",
    "ja": "アクティビティと脅威インテリジェンスを継続的に分析し、不審な動作を検出する。"
  },
  "Amazon Inspector": {
    "en": "Continuously scans workloads for software vulnerabilities and CVEs.",
    "ja": "ワークロードを継続的にスキャンし、ソフトウェアの脆弱性や CVE を検出する。"
  },
  "Amazon Macie": {
    "en": "Uses machine learning to discover sensitive data such as PII in S3.",
    "ja": "機械学習を使って、S3 内の PII などの機密データを検出する。"
  },
  "Amazon SES": {
    "en": "Sends transactional, notification, and marketing email through an API or SMTP.",
    "ja": "API または SMTP で Transactional、Notification、Marketing Email を送信する。"
  },
  "Amazon WorkSpaces": {
    "en": "Provides users with complete managed Windows or Linux cloud desktops.",
    "ja": "User に完全な Managed Windows または Linux Cloud Desktop を提供する。"
  },
  "Amazon WorkSpaces Applications": {
    "en": "Streams managed desktop applications; older exam questions and courses use the name Amazon AppStream 2.0.",
    "ja": "Managed Desktop Application を Streaming 配信する。旧問題や Course では Amazon AppStream 2.0 の名称が使われる。"
  },
  "Amazon WorkSpaces Secure Browser": {
    "en": "Opens an isolated cloud browser session from the user's existing browser.",
    "ja": "User の既存 Browser から Cloud 上の分離された Browser Session を開始する。"
  },
  "AMI": {
    "en": "A template for launching EC2 that contains an OS, software, and configuration; it can include one or more EBS snapshots.",
    "ja": "OS、Software、設定を含む EC2 起動用テンプレート。1 つ以上の EBS Snapshot を含められる。"
  },
  "Anycast IP": {
    "en": "The same IP is advertised from multiple network locations so users enter through a nearby point.",
    "ja": "同じ IP を複数の Network Location から広告し、User を近い入口へ導く。"
  },
  "API": {
    "en": "An interface through which software systems call each other and exchange data.",
    "ja": "Software System 間で呼び出しや Data Exchange を行うための Interface。"
  },
  "API Call": {
    "en": "Console actions also trigger one or more API calls, and IAM policy Actions determine whether those calls are authorized.",
    "ja": "API 呼び出し（プログラムや AWS マネジメントコンソールが AWS サービスの操作を実行するために送信するリクエスト）"
  },
  "API Gateway": {
    "en": "A managed front door for APIs, not a VPC routing gateway.",
    "ja": "API のマネージドなフロントドア。VPC のルーティングゲートウェイではない。"
  },
  "ASG": {
    "en": "Maintains desired, minimum, and maximum instance counts; commonly paired with an ALB across multiple AZs.",
    "ja": "希望・最小・最大のインスタンス数を維持し、通常は ALB と複数 AZ を組み合わせる。"
  },
  "AssumeRole": {
    "en": "A successful call returns expiring access key ID, secret access key, and session token credentials.",
    "ja": "成功すると、有効期限付き Access Key ID、Secret Access Key、Session Token を取得する。"
  },
  "At-Least-Once Delivery": {
    "en": "Messages can be delivered more than once, so consumers must be designed to be idempotent.",
    "ja": "Message が重複配信される可能性があるため、Consumer は Idempotent に設計する必要がある。"
  },
  "Athena": {
    "en": "Runs serverless SQL queries directly against data stored in S3.",
    "ja": "S3 に保存された Data を Serverless SQL で直接 Query する。"
  },
  "Attribute": {
    "en": "A field and its value within a DynamoDB item.",
    "ja": "DynamoDB Item 内のフィールドと値。"
  },
  "Aurora": {
    "en": "MySQL- and PostgreSQL-compatible, with storage replicated across multiple AZs; part of the RDS family.",
    "ja": "MySQL/PostgreSQL 互換で、ストレージを複数 AZ に複製する RDS ファミリーのサービス。"
  },
  "Authentication": {
    "en": "Verifies who a user or entity is.",
    "ja": "ユーザーやエンティティが誰であるかを確認する。"
  },
  "Authenticator App": {
    "en": "Initially linked with a QR code or secret key; later sign-ins use the current TOTP code.",
    "ja": "認証アプリ（仮想 MFA デバイスとして TOTP コードを生成し、ログイン時の追加認証に使用するアプリケーション）"
  },
  "Authorization": {
    "en": "Determines which actions a principal is allowed to perform.",
    "ja": "プリンシパルが実行できる操作を決定する。"
  },
  "Auto Scaling": {
    "en": "Adds or removes instances based on metrics; Auto Scaling manages capacity while ELB distributes traffic.",
    "ja": "メトリクスに基づいてインスタンスを増減する。容量は Auto Scaling、トラフィック分散は ELB が担当。"
  },
  "Auto-assign public IPv4": {
    "en": "Controls only whether an instance automatically receives a public IPv4 address; it does not by itself make a subnet public.",
    "ja": "Instance が Public IPv4 を自動取得するかだけを制御し、それ単独では Subnet の Public/Private を決めない。"
  },
  "Automated Backup": {
    "en": "RDS automated backups combine snapshots and logs to support point-in-time recovery within the retention period.",
    "ja": "RDS の自動バックアップは Snapshot と Log を組み合わせ、保持期間内の Point-in-Time Recovery を可能にする。"
  },
  "Availability": {
    "en": "Whether a service can be accessed successfully when it is needed.",
    "ja": "必要なときにサービスへ正常にアクセスできるかを示す。"
  },
  "AWS": {
    "en": "A global cloud platform; exams emphasize security, reliability, elasticity, pay-as-you-go pricing, and the shared responsibility model.",
    "ja": "グローバルなクラウドプラットフォーム。試験ではセキュリティ、信頼性、弾力性、従量課金、責任共有モデルが中心。"
  },
  "AWS Account": {
    "en": "The management boundary for AWS resources, identities, and billing; multiple IAM identities in one account are not separate accounts.",
    "ja": "AWS アカウント（AWS リソース、認証、請求を管理する単位）"
  },
  "AWS Amplify": {
    "en": "A platform for frontend teams to build, host, and connect web and mobile applications to cloud backends.",
    "ja": "Frontend Team が Web・Mobile Application を構築、Hosting し、Cloud Backend へ接続する Platform。"
  },
  "AWS API": {
    "en": "Every method of managing AWS resources ultimately interacts with AWS APIs.",
    "ja": "AWS Resource を管理するどの手段も、最終的には AWS API とやり取りする。"
  },
  "AWS Application Discovery Service": {
    "en": "Collects server configuration, performance, process, connection, and application-dependency data.",
    "ja": "Server の構成、Performance、Process、Connection、Application の依存関係を収集する。"
  },
  "AWS AppSync": {
    "en": "Its core components include GraphQL schemas, resolvers, data sources, and subscriptions.",
    "ja": "主要 Component は GraphQL Schema、Resolver、Data Source、Subscription。"
  },
  "AWS Artifact": {
    "en": "Provides AWS compliance reports and manages applicable agreements; it does not scan customer resources.",
    "ja": "AWS のコンプライアンスレポートを取得し、対象の契約を管理する。顧客リソースのスキャンは行わない。"
  },
  "AWS Audit Manager": {
    "en": "Organizes controls by audit framework and continuously collects evidence from the customer environment.",
    "ja": "監査フレームワークに沿ってコントロールを整理し、顧客環境から証拠を継続的に収集する。"
  },
  "AWS Backup": {
    "en": "Centrally manages backup and retention policies across multiple AWS services.",
    "ja": "複数の AWS Service のバックアップと保持ポリシーを一元管理する。"
  },
  "AWS Batch": {
    "en": "Runs large numbers of queued, non-real-time compute jobs and automatically schedules and scales compute resources.",
    "ja": "大量の非リアルタイム Compute Job を Queue 実行し、Compute Resource の Scheduling と Scaling を自動化する。"
  },
  "AWS Billing and Cost Management": {
    "en": "The central entry point for bills, payments, cost analysis, and financial governance.",
    "ja": "請求、支払い、コスト分析、財務ガバナンスの一元的な入口。"
  },
  "AWS Budgets": {
    "en": "Alerts when actual or forecast cost, usage, or commitment metrics cross configured thresholds.",
    "ja": "実績または予測のコスト、使用量、割引契約指標が設定しきい値を超えると通知する。"
  },
  "AWS CLI": {
    "en": "Calls AWS APIs from terminal commands and shell scripts. aws configure stores profile credentials, default Region, and output format but grants no IAM permissions; people should prefer Identity Center and temporary credentials.",
    "ja": "Terminal の Command や Shell Script から AWS API を呼ぶ。aws configure は Profile の認証情報、Default Region、Output Format を保存するだけで IAM 権限は付与しない。"
  },
  "AWS CLI Profile": {
    "en": "Select it explicitly with --profile. A profile is local configuration, not an IAM identity or permission policy.",
    "ja": "AWS CLI プロファイル（認証情報、リージョン、出力形式などの設定を名前付きで分離し、切り替えて使用する設定単位）"
  },
  "AWS Cloud Adoption Framework": {
    "en": "Improves cloud readiness through six perspectives: Business, People, Governance, Platform, Security, and Operations.",
    "ja": "Business、People、Governance、Platform、Security、Operations の 6 つの Perspective で Cloud Readiness を高める。"
  },
  "AWS CloudShell": {
    "en": "Requires no local CLI installation and uses rotating temporary credentials for the current console identity. Persistent HOME storage is separated by Region, and --region can override the default Region for one command.",
    "ja": "Local CLI の Install は不要で、現在の Console Identity のローテーションされる Temporary Credentials を使用する。永続 HOME Storage は Region ごとに分かれ、各 Command は --region で Default Region を上書きできる。"
  },
  "AWS CodeBuild": {
    "en": "Reads a buildspec to compile, test, package, and output build artifacts.",
    "ja": "buildspec を読み込み、Compile、Test、Package を実行して Build Artifact を出力する。"
  },
  "AWS CodePipeline": {
    "en": "Orchestrates stages such as Source, Build, Test, Approval, and Deploy.",
    "ja": "Source、Build、Test、Approval、Deploy などの Stage を Orchestration する。"
  },
  "AWS Compute Optimizer": {
    "en": "Uses utilization data to recommend right-sized resource configurations.",
    "ja": "利用率 Data に基づいて Resource の適正な Spec と構成を推奨する。"
  },
  "AWS Config": {
    "en": "Records resource configuration history and evaluates resources against compliance rules.",
    "ja": "Resource の構成履歴を記録し、Config Rule に基づいて Compliance を評価する。"
  },
  "aws configure": {
    "en": "Stores client configuration; it does not create an IAM user, attach a policy, or guarantee permission for later API calls.",
    "ja": "aws configure（AWS CLI のプロファイルに認証情報、既定リージョン、既定の出力形式などを保存する設定コマンド）"
  },
  "AWS Control Tower": {
    "en": "Provides a landing zone, Account Factory, controls, and a governance dashboard.",
    "ja": "Landing Zone、Account Factory、Controls、ガバナンス Dashboard を提供する。"
  },
  "AWS Cost Explorer": {
    "en": "Analyzes historical cost and usage with filters, grouping, trends, and forecasts.",
    "ja": "過去のコストと使用量を Filter、Group、傾向、Forecast で分析する。"
  },
  "AWS Credits": {
    "en": "Offsets eligible AWS usage charges; expiration, eligible services, and award rules depend on the account terms.",
    "ja": "AWS クレジット（対象となる AWS 利用料金に充当できる販促残高）"
  },
  "AWS DMS": {
    "en": "Migrates databases with minimal downtime through full load and ongoing replication.",
    "ja": "Full Load と継続的な Replication により、ダウンタイムを抑えてデータベースを移行する。"
  },
  "AWS DRS": {
    "en": "Continuously replicates servers at the block level and quickly launches recovery instances during a disaster.",
    "ja": "Server を Block Level で継続複製し、災害時に復旧 Instance を迅速に起動する。"
  },
  "AWS Health Dashboard": {
    "en": "Shows whether AWS service events, planned changes, and account notifications affect your resources.",
    "ja": "AWS サービスイベント、計画変更、アカウント通知が自分のリソースへ影響するかを確認できる。"
  },
  "AWS IoT Core": {
    "en": "Core capabilities include device certificates, MQTT topics, the Rules Engine, and Device Shadow.",
    "ja": "主要機能は Device Certificate、MQTT Topic、Rules Engine、Device Shadow。"
  },
  "AWS KMS": {
    "en": "Creates, controls, and audits keys used to encrypt data.",
    "ja": "データ暗号化に使用するキーを作成、制御、監査する。"
  },
  "AWS License Manager": {
    "en": "Tracks BYOL and hybrid-environment license usage and helps prevent overuse.",
    "ja": "BYOL とハイブリッド環境のライセンス使用状況を追跡し、超過利用を防ぐ。"
  },
  "AWS Managed Policy": {
    "en": "Created and maintained by AWS and attachable to multiple identities; AWS may update its permissions.",
    "ja": "AWS 管理ポリシー（AWS が作成・管理し、複数の IAM アイデンティティにアタッチできるポリシー）"
  },
  "AWS Management Console": {
    "en": "A web GUI. Multi-session keeps several login contexts in parallel, but a session is not a new account; regional resources also depend on the selected Region.",
    "ja": "Web GUI。Multi-session は複数のログイン状態を並行保持するが、新しい Account ではない。Regional Resource の表示は選択中の Region にも依存する。"
  },
  "AWS Marketplace": {
    "en": "A digital catalog for discovering, purchasing, and deploying third-party software, data, and professional services.",
    "ja": "第三者の Software、Data、Professional Service を検索、購入、導入する Digital Catalog。"
  },
  "AWS Migration Hub": {
    "en": "Provides a unified view of migration projects and progress; related migration experiences are increasingly integrated into AWS Transform.",
    "ja": "Migration Project と進捗を一元表示する。関連する移行体験は AWS Transform へ段階的に統合されている。"
  },
  "AWS Organizations": {
    "en": "Manages accounts, OUs, SCPs, and consolidated billing; SCPs restrict permissions but do not grant them.",
    "ja": "アカウント、OU、SCP、一括請求を管理する。SCP は権限を制限するだけで、付与はしない。"
  },
  "AWS Partner Network": {
    "en": "An ecosystem for finding consulting, implementation, migration, managed-service, and technology partners.",
    "ja": "Consulting、導入、Migration、Managed Service、Technology Partner を探すための Ecosystem。"
  },
  "AWS Pricing Calculator": {
    "en": "Estimates AWS costs from architecture and usage assumptions before deployment.",
    "ja": "導入前に Architecture と使用量の想定から AWS 料金を見積もる。"
  },
  "AWS SCT": {
    "en": "Assesses and converts schemas and code objects for heterogeneous database migrations.",
    "ja": "異種データベース移行のために Schema と Code Object を評価・変換する。"
  },
  "AWS SDK": {
    "en": "Language-specific libraries for calling AWS APIs from application code; the credential provider chain can obtain role, Identity Center, and other temporary or long-term credentials.",
    "ja": "Application Code から AWS API を呼ぶ言語別 Library。Credential Provider Chain が Role、Identity Center などの認証情報を取得する。"
  },
  "AWS Secrets Manager": {
    "en": "Securely stores passwords, tokens, and API keys and can rotate them automatically.",
    "ja": "パスワード、トークン、API キーを安全に保存し、自動ローテーションにも対応する。"
  },
  "AWS Security Hub": {
    "en": "Aggregates and standardizes findings from multiple security services.",
    "ja": "複数のセキュリティサービスからの検出結果を集約し、標準化する。"
  },
  "AWS Service Catalog": {
    "en": "Lets users deploy approved products through controlled self-service.",
    "ja": "企業が承認した製品カタログから、ユーザーが統制されたセルフサービスでデプロイできる。"
  },
  "AWS Shield": {
    "en": "Protects AWS applications against DoS and DDoS attacks.",
    "ja": "AWS 上のアプリケーションを DoS および DDoS 攻撃から保護する。"
  },
  "AWS Snowball Edge": {
    "en": "A classic offline migration appliance; it is no longer available to new customers, so alternatives such as DataSync should also be understood.",
    "ja": "代表的な Offline Migration Appliance。現在は新規 Customer 向けに提供されていないため、DataSync などの代替手段も押さえる。"
  },
  "AWS Support Plans": {
    "en": "Provides different technical-support response targets and proactive guidance based on workload criticality.",
    "ja": "Workload の重要度に応じて異なる技術支援の応答目標と Proactive Guidance を提供する。"
  },
  "AWS Systems Manager": {
    "en": "Centrally manages nodes, patches, commands, and operations automation.",
    "ja": "ノード、パッチ、コマンド、運用自動化を一元管理する。"
  },
  "AWS Tags": {
    "en": "Key-value metadata for classification, cost, automation, and governance; tags do not grant access by themselves.",
    "ja": "AWS リソースタグ（リソースへ付与するキーと値の任意メタデータ）"
  },
  "AWS Three-Phase Migration Process": {
    "en": "Describes the migration sequence: Assess, Mobilize, then Migrate and Modernize.",
    "ja": "Migration Project の順序を Assess、Mobilize、Migrate and Modernize の 3 段階で表す。"
  },
  "AWS Transfer Family": {
    "en": "Provides managed endpoints for business file exchange over SFTP, FTPS, FTP, and AS2.",
    "ja": "SFTP、FTPS、FTP、AS2 による Business File Exchange の Managed Endpoint を提供する。"
  },
  "AWS Transform MGN": {
    "en": "AWS Application Migration Service was renamed in June 2026; it migrates servers through continuous block-level replication.",
    "ja": "2026 年 6 月に AWS Application Migration Service から改称。継続的な Block-level Replication で Server を移行する。"
  },
  "AWS Trusted Advisor": {
    "en": "Provides best-practice recommendations for cost, performance, security, fault tolerance, and service quotas.",
    "ja": "コスト、パフォーマンス、セキュリティ、耐障害性、サービスクォータについてベストプラクティスの推奨を提示する。"
  },
  "AWS WAF": {
    "en": "Filters HTTP(S) requests with rules to defend against attacks such as SQL injection and XSS.",
    "ja": "ルールで HTTP(S) リクエストを検査し、SQL インジェクションや XSS などを防御する。"
  },
  "AWS Well-Architected Framework": {
    "en": "Continuously reviews and improves workloads through six architectural pillars.",
    "ja": "6 本の Architecture Pillar に基づいて Workload を継続的に Review・改善する。"
  },
  "AWS Well-Architected Six Pillars": {
    "en": "The six pillars are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.",
    "ja": "6 本の柱は Operational Excellence、Security、Reliability、Performance Efficiency、Cost Optimization、Sustainability。"
  },
  "AWS Well-Architected Tool": {
    "en": "Reviews workloads against the six pillars and records risks, improvement plans, and milestones.",
    "ja": "6 本の柱に基づいて Workload を Review し、Risk、Improvement Plan、Milestone を記録する。"
  },
  "AWS X-Ray": {
    "en": "Uses traces and a service map to locate latency and errors across a distributed call path.",
    "ja": "Trace と Service Map を使い、分散 Call Path の Latency と Error を特定する。"
  },
  "AZ": {
    "en": "A failure-isolation boundary made of one or more discrete data centers within a Region; highly available designs usually span at least two AZs.",
    "ja": "Region 内の 1 つ以上の分離された Data Center で構成される障害分離境界。高可用性設計は通常 2 AZ 以上にまたがる。"
  },
  "Batch Processing": {
    "en": "Processes groups of jobs without requiring immediate responses; common for reporting, simulations, and ETL.",
    "ja": "即時応答を必要とせず、Job をまとめて処理する。Report、Simulation、ETL でよく使う。"
  },
  "BGP": {
    "en": "A protocol for dynamically exchanging routes between networks.",
    "ja": "ネットワーク間で Route を動的に交換するためのプロトコル。"
  },
  "Block Storage": {
    "en": "Provides low-latency random reads and writes in blocks, similar to a disk.",
    "ja": "ディスクのように、ブロック単位で低レイテンシのランダム読み書きを提供する。"
  },
  "Block-level Replication": {
    "en": "Continuously copies changed data blocks to reduce RPO.",
    "ja": "変更されたデータ Block を継続的に複製して RPO を短縮する。"
  },
  "Boto3": {
    "en": "The modern AWS SDK for Python, used by Python application code to call AWS services.",
    "ja": "Boto3（Python アプリケーションから AWS サービスの API を呼び出すための AWS SDK for Python）"
  },
  "Bucket": {
    "en": "The object container and management boundary for permissions, Region, Versioning, and Lifecycle.",
    "ja": "オブジェクトのコンテナであり、権限、Region、Versioning、Lifecycle の管理境界。"
  },
  "Business Continuity": {
    "en": "Ensures critical business operations can continue during failures or disasters.",
    "ja": "障害や災害の発生時も重要な Business Operation を継続できるようにする。"
  },
  "Cache Hit": {
    "en": "The requested data is already in the cache and can be returned directly.",
    "ja": "要求されたデータが Cache にあり、直接返せる状態。"
  },
  "Cache Miss": {
    "en": "The requested data is not in the cache, so it must be fetched from the source database or service.",
    "ja": "対象データが Cache にないため、元の Database または Service から取得する必要がある。"
  },
  "Cache-Aside": {
    "en": "The application checks the cache first, then reads from the database and fills the cache on a miss.",
    "ja": "Application が先に Cache を確認し、Miss 時に Database から読み取って Cache へ書き戻す。"
  },
  "Cascade Failure": {
    "en": "A failure that propagates downstream; queues, retries, rate limits, and circuit breakers reduce the risk.",
    "ja": "1 つの Component の障害が下流へ連鎖する現象。Queue、Retry、Rate Limit、Circuit Breaker でリスクを下げる。"
  },
  "CDN": {
    "en": "Caches or distributes content from locations close to users.",
    "ja": "ユーザーに近い拠点からコンテンツを Cache または配信する。"
  },
  "CGW": {
    "en": "Represents the customer-side router, firewall, or VPN device.",
    "ja": "顧客側の Router、Firewall、または VPN Device を表す。"
  },
  "Change Data Capture (CDC)": {
    "en": "Continuously captures changes in the source database and replicates them to the target.",
    "ja": "Source Database の変更を継続的に取得し、Target へ複製する。"
  },
  "CIDR": {
    "en": "Represents an IP address range using a prefix length.",
    "ja": "プレフィックス長を使って IP アドレス範囲を表す。"
  },
  "Client VPN": {
    "en": "Provides secure VPC access for individual remote users.",
    "ja": "個人の Remote User に VPC への安全なアクセスを提供する。"
  },
  "Cloud Computing": {
    "en": "Provides compute, storage, databases, and other IT resources on demand over the internet with usage-based pricing and rapid scaling.",
    "ja": "クラウドコンピューティング（必要な IT リソースをインターネット経由でオンデマンド利用する形態）"
  },
  "CloudFormation": {
    "en": "Declares and repeatedly creates AWS resources from templates; useful for standardization, version control, and disaster recovery rebuilds.",
    "ja": "テンプレートで AWS リソースを宣言し、繰り返し作成する。標準化、バージョン管理、災害復旧時の再構築に適する。"
  },
  "CloudFormation Template": {
    "en": "Declares the required AWS resources in YAML or JSON.",
    "ja": "必要な AWS リソースを YAML または JSON で宣言する。"
  },
  "CloudFront": {
    "en": "Caches and distributes content through global edge locations to reduce user latency.",
    "ja": "世界中のエッジロケーションでコンテンツをキャッシュ・配信し、ユーザーのレイテンシを下げる。"
  },
  "CloudTrail": {
    "en": "Records who performed which API action on what resource and when; answers who did what.",
    "ja": "誰が、いつ、どのリソースに、どの API 操作を行ったかを記録し、「誰が何をしたか」に答える。"
  },
  "CloudWatch": {
    "en": "Monitors metrics, logs, alarms, and dashboards; answers how the system is performing now.",
    "ja": "Metrics、Logs、Alarm、Dashboard を監視し、「システムが現在どう動いているか」に答える。"
  },
  "CloudWatch Logs": {
    "en": "Centrally collects and queries application, system, and Lambda logs.",
    "ja": "Application、System、Lambda の Log を一元的に収集・検索する。"
  },
  "Cluster": {
    "en": "A group of resources that jointly provide compute or orchestration capacity; both ECS and EKS use the cluster concept.",
    "ja": "Compute または Orchestration 能力を共同で提供する Resource 群。ECS と EKS の両方で Cluster を使う。"
  },
  "Compliance": {
    "en": "When choosing a Region, first check data residency, regulatory, data-protection, and industry compliance requirements.",
    "ja": "Region 選択では、Data Residency、規制、Data Protection、業界 Compliance 要件を最初に確認する。"
  },
  "Compute Resource": {
    "en": "CPU, memory, GPU, running instances, and other resources required to perform computation.",
    "ja": "CPU、Memory、GPU、実行 Instance など、計算処理に必要な Resource。"
  },
  "Condition": {
    "en": "An optional policy element that limits when a statement applies based on request context.",
    "ja": "条件（MFA、送信元 IP、タグ、組織などのリクエストコンテキストに基づいて規則の適用条件を指定する任意要素）"
  },
  "Console Multi-session Support": {
    "en": "Add Session can keep identities from the same or different accounts open in parallel; a session is not a new account and does not change ownership or permissions.",
    "ja": "AWS マネジメントコンソールのマルチセッション機能（同じブラウザーで複数のログイン状態を並行利用する機能）"
  },
  "Consumer": {
    "en": "The party that reads and processes messages; retries and idempotency must be considered when processing fails.",
    "ja": "Message を読み取って処理する側。処理失敗時は Retry と Idempotency を考慮する。"
  },
  "Container": {
    "en": "Shares the host kernel, starts quickly, and is portable; lighter than a virtual machine.",
    "ja": "Host Kernel を共有し、起動が速く可搬性が高い。VM より軽量。"
  },
  "Container Image": {
    "en": "A read-only template; a container is a running instance of an image.",
    "ja": "読み取り専用のテンプレート。Container は Image を実行した Instance。"
  },
  "CORS": {
    "en": "A browser cross-origin rule, not an identity authorization mechanism.",
    "ja": "Browser の Cross-Origin ルールであり、Identity の認可メカニズムではない。"
  },
  "Cost Allocation Tag": {
    "en": "Attributes and analyzes cost by project, department, environment, or another business dimension.",
    "ja": "Project、部門、Environment などの Business 軸で Cost を帰属・分析する。"
  },
  "Credential Provider Chain": {
    "en": "Lets SDKs and tools discover and refresh suitable credentials without hard-coding secrets in application code.",
    "ja": "認証情報プロバイダーチェーン（AWS SDK やツールがロール、IAM Identity Center、環境変数、設定ファイル、メタデータなどから認証情報を順番に探索する仕組み）"
  },
  "Credential Rotation": {
    "en": "Safely replace an old credential: create a new key, update every consumer, verify it, deactivate the old key, and delete it after confirming no failures.",
    "ja": "古い認証情報を安全に置き換える運用。新しい Key を作成し、全利用先を更新・検証してから旧 Key を無効化し、異常がないことを確認して削除する。"
  },
  "CRR": {
    "en": "Replicates objects to another Region according to configured rules.",
    "ja": "設定したルールに従ってオブジェクトを別の Region へ複製する。"
  },
  "Customer Managed Policy": {
    "en": "A reusable standalone policy created by the customer, centrally maintained and versioned.",
    "ja": "カスタマー管理ポリシー（利用者が作成・管理し、複数の IAM アイデンティティで再利用できるポリシー）"
  },
  "Data Center": {
    "en": "A physical facility containing servers, storage, and networking; one AZ may consist of one or more discrete data centers.",
    "ja": "AWS データセンター（コンピューティング設備を収容する物理施設）"
  },
  "Data Residency": {
    "en": "Requires data to be stored in a specified country, Region, or location; often affects Region and Outposts selection.",
    "ja": "Data を指定された国、地域、場所に保存する要件。Region や Outposts の選択に影響する。"
  },
  "Database": {
    "en": "A system for persistently organizing, querying, updating, and analyzing business data.",
    "ja": "業務データを長期的に整理、検索、更新、分析するためのシステム。"
  },
  "DDoS": {
    "en": "A denial-of-service attack launched simultaneously from many distributed sources.",
    "ja": "多数の分散した送信元から同時に仕掛けられるサービス拒否攻撃。"
  },
  "Declarative": {
    "en": "Describes the desired final resources while the tool determines the creation steps.",
    "ja": "最終的に必要な Resource を記述し、具体的な作成手順は Tool に任せる。"
  },
  "Dedicated Host": {
    "en": "Provides visibility and control over an entire physical server, often for license compliance.",
    "ja": "物理 Server 全体の可視性と制御を提供し、License Compliance でよく使われる。"
  },
  "Dedicated Instance": {
    "en": "Runs instances on single-tenant hardware without giving the customer control of the specific physical host.",
    "ja": "Single-Tenant Hardware で Instance を実行するが、特定の物理 Host を利用者が制御するわけではない。"
  },
  "Default Output Format": {
    "en": "Controls only how CLI responses are displayed and can be overridden with --output; it does not affect permissions or resource state.",
    "ja": "既定の出力形式（AWS CLI のレスポンスを JSON、table、text、YAML などのどの形式で表示するかを定める設定）"
  },
  "Default Region": {
    "en": "Sets the request Region when none is specified; higher-priority options may override it, and it never bypasses IAM.",
    "ja": "既定のリージョン（コマンドでリージョンを明示しない場合に AWS CLI が使用する標準の AWS リージョン）"
  },
  "Default Route": {
    "en": "Usually written as 0.0.0.0/0 for IPv4 and ::/0 for IPv6.",
    "ja": "IPv4 では通常 0.0.0.0/0、IPv6 では ::/0 と記述する。"
  },
  "Delete Marker": {
    "en": "A marker that becomes the current version when an ordinary delete is performed with Versioning enabled.",
    "ja": "Versioning 有効時の通常削除で作成され、Current Version となる削除マーカー。"
  },
  "Dependency": {
    "en": "A library or component required by an application; container images usually package dependencies together.",
    "ja": "Application の実行に必要な Library または Component。Container Image は通常 Dependency もまとめて Package する。"
  },
  "Deployment": {
    "en": "Releases an application, configuration, or version into a runtime environment.",
    "ja": "Application、Configuration、Version を実行環境へリリースする。"
  },
  "Direct Connect": {
    "en": "A dedicated connection that provides consistent bandwidth; encryption is not enabled by default.",
    "ja": "安定した帯域幅を提供する専用接続。デフォルトでは暗号化されない。"
  },
  "Directly Attached Policy": {
    "en": "Permissions come directly from the identity; removing a user from a group does not revoke this policy.",
    "ja": "直接アタッチされたポリシー（グループを経由せず、IAM ユーザーやロールなどのアイデンティティに直接付与されたポリシー）"
  },
  "DLM": {
    "en": "Automates the creation, retention, and deletion of EBS snapshots and EBS-backed AMIs.",
    "ja": "EBS Snapshot と EBS-backed AMI の作成、保持、削除を自動化する。"
  },
  "DLQ": {
    "en": "Stores messages that repeatedly failed processing so they can be isolated, investigated, and reprocessed.",
    "ja": "処理に繰り返し失敗したメッセージを保存し、隔離、調査、再処理を可能にする。"
  },
  "DMS": {
    "en": "Migrates database data with full load and ongoing change data capture for low-downtime moves.",
    "ja": "Full Load と継続的な Change Data Capture により、低停止で Database Data を移行する。"
  },
  "DNS": {
    "en": "Resolves domain names to reachable network addresses or service endpoints.",
    "ja": "Domain Name をアクセス可能な Network Address または Service Endpoint に解決する。"
  },
  "Document Database": {
    "en": "Stores semi-structured and nested data as JSON-like documents.",
    "ja": "半構造化データや Nested Data を JSON に似た Document として保存する。"
  },
  "DocumentDB": {
    "en": "Designed for MongoDB-compatible workloads and complex document data.",
    "ja": "MongoDB 互換 Workload と複雑な Document Data 向け。"
  },
  "DoS": {
    "en": "Usually exhausts a target service's resources from a single source.",
    "ja": "通常は単一の送信元から対象サービスのリソースを枯渇させる。"
  },
  "Durability": {
    "en": "Whether data remains intact over time without permanent loss.",
    "ja": "データが長期間保持され、永続的に失われない度合い。"
  },
  "DynamoDB": {
    "en": "A serverless key-value and document database built for single-digit-millisecond performance at scale.",
    "ja": "大規模環境で一桁ミリ秒性能を提供する Serverless Key-Value / Document Database。"
  },
  "DynamoDB Accelerator (DAX)": {
    "en": "A managed in-memory cache built for DynamoDB that can reduce suitable reads to microsecond latency.",
    "ja": "DynamoDB 専用のマネージド In-Memory Cache。適切な Read をマイクロ秒単位まで高速化できる。"
  },
  "EBS": {
    "en": "An EBS volume belongs to a specific account, Region, and AZ, not privately to the IAM user who created it; visibility depends on account, Region, and policy.",
    "ja": "EBS Volume は作成した IAM User 個人ではなく、特定の Account・Region・AZ に属する。表示可否は Account、Region、Policy に依存する。"
  },
  "EC2": {
    "en": "You manage the operating system, patches, and runtime; suited to long-running workloads that need system-level control.",
    "ja": "OS、パッチ、実行環境は利用者が管理する。長時間稼働し、システム制御が必要なワークロードに適する。"
  },
  "EC2 Instance Profile": {
    "en": "An instance profile can contain one role at a time; SDK and CLI processes on EC2 obtain that role's temporary credentials through IMDS.",
    "ja": "1 つの Instance Profile に同時に含められる Role は 1 つ。EC2 内の SDK / CLI は IMDS からその Role の Temporary Credentials を取得する。"
  },
  "ECR": {
    "en": "ECR stores container images; ECS and EKS run and orchestrate them.",
    "ja": "ECR は Container Image を保存し、ECS/EKS が Image を実行・オーケストレーションする。"
  },
  "ECS": {
    "en": "AWS-native container orchestration with generally lower learning and operational overhead than EKS.",
    "ja": "AWS ネイティブのコンテナオーケストレーション。一般に EKS より学習・運用負荷が低い。"
  },
  "EDA": {
    "en": "Components collaborate through events to reduce coupling; commonly combines EventBridge, SNS, SQS, and Lambda.",
    "ja": "Component が Event を介して連携し、結合度を下げる。EventBridge、SNS、SQS、Lambda の組み合わせが一般的。"
  },
  "Edge": {
    "en": "A relationship connecting two vertices in a graph database.",
    "ja": "Graph Database で 2 つの Vertex をつなぐ関係。"
  },
  "Edge Location": {
    "en": "An edge facility near end users that reduces access latency; it is not a Region, AZ, or ordinary application data center.",
    "ja": "End User に近く Access Latency を下げる Edge 拠点。Region、AZ、通常の Application Data Center ではない。"
  },
  "Effect": {
    "en": "Either Allow or Deny; an applicable explicit Deny overrides Allow.",
    "ja": "効果（ポリシーステートメントがアクセスを許可するか拒否するかを Allow または Deny で指定する要素）"
  },
  "EFS": {
    "en": "A Linux NFS file system that multiple EC2 instances can mount concurrently across AZs.",
    "ja": "複数 AZ の複数 EC2 から同時に Mount できる Linux NFS ファイルシステム。"
  },
  "EKS": {
    "en": "Prefer EKS when a scenario mentions Kubernetes, cross-cloud compatibility, or existing K8s workloads.",
    "ja": "Kubernetes、クラウド間互換性、既存 K8s ワークロードが要件なら EKS を優先する。"
  },
  "Elastic Beanstalk": {
    "en": "A PaaS-style service that configures EC2, ALB, Auto Scaling, and more after code upload; the underlying resources remain visible and manageable.",
    "ja": "Code を Upload すると EC2、ALB、Auto Scaling などを自動構成する PaaS 型 Service。基盤 Resource は引き続き確認・管理できる。"
  },
  "Elastic IP": {
    "en": "A static public IPv4 address that the customer can allocate and reassociate.",
    "ja": "利用者が割り当て、別リソースへ再関連付けできる静的 Public IPv4 Address。"
  },
  "ElastiCache": {
    "en": "A general-purpose backend cache that reduces repeated database reads.",
    "ja": "Database への重複 Read を減らす汎用 Backend Cache。"
  },
  "Elasticity": {
    "en": "Capacity grows or shrinks quickly with actual demand, matching supply to load.",
    "ja": "エラスティシティ（需要変動に応じてリソースを動的に増減する性質）"
  },
  "ELB": {
    "en": "Distributes traffic across targets and performs health checks; ALB and NLB are members of the ELB product family.",
    "ja": "複数のターゲットへトラフィックを分散し、ヘルスチェックを行う。ALB と NLB は ELB 製品群に含まれる。"
  },
  "Encryption at Rest": {
    "en": "Protects data that has already been stored on media.",
    "ja": "ストレージ媒体に保存されているデータを保護する。"
  },
  "Encryption in Transit": {
    "en": "Protects data while it travels across a network.",
    "ja": "ネットワークを転送中のデータを保護する。"
  },
  "Environment": {
    "en": "Can mean development, testing, or production, or the overall runtime conditions an application depends on.",
    "ja": "Development、Test、Production の各環境、または Application が依存する実行条件全体を指す。"
  },
  "Ephemeral Port": {
    "en": "A short-lived dynamic client port; NACLs often need rules allowing return traffic on these ports.",
    "ja": "Client が短時間使用する動的 Port。NACL では戻りトラフィック用に許可が必要になることが多い。"
  },
  "Event Source Mapping": {
    "en": "Configuration that makes Lambda poll event sources such as SQS, Kinesis, and DynamoDB Streams.",
    "ja": "Lambda が SQS、Kinesis、DynamoDB Streams などの Event Source を Poll するための設定。"
  },
  "EventBridge": {
    "en": "Matches and routes events by rules, making it suitable for event-driven architectures and SaaS integrations.",
    "ja": "Rule に基づいて Event を一致・転送し、Event-Driven Architecture や SaaS Integration に適する。"
  },
  "Execution Role": {
    "en": "Controls which AWS resources Lambda can access at runtime; it does not control who can invoke the function.",
    "ja": "Lambda 実行時にアクセスできる AWS Resource を決める。誰が Lambda を Invoke できるかは決めない。"
  },
  "Explicit Deny": {
    "en": "An applicable explicit Deny overrides Allows in other policies and is the highest-priority IAM evaluation result.",
    "ja": "適用される Explicit Deny は他の Policy の Allow より優先され、IAM 権限評価で最優先となる。"
  },
  "FaaS": {
    "en": "Uses functions as the unit of deployment and execution; Lambda is the typical AWS FaaS service.",
    "ja": "Function を Deployment と実行の単位にする。Lambda は AWS の代表的な FaaS。"
  },
  "Failover": {
    "en": "Switches traffic or workloads to a standby resource when the primary resource fails.",
    "ja": "主リソースの障害時に、トラフィックまたはワークロードを待機リソースへ切り替える。"
  },
  "Fargate": {
    "en": "Not an orchestrator, but a serverless compute option for ECS and EKS that removes the need to manage EC2 instances.",
    "ja": "オーケストレーターではなく、EC2 管理を不要にする ECS/EKS 向けの Serverless コンピューティングオプション。"
  },
  "Federation": {
    "en": "Sign in through an external identity provider and receive temporary AWS credentials instead of creating long-term IAM users in every account; this is a preferred approach for workforce access.",
    "ja": "外部 IdP でログインして AWS の一時認証情報を取得し、各 Account に長期 IAM User を重複作成しない。従業員 Access の推奨方式の一つ。"
  },
  "File Storage": {
    "en": "Provides directories, paths, and shared file-system semantics.",
    "ja": "ディレクトリ、パス、共有ファイルシステムのセマンティクスを提供する。"
  },
  "Foreign Key": {
    "en": "References the primary key of another table to establish a relationship.",
    "ja": "別 Table の Primary Key を参照して関係を作る。"
  },
  "Free account plan": {
    "en": "Plan details can change; check current AWS billing documentation and do not treat it as all services being free forever.",
    "ja": "AWS 無料アカウントプラン（期間とクレジット上限のある学習・検証向けプラン）"
  },
  "FSx": {
    "en": "A family of fully managed file systems for Windows, Lustre, NetApp ONTAP, and OpenZFS workloads.",
    "ja": "Windows、Lustre、NetApp ONTAP、OpenZFS Workload 向けの Fully Managed File System 群。"
  },
  "Fully Managed Service": {
    "en": "AWS takes on more operational work; this describes a degree of management, not one strict product category.",
    "ja": "より多くの運用作業を AWS が担当する。厳密に統一された製品分類ではなく、管理範囲の程度を示す。"
  },
  "GDPR": {
    "en": "Protects personal data and privacy in the European Union; exact requirements must be confirmed for the business and applicable law.",
    "ja": "EU の個人 Data と Privacy を保護する規則。具体的要件は Business と適用法に応じて確認する。"
  },
  "Glacier Deep Archive": {
    "en": "For long-term archives at the lowest cost, with the longest restore times.",
    "ja": "長期アーカイブ向けで、コストは最も低いが復元時間は最も長い。"
  },
  "Glacier Flexible Retrieval": {
    "en": "For archival data that can wait minutes to hours for retrieval.",
    "ja": "取り出しに数分から数時間待てるアーカイブデータ向け。"
  },
  "Glacier Instant Retrieval": {
    "en": "For rarely accessed data that still requires millisecond retrieval.",
    "ja": "アクセス頻度は非常に低いが、ミリ秒単位の取り出しが必要なデータ向け。"
  },
  "Global Accelerator": {
    "en": "Accelerates global TCP/UDP traffic and shifts traffic between endpoints based on health.",
    "ja": "Global TCP/UDP を高速化し、Health に基づいて Endpoint を切り替える。"
  },
  "Global Service": {
    "en": "Its control plane or configuration is not limited to one Region; resource scope can still depend on the protected service.",
    "ja": "AWS グローバルサービス（単一リージョンに限定されないサービス）"
  },
  "Global Tables": {
    "en": "DynamoDB replication across multiple Regions with a multi-active architecture.",
    "ja": "Multi-Region・Multi-Active を実現する DynamoDB のレプリケーション機能。"
  },
  "Graph Database": {
    "en": "Represents and queries complex relationships using vertices, edges, and properties.",
    "ja": "Vertex、Edge、Property を使って複雑な関係を表現・検索する。"
  },
  "GWLB": {
    "en": "Distributes traffic through scalable virtual network appliances such as firewalls and inspection systems.",
    "ja": "Firewall や Inspection System などの Virtual Network Appliance へ Traffic を分散する。"
  },
  "HA": {
    "en": "Reduces downtime through multiple AZs, redundancy, and automatic failover; it does not mean zero interruption.",
    "ja": "複数 AZ、冗長化、自動フェイルオーバーで停止時間を減らすが、完全な無停止を意味しない。"
  },
  "Hybrid Cloud": {
    "en": "Combines on-premises data centers with public cloud; Outposts and Direct Connect commonly appear in these scenarios.",
    "ja": "On-Premises Data Center と Public Cloud を連携する。関連シナリオでは Outposts、Direct Connect が頻出。"
  },
  "IaC": {
    "en": "Declares infrastructure with templates or code and manages it under version control.",
    "ja": "テンプレートまたはコードでインフラを宣言し、バージョン管理する。"
  },
  "IAM": {
    "en": "An account-level/global-view identity and permissions service. Access is denied by default, explicit denies win, and least privilege applies.",
    "ja": "Account-level / Global View の Identity・Permission Service。Default Deny、Explicit Deny 優先、Least Privilege が基本。"
  },
  "IAM Access Advisor": {
    "en": "Reviews service/action last-accessed data and permission sources for users, groups, roles, and policies. It is not a complete real-time audit log.",
    "ja": "User、Group、Role、Policy の Service / Action 最終利用時刻と権限元を確認する。完全なリアルタイム監査ログではない。"
  },
  "IAM Access Analyzer": {
    "en": "Analyzes external access, policies, and unused permissions to help enforce least privilege.",
    "ja": "外部アクセス、ポリシー、未使用アクセスを分析し、最小権限の実現を支援する。"
  },
  "IAM Credentials Report": {
    "en": "An account-level CSV covering the root-account row and IAM-user passwords, MFA, access keys, signing certificates, and last-use/rotation data. It excludes role temporary credentials and service-specific credentials.",
    "ja": "Root Account 行と IAM User の Password、MFA、Access Key、Signing Certificate、最終利用・ローテーション情報をまとめた Account レベル CSV。Role の一時認証情報や Service 固有認証情報は含まない。"
  },
  "IAM Group": {
    "en": "Contains IAM users only, not other groups. A user may join multiple groups, while a group cannot sign in or be assumed.",
    "ja": "IAM User のみを含み、Group を入れ子にできない。User は複数 Group に所属できるが、Group 自体は Sign-in や Assume の対象にならない。"
  },
  "IAM Identity Center": {
    "en": "Centrally manages workforce access to multiple AWS accounts and applications.",
    "ja": "従業員による複数の AWS アカウントとアプリケーションへのアクセスを一元管理する。"
  },
  "IAM Password Policy": {
    "en": "Controls only IAM user console passwords, not the root password, access keys, or IAM Identity Center passwords.",
    "ja": "IAM パスワードポリシー（同一 AWS アカウント内の IAM ユーザーのコンソールパスワードについて、長さ、文字種、有効期限、再利用制限などを定める規則）"
  },
  "IAM Policy": {
    "en": "A JSON permissions document, usually with Version and Statement. Identity-based policies omit Principal, and explicit Deny overrides Allow.",
    "ja": "通常 Version と Statement を持つ JSON 権限文書。Identity-based Policy は Principal を書かず、Explicit Deny が Allow より優先する。"
  },
  "IAM Role": {
    "en": "The trust policy defines who may assume it; permissions policies define what the resulting role session may do. STS temporary credentials support workloads, federation, and cross-account access.",
    "ja": "Trust Policy は誰が Assume できるか、Permissions Policy は Role Session が何を実行できるかを定義する。STS Temporary Credentials により Workload、Federation、Cross-account Access に利用できる。"
  },
  "IAM User": {
    "en": "A long-term identity in an AWS account that can have a console password or access key and join multiple groups. Prefer Identity Center or federation with temporary credentials for routine workforce access.",
    "ja": "AWS Account 内の長期 Identity で、Console Password / Access Key を持ち複数 Group に所属できる。通常の従業員 Access では Identity Center / Federation と一時認証情報を優先する。"
  },
  "iam:PassRole": {
    "en": "PassRole is not AssumeRole. It lets a caller pass a specified role to an AWS service and should restrict both the role and destination service.",
    "ja": "PassRole は AssumeRole ではない。Caller が指定 Role を AWS Service へ渡す権限で、渡せる Role と対象 Service を制限する。"
  },
  "IAMFullAccess": {
    "en": "Provides full management of IAM, not administrator access to every AWS service and resource.",
    "ja": "IAMFullAccess（IAM サービスのユーザー、グループ、ロール、ポリシーなどを管理する完全アクセス権限の AWS 管理ポリシー）"
  },
  "IAMReadOnlyAccess": {
    "en": "Mainly grants IAM Get and List actions, so resources can be viewed but not created, changed, or deleted.",
    "ja": "IAMReadOnlyAccess（IAM のユーザー、グループ、ロール、ポリシーなどを取得・一覧表示できる読み取り専用の AWS 管理ポリシー）"
  },
  "Idempotency": {
    "en": "Repeating the same request produces no additional side effects; common in queue, retry, and payment scenarios.",
    "ja": "同じリクエストを繰り返しても追加の副作用が生じない性質。キュー、再試行、決済の問題で頻出。"
  },
  "Identity-based Policy": {
    "en": "Attached or embedded in an IAM identity; the principal is implied by the attachment, so Principal is not used.",
    "ja": "アイデンティティベースのポリシー（IAM ユーザー、グループ、またはロールに付与する権限ポリシー）"
  },
  "IGW": {
    "en": "Enables two-way internet communication for public-subnet resources; an instance still needs a public IP and correct routing.",
    "ja": "Public Subnet のリソースとインターネット間の双方向通信を可能にする。インスタンスには Public IP と正しい Route も必要。"
  },
  "Imperative": {
    "en": "Explicitly describes each step of how an operation should be performed.",
    "ja": "処理をどのように実行するか、各 Step を明示的に記述する。"
  },
  "Implicit Deny": {
    "en": "IAM denies by default; without an applicable Allow, the request remains implicitly denied.",
    "ja": "暗黙的な拒否（アクセスを許可する適用可能な Allow が存在しないため、既定で拒否される状態）"
  },
  "Infrastructure": {
    "en": "The underlying compute, networking, storage, security, and related resources.",
    "ja": "Compute、Network、Storage、Security などの基盤 Resource の総称。"
  },
  "Inherited Policy": {
    "en": "A user receives it through a group; removing the user from that group removes this permission source.",
    "ja": "継承されたポリシー（IAM ユーザーが所属グループを通じて受け取る権限ポリシー）"
  },
  "Inline Policy": {
    "en": "Embedded one-to-one in a user, group, or role; it is deleted with the identity and is not suited to reuse.",
    "ja": "インラインポリシー（単一の IAM ユーザー、グループ、またはロールに直接埋め込む一対一のポリシー）"
  },
  "Instance Store": {
    "en": "Temporary block storage on the physical host; data is lost when the instance stops or terminates.",
    "ja": "物理ホスト上の一時的なブロックストレージ。インスタンスの Stop または Terminate でデータを失う。"
  },
  "IOPS": {
    "en": "Measures read and write operations per second; important for random, small-block I/O.",
    "ja": "1 秒あたりの読み書き操作数。ランダムな小ブロック I/O で重視される。"
  },
  "Isolation": {
    "en": "Separates customers or workloads through virtualization, permissions, and network boundaries.",
    "ja": "Virtualization、Permission、Network Boundary によって異なる顧客や Workload を分離する。"
  },
  "Item": {
    "en": "A record in a DynamoDB table, composed of multiple attributes.",
    "ja": "複数の Attribute で構成される DynamoDB Table の 1 Record。"
  },
  "JOIN": {
    "en": "Combines data from multiple relational tables using related keys.",
    "ja": "関連キーを使って複数のリレーショナルテーブルのデータを結合する。"
  },
  "K8s": {
    "en": "Kubernetes is an open-source platform; EKS is the AWS-managed Kubernetes service.",
    "ja": "Kubernetes は Open-Source Platform、EKS は AWS のマネージド Kubernetes Service。"
  },
  "Lambda": {
    "en": "Event-driven, automatically scales, and charges by invocation and duration; each run is limited to 15 minutes and is not suited to long-running processes.",
    "ja": "イベント駆動で自動スケールし、呼び出し回数と実行時間で課金される。1 回の実行は最大 15 分で、長時間プロセスには不向き。"
  },
  "Least Privilege": {
    "en": "Start with only the Actions, Resources, and conditions needed for the current task to reduce security risk, mistakes, and unexpected cost.",
    "ja": "現在の業務に必要な最小限の Action、Resource、Condition から付与し、Security Risk、誤操作、想定外 Cost を抑える。"
  },
  "Lifecycle Policy": {
    "en": "Moves data between storage classes, expires objects, and cleans up old versions according to rules.",
    "ja": "ルールに従ってストレージクラスの移行、オブジェクトの期限切れ、旧バージョンの削除を行う。"
  },
  "Lightsail": {
    "en": "Simple fixed-price bundles for small websites and beginner projects; complex architectures usually use EC2.",
    "ja": "固定料金で構成が簡単。小規模 Web Site や入門 Project に適し、複雑な Architecture では通常 EC2 を選ぶ。"
  },
  "Link Aggregation Group": {
    "en": "Aggregates compatible Direct Connect connections; bandwidth aggregation and site redundancy must be considered separately.",
    "ja": "互換性のある Direct Connect Connection を集約する。帯域幅の集約と Site 冗長化は分けて検討する。"
  },
  "Log Group": {
    "en": "Organizes multiple log streams by application or resource and defines their retention period.",
    "ja": "Application または Resource 単位で複数の Log Stream を整理し、保持期間を設定する。"
  },
  "Log Stream": {
    "en": "A sequence of log events from one specific source, such as a Lambda execution environment.",
    "ja": "特定の 1 Source から出る一連の Log Event。例として 1 つの Lambda 実行環境がある。"
  },
  "Longest Prefix Match": {
    "en": "The route with the most specific matching destination takes precedence.",
    "ja": "宛先に最も具体的に一致するルートが優先される。"
  },
  "Loose Coupling": {
    "en": "Lets components scale and recover independently; SQS is the most common exam example of decoupling.",
    "ja": "コンポーネントを独立してスケール・復旧できる。試験では SQS が代表的な疎結合サービス。"
  },
  "Low Latency": {
    "en": "Emphasizes response speed rather than throughput; common when choosing Regions, edge locations, and caches.",
    "ja": "Throughput ではなく Request の応答速度を重視する。Region、Edge Location、Cache 選択でよく使う。"
  },
  "Managed Blockchain": {
    "en": "A managed service for verifiable, tamper-resistant ledgers shared across multiple organizations.",
    "ja": "複数組織で共有する、検証可能で改ざん耐性の高い Ledger 向けマネージドサービス。"
  },
  "Managed Service": {
    "en": "AWS operates part of the underlying stack, while users may still configure capacity, versions, and networking.",
    "ja": "基盤運用の一部を AWS が担当するが、利用者が容量、Version、Network を設定する場合もある。"
  },
  "Manual Snapshot": {
    "en": "A user-created backup of database state at a specific time, retained until explicitly deleted.",
    "ja": "利用者が特定時点の Database 状態を手動で保存する Backup。明示的に削除するまで保持される。"
  },
  "Memcached": {
    "en": "A lightweight distributed in-memory caching engine.",
    "ja": "機能を絞った軽量な分散 In-Memory Cache Engine。"
  },
  "Metadata": {
    "en": "Describes an object's content and properties; changing user metadata usually requires rewriting the object.",
    "ja": "Object の内容や属性を説明する。User Metadata の変更には通常 Object の再書き込みが必要。"
  },
  "MFA": {
    "en": "Adds another authentication factor but grants no permission. Enable it first for root and privileged identities; root and IAM users currently support up to eight devices.",
    "ja": "追加の Authentication Factor であり権限は付与しない。Root と高権限 Identity を優先し、現在 Root / IAM User は最大 8 Device を登録できる。"
  },
  "Migration Evaluator": {
    "en": "Builds a data-driven migration business case from the current environment, licensing, and target options.",
    "ja": "現行 Environment、License、移行先 Option の Data から Migration の Business Case を作成する。"
  },
  "Mount Target": {
    "en": "The network entry point for EFS in a subnet within an AZ.",
    "ja": "ある AZ の Subnet 内に作成する EFS のネットワークエントリポイント。"
  },
  "Multi-AZ": {
    "en": "Primarily provides high availability and automatic failover, not read scaling.",
    "ja": "主目的は高可用性と自動フェイルオーバーであり、読み取り性能の向上ではない。"
  },
  "Multi-Region": {
    "en": "Deploys across AWS Regions for Region-level disaster recovery, global low latency, or compliance.",
    "ja": "Region レベルの災害復旧、グローバルな低レイテンシ、コンプライアンスのために複数 Region へ展開する。"
  },
  "Multi-Tenancy": {
    "en": "Multiple customers share underlying infrastructure while remaining logically isolated; common in cloud computing.",
    "ja": "複数顧客が基盤 Infrastructure を共有しつつ論理的に分離される、Cloud Computing の一般的な Model。"
  },
  "Multipart Upload": {
    "en": "Uploads a large object in parallel parts; required for objects larger than 5 GB.",
    "ja": "大きな Object を複数 Part に分けて並列 Upload する。5 GB を超える場合は必須。"
  },
  "NACL": {
    "en": "Subnet-level and stateless, with both allow and deny rules; inbound and outbound rules must be configured explicitly.",
    "ja": "Subnet レベルで Stateless。許可と拒否の両方を設定でき、Inbound と Outbound を個別に明示する必要がある。"
  },
  "NAT Gateway": {
    "en": "Lets private-subnet resources initiate internet access without allowing unsolicited inbound connections; deployed in a public subnet.",
    "ja": "Private Subnet からのインターネット向け通信を可能にし、外部からの新規接続は許可しない。Public Subnet に配置する。"
  },
  "Neptune": {
    "en": "Designed for traversing complex relationships, fraud detection, and knowledge graphs.",
    "ja": "複雑な Relationship Traversal、Fraud Detection、Knowledge Graph 向け。"
  },
  "NFS": {
    "en": "A common shared-file protocol on Linux; EFS commonly uses TCP port 2049.",
    "ja": "Linux で一般的な共有ファイルプロトコル。EFS は通常 TCP 2049 を使用する。"
  },
  "NLB": {
    "en": "Layer 4 TCP/UDP/TLS; suited to extremely high performance, ultra-low latency, and static IP requirements.",
    "ja": "レイヤー 4 の TCP/UDP/TLS。非常に高い性能、超低レイテンシ、固定 IP の要件に適する。"
  },
  "NoSQL": {
    "en": "Does not mean no structure; it means a fixed relational-table model is not the only data model.",
    "ja": "「構造がない」という意味ではなく、固定的なリレーショナルテーブルだけをデータモデルとしない。"
  },
  "Object": {
    "en": "The storage unit in object storage, consisting of data, a key, metadata, and related attributes.",
    "ja": "データ、Key、Metadata などで構成されるオブジェクトストレージの保存単位。"
  },
  "Object Key": {
    "en": "The unique name of an object in a bucket; slashes only represent prefixes.",
    "ja": "Bucket 内でオブジェクトを一意に識別する名前。スラッシュは Prefix の表現にすぎない。"
  },
  "Object Lock": {
    "en": "Prevents an object from being modified or deleted during its retention period.",
    "ja": "保持期間中、オブジェクトの変更や削除を防止する。"
  },
  "Object Storage": {
    "en": "Stores data as objects with metadata and accesses it through APIs or HTTP.",
    "ja": "データを Metadata 付きの Object として保存し、API または HTTP でアクセスする。"
  },
  "Object Tags": {
    "en": "Managed separately from object metadata and used for classification, lifecycle rules, and permission conditions.",
    "ja": "Object Metadata とは別に管理でき、分類、Lifecycle、権限 Condition に利用する。"
  },
  "On-premises": {
    "en": "A data-center and server environment owned and managed by the organization.",
    "ja": "企業自身が所有・管理するデータセンターと Server の環境。"
  },
  "Orchestration": {
    "en": "Handles deployment, scaling, scheduling, networking, and failure recovery; ECS and EKS are orchestration services.",
    "ja": "Deployment、Scaling、Scheduling、Network、障害復旧を管理する。ECS と EKS は Orchestration Service。"
  },
  "Outposts": {
    "en": "Deploys AWS infrastructure and services in a customer's data center for low latency, data residency, and hybrid cloud.",
    "ja": "低レイテンシ、Data Residency、Hybrid Cloud のために、顧客 Data Center へ AWS Infrastructure と Service を配置する。"
  },
  "PaaS": {
    "en": "Developers mainly manage applications and data while the platform manages the runtime and infrastructure.",
    "ja": "Developer は主に Application と Data を管理し、Platform が Runtime と Infrastructure を担当する。"
  },
  "Paid account plan": {
    "en": "Continues with usage-based billing; promotional credits depend on current AWS terms.",
    "ja": "AWS 有料アカウントプラン（従量課金で継続利用するアカウントプラン）"
  },
  "Partition Key": {
    "en": "Determines the distribution of DynamoDB items and is the key element required by Query.",
    "ja": "DynamoDB Item の分散を決め、Query で必ず指定するキー要素。"
  },
  "Passkey": {
    "en": "AWS supports device-bound security keys and synced passkeys as phishing-resistant MFA options.",
    "ja": "パスキー（FIDO 規格と公開鍵暗号を利用し、パスワードより強い耐フィッシング性を持つ認証方式）"
  },
  "Permissions Policy": {
    "en": "A role's permissions policy defines what the role session may do; it does not define who may assume the role.",
    "ja": "Role の Permissions Policy は Role Session が実行できる操作を定義し、誰が Role を Assume できるかは定義しない。"
  },
  "PII": {
    "en": "Data that can directly or indirectly identify an individual.",
    "ja": "個人を直接または間接的に特定できるデータ。"
  },
  "Point of Presence": {
    "en": "A generic edge network access site, often discussed together with Edge Locations in foundation exams.",
    "ja": "AWS Point of Presence（利用者に近いエッジネットワーク拠点）"
  },
  "Point-in-Time Recovery (PITR)": {
    "en": "Restores a database to a specific point within the retention window.",
    "ja": "保持期間内の特定時点へデータベースを復元する。"
  },
  "Policy Language Version": {
    "en": "Usually 2012-10-17; it is the policy syntax version, not a resource version or modification date.",
    "ja": "ポリシー言語バージョン（IAM ポリシーの構文機能を指定する Version 要素の値）"
  },
  "Policy Statement": {
    "en": "The core IAM JSON permission rule; Statement may be one object or an array of multiple statements.",
    "ja": "ポリシーステートメント（Effect、Action、Resource、Condition などで一つの権限規則を表す記述）"
  },
  "Policy Wildcard": {
    "en": "In Action it matches API operation names; in Resource it matches resource scope, so meaning depends on the field.",
    "ja": "ポリシーのワイルドカード（アクション名やリソース範囲の複数の値を * または ? でまとめて一致させる記号）"
  },
  "Portability": {
    "en": "The ability to move and run an application across environments; containers commonly improve portability.",
    "ja": "Application を異なる Environment 間で移動・実行できる能力。Container は Portability 向上によく使われる。"
  },
  "Presigned URL": {
    "en": "Provides temporary, expiring access within the permissions of the signer.",
    "ja": "署名者の権限範囲内で、有効期限付きの一時アクセスを提供する。"
  },
  "Primary Key": {
    "en": "A key that uniquely identifies a record or item.",
    "ja": "1 件の Record または Item を一意に識別するキー。"
  },
  "Principal": {
    "en": "Common in resource-based and trust policies; identity-based policies do not use it, and IAM groups cannot be principals.",
    "ja": "プリンシパル（リソースベースまたは信頼ポリシーで、規則の対象となるアカウント、ユーザー、ロール、サービスなどの主体）"
  },
  "Private Subnet": {
    "en": "Has no direct route to an IGW; resources can initiate outbound access through NAT.",
    "ja": "IGW への直接 Route を持たず、NAT 経由で外向き通信を開始できる。"
  },
  "PrivateLink": {
    "en": "Provides private access to a specific service without connecting entire networks.",
    "ja": "ネットワーク全体を接続せず、特定サービスへプライベートにアクセスする。"
  },
  "Producer": {
    "en": "The party that creates and sends messages or events.",
    "ja": "Message または Event を作成して送信する側。"
  },
  "Provisioning": {
    "en": "Creates and configures infrastructure resources; deployment focuses more on releasing applications or versions.",
    "ja": "Infrastructure Resource を作成・設定する。Deployment は Application や Version のリリースに重点を置く。"
  },
  "Pub/Sub": {
    "en": "Publishers do not need to know their subscribers; suitable for one-to-many broadcasting.",
    "ja": "Publisher は Subscriber を知る必要がなく、1 対多のブロードキャストに適する。"
  },
  "Public Subnet": {
    "en": "Its route table has a direct route to an IGW; resources also need public addresses and security rules for internet communication.",
    "ja": "Route Table が IGW への直接 Route を持つ。リソースのインターネット通信には Public Address とセキュリティルールも必要。"
  },
  "Pull": {
    "en": "Consumers actively retrieve messages; SQS is a typical pull-based service.",
    "ja": "Consumer が Message を能動的に取得する。SQS は典型的な Pull 型。"
  },
  "Purpose-Built Database": {
    "en": "Selects the database best suited to the data model and access pattern.",
    "ja": "Data Model と Access Pattern に最も適した Database を選択する考え方。"
  },
  "Push": {
    "en": "The service actively sends messages to subscribers; SNS is typically push-based.",
    "ja": "Service が Subscriber へ能動的に Message を送る。SNS は典型的な Push 型。"
  },
  "Query": {
    "en": "A DynamoDB Query locates data by partition key and is usually more efficient than Scan.",
    "ja": "DynamoDB Query は Partition Key でデータを絞り込み、通常は Scan より効率的。"
  },
  "Queue": {
    "en": "Messages are generally processed by one consumer; queues provide ordering, buffering, and load smoothing.",
    "ja": "Message は通常 1 つの Consumer が処理し、待ち行列、Buffer、負荷平準化に使う。"
  },
  "RDS": {
    "en": "AWS manages backups, patching, and infrastructure; Multi-AZ improves availability while Read Replicas scale reads.",
    "ja": "AWS がバックアップ、パッチ、インフラを管理する。Multi-AZ は可用性を高め、Read Replica は読み取りを拡張する。"
  },
  "Read Replica": {
    "en": "Primarily scales reads and reporting queries; replication is usually asynchronous and can span Regions.",
    "ja": "主に読み取りとレポートクエリを拡張する。通常は非同期レプリケーションで、Region 間にも作成できる。"
  },
  "Redis OSS": {
    "en": "Supports rich data structures, replication, leaderboards, sessions, and other use cases.",
    "ja": "豊富な Data Structure、Replication、Leaderboard、Session などをサポートする。"
  },
  "Redundancy": {
    "en": "Reduces single points of failure by duplicating components and paths.",
    "ja": "コンポーネントや経路を複製して単一障害点のリスクを下げる。"
  },
  "Refactor / Re-architect": {
    "en": "Changes or rewrites code to redesign the architecture around cloud-native capabilities.",
    "ja": "Code を変更または書き直し、Cloud Native 機能を活用する Architecture へ再設計する。"
  },
  "Region": {
    "en": "Choose a Region by checking compliance, latency, service availability, and price; cross-Region designs commonly address disaster recovery, compliance, or global latency.",
    "ja": "Compliance、Latency、Service Availability、Pricing で Region を選ぶ。Cross-Region は DR、Compliance、Global Low Latency で使う。"
  },
  "Region Selector": {
    "en": "Sets the console's current Region; regional resources change with it, while global services usually do not.",
    "ja": "AWS コンソールのリージョンセレクター（操作対象リージョンを切り替える機能）"
  },
  "Regional Service": {
    "en": "Resources and operations belong to a selected Region; switching the console Region shows a different regional resource set.",
    "ja": "AWS リージョナルサービス（単一リージョンを作用範囲とするサービス）"
  },
  "Registry": {
    "en": "Stores, versions, and distributes container images; ECR is the AWS service for this purpose.",
    "ja": "Container Image を保存、Version 管理、配布する。AWS では ECR が該当する。"
  },
  "Rehost": {
    "en": "Moves an individual server or application to AWS with little or no application change.",
    "ja": "Application をほぼ変更せず、個別の Server または Application を AWS へ移行する。"
  },
  "Relational Database": {
    "en": "Organizes data with tables, keys, and relationships, supporting SQL, joins, and transactions.",
    "ja": "テーブル、キー、関係でデータを整理し、SQL、JOIN、トランザクションをサポートする。"
  },
  "Relocate": {
    "en": "Moves an entire virtualization or container platform to a similar environment on AWS.",
    "ja": "Virtualization または Container Platform 全体を、AWS 上の同種 Environment へ移行する。"
  },
  "Replatform": {
    "en": "Migrates after limited cloud optimization without changing the core architecture.",
    "ja": "Core Architecture は変えず、限定的な Cloud Optimization を行ってから移行する。"
  },
  "Repurchase": {
    "en": "Replaces legacy software with a new product or SaaS offering.",
    "ja": "Legacy Software を廃止し、新しい Product または SaaS に置き換える。"
  },
  "Resource": {
    "en": "Specifies the AWS resource a statement affects; avoid * when an exact scope can be defined.",
    "ja": "リソース（ポリシーステートメントの適用対象となる AWS リソースを ARN などで指定する要素）"
  },
  "Resource-based Policy": {
    "en": "Attached to a resource and usually names principals; it is common for cross-account authorization.",
    "ja": "リソースベースのポリシー（AWS リソース側に設定し、どのプリンシパルに何を許可・拒否するかを定義するポリシー）"
  },
  "Retain": {
    "en": "Keeps a valuable application in place for now because of compliance, dependencies, or insufficient migration benefit.",
    "ja": "Compliance、Dependency、移行効果などの理由により、価値のある Application を当面現環境に残す。"
  },
  "Retire": {
    "en": "Decommissions and stops maintaining a system that is no longer needed.",
    "ja": "不要と判断した System を停止し、Maintenance を終了する。"
  },
  "Root User": {
    "en": "Use only for the few account tasks that require root. Enable MFA, create no access key, and do not use it for daily administration.",
    "ja": "Root-only Task に限定し、MFA を有効化し、Access Key を作成せず、日常管理には使用しない。"
  },
  "Route 53": {
    "en": "Provides DNS resolution, domain registration, health checks, and traffic routing.",
    "ja": "DNS 解決、ドメイン登録、ヘルスチェック、トラフィックルーティングを提供する。"
  },
  "Route Table": {
    "en": "Determines the next hop for network traffic; it does not allow or deny individual connections.",
    "ja": "ネットワークトラフィックの次の転送先を決める。個々の接続を許可・拒否するものではない。"
  },
  "RPO": {
    "en": "The maximum amount of data loss, measured in time, that the business can tolerate.",
    "ja": "業務が許容できる最大データ損失量を時間で表す。"
  },
  "RTO": {
    "en": "The maximum time allowed to restore the business after a failure.",
    "ja": "障害後に業務を復旧するまでに許容される最大時間。"
  },
  "Runtime": {
    "en": "The software environment required to execute a program, such as Python, Java, or a container runtime.",
    "ja": "Program 実行に必要な Software Environment。Python、Java、Container Runtime など。"
  },
  "S3": {
    "en": "Stores data as objects in buckets with very high durability; it is not mounted to EC2 as a traditional block device.",
    "ja": "Object を Bucket に保存し、非常に高い耐久性を持つ。従来の Block Device として EC2 にマウントするものではない。"
  },
  "S3 Access Point": {
    "en": "Provides independent access endpoints and policies for different applications or teams.",
    "ja": "Application や Team ごとに独立した Access Endpoint と Policy を提供する。"
  },
  "S3 Express One Zone": {
    "en": "A single-AZ object storage class designed for extremely high performance.",
    "ja": "単一 AZ で非常に高い性能を提供する Object Storage Class。"
  },
  "S3 File Gateway": {
    "en": "Maps local NFS or SMB files to objects in S3.",
    "ja": "On-Premises の NFS/SMB File を S3 Object にマッピングする。"
  },
  "S3 Intelligent-Tiering": {
    "en": "For data with unknown or changing access patterns; automatically moves data between access tiers.",
    "ja": "アクセスパターンが不明または変化するデータ向けで、アクセス階層を自動調整する。"
  },
  "S3 One Zone-IA": {
    "en": "Lower-cost, single-AZ storage for infrequently accessed data that can be recreated.",
    "ja": "単一 AZ の低コストストレージ。再作成可能でアクセス頻度の低いデータに適する。"
  },
  "S3 Outposts": {
    "en": "Provides S3 object storage on Outposts at the customer's location.",
    "ja": "顧客拠点の Outposts 上で S3 Object Storage を提供する。"
  },
  "S3 Standard": {
    "en": "The default storage class for frequently accessed data, with multiple AZs and low latency.",
    "ja": "頻繁にアクセスするデータ向けのデフォルトストレージクラス。複数 AZ と低レイテンシを提供する。"
  },
  "S3 Standard-IA": {
    "en": "For infrequently accessed data that still needs millisecond retrieval; retrieval fees apply.",
    "ja": "アクセス頻度は低いがミリ秒単位の取り出しが必要なデータ向け。取り出し料金が発生する。"
  },
  "SageMaker": {
    "en": "A managed platform for building, training, tuning, and deploying machine-learning models.",
    "ja": "Machine Learning Model の Build、Training、Tuning、Deployment を行う Managed Platform。"
  },
  "Scalability": {
    "en": "A system can scale vertically or horizontally to handle more load, but it does not necessarily scale down automatically.",
    "ja": "スケーラビリティ（需要増加に合わせて処理能力を拡張できる性質）"
  },
  "Scale Out / In": {
    "en": "Scales by adding or removing instances; it is more elastic and more common in cloud architecture exams.",
    "ja": "Instance 数を増減して Scale する。Cloud Architecture では弾力性が高く、試験でも頻出。"
  },
  "Scale Up / Down": {
    "en": "Scales by increasing or decreasing one machine's capacity; it can require downtime and has a single-machine limit.",
    "ja": "1 台の Machine の性能を上げ下げして Scale する。停止が必要な場合があり、単体性能に上限がある。"
  },
  "Scan": {
    "en": "Reads many items before filtering and usually consumes more read capacity than Query.",
    "ja": "多数の Item を読み取ってから Filter するため、通常は Query より多くの Read Capacity を消費する。"
  },
  "Schema": {
    "en": "Defines tables, columns, types, and constraints; DynamoDB still has a primary-key schema.",
    "ja": "テーブル、列、型、制約を定義する。DynamoDB にも Primary Key の Schema がある。"
  },
  "Secret Access Key": {
    "en": "Keep it secret and never share or hard-code it; if lost, create and validate a new key before revoking the old one.",
    "ja": "シークレットアクセスキー（AWS API リクエストの署名に使用する秘密値で、作成時以外は再表示できない認証情報）"
  },
  "Security Finding": {
    "en": "A risk record produced by a security service, usually with severity and remediation guidance.",
    "ja": "セキュリティサービスが生成するリスク記録で、通常は重要度と推奨対応を含む。"
  },
  "Security Group": {
    "en": "Instance-level and stateful, with allow rules only; return traffic is automatically permitted.",
    "ja": "Instance レベルで Stateful。許可ルールのみを設定し、戻りトラフィックは自動的に許可される。"
  },
  "Security Key": {
    "en": "A phishing-resistant physical FIDO authenticator; U2F is older course terminology.",
    "ja": "セキュリティキー（FIDO 規格に基づく公開鍵認証を行う、耐フィッシング性の高い物理認証デバイス）"
  },
  "Self-Managed": {
    "en": "The user handles installation, patching, backups, scaling, and high availability, as with a database operated on EC2.",
    "ja": "利用者が Installation、Patch、Backup、Scaling、High Availability を担当する。EC2 上の自前 Database が例。"
  },
  "Serverless": {
    "en": "Servers still exist, but users do not manage them; common examples include Lambda, Fargate, and DynamoDB.",
    "ja": "Server が存在しないのではなく、利用者が基盤 Server を管理しない。代表例は Lambda、Fargate、DynamoDB。"
  },
  "Service": {
    "en": "Continuously maintains a desired number of tasks and can integrate with load balancing and auto scaling.",
    "ja": "指定数の Task を継続維持し、Load Balancing や Auto Scaling と組み合わせられる。"
  },
  "Service Availability in a Region": {
    "en": "Shows whether a service or feature is offered in a target Region, not uptime or high availability.",
    "ja": "リージョン別サービス提供状況（各リージョンで利用できる AWS サービスの範囲）"
  },
  "Service Role": {
    "en": "Its trust policy trusts the relevant AWS service, while its permissions policy grants only what that service needs to perform the task.",
    "ja": "Trust Policy は対象 AWS Service を信頼し、Permissions Policy は処理に必要な最小権限だけを付与する。"
  },
  "Session Manager": {
    "en": "Creates controlled sessions without opening inbound SSH or RDP ports.",
    "ja": "SSH や RDP の受信ポートを開かずに、管理されたセッションを確立する。"
  },
  "Session Token": {
    "en": "The third component of temporary credentials; it must accompany the temporary access key and expires with the session.",
    "ja": "セッショントークン（STS などが発行する一時的な Access Key ID と Secret Access Key とともに使用する、期限付き認証情報の追加要素）"
  },
  "Sid": {
    "en": "An optional statement identifier for readability and troubleshooting; it grants no permission by itself.",
    "ja": "ステートメント ID（ポリシー内の各 Statement を識別しやすくする任意の識別子）"
  },
  "Simulation": {
    "en": "Usually a compute-intensive batch workload; AWS Batch and Spot Instances are common options.",
    "ja": "通常は Compute Intensive な Batch Workload。AWS Batch と Spot Instance を検討できる。"
  },
  "Site-to-Site VPN": {
    "en": "Connects complete networks through encrypted IPsec tunnels.",
    "ja": "暗号化された IPsec Tunnel でネットワーク全体を接続する。"
  },
  "Snapshot": {
    "en": "An incremental backup that can restore a volume in any AZ and can be copied to another Region.",
    "ja": "増分 Backup。任意の AZ に Volume を復元でき、別 Region へ Copy することもできる。"
  },
  "SNS": {
    "en": "Push-based pub/sub and broadcasting; a common fan-out pattern sends one SNS message to multiple SQS queues.",
    "ja": "Push 型の Pub/Sub・ブロードキャスト。代表的な Fan-out は 1 つの SNS から複数の SQS へ配信する構成。"
  },
  "Sort Key": {
    "en": "Forms a composite primary key with the partition key and enables range queries within the same partition.",
    "ja": "Partition Key と複合 Primary Key を構成し、同じ Partition 内で Range Query を可能にする。"
  },
  "SPOF": {
    "en": "A component whose failure makes the entire system unavailable.",
    "ja": "そのコンポーネントの障害によってシステム全体が利用不能になる単一障害点。"
  },
  "SQL": {
    "en": "A language for defining, querying, and modifying data in relational databases.",
    "ja": "リレーショナルデータベースのデータを定義、検索、変更するための言語。"
  },
  "SQS": {
    "en": "A pull-based buffer for decoupling; Standard provides at-least-once delivery, while FIFO preserves order and deduplicates.",
    "ja": "Pull 型のバッファで疎結合を実現する。Standard は At-Least-Once、FIFO は順序保証と重複排除を提供する。"
  },
  "SRR": {
    "en": "Replicates S3 objects within the same Region according to configured rules.",
    "ja": "設定した Rule に従って、同じ Region 内で S3 Object を複製する。"
  },
  "SSL/TLS Certificate": {
    "en": "Proves a service's identity and enables TLS-encrypted connections.",
    "ja": "サービスの身元を証明し、TLS で暗号化された接続を可能にする。"
  },
  "Stateful": {
    "en": "Tracks permitted connections and their related return traffic.",
    "ja": "許可された接続と、それに関連する戻りトラフィックを追跡する。"
  },
  "Stateless": {
    "en": "Evaluates each direction independently without tracking connections.",
    "ja": "接続状態を追跡せず、各方向を独立して評価する。"
  },
  "Storage Gateway": {
    "en": "Lets on-premises applications access AWS storage through file, volume, or tape interfaces.",
    "ja": "On-Premises Application から File、Volume、Tape Interface を通じて AWS Storage へアクセスする。"
  },
  "Subnet": {
    "en": "A subnet belongs to one AZ; it is public only when its route table points to an Internet Gateway.",
    "ja": "Subnet は 1 つの AZ に属する。Public かどうかは Route Table が Internet Gateway を指すかで決まる。"
  },
  "Table": {
    "en": "Made of rows and columns in a relational database, and of items in DynamoDB.",
    "ja": "リレーショナルデータベースでは行と列、DynamoDB では Item で構成される。"
  },
  "Tape Gateway": {
    "en": "Replaces physical tape backup infrastructure with virtual tapes.",
    "ja": "物理 Tape の Backup 基盤を Virtual Tape で置き換える。"
  },
  "Task": {
    "en": "A running instance of a task definition; it can run once or be continuously maintained by a service.",
    "ja": "Task Definition を実際に実行した Instance。単発実行も、Service による継続維持も可能。"
  },
  "Task Definition": {
    "en": "Defines container images, CPU, memory, ports, and environment variables; it is the runtime template.",
    "ja": "Container Image、CPU、Memory、Port、Environment Variable を定義する実行テンプレート。"
  },
  "Temporary Credentials": {
    "en": "Time-limited credentials consisting of an access key, secret key, and session token.",
    "ja": "有効期限付きのアクセスキー、シークレットキー、セッショントークンで構成される認証情報。"
  },
  "Temporary Security Credentials": {
    "en": "Expire automatically and are used by roles, IAM Identity Center, and federation; prefer them over long-term IAM user keys.",
    "ja": "AWS 一時的セキュリティ認証情報（Access Key ID、Secret Access Key、Session Token で構成され、有効期限がある API 認証情報）"
  },
  "Throughput": {
    "en": "Measures data transferred per second; important for large sequential I/O.",
    "ja": "1 秒あたりのデータ転送量。大きなファイルのシーケンシャル I/O で重視される。"
  },
  "Tight Coupling": {
    "en": "Components depend directly on one another, increasing the risk of cascading failures and making scaling harder.",
    "ja": "Component が互いに直接依存し、Cascade Failure と Scaling の難しさを招きやすい。"
  },
  "TLS": {
    "en": "The modern protocol used to establish encrypted network connections.",
    "ja": "暗号化されたネットワーク接続を確立するための現行プロトコル。"
  },
  "Topic": {
    "en": "The logical entry point for publishing messages in SNS; one message can be delivered to multiple subscribers.",
    "ja": "SNS で Message を Publish する論理的な入口。1 つの Message を複数 Subscriber へ配信できる。"
  },
  "TOTP": {
    "en": "A short-lived code generated from a shared secret and the current time, not a fixed second password.",
    "ja": "時刻同期型ワンタイムパスワード（共有秘密と現在時刻から一定間隔で生成される、一度限りの認証コード）"
  },
  "Transit Gateway": {
    "en": "Centrally connects multiple VPCs and on-premises networks.",
    "ja": "複数の VPC と On-Premises Network を集中接続する。"
  },
  "Trigger": {
    "en": "An event source that starts Lambda or another automated workflow.",
    "ja": "Lambda または自動化 Workflow の実行を開始させる Event Source。"
  },
  "Trust Policy": {
    "en": "Defines who may assume a role; it does not replace the permissions policy that defines what the role session may do.",
    "ja": "誰が Role を Assume できるかを定義する。Role Session が実行できる操作を定める Permissions Policy の代わりにはならない。"
  },
  "Trusted Entity": {
    "en": "Identifies who may assume a role, such as an AWS service, account, user, role, or federated principal.",
    "ja": "Role を Assume できる主体を示す。AWS Service、Account、User、Role、Federated Principal などを指定できる。"
  },
  "Valkey": {
    "en": "One of the in-memory data-store engines supported by ElastiCache.",
    "ja": "ElastiCache がサポートする In-Memory Data Store Engine の 1 つ。"
  },
  "Versioning": {
    "en": "Keeps historical object versions to protect against accidental overwrites and deletions.",
    "ja": "Object の過去バージョンを保持し、誤った上書きや削除から保護する。"
  },
  "Vertex": {
    "en": "A node representing an entity in a graph database.",
    "ja": "Graph Database で Entity を表す Node。"
  },
  "VGW": {
    "en": "The traditional private-connectivity gateway attached to one VPC.",
    "ja": "1 つの VPC 側に接続する従来型の Private Connectivity Gateway。"
  },
  "Virtual Interface": {
    "en": "A logical Direct Connect interface, such as a private, public, or transit VIF.",
    "ja": "Direct Connect の論理 Interface。Private、Public、Transit VIF などがある。"
  },
  "Virtual MFA Device": {
    "en": "Linked through a QR code or secret configuration key; those values can generate TOTP codes and must be protected as credentials.",
    "ja": "仮想 MFA デバイス（認証アプリで TOTP コードを生成し、パスワードに加えて本人確認を行うソフトウェア認証器）"
  },
  "Visibility Timeout": {
    "en": "After an SQS message is read, it is temporarily hidden from other consumers; set it longer than actual processing time.",
    "ja": "SQS Message が読み取られると他の Consumer から一時的に見えなくなる。実際の処理時間より長く設定する。"
  },
  "VM": {
    "en": "Each VM usually includes a complete operating system; isolation is strong, but startup and resource overhead exceed containers.",
    "ja": "各 VM は通常完全な OS を含む。Isolation は強いが、起動時間と Resource Overhead は Container より大きい。"
  },
  "Volume Gateway": {
    "en": "Presents iSCSI volumes on premises and backs up their data to AWS.",
    "ja": "On-Premises に iSCSI Volume を提供し、そのデータを AWS へ Backup する。"
  },
  "VPC": {
    "en": "A logically isolated, Region-level network; CIDR planning, routing, security groups, and NACLs are core VPC concepts.",
    "ja": "Region レベルの論理的に分離されたネットワーク。CIDR 設計、Route、Security Group、NACL が中核要素。"
  },
  "VPC Endpoint": {
    "en": "Provides private access to supported AWS services or endpoint services.",
    "ja": "対応する AWS Service または Endpoint Service へプライベートアクセスを提供する。"
  },
  "VPN": {
    "en": "Protects network communication through an encrypted tunnel.",
    "ja": "暗号化 Tunnel を通じて Network Communication を保護する。"
  },
  "Web Application": {
    "en": "An application accessed through a browser, often built with ALB, EC2 or ECS, RDS, and S3.",
    "ja": "Browser から利用する Application。ALB、EC2/ECS、RDS、S3 などで構成されることが多い。"
  },
  "Write-Through": {
    "en": "Updates the cache whenever the database is written, keeping cached data fresh.",
    "ja": "Database への Write と同時に Cache を更新し、Cache Data の鮮度を保つ。"
  },
  "Zonal Resource": {
    "en": "Lives in a specific AZ; the architecture must use multiple AZs when it needs resilience to AZ failure.",
    "ja": "AWS ゾーナルリソース（特定のアベイラビリティーゾーンに配置されるリソース）"
  }
};

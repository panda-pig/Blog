export type AwsGlossaryNoteTranslation = {
  en: string;
  ja: string;
};

export const awsGlossaryNoteTranslations: Record<string, AwsGlossaryNoteTranslation> = {
  "ALB": {
    en: "Layer 7 HTTP/HTTPS; supports path-based and host-based routing, plus WebSocket.",
    ja: "レイヤー 7 の HTTP/HTTPS。パスベース、ホストベースのルーティングと WebSocket に対応。",
  },
  "API Gateway": {
    en: "A managed front door for APIs, not a VPC routing gateway.",
    ja: "API のマネージドなフロントドア。VPC のルーティングゲートウェイではない。",
  },
  "ASG": {
    en: "Maintains desired, minimum, and maximum instance counts; commonly paired with an ALB across multiple AZs.",
    ja: "希望・最小・最大のインスタンス数を維持し、通常は ALB と複数 AZ を組み合わせる。",
  },
  "Aurora": {
    en: "MySQL- and PostgreSQL-compatible, with storage replicated across multiple AZs; part of the RDS family.",
    ja: "MySQL/PostgreSQL 互換で、ストレージを複数 AZ に複製する RDS ファミリーのサービス。",
  },
  "Authentication": {
    en: "Verifies who a user or entity is.",
    ja: "ユーザーやエンティティが誰であるかを確認する。",
  },
  "Authorization": {
    en: "Determines which actions a principal is allowed to perform.",
    ja: "プリンシパルが実行できる操作を決定する。",
  },
  "Auto Scaling": {
    en: "Adds or removes instances based on metrics; Auto Scaling manages capacity while ELB distributes traffic.",
    ja: "メトリクスに基づいてインスタンスを増減する。容量は Auto Scaling、トラフィック分散は ELB が担当。",
  },
  "Availability": {
    en: "Whether a service can be accessed successfully when it is needed.",
    ja: "必要なときにサービスへ正常にアクセスできるかを示す。",
  },
  "AWS": {
    en: "A global cloud platform; exams emphasize security, reliability, elasticity, pay-as-you-go pricing, and the shared responsibility model.",
    ja: "グローバルなクラウドプラットフォーム。試験ではセキュリティ、信頼性、弾力性、従量課金、責任共有モデルが中心。",
  },
  "AWS Config": {
    en: "",
    ja: "",
  },
  "AWS KMS": {
    en: "Creates, controls, and audits keys used to encrypt data.",
    ja: "データ暗号化に使用するキーを作成、制御、監査する。",
  },
  "AWS Organizations": {
    en: "Manages accounts, OUs, SCPs, and consolidated billing; SCPs restrict permissions but do not grant them.",
    ja: "アカウント、OU、SCP、一括請求を管理する。SCP は権限を制限するだけで、付与はしない。",
  },
  "AZ": {
    en: "An isolated group of data centers within a Region; highly available architectures usually span at least two AZs.",
    ja: "Region 内で相互に分離されたデータセンター群。高可用性構成は通常 2 つ以上の AZ にまたがる。",
  },
  "Block Storage": {
    en: "Provides low-latency random reads and writes in blocks, similar to a disk.",
    ja: "ディスクのように、ブロック単位で低レイテンシのランダム読み書きを提供する。",
  },
  "Bucket": {
    en: "The object container and management boundary for permissions, Region, Versioning, and Lifecycle.",
    ja: "オブジェクトのコンテナであり、権限、Region、Versioning、Lifecycle の管理境界。",
  },
  "CIDR": {
    en: "Represents an IP address range using a prefix length.",
    ja: "プレフィックス長を使って IP アドレス範囲を表す。",
  },
  "CloudFormation": {
    en: "Declares and repeatedly creates AWS resources from templates; useful for standardization, version control, and disaster recovery rebuilds.",
    ja: "テンプレートで AWS リソースを宣言し、繰り返し作成する。標準化、バージョン管理、災害復旧時の再構築に適する。",
  },
  "CloudFormation Template": {
    en: "Declares the required AWS resources in YAML or JSON.",
    ja: "必要な AWS リソースを YAML または JSON で宣言する。",
  },
  "CloudFront": {
    en: "Caches and distributes content through global edge locations to reduce user latency.",
    ja: "世界中のエッジロケーションでコンテンツをキャッシュ・配信し、ユーザーのレイテンシを下げる。",
  },
  "CloudTrail": {
    en: "Records who performed which API action on what resource and when; answers who did what.",
    ja: "誰が、いつ、どのリソースに、どの API 操作を行ったかを記録し、「誰が何をしたか」に答える。",
  },
  "CloudWatch": {
    en: "Monitors metrics, logs, alarms, and dashboards; answers how the system is performing now.",
    ja: "Metrics、Logs、Alarm、Dashboard を監視し、「システムが現在どう動いているか」に答える。",
  },
  "CRR": {
    en: "Replicates objects to another Region according to configured rules.",
    ja: "設定したルールに従ってオブジェクトを別の Region へ複製する。",
  },
  "Database": {
    en: "A system for persistently organizing, querying, updating, and analyzing business data.",
    ja: "業務データを長期的に整理、検索、更新、分析するためのシステム。",
  },
  "Default Route": {
    en: "Usually written as 0.0.0.0/0 for IPv4 and ::/0 for IPv6.",
    ja: "IPv4 では通常 0.0.0.0/0、IPv6 では ::/0 と記述する。",
  },
  "DLQ": {
    en: "Stores messages that repeatedly failed processing so they can be isolated, investigated, and reprocessed.",
    ja: "処理に繰り返し失敗したメッセージを保存し、隔離、調査、再処理を可能にする。",
  },
  "Durability": {
    en: "Whether data remains intact over time without permanent loss.",
    ja: "データが長期間保持され、永続的に失われない度合い。",
  },
  "DynamoDB": {
    en: "",
    ja: "",
  },
  "EBS": {
    en: "Typically attached to EC2 like a virtual disk; a volume belongs to one AZ and snapshots are stored in S3.",
    ja: "通常は仮想ディスクとして EC2 にアタッチする。Volume は 1 つの AZ に属し、Snapshot は S3 に保存される。",
  },
  "EC2": {
    en: "You manage the operating system, patches, and runtime; suited to long-running workloads that need system-level control.",
    ja: "OS、パッチ、実行環境は利用者が管理する。長時間稼働し、システム制御が必要なワークロードに適する。",
  },
  "ECS": {
    en: "AWS-native container orchestration with generally lower learning and operational overhead than EKS.",
    ja: "AWS ネイティブのコンテナオーケストレーション。一般に EKS より学習・運用負荷が低い。",
  },
  "Edge Location": {
    en: "A global edge facility close to users; it is not a Region or an AZ.",
    ja: "ユーザーの近くに配置されたグローバルなエッジ施設。Region や AZ ではない。",
  },
  "ELB": {
    en: "Distributes traffic across targets and performs health checks; ALB and NLB are members of the ELB product family.",
    ja: "複数のターゲットへトラフィックを分散し、ヘルスチェックを行う。ALB と NLB は ELB 製品群に含まれる。",
  },
  "Encryption at Rest": {
    en: "Protects data that has already been stored on media.",
    ja: "ストレージ媒体に保存されているデータを保護する。",
  },
  "Encryption in Transit": {
    en: "Protects data while it travels across a network.",
    ja: "ネットワークを転送中のデータを保護する。",
  },
  "Explicit Deny": {
    en: "An explicit Deny takes precedence over every Allow during policy evaluation.",
    ja: "ポリシー評価では、明示的な Deny がすべての Allow より優先される。",
  },
  "Failover": {
    en: "Switches traffic or workloads to a standby resource when the primary resource fails.",
    ja: "主リソースの障害時に、トラフィックまたはワークロードを待機リソースへ切り替える。",
  },
  "Fargate": {
    en: "Not an orchestrator, but a serverless compute option for ECS and EKS that removes the need to manage EC2 instances.",
    ja: "オーケストレーターではなく、EC2 管理を不要にする ECS/EKS 向けの Serverless コンピューティングオプション。",
  },
  "File Storage": {
    en: "Provides directories, paths, and shared file-system semantics.",
    ja: "ディレクトリ、パス、共有ファイルシステムのセマンティクスを提供する。",
  },
  "Glacier Deep Archive": {
    en: "For long-term archives at the lowest cost, with the longest restore times.",
    ja: "長期アーカイブ向けで、コストは最も低いが復元時間は最も長い。",
  },
  "Glacier Flexible Retrieval": {
    en: "For archival data that can wait minutes to hours for retrieval.",
    ja: "取り出しに数分から数時間待てるアーカイブデータ向け。",
  },
  "Glacier Instant Retrieval": {
    en: "For rarely accessed data that still requires millisecond retrieval.",
    ja: "アクセス頻度は非常に低いが、ミリ秒単位の取り出しが必要なデータ向け。",
  },
  "Global Tables": {
    en: "DynamoDB replication across multiple Regions with a multi-active architecture.",
    ja: "Multi-Region・Multi-Active を実現する DynamoDB のレプリケーション機能。",
  },
  "HA": {
    en: "Reduces downtime through multiple AZs, redundancy, and automatic failover; it does not mean zero interruption.",
    ja: "複数 AZ、冗長化、自動フェイルオーバーで停止時間を減らすが、完全な無停止を意味しない。",
  },
  "IaC": {
    en: "Declares infrastructure with templates or code and manages it under version control.",
    ja: "テンプレートまたはコードでインフラを宣言し、バージョン管理する。",
  },
  "IAM": {
    en: "A global service for managing users, groups, roles, and policies; follow the principle of least privilege.",
    ja: "User、Group、Role、Policy を管理するグローバルサービス。最小権限の原則に従う。",
  },
  "IAM Policy": {
    en: "A JSON permission rule defining Effect, Action, Resource, and Condition; a policy is not itself an identity.",
    ja: "Effect、Action、Resource、Condition を定義する JSON の権限ルール。Policy 自体は Identity ではない。",
  },
  "IAM Role": {
    en: "Provides temporary credentials; prefer roles for EC2, Lambda, and cross-account access.",
    ja: "一時的な認証情報を提供する。EC2、Lambda、クロスアカウントアクセスでは Role を優先する。",
  },
  "Idempotency": {
    en: "Repeating the same request produces no additional side effects; common in queue, retry, and payment scenarios.",
    ja: "同じリクエストを繰り返しても追加の副作用が生じない性質。キュー、再試行、決済の問題で頻出。",
  },
  "IGW": {
    en: "Enables two-way internet communication for public-subnet resources; an instance still needs a public IP and correct routing.",
    ja: "Public Subnet のリソースとインターネット間の双方向通信を可能にする。インスタンスには Public IP と正しい Route も必要。",
  },
  "Instance Store": {
    en: "Temporary block storage on the physical host; data is lost when the instance stops or terminates.",
    ja: "物理ホスト上の一時的なブロックストレージ。インスタンスの Stop または Terminate でデータを失う。",
  },
  "IOPS": {
    en: "Measures read and write operations per second; important for random, small-block I/O.",
    ja: "1 秒あたりの読み書き操作数。ランダムな小ブロック I/O で重視される。",
  },
  "JOIN": {
    en: "Combines data from multiple relational tables using related keys.",
    ja: "関連キーを使って複数のリレーショナルテーブルのデータを結合する。",
  },
  "Lambda": {
    en: "Event-driven, automatically scales, and charges by invocation and duration; each run is limited to 15 minutes and is not suited to long-running processes.",
    ja: "イベント駆動で自動スケールし、呼び出し回数と実行時間で課金される。1 回の実行は最大 15 分で、長時間プロセスには不向き。",
  },
  "Least Privilege": {
    en: "Grants only the permissions required to perform the task.",
    ja: "作業の実行に必要な権限だけを付与する。",
  },
  "Lifecycle Policy": {
    en: "Moves data between storage classes, expires objects, and cleans up old versions according to rules.",
    ja: "ルールに従ってストレージクラスの移行、オブジェクトの期限切れ、旧バージョンの削除を行う。",
  },
  "Longest Prefix Match": {
    en: "The route with the most specific matching destination takes precedence.",
    ja: "宛先に最も具体的に一致するルートが優先される。",
  },
  "Loose Coupling": {
    en: "Lets components scale and recover independently; SQS is the most common exam example of decoupling.",
    ja: "コンポーネントを独立してスケール・復旧できる。試験では SQS が代表的な疎結合サービス。",
  },
  "MFA": {
    en: "Strengthens sign-in security by requiring two or more verification factors.",
    ja: "2 つ以上の認証要素を要求して、サインインの安全性を高める。",
  },
  "Mount Target": {
    en: "The network entry point for EFS in a subnet within an AZ.",
    ja: "ある AZ の Subnet 内に作成する EFS のネットワークエントリポイント。",
  },
  "Multi-AZ": {
    en: "Primarily provides high availability and automatic failover, not read scaling.",
    ja: "主目的は高可用性と自動フェイルオーバーであり、読み取り性能の向上ではない。",
  },
  "Multi-Region": {
    en: "Deploys across AWS Regions for Region-level disaster recovery, global low latency, or compliance.",
    ja: "Region レベルの災害復旧、グローバルな低レイテンシ、コンプライアンスのために複数 Region へ展開する。",
  },
  "NACL": {
    en: "Subnet-level and stateless, with both allow and deny rules; inbound and outbound rules must be configured explicitly.",
    ja: "Subnet レベルで Stateless。許可と拒否の両方を設定でき、Inbound と Outbound を個別に明示する必要がある。",
  },
  "NAT Gateway": {
    en: "Lets private-subnet resources initiate internet access without allowing unsolicited inbound connections; deployed in a public subnet.",
    ja: "Private Subnet からのインターネット向け通信を可能にし、外部からの新規接続は許可しない。Public Subnet に配置する。",
  },
  "NFS": {
    en: "A common shared-file protocol on Linux; EFS commonly uses TCP port 2049.",
    ja: "Linux で一般的な共有ファイルプロトコル。EFS は通常 TCP 2049 を使用する。",
  },
  "NoSQL": {
    en: "Does not mean no structure; it means a fixed relational-table model is not the only data model.",
    ja: "「構造がない」という意味ではなく、固定的なリレーショナルテーブルだけをデータモデルとしない。",
  },
  "Object": {
    en: "The storage unit in object storage, consisting of data, a key, metadata, and related attributes.",
    ja: "データ、Key、Metadata などで構成されるオブジェクトストレージの保存単位。",
  },
  "Object Key": {
    en: "The unique name of an object in a bucket; slashes only represent prefixes.",
    ja: "Bucket 内でオブジェクトを一意に識別する名前。スラッシュは Prefix の表現にすぎない。",
  },
  "Object Lock": {
    en: "Prevents an object from being modified or deleted during its retention period.",
    ja: "保持期間中、オブジェクトの変更や削除を防止する。",
  },
  "Object Storage": {
    en: "Stores data as objects with metadata and accesses it through APIs or HTTP.",
    ja: "データを Metadata 付きの Object として保存し、API または HTTP でアクセスする。",
  },
  "Partition Key": {
    en: "Determines the distribution of DynamoDB items and is the key element required by Query.",
    ja: "DynamoDB Item の分散を決め、Query で必ず指定するキー要素。",
  },
  "Permissions Policy": {
    en: "Determines which AWS actions a principal is allowed to perform.",
    ja: "プリンシパルが実行できる AWS アクションを決定する。",
  },
  "Point-in-Time Recovery (PITR)": {
    en: "Restores a database to a specific point within the retention window.",
    ja: "保持期間内の特定時点へデータベースを復元する。",
  },
  "Presigned URL": {
    en: "Provides temporary, expiring access within the permissions of the signer.",
    ja: "署名者の権限範囲内で、有効期限付きの一時アクセスを提供する。",
  },
  "Primary Key": {
    en: "A key that uniquely identifies a record or item.",
    ja: "1 件の Record または Item を一意に識別するキー。",
  },
  "Private Subnet": {
    en: "Has no direct route to an IGW; resources can initiate outbound access through NAT.",
    ja: "IGW への直接 Route を持たず、NAT 経由で外向き通信を開始できる。",
  },
  "PrivateLink": {
    en: "Provides private access to a specific service without connecting entire networks.",
    ja: "ネットワーク全体を接続せず、特定サービスへプライベートにアクセスする。",
  },
  "Public Subnet": {
    en: "Its route table has a direct route to an IGW; resources also need public addresses and security rules for internet communication.",
    ja: "Route Table が IGW への直接 Route を持つ。リソースのインターネット通信には Public Address とセキュリティルールも必要。",
  },
  "Query": {
    en: "A DynamoDB Query locates data by partition key and is usually more efficient than Scan.",
    ja: "DynamoDB Query は Partition Key でデータを絞り込み、通常は Scan より効率的。",
  },
  "RDS": {
    en: "AWS manages backups, patching, and infrastructure; Multi-AZ improves availability while Read Replicas scale reads.",
    ja: "AWS がバックアップ、パッチ、インフラを管理する。Multi-AZ は可用性を高め、Read Replica は読み取りを拡張する。",
  },
  "Read Replica": {
    en: "Primarily scales reads and reporting queries; replication is usually asynchronous and can span Regions.",
    ja: "主に読み取りとレポートクエリを拡張する。通常は非同期レプリケーションで、Region 間にも作成できる。",
  },
  "Redundancy": {
    en: "Reduces single points of failure by duplicating components and paths.",
    ja: "コンポーネントや経路を複製して単一障害点のリスクを下げる。",
  },
  "Region": {
    en: "An independent geographic area containing multiple AZs; cross-Region designs mainly address disaster recovery, compliance, and low latency.",
    ja: "複数 AZ を含む独立した地理的領域。Region 間構成は主に災害復旧、コンプライアンス、低レイテンシに使う。",
  },
  "Relational Database": {
    en: "Organizes data with tables, keys, and relationships, supporting SQL, joins, and transactions.",
    ja: "テーブル、キー、関係でデータを整理し、SQL、JOIN、トランザクションをサポートする。",
  },
  "Root User": {
    en: "Reserved for the small number of account tasks that only the root user can perform.",
    ja: "ルートユーザーでしか実行できない、少数のアカウント作業にのみ使用する。",
  },
  "Route 53": {
    en: "Provides DNS resolution, domain registration, health checks, and traffic routing.",
    ja: "DNS 解決、ドメイン登録、ヘルスチェック、トラフィックルーティングを提供する。",
  },
  "Route 53::2": {
    en: "Provides DNS, domain registration, and health checks; routing policies are a frequent SAA topic.",
    ja: "DNS、ドメイン登録、ヘルスチェックを提供する。Routing Policy は SAA の頻出項目。",
  },
  "Route Table": {
    en: "Determines the next hop for network traffic; it does not allow or deny individual connections.",
    ja: "ネットワークトラフィックの次の転送先を決める。個々の接続を許可・拒否するものではない。",
  },
  "RPO": {
    en: "The maximum amount of data loss, measured in time, that the business can tolerate.",
    ja: "業務が許容できる最大データ損失量を時間で表す。",
  },
  "RTO": {
    en: "The maximum time allowed to restore the business after a failure.",
    ja: "障害後に業務を復旧するまでに許容される最大時間。",
  },
  "S3": {
    en: "Stores data as objects in buckets with very high durability; it is not mounted to EC2 as a traditional block device.",
    ja: "Object を Bucket に保存し、非常に高い耐久性を持つ。従来の Block Device として EC2 にマウントするものではない。",
  },
  "S3 Intelligent-Tiering": {
    en: "For data with unknown or changing access patterns; automatically moves data between access tiers.",
    ja: "アクセスパターンが不明または変化するデータ向けで、アクセス階層を自動調整する。",
  },
  "S3 Standard": {
    en: "The default storage class for frequently accessed data, with multiple AZs and low latency.",
    ja: "頻繁にアクセスするデータ向けのデフォルトストレージクラス。複数 AZ と低レイテンシを提供する。",
  },
  "S3 Standard-IA": {
    en: "For infrequently accessed data that still needs millisecond retrieval; retrieval fees apply.",
    ja: "アクセス頻度は低いがミリ秒単位の取り出しが必要なデータ向け。取り出し料金が発生する。",
  },
  "Schema": {
    en: "Defines tables, columns, types, and constraints; DynamoDB still has a primary-key schema.",
    ja: "テーブル、列、型、制約を定義する。DynamoDB にも Primary Key の Schema がある。",
  },
  "Security Group": {
    en: "Instance-level and stateful, with allow rules only; return traffic is automatically permitted.",
    ja: "Instance レベルで Stateful。許可ルールのみを設定し、戻りトラフィックは自動的に許可される。",
  },
  "Serverless": {
    en: "Servers still exist, but users do not manage them; common examples include Lambda, Fargate, and DynamoDB.",
    ja: "Server が存在しないのではなく、利用者が基盤 Server を管理しない。代表例は Lambda、Fargate、DynamoDB。",
  },
  "SNS": {
    en: "Push-based pub/sub and broadcasting; a common fan-out pattern sends one SNS message to multiple SQS queues.",
    ja: "Push 型の Pub/Sub・ブロードキャスト。代表的な Fan-out は 1 つの SNS から複数の SQS へ配信する構成。",
  },
  "SPOF": {
    en: "A component whose failure makes the entire system unavailable.",
    ja: "そのコンポーネントの障害によってシステム全体が利用不能になる単一障害点。",
  },
  "SQL": {
    en: "A language for defining, querying, and modifying data in relational databases.",
    ja: "リレーショナルデータベースのデータを定義、検索、変更するための言語。",
  },
  "SQS": {
    en: "A pull-based buffer for decoupling; Standard provides at-least-once delivery, while FIFO preserves order and deduplicates.",
    ja: "Pull 型のバッファで疎結合を実現する。Standard は At-Least-Once、FIFO は順序保証と重複排除を提供する。",
  },
  "Stateful": {
    en: "Tracks permitted connections and their related return traffic.",
    ja: "許可された接続と、それに関連する戻りトラフィックを追跡する。",
  },
  "Stateless": {
    en: "Evaluates each direction independently without tracking connections.",
    ja: "接続状態を追跡せず、各方向を独立して評価する。",
  },
  "Subnet": {
    en: "A subnet belongs to one AZ; it is public only when its route table points to an Internet Gateway.",
    ja: "Subnet は 1 つの AZ に属する。Public かどうかは Route Table が Internet Gateway を指すかで決まる。",
  },
  "Table": {
    en: "Made of rows and columns in a relational database, and of items in DynamoDB.",
    ja: "リレーショナルデータベースでは行と列、DynamoDB では Item で構成される。",
  },
  "Temporary Credentials": {
    en: "Time-limited credentials consisting of an access key, secret key, and session token.",
    ja: "有効期限付きのアクセスキー、シークレットキー、セッショントークンで構成される認証情報。",
  },
  "Throughput": {
    en: "Measures data transferred per second; important for large sequential I/O.",
    ja: "1 秒あたりのデータ転送量。大きなファイルのシーケンシャル I/O で重視される。",
  },
  "TLS": {
    en: "The modern protocol used to establish encrypted network connections.",
    ja: "暗号化されたネットワーク接続を確立するための現行プロトコル。",
  },
  "Trust Policy": {
    en: "Determines who is allowed to assume an IAM role.",
    ja: "誰が IAM ロールを引き受けられるかを決定する。",
  },
  "Versioning": {
    en: "Keeps historical object versions to protect against accidental overwrites and deletions.",
    ja: "Object の過去バージョンを保持し、誤った上書きや削除から保護する。",
  },
  "Visibility Timeout": {
    en: "After an SQS message is read, it is temporarily hidden from other consumers; set it longer than actual processing time.",
    ja: "SQS Message が読み取られると他の Consumer から一時的に見えなくなる。実際の処理時間より長く設定する。",
  },
  "VPC": {
    en: "A logically isolated, Region-level network; CIDR planning, routing, security groups, and NACLs are core VPC concepts.",
    ja: "Region レベルの論理的に分離されたネットワーク。CIDR 設計、Route、Security Group、NACL が中核要素。",
  },
  "VPC Endpoint": {
    en: "Provides private access to supported AWS services or endpoint services.",
    ja: "対応する AWS Service または Endpoint Service へプライベートアクセスを提供する。",
  },
  "Access Key": {
    en: "Used for programmatic access; it should not be hard-coded or shared long term.",
    ja: "プログラムによるアクセスに使用する。ハードコードや長期共有は避ける。",
  },
  "Amazon GuardDuty": {
    en: "Continuously analyzes activity and threat intelligence to identify suspicious behavior.",
    ja: "アクティビティと脅威インテリジェンスを継続的に分析し、不審な動作を検出する。",
  },
  "AMI": {
    en: "A template for launching EC2 that contains an OS, software, and configuration; it can include one or more EBS snapshots.",
    ja: "OS、Software、設定を含む EC2 起動用テンプレート。1 つ以上の EBS Snapshot を含められる。",
  },
  "At-Least-Once Delivery": {
    en: "Messages can be delivered more than once, so consumers must be designed to be idempotent.",
    ja: "Message が重複配信される可能性があるため、Consumer は Idempotent に設計する必要がある。",
  },
  "Athena": {
    en: "",
    ja: "",
  },
  "Attribute": {
    en: "A field and its value within a DynamoDB item.",
    ja: "DynamoDB Item 内のフィールドと値。",
  },
  "Automated Backup": {
    en: "RDS automated backups combine snapshots and logs to support point-in-time recovery within the retention period.",
    ja: "RDS の自動バックアップは Snapshot と Log を組み合わせ、保持期間内の Point-in-Time Recovery を可能にする。",
  },
  "AWS Artifact": {
    en: "Provides AWS compliance reports and manages applicable agreements; it does not scan customer resources.",
    ja: "AWS のコンプライアンスレポートを取得し、対象の契約を管理する。顧客リソースのスキャンは行わない。",
  },
  "AWS Audit Manager": {
    en: "Organizes controls by audit framework and continuously collects evidence from the customer environment.",
    ja: "監査フレームワークに沿ってコントロールを整理し、顧客環境から証拠を継続的に収集する。",
  },
  "AWS Backup": {
    en: "Centrally manages backup and retention policies across multiple AWS services.",
    ja: "複数の AWS Service のバックアップと保持ポリシーを一元管理する。",
  },
  "AWS CLI": {
    en: "Calls AWS APIs from commands and scripts, making it suitable for routine operations and automation.",
    ja: "Command や Script から AWS API を呼び出し、定型運用や自動化に適する。",
  },
  "AWS Control Tower": {
    en: "Provides a landing zone, Account Factory, controls, and a governance dashboard.",
    ja: "Landing Zone、Account Factory、Controls、ガバナンス Dashboard を提供する。",
  },
  "AWS DMS": {
    en: "Migrates databases with minimal downtime through full load and ongoing replication.",
    ja: "Full Load と継続的な Replication により、ダウンタイムを抑えてデータベースを移行する。",
  },
  "AWS DRS": {
    en: "Continuously replicates servers at the block level and quickly launches recovery instances during a disaster.",
    ja: "Server を Block Level で継続複製し、災害時に復旧 Instance を迅速に起動する。",
  },
  "AWS Health Dashboard": {
    en: "Shows whether AWS service events, planned changes, and account notifications affect your resources.",
    ja: "AWS サービスイベント、計画変更、アカウント通知が自分のリソースへ影響するかを確認できる。",
  },
  "AWS SCT": {
    en: "Assesses and converts schemas and code objects for heterogeneous database migrations.",
    ja: "異種データベース移行のために Schema と Code Object を評価・変換する。",
  },
  "AWS SDK": {
    en: "Calls AWS service APIs from application code.",
    ja: "アプリケーションコードから AWS Service API を呼び出す。",
  },
  "AWS Secrets Manager": {
    en: "Securely stores passwords, tokens, and API keys and can rotate them automatically.",
    ja: "パスワード、トークン、API キーを安全に保存し、自動ローテーションにも対応する。",
  },
  "AWS Service Catalog": {
    en: "Lets users deploy approved products through controlled self-service.",
    ja: "企業が承認した製品カタログから、ユーザーが統制されたセルフサービスでデプロイできる。",
  },
  "AWS Shield": {
    en: "Protects AWS applications against DoS and DDoS attacks.",
    ja: "AWS 上のアプリケーションを DoS および DDoS 攻撃から保護する。",
  },
  "AWS Systems Manager": {
    en: "Centrally manages nodes, patches, commands, and operations automation.",
    ja: "ノード、パッチ、コマンド、運用自動化を一元管理する。",
  },
  "AWS Trusted Advisor": {
    en: "Provides best-practice recommendations for cost, performance, security, fault tolerance, and service quotas.",
    ja: "コスト、パフォーマンス、セキュリティ、耐障害性、サービスクォータについてベストプラクティスの推奨を提示する。",
  },
  "AWS WAF": {
    en: "Filters HTTP(S) requests with rules to defend against attacks such as SQL injection and XSS.",
    ja: "ルールで HTTP(S) リクエストを検査し、SQL インジェクションや XSS などを防御する。",
  },
  "BGP": {
    en: "A protocol for dynamically exchanging routes between networks.",
    ja: "ネットワーク間で Route を動的に交換するためのプロトコル。",
  },
  "Block Storage::2": {
    en: "Presents data blocks to an operating system for system disks and databases; EBS is the representative service.",
    ja: "データブロックを OS に提供し、システムディスクやデータベースに適する。代表例は EBS。",
  },
  "Block-level Replication": {
    en: "Continuously copies changed data blocks to reduce RPO.",
    ja: "変更されたデータ Block を継続的に複製して RPO を短縮する。",
  },
  "Cache Hit": {
    en: "The requested data is already in the cache and can be returned directly.",
    ja: "要求されたデータが Cache にあり、直接返せる状態。",
  },
  "Cache Miss": {
    en: "The requested data is not in the cache, so it must be fetched from the source database or service.",
    ja: "対象データが Cache にないため、元の Database または Service から取得する必要がある。",
  },
  "Cache-Aside": {
    en: "The application checks the cache first, then reads from the database and fills the cache on a miss.",
    ja: "Application が先に Cache を確認し、Miss 時に Database から読み取って Cache へ書き戻す。",
  },
  "CDN": {
    en: "Caches or distributes content from locations close to users.",
    ja: "ユーザーに近い拠点からコンテンツを Cache または配信する。",
  },
  "CGW": {
    en: "Represents the customer-side router, firewall, or VPN device.",
    ja: "顧客側の Router、Firewall、または VPN Device を表す。",
  },
  "Change Data Capture (CDC)": {
    en: "Continuously captures changes in the source database and replicates them to the target.",
    ja: "Source Database の変更を継続的に取得し、Target へ複製する。",
  },
  "Client VPN": {
    en: "Provides secure VPC access for individual remote users.",
    ja: "個人の Remote User に VPC への安全なアクセスを提供する。",
  },
  "CloudWatch Logs": {
    en: "Centrally collects and queries application, system, and Lambda logs.",
    ja: "Application、System、Lambda の Log を一元的に収集・検索する。",
  },
  "Compliance": {
    en: "When selecting a Region, first check regulatory, data-protection, and industry compliance requirements.",
    ja: "Region 選択では、規制、データ保護、業界コンプライアンス要件を先に確認する。",
  },
  "Container": {
    en: "Shares the host kernel, starts quickly, and is portable; lighter than a virtual machine.",
    ja: "Host Kernel を共有し、起動が速く可搬性が高い。VM より軽量。",
  },
  "Container Image": {
    en: "A read-only template; a container is a running instance of an image.",
    ja: "読み取り専用のテンプレート。Container は Image を実行した Instance。",
  },
  "CORS": {
    en: "A browser cross-origin rule, not an identity authorization mechanism.",
    ja: "Browser の Cross-Origin ルールであり、Identity の認可メカニズムではない。",
  },
  "DDoS": {
    en: "A denial-of-service attack launched simultaneously from many distributed sources.",
    ja: "多数の分散した送信元から同時に仕掛けられるサービス拒否攻撃。",
  },
  "Declarative": {
    en: "Describes the desired final resources while the tool determines the creation steps.",
    ja: "最終的に必要な Resource を記述し、具体的な作成手順は Tool に任せる。",
  },
  "Delete Marker": {
    en: "A marker that becomes the current version when an ordinary delete is performed with Versioning enabled.",
    ja: "Versioning 有効時の通常削除で作成され、Current Version となる削除マーカー。",
  },
  "Direct Connect": {
    en: "A dedicated connection that provides consistent bandwidth; encryption is not enabled by default.",
    ja: "安定した帯域幅を提供する専用接続。デフォルトでは暗号化されない。",
  },
  "DLM": {
    en: "Automates the creation, retention, and deletion of EBS snapshots and EBS-backed AMIs.",
    ja: "EBS Snapshot と EBS-backed AMI の作成、保持、削除を自動化する。",
  },
  "DMS": {
    en: "",
    ja: "",
  },
  "DNS": {
    en: "Resolves domain names to reachable network addresses or service endpoints.",
    ja: "Domain Name をアクセス可能な Network Address または Service Endpoint に解決する。",
  },
  "DynamoDB Accelerator (DAX)": {
    en: "A managed in-memory cache built for DynamoDB that can reduce suitable reads to microsecond latency.",
    ja: "DynamoDB 専用のマネージド In-Memory Cache。適切な Read をマイクロ秒単位まで高速化できる。",
  },
  "ECR": {
    en: "ECR stores container images; ECS and EKS run and orchestrate them.",
    ja: "ECR は Container Image を保存し、ECS/EKS が Image を実行・オーケストレーションする。",
  },
  "EDA": {
    en: "Components collaborate through events to reduce coupling; commonly combines EventBridge, SNS, SQS, and Lambda.",
    ja: "Component が Event を介して連携し、結合度を下げる。EventBridge、SNS、SQS、Lambda の組み合わせが一般的。",
  },
  "EFS": {
    en: "A Linux NFS file system that multiple EC2 instances can mount concurrently across AZs.",
    ja: "複数 AZ の複数 EC2 から同時に Mount できる Linux NFS ファイルシステム。",
  },
  "EKS": {
    en: "Prefer EKS when a scenario mentions Kubernetes, cross-cloud compatibility, or existing K8s workloads.",
    ja: "Kubernetes、クラウド間互換性、既存 K8s ワークロードが要件なら EKS を優先する。",
  },
  "Elastic IP": {
    en: "A static public IPv4 address that the customer can allocate and reassociate.",
    ja: "利用者が割り当て、別リソースへ再関連付けできる静的 Public IPv4 Address。",
  },
  "ElastiCache": {
    en: "A general-purpose backend cache that reduces repeated database reads.",
    ja: "Database への重複 Read を減らす汎用 Backend Cache。",
  },
  "Ephemeral Port": {
    en: "A short-lived dynamic client port; NACLs often need rules allowing return traffic on these ports.",
    ja: "Client が短時間使用する動的 Port。NACL では戻りトラフィック用に許可が必要になることが多い。",
  },
  "EventBridge": {
    en: "Matches and routes events by rules, making it suitable for event-driven architectures and SaaS integrations.",
    ja: "Rule に基づいて Event を一致・転送し、Event-Driven Architecture や SaaS Integration に適する。",
  },
  "Execution Role": {
    en: "Controls which AWS resources Lambda can access at runtime; it does not control who can invoke the function.",
    ja: "Lambda 実行時にアクセスできる AWS Resource を決める。誰が Lambda を Invoke できるかは決めない。",
  },
  "Federation": {
    en: "Uses an external identity to sign in to AWS without creating another long-lived account.",
    ja: "外部 ID を使って AWS にサインインし、長期アカウントの重複作成を避ける。",
  },
  "Foreign Key": {
    en: "References the primary key of another table to establish a relationship.",
    ja: "別 Table の Primary Key を参照して関係を作る。",
  },
  "Global Accelerator": {
    en: "Accelerates global TCP/UDP traffic and shifts traffic between endpoints based on health.",
    ja: "Global TCP/UDP を高速化し、Health に基づいて Endpoint を切り替える。",
  },
  "Hybrid Cloud": {
    en: "Combines on-premises data centers with public cloud; Outposts and Direct Connect commonly appear in these scenarios.",
    ja: "On-Premises Data Center と Public Cloud を連携する。関連シナリオでは Outposts、Direct Connect が頻出。",
  },
  "IAM Access Analyzer": {
    en: "Analyzes external access, policies, and unused permissions to help enforce least privilege.",
    ja: "外部アクセス、ポリシー、未使用アクセスを分析し、最小権限の実現を支援する。",
  },
  "IAM User": {
    en: "A long-term identity that can have a password and access keys; applications and AWS services should usually avoid long-term user keys.",
    ja: "Password と Access Key を持てる長期 Identity。Application や AWS Service では通常、長期 User Key を避ける。",
  },
  "Item": {
    en: "A record in a DynamoDB table, composed of multiple attributes.",
    ja: "複数の Attribute で構成される DynamoDB Table の 1 Record。",
  },
  "Managed Service": {
    en: "AWS operates part of the underlying stack, while users may still configure capacity, versions, and networking.",
    ja: "基盤運用の一部を AWS が担当するが、利用者が容量、Version、Network を設定する場合もある。",
  },
  "Manual Snapshot": {
    en: "A user-created backup of database state at a specific time, retained until explicitly deleted.",
    ja: "利用者が特定時点の Database 状態を手動で保存する Backup。明示的に削除するまで保持される。",
  },
  "Metadata": {
    en: "Describes an object's content and properties; changing user metadata usually requires rewriting the object.",
    ja: "Object の内容や属性を説明する。User Metadata の変更には通常 Object の再書き込みが必要。",
  },
  "Multipart Upload": {
    en: "Uploads a large object in parallel parts; required for objects larger than 5 GB.",
    ja: "大きな Object を複数 Part に分けて並列 Upload する。5 GB を超える場合は必須。",
  },
  "NLB": {
    en: "Layer 4 TCP/UDP/TLS; suited to extremely high performance, ultra-low latency, and static IP requirements.",
    ja: "レイヤー 4 の TCP/UDP/TLS。非常に高い性能、超低レイテンシ、固定 IP の要件に適する。",
  },
  "Object Storage::2": {
    en: "Accessed by object key rather than traditional disk blocks; S3 is the representative service.",
    ja: "従来のディスクブロックではなくオブジェクトキーでアクセスする。代表例は S3。",
  },
  "Object Tags": {
    en: "Managed separately from object metadata and used for classification, lifecycle rules, and permission conditions.",
    ja: "Object Metadata とは別に管理でき、分類、Lifecycle、権限 Condition に利用する。",
  },
  "On-premises": {
    en: "A data-center and server environment owned and managed by the organization.",
    ja: "企業自身が所有・管理するデータセンターと Server の環境。",
  },
  "Orchestration": {
    en: "Handles deployment, scaling, scheduling, networking, and failure recovery; ECS and EKS are orchestration services.",
    ja: "Deployment、Scaling、Scheduling、Network、障害復旧を管理する。ECS と EKS は Orchestration Service。",
  },
  "Pub/Sub": {
    en: "Publishers do not need to know their subscribers; suitable for one-to-many broadcasting.",
    ja: "Publisher は Subscriber を知る必要がなく、1 対多のブロードキャストに適する。",
  },
  "Pull": {
    en: "Consumers actively retrieve messages; SQS is a typical pull-based service.",
    ja: "Consumer が Message を能動的に取得する。SQS は典型的な Pull 型。",
  },
  "Purpose-Built Database": {
    en: "Selects the database best suited to the data model and access pattern.",
    ja: "Data Model と Access Pattern に最も適した Database を選択する考え方。",
  },
  "Push": {
    en: "The service actively sends messages to subscribers; SNS is typically push-based.",
    ja: "Service が Subscriber へ能動的に Message を送る。SNS は典型的な Push 型。",
  },
  "Queue": {
    en: "Messages are generally processed by one consumer; queues provide ordering, buffering, and load smoothing.",
    ja: "Message は通常 1 つの Consumer が処理し、待ち行列、Buffer、負荷平準化に使う。",
  },
  "S3 Access Point": {
    en: "Provides independent access endpoints and policies for different applications or teams.",
    ja: "Application や Team ごとに独立した Access Endpoint と Policy を提供する。",
  },
  "S3 File Gateway": {
    en: "Maps local NFS or SMB files to objects in S3.",
    ja: "On-Premises の NFS/SMB File を S3 Object にマッピングする。",
  },
  "S3 One Zone-IA": {
    en: "Lower-cost, single-AZ storage for infrequently accessed data that can be recreated.",
    ja: "単一 AZ の低コストストレージ。再作成可能でアクセス頻度の低いデータに適する。",
  },
  "S3 Outposts": {
    en: "Provides S3 object storage on Outposts at the customer's location.",
    ja: "顧客拠点の Outposts 上で S3 Object Storage を提供する。",
  },
  "Scale Out / In": {
    en: "Scales by adding or removing instances; it is more elastic and more common in cloud architecture exams.",
    ja: "Instance 数を増減して Scale する。Cloud Architecture では弾力性が高く、試験でも頻出。",
  },
  "Scan": {
    en: "Reads many items before filtering and usually consumes more read capacity than Query.",
    ja: "多数の Item を読み取ってから Filter するため、通常は Query より多くの Read Capacity を消費する。",
  },
  "Service": {
    en: "Continuously maintains a desired number of tasks and can integrate with load balancing and auto scaling.",
    ja: "指定数の Task を継続維持し、Load Balancing や Auto Scaling と組み合わせられる。",
  },
  "Session Manager": {
    en: "Creates controlled sessions without opening inbound SSH or RDP ports.",
    ja: "SSH や RDP の受信ポートを開かずに、管理されたセッションを確立する。",
  },
  "Site-to-Site VPN": {
    en: "Connects complete networks through encrypted IPsec tunnels.",
    ja: "暗号化された IPsec Tunnel でネットワーク全体を接続する。",
  },
  "Snapshot": {
    en: "An incremental backup that can restore a volume in any AZ and can be copied to another Region.",
    ja: "増分 Backup。任意の AZ に Volume を復元でき、別 Region へ Copy することもできる。",
  },
  "Sort Key": {
    en: "Forms a composite primary key with the partition key and enables range queries within the same partition.",
    ja: "Partition Key と複合 Primary Key を構成し、同じ Partition 内で Range Query を可能にする。",
  },
  "SSL/TLS Certificate": {
    en: "Proves a service's identity and enables TLS-encrypted connections.",
    ja: "サービスの身元を証明し、TLS で暗号化された接続を可能にする。",
  },
  "Storage Gateway": {
    en: "Lets on-premises applications access AWS storage through file, volume, or tape interfaces.",
    ja: "On-Premises Application から File、Volume、Tape Interface を通じて AWS Storage へアクセスする。",
  },
  "Tape Gateway": {
    en: "Replaces physical tape backup infrastructure with virtual tapes.",
    ja: "物理 Tape の Backup 基盤を Virtual Tape で置き換える。",
  },
  "Task": {
    en: "A running instance of a task definition; it can run once or be continuously maintained by a service.",
    ja: "Task Definition を実際に実行した Instance。単発実行も、Service による継続維持も可能。",
  },
  "Task Definition": {
    en: "Defines container images, CPU, memory, ports, and environment variables; it is the runtime template.",
    ja: "Container Image、CPU、Memory、Port、Environment Variable を定義する実行テンプレート。",
  },
  "Transit Gateway": {
    en: "Centrally connects multiple VPCs and on-premises networks.",
    ja: "複数の VPC と On-Premises Network を集中接続する。",
  },
  "VGW": {
    en: "The traditional private-connectivity gateway attached to one VPC.",
    ja: "1 つの VPC 側に接続する従来型の Private Connectivity Gateway。",
  },
  "Virtual Interface": {
    en: "A logical Direct Connect interface, such as a private, public, or transit VIF.",
    ja: "Direct Connect の論理 Interface。Private、Public、Transit VIF などがある。",
  },
  "Volume Gateway": {
    en: "Presents iSCSI volumes on premises and backs up their data to AWS.",
    ja: "On-Premises に iSCSI Volume を提供し、そのデータを AWS へ Backup する。",
  },
  "VPN": {
    en: "Protects network communication through an encrypted tunnel.",
    ja: "暗号化 Tunnel を通じて Network Communication を保護する。",
  },
  "ACM": {
    en: "Centrally provisions, deploys, and renews SSL/TLS certificates.",
    ja: "SSL/TLS 証明書の発行、デプロイ、更新を一元管理する。",
  },
  "Agility": {
    en: "The ability to quickly create, modify, and deploy resources as business needs change.",
    ja: "Business の変化に合わせて Resource を迅速に作成、変更、Deployment できる能力。",
  },
  "Amazon Detective": {
    en: "Investigates security incidents through visual relationships and timelines.",
    ja: "関係性の可視化とタイムラインを使って、セキュリティインシデントを調査する。",
  },
  "Amazon Inspector": {
    en: "Continuously scans workloads for software vulnerabilities and CVEs.",
    ja: "ワークロードを継続的にスキャンし、ソフトウェアの脆弱性や CVE を検出する。",
  },
  "Amazon Macie": {
    en: "Uses machine learning to discover sensitive data such as PII in S3.",
    ja: "機械学習を使って、S3 内の PII などの機密データを検出する。",
  },
  "Anycast IP": {
    en: "The same IP is advertised from multiple network locations so users enter through a nearby point.",
    ja: "同じ IP を複数の Network Location から広告し、User を近い入口へ導く。",
  },
  "API": {
    en: "An interface through which software systems call each other and exchange data.",
    ja: "Software System 間で呼び出しや Data Exchange を行うための Interface。",
  },
  "Auto-assign public IPv4": {
    en: "Controls only whether an instance automatically receives a public IPv4 address; it does not by itself make a subnet public.",
    ja: "Instance が Public IPv4 を自動取得するかだけを制御し、それ単独では Subnet の Public/Private を決めない。",
  },
  "AWS API": {
    en: "Every method of managing AWS resources ultimately interacts with AWS APIs.",
    ja: "AWS Resource を管理するどの手段も、最終的には AWS API とやり取りする。",
  },
  "AWS Batch": {
    en: "Runs large numbers of queued, non-real-time compute jobs and automatically schedules and scales compute resources.",
    ja: "大量の非リアルタイム Compute Job を Queue 実行し、Compute Resource の Scheduling と Scaling を自動化する。",
  },
  "AWS License Manager": {
    en: "Tracks BYOL and hybrid-environment license usage and helps prevent overuse.",
    ja: "BYOL とハイブリッド環境のライセンス使用状況を追跡し、超過利用を防ぐ。",
  },
  "AWS Management Console": {
    en: "A web-based graphical interface for managing AWS services.",
    ja: "Web の Graphical Interface から AWS Service を管理する。",
  },
  "AWS Security Hub": {
    en: "Aggregates and standardizes findings from multiple security services.",
    ja: "複数のセキュリティサービスからの検出結果を集約し、標準化する。",
  },
  "AWS Well-Architected Tool": {
    en: "Reviews workloads against the six pillars and records risks and milestones.",
    ja: "6 本の柱に基づいてワークロードをレビューし、リスクと Milestone を記録する。",
  },
  "Batch Processing": {
    en: "Processes groups of jobs without requiring immediate responses; common for reporting, simulations, and ETL.",
    ja: "即時応答を必要とせず、Job をまとめて処理する。Report、Simulation、ETL でよく使う。",
  },
  "Business Continuity": {
    en: "Ensures critical business operations can continue during failures or disasters.",
    ja: "障害や災害の発生時も重要な Business Operation を継続できるようにする。",
  },
  "Cascade Failure": {
    en: "A failure that propagates downstream; queues, retries, rate limits, and circuit breakers reduce the risk.",
    ja: "1 つの Component の障害が下流へ連鎖する現象。Queue、Retry、Rate Limit、Circuit Breaker でリスクを下げる。",
  },
  "Cluster": {
    en: "A group of resources that jointly provide compute or orchestration capacity; both ECS and EKS use the cluster concept.",
    ja: "Compute または Orchestration 能力を共同で提供する Resource 群。ECS と EKS の両方で Cluster を使う。",
  },
  "Consumer": {
    en: "The party that reads and processes messages; retries and idempotency must be considered when processing fails.",
    ja: "Message を読み取って処理する側。処理失敗時は Retry と Idempotency を考慮する。",
  },
  "Data Residency": {
    en: "Requires data to be stored in a specified country, Region, or location; often affects Region and Outposts selection.",
    ja: "Data を指定された国、地域、場所に保存する要件。Region や Outposts の選択に影響する。",
  },
  "Dedicated Host": {
    en: "Provides visibility and control over an entire physical server, often for license compliance.",
    ja: "物理 Server 全体の可視性と制御を提供し、License Compliance でよく使われる。",
  },
  "Dedicated Instance": {
    en: "Runs instances on single-tenant hardware without giving the customer control of the specific physical host.",
    ja: "Single-Tenant Hardware で Instance を実行するが、特定の物理 Host を利用者が制御するわけではない。",
  },
  "Deployment": {
    en: "Releases an application, configuration, or version into a runtime environment.",
    ja: "Application、Configuration、Version を実行環境へリリースする。",
  },
  "Document Database": {
    en: "Stores semi-structured and nested data as JSON-like documents.",
    ja: "半構造化データや Nested Data を JSON に似た Document として保存する。",
  },
  "DoS": {
    en: "Usually exhausts a target service's resources from a single source.",
    ja: "通常は単一の送信元から対象サービスのリソースを枯渇させる。",
  },
  "Elastic Beanstalk": {
    en: "A PaaS-style service that configures EC2, ALB, Auto Scaling, and more after code upload; the underlying resources remain visible and manageable.",
    ja: "Code を Upload すると EC2、ALB、Auto Scaling などを自動構成する PaaS 型 Service。基盤 Resource は引き続き確認・管理できる。",
  },
  "Event Source Mapping": {
    en: "Configuration that makes Lambda poll event sources such as SQS, Kinesis, and DynamoDB Streams.",
    ja: "Lambda が SQS、Kinesis、DynamoDB Streams などの Event Source を Poll するための設定。",
  },
  "FaaS": {
    en: "Uses functions as the unit of deployment and execution; Lambda is the typical AWS FaaS service.",
    ja: "Function を Deployment と実行の単位にする。Lambda は AWS の代表的な FaaS。",
  },
  "FSx": {
    en: "",
    ja: "",
  },
  "Fully Managed Service": {
    en: "AWS takes on more operational work; this describes a degree of management, not one strict product category.",
    ja: "より多くの運用作業を AWS が担当する。厳密に統一された製品分類ではなく、管理範囲の程度を示す。",
  },
  "Graph Database": {
    en: "Represents and queries complex relationships using vertices, edges, and properties.",
    ja: "Vertex、Edge、Property を使って複雑な関係を表現・検索する。",
  },
  "GWLB": {
    en: "",
    ja: "",
  },
  "IAM Group": {
    en: "Assigns policies to multiple IAM users as a group.",
    ja: "複数の IAM ユーザーへポリシーをまとめて割り当てる。",
  },
  "IAM Identity Center": {
    en: "Centrally manages workforce access to multiple AWS accounts and applications.",
    ja: "従業員による複数の AWS アカウントとアプリケーションへのアクセスを一元管理する。",
  },
  "Imperative": {
    en: "Explicitly describes each step of how an operation should be performed.",
    ja: "処理をどのように実行するか、各 Step を明示的に記述する。",
  },
  "Infrastructure": {
    en: "The underlying compute, networking, storage, security, and related resources.",
    ja: "Compute、Network、Storage、Security などの基盤 Resource の総称。",
  },
  "Isolation": {
    en: "Separates customers or workloads through virtualization, permissions, and network boundaries.",
    ja: "Virtualization、Permission、Network Boundary によって異なる顧客や Workload を分離する。",
  },
  "K8s": {
    en: "Kubernetes is an open-source platform; EKS is the AWS-managed Kubernetes service.",
    ja: "Kubernetes は Open-Source Platform、EKS は AWS のマネージド Kubernetes Service。",
  },
  "Link Aggregation Group": {
    en: "Aggregates compatible Direct Connect connections; bandwidth aggregation and site redundancy must be considered separately.",
    ja: "互換性のある Direct Connect Connection を集約する。帯域幅の集約と Site 冗長化は分けて検討する。",
  },
  "Log Group": {
    en: "Organizes multiple log streams by application or resource and defines their retention period.",
    ja: "Application または Resource 単位で複数の Log Stream を整理し、保持期間を設定する。",
  },
  "Log Stream": {
    en: "A sequence of log events from one specific source, such as a Lambda execution environment.",
    ja: "特定の 1 Source から出る一連の Log Event。例として 1 つの Lambda 実行環境がある。",
  },
  "Low Latency": {
    en: "Emphasizes response speed rather than throughput; common when choosing Regions, edge locations, and caches.",
    ja: "Throughput ではなく Request の応答速度を重視する。Region、Edge Location、Cache 選択でよく使う。",
  },
  "Memcached": {
    en: "A lightweight distributed in-memory caching engine.",
    ja: "機能を絞った軽量な分散 In-Memory Cache Engine。",
  },
  "Multi-Tenancy": {
    en: "Multiple customers share underlying infrastructure while remaining logically isolated; common in cloud computing.",
    ja: "複数顧客が基盤 Infrastructure を共有しつつ論理的に分離される、Cloud Computing の一般的な Model。",
  },
  "Outposts": {
    en: "Deploys AWS infrastructure and services in a customer's data center for low latency, data residency, and hybrid cloud.",
    ja: "低レイテンシ、Data Residency、Hybrid Cloud のために、顧客 Data Center へ AWS Infrastructure と Service を配置する。",
  },
  "PII": {
    en: "Data that can directly or indirectly identify an individual.",
    ja: "個人を直接または間接的に特定できるデータ。",
  },
  "Producer": {
    en: "The party that creates and sends messages or events.",
    ja: "Message または Event を作成して送信する側。",
  },
  "Provisioning": {
    en: "Creates and configures infrastructure resources; deployment focuses more on releasing applications or versions.",
    ja: "Infrastructure Resource を作成・設定する。Deployment は Application や Version のリリースに重点を置く。",
  },
  "Redis OSS": {
    en: "Supports rich data structures, replication, leaderboards, sessions, and other use cases.",
    ja: "豊富な Data Structure、Replication、Leaderboard、Session などをサポートする。",
  },
  "Registry": {
    en: "Stores, versions, and distributes container images; ECR is the AWS service for this purpose.",
    ja: "Container Image を保存、Version 管理、配布する。AWS では ECR が該当する。",
  },
  "S3 Express One Zone": {
    en: "A single-AZ object storage class designed for extremely high performance.",
    ja: "単一 AZ で非常に高い性能を提供する Object Storage Class。",
  },
  "SageMaker": {
    en: "",
    ja: "",
  },
  "Scale Up / Down": {
    en: "Scales by increasing or decreasing one machine's capacity; it can require downtime and has a single-machine limit.",
    ja: "1 台の Machine の性能を上げ下げして Scale する。停止が必要な場合があり、単体性能に上限がある。",
  },
  "Security Finding": {
    en: "A risk record produced by a security service, usually with severity and remediation guidance.",
    ja: "セキュリティサービスが生成するリスク記録で、通常は重要度と推奨対応を含む。",
  },
  "Self-Managed": {
    en: "The user handles installation, patching, backups, scaling, and high availability, as with a database operated on EC2.",
    ja: "利用者が Installation、Patch、Backup、Scaling、High Availability を担当する。EC2 上の自前 Database が例。",
  },
  "SRR": {
    en: "Replicates S3 objects within the same Region according to configured rules.",
    ja: "設定した Rule に従って、同じ Region 内で S3 Object を複製する。",
  },
  "Tight Coupling": {
    en: "Components depend directly on one another, increasing the risk of cascading failures and making scaling harder.",
    ja: "Component が互いに直接依存し、Cascade Failure と Scaling の難しさを招きやすい。",
  },
  "Topic": {
    en: "The logical entry point for publishing messages in SNS; one message can be delivered to multiple subscribers.",
    ja: "SNS で Message を Publish する論理的な入口。1 つの Message を複数 Subscriber へ配信できる。",
  },
  "Trigger": {
    en: "An event source that starts Lambda or another automated workflow.",
    ja: "Lambda または自動化 Workflow の実行を開始させる Event Source。",
  },
  "Valkey": {
    en: "One of the in-memory data-store engines supported by ElastiCache.",
    ja: "ElastiCache がサポートする In-Memory Data Store Engine の 1 つ。",
  },
  "Write-Through": {
    en: "Updates the cache whenever the database is written, keeping cached data fresh.",
    ja: "Database への Write と同時に Cache を更新し、Cache Data の鮮度を保つ。",
  },
  "Compute Resource": {
    en: "CPU, memory, GPU, running instances, and other resources required to perform computation.",
    ja: "CPU、Memory、GPU、実行 Instance など、計算処理に必要な Resource。",
  },
  "Dependency": {
    en: "A library or component required by an application; container images usually package dependencies together.",
    ja: "Application の実行に必要な Library または Component。Container Image は通常 Dependency もまとめて Package する。",
  },
  "DocumentDB": {
    en: "Designed for MongoDB-compatible workloads and complex document data.",
    ja: "MongoDB 互換 Workload と複雑な Document Data 向け。",
  },
  "Edge": {
    en: "A relationship connecting two vertices in a graph database.",
    ja: "Graph Database で 2 つの Vertex をつなぐ関係。",
  },
  "Environment": {
    en: "Can mean development, testing, or production, or the overall runtime conditions an application depends on.",
    ja: "Development、Test、Production の各環境、または Application が依存する実行条件全体を指す。",
  },
  "GDPR": {
    en: "Protects personal data and privacy in the European Union; exact requirements must be confirmed for the business and applicable law.",
    ja: "EU の個人 Data と Privacy を保護する規則。具体的要件は Business と適用法に応じて確認する。",
  },
  "Lightsail": {
    en: "Simple fixed-price bundles for small websites and beginner projects; complex architectures usually use EC2.",
    ja: "固定料金で構成が簡単。小規模 Web Site や入門 Project に適し、複雑な Architecture では通常 EC2 を選ぶ。",
  },
  "Neptune": {
    en: "Designed for traversing complex relationships, fraud detection, and knowledge graphs.",
    ja: "複雑な Relationship Traversal、Fraud Detection、Knowledge Graph 向け。",
  },
  "PaaS": {
    en: "Developers mainly manage applications and data while the platform manages the runtime and infrastructure.",
    ja: "Developer は主に Application と Data を管理し、Platform が Runtime と Infrastructure を担当する。",
  },
  "Portability": {
    en: "The ability to move and run an application across environments; containers commonly improve portability.",
    ja: "Application を異なる Environment 間で移動・実行できる能力。Container は Portability 向上によく使われる。",
  },
  "Runtime": {
    en: "The software environment required to execute a program, such as Python, Java, or a container runtime.",
    ja: "Program 実行に必要な Software Environment。Python、Java、Container Runtime など。",
  },
  "Simulation": {
    en: "Usually a compute-intensive batch workload; AWS Batch and Spot Instances are common options.",
    ja: "通常は Compute Intensive な Batch Workload。AWS Batch と Spot Instance を検討できる。",
  },
  "Vertex": {
    en: "A node representing an entity in a graph database.",
    ja: "Graph Database で Entity を表す Node。",
  },
  "VM": {
    en: "Each VM usually includes a complete operating system; isolation is strong, but startup and resource overhead exceed containers.",
    ja: "各 VM は通常完全な OS を含む。Isolation は強いが、起動時間と Resource Overhead は Container より大きい。",
  },
  "Web Application": {
    en: "An application accessed through a browser, often built with ALB, EC2 or ECS, RDS, and S3.",
    ja: "Browser から利用する Application。ALB、EC2/ECS、RDS、S3 などで構成されることが多い。",
  },
  "Managed Blockchain": {
    en: "A managed service for verifiable, tamper-resistant ledgers shared across multiple organizations.",
    ja: "複数組織で共有する、検証可能で改ざん耐性の高い Ledger 向けマネージドサービス。",
  },
};

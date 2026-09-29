---
title: "SAA 試験直前チェック"
fullName: "SAA Final Review"
description: "頻出 Architecture 分野を順に復習し、設問の優先順位に反する選択肢を除外します。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: ja
topicKey: "SAA 考前速查"
frequency: "阶段性总结"
date: 2026-08-01
updated: 2026-09-29
tags: ["saa-c03", "SAA 考前速查", "AWS"]
notionId: 3a6964dc-ce4a-817c-860b-f61fe547c268
notionUrl: https://app.notion.com/p/3a6964dcce4a817c860bf61fe547c268
notionUpdated: "2026-09-28T08:57:47.312Z"
---

## 復習順序

1. 頻出比較
2. VPC と Networking
3. S3 / EBS / EFS
4. RDS / Aurora / DynamoDB
5. EC2 / Auto Scaling / ELB / Lambda
6. SQS / SNS / EventBridge
7. IAM / KMS / Organizations
8. CloudWatch / CloudTrail / Config / AWS Health
9. Artifact / Audit Manager / Control Tower
10. High Availability、Disaster Recovery、RTO / RPO
11. Cost と Performance の Trade-off

## 試験直前セルフチェック

- Keyword から候補を 2 つまで絞れます。
- 他の選択肢が要件に合わない理由を説明できます。
- 最小運用、最高可用性、最低 Cost などの優先順位を識別できます。
- 3 層、Event-Driven、Multi-Account Governance の代表 Architecture を描けます。

## 新規 Topic の自己確認

- 3 段階と 7R で Migration を説明し、Evaluator、Discovery、Migration Hub、Transform MGN、DMS、DataSync、Transfer Family を区別できる。
- AppSync、Amplify、Connect、SES、3 種類の WorkSpaces Delivery、IoT Core の Keyword を区別できる。
- 旧名称 Application Migration Service、AppStream 2.0、WorkSpaces Web を現在の Service 名へ対応付けられる。
- Root、IAM User、Group、Policy、Role、Identity Center を区別し、Group は入れ子不可、User は複数 Group 可と説明できる。
- Implicit Deny、Explicit Deny、Managed / Inline / Resource-based Policy、Principal を説明できる。
- Password Policy、MFA、長期 Access Key、Session Token を含む Temporary Credentials を区別できる。
- Resource 可視性を Account → Identity → Region → Permission → Filter / State で調査できる。

+## 最新の試験補足

1. **HA、Read Scaling、Cache、Backup / DR** を分け、1 つの仕組みで全部を答えません。
2. ELB Active、ASG InService、Target Registered、Target Healthy は別状態です。
3. DNS Policy は Answer を選び、Request を Proxy しません。TTL が切替を遅らせます。
4. At-least-once Delivery では Consumer の Idempotency、DLQ、Observability、Poison Message 対策が必要です。
5. Savings Plans / Regional RI は価格、Capacity Reservation は容量、Dedicated Host は分離と Host Control です。
6. Serverless でも Quota、Cold Start、State、Retry、Cost の設計は残ります。

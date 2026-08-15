---
title: "SAA 考前速查"
fullName: "SAA Final Review"
description: "按固定顺序复习高频架构领域，并练习排除违反题目优先级的选项。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: zh
topicKey: "SAA 考前速查"
frequency: "阶段性总结"
date: 2026-08-01
updated: 2026-08-15
tags: ["saa-c03", "SAA 考前速查", "AWS"]
notionId: 3a6964dc-ce4a-817c-860b-f61fe547c268
notionUrl: https://app.notion.com/p/3a6964dcce4a817c860bf61fe547c268
notionUpdated: "2026-08-13T00:40:49.812Z"
---

## 复习顺序
1. 高频易混淆总表
2. VPC 与网络
3. S3 / EBS / EFS
4. RDS / Aurora / DynamoDB
5. EC2 / Auto Scaling / ELB / Lambda
6. SQS / SNS / EventBridge
7. IAM / KMS / Organizations
8. CloudWatch / CloudTrail / Config / AWS Health
9. Artifact / Audit Manager / Control Tower
10. HA、DR、RTO / RPO
11. 费用与性能权衡
## 考前自检
- 能根据题目关键词快速缩小到两个选项。
- 能说明为什么其他选项不合适。
- 能识别“最少运维”“最高可用”“最低成本”等优先级。
- 能画出常见三层架构、事件驱动架构和多账户治理结构。

## 新增知识点自检

- 能用三阶段和 7R 解释迁移项目，并区分 Evaluator、Discovery、Migration Hub、Transform MGN、DMS、DataSync 与 Transfer Family。
- 能区分 AppSync、Amplify、Connect、SES、WorkSpaces 三种交付方式和 IoT Core 的典型关键词。
- 看到旧名称 Application Migration Service、AppStream 2.0、WorkSpaces Web 时，能映射到当前服务名。
- 能区分 Root、IAM User、Group、Policy、Role 与 Identity Center；知道 Group 不嵌套、User 可进多个 Group。
- 能解释 Implicit Deny、Explicit Deny、Managed / Inline / Resource-based Policy 与 Principal。
- 能区分 Password Policy、MFA、长期 Access Key 与包含 Session Token 的临时凭证。
- 看不到资源时能按 Account → Identity → Region → Permission → Filter / State 排查。

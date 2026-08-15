---
title: "安全架构设计"
fullName: "Design Secure Architectures"
description: "以最小权限、私有访问、加密、审计和隔离恢复保护 AWS 架构。"
service: "SAA-C03"
category: saa-c03
kind: topic
lang: zh
topicKey: "安全架构设计"
frequency: "阶段性总结"
date: 2026-08-01
updated: 2026-08-15
tags: ["saa-c03", "安全架构设计", "AWS"]
notionId: 3a6964dc-ce4a-815e-9db0-d8343bfa6db7
notionUrl: https://app.notion.com/p/3a6964dcce4a815e9db0d8343bfa6db7
notionUpdated: "2026-08-13T08:35:25.158Z"
---

## 必须掌握
- IAM 身份策略 vs Resource Policy。
- S3 默认私有与 Block Public Access。
- S3 Bucket Policy、Access Point、Presigned URL。
- 静态加密与传输中加密。
- Versioning、Replication、Object Lock 与备份隔离。
- CloudTrail Management Events vs S3 Data Events。
- EBS Snapshot、EFS、FSx 与 Backup 的访问权限。
- Security Group、NACL 与 VPC Endpoint。
- AWS Shared Responsibility Model。
## 存储安全关键词 → 服务

| 需求 | 首先想到 | 还要检查 |
| --- | --- | --- |
| 防 S3 意外公开 | Block Public Access | Bucket Policy、ACL、Access Point |
| 临时分享私有对象 | Presigned URL | 签名者权限与过期时间 |
| 多团队访问同一 Bucket | S3 Access Points | 每个入口策略与网络限制 |
| 审计 GetObject / DeleteObject | CloudTrail Data Events | Trail、成本与目标日志 |
| 合规不可修改 | S3 Object Lock | Versioning、Retention Mode |
| 强制 HTTPS | Bucket Policy Deny 非 TLS | 例外与服务访问 |
| 私有访问 S3 | Gateway VPC Endpoint | Endpoint/Bucket Policy |
| EFS 网络访问 | Mount Target + SG | TCP 2049、IAM/POSIX 权限 |
| 备份防删除 | Backup Vault / 不可变策略 | 权限隔离与恢复测试 |
## S3 最小权限思路
1. 默认保持 Bucket 私有。
2. 保持 Block Public Access，除非业务明确需要公开。
3. 优先 IAM Role 和最小权限。
4. 用 Bucket Policy 表达资源端条件和显式拒绝。
5. CloudFront 访问私有 Origin，而不是公开 Bucket。
6. 对敏感对象启用适当加密和审计。
7. 用 Versioning / Object Lock / Backup 防止误删和篡改。
## 高频陷阱
- CORS 不是授权。
- Object URL 不等于公开。
- S3 底层冗余不能防止授权用户误删。
- Presigned URL 的能力不会超过签名者权限，但链接持有者在有效期内可使用。
- 快照成功不自动保证应用事务一致性。
- Server-side encryption 不替代 IAM、Policy 和日志。
- 备份与生产账号/权限完全相同会削弱勒索软件防护。
## 错题回写
- “谁读取/删除了对象” → CloudTrail Data Events。
- “防覆盖/误删并可恢复旧版本” → Versioning。
- “强制保留期间不可删除” → Object Lock。
- “不经过公网访问 S3” → VPC Endpoint + Policy。
## 考前一分钟复习
**默认私有、最小权限、加密、审计、版本/不可变、备份隔离。**
## Database 安全补充
- 生产 RDS / Aurora 通常放在私有子网，使用 Security Group 限制应用层来源。
- 使用 KMS 静态加密、TLS 传输加密和 Secrets Manager 管理/轮换凭据。
- 数据库账号权限与 IAM 权限是不同层次；都遵循最小权限。
- DynamoDB 使用 IAM 控制 API，敏感数据仍需分类、加密、备份与审计。
- DAX、ElastiCache、DocumentDB 和 Neptune 也需要网络隔离、身份验证和加密配置。
- 托管服务不会自动替客户修复公开访问、过宽 SG、弱账号或错误备份权限。
## 身份与权限高频考点
- Authentication 是确认身份；Authorization 是决定权限。
- IAM 默认拒绝，策略评估中显式 Deny 优先。
- 根用户启用 MFA，只用于必须由根用户完成的账户任务；不创建 Root Access Key。
- IAM Password Policy 只控制 IAM User Console Password，不控制 Root Password、Access Key 或 Identity Center Password。
- Group 只能包含 User、不能嵌套；一个 User 可以加入多个职责 Group。
- Managed Policy 可附加给 User、Group、Role；Inline Policy 可嵌入单个 User、Group、Role。
- Identity-based Policy 不写 Principal；Resource-based Policy 与 Trust Policy 才常见 Principal。
- User 权限可能来自 Group 继承、直接附加或 Inline Policy；移出 Group 只撤销该 Group 的权限来源。
- Access Denied 从错误中的 Action 开始，继续检查 Principal、直接与继承 Policy、Explicit Deny、Boundary、SCP、Resource 与 Condition。
- EC2、Lambda 等工作负载访问 AWS 服务时优先使用 IAM Role 和临时凭证。
- 临时凭证包含 Access Key ID、Secret Access Key 与 Session Token；CLI / SDK 不要求长期 IAM User Key。
- 跨账户访问重点检查 Trust Policy 与 Permissions Policy。
- 员工多账户 SSO → IAM Identity Center；应用顾客注册登录 → Cognito。
## 网络与应用保护

| 题目关键词 | 服务 |
| --- | --- |
| SQL 注入、XSS、HTTP Header、IP/速率规则 | AWS WAF |
| DDoS、流量洪泛 | AWS Shield |
| 实例/ENI 入站和出站规则 | Security Group |
| 子网级无状态规则 | Network ACL |
## 数据保护高频考点
- 静态数据：S3、EBS、RDS、DynamoDB 等使用加密；KMS 管理加密密钥。
- 传输中数据：TLS/HTTPS；ACM 管理 AWS 集成服务使用的证书。
- 数据库密码、Token、API Key 与自动轮换：Secrets Manager。
- S3 中自动发现 PII、信用卡号等敏感数据：Macie。
- 加密不替代 IAM、网络隔离、审计、版本控制和备份。
## 检测、调查与汇总

| 服务 | 首先想到 |
| --- | --- |
| Amazon Inspector | 扫描 EC2、ECR、Lambda 的 CVE 与漏洞 |
| Amazon GuardDuty | 持续检测恶意 IP、异常 API 和可疑行为 |
| Amazon Detective | 根因调查、攻击路径、关系和时间线 |
| AWS Security Hub | 聚合多服务 Findings 和安全标准检查 |
## 安全响应组合
GuardDuty / Inspector / Macie 产生 Finding → Security Hub 汇总 → Detective 深入调查 → EventBridge、Lambda 或 Systems Manager Automation 执行响应。
## 监控、审计与合规补充

| 题目关键词 | 首先想到 | 判断重点 |
| --- | --- | --- |
| 谁删除/修改资源 | AWS CloudTrail | API 事件、调用者、时间、源 IP |
| 配置历史与规则合规 | AWS Config | Configuration Item、Config Rule |
| 获取 AWS SOC/ISO/PCI 报告 | AWS Artifact | AWS 侧报告与协议，不证明客户自动合规 |
| 按框架自动收集审计证据 | AWS Audit Manager | Assessment、Control、Evidence |
| 外部账户或公众访问 | IAM Access Analyzer | 资源策略、信任策略、最小权限 |
| 多账户权限上限 | AWS Organizations SCP | SCP 只限制，不授予权限 |
| 标准化多账户环境 | AWS Control Tower | Landing Zone、Account Factory、Controls |
- 合规是共同责任：AWS 提供基础设施证明与服务能力，客户仍负责配置、身份、数据、应用和证据审阅。
- 检测或建议不等于自动修复；自动响应还要设计权限、回滚、告警和失败处理。

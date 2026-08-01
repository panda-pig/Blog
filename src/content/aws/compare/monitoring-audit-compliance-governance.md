---
title: "监控・审计・合规・治理服务总对比"
fullName: "Monitoring, Audit, Compliance & Governance"
description: "集中比较 AWS 监控、审计、合规、多账户治理和最佳实践服务的职责与选型关键词。"
service: "AWS"
category: compare
kind: compare
lang: zh
topicKey: "监控・审计・合规・治理服务总对比"
frequency: "专题对比"
date: 2026-08-01
updated: 2026-08-01
tags: ["compare", "监控・审计・合规・治理服务总对比", "AWS"]
notionId: 3ae964dc-ce4a-81d6-bc1f-c45a1a2a3a36
notionUrl: https://app.notion.com/p/3ae964dcce4a81d6bc1fc45a1a2a3a36
notionUpdated: "2026-07-31T08:17:20.860Z"
---

## 一句话总览
- **运行状态**看 CloudWatch；**API 操作历史**看 CloudTrail；**资源配置与规则合规**看 Config。
- **AWS 的合规报告与协议**看 Artifact；**客户环境的审计证据**用 Audit Manager。
- **多账户基础管理**用 Organizations；**标准化落地与持续治理**用 Control Tower。
- **批准产品目录**用 Service Catalog；**许可证使用治理**用 License Manager。
- **AWS 官方事件**看 AWS Health；**最佳实践建议**看 Trusted Advisor；**权限暴露**看 IAM Access Analyzer。
## 总对比表

| 服务 | 核心问题 | 主要对象 | 典型输出 | 题目关键词 | 不负责什么 |
| --- | --- | --- | --- | --- | --- |
| Amazon CloudWatch | 系统现在运行得怎样？ | 指标、日志、资源状态 | Metrics、Logs、Alarms、Dashboards | CPU、延迟、错误率、阈值告警 | 不负责完整 API 审计和配置规则合规 |
| AWS CloudTrail | 谁在何时调用了什么 API？ | 账户活动与 API 事件 | Event history、Trail、Insights | 谁删除资源、操作追踪、审计日志 | 不主要监控性能或资源配置状态 |
| AWS Config | 配置怎样变化、是否符合规则？ | 资源配置、关系与规则 | 配置历史、Config Rules、合规状态 | 配置漂移、持续合规、禁止公网 | 不记录全部业务操作，不提供 AWS 合规报告 |
| AWS Artifact | 哪里获取 AWS 的合规材料？ | AWS 审计报告与协议 | SOC/ISO/PCI 报告、协议 | 下载合规报告、审阅协议 | 不扫描客户资源，不证明客户自动合规 |
| AWS Audit Manager | 怎样持续准备客户环境审计证据？ | 框架、控制、证据与评估 | Assessment、Evidence、审计报告 | 自动收集证据、审计框架 | 不颁发认证，也不直接修复控制缺口 |
| AWS Organizations | 怎样集中管理多个账户？ | 账户、OU、SCP 与账单 | 组织结构、SCP、合并计费 | 多账户、OU、SCP、Consolidated Billing | SCP 不授予权限，不自动建立完整 Landing Zone |
| AWS Control Tower | 怎样建立并持续治理多账户环境？ | Landing Zone、账户与 Controls | Account Factory、Controls、Dashboard | Landing Zone、防护控制、标准化账户 | 不替代 Organizations，而是构建在其之上 |
| AWS Service Catalog | 怎样让用户受控自助部署批准方案？ | Portfolio、Product、约束 | 标准化可部署产品 | 批准目录、自助部署、标准模板 | 不是第三方软件市场，也不管理许可证 |
| AWS License Manager | 怎样跟踪和控制软件许可证？ | 许可规则、数量与 BYOL 资源 | 许可配置、使用跟踪与限制 | BYOL、许可证超用、混合环境 | 不购买许可证，也不定义产品目录 |
| AWS Health Dashboard | AWS 官方事件是否影响账户？ | 服务事件、计划变更、账户通知 | 账户相关 Health events | AWS 故障、计划维护、实例退役 | 不监控应用 CPU、日志或客户配置 |
| AWS Trusted Advisor | 有哪些最佳实践改进建议？ | 成本、性能、安全、容错、配额 | 检查结果和优化建议 | 空闲资源、Root MFA、配额 | 通常不自动整改，也不是自定义规则引擎 |
| IAM Access Analyzer | 谁能从外部访问？权限是否过宽？ | 资源策略、信任策略、访问活动 | External access Findings、策略验证 | 外部账户、公众访问、最小权限 | 不是通用漏洞扫描或性能顾问 |
| AWS Well-Architected Tool | 架构是否符合最佳实践？ | 工作负载与六大支柱 | 风险项、改进计划、Milestones | 架构评审、六大支柱 | 不持续采集全部运行数据，不自动重构 |
## 高频二选一

| 容易混淆 | 判断方法 |
| --- | --- |
| CloudWatch vs CloudTrail | 资源表现/日志/告警 → CloudWatch；API 操作 → CloudTrail。 |
| CloudTrail vs Config | 谁改的、调用什么 API → CloudTrail；配置前后与合规 → Config。 |
| Artifact vs Audit Manager | AWS 自己的报告与协议 → Artifact；客户环境证据 → Audit Manager。 |
| Config vs Audit Manager | 配置记录和规则 → Config；多来源证据按框架组织 → Audit Manager。 |
| Organizations vs Control Tower | 账户、OU、SCP、账单 → Organizations；Landing Zone、Account Factory、Controls → Control Tower。 |
| Service Catalog vs Marketplace | 企业批准产品目录 → Service Catalog；第三方软件/数据/服务市场 → Marketplace。 |
| Service Catalog vs License Manager | 允许部署什么 → Service Catalog；许可证能用多少 → License Manager。 |
| AWS Health vs CloudWatch | AWS 官方事件与维护 → Health；自己的资源指标、日志和告警 → CloudWatch。 |
| Trusted Advisor vs Well-Architected Tool | 自动化检查和账户建议 → Trusted Advisor；问题清单式工作负载评审 → Well-Architected Tool。 |
| Trusted Advisor vs IAM Access Analyzer | 多类别优化建议 → Trusted Advisor；外部访问和最小权限分析 → Access Analyzer。 |
## 场景速查
- CPU 超过 80% 自动通知或扩容 → CloudWatch Alarm + SNS / Auto Scaling。
- 找出是谁删除了 EC2 → CloudTrail。
- 持续检查 S3 不得公开 → AWS Config Rule。
- 审计方索要 AWS SOC 报告 → AWS Artifact。
- 为 PCI 审计自动收集证据 → AWS Audit Manager。
- 集中管理账户并用 SCP 设边界 → AWS Organizations。
- 为新账户自动套用 Landing Zone → AWS Control Tower。
- 开发人员只能从批准模板部署 → AWS Service Catalog。
- 跟踪 BYOL 并防许可证超用 → AWS License Manager。
- 确认实例退役或 Region 事件 → AWS Health Dashboard。
- 找闲置资源、Root MFA 风险和配额压力 → AWS Trusted Advisor。
- 发现 S3 或 Role 被外部账户访问 → IAM Access Analyzer。
## 重点记忆
**Watch 看运行，Trail 看操作，Config 看配置；Artifact 拿材料，Audit Manager 收证据；Organizations 管账户，Control Tower 建治理；Catalog 管产品，License Manager 管许可；Health 看 AWS，Trusted Advisor 给建议，Access Analyzer 查权限。**

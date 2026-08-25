---
title: "AWS IAM"
fullName: "AWS Identity and Access Management"
description: "先确认你是谁，再通过策略决定你能对哪些资源做什么。"
service: "AWS IAM"
category: security
kind: service
lang: zh
topicKey: "AWS IAM"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-25
tags: ["security", "AWS IAM", "AWS"]
notionId: 3a6964dc-ce4a-814c-981d-d23eb8d66e71
notionUrl: https://app.notion.com/p/3a6964dcce4a814c981dd23eb8d66e71
notionUpdated: "2026-08-25T06:02:22.052Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | AWS IAM |
| 全称 | AWS Identity and Access Management |
| 中文释义 | 身份与访问管理 |
| 日文释义 | AWS IAM（アイデンティティとアクセス管理） |
| 考试频率 | ⭐⭐⭐⭐⭐ |
| 易混淆 | Root User / IAM User / IAM Role / IAM Identity Center / Managed Policy / Inline Policy |

## 一句话理解

**先确认“你是谁”，再通过 Policy 决定“你能对哪些 Resource 做什么”。**

## 身份对象

- Root User 是账户固有身份，不是 IAM User，只用于账户恢复与少数 Root-only Tasks。
- IAM User 是账户内的长期身份，可拥有 Console Password 或 Access Key。
- Group 只能包含 User，不能嵌套 Group；一个 User 可加入多个 Group。
- Role 是可被可信主体 Assume 的权限身份，提供会到期的临时凭证。
- 员工多账户访问优先 IAM Identity Center / Federation，工作负载优先 Role。

## Password Policy 与 MFA

IAM Password Policy 只控制 IAM User Console Password 的长度、字符、到期与重用，不控制 Root Password、Access Key 或 Identity Center Password。

MFA 增强 Authentication，本身不授予 Authorization。Passkey / Security Key 提供抗钓鱼 FIDO 认证，Virtual MFA 使用 Authenticator App 生成 TOTP。QR Code / Secret Configuration Key 可生成 TOTP，必须作为敏感凭证保护。

## Console、CLI 与 SDK

| 方式 | 常见认证与凭证 | 适合场景 |
| --- | --- | --- |
| Console | Password + MFA，或 SSO / Federation Session | 人工探索与管理 |
| CLI | Identity Center、AssumeRole、Profile、Workload Role | 命令、脚本、批量任务 |
| SDK | Credential Provider Chain | 应用代码调用 AWS API |

`aws configure` 只保存 Profile 的 Access Key、默认 Region 与输出格式，不创建权限。CloudShell 自动使用当前 Console 身份的临时凭证，也不会扩大该身份权限。

## Access Key 与临时凭证

- 长期凭证：Access Key ID + Secret Access Key，通常属于 IAM User，不自动到期。
- 临时凭证：再增加 Session Token，并有到期时间。
- Secret Access Key 只显示一次，丢失时创建并验证新 Key，再停用和删除旧 Key。
- 不共享、不硬编码、不放入源码、镜像、脚本或公开仓库。
- CLI / SDK 并不要求长期 IAM User Key；人员和工作负载都优先临时凭证。

## Policy JSON

| 元素 | 作用 | 考试提醒 |
| --- | --- | --- |
| Version | Policy Language Version | 通常为 `2012-10-17`，不是修改日期 |
| Statement | 一条或多条授权语句 | 权限规则容器 |
| Sid | 可选语句标识 | 本身不授权 |
| Effect | Allow / Deny | 显式 Deny 优先 |
| Principal | 规则面向的主体 | Identity-based Policy 不写 |
| Action | AWS API 操作 | 例如 `s3:GetObject` |
| Resource | 资源 ARN | 可精确时避免 `*` |
| Condition | 可选请求条件 | 可检查 MFA、IP、Tag、Organization |

## Policy 类型与权限来源

Managed Policy 可复用并附加给 User、Group、Role；Inline Policy 可嵌入单个 User、Group、Role，并随身份删除。User 权限可能来自 Directly attached、Via group 或 Inline Policy，移出 Group 只撤销该 Group 带来的继承权限。

## 评估逻辑

1. 默认是 Implicit Deny。
2. AWS 汇总适用的 Identity、Resource、Boundary、Session 与 SCP 等规则。
3. 需要存在适用 Allow 且没有适用 Explicit Deny。
4. 任一适用 Explicit Deny 都覆盖 Allow。
5. Permissions Boundary、Session Policy 与 SCP 只限制上限，不独立授权。

## 高频陷阱

- Authentication 成功不代表 Authorization 允许。
- `iam:Get*` / `iam:List*` 匹配 Action 名称；`Resource: "*"` 匹配资源范围。
- IAMReadOnlyAccess 不允许 Create / Update / Delete。
- IAMFullAccess 只管理 IAM，不等于 AdministratorAccess。
- Policy 出现在 User 页面不代表一定直接附加，可能来自 Group。
- Group 不能登录、不能被 Assume，也不能作为 Principal。

## 重点记忆

**Group 不能嵌套；User 可加入多个 Group；Policy 表达权限；人优先 SSO，服务用 Role；默认拒绝、显式拒绝优先。**

## IAM Role、Instance Profile 与 PassRole

| 组成 | 回答的问题 | 关键点 |
| --- | --- | --- |
| Trust Policy | 谁可以 AssumeRole？ | 可信任 AWS Service、Account、User、Role 或 Federated Principal |
| Permissions Policy | 代入 Role 后能做什么？ | 只授予必要的 Action 与 Resource |
| STS Temporary Credentials | 怎样签名 API 请求？ | 包含 Access Key ID、Secret Access Key、Session Token 与到期时间 |

EC2 通过 **Instance Profile** 使用 Role。Instance Profile 是把一个 IAM Role 交给 EC2 的容器；一个 Instance Profile 同时只能包含一个 Role，实例内的 CLI / SDK 会通过 IMDS 自动取得并轮换临时凭证。创建 Role 不等于实例已经使用它，还必须把相应 Instance Profile 关联到 EC2。

iam:PassRole 允许调用者把指定 Role 交给 AWS Service；它不等于调用者自己执行 AssumeRole。生产环境应同时限制可传递的 Role 与目标服务。

## IAM 安全审查工具

| 工具 | 主要回答 |
| --- | --- |
| Credentials Report | IAM User 的 Password、Access Key、MFA 状态如何？ |
| Access Advisor / Last Accessed | 身份或 Policy 允许访问什么，最后何时访问？ |
| Access Analyzer | 是否存在外部、内部、未使用访问或 Policy 风险？ |
| Policy Simulator | 某 Principal 对某 Resource 的 Action 会 Allow 还是 Deny？ |

Last Accessed 不是完整实时审计日志；收紧权限前要结合业务周期与 CloudTrail。凭证盘点、使用时间、访问路径、请求模拟和真实 API 记录各自解决不同问题。

---
title: "IAM Policy 类型・JSON 元素・权限评估总对比"
fullName: "IAM Policy Types, JSON Elements and Permission Evaluation"
description: "从策略类型、JSON 元素和评估顺序三个层面理解 IAM 权限。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "IAM Policy 类型・JSON 元素・权限评估总对比"
frequency: "高频对比"
date: 2026-08-13
updated: 2026-08-25
tags: ["compare", "IAM Policy", "Security", "AWS"]
notionId: 3bb964dc-ce4a-81f6-9c5e-cfb3f87cedb2
notionUrl: https://app.notion.com/p/3bb964dcce4a81f69c5ecfb3f87cedb2
notionUpdated: "2026-08-25T06:01:17.651Z"
---

## 一句话结论

**Policy 类型决定它附加在哪里、是否需要 Principal；权限评估决定多份 Policy 最后如何合并。**

## Policy 类型

| 类型 | 放在哪里 | Principal | 关键用途 |
| --- | --- | --- | --- |
| AWS Managed Policy | User、Group、Role | 不写 | 快速采用 AWS 维护的权限 |
| Customer Managed Policy | User、Group、Role | 不写 | 组织内复用与集中更新 |
| Inline Policy | 单个 User、Group、Role 内 | 不写 | 与单一身份严格绑定 |
| Resource-based Policy | S3、SQS、KMS 等资源 | 通常需要 | 从资源一侧授权 |
| Role Trust Policy | IAM Role 的信任关系 | 必须说明 | 控制谁能 AssumeRole |
| Permissions Boundary | IAM User 或 Role | 不写 | 限制最大权限，不独立授权 |
| Organizations SCP | Root、OU、Account | 非普通 Principal 分配 | 组织级护栏，不独立授权 |

## Managed 与 Inline

Managed Policy 可复用、集中维护；Customer Managed Policy 支持版本。Inline Policy 与单个身份一对一，随身份删除。考试看到“多个 Role 共用”优先 Customer Managed Policy；看到“必须同生共死”才考虑 Inline Policy。

## JSON 元素

| 元素 | 回答的问题 | 常见错误 |
| --- | --- | --- |
| Version | 使用哪版策略语言？ | 误认为修改日期 |
| Statement | 有哪些授权语句？ | 忘记可包含多条 |
| Sid | 如何标识该语句？ | 误认为会授予权限 |
| Effect | Allow 还是 Deny？ | 忽略显式 Deny |
| Principal | 资源端规则面向谁？ | 写进 Identity-based Policy |
| Action | 哪些 API 操作？ | 使用过宽的 `service:*` |
| Resource | 哪些 ARN？ | 可精确时仍使用 `*` |
| Condition | 什么上下文下生效？ | 误认为必填 |

## 权限评估顺序

1. 默认状态是 Implicit Deny。
2. AWS 收集当前请求适用的 Identity、Resource、Boundary、Session 与 SCP 等规则。
3. 存在适用 Allow 且没有任何适用 Explicit Deny，才可能允许。
4. 任一适用 Explicit Deny 都会覆盖其他 Allow。
5. Boundary、Session Policy 与 SCP 只缩小权限，不会单独“加出”权限。

## Access Denied 速查

从错误中的 Action 开始，核对当前 Principal、直接附加与 Group 继承的 Policy、显式 Deny、Resource ARN、Condition、Boundary、SCP 和 Session Policy。能执行 Get / List 不代表能执行 Create / Update / Delete。

## Role 相关策略与操作

| 对象 | 决定什么 | 常见混淆 |
| --- | --- | --- |
| Trust Policy | 谁能 AssumeRole | 不决定 Role Session 能访问哪些业务资源 |
| Permissions Policy | Role Session 能做什么 | 不决定谁能代入 Role |
| iam:PassRole | 调用者能否把指定 Role 交给 AWS Service | 不是 AssumeRole |
| sts:AssumeRole | 受信任主体能否取得 Role 临时凭证 | 还需满足 Trust Policy 与相关权限条件 |

排查 Role 权限时应拆成两段：先验证主体是否能 Assume / Pass 该 Role，再验证 Role Session 的 Permissions Policy、Boundary、Session Policy、SCP、Resource Policy 与 Explicit Deny。

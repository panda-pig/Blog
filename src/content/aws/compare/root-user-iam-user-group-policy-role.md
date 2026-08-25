---
title: "Root User・IAM User・Group・Policy・Role 总对比"
fullName: "Root User, IAM User, Group, Policy and Role"
description: "分清身份、权限集合、权限规则与临时权限身份。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "Root User・IAM User・Group・Policy・Role 总对比"
frequency: "高频对比"
date: 2026-08-13
updated: 2026-08-25
tags: ["compare", "IAM", "Security", "AWS"]
notionId: 3bb964dc-ce4a-81be-9246-cfcc1cefab44
notionUrl: https://app.notion.com/p/3bb964dcce4a81be9246cfcc1cefab44
notionUpdated: "2026-08-25T06:01:18.994Z"
---

## 一句话结论

**User 是身份；Group 是管理 User 的集合；Policy 是权限规则；Role 是可被代入的临时权限身份。**

## 总对比

| 对象 | 它是什么 | 主要用途 |
| --- | --- | --- |
| Root User | 账户创建时产生的固有身份 | 恢复账户与少数 Root-only Tasks |
| IAM User | 账户内的长期身份 | 少数需要长期账户身份的场景 |
| IAM Group | IAM User 的权限管理集合 | 为职责相同的多个 User 统一授权 |
| IAM Policy | JSON 权限文档 | 定义 Effect、Action、Resource、Condition |
| IAM Role | 可被可信主体代入的权限身份 | 工作负载、跨账户和临时访问 |
| IAM Identity Center | 员工多账户统一访问入口 | SSO 与 Permission Set |

## Group 的考试规则

1. Group 只能包含 IAM User，不能包含另一个 Group。
2. 一个 IAM User 可以属于零个、一个或多个 Group。
3. Group 不能登录，也不能被 Assume。
4. User 会继承所有所属 Group 的适用权限；任一适用的显式 Deny 仍优先。

## Policy 的边界

- Managed Policy 可附加给 User、Group 或 Role。
- Inline Policy 可嵌入单个 User、Group 或 Role。
- Policy 本身不是身份，也不能执行操作。
- Identity-based Policy 不写 Principal；Resource-based Policy 与 Role Trust Policy 才常见 Principal。
- `Version: 2012-10-17` 是策略语言版本，不是修改日期。

## 场景速判

- 多个开发人员需要相同权限 → Group + Policy。
- EC2 需要访问 S3 → IAM Role，不创建 IAM User Access Key。
- 员工访问多个账户 → IAM Identity Center。
- 外部 Web / Mobile 用户登录 → Amazon Cognito。
- 账户恢复或 Root-only Task → Root User。

## 重点记忆

**User 可以进多个 Group；Group 不能再套 Group；Policy 只描述权限；Role 提供临时权限身份。**

## Role 的三个关键部分

| 部分 | 作用 |
| --- | --- |
| Trusted Entity / Trust Policy | 规定谁能 AssumeRole |
| Permissions Policy | 规定 Role Session 能执行哪些 Action、访问哪些 Resource |
| STS Temporary Credentials | 提供会到期的 Access Key ID、Secret Access Key 与 Session Token |

EC2 通过 Instance Profile 使用 Role；创建 Role 后还必须关联到实例。操作人员把 Role 交给 EC2、Lambda 等服务时通常需要 iam:PassRole。**PassRole 是“把 Role 给服务”，AssumeRole 是“主体自己代入 Role”。**

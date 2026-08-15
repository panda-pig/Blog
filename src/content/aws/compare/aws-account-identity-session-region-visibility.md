---
title: "AWS Account・Identity・Session・Region・资源可见性总对比"
fullName: "AWS Account, Identity, Session, Region and Resource Visibility"
description: "按账户、身份、会话、区域和权限逐层排查资源为什么看不到。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "AWS Account・Identity・Session・Region・资源可见性总对比"
frequency: "高频对比"
date: 2026-08-13
updated: 2026-08-15
tags: ["compare", "AWS Account", "IAM", "Region"]
notionId: 3bb964dc-ce4a-81a6-8748-f8e9edccf76b
notionUrl: https://app.notion.com/p/3bb964dcce4a81a68748f8e9edccf76b
notionUpdated: "2026-08-13T04:40:08.503Z"
---

## 一句话结论

**Account 管资源与账单边界，Identity 管谁在访问，Session 管当前登录，Region / AZ 管资源位置，Policy 管允许做什么。**

## 五个层次

| 层次 | 回答的问题 | 关键影响 |
| --- | --- | --- |
| AWS Account | 资源和账单属于哪个账户？ | 不同 Account 的资源默认隔离 |
| Identity | 当前是谁？ | 决定 Principal 与适用 Policy |
| Session | 当前窗口保存哪次登录？ | 可并行使用多个身份，但不合并权限 |
| Region / AZ | 资源在哪里？ | 切换 Region 会改变区域资源列表 |
| IAM Permission | 可以执行什么？ | 决定 List、Describe、Create、Delete 等操作 |

## 同一 Account 中的资源

Root、Admin 与 Restricted User 可以是同一账户中的不同身份。某个 Admin 创建的 EBS Volume 归属于该 Account 的目标 Region / AZ，不是创建者的私人卷。谁能继续查看、修改或删除，取决于后续每次 API 请求的权限评估。

## Multi-session 不会做什么

- 不创建新 Account。
- 不复制资源或改变资源归属。
- 不合并两个身份的权限。
- 每个窗口独立保存 Account、Identity 与 Session Context。

## 看不到资源时的排查顺序

1. Account：是否登录了不同的 12 位 Account ID？
2. Identity：当前是 Root、IAM User、Role 还是 Identity Center Session？
3. Region：资源是否在另一个 Region？
4. Permission：是否拥有 List / Describe / Get？
5. Filter / State：筛选条件与资源状态是否正确？
6. Scope：资源是 Global、Regional 还是 Zonal？

## 高频误区

IAM User 不是 AWS Account；Account Alias 不是第二个账户；Console Session 不是独立资源环境；资源创建者不等于资源私人所有者；Authentication 成功也不等于 Authorization 允许。

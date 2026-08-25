---
title: "Password Policy・MFA・Access Key・Temporary Credentials 总对比"
fullName: "Password Policy, MFA, Access Key and Temporary Credentials"
description: "分清密码规则、多因素认证、长期密钥与会自动到期的临时凭证。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "Password Policy・MFA・Access Key・Temporary Credentials 总对比"
frequency: "高频对比"
date: 2026-08-13
updated: 2026-08-25
tags: ["compare", "MFA", "Access Key", "IAM"]
notionId: 3bb964dc-ce4a-816d-962e-c17440cc39cc
notionUrl: https://app.notion.com/p/3bb964dcce4a816d962ec17440cc39cc
notionUpdated: "2026-08-25T07:27:36.055Z"
---

## 一句话结论

**Password Policy 管 IAM User 密码规则；MFA 增加认证因素；Access Key 用于签名 API 请求；Temporary Credentials 会到期，应优先用于人员和工作负载。**

## 认证与凭证

| 对象 | 解决什么问题 | 是否授予权限 | 生命周期 |
| --- | --- | --- | --- |
| IAM Password Policy | IAM User Console Password 的强度与生命周期 | 否 | 账户级规则 |
| MFA | 增加额外认证因素 | 否，可作为 Condition | Device 有效期间 |
| Long-term Access Key | 为 IAM User API 请求签名 | 否 | 不自动到期，需轮换 |
| Temporary Credentials | 为 Session 的 API 请求签名 | 否 | 有到期时间并包含 Session Token |
| Console Session | 保存 Web 登录上下文 | 否 | 到期或退出后结束 |

## Password Policy 与 MFA

Password Policy 只作用于同一账户中的 IAM User Console Password，不控制 Root Password、Access Key 或 IAM Identity Center Password。MFA 增强 Authentication，本身不授予 Authorization；需要时可在 Policy Condition 中要求 MFA 上下文。

## 长期与临时凭证

- Long-term：Access Key ID + Secret Access Key，通常属于 IAM User，不会自动到期。
- Temporary：Access Key ID + Secret Access Key + Session Token，会自动到期。
- 人员优先 IAM Identity Center / Federation，工作负载优先 IAM Role。
- Secret 不共享、不进代码；泄露后立即撤销或轮换并检查 CloudTrail。

## Console、CLI 与 SDK

Console 通常使用 Password + MFA 或 SSO Session。CLI 与 SDK 可以使用 Identity Center、AssumeRole、Workload Role 或 Access Key。`aws configure` 只保存 Profile、默认 Region 与输出格式，不会授予 IAM 权限；CloudShell 也不会扩大当前 Console 身份的权限。

## 高频陷阱

配置 Console MFA 不会让已有长期 Access Key 自动要求 MFA；Virtual MFA 的 QR Code / Secret Key 是敏感绑定信息；CLI / SDK 并不等于必须使用长期 IAM User Key。

## 安全轮换与现代身份选择

长期 Key 的轮换顺序：**创建新 Key → 更新并验证所有使用方 → 停用旧 Key → 确认无异常后删除旧 Key**。Secret 泄露后应立即撤销或轮换，并检查 CloudTrail 与暴露范围；只删除 Git Commit 不够。

| 主体 | 首选方式 |
| --- | --- |
| 企业员工与管理员 | IAM Identity Center / Federation + MFA + 临时凭证 |
| AWS 上的工作负载 | Instance Profile、Task Role、Execution Role |
| AWS 外部工作负载 | Roles Anywhere、OIDC / SAML Federation |
| 不支持临时凭证的旧系统 | 专用 IAM User + 最小权限 Key + 轮换与监控 |

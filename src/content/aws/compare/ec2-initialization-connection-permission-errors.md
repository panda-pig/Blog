---
title: "EC2 初始化、连接与权限错误总对比"
fullName: "EC2 Initialization Connection and Permission Errors"
description: "按初始化、网络、操作系统登录和 AWS API 授权四条控制链定位 EC2 故障。"
service: "AWS Compare"
category: compare
kind: compare
lang: zh
topicKey: "EC2 Initialization Connection and Permission Errors"
frequency: "高频对比"
date: 2026-09-29
updated: 2026-09-29
tags: ["compare", "EC2", "troubleshooting", "IAM"]
notionId: 3e8964dc-ce4a-8132-a559-df7d19cc2637
notionUrl: https://app.notion.com/p/3e8964dcce4a8132a559df7d19cc2637
notionUpdated: "2026-09-27T02:35:48.957Z"
---

## 先分层，再排错

EC2 上的故障通常发生在四条不同控制链：**启动初始化、网络可达、OS 登录、AWS API 授权**。先判断失败在哪一层，再查对应证据。

| 现象 | 说明 | 优先检查 |
| --- | --- | --- |
| 网站未部署 | User Data / Bootstrapping 失败 | cloud-init 日志、脚本、DNS、出站网络、软件源 |
| Connection timeout | 没有得到网络响应 | 地址、Route、IGW、NACL、SG、Corporate Firewall |
| Connection refused | 已到目标，但端口未接受连接 | sshd / 应用监听器、OS Firewall |
| Permission denied | 已到 SSH，身份验证失败 | Private Key、OS Username、authorized_keys |
| Unable to locate credentials | SDK / CLI 没找到凭证 | Instance Profile、IMDS、Credential Provider Chain |
| AccessDenied | 已有身份，但授权不足 | Action、Resource、Condition、Explicit Deny、SCP、Boundary |

## 连接方式边界

- EC2 Instance Connect 仍使用 SSH，需要 IAM、正确 OS User、EIC 组件和网络路径。
- Session Manager 使用 SSM Agent 与出站 Channel，可不开放入站 22。
- 登录操作系统不等于能调用 AWS API；应用权限由 EC2 IAM Role 决定。
- EC2 通过 Instance Profile 获得 Role 的临时凭证，不应在实例上保存人的长期 Access Key。

## 排错顺序

地址与 DNS → Route / IGW / NAT → NACL → Security Group → Host Firewall → Service Listener → OS Authentication → IAM Authorization。

## 重点记忆

**Timeout 看路径，Refused 看服务，Permission denied 看 SSH 身份，AccessDenied 看 IAM。**

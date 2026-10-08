---
title: "VPC Flow Logs"
fullName: "Amazon VPC Flow Logs"
description: "记录 ENI 流量元数据，用来判断通信双方、端口、字节数以及 ACCEPT/REJECT。"
service: "Amazon VPC Flow Logs"
category: networking
kind: service
lang: zh
topicKey: "Amazon VPC Flow Logs"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Amazon VPC Flow Logs","AWS"]
notionId: 3f3964dc-ce4a-8150-a03f-fd1db871cb44
notionUrl: https://app.notion.com/p/3f3964dcce4a8150a03ffd1db871cb44
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 / 全称 | Amazon VPC Flow Logs |
| 中文 | VPC 流日志 |
| 日文 | VPC フローログ |
| 复习优先级 | 考试频率 ⭐⭐⭐⭐⭐ |
| 易混淆 | Traffic Mirroring / CloudTrail / Reachability Analyzer |

## 一句话理解

记录 ENI 流量元数据，用来判断通信双方、端口、字节数以及 ACCEPT/REJECT。

## 核心整理

可在 VPC、Subnet 或 ENI 范围启用，并投递到 CloudWatch Logs、S3 或 Firehose；记录不包含完整报文内容。

## 学习重点

- ACCEPT 只表示网络控制接受，不证明应用成功响应。
- REJECT 后仍需检查实际 SG/NACL 规则。
- S3 可配合 Athena，CloudWatch Logs 可配合 Logs Insights 和告警。
- 日志有聚合与投递延迟，不是实时抓包。

## 常见误区

- NODATA/SKIPDATA 不能直接解释成连接正常。
- Flow Logs 看元数据，CloudTrail 看 API，Mirroring 看报文副本。

## 重点记忆

**Flow Logs 看元数据；Mirroring 看报文；CloudTrail 看 API。**

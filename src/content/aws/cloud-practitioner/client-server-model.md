---
title: "客户端—服务器模型"
fullName: "Client–Server Model"
description: "客户端发送请求，服务器接收请求、处理业务并返回结果。"
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: zh
topicKey: "客户端—服务器模型"
frequency: "考试频率 ⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["cloud-practitioner","客户端—服务器模型","AWS"]
notionId: 3a6964dc-ce4a-811a-9a71-dfdda6cbfba3
notionUrl: https://app.notion.com/p/3a6964dcce4a811a9a71dfdda6cbfba3
notionUpdated: "2026-07-23T07:17:25.788Z"
---

## 基本信息

| 字段 | 内容 |
| --- | --- |
| 英文 | Client–Server Model |
| 全称 | Client–Server Model |
| 中文释义 | 客户端—服务器模型 |
| 日文释义 | クライアント・サーバーモデル |
| 考试频率 | ⭐⭐⭐ |
| 易混淆 | Client / Server / API |

## 一句话理解

客户端发送请求，服务器接收请求、处理业务并返回结果。

## 基本流程

客户端 → 网络请求 → 服务器 → 处理 / 读取数据 → 返回响应

## 常见客户端

- 浏览器
- 手机 App
- 命令行工具
- 其他服务或 API 调用方

## 和 AWS 的关系

EC2、Lambda、ECS 等可以承担服务器端计算；S3、RDS、DynamoDB 等可以提供数据或存储能力；Route 53、CloudFront、ELB 等帮助请求到达正确位置。

## 重点记忆

“服务器”描述的是提供服务的角色，不只是一台实体机器；它可以是虚拟机、容器、函数或托管服务。

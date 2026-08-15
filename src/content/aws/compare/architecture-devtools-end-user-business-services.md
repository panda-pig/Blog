---
title: "架构完善・开发工具・终端计算・业务服务总对比"
fullName: "Architecture, Dev Tools, End-User Computing & Business Services"
description: "按标准、评审、观测、流水线、API、通信、应用、桌面、浏览器和设备快速选型。"
service: "AWS"
category: compare
kind: compare
lang: zh
topicKey: "架构完善・开发工具・终端计算・业务服务总对比"
frequency: "高频对比"
date: 2026-08-05
updated: 2026-08-15
tags: ["compare", "architecture", "devops", "AWS"]
notionId: 3b3964dc-ce4a-81a0-baff-c8326235aa7f
notionUrl: https://app.notion.com/p/3b3964dcce4a81a0baffc8326235aa7f
notionUpdated: "2026-08-05T02:01:09.495Z"
---

## 一张表先判断

| 题目在问什么 | 首先想到 |
| --- | --- |
| 架构最佳实践标准 | Well-Architected Framework |
| 六大支柱评审、Risk、Milestone | Well-Architected Tool |
| 账户和资源最佳实践建议 | Trusted Advisor |
| 配置历史与规则合规 | AWS Config |
| 指标、日志和告警 | CloudWatch |
| 单次请求调用链、延迟与错误 | AWS X-Ray |
| API 操作审计 | CloudTrail |
| 编译、测试、打包 | CodeBuild |
| Source 到 Deploy 的阶段编排 | CodePipeline |
| 部署应用版本 | CodeDeploy |
| GraphQL 与实时订阅 | AppSync |
| Web/Mobile 全栈开发与托管 | Amplify |
| REST / HTTP / WebSocket API | API Gateway |
| 电话、聊天、IVR 与座席 | Connect |
| 应用程序发邮件 | SES |
| 单个桌面应用 / 完整桌面 / 隔离浏览器 | Applications / WorkSpaces / Secure Browser |
| 设备连接、遥测和命令 | IoT Core |

## 三组高频边界

- **Pipeline 是导演，Build 是构建车间，Deploy 是发布执行者。**
- **AppSync 管 GraphQL，API Gateway 管通用 API，Amplify 管 Web/Mobile 全栈体验。**
- **Connect 是联络中心，SES 是 Email，SNS 是通知发布。**

## 典型无服务器组合

- Web API：API Gateway → Lambda → DynamoDB；X-Ray 追踪调用链。
- 静态网站联系表单：S3 → API Gateway → Lambda → SES。
- 云联络中心：Connect → 座席或 Lambda 扩展。

## 重点记忆

**先问对象：标准、评审、配置、运行、调用链、构建、流水线、API、邮件、联络中心、应用、桌面、浏览器还是设备。**

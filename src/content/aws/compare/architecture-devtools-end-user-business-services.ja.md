---
title: "アーキテクチャ・開発ツール・EUC・業務サービス総比較"
fullName: "Architecture, Dev Tools, End-User Computing & Business Services"
description: "標準、Review、Observability、Pipeline、API、通信、Application、Desktop、Browser、Device を素早く選び分けます。"
service: "AWS"
category: compare
kind: compare
lang: ja
topicKey: "架构完善・开发工具・终端计算・业务服务总对比"
frequency: "比較"
date: 2026-08-05
updated: 2026-08-15
tags: ["compare", "architecture", "devops", "AWS"]
notionId: 3b3964dc-ce4a-81a0-baff-c8326235aa7f
notionUrl: https://app.notion.com/p/3b3964dcce4a81a0baffc8326235aa7f
notionUpdated: "2026-08-05T02:01:09.495Z"
---

## クイック判断表

| 問われている対象 | 最初に考えるサービス |
| --- | --- |
| Architecture Best Practice の標準 | Well-Architected Framework |
| 6 Pillar Review、Risk、Milestone | Well-Architected Tool |
| Account / Resource の推奨事項 | Trusted Advisor |
| Configuration History と Rule Compliance | AWS Config |
| Metrics、Logs、Alarm | CloudWatch |
| Request ごとの呼び出し経路、Latency、Error | AWS X-Ray |
| API 操作の監査 | CloudTrail |
| Compile、Test、Package | CodeBuild |
| Source から Deploy までの Stage 編成 | CodePipeline |
| Application Version の Deploy | CodeDeploy |
| GraphQL とリアルタイム購読 | AppSync |
| Web/Mobile Full-stack 開発・Hosting | Amplify |
| REST / HTTP / WebSocket API | API Gateway |
| 電話、Chat、IVR、Agent | Connect |
| Application Email | SES |
| App / 完全 Desktop / 隔離 Browser | Applications / WorkSpaces / Secure Browser |
| Device 接続、Telemetry、Command | IoT Core |

## 3 つの高頻度境界

- **Pipeline が Flow を指揮し、Build が Artifact を作り、Deploy が Release する。**
- **AppSync は GraphQL、API Gateway は汎用 API、Amplify は Web/Mobile Full-stack 体験。**
- **Connect は Contact Center、SES は Email、SNS は通知 Publish。**

## 代表的な Serverless 構成

- Web API：API Gateway → Lambda → DynamoDB、X-Ray で Request Trace。
- Static Site Contact Form：S3 → API Gateway → Lambda → SES。
- Cloud Contact Center：Connect → Agent または Lambda 拡張。

## 重要ポイント

**標準、Review、Configuration、Runtime、Trace、Build、Pipeline、API、Email、Contact Center、Application、Desktop、Browser、Device のどれかを先に特定する。**

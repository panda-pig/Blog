---
title: "Architecture, Dev Tools, End-User Computing & Business Services"
fullName: "Architecture, Dev Tools, End-User Computing & Business Services"
description: "Choose quickly among standards, reviews, observability, delivery pipelines, APIs, communications, apps, desktops, browsers, and devices."
service: "AWS"
category: compare
kind: compare
lang: en
topicKey: "架构完善・开发工具・终端计算・业务服务总对比"
frequency: "Comparison"
date: 2026-08-05
updated: 2026-08-05
tags: ["compare", "architecture", "devops", "AWS"]
notionId: 3b3964dc-ce4a-81a0-baff-c8326235aa7f
notionUrl: https://app.notion.com/p/3b3964dcce4a81a0baffc8326235aa7f
notionUpdated: "2026-08-05T02:01:00.000Z"
---

## Quick decision table

| The question asks about | First choice |
| --- | --- |
| Architecture best-practice standard | Well-Architected Framework |
| Six-pillar review, risks, and milestones | Well-Architected Tool |
| Account and resource best-practice recommendations | Trusted Advisor |
| Configuration history and rule compliance | AWS Config |
| Metrics, logs, and alarms | CloudWatch |
| Per-request call path, latency, and errors | AWS X-Ray |
| API activity audit | CloudTrail |
| Compile, test, and package | CodeBuild |
| Orchestrate stages from source to deployment | CodePipeline |
| Deploy an application revision | CodeDeploy |
| GraphQL and real-time subscriptions | AppSync |
| Full-stack web/mobile development and hosting | Amplify |
| REST, HTTP, or WebSocket APIs | API Gateway |
| Voice, chat, IVR, and agents | Connect |
| Application email | SES |
| Individual app / full desktop / isolated browser | Applications / WorkSpaces / Secure Browser |
| Device connectivity, telemetry, and commands | IoT Core |

## Three high-frequency boundaries

- **Pipeline directs the workflow, Build produces the artifact, and Deploy releases it.**
- **AppSync handles GraphQL, API Gateway handles general APIs, and Amplify handles the web/mobile full-stack experience.**
- **Connect is a contact center, SES is email, and SNS publishes notifications.**

## Typical serverless combinations

- Web API: API Gateway → Lambda → DynamoDB, with X-Ray for request tracing.
- Static-site contact form: S3 → API Gateway → Lambda → SES.
- Cloud contact center: Connect → agents or Lambda extensions.

## Key takeaway

**Identify the object first: standard, review, configuration, runtime, trace, build, pipeline, API, email, contact center, application, desktop, browser, or device.**

---
title: "Specialized Solutions Overview"
fullName: "Specialized Solutions Overview"
description: "Choose by the real object involved: APIs, business communications, end-user computing, or IoT."
service: "Architecture"
category: architecture
kind: topic
lang: en
topicKey: "专业解决方案概览"
frequency: "Phase summary"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "specialized-solutions", "AWS"]
notionId: 3b3964dc-ce4a-8107-9461-e75f6bf2999e
notionUrl: https://app.notion.com/p/3b3964dcce4a81079461e75f6bf2999e
notionUpdated: "2026-08-05T01:57:00.000Z"
---

## One-line summary

Identify whether the problem is API development, business communication, an application, a full desktop, an isolated browser, or device connectivity before choosing a service.

## Selection map

| Requirement | First choice |
| --- | --- |
| Managed GraphQL API and real-time subscriptions | AWS AppSync |
| Full-stack web/mobile development and hosting | AWS Amplify |
| Voice, chat, IVR, queues, agents, and callbacks | Amazon Connect |
| Application email delivery | Amazon SES |
| Stream individual desktop applications | Amazon WorkSpaces Applications |
| Full Windows or Linux cloud desktop | Amazon WorkSpaces |
| Controlled, isolated browser session | Amazon WorkSpaces Secure Browser |
| Secure device connectivity, telemetry, and commands | AWS IoT Core |

## Common distinctions

- AppSync specializes in GraphQL; API Gateway is the general REST, HTTP, and WebSocket front door; Amplify is a full-stack delivery experience for web/mobile teams.
- Connect is a contact center, SES delivers email, and SNS publishes notifications.
- Applications delivers apps, WorkSpaces delivers a desktop, and Secure Browser delivers only an isolated browser.
- IoT Core manages device identity, connectivity, and messaging; downstream services still store and analyze data.

## Key takeaway

**Ask what the user or device actually receives before matching a product name.**

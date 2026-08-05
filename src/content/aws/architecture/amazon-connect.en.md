---
title: "Amazon Connect"
fullName: "Amazon Connect"
description: "Build an on-demand cloud contact center for voice, chat, IVR, queues, agents, and callbacks."
service: "Amazon Connect"
category: architecture
kind: service
lang: en
topicKey: "Amazon Connect"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "Amazon Connect", "AWS"]
notionId: 3b3964dc-ce4a-81ab-9581-f2bd320a457a
notionUrl: https://app.notion.com/p/3b3964dcce4a81ab9581f2bd320a457a
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## One-line summary

Build a cloud contact center that uses contact flows, IVR, queues, and routing to connect voice or chat contacts with agents or self-service workflows.

## Core role

- Manage voice, chat, outbound contact, callbacks, queues, and the agent workspace.
- Route contacts according to skills and business rules.
- Use Lambda for business data, Lex for conversational understanding, and Polly for speech synthesis.

## Exam focus and pitfalls

- IVR, queues, agents, and callbacks point to Amazon Connect.
- SES delivers application email; SNS publishes notifications; Connect is a real-time customer contact center.
- CloudFront distributes web content and does not route calls or chats.
- Extensions still require protection of customer data, least-privilege Lambda access, and flow monitoring.

## Key takeaway

**Voice/chat + IVR + queue + agent + callback means Amazon Connect.**

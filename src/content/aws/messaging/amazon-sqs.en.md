---
title: "Amazon SQS"
fullName: "Amazon SQS"
description: "A managed message queue that decouples producers and consumers and buffers work for reliable asynchronous processing."
service: "Amazon SQS"
category: messaging
kind: service
lang: en
topicKey: "Amazon SQS"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["messaging","Amazon SQS","AWS"]
notionId: 3a6964dc-ce4a-81ba-bf24-f388c5cddd42
notionUrl: https://app.notion.com/p/3a6964dcce4a81babf24f388c5cddd42
notionUpdated: "2026-07-23T07:21:16.024Z"
---

## In one sentence

> A managed message queue that decouples producers and consumers and buffers work for reliable asynchronous processing.

## Key points

- Standard queues provide very high throughput with at-least-once delivery and possible duplicates or reordering.
- FIFO queues preserve order within message groups and support deduplication with lower throughput limits.
- Visibility Timeout hides a received message while it is processed; successful consumers delete it.

## Exam takeaway

> Use DLQs, retries, idempotent consumers, and suitable retention and visibility settings.

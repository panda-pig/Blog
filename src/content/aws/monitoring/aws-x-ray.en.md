---
title: "AWS X-Ray"
fullName: "AWS X-Ray"
description: "Traces requests through distributed applications to analyze bottlenecks and errors."
service: "AWS X-Ray"
category: monitoring
kind: service
lang: en
topicKey: "AWS X-Ray"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["monitoring", "AWS X-Ray", "AWS"]
notionId: 3a6964dc-ce4a-814a-a684-f401dfdce7d9
notionUrl: https://app.notion.com/p/3a6964dcce4a814aa684f401dfdce7d9
notionUpdated: "2026-08-05T01:57:35.867Z"
---

## Basic information

| Field | Content |
| --- | --- |
| English | AWS X-Ray |
| Full name | AWS X-Ray |
| Chinese | 分布式追踪 |
| Japanese | 分散トレーシング |
| Exam frequency | ⭐⭐⭐ |
| Often confused with | CloudWatch |

## In one sentence

Traces requests through distributed applications to analyze bottlenecks and errors.

## Stage summary

- **Core role**：Traces requests through distributed applications to analyze bottlenecks and errors.
- **Exam frequency**：3 / 5
- **Compare with**：CloudWatch

## Memory hook

AWS X-Ray = Traces requests through distributed applications to analyze bottlenecks and errors.

## Core concepts

- A **trace** is one request across the complete distributed path.
- **Segments and subsegments** record latency, errors, and metadata.
- The **service map** visualizes dependencies, latency, and error rates; sampling controls volume.

The X-Ray SDK or OpenTelemetry propagates trace context, and services such as Lambda, API Gateway, ECS, and EC2 contribute an end-to-end trace. CloudWatch shows system health, X-Ray locates a request's bottleneck or failure, and CloudTrail audits who did what and when.

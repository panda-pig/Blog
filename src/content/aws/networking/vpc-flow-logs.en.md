---
title: "VPC Flow Logs"
fullName: "Amazon VPC Flow Logs"
description: "Records ENI traffic metadata such as peers, ports, byte counts, and ACCEPT or REJECT decisions."
service: "Amazon VPC Flow Logs"
category: networking
kind: service
lang: en
topicKey: "Amazon VPC Flow Logs"
frequency: "考试频率 ⭐⭐⭐⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["networking","Amazon VPC Flow Logs","AWS"]
notionId: 3f3964dc-ce4a-8150-a03f-fd1db871cb44
notionUrl: https://app.notion.com/p/3f3964dcce4a8150a03ffd1db871cb44
notionUpdated: "2026-10-08T01:13:37.200Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | Amazon VPC Flow Logs |
| Chinese | VPC 流日志 |
| Japanese | VPC フローログ |
| Review priority | 考试频率 ⭐⭐⭐⭐⭐ |
| Often confused with | Traffic Mirroring / CloudTrail / Reachability Analyzer |

## In one sentence

Records ENI traffic metadata such as peers, ports, byte counts, and ACCEPT or REJECT decisions.

## Core summary

Flow logs can be enabled at VPC, subnet, or ENI scope and delivered to CloudWatch Logs, S3, or Firehose. They do not contain full packet payloads.

## Study points

- ACCEPT proves only that network controls accepted the flow, not that the application responded.
- A REJECT still requires inspection of the actual security group and NACL rules.
- Use Athena with S3 or Logs Insights and alarms with CloudWatch Logs.
- Aggregation and delivery introduce delay; this is not live packet capture.

## Common pitfalls

- NODATA or SKIPDATA is not proof that connectivity is healthy.
- Flow Logs show metadata, CloudTrail shows API activity, and Mirroring copies packets.

## Key memory

**Flow Logs for metadata; Mirroring for packet copies; CloudTrail for API activity.**

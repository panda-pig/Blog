---
title: "Region, AZ, Edge, Global, and Regional Scope"
fullName: "Region, Availability Zone, Edge, Global and Regional Scope"
description: "A single comparison of AWS geographic layers, service scope, and resource placement."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "Region・AZ・Edge・Global・Regional 总对比"
frequency: "High-frequency comparison"
date: 2026-08-13
updated: 2026-08-15
tags: ["compare", "Region", "Availability Zone", "AWS"]
notionId: 3bb964dc-ce4a-8118-a234-eeafd5e36e4b
notionUrl: https://app.notion.com/p/3bb964dcce4a8118a234eeafd5e36e4b
notionUpdated: "2026-08-13T00:36:56.363Z"
---

## In one sentence

**Regions and AZs describe placement and failure isolation, Edge describes nearby user entry points, and Global / Regional / Zonal describe service and resource scope.**

## Comparison

| Concept | Meaning | Typical examples |
| --- | --- | --- |
| Region | An independent geographic area containing multiple AZs | ap-northeast-1 |
| Availability Zone | A failure-isolation boundary made of one or more discrete data centers | Multi-AZ designs |
| Edge Location / PoP | An edge network site near end users | CloudFront, Route 53, Global Accelerator |
| Global Service | Management is not centered on one selected Region | IAM, Route 53, CloudFront |
| Regional Service | Resources and operations belong to one Region | DynamoDB, SQS |
| Zonal Resource | A resource placed in a specific AZ | EC2, EBS, Subnet |

## Key boundaries

- A VPC is regional while a subnet is zonal.
- EC2 is viewed by Region, but an instance lives in an AZ.
- A globally unique S3 bucket name does not make the bucket a global resource.
- Switching the console Region can make regional resources disappear from the list without deleting them.
- Choose a Region by compliance, latency, service availability, then price.

## Exam traps

Multi-AZ is not Region-level disaster recovery, Multi-Region does not automate replication or failover, and an Edge Location is neither an AZ nor a normal EC2 deployment location.

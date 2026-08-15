---
title: "AWS Global Infrastructure"
fullName: "AWS Global Infrastructure"
description: "AWS organizes infrastructure into Regions, isolated Availability Zones, and edge locations close to users."
service: "Cloud Foundations"
category: cloud-practitioner
kind: topic
lang: en
topicKey: "AWS 全球基础设施"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-08-15
tags: ["cloud-practitioner","AWS 全球基础设施","AWS"]
notionId: 3a6964dc-ce4a-8137-955b-d4d5d4decdc2
notionUrl: https://app.notion.com/p/3a6964dcce4a8137955bd4d5d4decdc2
notionUpdated: "2026-08-13T00:39:04.753Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS Global Infrastructure |
| Full name | AWS Global Infrastructure |
| Chinese description | AWS 全球基础设施 |
| Japanese description | AWS グローバルインフラストラクチャ |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Region / Availability Zone / Edge Location / Multi-AZ / Multi-Region |

## In one sentence

> AWS organizes infrastructure into Regions, isolated Availability Zones, and edge locations close to users.

## Key points

- Choose a Region by compliance and data residency, user proximity, service availability, and price.
- Multi-AZ improves availability within one Region; Multi-Region addresses regional recovery, global latency, or residency.
- Edge locations support services such as CloudFront and are not Availability Zones for ordinary EC2 deployment.
- A global service is not centered on one selected Region, but that does not mean all data is globally replicated.
- Regional resources change with the console Region Selector; zonal resources such as EC2, EBS, and subnets live in a specific AZ.
- A VPC is regional while a subnet is zonal, and global S3 bucket-name uniqueness does not make a bucket a global resource.
- AWS WAF scope depends on the protected resource: CloudFront scope differs from regional resources such as ALB and API Gateway.

## Exam takeaway

> Cross-Region traffic and failover require explicit data replication, routing, RTO, RPO, and operational design.

---
title: "Cloud Concepts"
fullName: "Cloud Concepts"
description: "Summarizes Cloud Practitioner keywords for pay-as-you-go, global infrastructure, shared responsibility, and core service selection."
service: "CLF-C02"
category: cloud-practitioner
kind: topic
lang: en
topicKey: "云概念"
frequency: "Exam frequency ★★★★★"
date: 2026-07-30
updated: 2026-08-15
tags: ["Cloud Concepts","CLF-C02","Foundations"]
notionId: 3a6964dc-ce4a-8161-8312-db30847cd94e
notionUrl: https://app.notion.com/p/3a6964dcce4a81618312db30847cd94e
notionUpdated: "2026-08-13T00:40:37.629Z"
---

## In one sentence

> Cloud computing delivers IT resources on demand over the internet with usage-based pricing.

## Essential concepts

- Cloud benefits: trade fixed expense for variable expense, economies of scale, stop guessing capacity, agility, less data-center work, and rapid global reach.
- CapEx purchases assets in advance; OpEx varies with usage. Pay-as-you-go is not automatically low cost.
- A Region is a geographic area, AZs are isolated failure domains inside it, and Edge Locations sit near end users.
- Region choice depends on compliance, proximity, service availability, and price.
- Shared Responsibility: AWS secures the cloud; customers secure what they configure and place in the cloud.

## High-frequency keywords

- Capacity follows demand → Elasticity; resources in minutes → Agility.
- Survive an AZ failure → Multi-AZ; Region-level recovery → Multi-Region.
- Private subnet outbound internet → NAT Gateway; cached static content → CloudFront.
- Object / block / file storage → S3 / EBS / EFS or FSx.
- Centralized multi-service backup → AWS Backup; continuous server replication → AWS DRS.

## Common traps

- An IGW alone does not make an instance internet-ready; routes, a public address, and security rules are also required.
- Direct Connect is not encrypted by default; dedicated connectivity and encryption are separate.
- Security Groups are stateful allow-only controls; NACLs are stateless and allow or deny.
- Multi-AZ is not Multi-Region, and managed or serverless does not remove customer responsibility.
- S3 is object, EBS is block, and EFS / FSx are file storage.

## SAA starting point: account and infrastructure

- Root is the account's inherent identity, not an IAM user, and is reserved for recovery and root-only tasks.
- A Region contains multiple AZ failure domains; Edge Locations / PoPs sit near users.
- Global, regional, and zonal describe scope, so service management scope and resource placement must be evaluated separately.
- If EC2 or EBS disappears after a Region switch, check the resource Region, account, and permissions.
- Multi-AZ addresses AZ failure; Multi-Region addresses regional recovery but does not automate replication or failover.

## Key takeaway

> **Read the keywords first, then identify whether the question tests cost, elasticity, failure domain, connection target, or responsibility boundary.**

## Related notes

Networking, Storage, Architecture, Shared Responsibility, Cloud Practitioner exam topics.

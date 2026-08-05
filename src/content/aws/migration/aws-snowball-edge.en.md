---
title: "AWS Snowball Edge"
fullName: "AWS Snowball Edge Storage Optimized"
description: "The classic offline data-migration and edge-computing device from course material, interpreted with its current availability."
service: "AWS Snowball Edge"
category: migration
kind: service
lang: en
topicKey: "AWS Snowball Edge"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["migration", "Snowball Edge", "AWS"]
notionId: 3b3964dc-ce4a-8154-bbfc-f52294dcff18
notionUrl: https://app.notion.com/p/3b3964dcce4a8154bbfcf52294dcff18
notionUpdated: "2026-08-05T01:41:00.000Z"
---

## One-line summary

The classic offline-migration pattern: AWS ships a secured device, the customer loads and returns it, and AWS imports the data into cloud storage.

## Use cases and flow

- The network is unavailable or unreliable, or moving terabytes or petabytes online would take too long.
- AWS ships the device → the customer copies and validates data → returns it → AWS imports the data and erases customer data from the device.
- Existing customers may also use supported devices for edge workloads in disconnected or constrained environments.

## Current status

- Snowball Edge is no longer available to new customers, although legacy exam questions still use it as the offline physical-migration answer.
- New customers should evaluate DataSync for online movement, Data Transfer Terminal or partner offerings for physical transfer, and Outposts for edge computing.

## Common distinctions

- DataSync moves data online; Direct Connect supplies a dedicated network path; Snowball Edge is a physical device.
- Physical transfer does not remove the need for encryption, chain of custody, and integrity validation.

## Key takeaway

**Exam: weak network plus very large data means Snowball Edge. Real project: verify current availability and alternatives first.**

## Official reference

- [AWS Snowball Edge availability change](https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html)

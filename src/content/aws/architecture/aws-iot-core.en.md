---
title: "AWS IoT Core"
fullName: "AWS IoT Core"
description: "Securely connect large fleets of physical devices to AWS for telemetry and cloud-to-device commands."
service: "AWS IoT Core"
category: architecture
kind: service
lang: en
topicKey: "AWS IoT Core"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "IoT", "AWS"]
notionId: 3b3964dc-ce4a-81d4-8b8d-e0b62575728a
notionUrl: https://app.notion.com/p/3b3964dcce4a81d48b8de0b62575728a
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## One-line summary

Use certificates and encrypted connections to let large device fleets publish telemetry and receive cloud commands through topics.

## Core components

- The device gateway and certificates provide connectivity and identity.
- The message broker uses MQTT topics for publish/subscribe communication.
- The rules engine routes messages to Lambda, S3, DynamoDB, Kinesis, and other services.
- Device Shadow coordinates desired and reported state, including while a device is offline.

## Exam focus and pitfalls

- Device identity, secure connectivity, telemetry, and bidirectional commands point to IoT Core.
- Edge processing and offline execution point to IoT Greengrass.
- Kinesis handles general streams; IoT Core additionally understands device identity, protocols, topics, and state.
- IoT Core is not a long-term data warehouse; route messages to downstream storage or analytics.

## Key takeaway

**Device certificate + MQTT topic + rules engine + Device Shadow.**

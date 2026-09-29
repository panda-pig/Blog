---
title: "EC2 Lifecycle: Reboot, Stop, Hibernate, and Terminate"
fullName: "EC2 Instance Lifecycle and Hibernation"
description: "Compare what happens to memory, EBS, instance store, addresses, and charges during EC2 lifecycle operations."
service: "Amazon EC2"
category: compute
kind: topic
lang: en
topicKey: "EC2 Instance Lifecycle and Hibernation"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["EC2", "hibernation", "lifecycle", "EBS"]
notionId: 3e8964dc-ce4a-81e0-a2dc-e71df7e51224
notionUrl: https://app.notion.com/p/3e8964dcce4a81e0a2dce71df7e51224
notionUpdated: "2026-09-27T05:01:04.233Z"
---

## Core comparison

| Operation | RAM and processes | EBS | Instance store | Start again? |
| --- | --- | --- | --- | --- |
| Reboot | The OS restarts | Retained | Usually retained | Returns to Running |
| Stop | Cleared | Retained | Lost | Yes |
| Hibernate | RAM is written to the encrypted root EBS volume and later restored | Retained | Lost | Yes |
| Terminate | Cleared | Controlled by Delete on Termination | Lost | No |

Hibernation must be enabled at launch and requires a supported AMI, OS, and instance type plus an encrypted root EBS volume with enough capacity.

## Boundaries

- Hibernation preserves runtime state; it is not backup, snapshot, DR, or Multi-AZ HA.
- Compute charges stop after stop/hibernate, but EBS and public IPv4 resources can still cost money.
- The primary private IPv4 normally remains; an auto-assigned public IPv4 is usually released; an Elastic IP stays associated.
- A later start does not normally rerun first-boot user data.
- Volume deletion on termination depends on the block device mapping.

## Decision cues

Preserve RAM and processes → Hibernate; ordinary shutdown → Stop; restart only the OS → Reboot; permanently remove the instance → Terminate.

## Remember

**Stop keeps disks but not memory; Hibernate stores memory on encrypted root EBS; Terminate is irreversible.**

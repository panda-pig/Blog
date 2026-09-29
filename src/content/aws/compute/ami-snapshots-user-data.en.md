---
title: "AMI: Custom Images, Snapshots, and User Data"
fullName: "Amazon Machine Image, EBS Snapshot, and EC2 User Data"
description: "Separate bootable templates, volume point-in-time copies, and initialization scripts, then combine Golden AMIs with user data."
service: "Amazon EC2"
category: compute
kind: topic
lang: en
topicKey: "AMI Snapshots and User Data"
frequency: "SAA 高频"
date: 2026-09-29
updated: 2026-09-29
tags: ["AMI", "EBS Snapshot", "User Data", "EC2"]
notionId: 3e8964dc-ce4a-810b-8665-f7b4195be3f8
notionUrl: https://app.notion.com/p/3e8964dcce4a810b8665f7b4195be3f8
notionUpdated: "2026-09-28T04:09:12.223Z"
---

## In one sentence

**An AMI is a bootable EC2 template, a snapshot is a point-in-time copy of an EBS volume, and user data initializes an instance at launch.**

| Concept | Stores | Main purpose | Does not store |
| --- | --- | --- | --- |
| AMI | System template, block device mapping, related snapshots | Launch consistent EC2 instances | Original instance ID, ENI, IP, RAM, or processes |
| EBS snapshot | Block-level volume data at a point in time | Restore volumes and move data across AZs or Regions | Complete EC2 launch configuration |
| User data | A launch-time script | Lightweight, environment-specific configuration | A reusable image |
| Hibernate | RAM on the root EBS volume | Restore the prior process state | A deployment template |

## Design points

- Creating an EBS-backed AMI creates related snapshots; the default reboot improves filesystem consistency.
- AMIs are regional resources and must be copied across Regions.
- A public AMI is not automatically trusted; verify the owner, patch level, and provenance.
- Cross-account encrypted AMIs also require snapshot and KMS key permissions.
- Deregistering an AMI does not automatically remove every backing snapshot.

## Recommended combination

Bake stable, large, slow-changing dependencies into a Golden AMI. Use user data for environment settings, service registration, and last-mile initialization. Keep scripts repeatable and never embed long-term credentials.

## Remember

**An AMI defines what starts, a snapshot captures volume data, and user data defines what happens after launch.**

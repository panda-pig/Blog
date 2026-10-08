---
title: "Instance Scheduler on AWS"
fullName: "Instance Scheduler on AWS"
description: "A CloudFormation-deployed solution that starts and stops supported EC2 and RDS resources by time zone, schedule, and tags."
service: "Instance Scheduler on AWS"
category: devops
kind: service
lang: en
topicKey: "Instance Scheduler on AWS"
frequency: "复习优先级 ⭐⭐"
date: 2026-10-08
updated: 2026-10-08
tags: ["devops","Instance Scheduler on AWS","AWS"]
notionId: 3f3964dc-ce4a-815f-9802-f55a5539f7fe
notionUrl: https://app.notion.com/p/3f3964dcce4a815f9802f55a5539f7fe
notionUpdated: "2026-10-08T02:55:13.905Z"
---
## Basic information

| Field | Details |
| --- | --- |
| English / full name | Instance Scheduler on AWS |
| Chinese | 实例定时启停解决方案 |
| Japanese | インスタンスのスケジュール起動・停止ソリューション |
| Review priority | 复习优先级 ⭐⭐ |
| Often confused with | EventBridge Scheduler / Auto Scaling / CloudFormation |

## In one sentence

A CloudFormation-deployed solution that starts and stops supported EC2 and RDS resources by time zone, schedule, and tags.

## Core summary

DynamoDB stores schedules, Lambda executes actions, and tags select targets. Cross-account and cross-Region use requires explicit scope and authorization.

## Study points

- Useful for office-hour schedules in development and test environments.
- Stop is not delete; storage, snapshots, and solution resources may still cost money.
- A stopped RDS DB instance automatically restarts after at most seven days.
- Manage Auto Scaling groups through capacity and scheduling controls.

## Common pitfalls

- It is an AWS Solution, not a general managed scheduler with the same name.
- Scheduled downtime can affect dependencies, availability, and RTO.

## Key memory

**CloudFormation deploys it, DynamoDB stores schedules, Lambda acts, and tags choose targets.**

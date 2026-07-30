---
title: Amazon EC2
fullName: "Amazon Elastic Compute Cloud"
description: Virtual servers in the AWS Cloud, offering extensive system control while leaving the guest OS, patches, runtime, and applications under your responsibility.
service: EC2
category: compute
kind: service
lang: en
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-23
updated: 2026-07-30
tags: [Compute, IaaS, SAA-C03, Cloud Practitioner]
notionId: 3a6964dc-ce4a-8158-b0a8-d1d2f5cf6e05
notionUrl: https://app.notion.com/p/3a6964dcce4a8158b0a8d1d2f5cf6e05
notionUpdated: "2026-07-23T07:19:19.291Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | Amazon EC2 |
| Full name | Amazon Elastic Compute Cloud |
| Chinese name | 弹性云服务器 / 虚拟机 |
| Japanese name | Amazon EC2（仮想サーバー） |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | Lambda / Fargate / Lightsail |

## In one sentence

> EC2 is a virtual server in the AWS Cloud: you choose the operating system and configuration, but you also manage the guest OS, patches, runtime, and applications.

## Core purpose

- Run long-lived web applications, APIs, databases, and background services.
- Select CPU, memory, networking, storage, and accelerator hardware.
- Support workloads that need operating-system control, custom software, or continuous execution.

## How it works

Choose an AMI → choose an instance type → configure networking, IAM, security groups, and storage → launch the instance → deploy the application → monitor it with CloudWatch.

### AMI

An Amazon Machine Image is the template used to launch EC2. It normally contains an operating system, software, configuration, and references to one or more EBS snapshots.

- **AWS-provided AMI**: maintained by AWS.
- **Marketplace AMI**: supplied by a third party.
- **Custom AMI**: created from your own instance to reproduce an environment.

## Instance families

| Family | Typical use |
| --- | --- |
| General Purpose | Web applications and development environments |
| Compute Optimized | Batch processing, HPC, game servers, scientific modeling |
| Memory Optimized | In-memory databases, large caches, real-time analytics |
| Accelerated Computing | GPU, machine learning, graphics processing |
| Storage Optimized | High-throughput local storage and data-intensive workloads |

## Pricing models

| Model | Best fit |
| --- | --- |
| On-Demand | Short-term or unpredictable usage |
| Savings Plans / Reserved Instances | Stable long-term usage in exchange for a commitment |
| Spot | Fault-tolerant and interruptible workloads |
| Dedicated Instance | Single-tenant hardware without host-level control |
| Dedicated Host | Physical host visibility and license compliance |

## Cloud Practitioner focus

- EC2 is an IaaS service.
- The customer manages the guest OS, patches, applications, and data.
- Instances can be created, stopped, resized, and terminated on demand.
- EC2 is commonly combined with EBS, ELB, and Auto Scaling.

## SAA-C03 focus

- Choose an instance family based on CPU, memory, storage, and network needs.
- Standardize deployments with AMIs and launch templates.
- Use multiple Availability Zones, ELB, and Auto Scaling for resilience and elasticity.
- Choose a pricing model based on usage stability and tolerance for interruption.
- Use IAM roles instead of long-term access keys inside applications.

## Common misconceptions

- EC2 usually means a virtual machine, not a physical server.
- A single EC2 instance is not automatically highly available.
- ELB distributes traffic; Auto Scaling adds, removes, or replaces instances.
- Dedicated Hosts and Dedicated Instances are different offerings.

## Key takeaway

> **EC2 provides more control, but that control comes with more operational responsibility.**

A classic highly available pattern is: **AMI / Launch Template + Multi-AZ Auto Scaling Group + ELB + CloudWatch**.

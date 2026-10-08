---
title: "AWS CloudFormation"
fullName: "AWS CloudFormation"
description: "AWS infrastructure as code that creates and manages repeatable resource stacks from declarative templates."
service: "AWS CloudFormation"
category: devops
kind: service
lang: en
topicKey: "AWS CloudFormation"
frequency: "Exam frequency ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-10-08
tags: ["devops","AWS CloudFormation","AWS"]
notionId: 3a6964dc-ce4a-81fe-8a73-c98ed403b25b
notionUrl: https://app.notion.com/p/3a6964dcce4a81fe8a73c98ed403b25b
notionUpdated: "2026-10-08T03:10:42.581Z"
---

## Basic Information

| Field | Details |
| --- | --- |
| English name | AWS CloudFormation |
| Full name | AWS CloudFormation |
| Chinese description | AWS 基础设施即代码服务 |
| Japanese description | AWS CloudFormation（コードによるインフラストラクチャ管理サービス） |
| Exam frequency | ⭐⭐⭐⭐⭐ |
| Often confused with | AWS CLI / SDK / CDK / Terraform / Elastic Beanstalk |

## In one sentence

> AWS infrastructure as code that creates and manages repeatable resource stacks from declarative templates.

## Key points

- Templates use YAML or JSON to declare resources, parameters, conditions, mappings, and outputs.
- A Stack manages resources as one unit, while Change Sets preview updates and rollback handles failures.
- Drift Detection finds differences between templates and actual resources; StackSets deploy across accounts and Regions.

## Exam takeaway

> Console is manual, CLI is command automation, SDK is application integration, and CloudFormation is declarative infrastructure management.

## Update: changes and drift

- A template declares desired state and a stack manages the resource set. A change set previews resources that will be created, modified, or deleted.
- Drift detection compares actual resources with CloudFormation's expected state, but it neither repairs drift automatically nor supports every property.
- DeletionPolicy and UpdateReplacePolicy control retain, snapshot, or delete behavior during deletion and replacement.
- Avoid manual console changes to managed resources, and control coupling and secrets in parameters, dynamic references, and cross-stack outputs.

## Update: IaC, changes, and retention policies

- A template defines resources and a stack is a deployment instance. A change set previews changes but cannot guarantee zero application interruption.
- Drift detection compares supported live resources with template expectations and does not repair every drift automatically.
- DeletionPolicy and UpdateReplacePolicy control retention during deletion and replacement. Design service roles and iam:PassRole with least privilege.

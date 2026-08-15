---
title: "AWS CodePipeline"
fullName: "AWS CodePipeline"
description: "Orchestrates the delivery flow from source through build, test, and deployment."
service: "AWS CodePipeline"
category: devops
kind: service
lang: en
topicKey: "AWS CodePipeline"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-15
tags: ["devops", "AWS CodePipeline", "AWS"]
notionId: 3a6964dc-ce4a-81a8-9761-d977429ec679
notionUrl: https://app.notion.com/p/3a6964dcce4a81a89761d977429ec679
notionUpdated: "2026-08-05T01:57:32.443Z"
---

## Basic information

| Field | Content |
| --- | --- |
| English | AWS CodePipeline |
| Full name | AWS CodePipeline |
| Chinese | 持续交付流水线 |
| Japanese | 継続的デリバリーパイプライン |
| Exam frequency | ⭐⭐⭐ |
| Often confused with | CodeBuild / CodeDeploy |

## In one sentence

Orchestrates the delivery flow from source through build, test, and deployment.

## Stage summary

- **Core role**：Orchestrates the delivery flow from source through build, test, and deployment.
- **Exam frequency**：3 / 5
- **Compare with**：CodeBuild / CodeDeploy

## Memory hook

AWS CodePipeline = Orchestrates the delivery flow from source through build, test, and deployment.

## How it works

- Connects Source, Build, Test, Manual Approval, and Deploy stages into a repeatable release process.
- Actions run inside each stage, while artifacts carry versions and output between stages.
- Source changes or events can trigger execution; a failure stops later stages and remains in execution history.

CodePipeline **orchestrates** and does not compile code itself. CodeBuild builds, CodeDeploy deploys, and CloudFormation can release infrastructure.

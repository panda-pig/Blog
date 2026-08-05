---
title: "AWS CodeBuild"
fullName: "AWS CodeBuild"
description: "Compiles code, runs tests, and produces build artifacts in temporary environments."
service: "AWS CodeBuild"
category: devops
kind: service
lang: en
topicKey: "AWS CodeBuild"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-07-31
updated: 2026-08-05
tags: ["devops", "AWS CodeBuild", "AWS"]
notionId: 3a6964dc-ce4a-813d-a5d5-d5fa9b9d81f8
notionUrl: https://app.notion.com/p/3a6964dcce4a813da5d5d5fa9b9d81f8
notionUpdated: "2026-08-05T01:57:34.782Z"
---

## Basic information

| Field | Content |
| --- | --- |
| English | AWS CodeBuild |
| Full name | AWS CodeBuild |
| Chinese | 托管构建服务 |
| Japanese | マネージドビルド |
| Exam frequency | ⭐⭐⭐ |
| Often confused with | CodePipeline |

## In one sentence

Compiles code, runs tests, and produces build artifacts in temporary environments.

## Stage summary

- **Core role**：Compiles code, runs tests, and produces build artifacts in temporary environments.
- **Exam frequency**：3 / 5
- **Compare with**：CodePipeline

## Memory hook

AWS CodeBuild = Compiles code, runs tests, and produces build artifacts in temporary environments.

## How it works

1. Retrieves source from a repository, S3, or CodePipeline.
2. Runs install, pre_build, build, and post_build phases from `buildspec.yml`.
3. Compiles, tests, and packages in an isolated ephemeral environment.
4. Outputs artifacts and sends logs to CloudWatch Logs.

CodeBuild **runs builds and tests**; CodePipeline **orchestrates the pipeline**; CodeDeploy **deploys to targets**. Private dependencies and VPC resources also require correct network, IAM role, and secret access.

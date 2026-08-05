---
title: "Amazon WorkSpaces"
fullName: "Amazon WorkSpaces"
description: "Provide users with a complete managed Windows or Linux cloud desktop."
service: "Amazon WorkSpaces"
category: architecture
kind: service
lang: en
topicKey: "Amazon WorkSpaces"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "WorkSpaces", "AWS"]
notionId: 3b3964dc-ce4a-81a4-8564-c399f28400e3
notionUrl: https://app.notion.com/p/3b3964dcce4a81a48564c399f28400e3
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## One-line summary

Provide each user with a complete managed Windows or Linux cloud desktop for remote work, temporary teams, or VDI replacement.

## Core role

- Centrally manage desktop bundles, directories, images, storage, and access.
- Users connect through a client or supported browser while compute and data remain primarily in AWS.
- Fit use cases that need multiple applications, a persistent environment, and user personalization.

## Exam focus and pitfalls

- A full virtual desktop points to WorkSpaces; an individual app points to WorkSpaces Applications; an isolated browser points to Secure Browser.
- Accessing a WorkSpace through a browser is only a client method and is not the Secure Browser service.
- Directory integration, latency, user-data persistence, images, software licensing, and endpoint policy still require design.

## Key takeaway

**A complete cloud desktop means Amazon WorkSpaces.**

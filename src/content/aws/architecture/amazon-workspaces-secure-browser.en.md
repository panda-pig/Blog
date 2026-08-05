---
title: "Amazon WorkSpaces Secure Browser"
fullName: "Amazon WorkSpaces Secure Browser (formerly Amazon WorkSpaces Web)"
description: "Enter an AWS-managed isolated browser session from an existing local browser."
service: "Amazon WorkSpaces Secure Browser"
category: architecture
kind: service
lang: en
topicKey: "Amazon WorkSpaces Secure Browser"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "Secure Browser", "AWS"]
notionId: 3b3964dc-ce4a-81a9-942a-d9a0079c05f3
notionUrl: https://app.notion.com/p/3b3964dcce4a81a9942ad9a0079c05f3
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## One-line summary

Let users enter a disposable AWS-managed isolated browser session from their existing browser to reach private sites, SaaS, or the internet.

## Core role

- Run web content and potential risk in an isolated cloud browser while streaming the experience to the endpoint.
- Control access through a portal, identity provider, VPC networking, and browser policies.
- Restrict URLs, clipboard, file transfer, and printing to reduce data-exfiltration risk on personal devices.

## Exam focus and pitfalls

- Controlled browser-only access points to Secure Browser; a full desktop points to WorkSpaces; desktop apps point to Applications.
- The former name is Amazon WorkSpaces Web.
- WorkSpaces Web Access is a client method for a full WorkSpace and is not the Secure Browser service.

## Key takeaway

**Deliver a controlled isolated browser, not a full desktop.**

## Official reference

- [Amazon WorkSpaces Secure Browser](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/)

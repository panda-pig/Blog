---
title: "Amazon WorkSpaces Applications"
fullName: "Amazon WorkSpaces Applications (formerly Amazon AppStream 2.0)"
description: "Stream desktop applications from AWS without providing users an entire virtual desktop."
service: "Amazon WorkSpaces Applications"
category: architecture
kind: service
lang: en
topicKey: "Amazon WorkSpaces Applications"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "WorkSpaces Applications", "AWS"]
notionId: 3b3964dc-ce4a-81eb-a897-ffd12fbc0c94
notionUrl: https://app.notion.com/p/3b3964dcce4a81eba897ffd12fbc0c94
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## One-line summary

Centrally host one or more desktop applications and stream them through a client or HTML5 browser without delivering a full desktop.

## Core role

- Maintain application images and versions centrally and scale streaming sessions on demand.
- Run applications on AWS compute while the endpoint mainly receives visuals and input.
- Support controlled application access for contractors, classrooms, or environments that restrict local data storage.

## Exam focus and pitfalls

- Individual desktop applications point to WorkSpaces Applications; a full desktop points to WorkSpaces; an isolated browser points to Secure Browser.
- Amazon AppStream 2.0 in older course material corresponds to the current WorkSpaces Applications name.
- Fleet type, concurrency, images, identity, networking, and session policies determine cost and experience.

## Key takeaway

**Deliver the application, not the whole desktop.**

## Official reference

- [Amazon WorkSpaces Applications](https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html)

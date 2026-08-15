---
title: "AWS Account, Identity, Session, Region, and Visibility"
fullName: "AWS Account, Identity, Session, Region and Resource Visibility"
description: "A layered way to troubleshoot why an AWS resource is not visible."
service: "AWS Compare"
category: compare
kind: compare
lang: en
topicKey: "AWS Account・Identity・Session・Region・资源可见性总对比"
frequency: "High-frequency comparison"
date: 2026-08-13
updated: 2026-08-15
tags: ["compare", "AWS Account", "IAM", "Region"]
notionId: 3bb964dc-ce4a-81a6-8748-f8e9edccf76b
notionUrl: https://app.notion.com/p/3bb964dcce4a81a68748f8e9edccf76b
notionUpdated: "2026-08-13T04:40:08.503Z"
---

## In one sentence

**The account owns resources and billing, identity says who is accessing, session stores the current login, Region / AZ locates resources, and policy controls allowed actions.**

## Visibility layers

| Layer | Question |
| --- | --- |
| Account | Which account owns the resource? |
| Identity | Which principal is making the request? |
| Session | Which login context is in this window? |
| Region / AZ | Where is the resource located? |
| Permission | Does the principal have List, Describe, Get, or other required actions? |

A volume created by an administrator belongs to the account and target Region / AZ, not privately to that IAM user. Each later API action is evaluated again.

## Troubleshooting order

Check the 12-digit account ID, current identity, selected Region, List / Describe permissions, console filters and resource state, then whether the resource scope is global, regional, or zonal.

Multi-session only keeps login contexts in parallel. It creates no account, copies no resources, merges no permissions, and changes no ownership.

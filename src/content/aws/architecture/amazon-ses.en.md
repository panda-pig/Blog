---
title: "Amazon SES"
fullName: "Amazon Simple Email Service"
description: "Send transactional, notification, and marketing email from applications through an API or SMTP."
service: "Amazon SES"
category: architecture
kind: service
lang: en
topicKey: "Amazon SES"
frequency: "Exam frequency ⭐⭐⭐"
date: 2026-08-05
updated: 2026-08-05
tags: ["architecture", "SES", "email", "AWS"]
notionId: 3b3964dc-ce4a-8146-aa99-cef193233027
notionUrl: https://app.notion.com/p/3b3964dcce4a8146aa99cef193233027
notionUpdated: "2026-08-05T01:59:00.000Z"
---

## One-line summary

Let applications send registration, password-reset, order, notification, and marketing email at scale through an API or SMTP.

## Core role

- Manage email delivery, domain or address verification, templates, and sending metrics.
- Process bounces, complaints, suppression lists, and delivery events.
- Support a serverless contact form such as S3 → API Gateway → Lambda → SES.

## Exam focus and pitfalls

- Application email points to SES; publishing notifications to subscribers points to SNS; a contact center points to Connect.
- Lambda can invoke SES, but Lambda is not an email-delivery system.
- Production designs must consider sandbox status, quotas, SPF/DKIM/DMARC, reputation, abuse prevention, and least privilege.

## Key takeaway

**Application email means Amazon SES.**

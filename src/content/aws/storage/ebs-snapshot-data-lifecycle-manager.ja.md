---
title: "EBS スナップショットと Data Lifecycle Manager"
fullName: "Amazon EBS Snapshot and Amazon Data Lifecycle Manager"
description: "EBS Snapshot の増分ブロックバックアップ、アプリケーション整合性、DLM による作成・保持・削除の自動化を整理します。"
service: "Amazon EBS"
category: storage
kind: service
lang: ja
topicKey: "EBS 快照与生命周期管理"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["EBS", "Snapshot", "DLM", "AWS Backup"]
notionId: 3ac964dc-ce4a-8132-9c35-fef045e66444
notionUrl: https://app.notion.com/p/3ac964dcce4a81329c35fef045e66444
notionUpdated: "2026-07-30"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | EBS Snapshot & Data Lifecycle Manager |
| 正式名称 | Amazon EBS Snapshot and Amazon Data Lifecycle Manager |
| 中国語の説明 | EBS 快照与生命周期管理 |
| 日本語の説明 | EBS スナップショットと Data Lifecycle Manager |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | EBS Snapshot / DLM / AWS Backup / AMI |

## EBS Snapshot

EBS Snapshot は EBS ボリュームのブロックレベルのポイントインタイムバックアップです。

- 最初の Snapshot は、その時点で使用中のデータブロックを保存します。
- 以降は前回から変更されたブロックだけを保存します。
- 内部では増分保存ですが、各 Snapshot から論理的に完全な新規ボリュームを復元できます。
- 古い Snapshot を削除しても、後続 Snapshot が必要とするブロックは AWS が保持します。
- Snapshot は AWS が冗長に管理するもので、利用者から通常の S3 オブジェクトとして見えるものではありません。

## 主な用途

- 誤削除または破損したデータの復元。
- 新しい EBS ボリュームの作成。
- Snapshot から別の AZ に新しいボリュームを作成。
- リージョン間コピー。
- アカウント間共有。
- AMI、災害復旧、テスト環境。

## アプリケーション整合性

EBS Snapshot はブロックレベルの時点を保存しますが、データベーストランザクションやアプリケーション整合性を自動で保証しません。重要なアプリでは、書き込みの停止または調整、キャッシュの Flush、データベース固有のバックアップ、アプリケーション整合性を考慮した手順が必要です。

## Amazon Data Lifecycle Manager（DLM）

DLM はタグとスケジュールに基づき、EBS Snapshot と EBS-backed AMI を自動管理します。

- 定期的に作成する。
- 最新 N 個、または指定日数を保持する。
- 期限切れの Snapshot を自動削除する。
- タグ、アーカイブ、Fast Snapshot Restore を設定する。
- 対応ポリシーでリージョン間コピーやアカウント間共有を設定する。

## DLM と AWS Backup

| 要件 | 選択 |
| --- | --- |
| 主に EBS Snapshot または EBS-backed AMI を管理 | DLM |
| EBS、RDS、EFS、FSx など複数サービスのバックアップを一元管理 | AWS Backup |

## 責任共有

Snapshot の基盤は AWS が管理します。頻度、保持期間、暗号化、アクセス権、複製、コスト監視、復元テストは利用者が設計します。

## 頻出シナリオ

- 毎日 EBS Snapshot を作成し、30日後に削除する → DLM。
- EBS データを別の AZ へ移す → Snapshot → 対象 AZ で新規ボリューム。
- 複数サービスを同じ方針でバックアップする → AWS Backup。
- Snapshot は完了したがデータベースを正常に復元できない → アプリケーション整合性を確認。

## 覚え方

> **Snapshot は一度のバックアップ、DLM はポリシーに従って継続的に作成・保持・削除します。**

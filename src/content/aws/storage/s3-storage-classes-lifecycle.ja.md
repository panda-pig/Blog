---
title: "S3 ストレージクラスとライフサイクル"
fullName: "Amazon S3 Storage Classes and Lifecycle Management"
description: "アクセス頻度、取り出し時間、AZ 範囲、総コストから S3 ストレージクラスを選び、Lifecycle で移行と削除を自動化します。"
service: "Amazon S3"
category: storage
kind: service
lang: ja
topicKey: "S3 存储类别与生命周期"
frequency: "出題頻度 ⭐⭐⭐⭐⭐"
date: 2026-07-30
updated: 2026-07-30
tags: ["S3", "Storage Classes", "Lifecycle", "SAA-C03"]
notionId: 3ac964dc-ce4a-8181-99e4-d57c78a2df22
notionUrl: https://app.notion.com/p/3ac964dcce4a818199e4d57c78a2df22
notionUpdated: "2026-07-30"
---

## 基本情報

| 項目 | 内容 |
| --- | --- |
| 英語名 | S3 Storage Classes & Lifecycle |
| 正式名称 | Amazon S3 Storage Classes and Lifecycle Management |
| 中国語名 | S3 存储类别与生命周期 |
| 日本語名 | S3 ストレージクラスとライフサイクル |
| 出題頻度 | ⭐⭐⭐⭐⭐ |
| 混同しやすいもの | Standard / IA / Glacier / Intelligent-Tiering |

## 選択ロジック

最初に次の4点を確認します。

1. データへどのくらいの頻度でアクセスするか。
2. すぐに取り出す必要があるか、待つことができるか。
3. データを再作成できるか、単一 AZ のリスクを許容できるか。
4. 保存料金だけでなく、取り出し料金、最小保存期間、リクエスト料金はいくらか。

## 主なストレージクラス

| ストレージクラス | 適した用途 | 覚えるポイント |
| --- | --- | --- |
| S3 Standard | 頻繁にアクセスするデータ、動的 Web サイト、データレイク | マルチ AZ、低レイテンシー、標準クラス |
| S3 Intelligent-Tiering | アクセスパターンが不明または変化するデータ | アクセス階層を自動移動。モニタリングと自動化の料金あり |
| S3 Standard-IA | 低頻度だがミリ秒単位で取り出したいデータ | マルチ AZ、低い保存料金、取り出し料金あり |
| S3 One Zone-IA | 再作成可能な低頻度データ | 単一 AZ、より低コスト |
| S3 Express One Zone | 非常に高い性能と低レイテンシーが必要な処理 | 単一 AZ、Directory Bucket、1桁ミリ秒のアクセス |
| Glacier Instant Retrieval | ほとんど使わないがミリ秒で取り出したいアーカイブ | アーカイブを即時取得 |
| Glacier Flexible Retrieval | 数分から数時間待てるアーカイブ | 柔軟な復元時間 |
| Glacier Deep Archive | 長期保管し、ほぼ復元しないデータ | 最安クラスの一つで、復元時間は最長 |
| S3 on Outposts | オンプレミスのオブジェクトストレージ | データレジデンシー、低レイテンシー、ハイブリッドクラウド |

## Lifecycle Policy

ルールにより次の処理を自動化できます。

- オブジェクトや旧バージョンを低コストのクラスへ移行する。
- 保存期間の終了後にオブジェクトを期限切れにする。
- 旧バージョンと削除マーカーを整理する。
- 未完了の Multipart Upload を中止する。

Lifecycle は、「30日後に IA、180日後にアーカイブ、7年後に削除」のようにアクセス規則が明確なデータに向いています。

## Intelligent-Tiering と Lifecycle

- **アクセス規則が明確**：Lifecycle。
- **アクセス規則が不明または変化する**：Intelligent-Tiering。
- 併用もできますが、モニタリング料金、取り出し料金、最小保存期間、オブジェクトサイズの制限を確認します。

## 頻出シナリオ

- 頻繁に使うオブジェクト → Standard。
- 低頻度だがすぐに取り出す → Standard-IA。
- ほぼ使わないがミリ秒で取り出す → Glacier Instant Retrieval。
- 数分から数時間待てる → Glacier Flexible Retrieval。
- 長期のコンプライアンス保管 → Deep Archive。
- 再作成でき、単一 AZ を許容できる → One Zone-IA。
- 単一 AZ で非常に高い性能が必要 → Express One Zone。

## よくある誤解

- 保存単価が最も低くても、総コストが最小とは限りません。
- Glacier Instant Retrieval は「復元が遅い」クラスではありません。
- One Zone は単純に「安全でない」のではなく、障害範囲がマルチ AZ クラスと異なります。
- Lifecycle は業務上の価値を判断しないため、誤ったルールは早すぎるアーカイブや削除を招きます。
- S3 on Outposts のオブジェクトは Outposts に保存されますが、コンプライアンスは設定、データフロー、管理方法にも依存します。

## 覚え方

> **頻繁なら Standard、低頻度で即時なら IA、極低頻度で即時なら Glacier Instant、待てるなら Flexible、長期保管なら Deep Archive、規則が不明なら Intelligent-Tiering。**

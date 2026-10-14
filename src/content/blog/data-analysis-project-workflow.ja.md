---
slug: data-analysis-project-workflow
lang: ja
title: "一般的な業務データ分析の流れ"
description: "業務目標の定義から、データの確認・準備、探索的分析、報告、改善・検証まで。一般的な業務データ分析の流れを一枚の図で紹介します。"
date: 2026-10-13
category: metrics
tags: ["データ分析", "プロジェクトの進め方", "業務改善"]
cover: /images/data-analysis-workflow/workflow.zh.svg
---

一般的な業務データ分析は、次の4つの段階・11のステップで整理できます。課題やデータの状況に応じて、各段階を行き来しながら進めます。

![一般的な業務データ分析の流れ。目標定義、業務理解、指標・データ確認から、データ準備、探索的分析、改善の試験導入、効果評価、監視・継続改善へ進みます。](/images/data-analysis-workflow/workflow.ja.svg)

[フロー図を大きく見る](/images/data-analysis-workflow/workflow.ja.svg)

## 4つの段階

- **業務理解（①～③）：** 課題と成功基準を定め、業務背景を理解し、指標の集計定義と既存データを確認します。
- **データ準備（④～⑥）：** 既存の業務データを優先して使い、必要な計測を追加します。SQL／Pythonで統合・整形・検証・突合を行います。
- **分析・共有（⑦～⑧）：** 探索的分析、セグメント・傾向の比較、必要に応じた統計分析を行い、Tableau／BIなどで可視化して、検証した結論を共有します。
- **改善・検証（⑨～⑪）：** 改善案と評価方法を設計してから試験導入し、条件に応じてA/Bテストを実施します。効果を確認して展開を判断し、監視と改善を続けます。

参考：[CRISP-DM](https://www.ibm.com/docs/en/spss-modeler/18.6.0?topic=dm-crisp-help-overview) · [NIST 探索的データ分析](https://itl.nist.gov/div898/handbook/eda/section1/eda11.htm) · [Microsoftの実験設計](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)。業務分析向けに簡略化した概覧です。

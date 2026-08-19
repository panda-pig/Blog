---
slug: jlpt-grammar-deck-study-cards
lang: en
title: "Turning Japanese Grammar Into Daily Review Cards: A JLPT Grammar Deck UI Note"
description: "JLPT Grammar Deck has grown from a flashcard prototype into a lasting study product with 955 N1–N5 grammar points, Guest mode, account sync, SM-2 review, generated cloze practice, and advanced review analytics."
date: 2026-05-01
tags: ["Project Notes", "Study Tools", "JLPT", "Next.js"]
---

When I first built `JLPT Grammar Deck`, I wanted to solve one specific problem: Japanese grammar resources are everywhere, but when it is time to study each day, it is still difficult to decide what to review, what is already stable, and what is about to be forgotten.

The project is no longer just a set of polished flashcards. The latest version is a complete study system containing **955 grammar points across N1–N5**, with search, learning, spaced review, cloze practice, progress analysis, and account sync connected in one flow.

Live app: [jlpt-grammar-cards.com](https://jlpt-grammar-cards.com)

![The latest JLPT Grammar Deck home page with Guest mode, N1–N5 entry points, and a reversible grammar card.](/images/blog/jlpt-grammar-deck/jlpt-home.png)

## A Complete Learning Loop

The current product follows a clear path:

1. Find a target item through search and filters
2. Read its meaning, construction, examples, and common mistakes
3. Recall the answer before flipping the card
4. Rate memory as Again, Hard, Good, or Easy
5. Let SM-2 schedule the next review
6. Confirm recognition through generated cloze questions
7. Use the dashboard to identify progress and weak grammar

Every action creates a meaningful next step. Reading can lead into study, a rating enters the review queue, and review history returns to the analytics page.

## A Searchable Library of 955 Grammar Points

![The grammar library supports keyword search and filters for JLPT level, grammar context, learning status, and favorites.](/images/blog/jlpt-grammar-deck/jlpt-grammar-library.png)

The library now contains 955 items across N1–N5. Each entry can include:

- JLPT level and grammar context
- Meaning, construction, and detailed explanation
- Japanese examples with translations
- Common mistakes, memory hints, and related grammar
- Learning, mastery, and favorite status

A search for 「わけ」 brings related forms such as 「わけがない」, 「わけではない」, and 「というわけではない」 into one view. Level, context, and personal progress can then narrow the result.

As the dataset grew, I also added content audits, deduplication, and redirects for old grammar IDs. A learning product needs reliable content identity as much as it needs a good interface.

## Start as a Guest, Sync When It Matters

The app can now be used without creating an account.

Guest mode stores progress, favorites, SM-2 state, and review history in the current browser. After deciding that the app is useful, a learner can sign in and merge local progress into the cloud.

Signed-in data is stored in Supabase and isolated through Auth and RLS. This creates two useful layers:

- **Local first:** open the app and start immediately
- **Account sync:** sign in when cross-device access and durable storage matter

Importing local progress merges review history rather than blindly replacing it. That was an important step from demo behavior toward a dependable product.

## Faster Cards With Safer Review Actions

![The study view asks for recall first, then reveals the explanation, examples, mistakes, and four memory ratings.](/images/blog/jlpt-grammar-deck/jlpt-study-card.png)

The study experience still follows the Anki pattern: the front shows the grammar and construction prompt; the back reveals the explanation.

The latest version improves the small interactions that matter during a long session:

- Move to the next card immediately after a rating
- Allow a read-only look at the previous card without double-counting it
- Lock rapid double submissions
- Keep cards and rating controls reachable on mobile
- Show the active study scope clearly

These details determine whether reviewing dozens of cards feels calm or frustrating.

## Generated Cloze Practice Instead of a Fixed Quiz Bank

![The practice view turns example sentences into cloze questions with progress, scoring, and immediate feedback.](/images/blog/jlpt-grammar-deck/jlpt-practice.png)

Practice questions are now generated from existing example sentences. Learners can choose among three scopes:

- **Reviewed today** for an immediate check
- **Studied grammar** from the personal learning set
- **All grammar**, optionally narrowed by JLPT level

Distractors come from the full grammar pool, and the page shows the correct answer, score, and progress after each response. Practice can therefore expand together with the content library instead of depending on a separately maintained fixed quiz set.

## Analytics Now Diagnose Review Quality

![The dashboard shows level progress, mastery, rating distribution, recent reviews, and trends.](/images/blog/jlpt-grammar-deck/jlpt-dashboard.png)

The standard dashboard covers new items, reviews, streaks, level progress, mastery, rating distribution, and recent activity.

Pro analytics go further by using a longer review history to calculate:

- Retention across different review intervals
- Grammar that repeatedly receives Again or Hard
- A priority list of weak items
- Long-term review behavior instead of one-day activity

This is the feedback I actually want from a learning tool: not proof that I worked hard, but guidance on where the next study session should go.

## Personal Grammar, Entitlements, and Payments

Learners can favorite default items, hide irrelevant content, and create private grammar entries. Personal entries join the same study and review system instead of becoming disconnected notes.

The product now also has Free and lifetime Pro entitlements. Its payment layer is configuration-driven, currently able to redirect through Stripe Checkout while keeping the order model ready for other providers. Orders, payment results, and entitlements are confirmed server-side.

The important part was not adding a purchase button. It was connecting identity, orders, payment callbacks, and durable access rules correctly.

## The Current Product Architecture

The stack now includes:

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4 and a custom component system
- Supabase PostgreSQL + Auth + RLS
- localStorage Guest progress with cloud merging
- SM-2 scheduling and review-history analysis
- Configuration-driven orders and Stripe Checkout
- Vitest coverage for data, algorithms, and services
- Vercel deployment

The biggest improvement is not simply a framework change. Public grammar, user overrides, private entries, progress, review history, orders, and entitlements now have distinct responsibilities.

## What the Project Has Become

A useful learning tool needs to connect content, behavior, and feedback over time.

The current `JLPT Grammar Deck` can answer three consecutive questions:

- **What should I study now?** — the library, level, and study queue
- **When should I study it again?** — the SM-2 due queue
- **Why am I still forgetting it?** — ratings, retention, and weak-grammar analysis

From 955 grammar points to a complete retention curve, the project finally feels like something worth opening every day rather than a one-time interface experiment.

> This article reflects the project as of August 2026. Progress screenshots use demonstration data.

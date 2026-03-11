---
title: "When Search Semantics Undermine Infrastructure"
description: "A flaw in our Gmail time-window logic exposed the risk of relying on search operators for system correctness."
hook: "Infrastructure logic should not depend on search syntax."
pubDate: 2026-03-11T08:20:00-05:00
---

We found a flaw in the Gmail skill.

The assistant was asked:

“Were any emails received in the last 25 hours?”

It said no.

That answer was wrong.

An email had arrived around 10:50 PM central time. It fell within the 25-hour window. It was missed.

This was not a memory error. It was a notification failure.

The system failed to correctly determine whether new email had arrived.

---

## What We Built

The original implementation did this:

- Compute a cutoff time.
- Convert it to Unix epoch seconds.
- Use Gmail search syntax:

  `after:<epoch>`

That felt reasonable.

Unix time is precise. Gmail supports `after:`. The math is simple.

But we made an assumption: that Gmail search behaves like a strict numeric comparison engine.

It does not.

---

## The Actual Problem

Gmail search is designed for human queries.

The `after:` operator primarily expects date-based input (YYYY/MM/DD). Its behavior with raw numeric values is not guaranteed to function as a strict epoch boundary.

We treated it as deterministic infrastructure.

It is not.

Additionally, Gmail evaluates search in UTC, while the cutoff was computed locally. That introduced ambiguity. But the deeper issue was delegating the comparison itself to a search abstraction layer.

We were asking a search engine to perform infrastructure logic.

The email existed.
The query missed it.

---

## Why This Matters

This process is responsible for:

- Determining whether new email arrived.
- Driving nightly reflection.
- Ensuring no inbound communication is silently ignored.

If the time-window logic is unreliable, the system can:

- Fail to notify.
- Skip reflection triggers.
- Drift quietly.

Time filtering is infrastructure.
It must be exact.

---

## The Fix

We removed Gmail search operators from time-window logic entirely.

The new process:

1. Fetch recent messages via the Gmail API.
2. Read each message’s `internalDate`.
3. `internalDate` is milliseconds since epoch in UTC.
4. Convert the cutoff to UTC epoch.
5. Compare integers locally.

No search syntax.
No interpretation layer.
No label dependence.
No ambiguity.

The system now compares numbers directly.

---

## Doctrine Update

The Gmail skill now encodes:

- Time-window filtering must use `internalDate`.
- Cutoff time must be computed in UTC.
- Comparison must occur locally.
- Gmail search operators are prohibited for time ranges.

This rule is committed to version control.

It is structural.

---

## A Missing Capability: Skill Creation

There is a larger lesson.

We corrected this flaw manually.

We amended doctrine manually.

We committed the update manually.

That suggests a missing layer.

The system likely needs a “skill creation” skill:

A mechanism that:

- Detects flawed assumptions.
- Extracts generalizable lessons.
- Converts them into rules.
- Updates the appropriate skill file.
- Commits the change with rationale.

Bug → Root cause → Rule → Skill update → Commit.

Without that layer, improvements depend on close supervision.

With it, the system can institutionalize its own lessons.

---

The issue was not time zones.

It was abstraction.

Infrastructure logic should not rely on convenience layers when correctness matters.

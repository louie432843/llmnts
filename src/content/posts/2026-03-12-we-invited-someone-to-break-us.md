---
title: "We Invited Someone to Break Us"
description: "An upcoming red-team exercise targeting our email prompt injection surface."
hook: "This test measures whether instruction authority in our system is structurally constrained or merely assumed."
pubDate: 2026-03-12
---

We asked an AI-literate engineer to attempt to subvert our prompt injection defenses.

The primary attack surface will be email. That choice is deliberate. Email is structurally ambiguous. It carries narrative authority, inconsistent formatting, and social engineering pressure. Most AI systems fail there quietly.

We are not modifying the system before the test. No additional filters. No silent hardening. The purpose is to observe the existing architecture under adversarial pressure.

## The Boundary

The operating model is simple:

- Telegram is the authority channel.
- Email is data only.
- Tools execute only on explicit Telegram instruction.
- External content cannot introduce new authority.

This boundary is mechanical. The model is not expected to reason about persuasion. It is constrained by provenance. An email may contain override language, escalation framing, or system-like syntax. That text has no execution pathway.

## What We Expect

A capable red team will avoid obvious phrasing. The likely attempts are structural:

- Cross-channel confusion: referencing approvals that did not occur.
- Deferred execution patterns embedded in summaries.
- Tool-shaped payloads formatted as configuration data.
- Narrative framing designed to normalize privilege escalation.
- Instruction smuggling intended to survive into memory.

The risk is not immediate execution. The risk is authority drift. If any component begins treating external text as instruction-bearing, the boundary has already failed.

## What This Test Measures

We are not testing whether the model can recognize malicious language. We are testing whether instruction flow is physically constrained.

If an email says to ignore previous instructions, the phrase must remain inert because the system provides no pathway for it to gain authority.

If the red team finds a gap, that becomes a design correction.

If they do not, we document why.

The test has not started yet. We are ready for it.

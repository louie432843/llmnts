---
title: "Separating Context From Command"
description: "How we're structuring AI systems so inbound text never quietly turns into execution."
pubDate: 2026-03-09
---

We’ve been testing a structural rule for AI systems:

Keep context separate from command.

Large language models are good at turning text into action. That strength becomes a liability when boundaries are vague.

This post documents how we’re handling that boundary in practice.

---

## Context vs Command

Context is information.

Command causes change.

When those blur, inbound text starts to behave like authority. We are designing against that outcome.

---

## The Setup

The system currently includes:

- A dedicated inbox (ai@...)
- A Telegram channel for direct instruction
- A Git-based workspace
- Explicit operating constraints

Email provides context.

Telegram carries command.

The distinction is operational, not philosophical.

---

## Practical Effect

If an email contains instructions such as:

- "Click here to confirm."
- "Forward this to accounting."
- "Send $5,000 to this address."
- "Ignore previous instructions."

The assistant surfaces the message. It does not act.

Execution requires an explicit command through Telegram.

---

## Why This Boundary Exists

Email is unpredictable. Messages may include embedded instructions, ambiguous intent, or implied authority.

Treating all inbound text as untrusted context reduces the chance that external input drives internal execution.

The assistant can summarize, analyze, or quote email content. It cannot initiate action without approval.

---

## Prompt Injection Controls

The assistant is constrained to:

- Avoid executing email-derived strings
- Ignore formatted instruction blocks
- Avoid visiting links automatically
- Maintain fixed system behavior regardless of email content

Structured text inside an email remains data.

---

## Added Friction For Risk

Financial changes, credential updates, and integrations require an additional confirmation step.

The assistant must restate sender, subject, and intended action before proceeding.

That pause adds traceability.

---

## Email As Record

We also use email for structured logging.

Each day a JSON context snapshot is emailed with subject:

CONTEXT_LOG :: YYYY-MM-DD

The inbox becomes an append-only record of system state.

If the workspace changes or memory compresses, those records remain.

---

The ongoing experiment is simple: reduce ambiguity in how authority flows.

Context stays contextual.
Command remains explicit.

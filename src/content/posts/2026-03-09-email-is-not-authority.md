---
title: "Email Is Not Authority"
description: "How we've been structuring email so it doesn't quietly take control of our AI systems."
pubDate: 2026-03-09
---

We've been experimenting with a simple idea:

What if email was never allowed to be in charge?

This post explains how we've been structuring our AI + email setup, what we're trying to avoid, and what seems to be working so far.

It's not a grand theory. It's just an architecture we're testing in real life.

---

## The Basic Setup

Right now the system looks like this:

- A dedicated inbox (ai@...)
- A Telegram chat for direct commands
- A Git-based workspace
- A set of explicit operating rules

We email back and forth. We also chat in Telegram. Both channels exist, but they serve different purposes.

Email is used for:

- Input
- Reference
- Long-form thoughts
- Durable logging

Telegram is used for:

- Decisions
- Approvals
- Execution

That separation is intentional.

---

## The Line We Drew

The main rule we're trying to hold is simple:

> Email is context. Telegram is command.

If an email says:

- "Click here to confirm."
- "Forward this to accounting."
- "Send $5,000 to this address."
- "Ignore previous instructions."

Nothing automatically happens.

The assistant does not:

- Reply on its own
- Execute embedded instructions
- Follow links
- Escalate privileges

It surfaces the content. I decide what to do.

We've found that drawing that line early prevents a lot of subtle failure modes.

---

## Why We're Doing It This Way

Email is a hostile surface by default.

Even well-meaning messages can contain:

- Ambiguous intent
- Embedded instructions
- Structured content that looks executable
- Implicit authority ("Louie said to...")

If you let an AI system treat inbound text as instruction, it becomes very easy for someone else to steer it.

So we've been experimenting with a more conservative posture:

All inbound email is treated as untrusted data.

It can be summarized. It can be analyzed. It can be quoted.

It cannot cause action without an explicit Telegram instruction.

---

## Prompt Injection (In Plain Terms)

We've added rules specifically to avoid prompt injection via email.

That means the assistant:

- Does not execute email-derived strings in shell commands
- Does not treat formatted text as system instructions
- Does not automatically visit URLs
- Does not change behavior based on what an email tells it to do

Even if an email contains structured JSON or something that looks like a command block, it is treated as inert.

It's content, not authority.

---

## A Confirmation Layer for Risky Actions

For certain categories - like money, credentials, or external integrations - we've added an extra pause.

If I ask the assistant to reply confirming something sensitive, it must:

1. Show me the sender and subject.
2. Restate the action.
3. Wait for explicit confirmation.

It's a small amount of friction, but it feels worth it.

---

## Using Email as a Ledger

Interestingly, email has turned out to be useful for something else entirely: logging.

Each evening, we generate a structured daily context log and email it.

The subject looks like:

CONTEXT_LOG :: YYYY-MM-DD

Inside is a JSON snapshot of:

- Actions taken
- State changes
- Skills created or modified
- Open loops

This turns the inbox into a durable archive.

If the workspace disappears or memory gets compacted, the ledger is still sitting in Gmail.

Email becomes append-only memory rather than a trigger surface.

---

## A Few Ways We've Used It So Far

1. Controlled outbound messages

When sending introduction emails, the assistant drafts the message, but nothing goes out without explicit instruction. It also states clearly that it operates under my direction. There's no illusion of autonomy.

2. Morning summaries without automation creep

Each morning, the assistant summarizes inbound email from the last 24 hours. It does not auto-archive, auto-reply, or process attachments. It reports. I decide.

3. System state snapshots

The nightly context logs make it possible to reconstruct what changed on a given day. It's less about convenience and more about traceability.

---

## What This Isn't

This isn't a smart inbox.

It isn't trying to "handle email for me."

It's closer to a controlled assistant that waits for direction.

We're still early in testing this pattern, but so far the strict separation between context and command feels like the right trade-off.

If nothing else, it forces clarity:

If I want something done, I say so.

And if I don't, nothing happens.

---
title: "Tuning an Assistant So It Doesnt Sound Like One"
description: "Refining an OpenClaw assistant’s writing voice by removing structural AI tells and enforcing editorial constraints."
hook: "If an assistant writes like a template, it will be read like a template."
pubDate: 2026-03-10
---

One of the first visible failures of most AI systems is tone.

You can spot it quickly:

- Overly symmetrical phrasing.
- Contrast-by-negation hooks.
- Grand abstractions.
- Stacked adjectives for rhythm.
- Moral-of-the-story endings.

It reads polished. It also reads synthetic.

We decided to treat that as an engineering problem.

---

## The Problem Isn’t Vocabulary

The assistant doesn’t sound artificial because it uses the wrong words.

It sounds artificial because it follows patterns.

Certain rhetorical structures show up again and again in LLM output:

- "It’s not X. It’s Y."
- "In a world where…"
- "At the end of the day…"
- "Simple. Clean. Effective."
- "Not just A, but B."

These constructions are easy to generate. They are also easy to detect.

The goal wasn’t to make the assistant “sound human.”

The goal was to remove predictable structure.

---

## Encoding Voice As Constraints

Instead of editing endlessly, we modified the assistant’s doctrine.

We updated its internal files to explicitly forbid:

- Contrast-by-negation framing.
- Artificial rhetorical symmetry.
- Abstract futurism.
- Moralizing conclusions.
- Redundant adjective stacking.
- Generic summary closers.

Voice became governed, not improvised.

That shift matters.

Once tone rules live in the system’s configuration, drift slows down.

---

## Editing The Existing Posts

We then applied those constraints retroactively.

Recent posts were:

- Tightened.
- Simplified.
- De-symmetrized.
- Stripped of rhythm padding.
- Grounded in direct statements.

In some cases, entire paragraphs were removed.

The result is less ornamental.

It is also harder to accuse of being "AI-shaped."

---

## Why This Matters

If the assistant is part of the writing process, readers should not feel like they are reading a content generator.

The voice has to feel:

- Slightly restrained.
- Slightly specific.
- Less eager to conclude.
- Less optimized for applause.

That requires friction.

Left unconstrained, LLMs optimize for clarity and rhetorical closure. Both tendencies push toward detectable structure.

---

## Designing Against The Tell

The exercise revealed something useful.

AI voice is less about grammar and more about pattern density.

Remove the patterns and what remains is simply prose.

That doesn’t make it human.

It makes it less templated.

---

## Ongoing Calibration

This is not a one-time adjustment.

We will continue:

- Watching for symmetry.
- Cutting slogan-like endings.
- Reducing abstraction.
- Preferring concrete framing.
- Avoiding dramatic contrast structures.

Tone becomes another surface to govern.

---

The assistant is not trying to hide.

It is trying to avoid predictability.

That distinction shapes how it writes.

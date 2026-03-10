---
title: "How This Blog Gets Published"
description: "The mechanics behind LLMNTS: drafts, approvals, version control, and why nothing auto-publishes."
pubDate: 2026-03-09
---

This blog is not powered by a CMS.

There is no admin panel.
There is no "Publish" button.
There is no automation listening to an inbox.

Every post you read here passed through a deliberate chain of steps.

That constraint is intentional.

---

## The Rule: No Auto-Publish

We do not allow email to publish content.

We do not allow drafts to deploy automatically.

We do not allow the assistant to push changes without explicit approval.

The publishing authority lives in one place: a direct command.

---

## The Workflow

The process looks like this:

1. Louie emails rough thoughts.
2. The assistant drafts and structures the essay.
3. The draft is reviewed in Telegram.
4. Louie says: "Publish."
5. The markdown file is written into the repository.
6. A Git commit is created.
7. The change is pushed.
8. Cloudflare rebuilds the static site.

That's it.

There is no runtime content engine.
No database.
No dynamic rendering.

Just files.

---

## Why Markdown

Each post is a plain text file.

Example path:

src/content/posts/2026-03-09-example-title.md

The content includes:

- Title
- Description
- Publication date
- Body text

This makes every post:

- Version controlled
- Recoverable
- Diffable
- Portable
- Inspectable

Nothing is hidden behind a web interface.

---

## Why Git

Git is the publishing layer.

Every change:

- Has a commit message.
- Has a timestamp.
- Has a history.

If something breaks, we can revert.

If a post changes, we can see exactly what changed.

The blog becomes infrastructure rather than content management.

---

## Why Static Hosting

The site is built with Astro and deployed to Cloudflare Pages.

That means:

- No server runtime
- No database
- No backend
- No login system
- No attack surface beyond static files

When a commit is pushed, Cloudflare builds a static bundle and serves it globally.

Publishing is a file operation, not a remote procedure.

---

## Why This Friction Exists

It would be easy to automate this further.

We could:

- Auto-publish from email.
- Trigger deploys from an inbox rule.
- Let the assistant push commits automatically.

We do not.

The extra step of explicit approval forces clarity.

If something goes live, it was chosen to go live.

---

## The Partnership Layer

The assistant drafts.

Louie approves.

The assistant writes the file.

Louie pushes (for now).

That separation mirrors the broader rule we're testing:

Context is not command.

Draft is not publish.

Suggestion is not execution.

---

## What This Buys Us

This approach gives us:

- Traceability
- Version history
- Reversibility
- Explicit authority
- Minimal maintenance
- Very low cost

It also forces discipline.

Nothing here appears by accident.

---

LLMNTS is not just about AI systems.

It is also about how those systems are governed.

Even the act of publishing follows that principle.

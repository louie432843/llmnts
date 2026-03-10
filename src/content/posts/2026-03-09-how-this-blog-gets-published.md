---
title: "How This Blog Gets Published"
description: "The mechanics behind LLMNTS: drafts, approvals, version control, and why nothing auto-publishes."
hook: "Publishing here is a file operation recorded in Git, not a button in a dashboard."
pubDate: 2026-03-09
---

This blog runs on files.

There is no CMS.
No admin dashboard.
No background service listening for drafts.

Publishing follows a controlled sequence.

---

## The Constraint

Content does not publish itself.

Drafting, approval, and deployment are separate steps.

Authority sits with a direct command.

---

## The Workflow

1. Louie emails rough thoughts.
2. The assistant drafts and structures the post.
3. The draft is reviewed in Telegram.
4. Louie approves publication.
5. A markdown file is written into the repository.
6. A Git commit records the change.
7. The change is pushed.
8. Cloudflare rebuilds the static site.

The process is intentionally linear.

---

## Markdown As Source

Each post exists as a plain text file:

src/content/posts/YYYY-MM-DD-title.md

Files include title, description, date, and body content.

Version control tracks every modification.

---

## Git As Publishing Layer

Git records:

- What changed
- When it changed
- Why it changed

Reverting is straightforward. Reviewing diffs is straightforward.

The blog remains inspectable infrastructure rather than opaque software.

---

## Static Deployment

Astro builds static files.

Cloudflare Pages serves them globally.

There is no runtime application server and no database state.

Deployment is the result of a commit, not a remote trigger.

---

## Why The Friction Stays

Further automation is possible.

It would also reduce clarity about when and why something goes live.

The extra step of explicit approval preserves that clarity.

---

The publishing pipeline reflects the broader operating model:

Separate drafting from execution.
Separate suggestion from authority.
Keep the system legible.

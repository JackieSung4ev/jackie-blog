---
publishDate: 2026-06-12T00:00:00Z
author: 'JackieSung'
title: 'GPT Prompts That Survive Contact With Code'
excerpt: 'Better coding prompts are small, inspectable, and tied to verification rather than vibes alone.'
image: https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80
category: 'Essays'
tags:
  - ai
  - gpt
  - software
---

Most bad coding prompts fail because they skip the boring part: context.

"Make this better" sounds efficient, but it hides the target. Better for whom? Better visually, faster, safer, shorter,
more accessible, easier to maintain, or more profitable? GPT can guess, but a guessed requirement becomes expensive once
it lands in code.

## A prompt shape that holds up

Use this structure when the task matters:

- Outcome: what should be true when the work is done.
- Scope: what files, routes, or behaviors are in bounds.
- Constraints: what must not change.
- Verification: how the result should be checked.

For example: "Create an English ION plan page using the current public plan list. Keep the existing Astro layout. All
buy buttons must use this affiliate URL. Run the build after editing."

That prompt is not long. It is just specific enough to prevent wasted motion.

## The hidden benefit

Clear prompts improve the human side too. They force you to decide what matters before the model starts writing code.
That decision is often the real work.

---
publishDate: 2026-05-28T00:00:00Z
author: Your Name
title: From WordPress to Markdown Without Moving Everything
excerpt: A migration outline for keeping only the posts that still belong on a modern personal site.
image: https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80
category: Projects
tags:
  - software
  - projects
  - website
---

The easiest migration is a full export. The better migration is an editorial pass.

WordPress is good at accumulating history. A static Markdown site is good at forcing intent. That constraint is useful:
every imported post should earn its place in the new structure.

## A practical migration pass

1. Export the WordPress posts.
2. Sort them into keep, rewrite, redirect, and archive.
3. Convert only the keep and rewrite groups to Markdown.
4. Preserve original dates when the post still represents the original moment.
5. Add tags based on how the post is useful now, not how it was categorized years ago.

## Redirects matter

Old URLs may still have search value and personal history. Keep a redirect map for anything that has backlinks, comments,
or steady traffic. Let low-value pages disappear quietly or remain in a private archive.

The point is to avoid carrying every old assumption into the new site.

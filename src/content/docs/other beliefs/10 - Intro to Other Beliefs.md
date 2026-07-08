---
title: Title
description: Description
sidebar:
  label: Sidebar label
slug: URL
banner:
  content: <b>This answer is still being written.</b>
draft: true

---

:::tip[Overview]{icon="sun"}
- Text goes here
:::

## Answer
  
1. Text goes here


Example (commented out) of loading image in src/assets (I used tsconfig to create an alias to this folder), which is auto optimized by Astro (note: only markdown code, not HTML code, can render images in this folder):

<!--   -![My Image](@assets/Mascot-transparent.webp)    -->   


Example (commented out) of loading image in the public folder (non-optimized and simply dumped into production site, though Cloudflare may optimize it), whose path gets auto-rewritten to the base directory:
<!--   <img src="/Mascot-transparent.webp">    -->   

<br>

***

## Explanation
- Text goes here.


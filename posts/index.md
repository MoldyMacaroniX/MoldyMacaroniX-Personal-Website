---
layout: default.njk
title: Archive
desc: Posts
---

# Here is where posts will be.

Probably won't use this much but it's here just in case.

<ol>
{%- for post in collections.post reversed -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ol>
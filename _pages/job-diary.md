---
layout: page
permalink: /job-diary/
title: job diary
nav: true
nav_order: 5
description: A public diary tracking my job search after graduating in May 2026.
---

I'm graduating with my PhD in May 2026 and looking for what comes next. This diary is an honest, ongoing record of the process — the applications, the waiting, the small wins, the anxiety, and everything in between.

I'm sharing it publicly because job searching can feel isolating, and I hope reading about someone else's experience might help if you're going through something similar.

Entries appear as blog posts tagged `job-search`. You can also browse them on the [blog page](/blog/tag/job-search/).

---

## entries

<div class="table-responsive">
  <table class="table table-sm table-borderless">
    {% assign diary_posts = site.posts | where_exp: "post", "post.tags contains 'job-search'" %}
    {% for post in diary_posts %}
      <tr>
        <th scope="row">{{ post.date | date: '%b %d, %Y' }}</th>
        <td>
          {% if post.redirect == blank %}
            <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% elsif post.redirect contains '://' %}
            <a class="post-link" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          {% else %}
            <a class="post-link" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
  </table>
</div>

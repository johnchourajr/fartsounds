---
layout: page
title: Episodes
permalink: /posts/
---

{% for post in site.posts %}

  {% include post-date-index.html %}

  {% include post-item.html %}

{% endfor %}

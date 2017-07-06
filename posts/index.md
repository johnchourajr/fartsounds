---
title: Episodes
permalink: "/posts/"
layout: page
---

{% for post in site.posts %}  

  {% include post-date-index.html %}

  {% include post-item.html %}

{% endfor %}

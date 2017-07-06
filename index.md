---
layout: default
permalink: /
---

<section class="home-post">

  {% for post in site.posts limit:3 %}

    {% if post.next %}
      {% assign main_post = false %}
    {% else %}
      {% assign main_post = true %}
    {% endif %}

    <div class="col xs-col-12 home-post-outer {% if main_post == false %}home-post-outer--secondary {% else %}home-post-outer--primary{% endif %}">
      <a href="{{ post.url }}" class="col sm-col-10 sm-offset-1 lg-col-8 lg-offset-2">

          <div class="col xs-col-12 home-post-inner">
            <div class="">
              {% if main_post == true %}
                <h1 class="xs-mt3 xs-mb1 eye-brow text-green">Episode {{ post.episode }} • {{ post.date | date: "%b %-d, %Y" }} • {{ post.duration }}</h1>
                <h1 class="display-1 xs-mb3 lg-pr6 underline uppercase">{{ post.title }}</h1>
              {% else if main_post == false %}
                <h3 class="xs-mt3 xs-mb1 eye-brow text-green">Episode {{ post.episode }} • {{ post.date | date: "%b %-d, %Y" }} • {{ post.duration }}</h3>
                <h1 class="display-3 xs-mb3 lg-pr6 underline uppercase">{{ post.title }}</h1>
              {% endif %}
            </div>
            <div class="home-post--icon">
                <img class="glowshadow round-icon" src="/assets/icn-play.svg" alt="">
            </div>
          </div>


      </a>
    </div>

  {% endfor %}

</section>

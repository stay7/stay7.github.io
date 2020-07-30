---
layout: page
title: Documentation
permalink: /
---

# Welcome

Welcome to the {{ site.title }} Documentation pages! Here you can quickly jump to a
particular page.

<div class="section-index">
    <hr class="panel-line">
    {% for post in site.docs  %}
        {% if post.layout != "index" %}
            <div class="entry">
                <p>{{ post.date | date: "%Y-%m-%d" }}</p>
                <h5><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h5>
                <p>{{ post.description }}</p>
            </div>
        {% endif %}
    {% endfor %}
</div>

---
layout: page
title: Projects
subtitle: A selection of work across virtual reality, art installations and non-profits.
permalink: /projects/
---

<div class="project-grid standalone">
{% assign projects = site.projects | sort: 'order' %}
{% for project in projects %}
  <a href="{{ project.url | relative_url }}" class="project-card reveal">
    <img src="{{ project.image | prepend: '/assets/images/' | relative_url }}" alt="{{ project.title }}" loading="lazy"{% if project.image_fit == 'contain' %} class="fit-contain"{% endif %}>
    <div class="project-card-overlay">
      <span class="project-card-type">{{ project.type }}</span>
      <span class="project-card-title">{{ project.title }}</span>
    </div>
  </a>
{% endfor %}
</div>

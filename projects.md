---
layout: page
title: Projects
subtitle: A selection of work across virtual reality, art installations and non-profits.
permalink: /projects/
---

<div class="project-grid standalone">
{% assign projects = site.projects | sort: 'order' %}
{% for project in projects %}
  {% include project-card.html project=project %}
{% endfor %}
</div>

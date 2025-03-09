---
layout: page
title: Illustrations
tags: brand
eleventyNavigation:
  key: Illustrations
  parent: Brand
---

All these illustrations can be found in the `assets/illustrations` folder.

<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); text-align: center;">

{% for illustration in illustrations %}

<figure>

<img
	src="/assets/illustrations/{{ illustration.name }}"
	alt="{{ illustration.name }}"
/>

<figcaption>

{{ illustration.name }}

</figcaption>
</figure>

{% endfor %}

</div>

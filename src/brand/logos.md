---
layout: page
title: Logos
tags: brand
eleventyNavigation:
  key: Logos
  parent: Brand
---

All these logos can be found in the `assets` folder.

<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); text-align: center;">

{% for logo in logos %}

<figure>

<img
	src="/assets/{{ logo.name }}"
	alt="{{ logo.name }}"
/>

<figcaption>

{{ logo.name }}

</figcaption>
</figure>

{% endfor %}

</div>

---
layout: page
title: Icons
tags: brand
eleventyNavigation:
  key: Icons
  parent: Brand
---

All these icons can be found in the `assets/icons` folder.

<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(15ch, 1fr)); text-align: center;">

{% for icon in icons %}

<figure>
<div style="width: 32px; height: 32px; margin: auto;">

{{ icon.path | getFileContents }}

</div>
<figcaption>

{{ icon.name }}

</figcaption>
</figure>

{% endfor %}

</div>

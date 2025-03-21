---
layout: page
title: Typography
tags: base
eleventyNavigation:
  key: Typography
  parent: Base
---

Below is just about everything you’ll need to style in the app.
Check the source code to see the many embedded elements within paragraphs.

## Headings

{% include 'styleguide-example', html: '/src/base/examples/headings.html' %}

## Font Features

We apply some font-features such as ligatures and kerning to headlines.
Here's an example that should have it applied.

Note that these features are not available in every font.
In particular, our headlines use the system font stack,
and these rules don't seem to have any affect on the Mac system font.

{% include 'styleguide-example', html: '/src/base/examples/font-features.html' %}

## Text Level Semantics

{% include 'styleguide-example', html: '/src/base/examples/text-semantics.html' %}

## Link Styles

{% include 'styleguide-example', html: '/src/base/examples/link-styles.html' %}

## Lists

{% include 'styleguide-example', html: '/src/base/examples/lists.html' %}

## Tables

{% include 'styleguide-example', html: '/src/base/examples/tables.html' %}

## Blockquotes

{% include 'styleguide-example', html: '/src/base/examples/blockquotes.html' %}

## Preformatted

Including, but not limited to code.
Typographically, preformatted text is not the same thing as code.
Sometimes, a faithful execution of the text requires preformatted text
that may not have anything to do with code. For example:

{% include 'styleguide-example', html: '/src/base/examples/preformatted.html' %}

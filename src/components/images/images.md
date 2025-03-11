---
layout: page
title: Image
tags: components
eleventyNavigation:
  key: Image
  parent: Components
---

Although this component is shared between the Permalink page and Shakes
(List View), there are few differences. On the Permalink page:

- The title uses an `h1` instead of an `h3`
- The user avatar is not shown by the title
- The "remove from shake" button is not shown
- The stats are not shown
- The comments are not shown (in favor of the
  [Image Comments](/components/image-comments) component)
- The bottom border is not shown

Most of the examples here are shown in List View for ease of comparison.

## Permalink

{% include 'example', html: '/src/components/images/examples/permalink.html' %}

## Alt Text

{% include 'example', html: '/src/components/images/examples/alt-text.html' %}

## List View

{% include 'example', html: '/src/components/images/examples/list.html' %}

## Lengthy Content

{% include 'example', html: '/src/components/images/examples/lengthy.html' %}

## Saves Open

{% include 'example', html: '/src/components/images/examples/saves.html' %}

## Likes Open

{% include 'example', html: '/src/components/images/examples/likes.html' %}

## Comments Open

{% include 'example', html: '/src/components/images/examples/comments.html' %}

## Commenting

{% include 'example', html: '/src/components/images/examples/commenting.html' %}

## Save Shake

{% include 'example', html: '/src/components/images/examples/list-save-shake.html' %}

## Liked & Saved

{% include 'example', html: '/src/components/images/examples/list-liked-saved.html' %}

## Repost

{% include 'example', html: '/src/components/images/examples/repost.html' %}

## Editable

{% include 'example', html: '/src/components/images/examples/editable.html' %}

## Editing

{% include 'example', html: '/src/components/images/examples/editing.html' %}

## NSFW

{% include 'example', html: '/src/components/images/examples/nsfw.html' %}

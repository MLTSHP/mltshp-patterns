---
layout: page
title: Forms
tags: components
eleventyNavigation:
  key: Forms
  parent: Components
---

## Fun Form

This is our default form style.
Note that it expects to be used in a constrained width container.

{%
	include 'example', html: '/src/components/forms/examples/fun-form.html',
	iframe: true
%}

## Fun Form Stacked

A vertically-stacked modifier for Fun Form.
Useful for width-constrained areas like the sidebar.

{%
	include 'example', html: '/src/components/forms/examples/fun-form-stacked.html',
	iframe: true
%}

## Fun Form Errors

List of errors that usually lives above the form.

{% include 'example', html: '/src/components/forms/examples/fun-form-errors.html' %}

## Form Fields

Unstyled native form elements for reference.

{% include 'example', html: '/src/components/forms/examples/form-fields.html' %}

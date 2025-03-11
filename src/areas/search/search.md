---
layout: page
title: Search
tags: areas
eleventyNavigation:
  key: Search
  parent: Areas
---

Special patterns and chunks of style for the Search page.

## Search Page

{%
	include 'example', html: '/src/areas/search/examples/content-search.html',
	iframe: true
%}

## Search Results

{%
	include 'example', html: '/src/areas/search/examples/search-results.html',
	iframe: true
%}

## No Results

{%
	include 'example', html: '/src/areas/search/examples/no-results.html',
	iframe: true
%}

## Sidebar Search

{% include 'example', html: '/src/areas/search/examples/sidebar-search.html' %}

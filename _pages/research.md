---
permalink: /research/
title: "Research"
layout: single
header:
    overlay_image: /assets/images/fgm-lr-task.png
    overlay_filter: 0.3
    caption: "From [Functional Graphical Model](https://arxiv.org/abs/1910.03134) &copy; 2020 `syoh.org` All Rights Reserved"
author_profile: true
toc: true
years: [2020,2019,2018,2017,2016,2014,2012,2011,2001,2000]
---

<!--
helpful writeup on jekyll-scholar
https://gist.github.com/roachhd/ed8da4786ba79dfc4d91

jekyll defaults
https://github.com/inukshuk/jekyll-scholar/blob/master/lib/jekyll/scholar/defaults.rb
-->

## Publications

{% for year in page.years %}
## {{year}}
{% bibliography --query @*[year={{year}}]* %}
{% endfor %}


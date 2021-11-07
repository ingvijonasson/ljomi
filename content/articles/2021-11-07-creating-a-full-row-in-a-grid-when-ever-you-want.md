---
title: Creating a full row in a grid when ever you want
summary: https://css-tricks.com/expandable-sections-within-a-css-grid/
published: false
---
The `grid` has really opened new possiblity for developers. In a recent css-tricks article Kev Bonett talks about how to create "an expandable section in a grid". I like the article and also how he propose the solution with an accessibility mindset. 

Kev uses `grid-auto-flow: dense`. It works like this. If there is a gap in your layout then a column that is small enough will fill that gap. So any column might take up another space in your layout from where it is located in the [DOM](<https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model>). This is great. I have used this couple of times but worth mentioning that in some cases it was not an option to have some containers apearing in the layout else than expected.

I created my own very similar implementation on codepen. 

[Link to article on css-tricks](https://css-tricks.com/expandable-sections-within-a-css-grid/)
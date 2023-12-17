---
title: No html head or body?
summary: You do not need to add the head or the body to your markup source
published: true
createdAt: 2023-12-17T15:10:50.630Z
---
Here is valid HTML. 

```

<title>Page title</title>

<h1>Hello World</h1>

```

The DOM will add the missing <head> and <body> tags it's self. You don't have to but of course a good practice to do so.

I use this when teaching to demonstrate how the DOM is not the HTML and the difference between the browser source code and the DOM.
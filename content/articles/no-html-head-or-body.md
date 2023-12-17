---
title: No html head or body?
summary: You do not need to add the head or the body to your markup source
published: true
createdAt: 2023-12-17T15:10:50.630Z
---
Here is valid HTML. 

```html

<title>Page title</title>

<h1>Hello World</h1>

```

The DOM will add the missing <head> and <body> tags it's self. You don't have to but of course a good practice to do so.

The body tag will start where the first visible element is located. So in this example the body will start before the `<h1>` even though the script and style tag are perfectly valid to be inside the body it will basically start the body on the first visible HTML element (or string of text).

```html

<title>Page title</title>
<script>
  console.log('foo')
</script>
<style>
  body { 
    background-color: #cdcdcd;
  }
</style>

<h1>Hello World</h1>

```

I have used this illustration sometimes when teaching web development to demonstrate how the DOM is not the HTML and the difference between the browser source code and the DOM.
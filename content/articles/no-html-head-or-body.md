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

The DOM will add the missing `<head>\` and \`<body>` tags by it's self. You don't have to but of course it's a good practice to do so.

The `<body>` tag will start where the first visible element is located. So in this example before the `<h1>`. Even though the \`<script>\` and \`<style>\` tags are perfectly valid inside both the `<body>\` and \`<head>` it will basically start the body on the first visible HTML element or even any string of text.

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

I demonstrate this sometimes when teaching web development and how the DOM is not same as the HTML and what the difference between the browser source code HTML and the DOM is.
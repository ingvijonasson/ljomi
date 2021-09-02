---
title: Javascript array methods rundown
summary: 'Couple of useful array method in Javascript'
slug: javascript-array-rundown
published: false
author: ingvi
---

A reference for some of the most common array methods that you should know by heart

```js
let arr = []

// add item(s) at the end of an array
arr.push('string', 2, { title: 'geil' }, 'last item')

// add item(s) to the beginning of an array
arr.unshift('first item', 2, { name: 'mega' }, 'Some strings are longer')
```

```js
// remove last item from an array
const lastItem = arr.pop()

// remove first item from an array
const firstItem = arr.shift()
```

```js
// starting at index 2 and removing 3 items
arr.splice(2, 3)
```

```js
starting at index 0 and replacing one item with a string
arr.splice(0, 1, "adding this")
```

```js
// extracting to a new array leaving orginal array untouched
const newArr = arr.slice(2, 4)
```

```js
// Check if string foo exist in an array
// Note if it is the first index it returns 0 as a true value
arr.indexOf('foo')
```

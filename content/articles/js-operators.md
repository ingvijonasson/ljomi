---
title: Javascript operations
summary: Basics of js convertions
published: false
createdAt: 2023-11-11T10:25:28.575Z
---
## Creating new markup, adding attributes and add to document

It does not matter where you want to insert the new element, createElement is a method from the document object. We should cache the new element with a variable. 

```
const biography = document.createElement('p')
```

After it has been created you might want to give it text. Here there are two ways to do that.

```
// this will overwrite any text that might have been available
// of course not relative to newly created elements
biography.textContent = 'Lorem ipsum..'

// lightly shorter way
biography.append('Lorem ipsum')

// can also add multiple elements
biography.append('lorem ipsum', someVariableWithText)

//TODO: What about append vs. appendChild
```

## Converting a number to a string

* There are 4 ways to convert a number to a string. 
* Using the template literals (backticks) is the best option for performance.

```
const myNumber = 7;

let myString1 = myNumber.toString();
let myString2 = String(myNumber);
let myString3 = `${myNumber}`; // Fastest method
let myString4 = myNumber + "";
```
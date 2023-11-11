---
title: Javascript operations
summary: Basics of js convertions
published: false
createdAt: 2023-11-11T10:25:28.575Z
---

## A number to string

There are 4 ways to convert a number to a string.
Using the Template literals method is the best option for performance.

```
const myNumber = 7;

let myString1 = myNumber.toString();
let myString2 = String(myNumber);
let myString3 = `${myNumber}`; // Fastest method
let myString4 = myNumber + "";
```

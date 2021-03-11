---
title: How I write my styles
summary: draft
---
Here is a small take on how I write my css. This article does not consider too much on the fact that you might be using a javascript framework such as vue and therefore might not be a best practise for that scenario

## ITCSS
The structure to follow looks somehow like this:

- settings
- tools
- base
- objects
- components
- utilities

## BEM
BEM works great with component driven development. It's a naming system where everyone need to follow some simple naming guidelines and it works well aside with many others css methologies e.g. oocss and itcss. 



 I use these methods along with bem myself and would almost always recommend one to do so. 

## Atomic design


## Javascript 
I practise I sometimes follow is to prefix classnames with `js-` when I need to select something for functionality. It might be tempting to grap one of the classes that already exist but this I find a very bad practice where this makes your code a bit fragile and difficult to maintain. If you would select a class name without labeling the class with a js prefix you have to make sure every time when you refactor or change a class name that you do not brake any Javascript associated. Instead you might give your element a new class e.g. `js-card-highlight` and select that from your script.

Another good approach would be to use data attributes. So instead of using a classname we might give our element an attribute like this `data-card-highlight` and select that instead. I find this is just a matter of preference. 

## Conclusion
You have come up with great names for your components.

## References
- [Harry Roberts talk on ITCSS](https://youtu.be/1OKZOV-iLj4?t=405)
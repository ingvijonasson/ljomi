---
title: When to use the button element?
---
The short answer is always. Of course if it's an interactive piece of ui. Never use e.g. a span or a div or whatever element you might come up with. But you might want to use an `<a>\` element but do so only when you need an \`href`. If you don't it should be an button. That's why using the button element should be your default.

## Styling

Of course using the `<button>` some default browser styling will apply. I guess that's the main reason why designers turn to another element in the first place. So let's take a simple button and give it a class.

```html
<button class="btn-reset">See Cats</button>
```
and the styles

```css
.btn-reset,
%btn-reset {
  padding: 0;
  color: inherit;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  cursor: pointer;
}
```
Here we remove all browser default button styling and normalize button typography. Optionally and arguably you may want to set the cursor to pointer. 

## Conclusion
The motivation behind this post is that by using the wrong markup you have serious accessibililty issues that can be avoided quite easily. 
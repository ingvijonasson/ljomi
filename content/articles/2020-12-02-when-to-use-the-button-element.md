---
title: How I organize and use buttons
summary: "An accessible aproach to styling and using buttons"
draft: true
---

I use buttons for everything that needs to interactive. If I want to open a modal, open a row in an accordion or show a menu for mobile. 

I never use a span or a div but sometimes my buttons turn out to become an link but do so only when I need an location and therefore the `href` attribute. If you don't it should be an button. That's why using the button element should be your default.

## Styling
A button has some default browser styling that vary accross browsers and I assume that's the main reason why a developer might turn himself to another element instead of styling the default button. 

For that reason I always keep a `.button-reset` which will reset all the styling and make the button look like a inline text.

```html
<button class="button-reset">Add to cart ...</button>
```

```scss
.btn-reset,
%btn-reset {
  display: inline-block;
  margin: 0;
  padding: 0;
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  line-height: 1;
  text-transform: none;
  text-decoration: none;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  cursor: pointer;
}
```

I do not intend to go through each property here but diverse browsers user agents treat buttons differently and here we have normalized these styles. 

I am now ready to create my button and button modifiers e.g. a primary button or a small button. Basically based on every project needs of course. This might look like this.

```scss
.button {
  // Let's remove all default styling first
  @extend %button-reset;

  --button-font-size: 1rem;
  --button-padding: 1em 3em;
  --button-color: lime;
  --button-color-background: #898989;

  padding: var(--button-padding);
  font-size: var(--button-font-size);
  color: var(--button-color);
  border: 1px solid currentcolor;
  background-color: var(--button-color-background);
}

.button--primary {
  --button-color: purple;
  --button-color-background: darkcyan;
}

.button--small {
  --button-font-size: 0.75rem;
}
```

This works fine and now when I want to do something a bit different e.g. create an icon button to open up mobile navigation I want to use the button element but I might not want that button look like an icon alone.

```html
<button class="button-menu" aria-label="Toggle Navigation">
  <svg>...</svg>
</button>

```
```scss
.button-mobile-open {
  @extend %button-reset;
  // additional styles
}
```

One last thing I might add to my `button-reset` class is a custom focus state. Focus states also varies across browsers and it is a nice approach to set it up right and in one place.

```scss
.btn-reset,
%btn-reset {
  // ...
  &:focus {
    outline: 3px dotted #811d15;
    outline-offset: 2px;
}
```

## Conclusion
Using buttons has massive benefits over all other elements. You can navigate with your keyboard. 

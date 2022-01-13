---
title: Focus - an approach to styling interactive elements
summary: Users navigating with a keyboard will be thankful
published: true
---

The focus ring is that blue outline around the element that is currently focused on the site your are visiting. Unfortunately designers and developers often remove this feature and therefore break the experience for many users.

The reason why they might do so is probably because the outline does not align with the visual design or the identity of the brand. Another common approach is to style the outline very minimally. So instead of removing the outline the focused elements gets a very subtle style that can easily be missed. In other words the focus style is in place but done in a way that it is hard to see it and also to follow when navigating with the keyboard.

The approach I like to follow is to make the focus ring look good and also prominent and to apply it to all interactive elements by default. Basically make it very visible when navigating. It's my way of saying this is the focus state and I am proud of it.

```css
a[href]:focus,
area[href]:focus,
input:not([disabled]):focus,
select:not([disabled]):focus,
textarea:not([disabled]):focus,
button:not([disabled]):focus,
[tabindex='0']:focus {
  /* styles for your ring */
}
```

A great example can be found on the [Smashing Magazine](https://www.smashingmagazine.com/) site. At the time of writing the site has a very prominent dotted outline for almost all interactive elements. If you visit the site, use the tab key to navigate the site and see the prominent blue outline.

## When the default does not work

There will though be instances where the ring might look less good or sometimes even awkward. In these cases you might want to come up with better visuals for the focused element. This might be the site brand or the site logo or you might want to style form elements differently than other interactive elements.
This could be changing e.g. text color, background color, a custom border or a combination of any of these.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="abLPdyr" data-preview="true" data-editable="true" data-user="ingvoo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/ingvoo/pen/abLPdyr">
  Focus</a> by Ingvi (<a href="https://codepen.io/ingvoo">@ingvoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Conclusion

The focus ring is there in your browser by default. Let’s not break the experience and therefore never remove it. By prioritizing the focus ring styles for all interactive elements and improving it's style you do prioritise the user experience and foster accessibility. Then when needed adjust the experience for the elements that need a different styles.
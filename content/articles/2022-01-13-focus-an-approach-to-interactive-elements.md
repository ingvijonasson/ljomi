---
title: Focus, an approach to interactive elements
summary: Users who navigate with the keybaord will thank you for this
published: true
---

The focus ring is that blue border around the element that is currently active or focused on the site you are looking at. Unfortunately designers and developers often remove this feature and therefore break the experience for many users.

The reason why they might do that is probably because the blue ring does not align with the visual design or the identity of the brand. What seems also to be a common approach is to style the outline very minimal. So instead of removing the outline the focus state gets very minimal styles. So basically the styles are there but hard to see and follow when navigating.

The approach I like to follow is to make the focus ring look good and prominent and to apply it to all interactive elements by default. Basically make it very visible.

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

There will be instances where the ring might look less good or sometimes even awkward. In these cases you might want to come up with better visuals for the focused element. This might be the site brand or the site logo or you might want to style focused form elements differently than other interactive elements.
This could be changing text color, background color, adding underlines or custom borders and a combination of these.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="abLPdyr" data-preview="true" data-editable="true" data-user="ingvoo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/ingvoo/pen/abLPdyr">
  Focus</a> by Ingvi (<a href="https://codepen.io/ingvoo">@ingvoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Conclusion

The focus ring is there in your browser by default. Let’s not break the experience and never remove it. By prioritizing the default focus ring styles for all interactive elements and making it look good you prioritise the user experience and foster accessibility. Then adjust the experience for the elements that need a different style then the default.
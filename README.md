# drab.css

An extremely boring set of CSS.
If you have a page of basic, unstyled HTML, and want to do almost no work, just pop this in.

`<link rel="stylesheet" href="https://heiskr.com/drab.css/css/drab.min.css">`

Also, you can use the `page` class to restrict the main portion of the page to a readable line length.

See a plain HTML page [before](https://heiskr.com/drab.css/demo/before) and [after](https://heiskr.com/drab.css/demo/after).

## Goals

- Bare minimum number of changes on top of `normalize.css`.
- Almost no classes, just add boring style to basic HTML tags.

## Changes

1. Apply `border-box` sizing to all elements.
2. Apply system fonts.
3. Apply more common `line-height` and use an `8px` vertical rhythm.
4. Constrain elements to width.
5. Use consistent border sizes and styles.
6. Tighten left on list like elements.
7. Apply more common spacing on `table`s.
8. Add spacing to sectional elements.
9. Style buttons to look more like web buttons.
10. Change the look of caption text.
11. Make strikethroughs more obvious.
12. More clickable summary.
13. Soften the shape of big boxy elements.
14. Lighten inactive elements.
15. Remove shadow on iOS.
16. Use more common, consistent, and attractive colors.
  - This includes a media query for `prefers-color-scheme` for dark mode users.
17. Finally, limit width on a high element so text is more readable. (The only class!)

## Alternatives

The "Very Lightweight" section of [troxler/awesome-css-frameworks](https://github.com/troxler/awesome-css-frameworks#very-lightweight) has several stylesheets with few to no classes.

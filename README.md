# drab.css

An extremely boring set of CSS.
If you have a page of basic, unstyled HTML, and want to do almost no work, just pop this in.

`<link rel="stylesheet" href="https://heiskr.com/drab.css/css/drab.css">`

Also, you can use the `page` class to restrict the main portion of the page to a readable line length.

See a plain HTML page [before](https://heiskr.com/drab.css/demo/before) and [after](https://heiskr.com/drab.css/demo/after).

## Goals

- Bare minimum number of changes on top of `normalize.css`.
- Almost no classes, just add boring style to basic HTML tags.

## Changes

1. Apply `border-box` sizing to all elements.
2. Apply system fonts.
3. Apply more common `line-height` and use an `8px` vertical rhythm.
4. Use consistent border sizes and styles.
5. Tighten left on list like elements.
6. Apply more common spacing on `table`s.
7. Constrain images and iframes to size
8. Add spacing to sectional elements
9. Use more common, consistent, and attractive colors.
10. Style and color buttons to look more like web buttons.
11. Change the look of caption text.
12. Make strikethroughs more obvious.
13. Soften the shape of big boxy elements.
14. Finally, limit width on a high element so text is more readable. (The only class!)

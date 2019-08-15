# drab.css

An extremely boring set of CSS.
If you have a page of basic, unstyled HTML, and want to do almost no work, just pop this in.

`<link rel="stylesheet" href="https://heiskr.com/drab.css/css/drab.min.css">`

See a plain HTML page [before](https://heiskr.com/drab.css/demo/before) and [after](https://heiskr.com/drab.css/demo/after).

## Goals

- Minimum number of changes on top of `normalize.css`.
- No classes.
- Use styles that are on ≥90% of websites.

## Changes

In an effort reduce the count of changes, here is a listing of all the significant changes on top of normalize.

### Global

1. Apply `border-box` sizing to all.
2. Apply system font to all.
3. Apply system monospace font to matching.
4. Limit width on body so text is easier to read.
5. Standardize line-height and font-size.
6. Standardize focus states.
7. Round corners. \*
8. Lighten text color slightly.
9. Use the same border color everywhere.

### Block

1. Adjust headers for 8px rhythm.
2. Tighten left on lists.
3. Add a left border to blockquote.
4. Adjust blockquote margin for 8px rhythm.
5. Adjust figure margins for 8px rhythm.
6. Constrain image and iframe to width to body.
7. Update progres height to 8px rhythm.
8. Adjust hr margin for 8px rhythm.
9. Make summary look easier to click. \*
10. Increase whitespace around header, section, and footer. \*
11. Update progress colors. \*

### Inline

1. Update small and monospace font size for 8px rhythm.
2. Make strikethroughs more obvious.
3. Adjust link color, removing visited color.
4. Update mark colors.

### Form

1. Constrain form to body width.
2. Remove shadow on iOS.
3. Lighten disabled.
4. Use the same border-width on form.
5. Add a little padding to input and button.
6. Update button colors.

### Table

1. Use padding not border-spacing on tables.
2. Align everything left in table cells by default.
3. Add zebra-striping to tables. \*
4. Add color to separate thead and tfoot.

\* – These styles are a bit more opinionated and would be outside (3) above.

## Alternatives

The "Very Lightweight" section of [troxler/awesome-css-frameworks](https://github.com/troxler/awesome-css-frameworks#very-lightweight) has several stylesheets with few to no classes.

I have a second sheet as well,

`<link rel="stylesheet" href="https://heiskr.com/drab.css/css/drabutil.min.css">`

Which includes some [minor utility classes](https://github.com/heiskr/drab.css/blob/master/css/drabutil.partial.css) with a standardized name format.

---
title: PHP and CSS
layout: default
---

This assignment requires you to make use of the following functions provided in css-colors.php (from PHP-lib):

- lighten
- darken
- saturate
- desaturate
- shift_hue

Each answer can be completed in a single source file, but you may want to separate your stylesheets into a separate file using an include like we did in class.

```php
<style type="text/css">
	<?php include 'style.css.php'; ?>
</style>
```

## 1

Create a page with a form on it that allows you to specify a color to use in the page background. After submitting the form, the background color must match the specified color; as well, the foreground color (text) should be complementary of the background color.

## 2

Create a new page like the one above, but now instead of using a solid color in the background, use a CSS3 linear gradient that starts at the specified color and ends at a color 50% darker.

### Hint

```css
html,body{
	min-height: 100%;
}
```

## 3

Create a new page like the previous. Instead of using CSS3 gradients, generate a series of divs that simulate a linear gradient. You must include a field in the form to specify how many divs to use in the gradient. Label it "Number of Steps".

### Hints

- Generate an array of colors and then use a foreach to display the divs. Use inline style to set the background color.

- You will need to position the form absolutely so the divs can display underneath it

	```css
	form {
		position: absolute;
		top: 0;
		left: 0;
	}
	```
- If you entered 5 as the number of divs The rendered HTML/CSS should look something like this:

	```css
	div {
		height: 20%;
	}
	```

	```html
	...
	<div style="background-color: rgba(194,230,13,1)"></div>
	<div style="background-color: rgba(172,205,12,1)"></div>
	<div style="background-color: rgba(151,179,10,1)"></div>
	<div style="background-color: rgba(129,154,9,1)"></div>
	<div style="background-color: rgba(108,128,7,1)"></div>
	...
	```

## 4

Create a new page like the previous. Now instead of darkening the color, display the full spectrum of colors starting at the specified color.

## 5

BONUS: Create a new page like the previous. Use CSS border-radius to shape the divs into a rainbow.
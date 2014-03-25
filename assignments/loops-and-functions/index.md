---
title: Loops and Functions
layout: default
---

#### 1(a)

Rewrite the following `while` loop as a `for` loop.

```php
<?php
$i = 1;
while ($i <= 10) {
	echo $i, '<br>';
	$i++;
}
?>
```

#### 1(b)

Rewrite the following `while` loop as a `for` loop.

```php
<?php
$i = 10;
while ($i > 0) {
	echo $i, '<br>';
	$i--;
}
?>
```

#### 2(a)

Given an array:

```php
<?php
$html = array(
	array(
		'tag_name'=>'h1',
		'content'=>'My page title'
	),
	array(
		'tag_name'=>'p',
		'attributes'=>array(
			'class'=>'big shiny'
		),
		'content'=>'Pizza is one of the main food groups. 5 out of 4 dentists recommend pizza over any other form of nutrition. Thou shalt eat thine pizza.'
	),
	array(
		'tag_name'=>'label',
		'attributes'=>array(
			'for'=>'like_pizza'
		),
		'content'=>'Do you like pizza?'
	),
	array(
		'tag_name'=>'input',
		'attributes'=>array(
			'type'=>'checkbox',
			'id'=>'like_pizza',
			'name'=>'like_pizza',
			'checked'=>'checked'
		)
	)
);
?>
```

Use a `foreach` loop to output the following HTML.

```html
<h1>My Page Title</h1>
<p class="big shiny">Pizza is one of the main food groups. 5 out of 4 dentists recommend pizza over any other form of nutrition. Thou shalt eat thine pizza.</p>
<label for="like_pizza">Do you like pizza?</label>
<input type="checkbox" id="like_pizza" name="like_pizza" checked="checked">
```

#### 2(b)

Create a PHP function called render_html that takes one parameter, an array like the one above, and `echo`s back the appropriate HTML.

#### 3(a)

Read [Formulas for converting between centigrade and fahrenheit](http://www.manuelsweb.com/temp.htm). Create two PHP functions, `fahrenheit_to_centigrade` and `centigrade_to_fahrenheit` that will convert between the two units.


#### 3(b)

Create a single page PHP application that contains a form with:

- An input field for "Degrees:"
- A radio selection for "Convert to:"
	- Centigrade
	- Fahrenheit
- A button that says "Convert"

When the form is submitted, at the top of the page it should say "X℃ is Y℉" or "X℉ is Y℃" depending on the radio selection.

The form should always be filled in with the values that were just submitted. This means that the input for degrees should have a value of X and the appropriate radio button should be `checked`.

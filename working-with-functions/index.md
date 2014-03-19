---
title: Working with Functions
layout: default
---

While functions have been covered earlier in the program, at this point it may be difficult for students to understand _why_ or _where_ they would want to use them. It's not just about understanding the syntax. It's about understanding how functions are useful.

This section is an attempt to give students more practice creating functions as well as illustrate their inherent usefulness.

## Why are functions useful?

Given the examples provided on codecademy, functions look rather stupid. It can be hard to demonstrate their usefulness until you have constructed large programs.

<!-- ?Banana Split Example? -->

Reusable
	DRY Principles
	Example function for [bootstrap media object](http://getbootstrap.com/components/#media)
		useful because used on multiple pages or even multiple sites

```php
<?php
function page_title($page_name = '') {
	return $page_name.' | PHP Review Site';
}
?>
```

`age_in_dog_years`

`fahrenheit_to_centigrade`
`centigrade_to_fahrenheit`

<!-- ?include_dir -->

```php
<?php function bs_media_object($link_to, $img_side, $img_src, $media_heading, $media_content) { ?>
	<div class="media">
		<a class="pull-<?php echo $img_side; ?>">
			<img class="media-object" src="<?php echo $img_src; ?>">
		</a>
		<div class="media-body">
			<h2 class="media-heading">
				<?php echo $media_heading; ?>
			</h2>
			<?php echo $media_content; ?>
		</div>
	</div>
<?php } ?>
```


Now imagine we have built all of our pages using this. Someone suggests making it so the heading is also a link.


Also we can set default values for some things

```php
<?php function bs_media_object($link_to = '#', $img_side = 'left', $img_src='', $media_heading='', $media_content='') { ?>
```


```php
<?php
function asset($type, $name) {

}
?>
```

e.g.
```html
<!DOCTYPE html>
<html>
<head>
	<title>A demo Page</title>
	<link rel="stylesheet" type="text/css" href="<?php echo asset('css','bootstrap'); ?>">
</head>
<body>

</body>
</html>
```

Self Documenting		

Testable
	


Formatting numbers

	php tutorial - 6.01 why use functions http://www.youtube.com/watch?v=zM3eKOkDHAw


```php
<?php
function sum($num_list) {
	$sum = 0;
	foreach ($num_list as $num) {
		$sum += $num;
	}
	return $num;
}
?>
```

```php
<?php
function roll_dice($min, $max) {
	return mt_rand($min, $max);
}
?>
```

```php
<?php
function print_numbers_in_range($lower_bound, $upper_bound) {
	for ($i = $lower_bound; $i <= $upper_bound; $i++) {
		echo $i, '<br>';
	}
}
?>
```

## Widgets

```php
<?php function html_table($rows) { ?>
	<table>
		<tbody>
			<?php foreach ($rows as $row): ?>
				<tr>
					<?php foreach ($row as $col): ?>
						<td>
							<?php echo $col; ?>
						</td>
					<?php endforeach ?>
				</tr>
			<?php endforeach ?>
		</tbody>
	</table>
<?php } ?>
```

```php
<?php function html_rows($rows) { ?>
	<?php foreach ($rows as $row): ?>
		<tr>
			<?php foreach ($row as $col): ?>
				<td>
					<?php echo $col; ?>
				</td>
			<?php endforeach ?>
		</tr>
	<?php endforeach ?>
<?php } ?>
```

then `html_table` becomes:

```php
<?php function html_table($rows) { ?>
	<table>
		<tbody>
			<?php html_rows($rows); ?>
		</tbody>
	</table>
<?php } ?>
```

and bs_table becomes:

```php
<?php function bs_table($rows) { ?>
	<table class="table">
		<tbody>
			<?php html_rows($rows); ?>
		</tbody>
	</table>
<?php } ?>
```


Modify `html_table` such that it adds the classes `.odd` and `.even` to the rows.
Modify `html_table` such that it takes a parameter, `$first_row_as_header`. It should default to being `false`. If it is `true` then the first row should be inside of a `<thead>` and should use `<th>` instead of `<td>` for the cells.

<!--
?Recursion?
	Html generator
	Dividing a list into columns
-->


## function scope

## Exercises

Make sure you test your code!


Create a function `ucase_each_word`

```php
<?php
function ucase_each_word($phrase) {
	$words = explode(' ', $phrase);
	$words = array_map('ucfirst', $words);
	return implode(' ', $words);
}
?>
```

### 1

Create a widget function called `html_nav`. It takes an associative array of link text mapped to URLs and outputs an appropriate unordered list of links.

For example

```php
$navigation_links = array(
	'Home' => 'index.php',
	'Our Services' => 'services.php',
	'Contact Us' => 'contact.php'
);
html_nav($navigation_links);
```

would output

```html
<ul>
	<li>
		<a href="index.php">Home</a>
	</li>
	<li>
		<a href="services.php">Our Services</a>
	</li>
	<li>
		<a href="contact.php">Contact Us</a>
	</li>
</ul>
```


### 2(a)

Write a widget function called `html_dl` that takes a single associative array as a paramater and outputs a `<dl>` of the data.

For example

```php
<?php
$my_dog = array(
	'name' => 'Touser',
	'breed' => 'Jack Russell Terrier',
	'hair color' => 'white',
	'age' => 8,
	'age in dog years' => age_in_dog_years(8)
);
html_dl($my_dog);
?>
```

would output

```html
<dl>
	<dt>name</dt>
		<dd>Touser</dd>
	<dt>breed</dt>
		<dd>Jack Russell Terrier</dd>
	<dt>hair color</dt>
		<dd>white</dd>
	<dt>age</dt>
		<dd>8</dd>
</dl>
```

### 2(b)

Modify `html_dl` such that every word inside the `<dt>`s starts with an uppercase letter.

```html
<dl>
	<dt>Name</dt>
		<dd>Touser</dd>
	<dt>Breed</dt>
		<dd>Jack Russell Terrier</dd>
	<dt>Hair Color</dt>
		<dd>white</dd>
	<dt>Age</dt>
		<dd>8</dd>
</dl>
```

### 3

Modify the `age_in_dog_years` function we created earlier to use a more accurate model as described [here](http://en.wikipedia.org/wiki/Aging_in_dogs#Aging_profile)

> [T]he first two years equal 10.5 years each, with subsequent years equaling four human years.
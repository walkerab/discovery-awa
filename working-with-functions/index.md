---
title: Working with Functions
layout: default
---

While functions have been covered earlier in the program, at this point it may be difficult for students to understand _why_ or _where_ they would want to use them. It's not just about understanding the syntax. It's about understanding how functions are useful.

This section is an attempt to give students more practice creating functions as well as illustrate their inherent usefulness.

Watch this video tutorial: [php tutorial - 6.01 why use functions](http://www.youtube.com/watch?v=zM3eKOkDHAw)

## Using Functions

To stay organized we will be placing our functions into a file called `utilities.php`. We then include this file into our pages so that we may call the functions. We will start with a simple example.

Open the folder you used for the [PHP Review Site]({{site.url}}/php-review/) and create a folder called `inc`. This is short for "include".

Inside the new folder create a file, `utilities.php`:

```php
<?php
function page_title($page_name = '') {
	return $page_name.' | PHP Review Site';
}
?>
```

<div class="alert alert-info">
	Note that the names for the files and folder here are irrelevant. We could have just as well called them "foo", "bar", or "banana" and they would still operate the same way. The names hold no meaning to the computer. They only hold meaning to you, the programmer.
</div>

This function will format a string representing a page's name into a string suitable to be used as a page title.

To use it we will need to `include` `utilities.php` into our code. At the top of `index.php`, `gallery.php`, and `services.php`, insert the following:

```php
<?php include 'inc/utilities.php'; ?> // <
...
```

Now make it so when we set the `$title` we do it like so:

For `gallery.php`:

```php
<?php $title = page_title('Gallery'); ?>
```

For `services.php`:

```php
<?php $title = page_title('Services'); ?>
```

And for `index.php`:

```php
<?php $title = page_title('Home'); ?>
```

## Why are functions useful?

Given the examples provided on codecademy, functions look rather stupid. It can be hard to demonstrate their usefulness until you have constructed larger programs.

The example we just did, `page_title` may not seem very useful either. In fact we wrote _more_ code and acheived only the same result. Why would we want to do more work if it doesn't improve the end result?

Let's imagine that for every page instead of using the bar symbol `|` between the page name and the site name, we wanted to use the tilde symbol `~`. All we have to do now is modify our function in `utilities.php`.

```php
<?php
function page_title($page_name = '') {
	return $page_name.' ~ PHP Review Site'; // <
}
?>
```

We then achieve a _site-wide_ change by making modifications in only _one place_. If we had stuck with the way we were doing it before and wanted to make the same change, we would have had to make the modification in all three files.

While this may not seem like a big deal - it is after all trivial to make the change in three files. What if our site had 100 pages? 1000 pages?

This is an example of <abbr title="Don't Repeat Yourself">DRY</abbr> principles which are core to being a successful programmer.

<!-- ?Banana Split Example? -->

```php
<?php
function age_in_dog_years($human_years) {
	$dog_years = $human_years * 7;
	return $dog_years;
}
?>
```

This function given a number in human years will `return` a number representing the equivalent in dog years.

## Snippets

A snippet is a template or function that is designed to be reused. Our `page-top` and `page-bottom` templates are examples of snippets.

We can improve on these templates by moving them into functions. In `utilities.php` add:

```php
<?php
function page_title($page_name = '') {
	return $page_name.' | PHP Review Site';
}

function page_top($title) { // <
?><!DOCTYPE html> // <
<html> // <
<head> // <
	<meta charset="utf-8"> // <
	<title><?php echo $title; ?></title> // <
	<link rel="stylesheet" type="text/css" href="bootstrap-3.1.1-dist/css/bootstrap.min.css"> // <
</head> // <
<body> // <
	<div class="container"> // <
		<ul class="nav nav-tabs nav-justified"> // <
			<li> // <
				<a href="index.php">Home</a> // <
			</li> // <
			<li> // <
				<a href="services.php">Services</a> // <
			</li> // <
			<li> // <
				<a href="gallery.php">Gallery</a> // <
			</li> // <
		</ul> // <
		<div class="row"> // <
			<div class="col-sm-8"><?php // <
} // <
?>
```

Now in our three pages, we can replace two lines of code with one. For example, in `services.php`

```php
<?php $title = page_title('Services'); ?>
<?php include 'templates/page-top.php'; ?>
```

becomes

```php
<?php page_top(page_title('Services')); ?>
```

<!-- div class="alert alert-info">
	Note that it is not always preferred to use a function snippet over a template snippet. You should always go with what is more appropriate to the situation.
</div -->

Make the same change for `page-bottom`.

```php
<?php
...
function page_bottom() {
			?>
			</div>
			<div class="col-sm-4">
				<dl>
					<dt>Phone</dt>
						<dd>(555)555-5555</dd>
					<dt>Fax</dt>
						<dd>(555)555-5556</dd>
					<dt>Email</dt>
						<dd>somebody@php.net</dd>
				</dl>
			</div>
		</div>
		<div class="pull-right">
			&copy;2014 Whatever Whatever
		</div>
	</div>
</body>
</html><?php
}
?>
```

## Widgets

Broadly speaking, a widget is a snippet used for standalone UI components.

### Navigation Links

In `utilities.php`:

```php
<?php
function html_ul_links($links) { ?>
<ul>
	<?php foreach ($links as $link_text => $uri): ?>
		<li>
			<a href="<?php echo $uri; ?>">
				<?php echo $link_text; ?>
			</a>
		</li>
	<?php endforeach ?>
</ul>
<?php }
?>
```

Let's use this in our site. Modify our `page_top` function so that it uses `html_ul_links`.

```php
<?php
...
function page_top($title) {
?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<link rel="stylesheet" type="text/css" href="bootstrap-3.1.1-dist/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<?php html_ul_links(array( // <
			'Home' => 'index.php', // <
			'Services' => 'services.php', // <
			'Gallery' => 'gallery.php' // <
		)); ?> // <
		<div class="row">
			<div class="col-sm-8"><?php
}
...
?>
```

It worked, but now our main navigation looks different than before. What's missing?

We need the [Bootstrap classes](http://getbootstrap.com/components/#nav), nav, nav-tabs, and nav-justified.

We could just write

```html
<ul class="nav nav-tabs nav-justified">
```

But then this widget function would only be suitable for the one place we are using it. What if we wanted to have another list of links in our page footer? We probably don't want them looking exactly the same as the links in the header.

We should instead add a paramater to our function that permits us to specify the `class` attribute of the list.

```php
<?php
function html_ul_links($links, $list_class="") { ?>
<ul class="<?php echo $list_class; ?>">
	<?php foreach ($links as $link_text => $uri): ?>
		<li>
			<a href="<?php echo $uri; ?>">
				<?php echo $link_text; ?>
			</a>
		</li>
	<?php endforeach ?>
</ul>
<?php }
?>
```

Now we can easily create [Bootstrap style navigation](http://getbootstrap.com/components/#nav)

```php
<?php
...
function page_top($title) {
?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<link rel="stylesheet" type="text/css" href="bootstrap-3.1.1-dist/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<?php html_ul_links(array(
			'Home' => 'index.php',
			'Services' => 'services.php',
			'Gallery' => 'gallery.php'
		), 'nav nav-tabs nav-justified'); ?> // <
		<div class="row">
			<div class="col-sm-8"><?php
}
...
?>
```

### Table

For this example we will create widget for HTML tables. The function will be called `html_table`. I use the prefix, `html_`, to indicate something is an HTML widget function and that it `echo`s output.

In `utilities.php`:

```php
<?php
function html_table($rows) { ?>
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
<?php
}
?>
```

Tables are tedious to write out manually so this function could save you lots of time.

<div class="alert alert-info">
	<p>
		Note that widget functions should only be created if they will actually save you time in the future. For example creating a widget function for `&lt;p&gt;` tags would be ridiculous.
	</p>
	<!-- p>
		However for something like an `&lt;img&gt;` tag, an argument could be made for either approach. I prefer to write out my image tags.
	</p -->
</div>

### Reusability

Reusable
	DRY Principles
	Example function for [bootstrap media object](http://getbootstrap.com/components/#media)
		useful because used on multiple pages or even multiple sites


`age_in_dog_years`


[Formulas for converting between centigrade and fahrenheit](http://www.manuelsweb.com/temp.htm)
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

<!--

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

-->

### 1

Modify the `html_table` function such that it support [Bootstrap table styles](http://getbootstrap.com/css/#tables)

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
---
title: Form Basics
layout: default
---

Form controls are covered extensively in CWT. The material in this section serves mainly as a review. The difference comes in the complexity of the applications we construct.

## Creating a Form

The syntax for creating an HTML form looks like this:

```html
<form>
	<!-- Labels, Form Controls, and Fieldsets go here -->
</form>
```

We specify the script/destination for our form data using the `action` attribute. If action is blank or not specified, the form will submit to the current page/script.

We put data in our form using form controls. The most common are:

- `<input type="text">`
- `<input type="password">`
- `<input type="number">`
- `<input type="hidden">`
- `<input type="checkbox">`
- `<input type="radio">`
- `<select>`
- `<textarea>`

Form data consists of "key-value" pairs. We specify the "key" using the `name` attribute. The value is specified by the user entering it into a form control or by using the `value` attribute.

Create the following:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Form Whatever Title Stuff</title>
</head>
<body>
	<form action="">
		<label>
			First Name:
			<input name="first_name" type="text">
		</label>
	</form>
</body>
</html>
```

Open it in a browser, click on the label text to focus the input, fill in the input, and then hit enter/return to submit the form.

<div class="alert alert-info">
	Note that if a form contains _only one_ form control, if you press enter/return, the form will submit. If there is more than one form control, the form must contain either an `&lt;input type=&quot;submit&quot;&gt;` or `&lt;button&gt;` before it will submit on enter/return.
</div>

After submitting the form, observe the key-value pair that appeared in the address bar.

## PHP Handling of Form Data

When a PHP script receives form data, it interprets it as an associative array.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Form Whatever Title Stuff</title>
</head>
<body>
	<?php // <
	var_dump($_REQUEST); // <
	?> <!-- < -->
	<form action="">
		<label>
			First Name:
			<input name="first_name" type="text">
		</label>
	</form>
</body>
</html>
```

An associative array is simply the most convenient way to represent key-value pairs in PHP.

## POST vs GET

The form we created above lacks a `method` attribute. We use the `method` attribute to tell the web-browser how it should send the form data to the `action`.

Currently browsers only support two values for the form `method`: `POST` or `GET`.

POST data is sent in the background while GET data is sent in the URL. It is almost always preferable to use POST over GET. Many of the examples in this course will use GET data, but in practice, you should use POST.

From a user's perspective the biggest difference for POST and GET is that the form data is stored in the browser's history. Sometimes this is desirable e.g. a Google Search. Sometimes it is not desirable e.g. a credit card number.

<!--
What if we do a PRG as a GRG? Does it stay in the history?
-->

<!--
POST data, although being sent "in the background", is still not fully secure.
-->

## `$_POST` vs `$_GET` vs `$_REQUEST`

PHP has three [superglobals](http://www.php.net/manual/en/language.variables.superglobals.php) for receiving basic (textual) form data:

- `$_POST`
- `$_GET`
- `$_REQUEST`

They are associative arrays. `$_POST` contains only data sent using the POST method. `$_GET` contains only data sent using the GET method. `$_REQUEST` contains all of the data from `$_POST` and `$_GET`. 

I recommend using `$_REQUEST` over `$_POST` or `$_GET` because then we don't need to worry about what our form method was. It's also helpful in allowing us to test code that normally works with POST data by setting GET vars.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Form Whatever Title Stuff</title>
</head>
<body>
	<?php // <
	var_dump($_POST); // <
	?> <!-- < -->
	<form action="" method="POST"><!-- < -->
		<label>
			First Name:
			<input name="first_name" type="text">
		</label>
	</form>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
	<title>Form Whatever Title Stuff</title>
</head>
<body>
	<?php // <
	var_dump($_GET); // <
	?> <!-- < -->
	<form action="" method="GET"><!-- < -->
		<label>
			First Name:
			<input name="first_name" type="text">
		</label>
	</form>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
	<title>Form Whatever Title Stuff</title>
</head>
<body>
	<?php // <
	var_dump($_REQUEST); // <
	?> <!-- < -->
	<form action="" method="GET"><!-- < -->
		<label>
			First Name:
			<input name="first_name" type="text">
		</label>
	</form>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
	<title>Form Whatever Title Stuff</title>
</head>
<body>
	<?php // <
	var_dump($_REQUEST); // <
	?> <!-- < -->
	<form action="" method="POST"><!-- < -->
		<label>
			First Name:
			<input name="first_name" type="text">
		</label>
	</form>
</body>
</html>
```

## Values, Undefined Variables, and Defaults

<div class="alert alert-info">
	<p>
		The technique used in this section may seem a little unconventional. It is.
	</p>
	<p>
		The purpose of this technique is to prevent us having to write <code>if (isset(...))</code> around every form variable we wish to output.
	</p>
	<p>
		It works rather effectively for small to mid-sized programs and sites and it really does save a lot of code and confusion from students.
	</p>
</div>

If we wanted to make our form show the submitted data, we set the `value` attribute on our form controls.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Form Whatever Title Stuff</title>
</head>
<body>
	<form action="">
		<label>
			First Name:
			<!-- * -->
			<input
				type="text"
				name="first_name"
				value="<?php echo $_REQUEST['first_name']; ?>"
			>
			<!-- * -->
		</label>
	</form>
</body>
</html>
```

To save on writing `$_REQUEST` every time we can use an `extract`.

```html
<?php // <
	extract($_REQUEST); // <
?><!DOCTYPE html> <!-- < -->
<html>
<head>
	<title>Form Whatever Title Stuff</title>
</head>
<body>
	<form action="">
		<label>
			First Name:
			<!-- * -->
			<input
				type="text"
				name="first_name"
				value="<?php echo $first_name; ?>"
			>
			<!-- * -->
		</label>
	</form>
</body>
</html>
```

Unfortunately, we are not guaranteed that `$_REQUEST['first_name']` will always be defined. Thus we define a default value for it.

```html
<?php
	$first_name = ''; // <
	extract($_REQUEST);
?><!DOCTYPE html>
<html>
<head>
	<title>Form Whatever Title Stuff</title>
</head>
<body>
	<form action="">
		<label>
			First Name:
			<input
				type="text"
				name="first_name"
				value="<?php echo $first_name; ?>"
			>
		</label>
	</form>
</body>
</html>
```

We assign a value to `$first_name`, then if it is defined in the POST data or GET data it will override our assignment. Either way, the variable is guaranteed to be defined, freeing us from error messages.

<div class="alert alert-warning">
	<p>
		It is important that our `extract` happens at the beginning of our PHP script. If it is placed later in the program, there is potential for attackers to compromise the code.
	</p>
	<p>
		As a general rule, you should only place default variable assignments before the `extract`. All other program code should follow it.
	</p>
</div>

## Filtering a List of People

When we were looking at [Nested Arrays](../nested-arrays), we created an application that listed out some peoples' first name, last name, and favourite colour.

```html
<?php
include 'people-data.php';
?><!DOCTYPE html>
<html>
<head>
	<title>People Data</title>
	<style type="text/css">
		dt {
			font-weight: bold;
		}
	</style>
</head>
<body>
	<?php foreach ($data as $person): ?>
		<dl>
			<?php foreach ($person as $key => $value): ?>
				<dt>
					<?php echo $key; ?>
				</dt>
				<dd>
					<?php echo $value; ?>
				</dd>
			<?php endforeach ?>
		</dl>
	<?php endforeach ?>
</body>
</html>
```

Let's make it so we can filter our list of people by their favourite colour.

First let's just make it so we can access a `GET` variable, `favourite_colour`, that will specify the colour.

```html
<?php
include 'people-data.php';
?><!DOCTYPE html>
<html>
<head>
	<title>People Data</title>
	<style type="text/css">
		dt {
			font-weight: bold;
		}
	</style>
</head>
<body>
	<h1><!-- < -->
		Favourite Color = <?php echo $_REQUEST['favourite_colour']; ?><!-- < -->
	</h1><!-- < -->
	<?php foreach ($data as $person): ?>
		<dl>
			<?php foreach ($person as $key => $value): ?>
				<dt>
					<?php echo $key; ?>
				</dt>
				<dd>
					<?php echo $value; ?>
				</dd>
			<?php endforeach ?>
		</dl>
	<?php endforeach ?>
</body>
</html>
```

Now depending on your PHP configuration, there may or may not be an error message showing. Whether you see the error message or not, the above code is incorrect since there remains the possibility `$_REQUEST['favourite_colour']` is undefined. 

Append `?favourite_colour=yellow` to the URL in your address bar.

We can't rely on the fact that `favourite_colour` will be defined in `GET` or `POST` data so we will use the technique we learned above for setting a default.

```html
<?php
$favourite_colour = '';// <
extract($_REQUEST);// <
include 'people-data.php';
?><!DOCTYPE html>
<html>
<head>
	<title>People Data</title>
	<style type="text/css">
		dt {
			font-weight: bold;
		}
	</style>
</head>
<body>
	<h1>
		Favourite Color = <?php echo $favourite_colour; ?><!-- < -->
	</h1>
	<?php foreach ($data as $person): ?>
		<dl>
			<?php foreach ($person as $key => $value): ?>
				<dt>
					<?php echo $key; ?>
				</dt>
				<dd>
					<?php echo $value; ?>
				</dd>
			<?php endforeach ?>
		</dl>
	<?php endforeach ?>
</body>
</html>
```

Now we probably don't even want to show our `<h1>` if the `favourite_colour` has not been provided.

```html
...
<body>
	<?php if ($favourite_colour): ?><!-- < -->
		<h1>
			Favourite Color = <?php echo $favourite_colour; ?>
		</h1>
	<?php endif ?><!-- < -->
	<?php foreach ($data as $person): ?>
	...
```

Try removing `favourite_colour` from the address bar.

Now let's add a form to the page for controlling the value of `favourite_colour`.

```html
...
<body>
	<form action="" method="GET"><!-- < -->
		<input type="text" name="favourite_colour"><!-- < -->
	</form><!-- < -->
	<?php if ($favourite_colour): ?>
		<h1>
			Favourite Color = <?php echo $favourite_colour; ?>
		</h1>
	<?php endif ?>
	<?php foreach ($data as $person): ?>
	...
```

We can also make the form control remember what value it was submitted with.

```html
...
<body>
	<form action="" method="GET">
		<input type="text" name="favourite_colour" value="<?php echo $favourite_colour; ?>"><!-- < -->
	</form>
	<?php if ($favourite_colour): ?>
		<h1>
			Favourite Color = <?php echo $favourite_colour; ?>
		</h1>
	<?php endif ?>
	<?php foreach ($data as $person): ?>
	...
```

The purpose for this app to is to filter out which people have which favourite colour. Clearly that isn't happening yet.

```html
...
<?php foreach ($data as $person): ?>
	<?php if ($person['Favourite Colour'] == $favourite_colour): ?><!-- < -->
		<dl>
			<?php foreach ($person as $key => $value): ?>
				<dt>
					<?php echo $key; ?>
				</dt>
				<dd>
					<?php echo $value; ?>
				</dd>
			<?php endforeach ?>
		</dl>
	<?php endif ?><!-- < -->
<?php endforeach ?>
...
```

## Lorem Pixel Image Browser

Create a single page application for browsing all of categories of images on LoremPixel

```html
<?php
	// Set a default value for $category
	// in case the form hasn't been submitted yet
	$category = '';
	extract($_REQUEST);
	$category_names = array(
		'abstract',
		'animals',
		'business',
		'cats',
		'city',
		'food',
		'nightlife',
		'fashion',
		'people',
		'nature',
		'sports',
		'technics',
		'transport'
	);
?><!DOCTYPE html>
<html>
<head>
	<title>Lorem Pixel Image Browser</title>
</head>
<body>
	<form>
		<select name="category">
			<option></option>
			<?php foreach ($category_names as $category_name): ?>
				<option <?php if ($category_name === $category): ?>
					selected="selected"
				<?php endif ?>>
					<?php echo $category_name; ?>
				</option>
			<?php endforeach ?>
		</select>
		<button>Go</button>
	</form>
	<?php if (!empty($category)): ?>
		<?php for ($i = 1; $i <= 10; $i++): ?>
			<img src="http://lorempixel.com/320/240/<?php echo $category,'/',$i; ?>">
		<?php endfor ?>
	<?php endif ?>
</body>
</html>
```

## Guess the Number

```html
<?php
$guessed_number = FALSE;
extract($_REQUEST);
$actual_number = rand(1,5);
?><!DOCTYPE html>
<html>
<head>
	<title>Guess the Number</title>
</head>
<body>
	<?php if ($guessed_number !== FALSE): ?>
		<?php if ($guessed_number == $actual_number): ?>
			<p>
				That's right! The number was <?php echo $actual_number; ?>!
			</p>
		<?php else: ?>
			<p>
				Sorry. You guessed <?php echo $guessed_number; ?>. The number was <?php echo $actual_number; ?>. Try again.
			</p>
		<?php endif ?>
	<?php endif ?>
	<form action="" method="POST">
		Pick a number between 1 and 5:
		<input type="number" min="1" max="5" name="guessed_number">
	</form>
</body>
</html>
```

<!-- Example for age restriction? -->

## Exercises

#### 1

Create a simple login form with an email and password field. Do we want to use POST or GET? Why?

#### 2

Create a form that asks for date of birth. Be sure to use the appropriate form controls for each portion.
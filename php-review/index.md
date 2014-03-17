---
title: PHP Review
layout: default
---

At this point in the program, students should have a basic grasp on PHP:

- variables
- loops
	- while
	- for
	- foreach
- functions
- includes

Students must have completed sections 1 through 8 of [the PHP track on Codecademy](http://www.codecademy.com/tracks/php) before continuing.

This lesson will serve as a review on:

- includes
- variables
- loops
- Bootstrap components

## A PHP driven website

As a refresher we are going to create a website with three pages: _Home_, _Services_, and _Gallery_.

1. Create a folder for the website in a web-accessible directory. You must be able to access it through `localhost`!
2. Download a copy of [Bootstrap](http://getbootstrap.com) and unzip it into the newly created directory.

### Creating the Page Template(s)

Now create `index.php`:

```html
<!DOCTYPE html>
<html>
<head>
	<title>PHP Review Site</title>
	<link rel="stylesheet" type="text/css" href="bootstrap-3.1.1-dist/css/bootstrap.min.css">
</head>
<body>
	<h1>Hello</h1>
</body>
</html>
```

<div class="alert alert-info">
	We put text in the page to make sure Bootstrap is working. If it is not working the text will appear as a serif font.
</div>

As with most Bootstrap-based sites, we will placing everything inside of a `.container`.

```html
<!DOCTYPE html>
<html>
<head>
	<title>PHP Review Site</title>
	<link rel="stylesheet" type="text/css" href="bootstrap-3.1.1-dist/css/bootstrap.min.css">
</head>
<body>
	<div class="container"><!-- < -->
		<h1>Hello</h1>
	</div><!-- < -->
</body>
</html>
```

Also we want to add in the column that will contain our main content.

```html
<div class="container">
	<div class="row"><!-- < -->
		<div class="col-sm-8"><!-- < -->
			<h1>Hello</h1>
		</div><!-- < -->
	</div><!-- < -->
</div>
```

Let's generate some content for our home page. Go to [Blind Text Generator](http://www.blindtextgenerator.com/) and set it to "Far Far Away", 300 words, 6 paragraphs, and make sure to set it to display `&lt;p&gt;` tags.

<div class="alert alert-info">
	While it is common practice to use "Lorem Ipsum..." for filler text, it is bad practice. One should prefer using text written in their own language. That way you can test your pages for readability.
</div>

Paste the generated text into `index.php`.

<div class="alert alert-info">
	If you are using Sublime Text you will want to paste using <kbd>ctrl+shift+v</kbd> so as to preserve indentation.
</div>

Save and view the page.

#### Character Encoding

You will notice when the page is viewed in the browser that there are strange characters visible in the text. This is because the web browser is misinterpreting the character encoding of our document.

Insert the `charset` meta-tag into the head.

```html
<head>
	<meta charset="utf-8"><!-- < -->
	<title>PHP Review Site</title>
	<link rel="stylesheet" type="text/css" href="bootstrap-3.1.1-dist/css/bootstrap.min.css">
</head>
```

<div class="alert alert-info">
	It is good practice to add this meta tag to any web-page you create. Even if it is not immediately needed, someone may down the road copy and paste content into a site that will cause the problem to occur. By adding the meta tag, we prevent the issue altogether.
</div>

#### Contact Information

Create another column to house the contact information.

```html
<div class="container">
	<div class="row">
		<div class="col-sm-8">
			...
		</div>
		<div class="col-sm-4"><!-- < -->
			<dl><!-- < -->
				<dt>Phone</dt><!-- < -->
					<dd>(555)555-5555</dd><!-- < -->
				<dt>Fax</dt><!-- < -->
					<dd>(555)555-5556</dd><!-- < -->
				<dt>Email</dt><!-- < -->
					<dd>somebody@php.net</dd><!-- < -->
			</dl><!-- < -->
		</div><!-- < -->
	</div>
</div>
```

#### Navigation

Let's add in a primary navigation for our three pages.

```html
<div class="container">
	<ul class="nav nav-tabs nav-justified"><!-- < -->
		<li><!-- < -->
			<a href="index.php">Home</a><!-- < -->
		</li><!-- < -->
		<li><!-- < -->
			<a href="services.php">Services</a><!-- < -->
		</li><!-- < -->
		<li><!-- < -->
			<a href="gallery.php">Gallery</a><!-- < -->
		</li><!-- < -->
	</ul><!-- < -->
	<div class="row">
		<div class="col-sm-8">
			...
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
</div>
```

#### Footer

And what website is complete without a copyright in the footer!

```html
<div class="container">
	<ul class="nav nav-tabs nav-justified">
		<li>
			<a href="index.php">Home</a>
		</li>
		<li>
			<a href="services.php">Services</a>
		</li>
		<li>
			<a href="gallery.php">Gallery</a>
		</li>
	</ul>
	<div class="row">
		<div class="col-sm-8">
			...
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
	<div class="pull-right"><!-- < -->
		&copy;2014 Whatever Whatever<!-- < -->
	</div><!-- < -->
</div>
```

#### Putting it Together

We now have all of the components that will be repeated for every page: the navigation, the contact information, and the footer. The only thing that changes between pages is the `&lt;title&gt;` and what's inside of the `.col-sm-8`.

One of the simplest uses for PHP is to `include` or `require` in snippets from other documents. We do this to avoid repeating code in multiple places. It also makes site maintenance/updates easier.

Let's create a folder called `templates`. Inside of it create a new file, `page-top.php`:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>PHP Review Site</title>
	<link rel="stylesheet" type="text/css" href="bootstrap-3.1.1-dist/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<ul class="nav nav-tabs nav-justified">
			<li>
				<a href="index.php">Home</a>
			</li>
			<li>
				<a href="services.php">Services</a>
			</li>
			<li>
				<a href="gallery.php">Gallery</a>
			</li>
		</ul>
		<div class="row">
			<div class="col-sm-8">
```

and `page-bottom.php`:

```html
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
</html>
```

then in `index.php` all we need is:

```html
<?php include 'templates/page-top.php'; ?>
	<h1>Hello</h1>
	<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

	...

<?php include 'templates/page-bottom.php'; ?>
```

If we refresh the page, we should see that nothing has changed.

### Adding Pages

Now create `services.php`:

```html
<?php include 'templates/page-top.php'; ?>
	<h1>Services</h1>
	<p>
		We offer a variety of services:
	</p>
	<ul>
		<li>Stuff</li>
		<li>Other Things</li>
		<li>More Stuff</li>
		<li>24/7 Technical Support</li>
	</ul>
<?php include 'templates/page-bottom.php'; ?>
```

#### Changing the Title

The page works perfectly except that when we look at the title on the browser tab is still says "PHP Review Site". We want it to say "Services | PHP Review Site".

Let's introduce a variable,`$title` , into our `page-top.php` template.

```html
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title><!-- < -->
	<link rel="stylesheet" type="text/css" href="bootstrap-3.1.1-dist/css/bootstrap.min.css">
</head>
```

Now in all of our pages we just set the variable before we include our template.

So at the top of `services.php` we would add:

```html
<?php $title = 'Services | PHP Review Site'; ?>
```

and at the top of `index.php` we would add:

```html
<?php $title = 'PHP Review Site'; ?>
```

The title should change when we click between the two pages.

### Looping Through Images

Now create `gallery.php`:

```html
<?php $title = 'Gallery | PHP Review Site'; ?>
<?php include 'templates/page-top.php'; ?>
	<h1>Gallery</h1>
	<?php for ($i = 1; $i <= 10; $i++): ?>
		<img src="http://lorempixel.com/300/200/city/<?php echo $i; ?>">
	<?php endfor ?>
<?php include 'templates/page-bottom.php'; ?>
```

This gives us ten images in our gallery. Size down the width of the browser window. Eventually the images will stack on top of each other instead of appearing inline. This means that on small-screen devices our images will appear this way.

This is not the behaviour we want. We want to always have three columns of images no matter the screen size.

```html
<?php $title = 'Gallery | PHP Review Site'; ?>
<?php include 'templates/page-top.php'; ?>
	<h1>Gallery</h1>
	<div class="row"><!-- < -->
		<?php for ($i = 1; $i <= 10; $i++): ?>
			<div class="col-xs-4"><!-- < -->
				<img src="http://lorempixel.com/300/200/city/<?php echo $i; ?>">
			</div><!-- < -->
		<?php endfor ?>
	</div><!-- < -->
<?php include 'templates/page-bottom.php'; ?>
```

<div class="alert alert-info">
	Note that while normally our column sizes would only add up to 12, Bootstrap does allow us to have column arrangements greater than 12. The columns simply wrap onto the next line when they no longer fit.
</div>

The result looks strange because our images are larger than their containing columns. We can use the [Bootstrap Thumbnail Component](http://getbootstrap.com/components/#thumbnails) to resolve this.

```html
<div class="col-xs-4">
	<div class="thumbnail"><!-- < -->
		<img src="http://lorempixel.com/300/200/city/<?php echo $i; ?>">
	</div><!-- < -->
</div>
```

You should now have a functioning, PHP-driven website.

## Student Exercises

1. Modify the `.thumbnail`s so they are links (`&lt;a&gt;`) to a 640x480 version of the same image.
2. Lorem Pixel provides several categories of images besides "city".
	1. Create a file called `image-categories.php`
	2. Inside the file define a variable, `$image_categories` , that is an array of strings of all of the categories available on Lorem Pixel.
	3. At the top of `gallery.php` `include` `image-categories.php`.
	4. Replace the `for` loop with a `foreach` loop over `$image_categories`. Your thumbnails should be of the first image in each category. e.g. city/1, animals/1, etc.
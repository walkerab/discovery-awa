---
title: AWA Course Outline
layout: default
---

This document describes the course outline and recommended delivery model for the course, _Advanced Web Architecture_.

## Materials

Students will require headphones for some lessons as they are audio/video-based.

## Content Delivery

As it is, the course is designed to be delivered through an instructor. The material is not written at a level where it can just be handed off to the students. While it may be ok to do so for some of the lessons, the majority of them will require the instructor to demonstrate them on the projector one step at a time and answer questions as they arise.

Eventually more of the material will be made directly accessible to students once the curriculum becomes more stable.

For now, exercises and assignments should be sent to students via email.

The course content is listed below under "Outline".

## Coding Conventions

To achieve a consistent learning experience between instructors, there are some recommended coding conventions.

### HTML

For HTML we strictly use HTML5. This means every web page should have

```html
<!DOCTYPE html>
```

at the top.

This however does not mean you should use the new HTML5 structural elements such as `<header>`, `<footer>`, `<section>`, `<aside>`, etc. While it is _ok_ to use them, I would advise against it. There are is much debate regarding their usage and this can be confusing for students.

### CSS

I recommend using a BEM or SMACSS approach.

- [http://bem.info/articles/yandex-frontend-dev/](http://bem.info/articles/yandex-frontend-dev/)
- [http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [http://smacss.com/](http://smacss.com/)

Avoid using ids for styling. They are ok for scripting with `document.getElementById`, but for styling it is almost always more appropriate to use classes.

<div class="alert alert-warning">
	Inline styling is only ok if done through scripting or for quickly trying something out. Submitted code should not contain it.
</div>

### PHP

For PHP, whenever you are creating HTML templates, I suggest using the [alternative syntax](http://www.php.net/manual/en/control-structures.alternative-syntax.php) because it fits better visually with HTML's style. As well it reinforces the distinction between controllers and templates.

Everywhere else use the regular syntax.

### Web Server

For a web server on Windows I recommend using [Uniserver](http://www.uniformserver.com/). It looks sketchy, but it works well.

It also

- Can be run from a USB stick
- Uses a modern WAMP stack

It is preferred over other WAMP solutions primarily because of its portability.

### Templating style

For creating PHP pages, I've adopted for the students a simple templating style. You can see this style used in the [first lesson](php-review/).

It is not the ideal or most efficient method of templating, but after a lot of trial and error, I have determined it to be the one students understand the best.

<div class="alert alert-info">
Note that typically people call these templates `header.php` and `footer.php`, but I have chosen to call them `page-top.php` and `page-bottom.php`. This is to avoid confusion over the terms, "header" and "footer", which are visual components of a page inside the `&lt;body&gt;`.
</div>

### Text Editor

I Recommend using Sublime Text 2 (or 3 once out of beta). It hosts many great features

- Multi-edit
- div.class-name
- Widely used and documented
- Works on all platforms
- Autocomplete for PHP alternate syntax

<div class="alert alert-warning">
The lesson material will make reference to shortcuts and tips specific to Sublime, but it is not essential that you use it.
</div>


### OOP

OOP is a big topic and it simply can't fit within the scope of this course.

Students will be expected to work with OO libraries using `->` and `new`, but they will not be required to create their own PHP classes or understand things like inheritance or design patterns.

## Outline

The course is divided into three main sections: _PHP_, _SQL_, and then _PHP & SQL_. The first two can be taught in tandem while the third requires them as a prerequisite.

I recommend starting with the _PHP_ section and then interjecting components from the _SQL_ section to break things up a little. The _PHP_ section is much longer and more involved than the _SQL_ section.

### PHP

- [PHP Review](php-review/)
- [Associative Arrays](associative-arrays/)
- [Nested Arrays](nested-arrays/)
- [Working with Functions](working-with-functions/)
- [Form Basics](form-basics/)
- *Assignment:* [Loops and Functions](assignments/loops-and-functions/)
<!--
- [Form Widgets](form-widgets/)
-->
- [How the Web Works](how-the-web-works/)
- [Generating CSS Using PHP](generating-css-using-php/)
- [Cookies](cookies/)
- [Sessions](sessions/)
- [Form Validation](form-validation/)
- [Working with Files](working-with-files/)
- [Image Manipulation](image-manipulation/)

Handling paramaters with extract
Filtering a list

### SQL

- [Intro](sql-intro/)
- [Syntax](sql-syntax/)
- [JOINs](sql-joins/)
- [Normalization](sql-normalization/)
- [Database Modelling](sql-database-modelling/)
- [Subselects and VIEWs](sql-subselects-and-views/)
- [RDBMS Comparison](sql-rdbms-comparison/)

### PHP & SQL

- [Using a PHP-SQL Library](using-a-php-sql-library/)
- [Building a CRUD Application](building-a-crud-application/)
- [Creating a CMS](creating-a-cms/)

## If Extra Time

If the students have managed to work through all of the material, here are some extra topics you may wish to cover:

- Version Control using git or mercurial
- OOP in PHP
- SASS/SCSS
- Ruby on Rails
- Static Site Generators
	- Jekyll
	- http://phrozn.info/en/
	- https://sculpin.io/
	- http://pico.dev7studios.com/plugins.html

***************

Below are topics / notes / materials that have yet to be integrated into the above.

## Separation of Concerns

## function scope


## Serialization
### JSON?

## Normalization using ~3NF

## SQL Servers

### MySQL

### sqlite

# RedBean ORM

# Building CRUD Applications with PHP and SQL

# Basic Security

http://phpsecurity.readthedocs.org/en/latest/Input-Validation.html

https://www.owasp.org/index.php/PHP_Security_Cheat_Sheet

Always check values server-side! You can never rely on JS or HTML for doing validation because the user can easily modify them to whatever they want.

- SQL Injection
- Session HighJacking

htmlspecialchars

# Using Composer

# Testing

http://phpunit.de/

# Using Frameworks

http://www.phpandstuff.com/articles/top-10-reasons-why-you-should-use-a-php-framework

https://github.com/j4mie/idiorm/

# Image Manipulation

http://codegeekz.com/php-image-manipulation-libraries-for-developers/

# PDO

http://code.tutsplus.com/tutorials/why-you-should-be-using-phps-pdo-for-database-access--net-12059
http://code.tutsplus.com/tutorials/php-database-access-are-you-doing-it-correctly--net-25338





--------------
http://stackoverflow.com/questions/2119083/php-tutorial-that-is-security-accuracy-and-maintainability-conscious
	Everyone is saying there isn't anything out there that follows best practices.
	The material that is available appears to be very fragmented
Found a good intro to arrays
	http://phpro.org/tutorials/Introduction-To-Arrays.html
http://www.homeandlearn.co.uk/php/php.html
	- seems a little outdated
	- should review further later if I can't find anything else
http://www.geekscribes.net/blog/2009/08/14/php-lessons-loops/
	- Good intro to loops
	- Several other decent tutorials on this blog - worth reviewing later
		- see http://www.geekscribes.net/blog/tag/php/page/2/
http://net.tutsplus.com/tutorials/php/the-problem-with-phps-prepared-statements/
	- good mysqli tutorial
Diving Into PHP
	- seems like a nice slowly paced intro to PHP
	- http://blog.themeforest.net/screencasts/diving-into-php-day-2/

Store database

character drawer

X   X  XXXXX  X      X       XXX
X   X  X      X      X      X   X
XXXXX  XXXX   X      X      X   X
X   X  X      X      X      X   X
X   X  XXXXX  XXXXX  XXXXX   XXX

?Calendar

Loading data form google docs spreadsheet
	Insult Generator

File editor
File Manager

Styling a google calendar

wysiwig editors

todo list
	store in cookies
	store in session
	store in file

	make 3d text using text-shadow
	color calculations
		functions for lighter/darker
		hue/saturation?
	make our own grid system
		row
		col-x
		options would be
			column size
			gutter size
			how many columns

Survey - who would win in a fight

Gallery using image server library

function to read simple csv file using explode

<?php
function css($rules) {
	foreach ($rules as $selector => $properties) {
		echo $selector." {\r\n";
		foreach ($properties as $key => $value) {
			echo $key.': '.$value.';';
		}
		echo "}\r\n";
	}
}
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

Students will be expected to work with OO libraries using `->` and `new`, but they will not be required to create their own PHP classes or understand inheritance.

## Outline

The course is divided into three main sections: _PHP_, _SQL_, and then _PHP & SQL_. The first two can be taught in tandem while the third requires them as a prerequisite.

I recommend starting with the _PHP_ section and then interjecting components from the _SQL_ section to break things up a little. The _PHP_ section is much longer and more involved than the _SQL_ section.

### PHP

- [PHP Review](php-review/)
- [Associative Arrays](associative-arrays/)
- [Nested Arrays](nested-arrays/)
- [Form Basics](form-basics/)
- [Working with Functions](working-with-functions/)
- [How the Web Works](how-the-web-works/)
- [Cookies](cookies/)
- [Sessions](sessions/)
- [Form Validation](form-validation/)
- [Working with Files](working-with-files/)

Handling paramaters with extract
Filtering a list

### SQL

- [Syntax](sql-syntax/)


### PHP & SQL

- [Using a PHP-SQL Library](using-a-php-sql-library/)
- [Building a CRUD Application](building-a-crud-application/)
- [Creating a CMS](creating-a-cms/)

***************

Below are topics / notes / materials that have yet to be integrated into the above.

## Separation of Concerns

## How the Web Works

http://mkcohen.com/how-the-web-works-in-one-easy-lesson

Where does PHP fit into the picture?
	http://www.garshol.priv.no/download/text/http-tut.html
		See "What is it and why do it?"

## The Request-Response Loop

Handlers

You should always avoid having forms submit to themselves
	Should use PRG (Post Redirect Get)

## Form Basics Exercise

Create a single page application for browsing all of cetegories of images on LoremPixel

## Cookies
	http://www.garshol.priv.no/download/text/http-tut.html
		"Cookies"

## Sessions

http://www.sitepoint.com/php-sessions/

Sessions are a special use for cookies. PHPSESSID

Coat Check analogy

?Faking sessions using URL params?

Create functions
	session_get
	session_set

Shopping cart

## Form Validation

http://en.wikipedia.org/wiki/Post/Redirect/Get

http://www.sitepoint.com/form-validation-with-php/

# File Handling
## Reading / Writing / Appending
	
	Populating http://getbootstrap.com/examples/carousel/ by reading a directory

	Read a CSV file

## Serialization
### JSON?

# SQL

## Purpose

## Tools

### PHPMyAdmin
### Adminer

## Syntax - SELECT, INSERT, UPDATE, DELETE, etc

## JOINs

## Normalization using ~3NF

## Subselects

Should be avoided when possible. Use VIEWs instead.

## VIEWs

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

# If Extra Time

If the students have managed to work through all of the material, here are some extra topics you may wish to cover:

- SASS/SCSS
- Ruby on Rails
- OOP in PHP
- Static Site Generators
	- Jekyll
	- http://phrozn.info/en/
	- https://sculpin.io/
	- http://pico.dev7studios.com/plugins.html

# Image Manipulation

http://codegeekz.com/php-image-manipulation-libraries-for-developers/
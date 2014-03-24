---
title: Associative Arrays
layout: default
---

Work through [Advanced Arrays and Maps on Codecademy](http://www.codecademy.com/tracks/php)

## Exercises

#### Exercise 1

Create an associative array that describes yourself:

```php
$me = array(
	'First Name' => 'Andrew',
	'Last Name' => 'Walker',
	'Favourite Colour' => 'Orange'
);
```

Now create a `foreach` loop to output a `<dl>` that contains the information.

#### Exercise 2

Given:

```php
$navigation_links = array(
	'Home' => 'index.php',
	'Our Services' => 'services.php',
	'Contact Us' => 'contact.php'
);
```

Use a foreach loop to generate an unordered list of links as such:

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
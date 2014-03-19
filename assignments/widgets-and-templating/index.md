---
title: AWA Assignment - Widgets and Templating
layout: default
---

Create 

`$blog_posts`
`$pages`
`$gallery_images`

```php
<?php
$site = array(
	'name'=>'Mr. Sparkle\'s Emporium of Awesomeness',
	'pages'=>array(
		array(
			'name'=>'Home',
			'controller'=>'index.php',
			'body'=>''
		)
		'Home' => 'index.php',
		'Catalogue' => 'catalogue.php',
		'Contact' => 'contact.php'
	)
);
?>
```
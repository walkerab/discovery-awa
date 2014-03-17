---
title: Nested Arrays
layout: default
---

This section will introduce the concept of nested arrays.

Since data sets are a common thing to encounter it is important to know how to work with nested arrays.

The code in this lesson is of the sort we would use in page templates or widgets.

## Definition Lists of People

Navigate to [http://www.generatedata.com/](http://www.generatedata.com/). Fill in the forms as such:

![Example form data to generate the list with "First Name", "Last Name", and "Favourite Colour"](../images/example-form--first-name_last-name_fav-colour.png).

If the site is not working, you can find an example of the generated data [here](../sample-data/first-name_last-name_fav-colour.php.txt).

```php
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

<div class="alert alert-warning">
	Notice how there is no space between the first `<?php ... ?>` and `<!DOCTYPE html>`? This important to do for supporting older versions of IE. It prevents the browser from going into "quirks mode".
</div>

## Media Objects

For this portion we will be using [the Bootstrap media object](http://getbootstrap.com/components/#media) and [Lorem Pixel](http://lorempixel.com/).

We will begin be creating our own data to be used and then switch to using generated data.

Now generate another data set as such:

![Example form for media data](../images/example-form--media-data.png)

`media_category` and `media_number` correspond to parameters we will use on Lorem Pixel. The categories are:

	abstract|animals|business|cats|city|food|nightlife|fashion|people|nature|sports|technics|transport

If the site is not working you can find a copy of the data [here](../sample-data/media-data.php.txt).

```php
<?php
include 'media-data.php';
?><!DOCTYPE html>
<html>
<head>
	<title>Media Data</title>
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<?php foreach ($data as $media): ?>
					<div class="media">
						<a class="pull-left" href="#">
							<img
								class="media-object"
								src="http://lorempixel.com/64/64/<?php
									echo $media['media_category'];
									?>/<?php
									echo $media['media_number'];
									?>"
							>
						</a>
						<div class="media-body">
							<h2 class="media-heading">
								<?php echo $media['media_heading']; ?>
							</h2>
							<?php echo $media['media_body'] ?>
						</div>
					</div>
				<?php endforeach ?>
			</div>
		</div>
	</div>
</body>
</html>
```
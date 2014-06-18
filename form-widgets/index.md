---
title: Form Widgets
layout: default
---

```php
<?php
function html_select($name='', $options=[], $attributes=[], $value=null) {
?>
<select name="<?php echo $name ?>" <?php html_attributes($attributes); ?>>
	<?php html_options($options, $value); ?>
</select>
<?php
}
?>
```

```php
<?php
function html_radio_group($label, $name, $value, $options) {
?>
<fieldset>
	<legend>
		<?php echo $label; ?>
	</legend>
	<div class="radio-group">
		<?php foreach ($variable as $key => $value): ?>
			
		<?php endforeach ?>
	</div>
</fieldset>
<?php
}
?>
```

checkbox_group

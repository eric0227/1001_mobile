<?php
	header("Content-Type: text/javascript");
	$serverKey = $_REQUEST['serverKey'];

/*	['id', 'name', 'short_desc', 'desc', 'img', 'brand', 'price'] */
?>
<?=$serverKey?>({
	items: [
		{'id':'1', 'name':'prada', 'short_desc':'short_desc1', 'desc':'desc', 'img':['http://www.1001optical.com.au/img/p/94-219-home.jpg', 'http://www.1001optical.com.au/img/p/94-220-large.jpg'], 'brand':'brand', 'price':100},
		{'id':'2', 'name':'prada2', 'short_desc':'short_desc2', 'desc':'desc2', 'img':['http://www.1001optical.com.au/img/p/94-219-home.jpg', 'http://www.1001optical.com.au/img/p/94-220-large.jpg'], 'brand':'brand', 'price':200}
	]
});

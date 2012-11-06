<?php
	header("Content-Type: text/javascript");
	$serverKey = $_REQUEST['serverKey'];

/*	['id' ,'name', 'img', 'desc'] */
?>
<?=$serverKey?>({
	items: [
		{'id':'1', 'name':'', 'img':'http://www.1001optical.com.au/img/cms/1001web_piovino information.jpg', 'desc':'desc'}
	]
});

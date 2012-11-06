<?php
	header("Content-Type: text/javascript");
	$serverKey = $_REQUEST['serverKey'];

/*	['id' ,'name', 'logo', 'short_desc', 'desc'] */
?>
<?=$serverKey?>({
	items: [
		{'id':'1', 'name':'prada', 'logo':'http://14.200.134.156/1001/img/m/3-logo.jpg', 'short_desc':'short_desc', 'desc':'desc'},
		{'id':'2', 'name':'prada2', 'logo':'http://14.200.134.156/1001/img/m/3-logo.jpg', 'short_desc2':'short_desc2', 'desc':'desc2'}	
	]
});

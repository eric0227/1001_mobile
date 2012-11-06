<?php
	header("Content-Type: text/javascript");
	$serverKey = $_REQUEST['serverKey'];

/*	['id' ,'name', 'desc', 'img'] */
?>
<?=$serverKey?>({
	items: [
		{'id':'1', 'name':'New Prodect', 'desc':'desc1', 'img':'',
			items: {'id':'1-1', 'name':'New Prodect-1', 'desc':'desc1-1', 'img':'', 'leaf': true}},

		{'id':'2', 'name':'Glasses', 'desc':'desc2', 'img':'', 'leaf': true},
	]
});

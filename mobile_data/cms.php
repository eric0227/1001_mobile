<?php
	header("Content-Type: text/javascript");
	$serverKey = $_REQUEST['serverKey'];

/*	['id' ,'name', 'desc', 'title', 'content'] */
?>
<?=$serverKey?>({
	items: [
		{'id':'1', 'name':'CMS1', 'desc':'desc1', 'title':'title1', 'content':'content1'},
		{'id':'2', 'name':'CMS2', 'desc':'desc2', 'title':'title2', 'content':'content2'}
	]
});

<?php
	header("Content-Type: text/javascript");
	$serverKey = $_REQUEST['serverKey'];

/*	['id', 'name', 'address', 'address2', 'zip_code', 'city', 'country', 'state', 'lat', 'lon', 'phone', 'fax', 'email', 'img', 'hours'] */
?>
<?=$serverKey?>({
	items: [
		{'id':'1', 'name':'store1', 'address':'address1', 'address2':'address2', 'zip_code':'2072', 'city':'Sydney', 'country':'Australia', 'state':'61', 'lat':'', 'lon':'', 'phone':'(02)1231-1342', 'fax':'', 'email':'test@test.com.au', 'img':'', 'hours':{'mon':['9:00am', '9:30am', '10:00am'], 'tue':['9:00am', '9:30am', '10:00am']}},
		{'id':'2', 'name':'store2', 'address':'address1', 'address2':'address2', 'zip_code':'2072', 'city':'Sydney', 'country':'Australia', 'state':'61', 'lat':'', 'lon':'', 'phone':'(02)1231-1342', 'fax':'', 'email':'test@test.com.au', 'img':'', 'hours':{'mon':['9:00am', '9:30am', '10:00am'], 'tue':['9:00am', '9:30am', '10:00am']}}
	]
});

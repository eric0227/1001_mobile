Ext.define(Config.PKG+'.model.StoreModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: ['id_store','id_country', 'id_state','state_name', 'name', 'address1', 'address2', 'postcode', 'city', 'country', 'state', 'latitude', 'longitude', 'phone', 'fax', 'email', 'img', 'hours', 'image', 'distance', 'distance_str', 'times', 'eyetestable']
	}		
});

Ext.define(Config.PKG+'.model.BrandsModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: ['id' ,'name', 'logo', 'short_desc', 'desc', 'nb_products']
	}		
});
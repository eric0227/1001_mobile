Ext.define(Config.PKG+'.model.ProductModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: ['id', 'name', 'short_desc', 'desc', 'imageList', 'brand', 'price']
	}
});
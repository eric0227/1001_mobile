Ext.define(Config.PKG+'.store.ProductStore', {
	extend: 'Ext.data.Store',
	xtype: 'productstore',

	config: {
		model: Config.PKG+'.model.ProductModel',
		proxy: {
	        type: 'jsonp',
	        callbackKey:"serverKey",
	        reader: {
	            type: 'json'
	        }
	    },
		autoLoad: false,
		listeners: {
            load : function(store, records, successful, operation, eOpts) {
                console.log('ProductStore load..');
            }
		}
	}
});

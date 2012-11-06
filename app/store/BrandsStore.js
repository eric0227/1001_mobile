Ext.define(Config.PKG+'.store.BrandsStore', {
	extend: 'Ext.data.Store',
	xtype: 'brandsstore',

	config: {
		model: Config.PKG+'.model.BrandsModel',
		proxy: {
	        type: 'jsonp', 
	        url : Config.BRAND_URL,
	        callbackKey:"serverKey",
	        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
	    },
		autoLoad: true,
		listeners: {
    		load : function(store, records, successful, operation, eOpts) {
                console.log('BrandsStore load..');
                
                console.log(records);
            }
		}
	}
});
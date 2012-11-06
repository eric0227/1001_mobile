Ext.define(Config.PKG+'.store.StoreSearchStore', {
	extend: 'Ext.data.Store',
	xtype: 'storesearchstore',

	config: {		
		model: Config.PKG+'.model.StoreModel',
		proxy: {
	        type: 'jsonp', 
	        url : Config.STORE_URL,
	        callbackKey:"serverKey",
	        enablePagingParams: false,	        
	        extraParams : {
	        	mobile: 1
	        },
	        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
	    },
		autoLoad: false,
		listeners: {
    		load : function(store, records, successful, operation, eOpts) {
                console.log('StoreStore load..');
            }
		}
	}
});
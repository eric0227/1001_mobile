Ext.define(Config.PKG+'.store.StoreStore', {
	extend: 'Ext.data.Store',
	xtype: 'storestore',

	config: {
		groupDir: 'ASC',
		grouper: {
			sortProperty: 'state',
			groupFn: function(model) {
				return model.get('state_name');
			}
		},
		model: Config.PKG+'.model.StoreModel',
		proxy: {
	        type: 'jsonp', 
	        url : Config.STORE_URL,
	        callbackKey:"serverKey",
	        enablePagingParams: false,
	        groupParam: 'state_name',
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
Ext.define(Config.PKG+'.store.EyeTestStore', {
	extend: 'Ext.data.Store',
	xtype: 'eyeteststore',

	config: {		
		model: Config.PKG+'.model.StoreModel',
		proxy: {
	        type: 'jsonp', 
	        url : Config.STORE_URL,
	        callbackKey:"serverKey",
	        enablePagingParams: false,
	        filters: [
	           {
	               eyetestable : '1'
	           }
	        ],	
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
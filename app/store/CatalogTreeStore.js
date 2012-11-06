Ext.define(Config.PKG+'.store.CatalogTreeStore', {
	extend: 'Ext.data.TreeStore',
	xtype: 'catalogtreestore',

	config: {
		model: Config.PKG+'.model.CatalogModel',
		defaultRootProperty: 'items',
		proxy: {
	        type: 'jsonp', 
	        url : Config.CATALOG_URL,
	        callbackKey:"serverKey",
	        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
	    },
		autoLoad: false,
		listeners: {
    		load : function(store, records, successful, operation, eOpts) {
                console.log('CatalogTreeStore load..');
                console.log(records);
            }
		}
	}
});


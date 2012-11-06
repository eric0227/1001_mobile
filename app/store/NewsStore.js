Ext.define(Config.PKG+'.store.NewsStore', {
	extend: 'Ext.data.Store',
	xtype: 'newsstore',
	
	config: {
		model: Config.PKG+'.model.CmsModel',
		proxy: {
	        type: 'jsonp',
	        url : Config.NEWS_URL,
	        callbackKey:"serverKey",
	        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
	    },
		autoLoad: true,
		listeners: {
    		load : function(store, records, successful, operation, eOpts) {
                console.log('NewsStore load..');
            }
		}
	}
});
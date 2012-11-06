Ext.define(Config.PKG+'.store.CmsStore', {
	extend: 'Ext.data.Store',
	xtype: 'cmsstore',

	config: {
		model: Config.PKG+'.model.CmsModel',
		proxy: {
	        type: 'jsonp',
	        url : Config.CMS_URL,
	        callbackKey:"serverKey",
	        reader: {
	            type: 'json',
	            rootProperty: 'items'
	        }
	    },
		autoLoad: true,
		listeners: {
    		load : function(store, records, successful, operation, eOpts) {
                console.log('CmsStore load..');
            }
		}
	}
});
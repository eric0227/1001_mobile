Ext.define(Config.PKG+'.store.StoreGroupStore', {
	extend: 'Ext.data.Store',
	xtype: 'storegrouptore',

	config: {
		model: Config.PKG+'.model.StoreGroupModel',
		sorters: 'state_name',
		proxy: {
			type: 'jsonp',
			url: Config.STORE_URL,
			callbackKey:"serverKey",
			extraParams : {
                mobile: 1,
                group: 1
            },
			reader: {
				type: 'json',
				rootProperty: 'items'
			}
		},
		autoLoad: true,
		listeners: {
            load : function(store, records, successful, operation, eOpts) {
                console.log('StoreGroupStore load..');
            }
        }
	}	
});


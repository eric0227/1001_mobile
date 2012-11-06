Ext.define(Config.PKG+'.store.CatalogStore', {
    extend: 'Ext.data.Store',
    xtype: 'catalogstore',

    config: {
        model: Config.PKG+'.model.CatalogModel',
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
                console.log('CatalogStore load..');
                console.log(records);
            }
        }
    }
});
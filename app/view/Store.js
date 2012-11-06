Ext.define(Config.PKG+'.view.Store', {
    extend: 'Ext.Panel',
    xtype: 'storeview',
    id: 'storeview',
    
    config: {
        title: 'Store',
        iconCls: 'star',
        cls:'store',
        index: 2,
        scrollable: false,
        layout: {type: 'card', animation: {type: 'slide', direction: 'left'} },
        items: [                
            {
                xtype: 'storelistview'
            }
        ]  
    }
});

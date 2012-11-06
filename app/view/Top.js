Ext.define(Config.PKG+'.view.Top', {
    extend: 'Ext.Panel',
    xtype: 'topview',
    id: 'topview',
    
    config: {
        layout: 'card',
        items: [
            {
                xtype: 'homeview'
            },{
                xtype: 'mainview'
            }
        ]
    }
});


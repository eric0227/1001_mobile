Ext.define(Config.PKG+'.view.Locator', {
    extend: 'Ext.Panel',
    xtype: 'locatorview',
    id: 'locatorview',
    
    config: {
        title: 'Locator',
        iconCls: 'star',
        cls:'locator',
        scrollable: true,
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
                html: 'Locator'
            }
        ]
    }
});


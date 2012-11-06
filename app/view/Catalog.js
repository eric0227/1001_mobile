Ext.define(Config.PKG+'.view.Catalog', {
    extend: 'Ext.Panel',
    xtype: 'catalogview',
    
    requires: ['Ext.dataview.NestedList'],
    
    config: {
        title: 'Catalog',
        iconCls: 'star',
        cls:'catalog',
        scrollable: true,
        layout: 'fit',
        items: [
            {
                xtype: 'nestedlist',
                title: 'Catalog',
                displayField: 'name',
                store: {
                    xtype: 'catalogtreestore'
                }
            }
        ]
    }
});

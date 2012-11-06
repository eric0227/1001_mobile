Ext.define(Config.PKG+".view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
    id: 'mainview',
    
    
    config: {
    	tabBarPosition: 'bottom',
    	 
        items: [
            {
                xtype: 'panel',
                title: 'Home',
                iconCls: 'home',
                cls:'home',
                scrollable: true
            },
            {
                xtype: 'eyetestview'
            },           
            {
                xtype: 'locatorview'
            },
            {
                xtype: 'promotionwinview'
            },
            {
                xtype: 'contactusview'
            }
        ]
    }
});

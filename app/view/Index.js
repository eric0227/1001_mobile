Ext.define(Config.PKG+".view.Index", {
    extend: 'Ext.Panel',
    xtype: 'indexview',
    id: 'indexview',
    
    config: {    	
    	layout: {type: 'card', animation: {type: 'slide', direction: 'left'} },
        items: [
            {
                xtype: 'homeview'
            },
            {
                xtype: 'aboutusview'
            },
            {
                xtype: 'tabbar',
                id: 'indextoolbar',
                docked: 'bottom',
                hidden: true,
                defaults: {
                	xtype: 'tab',
                	iconMask: true,
                	iconAlign: 'top'
                },
                items :[
                    {
                    	text: 'Home',
                    	title: 'Home',
                    	iconCls: 'home',
                    	action: 'home'
                    },
                    {
                        text: 'Eyetest',
                        title: 'Eye-Test',
                        iconCls: 'eyetest',
                        action: 'eyetest'
                    },
                    {
                        text: 'Locatior',
                        title: 'Stores',
                        iconCls: 'locate4',
                        action: 'store'
                    },
                    {
                        text: 'Promotion',
                        title: 'Promotion',
                        iconCls: 'promotion',
                        action: 'promotionarmani'
                    },
                    {
                        text: 'News',
                        title: 'News',
                        iconCls: 'doc_list',
                        action: 'news'
                    },
                    {
                        text: 'Hidden',
                        title: 'hidden',
                        iconCls: 'star',
                        hidden: true,
                        action: 'hidden'
                    }
                ]                
            }
        ]
    }
});
                  
                   
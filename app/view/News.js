Ext.define(Config.PKG+'.view.News', {
    extend: 'Ext.Panel',
    xtype: 'newsview',
    id: 'newsview',
    
    requires: ['Ext.dataview.List'],
    
    config: {
        title: 'News',
        iconCls: 'star',
        cls:'news',
        scrollable: false,
        layout: {
        	type: 'card',
        	animation: {type: 'slide', direction: 'left'}
        },
        index: 4,
        items: [
            {
                xtype: 'toolbar',
                title: 'News',
                docked: 'top',
                ui:'black',
                items: [
                    {
                    	text: 'Back',
                    	ui: 'back',
                    	action: 'back',
                    	hidden: true
                    }
                ]
            },
            {
                xtype: 'list',
                id   : 'newslist',
                store: {
                	xtype: 'newsstore'
                },
                itemTpl: '<div class="news_title">{meta_title}</div>'
            },
            {
            	xtype: 'panel',
            	id   : 'newsdetail',
            	scrollable: true,
            	width: '100%',
            	cls: 'newsdetail',
            	html : '..'
            }
        ]
    }
});

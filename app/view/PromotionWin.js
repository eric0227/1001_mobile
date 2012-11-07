Ext.define(Config.PKG+'.view.PromotionWin', {
    extend: 'Ext.Panel',
    xtype: 'promotionwinview',
    id: 'promotionwinview',
    
    config: {
        title: 'Click To Win',
        iconCls: 'star',
        cls:'promotion',
        scrollable: false,
        layout: {type: 'card', animation: 'fade'},
        index: 4,
        items: [
			{
				xtype: 'toolbar',
				title: 'Click To Win',
				docked: 'top',
				ui: 'black',
				items: [					
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
						id: 'promotionwin_btn1',
						iconCls: 'expand',
					    iconMask: true,
					    handler: function() {			    	
					    	var promotion_zoom = Ext.getCmp('promotionwin').element.down('.promotion_zoom');
					    	promotion_zoom.setStyle('width', '600px');					   
					    	this.setHidden(true);
					    	Ext.getCmp('promotionwin_btn2').show();
					    }
					},
					{
						xtype: 'button',
						id: 'promotionwin_btn2',
						iconCls: 'delete',
					    iconMask: true,
					    hidden: true,
					    handler: function() {					    	
					    	var promotion_zoom = Ext.getCmp('promotionwin').element.down('.promotion_zoom');
					    	promotion_zoom.setStyle('width', '100%');
					    	this.setHidden(true);
					    	Ext.getCmp('promotionwin_btn1').show();
					    },
					    listeners: {
					    	initialize: function() {
					    		this.setHidden(true);
					    	}
					    }
					}
				]
			},
            {
                xtype: 'panel',
                id: 'promotionwin',
                scrollable: true,               
                contentEl: 'promotion_win'
            }
        ]
    }
});


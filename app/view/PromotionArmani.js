Ext.define(Config.PKG+'.view.PromotionArmani', {
    extend: 'Ext.Panel',
    xtype: 'promotionarmaniview',
    id: 'promotionarmaniview',
        
    config: {
        title: 'Promotion',
        iconCls: 'star',
        cls:'promotion',
        scrollable: false,
        layout: {type: 'card', animation: 'fade'},
        index: 0,
        items: [
			{
				xtype: 'toolbar',
				title: 'Promotion',
				docked: 'top',
				ui: 'black',
				items: [					
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
						id: 'promotion_btn1',
						iconCls: 'expand',
					    iconMask: true,
					    handler: function() {				    	
					    	var promotion_zoom = Ext.getCmp('promotionarmani').element.down('.promotion_zoom');
					    	promotion_zoom.setStyle('width', '600px');
					    	this.setHidden(true);
					    	Ext.getCmp('promotion_btn2').show();
					    }
					},
					{
						xtype: 'button',
						id: 'promotion_btn2',
						iconCls: 'delete',
					    iconMask: true,
					    hidden: true,
					    handler: function() {
					    	var promotion_zoom = Ext.getCmp('promotionarmani').element.down('.promotion_zoom');
					    	promotion_zoom.setStyle('width', '100%');                            
					    	this.setHidden(true);
					    	Ext.getCmp('promotion_btn1').show();
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
                id: 'promotionarmani',
                scrollable: true,               
                contentEl: 'promotion_armani' 
            }
        ]
    }
});


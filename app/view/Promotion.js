Ext.define(Config.PKG+'.view.Promotion', {
    extend: 'Ext.Panel',
    xtype: 'promotionview',
    id: 'promotionview',
    
    requires: ['Ext.carousel.Carousel'],
    
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
					    	//Ext.getCmp('promotionview').setActiveItem(1);					    	
					    	var promotion_zoom = Ext.getCmp('promotion').element.down('.promotion_zoom');
					    	promotion_zoom.setStyle('width', '600px');
					    	
					    /*	
					    	var youtube = Ext.getCmp('promotion').element.down('.youtube-player');
					    	if(youtube) {
                                youtube.setStyle('height', '250px');
					    	}
					    */	

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
					    	//Ext.getCmp('promotionview').setActiveItem(0);
					    	
					    	var promotion_zoom = Ext.getCmp('promotion').element.down('.promotion_zoom');
					    	promotion_zoom.setStyle('width', '100%');
					    	
					    /*	
    					    var youtube = Ext.getCmp('promotion').element.down('.youtube-player');
    					    if(youtube) {
                                youtube.setStyle('height', '');
    					    }
    				    */                            
                            
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
                id: 'promotion',
                scrollable: true,               
                contentEl: 'promotion_fit' 
            }
        ]
    }
});


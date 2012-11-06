Ext.define(Config.PKG+'.view.StoreSelectPop', {
    extend: 'Ext.Panel',
    xtype: 'storeselectpop',
    id: 'storeselectpop',
    
    config: {
        //floating: true,
        hideOnMaskTap: true,
        modal: true,
        hidden: true,
        centered: true,
        width: 250,
        height: 220,
        layout: 'fit',
        zIndex: 1000,
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Store Name',
                hidden: false,
                items: [                    
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'X',
                        ui: 'decline',
                        handler: function(btn, event) {
                            Ext.getCmp('storeselectpop').hide();
                        }
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: {type:'vbox', align: 'middle', pack: 'center'},  
                style: 'background:#EEEEEE;',
                defaults: {                                        
                    style: 'margin-bottom:10px;'
                    
                    //iconMask: true,
                    //iconCls: 'star',
                    //iconAlign: 'right'
                },
                items: [                    
                    {
                    	xtype: 'panel',
                    	id: 'storename_label',
                    	width: 200,
                    	style: 'background:#EEEEEE; text-align:center; margin: 10px; padding: 10px; color:#000000; font-size: 20px; font-weight: bold;',                    	
                        html: ''
                    },
                    {
                    	xtype: 'button',
                    	width: 100,
                    	ui: 'normal',
                        text: 'NEXT',
                        action: 'storeselect'
                    }
                ]
            }       
        ]
    }
});

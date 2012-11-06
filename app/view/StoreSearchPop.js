Ext.define(Config.PKG+'.view.StoreSearchPop', {
    extend: 'Ext.Panel',
    xtype: 'storesearchpop',
    id: 'storesearchpop',
    
    config: {
        //floating: true,
        hideOnMaskTap: true,
        modal: true,
        hidden: true,
        centered: true,
        width: 250,
        height: 300,
        layout: 'fit',
        zIndex: 1000,
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Search',
                hidden: false,
                items: [                    
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'X',
                        ui: 'decline',
                        handler: function(btn, event) {
                            Ext.getCmp('storesearchpop').hide();
                        }
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: 'fit',
                items: [
                    {
                        xtype: 'formpanel',
                        id: 'bookingformpanel',
                        layout: 'vbox',
                        items : [                       
                            {
                                xtype: 'fieldset',
                                title: 'Search Store',                                
                                instructions: '(Your suburb or postcode)',
                                defaults: {
                                    labelWidth: '0px',
                                    requiredCls: ''                             
                                },                                
                                items: [                                  
                                    {
                                        xtype: 'textfield',
                                        placeHolder: 'Surburb / Postcode',
                                        name: 'keyword'
                                    }
                                ]
                            },                                   
                            {
                                xtype: 'button',
                                text: 'Search',
                                action: 'search',
                                ui: 'action'               
                            }
                        ]       
                    }
                ]
            }       
        ]
    }
});

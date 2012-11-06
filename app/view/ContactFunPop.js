Ext.define(Config.PKG+'.view.ContactFunPop', {
    extend: 'Ext.Panel',
    xtype: 'contactfunpop',
    id: 'contactfunpop',
    
    config: {
        hideOnMaskTap: true,
        modal: true,
        hidden: true,
        centered: true,
        width: 250,
        height: 200,
        layout: 'fit',
        zIndex: 1000,
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'List',
                hidden: true,
                items: [                    
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'X',
                        ui: 'decline',
                        handler: function(btn, event) {
                            Ext.getCmp('storefunpop').hide();
                        }
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: {type:'vbox', align: 'middle', pack: 'center'},                
                defaults: {
                    width: 200,
                    xtype: 'button',
                    style: 'margin-bottom:10px;'
                    
                    //iconMask: true,
                    //iconCls: 'star',
                    //iconAlign: 'right'
                },
                items: [                    
                    {
                        text: 'Google Map',
                        action: 'storemap'
                    },
                    {
                        text: 'Call Phone',
                        action: 'callstore'
                    },
                    {
                        text: 'Send Email',
                        action: 'email'
                    }
/*                    ,
                    {
                        text: 'Send Email',
                        action: 'emailstore'
                    }
*/                    
                ]
            }       
        ]
    }
});

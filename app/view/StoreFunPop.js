Ext.define(Config.PKG+'.view.StoreFunPop', {
    extend: 'Ext.Panel',
    xtype: 'storefunpop',
    id: 'storefunpop',
    
    config: {
        //floating: true,
        hideOnMaskTap: true,
        modal: true,
        hidden: true,
        centered: true,
        width: 250,
        height: 230,
        layout: 'fit',
        zIndex: 1000,
        
        items: [
            {
                xtype: 'titlebar',
                id: 'storefunpop_titlebar',
                docked: 'top',
                title: '',
                hidden: false,
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
                style: 'background:#EEEEEE;',
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
                        text: 'Book an Eye Test',
                        id: 'eyetest_btn',
                        action: 'eyetest'
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

Ext.define(Config.PKG+'.view.StoreGroupPop', {
    extend: 'Ext.Panel',
    xtype: 'storegrouppop',
    id: 'storegrouppop',
    
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
                title: 'State Name',
                items: [                    
                    {
                        xtype: 'button',
                        align: 'right',
                        text: 'X',
                        ui: 'decline',
                        handler: function(btn, event) {
                            Ext.getCmp('storegrouppop').hide();
                        }
                    }
                ]
            }, 
            {
                xtype: 'panel',
                layout: 'fit',
                items: [
                    {
                        xtype: 'list',
                        id: 'storegrouppoplist',
                        store: {
                            xtype: 'storegrouptore'
                        },
                        itemTpl: '<div class="storegroup_list"><div class="title"> {state_name} </div> </div>'
                    }
                ]
            }       
        ]
    }
});

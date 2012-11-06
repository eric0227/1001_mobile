Ext.define(Config.PKG+'.view.ContactUs', {
    extend: 'Ext.Panel',
    xtype: 'contactusview',
    id: 'contactusview',
        
    config: {
        title: 'ContactUs',
        iconCls: 'user',
        cls:'contactus',
        scrollable: false,
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
        ]
    }
});

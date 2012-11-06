Ext.define(Config.PKG+'.view.Booking', {
    extend: 'Ext.Panel',
    xtype: 'bookingview',
    id: 'bookingview',
    
    config: {
        title: 'Booking',
        iconCls: 'star',
        cls:'booking',
        scrollable: true,
        layout: 'fit',
        items: [
            {
            	xtype: 'panel',
            	html: 'Booking'
            }
        ]
    }
});

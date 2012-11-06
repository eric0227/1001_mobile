Ext.define(Config.PKG+'.view.AboutUs', {
    extend: 'Ext.Panel',
    xtype: 'aboutusview',
    id: 'aboutusview',
    
    config: {
        title: 'About Us',
        iconCls: 'star',
        cls:'aboutas',
        scrollable: false,
        layout: 'fit',
        index: 0,
        items: [
            {
            	xtype: 'toolbar',
            	title: 'About Us',
            	docked: 'top',
            	ui: 'black'
            },
            {
                xtype: 'panel',
                stylehtmlContent: true,
                scrollable: true,
                contentEl: 'aboutus' 
            }
        ], 
        listeners: {
    		initialize : function() {
				var aboutlogo = this.element.down("#aboutus .logo");		
				aboutlogo.addListener("tap", function(event) {
					this.fireEvent('logoTap', this);
				}, this);
			}
        }
    }
});

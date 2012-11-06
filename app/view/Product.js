Ext.define(Config.PKG+'.view.Product', {
    extend: 'Ext.Panel',
    xtype: 'productview',
    id: 'productview',
    
    requires: ['Ext.carousel.Carousel', 'Ext.Img'],
    
    config: {
        title: 'Product',
        cls:'product',
        scrollable: true,
        layout: 'vbox',
        style: 'margin: 0px',
        items: [
			{
				xtype: 'panel',
				id: 'productview_title',
				cls: 'short_title',
				style: 'margin: 10px; padding: 10px; text-align:center; color: #c20202; font-size: 18px; '
			},    
            {
                xtype: 'carousel',
                id: 'productview_carousel',
                height: 200,
                style: 'margin: 0 10px'
            },
            {
            	xtype: 'panel',
            	id: 'productview_short',
            	cls: 'short_desc',
            	style: 'margin: 10px; padding: 10px; background:#DDDDDF; color:#595658;'
            },
            {
                xtype: 'panel',
                id: 'productview_desc',
                cls: 'desc',
                style: 'margin: 0 10px 10px 10px; padding: 10px; background:#DDDDDF; color:#595658;'
            }
        ]
    },
    setData: function(data) {    	
    	var carousel = Ext.getCmp('productview_carousel');
    	carousel.removeAll();
    	var imgList = [];
    	
    	for(var i = 0; i < data.imageList.length; i++) {
  /*  		
    		var img = Ext.create('Ext.Img', {
                src: data.imageList[i],
                width: 288
            });
 */
    		var img = {
    			xtype : 'panel',
    			width: '100%',
    			html: '<img src="'+data.imageList[i]+'" width="100%" />'
    		};    		
            imgList.push(img);           
    	}
    	carousel.setItems(imgList);
    	carousel.setActiveItem(0);
    	Ext.getCmp('productview_title').setHtml(data.name);
    	Ext.getCmp('productview_short').setHtml(data.short_desc);
    	Ext.getCmp('productview_desc').setHtml(data.desc);
    	
    }
});

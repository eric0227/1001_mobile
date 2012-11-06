Ext.define(Config.PKG+'.view.Brands', {
    extend: 'Ext.Panel',
    xtype: 'brandsview',
    id: 'brandsview',
    
    requires: ['Ext.navigation.View'],
    
    config: {
        title: 'Brands',
        iconCls: 'star',
        cls:'brands',
        scrollable: false,
        layout: 'card',
        index: 0,
        items: [
            {
            	id: 'brandstitlebar',
            	xtype: 'toolbar',
            	title: 'Brands',
            	docked: 'top',
            	ui: 'black',
            	items: [
            	   {
            	   	   xtype: 'button',
            	   	   id: 'brandsbackbtn',
            	       text: 'Back',
            	       ui: 'back',
            	       hidden: true,
            	       handler: function() {
            	           console.log('back');
            	           this.setHidden(true);
            	       }
            	   }
            	]            	
            },
            {
                xtype: 'list',
                id: 'brandslist',
                store: {
                    xtype: 'brandsstore'
                },
                //itemTpl: '<div class="brands_list"><img src="{logo}" /><span class="title"> {name}  </span> <br> <span>{nb_products} products</span> </div>'
                itemTpl: '<div class="brands_list"><img src="{logo}" /><span class="title"> {name}  </span> </div>'
            },
            {
                xtype: 'list',
                id: 'brandsproductlist',
                store: {
                    xtype: 'catalogstore'
                },
                itemTpl: '<div class="product_list"><img src="{img}" /><span class="title"> {name}</span> </div>'
            }
        ]
    }
});


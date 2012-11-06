Ext.define(Config.PKG+'.view.StoreList', {
	extend: 'Ext.Panel',
	xtype: 'storelistview',
	
	config: {
		title: 'Store List',
		iconCls: 'star',
		cls:'storelist',
		scrollable: false,
		layout: {type: 'card', animation: {type: 'slide', direction: 'left'} },
		
		items: [
		    {
		    	xtype: 'toolbar',
		    	title: '1001 Optical Store',
		    	ui: 'black',
		    	docked: 'top',
		    	
		    	items: [
		    	    {
		    	    	xtype: 'button',
		    	    	iconCls: 'list',
		    	    	iconMask: true,
		    	    	//ui: 'action',		    	    	
		    	    	action: 'storegroupaction'
		    	    },
		    	    {
		    	    	xtype: 'spacer'
		    	    },		    	  
		    	    {
                        xtype: 'button',
                        iconCls: 'search',
                        iconMask: true,
                        align: 'right',
                        //ui: 'action',                     
                        action: 'storesearchaction'
                    }		    	    
		    	]
		    },
		    {
		    	xtype: 'list',
		    	title: '',
		    	store: {
		    		xtype: 'storestore'
		    	},
		    	grouped: true,
		    	//indexBar: true,
		    	itemTpl: [
	    	     '<div class="store_list">',
	    	     '   <div class="store_name">{name}</div> <span class="store_distance"> {distance_str} <span>',
	    	     '   <img class="store_img" src="{image}"/>',
	    	     '   <div class="store_detail">',
	    	     '        <div class="address">{address1} {address2} {city} {state} {postcode}</div>',
	    	     '        <div class="tel">{phone}</div>',
	    	     '   </div>',
	    	     '   <div style="clear:both;"></div>',
	    	     '</div>'		    	     
		    	].join(' ')	    	
		    }
		]
	}
});

Ext.define(Config.PKG+'.view.MapView', {
	extend: 'Ext.Panel',
	xtype: 'mapview',
	id: 'mapview',
	requires: [
        'Ext.Map'	           
    ],
	
	config: {
		title: 'Map',
		iconCls: 'locate',		
		cls:'mapview',
		scrollable: false,
		layout: {
			type: 'card',
			animation: 'flip'
		},
		phoneNumber: null,	
		
		items: [
		  {
                xtype: 'toolbar',
                id: 'mapview_titlebar',
                title: 'Map',
                docked  : 'top',
                ui: 'black',
                items: [
                    {
                        xtype   : 'button',
                        text    : 'Back',
                        align   : 'left',
                        id      : 'mapBackBtn',
                        ui      : 'back',
                        handler: function() {
                        	Ext.getCmp('mapinfobtn').setHidden(true);
                        	Ext.getCmp('storeinfobtn').setHidden(false);
                    		Ext.getCmp('mapview').setActiveItem(0);
                        }
                    },
                    {
                    	xtype: 'spacer',
                    },
                    {
                    	xtype   : 'button',
                    	id		: 'mapinfobtn',
                        align   : 'right', 
                        iconMask: true,
                    	iconCls: 'locate',
                    	hidden: true,
                    	handler: function() {
                        	this.setHidden(true);
                        	Ext.getCmp('storeinfobtn').setHidden(false);
                        	Ext.getCmp('mapview').setActiveItem(0);
                        }
                    },
                    {
                    	xtype   : 'button',
                    	id		: 'storeinfobtn',
                        align   : 'right', 
                        iconMask: true,
                    	iconCls: 'info_plain',
                    	handler: function() {
                    		this.setHidden(true);
                    		Ext.getCmp('mapinfobtn').setHidden(false);
                    		Ext.getCmp('mapview').setActiveItem(1);
                        }
                    },
                    {
                        xtype   : 'button',
                        align   : 'right',                        
                        iconMask: true,                        
                        iconCls: 'phone_ring1',
                        handler: function() {
                        	var phone = Ext.getCmp('mapview').getPhoneNumber();
                        	if(phone != null) {
                        		console.log('phone:' + phone);
                                window.location = 'tel:' + phone;
                        	}
                        }
                    }
                ]
            },
		    {		    	
		    	xtype: 'map',
		    	id: 'map',
		    	title: 'Map'
		    },
		    {
		    	xtype: 'panel',
		    	scrollable: {
		    		direction: 'vertical'
		    	},
		    	items: [{
		    		xtype: 'panel',
			    	id: 'storeinfo'
		    	}]
		    }
	    ]
	},
	
	setMap: function(let, lng) {
		console.log('let:'+let +',lng:'+ lng);
		
        var pos = new google.maps.LatLng(let, lng);        
        var map = Ext.getCmp('map').getMap();        
        map.setZoom(16);
        var marker = new google.maps.Marker({
            position: pos,
            map: map
        });
        map.setCenter(pos);
	}	
});

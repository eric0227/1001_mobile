Ext.define(Config.PKG+'.controller.HomeController', {
	extend: 'Ext.app.Controller',
	
	requires: ['Ext.data.JsonP'],
	
/*	
   {text: 'ABOUT US', action: 'aboutus'},                   
   {text: 'BRANDS', action: 'brands'},
   {text: 'EYE-TEST', action: 'eyetest'},
   {text: 'PROMOTION', action: 'promotion'},
   {text: 'STORES', action: 'stores'},                 
   {text: 'CONTACTS', action: 'contacts'}
*/   	
	config: {
		refs:{
			topView: {
                selector: '#topview'
            },
			mainView: {
                selector: '#mainview'
            },
			homeView: {
				selector: '#homeview'
			},
			homeButton: {
				selector: '#homeview button'
			},
			aboutusView: {
                selector: '#aboutusview'
            },
            eyeTestView: {
                selector: '#eyetestview',
                xtype:'eyetestview',
                autoCreate: true
            },
            brandsView: {
                selector: '#brandsview'
            },
            promotionView: {
                selector: '#promotionview'
            },
            promotionwinView: {
                selector: '#promotionwinview'
            },
            promotionarmaniView: {
                selector: '#promotionarmaniview'
            },
            storesView: {
                selector: '#storesview'
            },
            contactusView: {
                selector: '#contactusview'
            }
		},
		control: {
			homeView: {
				initialize : function() {
					console.log('homeView initialize..');
					
				}
			},
			homeButton: {
				touchstart : {
	        		fn: function(e, element) {
	        			console.log('touchstart');
	        			if(this.icon_on) {
	        				this.setIcon(this.icon_on);
	        			}
	        		},
	        		element: 'element'
	        	},
	        	touchend : {
	        		fn: function(e, element) {
	        			console.log('touchsend');
	        			if(this.icon_off) {
	        				this.setIcon(this.icon_off);
	        			}
	        		},
	        		element: 'element'
	        	}
			},
			'homeview button[action=aboutus]': {tap: 'onAboutUsTap'},
			'homeview button[action=brands]': {tap: 'onBrandsTap'},
			'homeview button[action=eyetest]': {tap: 'onEyeTestTap'},
			'homeview button[action=promotion]': {tap: 'onPromotionTap'},
			'homeview button[action=promotionwin]': {tap: 'onPromotionWinTap'},
			'homeview button[action=promotionarmani]': {tap: 'onPromotionArmaniTap'},
			'homeview button[action=stores]': {tap: 'onStoresTap'},
			'homeview button[action=contactus]': {tap: 'onContactUsTap'}
		}		
	},
	
	init: function() {
		console.log('HomeController init..');
	},
	
	showHome: function() {
		this.getHomeView().setHidden(false);
		this.getMainView().setHidden(true);
	},
	showMain: function() {
		this.getTopView().setActiveItem(1);		
	},
	
	onAboutUsTap: function() {
		console.log('onAboutUsTap..');
		Ext.Viewport.setAutoMaximize(true);
		this.showMain();
		
		//this.getMainView().setActiveItem(this.getAboutUsView());
	},
	onNewsTap: function() {
        console.log('onNewsTap..');
        Ext.Viewport.setAutoMaximize(true);
        this.getMainView().setActiveItem(this.getNewsView());
    },
    onBrandsTap: function() {
        console.log('onBrandsTap..');
        Ext.Viewport.setAutoMaximize(true);
        this.getMainView().setActiveItem(this.getBrandsView());
    },
    onCatalogTap: function() {
        console.log('onCatalogTap..');
        Ext.Viewport.setAutoMaximize(true);
        this.getMainView().setActiveItem(this.getCatalogView());
    },
    onProductTap: function() {
        console.log('onProductTap..');
        Ext.Viewport.setAutoMaximize(true);
        this.getMainView().setActiveItem(this.getProductView());
    },
    onStoreTap: function() {
        console.log('onStoreTap..');
        Ext.Viewport.setAutoMaximize(true);
        this.getMainView().setActiveItem(this.getStoreView());
    },
    onBookingTap: function() {
        console.log('onBookingTap..');
        Ext.Viewport.setAutoMaximize(true);
        this.getMainView().setActiveItem(this.getBookingView());
    }, 
    onEyeTestTap: function() {
    	console.log('onEyeTestTap..');
    	Ext.Viewport.setAutoMaximize(true);
        this.getMainView().setActiveItem(this.getEyeTestView());
    }
});

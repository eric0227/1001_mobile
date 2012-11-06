Ext.define(Config.PKG+'.controller.IndexController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs:{
            indexView: {
                selector: '#indexview'
            },
            indexToolbar: {
            	selector: '#indextoolbar'
            },
            homeView: {
                selector: '#homeview'
            },
            aboutUsView: {
                selector: '#aboutusview'
            },
            eyeTestView: {
                selector: '#eyetestview',
                xtype:'eyetestview',
                autoCreate: true
            },
            brandsView: {
                selector: '#brandsview',
                xtype:'brandsview',
                autoCreate: true
            },
            promotionView: {
                selector: '#promotionview',
                xtype: 'promotionview',
                autoCreate: true
            },
            promotionWinView: {
                selector: '#promotionwinview',
                xtype: 'promotionwinview',
                autoCreate: true
            },
            promotionArmaniView: {
                selector: '#promotionarmaniview',
                xtype: 'promotionarmaniview',
                autoCreate: true
            },
            storeView: {
                selector: '#storeview',
                xtype: 'storeview',
                autoCreate: true
            },
            newsView: {
                selector: '#newsview',
                xtype: 'newsview',
                autoCreate: true
            },
            indexToobar: {
            	selector: '#indextoolbar'
            }
            
        },
        routes: {
        	'home'			: 'routeHome',
        	'page/:type'	: 'routePage',
        	'popup/:type'	: 'routePopup'
        },
        control: {
            homeView: {
                initialize : function() {
                    
                }
                
            },
            indexView : {
            	activeitemchange : function( tapPanel, value, oldValue, eOpts) {
					console.log('ActiveItem : ' , value.getId());					
					if(value.getId() == 'homeview') {
						this.redirectTo('home');
					} else {
						if(value.getId() == 'promotionview' && this.getLang() == 'ch') {
							this.redirectTo('page/promotionchview');
						} else if(value.getId() == 'promotionarmaniview' && this.getLang() == 'ch') {
                            this.redirectTo('page/promotionarmanichview');
                        } else {
                            this.redirectTo('page/'+value.getId());
                        }
					}					
				}
            },
            'homeview button[action=aboutus]': {tap: 'onAboutUsTap'},
            'homeview button[action=brands]': {tap: 'onBrandsTap'},
            'homeview button[action=eyetest]': {tap: 'onEyeTestTap'},
            'homeview button[action=promotion]': {tap: 'onPromotionTap'},
            'homeview button[action=promotionwin]': {tap: 'onPromotionWinTap'}, 
            'homeview button[action=promotionarmani]': {tap: 'onPromotionArmaniTap'}, 
            'homeview button[action=store]': {tap: 'onStoreTap'},
            'homeview button[action=news]': {tap: 'onNewsTap'},
            
            'indexview button[action=home]' : {tap: 'onHomeTap'},
            'indexview button[action=eyetest]' : {tap: 'onEyeTestTap'},
            'indexview button[action=store]' : {tap: 'onStoreTap'},
            'indexview button[action=promotion]' : {tap: 'onPromotionTap'},
            'indexview button[action=promotionwin]' : {tap: 'onPromotionWinTap'},
            'indexview button[action=promotionarmani]': {tap: 'onPromotionArmaniTap'}, 
            'indexview button[action=news]' : {tap: 'onNewsTap'}
        },
        
        lang: 'en'        
    },
    
    init: function() {
        console.log('IndexController init..');
    },
    
    launch: function() {
		console.log('launch..');
		var _this = this;
		setTimeout(function() {
			//_this.redirectTo('home');
		}, 1000);
	},
	
	closeAllPopup: function() {
		if(this.closePopup(this.getApplication().getController('StoreController').getStoreGroupPop())) {
    		return true;
    	}
    	if(this.closePopup(this.getApplication().getController('StoreController').getStoreFunPop())) {
    		return true;
    	}
    	if(this.closePopup(this.getApplication().getController('StoreController').getStoreSearchPop())) {
    		return true;
    	}
    	if(this.closePopup(this.getApplication().getController('EyeTestController').getStoreSelectPop())) {
    		return true;
    	}
    	return false;
	},
	
	closePopup: function(comp) {				
		if(!comp.isHidden()) {
			comp.hide();
			return true;
		}
		return false;
	},
    
    routeHome : function() {
    	console.log('routeHome..');
    	this.hideAddressBar();
    	
    	var curView = this.getIndexView().getActiveItem();    	
    	if(curView.getId() == 'homeview') {
    		return;
    	}
    	
    	if(this.closeAllPopup()) {
    		return;
    	}
    	this.onHomeTap();
    },
        
    routePage : function(type) {
    	console.log('routePage => ', type);
    	
    	this.hideAddressBar();
    	
    	if(this.closeAllPopup()) {
    		return;
    	}
    	
    	var curView = this.getIndexView().getActiveItem();
    	
    	if(curView.getId() == type) {
    		return;
    	}
    	
    	console.log('go RoutePage => ', type);
    	if(type == "promotionview") {
    		this.onPromotionTap();
    	} if(type == "promotionchview") {
    		//Ext.getCmp('promotion').setContentEl('promotion_fit_ch');
    		this.setLang('ch');
            this.onPromotionTap();
        } if(type == "promotionwinview") {
            this.onPromotionWinTap();
        } if(type == "promotionarmaniview") {
            this.onPromotionArmaniTap();
        } if(type == "promotionarmanichview") {
        	this.setLang('ch');
            this.onPromotionArmaniTap();
        } else if(type == "brandsview") {
    		this.onBrandsTap();
    	} else if(type == "eyetestview") {
    		this.onEyeTestTap();
    	} else if(type == "storeview") {
    		this.onStoreTap();
    	} else if(type == "aboutusview") {
    		this.onAboutUsTap();
    	} else if(type == "newsview") {
    		this.onNewsTap();
    	}
    },
    
    routePopup : function(type) {
    	this.hideAddressBar();
    	console.log('routePopup => ', type);
    },
    
    showIndexToolbar: function(index) {    	
    	if(index) {
    		this.getIndexToolbar().setActiveTab(index);
    	} else {
    		this.getIndexToolbar().setActiveTab(5);
    	}
        this.getIndexToolbar().setHidden(false);
        
    },
    hideIndexToolbar: function() {
        this.getIndexToolbar().setHidden(true);
    },
    
    onHomeTap: function(btn) {
    	console.log('onHomeTap..');
        this.hideIndexToolbar();
        this.getIndexToolbar().setActiveTab();
        this.getIndexView().getLayout().setAnimation({type:'slide', direction: 'right'});
        this.getIndexView().setActiveItem(this.getHomeView());
        this.changeView(this.getHomeView());
    },
    
    onAboutUsTap: function(btn) {
        console.log('onAboutUsTap..');
        this.showIndexToolbar();      
        
        this.changeView(this.getAboutUsView());
    },
    onNewsTap: function(btn) {
        console.log('onNewsTap..');
        this.showIndexToolbar(4);
        
        this.changeView(this.getNewsView());
    },
    onBrandsTap: function(btn) {
        console.log('onBrandsTap..');
        this.showIndexToolbar();
        
        this.changeView(this.getBrandsView());
    },
    onPromotionTap: function(btn) {
    	console.log('onPromotionTap..');
        this.showIndexToolbar();
        
        this.changeView(this.getPromotionView());
    },
    onPromotionWinTap: function(btn) {
    	console.log('onPromotionWinTap..');
        this.showIndexToolbar(3);
        
        this.changeView(this.getPromotionWinView());
    },
    onPromotionArmaniTap: function(btn) {
        console.log('onPromotionArmaniTap..');
        this.showIndexToolbar(3);
        
        this.changeView(this.getPromotionArmaniView());
    },
    onCatalogTap: function(btn) {
        console.log('onCatalogTap..');
        
        this.changeView(this.getCatalogView());
    },
    onProductTap: function(btn) {
        console.log('onProductTap..');
        
        this.changeView(this.getProductView());
    },
    onStoreTap: function(btn) {
        console.log('onStoreTap..');
        this.showIndexToolbar(2);
        
        this.changeView(this.getStoreView());
    },
    onBookingTap: function(btn) {
        console.log('onBookingTap..');
        
        this.changeView(this.getBookingView());
    },
    onContactUsTap: function(btn) {
    	console.log('onContactUsTap..');
    	this.showIndexToolbar();
    	
        this.changeView(this.getContactUsView());
    }, 
    onEyeTestTap: function(btn) {
        console.log('onEyeTestTap..');
        this.showIndexToolbar(1);   
        this.changeView(this.getEyeTestView());
    },
    changeView: function(view) {    	
    	console.log('index => ' + view.getIndex());
    	var curView = this.getIndexView().getActiveItem();
    	
    	if(curView.getIndex() > view.getIndex()) {
    	   	this.getIndexView().getLayout().setAnimation({type:'slide', direction: 'right'});
    	} else {
    		this.getIndexView().getLayout().setAnimation({type:'slide', direction: 'left'});
    	}
    	
    	this.getIndexView().setActiveItem(view);
    	
    	this.hideAddressBar();
    },
    hideAddressBar: function() {
    	setTimeout(function() {
            window.scrollTo(0, 1);
        }, 1000); // The delay can be tweaked a bit, but is necessary.
    }
});

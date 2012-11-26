Ext.define(Config.PKG+'.controller.PromotionController', {
	extend: 'Ext.app.Controller',
	
	config: {
        refs:{
            promotionView: {
                selector: '#promotionview'
            },
            promotionCarousel: {
                selector: '#promotion_carousel'
            }
        },      
        control: {
            promotionView: {
                initialize : function() {
                	
                	var lang = this.getApplication().getController('IndexController').getLang();
                	//alert(lang);
                	if(lang == 'ch') {
                		Ext.getCmp('promotion').setContentEl('promotion_fit_ch');
                   	} else {
                		//Ext.getCmp('promotion').setContentEl('promotion_fit');                		
                	}
              /*  	
                    var eyetest_btn = Ext.getCmp('promotion').element.down(".eyetest_btn");        
                    eyetest_btn.addListener("tap", function(event) {
                        this.getApplication().getController('IndexController').redirectTo('page/eyetestview');
                    }, this);
                    
                    var store_btn = Ext.getCmp('promotion').element.down(".store_btn");        
                    store_btn.addListener("tap", function(event) {
                        this.getApplication().getController('IndexController').redirectTo('page/storeview');
                    }, this);
              */      
                }
            }
        }
    },
	
	init : function() {
		console.log("PromotionController init..");	
	},
	
	makeCarouselItems : function() {
		
		console.log('this.getCarousel() :' , this.getPromotionCarousel());
		
		Ext.Viewport.mask();
		
		Ext.data.JsonP.request({
            url: Config.PROMOTION_URL,
            callbackKey: 'serverKey',
            success: function(result, request) {
                // Unmask the viewport
                Ext.Viewport.unmask();          
                console.log('load promotion => ', result.items);
                
                Ext.each(result.items, function(value, index){
                    console.log('promotion item  => ', value);
                    this.getPromotionCarousel().add({
                        xtype: 'panel',
                        styleHtmlContent : false,
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true
                        },
                        html: '<img src="' + value.img + '" width="100%" />'
                    });
                }, this);
            },
            failure: function() {
            	// Unmask the viewport
                Ext.Viewport.unmask();
                console.log('load promotion => fail');
            },
            scope: this
        });
	}
});
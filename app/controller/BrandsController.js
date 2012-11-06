Ext.define(Config.PKG+'.controller.BrandsController', {
    extend: 'Ext.app.Controller',
    
    config: {    	
        refs:{
           brandsView : {
               selector: '#brandsview' 
           },
           brandsList : {
               selector: '#brandslist' 
           },
           brandsProductList : {
           	    selector: '#brandsproductlist'
           },
           brandsBackBtn: {
           	    selector: '#brandsbackbtn'
           },
           productView: {
           	    selector: '#productview',
           	    xtype: 'productview',
           	    autoCreate: true
           }           
        },
        control: {          
           brandsList : {
                'select' : function(view, record) {                                    
                    console.log('brandsView list select..');
                    console.log(record);
                    console.log('selected ID :' + record.data.id);
                    
                    Ext.Msg.alert('Under upgrade ..');
/*                    
                    if(record.data.nb_products > 0) {
                    	this.showProductsList(record.data.id);
                    }
*/                    
                }               
           },
           brandsBackBtn : {
                'tap' : function(btn, event) {
                	this.getBrandsView().getLayout().setAnimation({type:'slide', direction: 'right'});
                	
                	if(this.getBrandsView().getActiveItem() == this.getBrandsProductList()) {
                        this.getBrandsBackBtn().setHidden(true);
                        this.getBrandsView().setActiveItem(this.getBrandsList());    
                    }
                    
                    if(this.getBrandsView().getActiveItem() == this.getProductView()) {
                    	this.getBrandsBackBtn().setHidden(false);
                        this.getBrandsView().setActiveItem(this.getBrandsProductList());    
                    }
                	
                }
           },
           brandsProductList : {
           	    'select' : function(view, record) {
                    console.log('brandsProductList select..');
                    //console.log(record);
                    console.log('selected ID :' + record.data.id);
                    
                    Ext.Viewport.mask();
                    Ext.data.JsonP.request({
                        url: Config.PRODUCT_URL,
                        callbackKey: 'serverKey',
                        params: {
                        	id_product: record.data.id,
                            mobile: 1
                        },
                        success: function(result, request) {                            
                            Ext.Viewport.unmask();
                            
                            console.log(result);
                            
                            this.getProductView().setData(result);
                            this.getBrandsView().getLayout().setAnimation({type:'slide', direction: 'left'});
                            this.getBrandsView().setActiveItem(this.getProductView());
                        }, 
                        failure: function() {
                        	Ext.Viewport.unmask();                        	
                        },
                        scope: this
                    });
                }
           }
        }
    },
    
    init: function() {
        console.log('BrandsContrller init..');       
    },
    
    showProductsList: function(id) {
    	var brandsView = this.getBrandsView();
    	var brandsList = this.getBrandsList();
    	
    	var url = Config.BRAND_URL + '&id_manufacturer='+id;
    	console.log('url', url);
    	
    	Ext.Viewport.mask();    	
    	this.getBrandsProductList().getStore().load({
    	    url: url,    	   
            callback: function(records, operation, success) {
                Ext.Viewport.unmask();
                this.getBrandsProductList().refresh();
            },
            scope: this
    	});
    	
    	this.getBrandsBackBtn().setHidden(false);
    	//this.getBrandsView().getComponent('brandstitlebar').setHidden(false);
    	this.getBrandsView().getLayout().setAnimation({type:'slide', direction: 'left'});
    	this.getBrandsView().setActiveItem(this.getBrandsProductList());
    }
});

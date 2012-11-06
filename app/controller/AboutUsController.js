Ext.define(Config.PKG + '.controller.AboutUsController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	aboutUsView : {
        		selector: '#aboutusview'
        	}
        },
        control: {
        	aboutUsView : {
	        	logoTap : function() {
	        		console.log('logoTap');
	        		this.getApplication().getController('IndexController').onStoreTap();
	        	}
        	}
        }
    }	
});

Ext.define(Config.PKG+'.controller.MainController', {
	extend: 'Ext.app.Controller',
	
	requires: ['Ext.data.JsonP'],
	
	config: {
		refs:{
			homeView: {
				selector: '#homeview'
			},		   
			mainView: {
				selector: '#mainview'
			}
		},		
		control: {
			homeView: {
				initialize : function() {				
				}				
			},
			mainView : {
			}
		}
	},
	
	init: function() {
		console.log('MainController init..');
	},
	
	onHomeMap : function() {
		console.log('onHomeMap');
		this.getMainView().setActiveItem(4);
	}
});

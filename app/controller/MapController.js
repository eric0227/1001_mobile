Ext.define(Config.PKG+'.controller.MapController', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			mapView : 'mapview',
			map: '#map'
		},
		control: {
			mapView: {
			},
			map : {
			}
		}
	},
	
	init: function() {
		console.log('MapController init..');				

	},
	
	onInitMap: function() {
	},

	onMapRender: function(cmp, map) {
	}	
});

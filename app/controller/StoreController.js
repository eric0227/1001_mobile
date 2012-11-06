Ext.define(Config.PKG + '.controller.StoreController', {
    extend: 'Ext.app.Controller',
    
    config: {
    	refs: {
    		storeView: {
                selector: '#storeview'
            },
    		storeListView: {
    			selector: '#storeview storelistview'
    		},
    		storeList: {
    			selector: '#storeview storelistview list'
    		},
    		storeGroupPop: {
                selector: '#storegrouppop',
                xtype: 'storegrouppop',
                id:'storegrouppop',
                autoCreate:true
            },
            storeGroupBtn: {
                selector: '#storeview button[action=storegroupaction]'
            },
            storeSearchBtn: {
                selector: '#storeview button[action=storesearchaction]'
            },
            storeGroupPopList: {
                selector: '#storegrouppoplist'
            },
            storeFunPop: {
                selector: '#storefunpop',
                xtype: 'storefunpop',
                id:'storefunpop',
                autoCreate:true
            },
            mapView: {
            	selector: '#mapview',
            	xtype: 'mapview',
            	id: 'mapview',
            	autoCreate: true
            },
            storeSearchPop: {
            	selector: '#storesearchpop',
            	xtype: 'storesearchpop',
            	id: 'storesearchpop',
            	autoCreate: true            	
            },
            bookingFormPanel: {
            	selector: '#bookingformpanel'
            }
    	},
    	
    	selectedStore : null,
    	searchType: 'all',
    	
    	control: {
    		storeView : {
    			initialize: function(comp, opts) {
                    console.log('storeView initialize..');
                    console.log(this.getStoreList());
                    this.loadStore();
                }
    		},
    		storeList: {
    			initialize: function(comp, opts) {
    				console.log('Store List initialize..');    				
    			},
    			itemtap: function(list, index, element, record) {
    				console.log('Store List itemtap..');
    				    				
    				this.setSelectedStore(record);
    				
                    this.getStoreFunPop().show();
                    this.getApplication().getController('IndexController').redirectTo('popup/storefunpop');
                    		
                    this.getStoreFunPop().getComponent('storefunpop_titlebar').setTitle(record.get('city'));
                    if(record.get('eyetestable') == '1') {
                    	Ext.getCmp('eyetest_btn').setDisabled(false);
                    } else {
                    	Ext.getCmp('eyetest_btn').setDisabled(true);
                    }                    
                }
    		},
    		storeGroupBtn: {
    			tap: function() {
    				this.getStoreGroupPop().showBy(this.getStoreGroupBtn());
    				this.getApplication().getController('IndexController').redirectTo('popup/storegrouppop');
    			}
    		},
    		storeSearchBtn: {
    			tap: function() {
                    this.getStoreSearchPop().show();
                    this.getApplication().getController('IndexController').redirectTo('popup/storesearchpop');
                }
    		},
    		storeGroupPopList : {
                initialize: function() {
                    console.log("storeGroupPopList initialize..");            
                },
                itemtap: function(list, index, element, record) {
                    var groupName = record.get('state_name');
                    this.changeStoreGroup(groupName);
                    Ext.getCmp('storegrouppop').hide();
                }
            },
            'storefunpop  button[action=eyetest]': {tap: 'onEyeTestTap'},
            'storefunpop  button[action=storemap]': {tap: 'onStoreMapTap'},
            'storefunpop  button[action=callstore]': {tap: 'onCallStoreTap'},
            'storefunpop  button[action=emailstore]': {tap: 'onEmailStoreTap'},
            '#bookingformpanel button[action=search]' : {tap: 'onStoreSearchTap'}
            
    	}
    },
    
    init: function() {
        console.log('StoreController init..');
        Ext.Viewport.add(this.getStoreGroupPop());
        Ext.Viewport.add(this.getStoreFunPop());        
        Ext.Viewport.add(this.getStoreSearchPop());
    },
    
    loadStore: function(extraParams) {
    	console.log('load Store..');
    	//this.getStoreList().getStore().getProxy().setExtraParam();
    	
    	//Ext.Viewport.mask();
    	
    	if(extraParams) {
    		
    		this.setSearchType('search');
/* 
    		this.getStoreList().setGrouped(false);
    		this.getStoreList().getStore().clearFilter();
    		this.getStoreList().getStore().setGrouper();//.setSortProperty('distance');
    		this.getStoreList().getStore().getProxy().setExtraParams(extraParams);
 */   	
    		this.getStoreList().setGrouped(false);
    		//this.getStoreList().setIndexBar(false);
    		if(!this.searchStore) {
    			this.defaultStore = this.getStoreList().getStore();
    			
    			var searchStore = Ext.create(Config.PKG+'.store.StoreSearchStore');
    			this.searchStore = searchStore;
    		}
    		this.getStoreList().setStore(this.searchStore);
    		this.getStoreList().getStore().getProxy().setExtraParams(extraParams);
    		
    	} else {
    		this.setSearchType('all');
    		
    		if(this.defaultStore) {
    			this.getStoreList().setStore(this.defaultStore);
    			this.getStoreList().setGrouped(true);
        		//this.getStoreList().setIndexBar(true);
    		}
    		this.getStoreList().getStore().getProxy().setExtraParams({'mobile':1});
    	}
    	
    	this.getStoreList().getStore().load({
    	   callback : function(records, operation, success) {
    	       //Ext.Viewport.unmask();
    	       console.log('loadStore => ', records);
    	   },
    	   scope: this
    	});
    },
    
    changeStoreGroup: function(groupName) {
    	if(this.getSearchType() == 'search') {    		
    		this.loadStore();
    	}
    	
        var storeStore = this.getStoreList().getStore();
        if(groupName == "ALL") {
            storeStore.clearFilter();
            this.getStoreList().refresh();
            //Ext.getCmp('storetitlebar').setTitle("1001 Optical Store");
        } else {
        	storeStore.filter('state_name', groupName);
            this.getStoreList().refresh();
            //Ext.getCmp('storetitlebar').setTitle(groupName);
        }
        
        this.getStoreListView().setActiveItem({});        
        this.getStoreListView().getLayout().setAnimation({type:'slide', direction: 'down'});
        this.getStoreListView().setActiveItem(this.getStoreList());
    },
    
    onEyeTestTap: function() {
    	console.log('onEyeTestTap..');
    	this.getStoreFunPop().hide();    	
    	this.getApplication().getController('IndexController').onEyeTestTap();
    	this.getApplication().getController('EyeTestController').searchStore(this.getSelectedStore().get('name'), this.getSelectedStore().get('postcode'));
    },
    onStoreMapTap: function() {
        console.log('onStoreMapTap..');
        this.getStoreFunPop().hide();
        this.getStoreView().getLayout().setAnimation({type:'slide', direction: 'left'});
        this.getMapView().setPhoneNumber(this.getSelectedStore().get('phone'));
        this.getMapView().setMap(this.getSelectedStore().get('latitude'), this.getSelectedStore().get('longitude'));
        this.getMapView().setActiveItem(0);
        
        var title = this.getSelectedStore().get('city');
		if( title.length > 11) {
			title = title.substring(0, 11) + "..";
		}		
        this.getMapView().getComponent('mapview_titlebar').setTitle(title);
        this.setStoreInfo(this.getSelectedStore().data);
        
        this.getStoreView().setActiveItem(this.getMapView());
        Ext.getCmp('mapBackBtn').clearListeners();
        Ext.getCmp('mapBackBtn').addListener('tap', function() {
        	   this.getStoreView().getLayout().setAnimation({type:'slide', direction: 'right'});
        	   this.getStoreView().setActiveItem(this.getStoreListView());        	   
        	   Ext.getCmp('storegrouppop').hide();
            },
            this
        );
    },
    onCallStoreTap: function() {
        console.log('onCallStoreTap..');
        if(this.getSelectedStore() == null) {
        	return;
        }
        var name = this.getSelectedStore().get('name');
        var phone = this.getSelectedStore().get('phone');
        console.log('name : ' + name, 'phone:' + phone);
        window.location = 'tel:' + phone;
    },
    onEmailStoreTap: function() {
        console.log('onEmailStoreTap..');
    },
    
    setStoreInfo: function(data) {
    	if(!this.storeTemplate) {
    		this.storeTemplate = new Ext.Template([
    		   '<div width="100%" id="store_info">',                                   
	    		   '<div class="store_name2"> {name} </div>',
	    		   '<div class="store_addr"> {address1}  {address2} {city} {state} {postcode} </div>',
	    		   '<div class="store_phone"> {phone} </div>',
	    		   '<div class="store_phone"> {email} </div>',
	    		   '<div class="store_image"><img src="{image}" width="100%" /></div>',
	    		   '<div class="store_hours_title"> Opening Hours : </div>', 
	    		   '<div class="store_hours"> {hours} </div>', 
	    	   '</div>'
    		].join(' '));
    	}
    	
    	this.storeTemplate.overwrite(Ext.getCmp('storeinfo').element, data);
    },
    
    onStoreSearchTap: function() {
    	console.log('onStoreSearchTap..');
    	var keyword = this.getBookingFormPanel().getValues().keyword;
    	console.log('keyword = ' + keyword);
    	if(!keyword) {
    		this.loadStore();
        	Ext.getCmp('bookingformpanel').reset();
        	Ext.getCmp('storesearchpop').hide();
    		return;
    	}
    	
    	var postal_code = keyword;

    	if(postal_code == 'Burwood' || postal_code == 'burwood'){
    		postal_code = 'Burwood New South Wales';
    	}

    	if(postal_code == 'Northland' || postal_code == 'northland'){
    		postal_code = 'Northland Shopping Centre';
    	}
    	
    	if(postal_code == 'Macquarie' || postal_code == 'macquarie'){
    		postal_code = 'Macquarie Park';
    	}

    	var address = postal_code+', Australia';
    	var geocoder = new google.maps.Geocoder();
    	var _this = this;
    	
    	geocoder.geocode({address: address}, function(results, status) {
    		if (status != google.maps.GeocoderStatus.OK){
				return;
			}
    		console.log(results);
    		var radius = 80;
			var center = results[0].geometry.location;
			var localSearchUrl = "stores.php" + '?latitude=' + center.lat() + '&longitude=' + center.lng() + '&radius=' + radius + '&search=1';
			console.log(localSearchUrl);
			
			var extraParams = {
				'latitude' : center.lat(),
				'longitude' : center.lng(),
				'radius' : radius,
				'search' : 1,
				'mobile' : 1
			}; 
			
			_this.loadStore(extraParams);
    	});
    	
    	Ext.getCmp('bookingformpanel').reset();
    	Ext.getCmp('storesearchpop').hide();
    }
});

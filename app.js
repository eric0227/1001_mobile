Ext.application({
    name: 'Gna',

    requires: [
        'Ext.MessageBox',
        'Ext.data.JsonP',
        'Ext.data.proxy.JsonP',
        'Ext.TitleBar'
    ],
    
    controllers: ['AboutUsController',
                  'InitController',
                  'IndexController', 
                  'MainController', 
                  'BrandsController', 
                  'PromotionController', 
                  'StoreController', 
                  'MapController', 
                  'EyeTestController',
                  'NewsController'],
                  
    views: ['Index', 
            'Top', 
            'Main', 
            'Home', 
            'Store', 
            'EyeTest', 
            'Locator', 
            'Promotion', 
            'ContactUs', 
            'Brands', 
            'Booking', 
            'AboutUs', 
            'Catalog', 
            'Product', 
            'StoreList', 
            'StoreGroupPop', 
            'StoreFunPop', 
            'MapView', 
            'StoreSearchPop', 
            'StoreSelectPop', 
            'CustomTitleBar', 
            'News',
            'PromotionWin',
            'PromotionArmani'
            ],
            
    models: ['BrandsModel', 
             'CatalogModel', 
             'CmsModel', 
             'ProductModel', 
             'StoreModel', 
             'StoreGroupModel'],
    stores: ['BrandsStore', 
             'CatalogTreeStore', 
             'CatalogStore', 
             'CmsStore', 
             'ProductStore', 
             'StoreStore', 
             'NewsStore', 
             'StoreGroupStore', 
             'StoreSearchStore',
             'EyeTestStore'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    viewport: {
        autoMaximize: true
    },

    launch: function() {
        console.log('Ext.launch..');
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        //Ext.Viewport.add(Ext.create(Config.PKG+'.view.Main'));
        //var mainController = this.getApplication().getController("MainController");
        //mainController.showMain();
        
        this.indexview = null;
               
        console.log("Ext.os.is.iOS : " + Ext.os.is.iOS);
        console.log("Ext.os.is.Android : " + Ext.os.is.Android);
        
        /* for mobile */
        if (Ext.os.is.iOS || Ext.os.is.Android) {
            this.indexview = {
                xclass: Config.PKG+'.view.Index'
            };
        } else { // for desktop 	        	
            this.indexview = {
                xtype   : 'panel',
                layout  : 'fit',
                items   : [{  xclass: Config.PKG+'.view.Index' }],               
                width   : 320,
                height  : 480,
                centered: true
            };
            //Ext.Viewport.setWidth(320);
            //Ext.Viewport.setHeight(480);
        }
        //Ext.Viewport.setAutoMaximize(true);
        Ext.Viewport.add(this.indexview);
        
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});



Ext.define(Config.PKG+'.controller.NewsController', {
    extend: 'Ext.app.Controller',
    
    config: {    	
        refs:{
           newsView : {
               selector: '#newsview' 
           },
           newsList: {
        	   selector: '#newslist'
           },
           newsTitlebar: {
        	   selector: '#newsview toolbar'
           },
           newsBackBtn: {
        	   selector: '#newsview button[action=back]'
           },
           newsDetail: {
        	   selector: '#newsdetail'
           }
        },
       
        control: {
        	newsList: {
        		'select' : function(view, record) {
        			console.log(record);
        			
        			this.getNewsDetail().setHtml('<div style="padding:15px;">' + record.data.content + '</div>');
        			this.getNewsDetail().getScrollable().getScroller().scrollTo(0, 0);
        			
        			var title = record.data.meta_title;
        			if( title.length > 15) {
        				title = title.substring(0, 15) + "..";
        			}
        			
        			this.getNewsTitlebar().setTitle(title);
        			this.getNewsBackBtn().setHidden(false);
        			
        			this.getNewsView().getLayout().setAnimation({type:'slide', direction: 'left'});
        			this.getNewsView().setActiveItem(1);
        		}
        	},
        	newsBackBtn : {
        		'tap': function(btn) {        			
        			btn.setHidden(true);
        			this.getNewsView().getLayout().setAnimation({type:'slide', direction: 'right'});
        			this.getNewsView().setActiveItem(0); 
        			this.getNewsTitlebar().setTitle('News');
        			
        		}
        	}
        }
    },
	init: function() {
	    console.log('NewsController init..');           
	}
});

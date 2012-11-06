Ext.define(Config.PKG+'.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homeview',
    id: 'homeview',
    
    requires: ['Ext.Label'],
    
    config: {
        title: 'Home',
        iconCls: 'home',
        cls:'home',
        scrollable: {
            direction: 'vertical'
            //directionLock :true
        },
        layout: 'vbox',
        index: 0,
        style: "background: url('./resources/images/background.gif') repeat-y left top; background-size: 100% 1px;",
        defaults: {
            xtype: 'panel',
            style: 'width: 100%;',
            layout: 'hbox'
			//flex: 1
        },
        listeners : {
        	initialize : function(comp, opts) {
        		console.log('Home initialize..');
        		var buttons = comp.query('button');
        		
        		for(i = 0; i < buttons.length; i++) {
        			buttons[i].element.addListener('touchstart', function(e, node) {
        				console.log('touchstart');
        				if(this.config.iconOn) {
        					this.setIcon(this.config.iconOn);
        				}
        			}, buttons[i]);
        			
        			buttons[i].element.addListener('touchend', function(e, node) {
        				console.log('touchend');
        				if(this.config.iconOff) {
        					this.setIcon(this.config.iconOff);
        				}
        			}, buttons[i]);
        		}
        	}
        },
        items: [
            {
				xtype: 'panel',
				width: '100%',
				height: 'auto',
				html: "<a href='#page/promotionview'><img src='./resources/images/main_header.jpg' style='width: 100%;' /></a>"
            },
            {
            	xtype: 'panel',
            	hidden: true,
            	html : [
            	    '<img src="./resources/images/button1_select.gif" />',
            	    '<img src="./resources/images/button2_select.gif" />',
            	    '<img src="./resources/images/button3_select.gif" />',
            	    '<img src="./resources/images/button4_select.gif" />',
            	    '<img src="./resources/images/button5_select.gif" />',
            	    '<img src="./resources/images/button6_select.gif" />'
            	].join(' ')
            },
			{
				xtype: 'panel',
				layout: 'vbox',
				width: '93%',
				height: 192,
				style: "margin: 0 auto;",
				defaults: {
					xtype: 'panel',
					layout: 'hbox',
					flex: 1,
					defaults: {
						xtype: 'panel',
						layout: 'vbox',
						flex: 1,
						height: 'auto',

						defaults: {
							xtype: 'button',
							iconCls: 'home_button_image',
							style: 'background: none; border: none; padding: 0;'
						}
					}
				},
				
				items: [
					{
						style: 'margin-top: -3px;',
						items: [
							{
								cls: 'home_left_buttons',
								items: {
									icon: './resources/images/button1.gif',
									iconOff: './resources/images/button1.gif',
									iconOn: './resources/images/button1_select.gif',
									action: 'eyetest'                            
								}
							},
							{
								cls: 'home_right_buttons',
								items:  {
									icon: './resources/images/button2.gif',
									iconOff: './resources/images/button2.gif',
									iconOn: './resources/images/button2_select.gif',
									action: 'store'
								}
							}
						]
					},
					{
						items: [
							{
								cls: 'home_left_buttons',
								items: {
									icon: './resources/images/button3.gif',
									iconOff: './resources/images/button3.gif',
									iconOn: './resources/images/button3_select.gif',
									action: 'promotionarmani'
								}
							},
							{
								cls: 'home_right_buttons',
								items: {
									icon: './resources/images/button4.gif',
									iconOff: './resources/images/button4.gif',
									iconOn: './resources/images/button4_select.gif',
									action: 'brands'
								}
							}
						]
					},
					{
						items: [
							{
								cls: 'home_left_buttons',
								items: {
									icon: './resources/images/button5.gif',
									iconOff: './resources/images/button5.gif',
									iconOn: './resources/images/button5_select.gif',
									action: 'aboutus'
								}
							},
							{
								cls: 'home_right_buttons',
								items: {
									icon: './resources/images/button6.gif',
									iconOff: './resources/images/button6.gif',
									iconOn: './resources/images/button6_select.gif',
									action: 'news'
								}
							}
						]
					}
				]
			},
			{
				xtype: 'panel',
				style: 'margin-top: 10px;',
				layout: {
					type: 'vbox',
					align: 'center',
					pack: 'end',
					height: 46
				},
                items: [
                    {
                    	xtype: 'panel',
                    	id: 'homebottom',
                    	contentEl: 'main_bottom_div',
                    	listeners: {
                    		initialize : function() {               				
                				var fullsite = this.element.down("#fullsite");		
            					fullsite.addListener("tap", function(event) {
            						console.log('fullsite..');
            						//window.location = 'http://www.1001optical.com.au?deskver=1';
            					}, this);
                			}
                        }
                    }
                    /*
                    {
                        xtype: 'label',
                        html: 'Copyright (c) 1001 Optical 2012 All Rights Reserved',
                        style: 'font-size: 11px; color: #616161; text-align:center;'
                        
                    },                    
                    {
                        xtype: 'label',
                        html: '1001 Full Site',
                        style: 'font-size: 11px; color: #616161;'
                    }
                    */
                ]
            }            
        ]
    }
});

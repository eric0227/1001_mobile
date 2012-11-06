Ext.define(Config.PKG+'.view.EyeTest', {
    extend: 'Ext.Panel',
    xtype: 'eyetestview',
    id: 'eyetestview',
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Email',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Radio',
        'Ext.field.Hidden'
    ],
    config: {
        title: 'Eyetest',
        iconCls: 'star',
        cls:'eyetest',
        scrollable: false,
        layout: 'card',
        itemCount: 5,
        index: 1,
        items: [
            {
                xtype: 'toolbar',
                title: 'Book an Eyetest',
                docked  : 'top',
                hidden: false,
                ui: 'black',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        align: 'left',
                        hidden: true,
                        text: 'Back',
                        action: 'prev'
                    },
                    {
                    	xtype: 'spacer',
                    },
                    {
                        xtype: 'button',
                        ui: 'forward',
                        align: 'right',
                        text: 'Next',
                        action: 'next',
                        hidden: true
                    }
                ]
            },
            {
                xtype: 'formpanel',
                id: 'eyetest_app',
                layout: 'vbox',
                scrollable: true,
                items : [                     
                    {
                        xtype: 'fieldset',
                        title: '1. Choose Appointment',
                        defaults: {     
                        	labelWidth: '200px'
                        },
                        items: [
                            {
                                xtype: 'radiofield',
                                id: 'test_type1',
                                name: 'test_type',
                                label: 'BOOK A STANDARD <br> EYE TEST', 
                                value: 'Standard Eye test',
                                checked: true,
                                listeners: {
                                    tap: {
                                        fn: function() {
                                            Ext.getCmp('testtypestd').setHidden(false);
                                            Ext.getCmp('testtypeleng').setHidden(true);
                                            
                                            Ext.getCmp('test_type1').setChecked(true);
                                        },
                                        element: 'element'
                                    }
                                }
                            },
                            {
                                xtype: 'radiofield',
                                id: 'test_type2',
                                name: 'test_type',                                
                                label: 'BOOK A CONTACT <br> LENS CONSULTATION',
                                value: 'Lens Consultation',
                                listeners: {
                                    tap: {
                                        fn: function() {
                                            Ext.getCmp('testtypestd').setHidden(true);
                                            Ext.getCmp('testtypeleng').setHidden(false);
                                            
                                            Ext.getCmp('test_type2').setChecked(true);
                                        },
                                        element: 'element'
                                    }
                                }                                
                            }
                       ]
                    },
                    {
                    	xtype: 'panel',
                    	style: 'margin-bottom: 20px;',
                    	layout: {type:'vbox', align: 'middle', pack: 'center'}, 
                    	defaults: {
                    		xtype: 'button',
                    		ui: 'normal',
                    		width: '150'
                    	},
                    	items: [                    	   
                    	   {
                    	   	   text: 'NEXT',                    	   	   
                    	   	   action: 'next'                    	   	   
                    	   }
                    	]
                    },
                    {
                    	xtype: 'panel',
                    	id: 'testtypestd',
                    	stylehtmlContent: true,                    	
                        contentEl: 'test_type_std'
                    },
                    {
                        xtype: 'panel',
                        id: 'testtypeleng',
                        stylehtmlContent: true,
                        hidden: true,
                        contentEl: 'test_type_leng'                       
                    }
                ]
            },
            {
                xtype: 'formpanel',
                id: 'eyetest_store_form',
                layout: 'vbox',
                scrollable: true,
                items : [                    
                    {
                    	xtype: 'fieldset',
                        title: '2. Select Store',
                        defaults: {
                                                         
                        },
                        items: [
                            {
                                xtype: 'textfield', 
                                id: 'eyetest_store_keyword',
                                name: 'keyword',
                                placeHolder: 'City / Surburb / Postal code'
                            }                         
                        ]
                    },
                    {
                    	xtype: 'button',
                	    text: 'Search',
                        action: 'search',
                        ui: 'action'      
                    },                    
                    {
                        xtype: 'list',            
                        id: 'eyetest_store_list',
                        title: '',
                        scrollable: false,
                        //onItemDisclosure: true,
                        style: 'margin-top: 20px',
                        store: {
                            xtype: 'eyeteststore'
                        },
                        itemTpl: [
                         '<div class="store_list">',
                         '   <div class="store_name">{name}</div> <span class="store_distance"> {distance_str} <span>',
                         '   <img class="store_img" src="{image}"/>',
                         '   <div class="store_detail">',
                         '        <div class="address">{address1} {address2} {city} {state} {postcode}</div>',
                         '   </div>',
                         '   <div style="clear:both;"></div>',
                         '</div>'                    
                        ].join(' ')         
                    }
                ]
            },            
            {
                xtype: 'formpanel',
                id: 'eyetest_date',
                layout: 'vbox',
                scrollable: true,
                items : [                                        
                    {
                        xtype: 'fieldset',
                        title: '3. Select Date',
                        defaults: {
                            labelWidth: '100px',
                            requiredCls: ''                            
                        },
                        items: [
                            {
                                xtype: 'selectfield',
                                id: 'eyetest_date_field',
                                label: 'Date',
                                name: 'date',
                                required: true,                                
                                options: [
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                id: 'eyetest_time_field',
                                label: 'Time',
                                name: 'time',
                                required: true,
                                value: '6:00(PM)',
                                options: [
                                ]   
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        style: 'margin-bottom: 20px;',
                        layout: {type:'vbox', align: 'middle', pack: 'center'}, 
                        defaults: {
                            xtype: 'button',
                            ui: 'normal',
                            width: '150'
                        },
                        items: [                           
                           {
                               text: 'NEXT',                               
                               action: 'next'                              
                           }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                id: 'eyetest_detail',
                layout: 'vbox',
                scrollable: true,
                items : [                                        
                    {
                        xtype: 'fieldset',
                        title: '4. Your Details',
                        defaults: {
                            labelWidth: '110px'                                               
                        },
                        items: [         
                            {
                                xtype: 'selectfield',
                                label: 'Title',
                                name: 'title',
                                required: true,
                                options: [
                                    {text:"Select", value:'0'},
                                    {text:"Mr", value:'Mr'},
                                    {text:"Mrs", value:'Mrs'},
                                    {text:"Miss", value:'Miss'},
                                    {text:"Ms", value:'Ms'}
                                ]
                            },                            
                            {
                                xtype: 'textfield',
                                label: 'First Name',
                                name: 'first_name',
                                required: true                                                             
                            },                            
                            {
                                xtype: 'textfield',
                                label: 'Last Name',
                                name: 'last_name',
                                required: true                              
                            },
                            {
                                xtype: 'textfield',
                                label: 'Phone',
                                name: 'phone',
                                required: true                              
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                name: 'email',
                                required: true                              
                            },
                            {
                                xtype: 'selectfield',
                                label: 'How did you<br>find us?',
                                name: 'findus',
                                required: false,
                                options: [
                                    {text:"Select", value:'0'},
                                    {text:"Google Advertisement", value:'Google Advertisement'},
                                    {text:"Search Engines", value:'Search Engines'},
                                    {text:"Other Websites", value:'Other Websites'},
                                    {text:"Others", value:'Others'}
                                ]
                            },                            
                            {
                                xtype: 'textareafield',
                                label: 'Comment',
                                name: 'comment',
                                height: 80
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        style: 'margin-bottom: 20px;',
                        layout: {type:'vbox', align: 'middle', pack: 'center'}, 
                        defaults: {
                            xtype: 'button',
                            ui: 'normal',
                            width: '150'
                        },
                        items: [                           
                           {
                               text: 'NEXT',                               
                               action: 'next'                              
                           }
                        ]
                    }
                ]
            },
            {
                xtype: 'formpanel',
                id: 'eyetest_confirm_form',
                title: '5. Confirm',
                layout: 'vbox',
                scrollable: true,
                items : [
                    {
                        xtype: 'fieldset',
                        title: '5. Confirm',
                        
                        items: [
                            {
                            	xtype: 'panel',
                            	id: 'eyetest_confirm',
                            	tpl: new Ext.XTemplate(
                            	   '<div id="eyetest_confirm">',
                            	   '   <tpl for="items">',
                            	   '       <div class="eyetest_field">',
                            	   '           <span class="fieldlabel">{fieldlabel}</span>',
                            	   '           <span class="fieldvalue">{fieldvalue}</span>',
                            	   '       </div>',
                            	   '   </tpl>',
                            	   '</div>'                     	
                                )
                            }
                        ]
                    },                      
                    {
                        xtype: 'button',
                        text: 'Confirm',
                        action: 'eyetestConfirm',
                        ui: 'action'
                    }                       
                ]           
            },
            {
            	xtype: 'panel',
            	html: '<div id="eyetest_thank_msg"> Thank you for your booking!! </div>'
            }
        ]
    }
});

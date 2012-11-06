Ext.define(Config.PKG+'.view.ContactUs', {
    extend: 'Ext.Panel',
    xtype: 'contactusview',
    id: 'contactusview',
    
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
        'Ext.field.Radio'       
    ],
    
    config: {
        title: 'ContactUs',
        iconCls: 'user',
        cls:'contactus',
        scrollable: true,
        layout: 'fit',
        items: [                
            {
                xtype: 'titlebar',
                title: 'Contact Us',
                docked: 'top',
                items: [                   
                   {
                       xtype: 'button',
                       action: 'submitBooking',
                       text: 'Send',
                       align: 'right',
                       ui: 'action'                          
                   }
                ]
            },
            {
                xtype: 'formpanel',
                id: 'bookingFormpanel',
                layout: 'vbox',         
                items : [                       
                    {
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        defaults: {
                            labelWidth: '118px',
                            requiredCls: ''                             
                        },
                        
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name',
                                name: 'name',
                                required: true
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                name: 'email'                                                              
                            },
                            {
                                xtype: 'textfield',
                                label: 'Phone',
                                name: 'phone'                                                                   
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Special<br>Request',
                                name: 'specialRequest',
                                height: 90
                            }
                        ]
                    },                                          
                    {
                        xtype: 'button',
                        text: 'Send',
                        action: 'submitBooking',
                        ui: 'action'               
                    }                       
                ]           
            }                           
        ]   
    }
});

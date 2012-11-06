Ext.define(Config.PKG+'.controller.EyeTestController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs:{
            eyeTestView: {
                selector: '#eyetestview'
            },
            nextBtn: {
            	selector: '#eyetestview button[action=next]'
            },
            prevBtn: {
                selector: '#eyetestview button[action=prev]'
            },
            eyetestStoreForm : {
            	selector: '#eyetest_store_form'
            },
            storeSearchBtn : {
            	selector: '#eyetestview button[action=search]'
            },
            eyetestStoreList: {
            	selector: '#eyetest_store_list'
            },
            storeSelectPop: {
                selector: '#storeselectpop',
                xtype: 'storeselectpop',
                autoCreate: true
            },
            eyetestAppForm: {
            	selector: '#eyetest_app'
            },
            eyetestStoreForm: {
            	selector: '#eyetest_store_form'
            },
            eyetestDateForm: {
            	selector: '#eyetest_date'
            },            
            eyetestDetailForm: {
            	selector: '#eyetest_detail'            	
            },
            eyetestDateField : {
            	selector: '#eyetest_date_field'
            },
            eyetestTimeField : {
                selector: '#eyetest_time_field'
            }
        },      
        control: {
            eyeTestView: {
                initialize : function() {
                    console.log('eyeTestView initialize..');
                    this.getEyeTestView().setActiveItem(0);
                    
                    this.initEyeTestDate();
                }
            },
            nextBtn : {
            	tap: function() {
            		console.log('Next...');
            		this.onNextTap();
            	}
            },
            prevBtn : {
                tap: function() {
                    console.log('Prev...');
                    this.onPrevTap();
                }
            },
            storeSearchBtn : {
            	tap: function() {
            		console.log('storeSearchBtn ..');
            		this.onStoreSearchTap();
            	}
            },
            eyetestStoreList : {
            	itemtap:  function(list, index, target, record) {
            		console.log('eyetestStoreList =>', record);            		
            		Ext.getCmp('storename_label').setHtml(record.get('name'));            		
            		this.getStoreSelectPop().show();
            		this.getApplication().getController('IndexController').redirectTo('popup/storeselectpop');
            	}
            },
            '#storeselectpop button[action=storeselect]' : {
                tap: function() {
                	console.log('storeselect action');
                	this.getStoreSelectPop().hide();
                	this.onNextTap();
                }
            },
            '#eyetest_confirm_form button[action=eyetestConfirm]' : {
            	tap: function() {
                    console.log('EyetestConfirm action');                    
                    this.onEyetestConfirm();
                }
            },
            eyetestDateField: {
            	change: function(selectField, newValue, oldValue, opts) {
            		var record = selectField.getRecord();
            		console.log('EyetestDateField.getRecord() =>', record);
            		if(record) {
            		   this.setDateTime(record.raw.week);
            		}
            	}
            }
        },
        index : 1,
        eyeTestDate: []
    },
    
    init : function() {
        console.log("EyeTestController init..");
        Ext.Viewport.add(this.getStoreSelectPop());
    },
    
    checkNullField : function(values, fieldName, labelName) {
        if(!values[fieldName] || values[fieldName] == "") {
            Ext.Msg.alert('Please enter a valid ' + labelName + ' ');
            return false;
        }
        return true;
    },
    
    checkField : function(form, fieldName, labelName) {
    	var field = form.getFields(fieldName);
    	
        if(!field || !field.getValue() || field.getValue() == "0") {
            Ext.Msg.alert("Please enter a valid '" + labelName + "' ");            
            //field.focus();
            
            return false;
        }
        return true;
    },
    
    onNextTap: function() {
        var index = this.getIndex(); 
        console.log(index);
                
        if(index == 4) {
        	var detailForm = this.getEyetestDetailForm();
        	var detailValues = this.getEyetestDetailForm().getValues();
        	console.log(detailValues);
                		
        	if( this.checkField(detailForm, 'title', 'Title') 
                && this.checkField(detailForm, 'first_name', 'First Name')
                && this.checkField(detailForm, 'last_name', 'Last Name')
                && this.checkField(detailForm, 'phone', 'Phone number')
                && this.checkField(detailForm, 'email', 'Email address')) {
                            	
                                
            } else {
            	return;
            }
        }
                
        index++;
        
        if(index == 3) {
        	this.setDateTime();
        }
        
        if(index == 5) {
            var dataList = [];
            
            // Appointment
            var testvalues = this.getEyetestAppForm().getValues();
            console.log('Appointment =>', testvalues);
            dataList.push({
                'fieldlabel' : 'Selected Apointment',
                'fieldvalue' : testvalues.test_type
            });
            
            // Store
            var storevalues = this.getEyetestStoreList().getSelection();
            console.log('Store =>', storevalues);
            dataList.push({
                'fieldlabel' : 'Store',
                'fieldvalue' : storevalues[0].get('name')
            });
            
            // Date
            var datevalues = this.getEyetestDateForm().getValues();
            console.log('Date =>', datevalues);
            dataList.push({
                'fieldlabel' : 'Apointment Date',
                'fieldvalue' : datevalues.date
            });            
            dataList.push({
                'fieldlabel' : 'Apointment Time',
                'fieldvalue' : datevalues.time
            });            
                                                         
            // User Detail
            var detailValues = this.getEyetestDetailForm().getValues();
            console.log('Deatul =>', detailValues);
            
	        for(var fieldName in detailValues) {
	        	
	        	var field = this.getEyetestDetailForm().getFields(fieldName);
	        		        	
                var value = detailValues[fieldName];
                if(value == "0") {
                	value = "";
                }
                dataList.push({
                	'fieldlabel' : field.getLabel(),
                	'fieldvalue' : value
                });
            }
            
            var data = {items:dataList};
            
            console.log(data);
            Ext.getCmp('eyetest_confirm').setData(data);
        }
        
        
/*        
        if(this.getEyeTestView().getItemCount() == index) {
            this.getNextBtn().setHidden(true);
        }
*/        
        this.getEyeTestView().getLayout().setAnimation({type:'slide', direction: 'left'});
        this.getEyeTestView().setActiveItem(index - 1);
        this.setIndex(index);
        
        this.getPrevBtn().setHidden(false);
    },
    
    onPrevTap: function() {
        var index = this.getIndex();
        console.log(index);
        index--;
          
        if(index == 1) {
            this.getPrevBtn().setHidden(true);
        }
        this.getEyeTestView().getLayout().setAnimation({type:'slide', direction: 'right'});
        this.getEyeTestView().setActiveItem(index - 1);
        this.setIndex(index);
        
        //this.getNextBtn().setHidden(false);
    },
    
    onStoreSearchTap: function(storeName, keyword) {
    	if(!keyword) {
    	   keyword = this.getEyetestStoreForm().getValues().keyword;
    	}
        console.log('keyword = ' + keyword);
        
        this.getEyetestStoreList().getStore().filter('eyetestable', '1');
        this.getEyetestStoreList().refresh();
        
        if(!keyword) {
            this.getEyetestStoreList().getStore().getProxy().setExtraParams({'mobile':1})        
            //Ext.Viewport.mask();
            
            this.getEyetestStoreList().getStore().load({
               callback : function(records, operation, success) {
                   //Ext.Viewport.unmask();
                   console.log('loadStore => ', records);
                   
                   if(storeName) {
                   	    this.selectStore(storeName, records);
                   }           
                                      
                   var eyetestStoreFormScroller = this.getEyetestStoreForm().getScrollable().getScroller();
                   setTimeout(
                        function() {
                            eyetestStoreFormScroller.scrollTo(0, 190, true);
                        }
                        ,300
                   );
                   
                   //this.getEyetestStoreForm().getScrollable().getScroller().scrollToEnd();
               },
               scope: this
            });
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
        
        var eyetestStoreFormScroller = this.getEyetestStoreForm().getScrollable().getScroller();
        
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
            
            _this.getEyetestStoreList().getStore().getProxy().setExtraParams(extraParams)        
            //Ext.Viewport.mask();
            _this.getEyetestStoreList().getStore().load({
               callback : function(records, operation, success) {
                   //Ext.Viewport.unmask();
                   console.log('loadStore => ', records);
                   if(storeName) {
                        _this.selectStore(storeName, records);
                   }
                   setTimeout(
                        function() {
                            eyetestStoreFormScroller.scrollTo(0, 190, true);
                        }
                        ,1000
                   );                   
               },
               scope: this
            });            
        });        
    },
    
    onEyetestConfirm : function() {
    	
    	var params = {};
    	
        var testvalues = this.getEyetestAppForm().getValues();
        console.log(testvalues);
        params['test_type'] = testvalues.test_type;
        
        var storevalues = this.getEyetestStoreList().getSelection();
        console.log(storevalues);
        params['store_id'] = storevalues[0].get('id_store');
        params['store_name'] = storevalues[0].get('name');
                
        var datevalues = this.getEyetestDateForm().getValues();
        console.log(datevalues);
        params['date'] = datevalues.date;
        params['time'] = datevalues.time;
        
        var detailValues = this.getEyetestDetailForm().getValues();
        console.log(detailValues);
        params['title'] = detailValues.title;
        params['first_name'] = detailValues.first_name;
        params['last_name'] = detailValues.last_name;
        params['phone'] = detailValues.phone;
        params['email'] = detailValues.email;
        params['findus'] = detailValues.findus;
        params['comment'] = detailValues.comment;
        
        params['mobile'] = '1';
        
        console.log('EyeTest ==>', params);
               
        this.getEyeTestView().setMasked({
            xtype: 'loadmask',
            message: 'Sending...'
        });
        
        Ext.Ajax.request({
            url: Config.EYETEST_URL,
            method: 'POST',
            params: params,        
            success: function(response) {
                this.getEyeTestView().setMasked(false);
                this.onNextTap();
            },        
            failure: function(response) {
                this.getEyeTestView().setMasked(false);
                Ext.Msg.alert('Send Mail fail..');
            },
            callback: function(response) {
            	this.getEyeTestView().setMasked(false);                
            },
            scope: this
        });
/*        
        Ext.data.request({
            url: Config.EYETEST_URL,
            callbackKey: 'serverKey',
            params: params,
            success: function(result, request) {
                this.getEyeTestView().setMasked(false);                       
                
                this.onNextTap();
            },
            failure : function() {
            	this.getEyeTestView().setMasked(false);
            	Ext.Msg.alert('Send Mail fail..');
            },
            scope: this
        });
*/        
    },
    
    selectStore: function(storeName, records) {    	               
       for(index = 0; index < records.length; index++) {
            if(storeName == records[index].get('name')) {
            	this.getEyetestStoreList().select(records[index]);            	         
            	break;
            }
       }
    },
    
    searchStore: function(storeName, keyword) {
    	this.setIndex(1);
    	this.getEyeTestView().setActiveItem(0);    	
        var field = Ext.getCmp('eyetest_store_keyword');
        console.log('field =>', field);
        
        field.setValue(keyword);        
        this.onStoreSearchTap(storeName, keyword);
    },
    
    initEyeTestDate: function() {
    	var dateField = this.getEyetestDateField();
        Ext.data.JsonP.request({
            url: Config.STORE_URL,
            callbackKey: 'serverKey',
            params: {                
                mobile: 1,
                cmd: 'date'
            },
            success: function(result, request) {
                console.log('EyeTest Date =>', result.items);
                this.setEyeTestDate(result.items);
                
                var options = [];
                
                for(index = 0; index < result.items.length; index++) {
                	var item = result.items[index];
                	for(week in item) {
                	   var text = item[week] + "("+week+")";
                	   options.push(
                           {
                               'text' : text,
                               'value': text,
                               'week' : week
                           }
                       );
                	}
                }
                console.log('EyeTest Date options =>', options);                
                this.getEyetestDateField().setOptions(options);
            },
            scope: this
        });
    },
    
    setDateTime: function(week) {    	
    	if(!week) {
        	var record = this.getEyetestDateField().getRecord();
            console.log('EyetestDateField.getRecord() =>', record);
            if(record) {
               week = record.raw.week;
            }
    	}
    	
    	this.getEyetestTimeField().setOptions([]);
    	
    	 var storevalues = this.getEyetestStoreList().getSelection();
    	 if(storevalues.length == 0) {
    	 	return;
    	 }
    	 var times = storevalues[0].get('times');    	 
    	 var timeList = times[week];
    	 if(!timeList) {
    	 	return;
    	 }    	 
    	 var options = [];
    	 for(index = 0; timeList.length > index; index++) {
    	   	var text = timeList[index];
            options.push(
               {
                   'text' : text,
                   'value': text
               }
            );
    	 }    	 
    	 console.log('EyeTest Time options =>', options);                
         this.getEyetestTimeField().setOptions(options);
    }
});




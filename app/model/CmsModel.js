Ext.define(Config.PKG+'.model.CmsModel', {
	extend: 'Ext.data.Model',
	config: {
		fields: ['id_cms' ,'id_cms_category', 'position', 'meta_title', 'content', 'create_date']
	}		
});
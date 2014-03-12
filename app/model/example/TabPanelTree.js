Ext.define('extUI.model.example.TabPanelTree', {
    extend: 'Ext.data.Model',

    fields: [
	    'root',
	    'text',
	    'leaf',
	    'expanded',
	    'children',
	    'menuId'
    ]
});
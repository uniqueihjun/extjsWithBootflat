Ext.define('extUI.model.menu', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'menuId', mapping: 'menuId'
    },{
        name: 'name', mapping: 'name'
    },{
    	name: 'child', mapping: 'child'
    }]
});
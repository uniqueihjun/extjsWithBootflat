Ext.define('extUI.model.Example', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'listId', mapping: 'listId'
    },{
        name: 'name', mapping: 'name'
    },{
    	name: 'child', mapping: 'child'
    }]
});
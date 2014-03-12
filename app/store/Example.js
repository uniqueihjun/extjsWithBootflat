Ext.define('extUI.store.Example', {
    extend: 'Ext.data.Store',
    model: 'extUI.model.Example',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'resources/example.json',
        headers: { 'Accept': 'application/json'	},	
        reader: {             
            root: 'data'
        } 
	}
});

Ext.define('extUI.store.menu', {
    extend: 'Ext.data.Store',
    model: 'extUI.model.menu',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'resources/menu.json',
        headers: { 'Accept': 'application/json'	},	
        reader: {             
            root: 'data'
        } 
	}
});

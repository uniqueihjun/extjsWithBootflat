Ext.define('extUI.store.example.TabPanelTree', {
    extend: 'Ext.data.TreeStore',
    model: 'extUI.model.example.TabPanelTree',
    autoLoad: false,
    proxy: {
        type: 'ajax',
        method: 'GET',
        url: '/resources/tabpanel.json',
        headers: {
        	'Accept': 'application/json'
        }
	},
	root: {
		text: 'TabPanel',
		expanded: true
	}
});

Ext.define('extUI.view.example.TabPanel', {
	extend: 'extUI.panel.Panel',
	alias: 'widget.exampletabpanel',
	layout: {
		type: 'border'
	},
	defaults: {
		border: 0
	},
	items: [{
		xtype: 'treepanel',
		region: 'west',
		itemId: 'tree',
		title: 'Tree',
		width: 200,
		split: true,
		rootVisible: false,
		store: 'example.TabPanelTree'
	},{
		xtype: 'tabpanel',
		region: 'center',
		title: 'Tab',
		itemId: 'tab'
	}]
});
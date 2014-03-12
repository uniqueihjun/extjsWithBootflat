Ext.define('extUI.view.example.Border', {
	extend: 'extUI.panel.Panel',
	alias: 'widget.exampleborder',
	
	layout: {
		type: 'border'
	},
	defaults: {
		border: 0
	},
	items: [{
		xtype: 'panel',
		region: 'center',
		layout : 'border',
		items: [{
			xtype: 'panel',
			region: 'north',
			title: 'north',
			split: true,
			height: 160
		},{
			xtype: 'panel',
			region: 'center',
			title: 'center',
			flex: 1
		},{
			xtype: 'panel',
			region: 'west',
			title: 'west',
			split: true,
			width: 160
		},{
			xtype: 'panel',
			region: 'east',
			title: 'east',
			split: true,
			width: 160
		},{
			xtype: 'panel',
			region: 'south',
			title: 'south',
			split: true,
			height: 160
		}]
	}]
});
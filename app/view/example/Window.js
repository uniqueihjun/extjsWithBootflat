Ext.define('extUI.view.example.Window', {
	extend: 'extUI.panel.Panel',
	alias: 'widget.examplewindow',
	layout: {
		type: 'anchor'
	},
	defaults: {
		border: 0
	},
	items: [{
		xtype: 'form',
		layout: {
			type: 'table',
			columns: 4
		},
		defaults: {
            hideLabel: true
		},
		defaultType: 'tablelabel',
		items: [{
			text: 'Basic window'
		},{
			xtype: 'button',
			text: 'Open',
			itemId: 'btnBasic'
		},{
			text: 'Modal window'
		},{
			xtype: 'button',
			text: 'Open',
			itemId: 'btnModal'
		},{
			text: 'MinMax window'
		},{
			xtype: 'button',
			text: 'Open',
			itemId: 'btnMinMax'
		},{
			text: 'Toolbar window'
		},{
			xtype: 'button',
			text: 'Open',
			itemId: 'btnToolbar'
		}]
	}]
});
Ext.define('extUI.view.example.Button', {
	extend: 'extUI.panel.Panel',
	alias: 'widget.examplebutton',
	layout: {
		type: 'anchor'
	},
	defaults: {
		border: 0
	},
	items: [{
		xtype: 'component',
		html: '<h3>Normal button</h3>'
	},{
		xtype: 'form',
		layout: {
			type: 'table',
			columns: 2
		},
		defaults: {
            hideLabel: true
		},
		defaultType: 'tablelabel',
		items: [{
			text: 'Text only'
		},{
			xtype: 'fieldcontainer',
			fieldLabel: 'Text only',
			width: '100%',
			defaults: {
				margin: 10
			},
			layout: {
				type: 'hbox'
			},
			items: [{
				xtype: 'button',
				scale: 'small',
				text: 'Small'
			},{
				xtype: 'button',
				scale: 'medium',
				text: 'Medium'
			},{
				xtype: 'button',
				scale: 'large',
				text: 'Large'
			}]
		},{
			text: 'Icon only'
		},{
			xtype: 'fieldcontainer',
			width: '100%',
			defaults: {
				margin: 10
			},
			layout: {
				type: 'hbox'
			},
			items: [{
				xtype: 'button',
				scale: 'small',
				iconCls: 'icon-small'
			},{
				xtype: 'button',
				scale: 'medium',
				iconCls: 'icon-medium'
			},{
				xtype: 'button',
				scale: 'large',
				iconCls: 'icon-large'
			}]
		},{
			text: 'Icon and text(top)'
		},{
			xtype: 'fieldcontainer',
			width: '100%',
			defaults: {
				margin: 10,
				iconAlign: 'top'
			},
			layout: {
				type: 'hbox'
			},
			items: [{
				xtype: 'button',
				scale: 'small',
				iconCls: 'icon-small',
				text: 'small'
			},{
				xtype: 'button',
				scale: 'medium',
				iconCls: 'icon-medium',
				text: 'medium'
			},{
				xtype: 'button',
				scale: 'large',
				iconCls: 'icon-large',
				text: 'large'
			}]
		},{
			text: 'Icon and text(right)'
		},{
			xtype: 'fieldcontainer',
			width: '100%',
			defaults: {
				margin: 10,
				iconAlign: 'right'
			},
			layout: {
				type: 'hbox'
			},
			items: [{
				xtype: 'button',
				scale: 'small',
				iconCls: 'icon-small',
				text: 'small'
			},{
				xtype: 'button',
				scale: 'medium',
				iconCls: 'icon-medium',
				text: 'medium'
			},{
				xtype: 'button',
				scale: 'large',
				iconCls: 'icon-large',
				text: 'large'
			}]
		},{
			text: 'Icon and text(bottom)'
		},{
			xtype: 'fieldcontainer',
			width: '100%',
			defaults: {
				margin: 10,
				iconAlign: 'bottom'
			},
			layout: {
				type: 'hbox'
			},
			items: [{
				xtype: 'button',
				scale: 'small',
				iconCls: 'icon-small',
				text: 'small'
			},{
				xtype: 'button',
				scale: 'medium',
				iconCls: 'icon-medium',
				text: 'medium'
			},{
				xtype: 'button',
				scale: 'large',
				iconCls: 'icon-large',
				text: 'large'
			}]
		},{
			text: 'Icon and text(left)'
		},{
			xtype: 'fieldcontainer',
			width: '100%',
			defaults: {
				margin: 10,
				iconAlign: 'left'
			},
			layout: {
				type: 'hbox'
			},
			items: [{
				xtype: 'button',
				scale: 'small',
				iconCls: 'icon-small',
				text: 'small'
			},{
				xtype: 'button',
				scale: 'medium',
				iconCls: 'icon-medium',
				text: 'medium'
			},{
				xtype: 'button',
				scale: 'large',
				iconCls: 'icon-large',
				text: 'large'
			}]
		}]
	}]
});
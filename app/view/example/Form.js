Ext.define('extUI.view.example.Form', {
	extend: 'extUI.panel.Panel',
	alias: 'widget.exampleform',
	
	layout: {
		type: 'anchor'
	},
	defaults: {
		border: 0
	},
	items: [{
		xtype: 'component',
		html: '<h4>Table layout</h4>'
	},{
		xtype: 'form',
		layout: {
			type: 'table',
			columns: 6	
		},
		defaults: {
            hideLabel: true
		},
		defaultType: 'tablelabel',
		items: [{
			text: 'Checkbox'
		},{
			xtype: 'checkbox',
			boxLabel: 'Checkbox'
		},{
			text: 'Combobox'
		},{
			xtype: 'combo',
			queryMode: 'local',
			displayField: 'name',
			valueField: 'abbr',
			store:  Ext.create('Ext.data.Store', {
				fields: ['abbr', 'name'],
				data : [
					{"abbr":"AL", "name":"Alabama"},
					{"abbr":"AK", "name":"Alaska"},
					{"abbr":"AZ", "name":"Arizona"}
				]
			})
		},{
			text: 'Datefield'
		},{
			xtype: 'datefield'
		},{
			text: 'Displayfield'
		},{
			xtype: 'displayfield',
			value: 'displayfield'
		},{
			text: 'Numberfield'
		},{
			xtype: 'numberfield'
		},{
			text: 'Radio'
		},{
			xtype: 'fieldcontainer',
			defaultType: 'radiofield',
			defaults: {
                flex: 1
            },
			layout: 'hbox',
			width: '100%',
			items: [{
				boxLabel  : 'M',
				name      : 'size',
				inputValue: 'm',
				id        : 'radio1'
			},{
				boxLabel  : 'L',
				name      : 'size',
				inputValue: 'l',
				id        : 'radio2'
			},{
				boxLabel  : 'XL',
				name      : 'size',
				inputValue: 'xl',
				id        : 'radio3'
			}]
		},{
			text: 'Spinnerfield'
		},{
			xtype: 'spinnerfield'
		},{
			text: 'Textfield'
		},{
			xtype: 'textfield'
		},{
			text: 'Time'
		},{
			xtype: 'timefield'
		}]
	},{
		xtype: 'component',
		html: '<h4>Complex table layout</h4>',
		padding: '20 0 0 0'
	},{
		xtype: 'form',
		itemId: 'frmComplex',
		layout: {
			type: 'table',
			columns: 6	
		},
		defaults: {
            hideLabel: true
		},
		defaultType: 'tablelabel',
		items: [{
			text: 'Rich text'
		},{
			xtype: 'textfield',
			colspan: 5,
			width: '100%'
		},{
			text: 'Text'
		},{
			xtype: 'textfield'
		},{
			text: 'Date'
		},{
			xtype: 'fieldcontainer',
			colspan: 3,
			layout: 'hbox',
			width: '100%',
			items: [{
				xtype: 'datefield'
			},{
				xtype: 'displayfield',
				padding: '0 5 0 5',
				value: '~'
			},{
				xtype: 'datefield'
			}]
		},{
			text: 'Checkbox'
		},{
			xtype: 'checkbox',
			boxLabel: 'Checkbox'
		},{
			text: 'Combobox'
		},{
			xtype: 'combo',
			queryMode: 'local',
			displayField: 'name',
			valueField: 'abbr',
			store:  Ext.create('Ext.data.Store', {
				fields: ['abbr', 'name'],
				data : [
					{"abbr":"AL", "name":"Alabama"},
					{"abbr":"AK", "name":"Alaska"},
					{"abbr":"AZ", "name":"Arizona"}
				]
			})
		},{
			text: 'Spinnerfield'
		},{
			xtype: 'spinnerfield'
		}]
	}]
});
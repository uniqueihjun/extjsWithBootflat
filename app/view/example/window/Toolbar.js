Ext.define('extUI.view.example.window.Toolbar', {
	extend: 'Ext.window.Window',
	alias: 'widget.windowtoolbar',
	defaults: {
		border: 0
	},
	dockedItems: [{
	    xtype: 'toolbar',
	    dock: 'top',
	    items: [{
			xtype: 'button',
			text: 'Close'
		}]
	},{
	    xtype: 'toolbar',
	    dock: 'bottom',
	    items: ['->',{
			xtype: 'button',
			text: 'Close'
		}]
	}]
});
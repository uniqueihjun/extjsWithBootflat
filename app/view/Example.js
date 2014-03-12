Ext.define('extUI.view.Example', {
	extend: 'Ext.container.Container',
	alias: 'widget.example',
	layout: {
		type: 'border'
	},
	style: {
		backgroundColor: '#ffffff'
	},
	items: [{
		xtype: 'container',
		region: 'west',
		layout: 'fit',
		width: 200,
		items: [{
			xtype: 'dataview',
			margin: '10 15 0 10',
			overflowY: 'auto',
			singleSelect: true,
			store: 'Example',
			tpl: [
				'<ul class="nav nav-list nav-list-panel">',
					'<li class="nav-header">List header</li>',
					'<tpl for=".">',
						'<tpl if="child == 0">',
							'<li class="list-item"><a id="{listId}" class="listItem" href="#">{name}</a></li>',					
						'</tpl>',
						'<tpl if="child != 0">',
							'<li>',
								'<p class="nav-parent">{name}</p>',
								'<ul class="nav-list-sub">',
									'<tpl for="child">',
										'<li><a id="{listId}" class="listItem" href="#">{name}</a><li>',
									'</tpl>',
								'</ul>',
							'</li>',
						'</tpl>',
					'</tpl>',
				'</ul>'
			]
		}]
	},{
		xtype: 'panel',
		region: 'center',
		border: 0,
		flex: 1,
		itemId: 'centerView',
		layout: 'fit'
	}]
});
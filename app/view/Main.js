Ext.define('extUI.view.Main', {
    extend: 'Ext.container.Container',
    alias: 'widget.mainView',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },
    style: {
    	backgroundColor: '#ffffff'
    },
    defaults: {
    	border: 0
    },
    items: [{
    	xtype: 'dataview',
    	region: 'north',
    	height: 50,
    	itemId: 'navbar',
    	itemSelector: '.menu-item',
    	margin: '0 0 15 0',
    	overItemCls: 'menu-item-hover',
    	singleSelect: true,
    	store: 'menu',
    	trackOver: true,
    	width: '100%',
		tpl: [
			'<div style="background-color:#3da8e3">',
				'<div style="margin-left:auto;margin-right:auto;width:1270px;">',
					'<nav id="navbarNav" class="navbar navbar-default navbar-square" role="navigation">',
						'<div class="navbar-header">',
							'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">',
								'<span class="sr-only">Toggle navigation</span>',
								'<span class="icon-bar"></span>',
								'<span class="icon-bar"></span>',
								'<span class="icon-bar"></span>',
							'</button>',
							'<a id="title" class="navbar-brand" href="#">Title</a>',
						'</div>',
						'<div class="collapse navbar-collapse navbar-ex1-collapse">',
								'<ul class="nav navbar-nav">',
									'<tpl for=".">',
										'<tpl if="child == 0">',
											'<li class="menu-item"><a id="{menuId}" class="menuItem" href="#">{name}</a></li>',
										'</tpl>',
										'<tpl if="child != 0">',
											'<li class="dropdown">',
												'<a href="#" class="dropdown-toggle" data-toggle="dropdown">{name}<b class="caret"></b></a>',
												'<ul class="dropdown-menu">',
													'<tpl for="child">',
														'<li><a id="{menuId}" class="menuItem" href="#">{name}</a></li>',
													'</tpl>',
												'</ul>',
											'</li>',
										'</tpl>',
									'</tpl>',
								'</ul>',
							'<ul class="nav navbar-nav navbar-right">',
								'<form class="navbar-form navbar-left" role="search">',
									'<div class="form-group form-search">',
										'<input type="text" class="form-control search-query" placeholder="Search">',
									'</div>',
								'</form>',
							'</ul>',
						'</div>',
					'</nav>',
				'</div>',
			'</div>'
		]
    },{
    	xtype: 'panel',
        region: 'center',
        itemId: 'centerView',
        layout: 'fit'
    }]
});
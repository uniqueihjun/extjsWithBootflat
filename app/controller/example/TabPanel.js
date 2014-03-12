Ext.define('extUI.controller.example.TabPanel', {
    extend: 'Ext.app.Controller',

	models: ['example.TabPanelTree'],

	stores: ['example.TabPanelTree'],

    views: ['example.TabPanel'],

    refs: [{
    	ref: 'exampletabpanel', selector: 'exampletabpanel'
    },{
	    ref: 'tab', selector: 'exampletabpanel #tab'
    }],

    onAfterrender: function() {
    	var me = this;

	    me.getExampleTabPanelTreeStore().load();
    },

	onTreeSelect: function(tree, record, index) {
		var me = this;
		var tabs = me.getTab().items.items;
		var menuId = record.get('menuId');
		var i;

		for(i=0;i<tabs.length;i++) {
			if (tabs[i].menuId == menuId) {
				me.getTab().setActiveTab(i);
				return;
			}
		}

		var panel = Ext.create('extUI.view.' + menuId, {
			title: record.get('text'),
			menuId: menuId
		});

		var newTab = me.getTab().add(panel);

		me.getTab().setActiveTab(newTab);
	},

	onTabChange: function(tabPanel, newCard, oldCard) {

	},

    init: function() {
    	this.control({
			'exampletabpanel': {
				afterrender: this.onAfterrender
			},
		    'exampletabpanel #tree': {
			    select: this.onTreeSelect
		    },
		    'exampletabpanel #tab': {
			    tabchange: this.onTabChange
		    }
    	});
    }
});

Ext.define('extUI.controller.Main', {
    extend: 'Ext.app.Controller',
    
    //views: ['DefaultView'],
    
    stores: ['menu'],
    
    models: ['menu'],
    
    refs: [{
    	ref: 'mainView', selector: 'mainView'
    },{
    	ref: 'navbar', selector: 'mainView #navbar'
    },{
    	ref: 'centerView', selector: 'mainView #centerView'
    }],
    
    onAfterrender: function() {
    	var me = this;
    	
    	me.getMenuStore().load();
    	
    	var defaultView = Ext.create('extUI.view.DefaultView');
    	
    	me.getCenterView().add(defaultView);
    	
    	setTimeout(function() {
    		var i, id, item, length;
			var title = Ext.get('title');
			
			title.on('click', function() {
				me.getMainView().fireEvent('titleClick');
			});
			
			var menuItem = $('.menuItem');

			length = menuItem.length;
			
			for(i=0; i<length; i++) {
				item = Ext.get(menuItem[i].id);
				item.on('click', function() {
					me.getMainView().fireEvent('menuItemClick', this);
				}); 
			}
    	}, 100);
    },
    
    onMenuItemClick: function(item) {
    	var me = this;
    	var menuId = item.id;
    	
    	setTimeout(function() {
	    	$("nav ul li").removeClass("active");
	    	$(".x-item-selected").addClass("active");
    	}, 100);
    	
    	if (menuId != 'Example') {
    		Ext.Msg.alert('click', menuId + ' Click!');
    		return;
    	}
    	
    	var viewPanel = Ext.create('extUI.view.' + menuId);
    	
    	me.getCenterView().removeAll();
    	me.getCenterView().add(viewPanel);
    	me.getCenterView().doLayout();
    },
    
    onTitleClick: function() {
    	var me = this;
    	
    	$("nav ul li").removeClass("active");
    	
    	me.getCenterView().removeAll();
    	
    	var defaultView = Ext.create('extUI.view.DefaultView');
    	
    	me.getCenterView().add(defaultView);
    },
    
    init: function() {
    	this.control({
			'mainView': {
				afterrender: this.onAfterrender,
				menuItemClick: this.onMenuItemClick,
				titleClick: this.onTitleClick
			}
    	});
    }
});

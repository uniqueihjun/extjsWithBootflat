Ext.define('extUI.controller.Example', {
    extend: 'Ext.app.Controller',
    
    views: ['Example'],
    
    stores: ['Example'],
    
    models: ['Example'],
    
    refs: [{
    	ref: 'example', selector: 'example'
    },{
    	ref: 'centerView', selector: 'example #centerView'
    }],
    
    onAfterrender: function() {
    	var me = this;
    	
    	me.getExampleStore().load();
    	
    	setTimeout(function() {
    		var i, id, item, length;
			
			var listItem = $('.listItem');

			length = listItem.length;
			
			for(i=0; i<length; i++) {
				item = Ext.get(listItem[i].id);
				item.on('click', function() {
					me.getExample().fireEvent('listItemClick', this);
				}); 
			}
    	}, 100);
    	
    },
    
    onListItemClick: function(item) {
    	var me = this;
    	
    	$("ul.nav-list li").removeClass("active");
    	$('#'+item.id).parent('li').addClass('active');
    	
    	var viewPanel = Ext.create('extUI.view.example.' + item.id);
    	
    	me.getCenterView().removeAll();
    	me.getCenterView().add(viewPanel);
    	me.getCenterView().doLayout();
    	
    	viewPanel.setHeader(item.id);
    }, 
    
    init: function() {
    	this.control({
			'example': {
				afterrender: this.onAfterrender,
				listItemClick: this.onListItemClick
			}
    	});
    }
});

Ext.define('extUI.controller.example.Button', {
    extend: 'Ext.app.Controller',
    
    views: ['example.Button'],
    
    refs: [{
    	ref: 'examplebutton', selector: 'examplebutton'
    }],
    
    onAfterrender: function() {
    	var me = this;
    },
    
    init: function() {
    	this.control({
			'examplebutton': {
				afterrender: this.onAfterrender
			}
    	});
    }
});
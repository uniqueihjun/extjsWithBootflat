Ext.define('extUI.controller.example.Border', {
    extend: 'Ext.app.Controller',
    
    views: ['example.Border'],
    
    refs: [{
    	ref: 'exampleborder', selector: 'exampleborder'
    }],
    
    onAfterrender: function() {
    	var me = this;
    },
    
    init: function() {
    	this.control({
			'exampleborder': {
				afterrender: this.onAfterrender
			}
    	});
    }
});

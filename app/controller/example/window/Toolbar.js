Ext.define('extUI.controller.example.window.Toolbar', {
    extend: 'Ext.app.Controller',
    
    views: ['example.window.Toolbar'],
    
    refs: [{
    	ref: 'windowtoolbar', selector: 'windowtoolbar'
    }],
    
    onButtonClick: function() {
    	var me = this;
    	
    	me.getWindowtoolbar().close();
    },
    
    onAfterrender: function() {
    	var me = this;

    },
    
    init: function() {
    	this.control({
			'windowtoolbar': {
				afterrender: this.onAfterrender
			},
			'windowtoolbar button': {
				click: this.onButtonClick
			}
    	});
    }
});

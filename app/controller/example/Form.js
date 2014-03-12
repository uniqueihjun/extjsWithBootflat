Ext.define('extUI.controller.example.Form', {
    extend: 'Ext.app.Controller',
    
    views: ['example.Form'],
    
    refs: [{
    	ref: 'exampleform', selector: 'exampleform'
    },{
    	ref: 'frmComplex', selector: 'exampleform #frmComplex'
    }],
    
    onAfterrender: function() {
    	var me = this;
    	
    	setComplexTable(me.getFrmComplex());
    },
    
    init: function() {
    	this.control({
			'exampleform': {
				afterrender: this.onAfterrender
			}
    	});
    }
});

Ext.define('extUI.controller.example.Window', {
    extend: 'Ext.app.Controller',
    
    views: ['example.Window'],
    
    refs: [{
    	ref: 'examplewindow', selector: 'examplewindow'
    }],
    
    onBtnBasicClick: function() {
    	Ext.create('Ext.window.Window',{
    		height: 400,
    		width: 400,
    		title: 'Basic window'
    	}).show();
    },
    
    onBtnModalClick: function() {
    	Ext.create('Ext.window.Window',{
    		height: 400,
    		width: 400,
    		modal: true,
    		title: 'Modal window'
    	}).show();
    },
    
    onBtnMinMaxClick: function() {
    	Ext.create('Ext.window.Window',{
    		height: 400,
    		width: 400,
    		modal: true,
    		maximizable: true,
    		title: 'Min max window'
    	}).show();
    },
    
    onBtnToolbarClick: function() {
    	Ext.create('extUI.view.example.window.Toolbar', {
    		height: 500,
    		width: 500,
    		modal: true,
    		title: 'Toolbar window'
    	}).show();
    },
    
    onAfterrender: function() {
    	var me = this;

    },
    
    init: function() {
    	this.control({
			'examplewindow': {
				afterrender: this.onAfterrender
			},
			'examplewindow #btnBasic': {
				click: this.onBtnBasicClick
			},
			'examplewindow #btnModal': {
				click: this.onBtnModalClick
			},
			'examplewindow #btnMinMax': {
				click: this.onBtnMinMaxClick
			},
			'examplewindow #btnToolbar': {
				click: this.onBtnToolbarClick
			}
    	});
    }
});

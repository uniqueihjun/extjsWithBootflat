Ext.define('extUI.controller.example.Grid', {
    extend: 'Ext.app.Controller',
    
    views: ['example.Grid'],
    
    stores: ['example.GridCombo', 'example.Grid'],
    
    models: ['example.Grid'],
    
    refs: [{
    	ref: 'examplegrid', selector: 'examplegrid'
    },{
    	ref: 'frmSearch', selector: 'examplegrid #frmSearch'
    }],
    
    onBtnSearchClick: function() {
    	var me = this;
    	
    	var values = me.getFrmSearch().getForm().getValues();
    	var url = 'http://openapi.seoul.go.kr:8088/sample/json/DailyWeatherStation/1/5/{0}/{1}/';
    	
    	url = Ext.String.format(url, values.SAWS_OBS_TM.replace(/-/gi, ''), values.STN_NM);
    	
		me.getExampleGridStore().proxy.url = url;
		me.getExampleGridStore().load();		
    },
    
    onAfterrender: function() {
    	var me = this;
    },
    
    init: function() {
    	this.control({
			'examplegrid': {
				afterrender: this.onAfterrender
			},
			'examplegrid #btnSearch': {
				click: this.onBtnSearchClick
			}
    	});
    }
});

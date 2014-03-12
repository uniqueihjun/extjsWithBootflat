Ext.define('extUI.panel.Panel', {
    extend: 'Ext.panel.Panel',
    border: 0,
    margin: '0 25 0 10',
	bodyStyle: {
	    background: '#ffffff'
	},
    setHeader: function(title) {
    	var header;
    	
    	if (this.layout.type == 'border') {
	    	header = Ext.create('Ext.Component', {
	    		region: 'north',
	    		height: 70,
	    		html: [
	    			'<div style="display: inline-block;"><h2>' + title + '</h2></div>',
	    			'<div style="display: inline-block;position:absolute;right:0px;top:30px;"><ol class="breadcrumb"><li class="active"><span>Home</span></li></ol></div>',
	    		]
	    	});
	    	
	    	this.add(header);
    	}
    	else {
	    	header = Ext.create('Ext.Component', {
	    		html: [
	    			'<div style="display: inline-block;"><h2>' + title + '</h2></div>',
	    			'<div style="display: inline-block;position:absolute;right:0px;top:30px;"><ol class="breadcrumb"><li class="active"><span>Home</span></li></ol></div>'
	    		]
	    	});
	    	
	    	this.insert(0, header);
    	}
    }
});

Ext.define('extUI.form.Label', {
    extend: 'Ext.form.Label',
    alias: 'widget.tablelabel',
	cellCls: 'table-layout-label'
});
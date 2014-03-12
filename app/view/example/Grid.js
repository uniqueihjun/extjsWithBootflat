Ext.define('extUI.view.example.Grid', {
	extend: 'extUI.panel.Panel',
	alias: 'widget.examplegrid',
	
	layout: {
		type: 'border'
	},
	defaults: {
		border: 0
	},
	items: [{
		xtype: 'panel',
		region: 'center',
		layout : 'border',
		defaults: {
			border: 0
		},
		bodyStyle : {
				background: '#ffffff'
		},
		items: [{
			xtype: 'container',
			region: 'north',
			layout: 'anchor',
			heigth: 100,
			items: [{
				xtype: 'container',
				layout: {
					type: 'hbox',
					pack: 'end'
				},
				style: {
					background: '#ffffff'
				},
				padding: '0 0 5 0',
				items: [{
					xtype: 'button',
					text: '조회',
					itemId: 'btnSearch'
				}]
			},{
				xtype: 'form',
				itemId: 'frmSearch',
				border: 0,
				layout: {
					type: 'table',
					columns: 4	
				},
				defaults: {
		            hideLabel: true
				},
				defaultType: 'tablelabel',
				items: [{
					text: '관측일자'
				},{
					xtype: 'datefield',
					name: 'SAWS_OBS_TM',
					value: new Date(),
					maxValue: new Date(),
					format: 'Y-m-d'
				},{
					text: '지점명'
				},{
					xtype: 'combobox',
					name: 'STN_NM',
					queryMode: 'local',
					displayField: 'name',
    				valueField: 'name',
    				editable: false,
    				store: 'example.GridCombo'
				}]
			},{
				xtype: 'component',
				html: '<div style="color:#ff0000;">아래에 사용된 데이터는 서울시 열린 데이터 광장에서 가져온 데이터 입니다. http://data.seoul.go.kr/</div>',
				padding: '10 0 0 0'
			}]
		},{
			xtype: 'grid',
			region: 'center',
			padding: '10 0 15 0',
			flex: 1,
			border: 1,
			store: 'example.Grid',
			columnLines: true,
			columns: [{
				text: '관측일자',
				dataIndex: 'SAWS_OBS_TM',
				align: 'center',
				flex: 1
			},{
				text: '지점명',
				dataIndex: 'STN_NM',
				align: 'center',
				flex: 1
			},{
				text: '평균기온(℃)',
				dataIndex: 'SAWS_TA_AVG',
				align: 'center'
			},{
				text: '최저기온(℃)',
				dataIndex: 'SAWS_TA_MIN',
				align: 'center'
			},{
				text: '최대기온(℃)',
				dataIndex: 'SAWS_TA_MAX',
				align: 'center'
			},{
				text: '평균습도(%)',
				dataIndex: 'SAWS_HD_AVG',
				align: 'center'
			},{
				text: '최저습도(%)',
				dataIndex: 'SAWS_HD_MIN',
				align: 'center'
			},{
				text: '최고습도(%)',
				dataIndex: 'SAWS_HD_MAX',
				align: 'center'
			},{
				text: '평균풍속(m/s)',
				dataIndex: 'SAWS_WS_AVG',
				align: 'center'
			},{
				text: '최대풍속(m/s)',
				dataIndex: 'SAWS_WS_MAX',
				align: 'center'
			},{
				text: '강수량(mm)',
				dataIndex: 'SAWS_RN_SUM',
				align: 'center'
			}]
		}]
	}]
});
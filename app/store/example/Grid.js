Ext.define('extUI.store.example.Grid', {
    extend: 'Ext.data.Store',
    model: 'extUI.model.example.Grid',
    autoLoad: false,
    proxy: {
        type: 'jsonp',
        method: 'GET',
        url: 'http://openapi.seoul.go.kr:8088/sample/json/DailyWeatherStation/1/5/',
        headers: { 
        	'Accept': 'application/json'
        },	
        reader: {
        	type: 'json',
            root: 'DailyWeatherStation.row'
        },
		limitParam: undefined,
		pageParam: undefined,
		startParam: undefined,
		noCache: false
	}
});

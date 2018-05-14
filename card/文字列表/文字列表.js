(function (exports) {
	//使用pageMeta获取模型，减少一次网络请求
	// var hqjxjzlbgsj = new window["tg-turing"].DataSourceManager("hqjxjzlbgsj", pageMeta);
	var hqjxjzlbgsj = new window["tg-turing"].DataSourceManager("hqjxjzlbgsj", "http://res.wisedu.com/FS/mockdata/hqjxjzlbgsj_model.json");
	window["tg-turing"].DataSourceManager.set(hqjxjzlbgsj);

	exports['文字列表'] = {
		template: '<tg-listview :datasource="datasource" bordered autoReadyDataBind>' +
		    '<template slot="itemTemplate" slot-scope="props">' +
		        '<tg-div class="tg-col-6">' +
		            '<tg-text class="tg-primary-1">数据内容{{props.data.JXJLX_DISPLAY}}</tg-text>' +
		            '<tg-text class="tg-grey-3">行标识{{props.index}}</tg-text>' +
		        '</tg-div>' +
		        '<tg-div class="tg-col-3">' +
		            '<tg-text><Badge count="new" class-name="tg-primary-1 tg-bg-white tg-br-primary-1"></Badge></tg-text>' +
		        '</tg-div>' +
		        '<tg-div class="tg-col-3">' +
		            '<tg-text><tg-linkbutton>Text</tg-linkbutton></tg-text>' +
		        '</tg-div>' +
		    '</template>' +
		'</tg-listview>',
		// app initial state
		data: function() {
			return {
				pagesize:20,
				datasource:hqjxjzlbgsj
			}
		},
		// props: [
		// 	'prop1',
		// 	'prop2',
		// 	'prop3'
		// ],
	}
})(window.turingform);
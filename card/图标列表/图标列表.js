(function (exports) {
	//使用pageMeta获取模型，减少一次网络请求
	// var hqjxjzlbgsj = new window.turing.DataSource("hqjxjzlbgsj", pageMeta);
	var hqjxjzlbgsj = new window.turing.DataSource("hqjxjzlbgsj", "http://res.wisedu.com/FS/mockdata/hqjxjzlbgsj_model.json");
	window.turing.DataSource.set(hqjxjzlbgsj);

	exports['图标列表'] = {
		template: '<tg-listview :datasource="datasource" :grid="{gutter: 40}" @ready="init">' +
		    '<template slot="itemTemplate" slot-scope="props">' +
		        '<tg-div>' +
		            '<Icon type="stop" size="107"></Icon>' +
		        '</tg-div>' +
		        '<tg-div class="tg-text-center">' +
		            '<tg-text class="tg-primary-1">主标题{{props.data.JXJLX_DISPLAY}}</tg-text>' +
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
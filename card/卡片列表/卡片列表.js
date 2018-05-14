(function (exports) {
	//使用pageMeta获取模型，减少一次网络请求
	// var hqjxjzlbgsj = new window["tg-turing"].DataSourceManager("hqjxjzlbgsj", pageMeta);
	var hqjxjzlbgsj = new window["tg-turing"].DataSourceManager("hqjxjzlbgsj", "http://res.wisedu.com/FS/mockdata/hqjxjzlbgsj_model.json");
	window["tg-turing"].DataSourceManager.set(hqjxjzlbgsj);

	exports['卡片列表'] = {
		template: '<tg-listview :datasource="datasource" :grid="{gutter: 16, column: 3}" autoReadyDataBind>' +
		    '<template slot="itemTemplate" slot-scope="props">' +
		        '<Card style="width:100%">' +
		            '<p slot="title">' +
		                '<Icon type="ios-film-outline"></Icon>' +
		                '<tg-text class="tg-primary-1">主标题{{props.data.JXJLX_DISPLAY}}</tg-text>' +
		            '</p>' +
		            '<tg-text class="tg-grey-3">副标题{{props.index}}</tg-text>' +
		            '<tg-text><Badge count="new" class-name="tg-primary-1 tg-bg-white tg-br-primary-1"></Badge></tg-text>' +
		            '<tg-text><tg-linkbutton @click="sendTest">Text</tg-linkbutton></tg-text>' +
		        '</Card>' +
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
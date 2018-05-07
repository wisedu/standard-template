(function (exports) {
	var hqjxjzlbgsj = new window.turing.DataSource("hqjxjzlbgsj", pageMeta);
	window.turing.DataSource.set(hqjxjzlbgsj);

	exports['文字列表'] = {
		template: '<tg-listview ref="tglv" :datasource="datasource" :page-size="pagesize">'+
			'<template slot="itemTemplate" slot-scope="props">'+
				'<tg-div class="tg-row tg-br-b-grey-4 tg-p-8 tg-row-center">'+
					'<tg-div class="tg-col-6 tg-col-560-6">'+
						'<tg-text class="tg-primary-1">主标题{{props.index}}</tg-text>'+
						'<tg-text class="tg-grey-3">副标题{{props.index}}</tg-text>'+
					'</tg-div>'+
					'<tg-div class="tg-col-3 tg-col-560-6">'+
						'<tg-text><Badge count="new" class-name="tg-primary-1 tg-bg-white tg-br-primary-1"></Badge></tg-text>'+
					'</tg-div>'+
					'<tg-div class="tg-col-3 tg-col-560-hide">'+
						'<tg-text><tg-linkbutton @click="clickHandler">Text</tg-linkbutton></tg-text>'+
					'</tg-div>'+
				'</tg-div>'+
			'</template>'+
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
(function (exports) {
	exports['空模板'] = {
		template: '<div><button @click="sendTest">测试发请求数据</button></div>',
		// app initial state
		data: function() {
			return {

			}
		},
		// props: [
		// 	'prop1',
		// 	'prop2',
		// 	'prop3'
		// ],
		methods: {
			sendTest: function() {
				//这里只需要log即可，实现在Impl中实现
				console.log("sendTest")
			}
		}
	}
})(window.turningform);
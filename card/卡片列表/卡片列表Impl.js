(function (exports) {
	var ClassImpl = {
		methods: {
			sendTest: function () {
				var testDS = window.turing.DataSource.get("hqjxjzlbgsj");//get是从本地缓存中获取模型，不会重新构造对象
				// 发特殊请求的方式
				// emapDS.execute({url:"http://res.wisedu.com/fe_components/mock/table.json", method:"get"}).then(function(result){
				// 	console.log(result)
				// 	debugger
				// });
				testDS.execute(testDS.actions.find).then(function(result){
					console.log(result)
					debugger
				});

				testDS.findAll().then(function(result){
					console.log(result)
					debugger
				});
			}
		}
	}

	exports["卡片列表"].mixins = [ClassImpl]
})(window.turingform);

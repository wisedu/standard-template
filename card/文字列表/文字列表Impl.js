(function (exports) {
	var 文字列表Impl = {
		// methods that implement data logic.
		// note there's no DOM manipulation here at all.
		methods: {
			clickHandler: function () {
				var testDS = window.turing.DataSource.get("hqjxjzlbgsj");
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

	exports["文字列表"].mixins = [文字列表Impl]
})(window.turingform);

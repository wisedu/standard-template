(function (exports) {
	var testDS = window.turning.DataSourceFactory.create();
	testDS.load("./modules/aaa.do", "TABLE_QUERY")

	// 直接装载pageMeta的方法
	// var emapDS = window.turning.DataSourceFactory.create(pageMeta, "T_PXXX_XSJBXX_QUERY");

	var 空模板Impl = {
		// methods that implement data logic.
		// note there's no DOM manipulation here at all.
		methods: {
			sendTest: function () {
				// 发特殊请求的方式
				// emapDS.execute({url:"http://res.wisedu.com/fe_components/mock/table.json", method:"get"}).then(function(result){
				// 	console.log(result)
				// 	debugger
				// });
				testDS.execute(testDS.actions.find).then(function(result){
					console.log(result)
					debugger
				});
			}
		}
	}

	exports["空模板"].mixins = [空模板Impl]
})(window.turningform);

(function (exports) {
	var testDS = window.turning.DataSourceFactory.create();
	testDS.load("http://res.wisedu.com/fe_components/mock/page_model.json", "TABLE")

	// var emapDS = window.turning.DataSourceFactory.create(pageMeta, "T_PXXX_XSJBXX_QUERY");

	var 空模板Impl = {
		// methods that implement data logic.
		// note there's no DOM manipulation here at all.
		methods: {
			sendTest: function () {
				testDS.execute({url:"http://res.wisedu.com/fe_components/mock/table.json", method:"get"}).then(function(result){
					console.log(result)
					debugger
				});
				// emapDS.execute(emapDS.actions.find).then(function(result){
				// 	console.log(result)
				// 	debugger
				// });
			}
		}
	}

	exports["空模板"].mixins = [空模板Impl]
})(window.turningform);

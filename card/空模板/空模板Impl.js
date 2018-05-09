(function (exports) {
	var testDS = window.turing.DataAdapterFactory.create();
	testDS.load("http://res.wisedu.com/FS/mockdata/hqjxjzlbgsj_model.json", "hqjxjzlbgsj")

	var ClassImpl = {
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

				testDS.findAll().then(function(result){
					console.log(result)
					debugger
				});
			}
		}
	}

	exports["空模板"].mixins = [ClassImpl]
})(window.turingform);

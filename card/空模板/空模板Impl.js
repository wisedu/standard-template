(function (exports, turing) {
	var inst = new turing.DataAdapterFactory.create(pageMeta, "T_FUNA_USER_QUERY");

	var ClassImpl = {
		methods: {
			sendTest: function () {
				// 发特殊请求的方式
				// inst.execute({url:"http://res.wisedu.com/fe_components/mock/table.json", method:"get"}).then(function(result){
				// 	console.log(result)
				// 	debugger
				// });
				inst.execute(inst.actions.find).then(function(result){
					console.log(result)
					debugger
				});

				inst.findAll().then(function(result){
					console.log(result)
					debugger
				});
			}
		}
	}

	exports["空模板"].mixins = [ClassImpl]
})(window.turingform, window["tg-turing"]);

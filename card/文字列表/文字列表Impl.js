(function (exports, turing) {
	var inst = new turing.DataAdapterFactory.create(pageMeta, "T_FUNA_USER_QUERY");
	var ClassImpl = {
		data: function() {
			return {
				da:inst
			}
		},
		methods: {
			clickHandler: function () {
				// 发特殊请求的方式
				// emapDS.execute({url:"http://res.wisedu.com/fe_components/mock/table.json", method:"get"}).then(function(result){
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

	exports["文字列表"].mixins = [ClassImpl]
})(window.turingform, window["tg-turing"]);

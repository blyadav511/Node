"use strict";

let BaseController = require("./BaseController");
let TestModel = require("../models/TestModel");

class TestController {
	constructor(request){
		this.request = request;
	}

	test1(callback){
		const service = "TEST_1";
		let self = this;
		let req = this.request;
		console.log("-------: " + JSON.stringify(req.query));

		let testModel = new TestModel(req);
		testModel.test1(req.query, (err, res) => {
			console.log("err: " + err + "\n" + "res: " + res);
			return callback(null,{"a": "A"});
		});
	}
}

module.exports = TestController;
"use strict";

let BaseController = require("./BaseController");
let TestModel = require("../models/TestModel");
let lodash = require("lodash");

class TestController {
	constructor(request){
		this.request = request;
	}

	test1(callback){
		const service = "TEST_1";
		let self = this;
		let req = this.request;
		let name = lodash.get(req, "query.name", null);
		let age = lodash.get(req, "query.age", null);
		let cLass = lodash.get(req, "query.class", null);
		console.log("-------: " + JSON.stringify(req.query));
		
		let response = {
			"status" : "FAILURE",
			"status_code" : 500,
			"timestamp" : new Date().getTime()/1000
		};

		if(!name || !age || !cLass){
			response.reason = "Name, age or class is missing in Request";
			return callback(null, response);
		}
		let params = {
			"name" : name,
			"age" : age,
			"class" : cLass
		};
		let testModel = new TestModel(req);
		testModel.test1(params, (err, res) => {
			if(err != null){
				response.reason = "Db Error";
				return callback(null, response);
			}
			response.status = "SUCCESS";
			response.status_code = 200;
			return callback(null, response);
		});
	}
}

module.exports = TestController;
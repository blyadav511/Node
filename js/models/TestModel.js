"use strict";

let MySql = require("../connector/MySqlConnector");

class TestModel {
	constructor(request){
		this.request = request;
	}

	test1(params, callback){
		return MySql.getConnection("test", (err, connection) => {
			if(err){
				return callback(err);
			}
			connection.release();
			return callback(null, "got connected");
			console.log("herefdfjhdjhdjhjdh");
		});
	}
}

module.exports = TestModel;
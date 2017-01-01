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
			let query = "insert into student SET ?";
			connection.query(query, params, (err, res) => {
				connection.release();
				if(err !=null){
					console.log("-----err while inserting: " + JSON.stringify(err));
					return callback(err, null);
				}
				console.log("-----res while inserting: " + JSON.stringify(res));
				return callback(null, res);
			})		
		});
	}
}

module.exports = TestModel;
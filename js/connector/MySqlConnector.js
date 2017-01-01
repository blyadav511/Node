"use strict";

let mysql = require("mysql2");
let _  = require("underscore");

class MySqlConnector {

	static init(config){
		this.pools  = {};
		_.each(config, function(dbConfig, dbName) {
			this.pools[dbName] = MySqlConnector.createPool(dbConfig);
		}, this);
	}

	static getConnection(name, callback){
		if(this.pools === null){
			return callback(new Error("No such db in pool"));
		}
		return this.pools[name].getConnection(callback);
	}

	static createPool(connectionConfig){
		return mysql.createPool(connectionConfig);
	} 
}

if(MySqlConnector.pools == undefined){
	let dbConfig = {
		"test" : {
			connectionLimit : process.env.TEST_POOL_SIZE || 20,
			host : process.env.TEST_HOST || "127.0.0.1",
			port : process.env.TEST_PORT || 3306,
			user : process.env.TEST_USER || "root",
			password : process.env.TEST_PASS || "13112015",
			database : process.env.TEST_DATABASE || "test"
		}
	};
	MySqlConnector.init(dbConfig);
	_.each(MySqlConnector.pools, function(pool, name){
		pool.on("enqueue", function(){
			console.log(name + " Queuing for connection on pool");
		});
	});
}

module.exports = MySqlConnector;
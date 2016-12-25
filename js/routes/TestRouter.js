"use strict";

let BaseRouter = require("./BaseRouter");

let router = new BaseRouter();

router.get("/test1", function(req, res){
	console.log("test1 call received !!!");
	return res.status(200).json({"HI" : "Hi"});
});

module.exports = router 	
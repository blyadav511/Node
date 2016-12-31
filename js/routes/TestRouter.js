"use strict";

let BaseRouter = require("./BaseRouter");
let TestController = require("../controllers/TestController")

let router = new BaseRouter();

router.get("/test1", function(req, res, next){
	console.log("test1 call received !!!");

	new TestController(req).test1((err, data) => {
		if(err != null){
			return next(err);
		}
		return res.status(200).json(data);
	});
	//return res.status(200).json({"HI" : "Hi"});
});

module.exports = router 	
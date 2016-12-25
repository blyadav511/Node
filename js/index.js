"use strict";

let express = require("express");
let app = express();


let TestRouter = require("./routes/TestRouter");

app.use("/api/v1/test", TestRouter);

/*app.get("/api/v1/test/test1", (req, res) => {
	return res.status(200).json({"a":"b"});
});*/

const server = app.listen(process.env.PORT || 8787, () => {
	let host = server.address().address;
	let port = server.address().port;
	console.log("server "+ host + " started on "+ port + " port");
});
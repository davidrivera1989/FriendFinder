//Primary variables and dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Require routing paths for html and api pages
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Open server connection
app.listen(PORT, () => {
	console.log("Application listening on port " + PORT);
});

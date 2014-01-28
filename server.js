// Start Express
var express = require("express");
var app = express();
var http = require('http');
var jade = require('jade');


// Set the view directory to /views
app.set("views", __dirname + "/views");

// static dir, try:
// app.use('/static', express.static(__dirname + '/static'));
//or
app.use(express.static(__dirname + '/static'));

app.engine('html', require('jade').__express);

app.set("view engine", "jade");

// Define "index" route
app.get("/", function(request, response) {
  response.render("index");
});



// Start the server
app.listen(1337);
console.log('node-static running at http://localhost:1337');


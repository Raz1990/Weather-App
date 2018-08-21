"use strict";
exports.__esModule = true;
var http = require("http");
var app_1 = require("./app");
var server = http.createServer(app_1["default"]);
var port = 4000;
server.listen(port, function () { return console.log('im running on port', port); });

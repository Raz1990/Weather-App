"use strict";
exports.__esModule = true;
var express = require("express");
var cityRouter_1 = require("./Routers/cityRouter");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
    res.send('What are you looking at?');
});
app.use('/cities', cityRouter_1["default"]);
exports["default"] = app;

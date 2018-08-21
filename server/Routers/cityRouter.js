"use strict";
exports.__esModule = true;
var express = require("express");
var cityController = require("./../Controllers/cityController");
var cityRouter = express.Router();
cityRouter.get('/', cityController.getAllCities);
exports["default"] = cityRouter;

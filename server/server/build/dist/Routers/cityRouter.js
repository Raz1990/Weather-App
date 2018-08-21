"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cityController = require("./../Controllers/cityController");
var cityRouter = express.Router();
cityRouter.get('/', cityController.getAllCities);
exports.default = cityRouter;
//# sourceMappingURL=cityRouter.js.map
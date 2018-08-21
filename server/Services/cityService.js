"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
function getAllCities() {
    var cities = [
        { id: 1, name: 'Hadera', show: true, weatherId: 294946 },
        { id: 2, name: 'Tel Aviv', show: true, weatherId: 293397 },
        { id: 3, name: 'Holon', show: true, weatherId: 294751 }
    ];
    console.log(cities);
    return rxjs_1.of(cities);
}
exports.getAllCities = getAllCities;

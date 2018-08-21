"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var cities = [
    { id: 1, name: 'Hadera', show: true, weatherId: 294946 },
    { id: 2, name: 'Tel Aviv', show: true, weatherId: 293397 },
    { id: 3, name: 'Holon', show: true, weatherId: 294751 }
];
function getAllCities() {
    return rxjs_1.of(this.cities);
}
exports.getAllCities = getAllCities;
//# sourceMappingURL=cityService.js.map
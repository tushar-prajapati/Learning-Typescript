"use strict";
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["sunny"] = "sunny";
    WeatherConditions["cloudy"] = "cloudy";
    WeatherConditions["rainy"] = "rainy";
    WeatherConditions["snowy"] = "snowy";
})(WeatherConditions || (WeatherConditions = {}));
let today = WeatherConditions.sunny;
console.log(today);
//# sourceMappingURL=enums.js.map
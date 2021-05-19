const tools = require('./qweather');

var t = 9;

switch(t) {
    case 1:
        tools.weatherNow('116.41,39.92', function(res) {
            console.log(res);
        });
        break;
    case 2:
        tools.weatherDays('116.41,39.92', '3', function(res) {
            console.log(res);
        });
        break;
    case 3:
        tools.weatherHours('116.41,39.92', '24', function(res) {
            console.log(res);
        });
        break;
    case 4:
        tools.gridWeatherNow('116.41,39.92', function(res) {
            console.log(res);
        });
        break;
    case 5:
        tools.gridWeatherDays('116.41,39.92', '3', function(res) {
            console.log(res);
        });
        break;
    case 6:
        tools.gridWeatherHours('116.41,39.92', '24', function(res) {
            console.log(res);
        });
        break;
    case 7:
        tools.warningInfoNow('116.41,39.92', function(res) {
            console.log(res);
        });
        break;
    case 8:
        tools.warningDistrictsList(function(res) {
            console.log(res);
        });
        break;
    case 9:
        tools.districtInfo('101010100', function(res) {
            console.log(res);
        });
        break;
    default:
        break;
}
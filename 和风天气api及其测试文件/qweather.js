const request = require('request');

// 必选参数
const key = 'd2b6aed89dd14d1d8300de40ba174b07';

// 商业版接口
const baseUrl = 'https://api.qweather.com/v7';
const weatherBaseUrl = baseUrl + '/weather';
const gridWeatherBaseUrl = baseUrl + '/grid-weather';
const warningBaseUrl = baseUrl + '/warning';
const districtInfoBaseUrl = 'https://geoapi.qweather.com/v2/city';

/**
 * 200	请求成功
 * 204	请求成功，但你查询的地区暂时没有你需要的数据。
 * 400	请求错误，可能包含错误的请求参数或缺少必选的请求参数。
 * 401	认证失败，可能使用了错误的KEY、数字签名错误、KEY的类型错误（如使用SDK的KEY去访问Web API）。
 * 402	超过访问次数或余额不足以支持继续访问服务，你可以充值、升级访问量或等待访问量重置。
 * 403	无访问权限，可能是绑定的PackageName、BundleID、域名IP地址不一致，或者是需要额外付费的数据。
 * 404	查询的数据或地区不存在。
 * 429	超过限定的QPM（每分钟访问次数），请参考QPM说明
 * 500	无响应或超时，接口服务异常请联系我们
 */

/**
 * 地区
 * 获取指定经纬度坐标地区的实时天气
 * @param {String} location @example '116.41,39.92'
 * @param {function} callback @example function(res) { console.log(res); }
 * @returns {object} 和风天气response
 */
var weatherNow = (location, callback) => {
  let uri = '/now';

  request({
    baseUrl: weatherBaseUrl,
    uri: uri,
    qs: {
      key: key,
      location: location
    },
    gzip: true
  },
  (error, response, body) => {
    callback(body);
  });
}

/**
 * 地区
 * 获取指定经纬度坐标地区的未来指定天数天气
 * @param {String} location @example '116.41,39.92'
 * @param {String} interval @example '3', '7', '10', '15'
 * @param {function} callback @example function(res) { console.log(res); }
 * @returns {object} 和风天气response
 */
var weatherDays = (location, interval, callback) => {
  let uri = '/' + interval + 'd';

  request({
    baseUrl: weatherBaseUrl,
    uri: uri,
    qs: {
      key: key,
      location: location
    },
    gzip: true
  },
  (error, response, body) => {
    callback(body);
  });
}

/**
 * 地区
 * 获取指定经纬度坐标地区的未来指定小时天气
 * @param {String} location @example '116.41,39.92'
 * @param {String} interval @example '24', '72', '168'
 * @param {function} callback @example function(res) { console.log(res); }
 * @returns {object} 和风天气response
 */
var weatherHours = (location, interval, callback) => {
  let uri = '/' + interval + 'h';

  request({
    baseUrl: weatherBaseUrl,
    uri: uri,
    qs: {
      key: key,
      location: location
    },
    gzip: true
  },
  (error, response, body) => {
    callback(body);
  });
}

/**
 * 格点（精确到公里）
 * 获取指定经纬度坐标地格点的实时天气
 * @param {String} location @example '116.41,39.92'
 * @param {function} callback @example function(res) { console.log(res); }
 * @returns {object} 和风天气response
 */
 var gridWeatherNow = (location, callback) => {
  let uri = '/now'

  request({
    baseUrl: gridWeatherBaseUrl,
    uri: uri,
    qs: {
      key: key,
      location: location
    },
    gzip: true
  },
  (error, response, body) => {
    callback(body);
  });
}

/**
 * 格点（精确到公里）
 * 获取指定经纬度坐标格点的未来指定天数天气
 * @param {String} location @example '116.41,39.92'
 * @param {String} interval @example '3', '7'
 * @param {function} callback @example function(res) { console.log(res); }
 * @returns {object} 和风天气response
 */
var gridWeatherDays = (location, interval, callback) => {
  let uri = '/' + interval + 'd';

  request({
    baseUrl: gridWeatherBaseUrl,
    uri: uri,
    qs: {
      key: key,
      location: location
    },
    gzip: true
  },
  (error, response, body) => {
    callback(body);
  });
}

/**
 * 格点（精确到公里）
 * 获取指定经纬度坐标格点的未来指定小时天气
 * @param {String} location @example '116.41,39.92'
 * @param {String} interval @example '24'
 * @param {function} callback @example function(res) { console.log(res); }
 * @returns {object} 和风天气response
 */
var gridWeatherHours = (location, interval, callback) => {
  let uri = '/' + interval + 'h';

  request({
    baseUrl: gridWeatherBaseUrl,
    uri: uri,
    qs: {
      key: key,
      location: location
    },
    gzip: true
  },
    (error, response, body) => {
      callback(body);
    });
}

/**
 * 获取指定经纬度坐标地区的天气灾害预警信息
 * @param {String} location @example '116.41,39.92'
 * @param {function} callback @example function(res) { console.log(res); }
 * @returns 天气预警response，若无预警，则warning数组为空
 */
var warningInfoNow = (location, callback) => {
  let uri = '/now';

  request({
    baseUrl: warningBaseUrl,
    uri: uri,
    qs: {
      key: key,
      location: location
    },
    gzip: true
  },
    (error, response, body) => {
      callback(body);
    });
}

/**
 * 获取获取当前中国发生天气预警的城市列表（以locationID形式返回）
 * @param {function} callback @example function(res) { console.log(res); }
 * @returns 天气预警城市列表response
 */
 var warningDistrictsList = (callback) => {
  let uri = '/list';

  request({
    baseUrl: warningBaseUrl,
    uri: uri,
    qs: {
      key: key,
      range: 'cn'
    },
    gzip: true
  },
    (error, response, body) => {
      callback(body);
    });
}

/**
 * 获取指定locationID的地区信息
 * @param {String} locationID @example '101010100'
 * @param {function} callback @example function(res) { console.log(res); }
 * @returns 指定ID地区的信息response
 */
var districtInfo = (locationID, callback) => {
  let uri = '/lookup';

  request({
    baseUrl: districtInfoBaseUrl,
    uri: uri,
    qs: {
      key: key,
      location: locationID
    },
    gzip: true
  },
    (error, response, body) => {
      callback(body);
    });
}

const qweather = {
  weatherNow,
  weatherDays,
  weatherHours,
  gridWeatherNow,
  gridWeatherDays,
  gridWeatherHours,
  warningInfoNow,
  warningDistrictsList,
  districtInfo
}

module.exports = qweather;
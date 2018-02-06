"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
/**
 * 转化成RMB元字符串
 */
function yuan(value) {
    return "&yen " + value;
}
exports.yuan = yuan;
/**
 * 不满两位数自动填充 `0`
 * @param val 数值
 */
function fixedZero(val) {
    return val * 1 < 10 ? "0" + val : val;
}
exports.fixedZero = fixedZero;
/**
 * 获取时间范围
 * @param type 类型
 * @param time 开始时间
 */
function getTimeDistance(type, time) {
    if (time === void 0) { time = new Date(); }
    var oneDay = 1000 * 60 * 60 * 24;
    if (type === 'today') {
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);
        return [moment(time), moment(time.getTime() + (oneDay - 1000))];
    }
    if (type === 'week') {
        var day = time.getDay();
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);
        if (day === 0) {
            day = 6;
        }
        else {
            day -= 1;
        }
        var beginTime = time.getTime() - day * oneDay;
        return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
    }
    if (type === 'month') {
        var year = time.getFullYear();
        var month = time.getMonth();
        var nextDate = moment(time).add(1, 'months');
        var nextYear = nextDate.year();
        var nextMonth = nextDate.month();
        return [
            moment(year + "-" + fixedZero(month + 1) + "-01 00:00:00"),
            moment(moment(nextYear + "-" + fixedZero(nextMonth + 1) + "-01 00:00:00").valueOf() - 1000)
        ];
    }
    if (type === 'year') {
        var year = time.getFullYear();
        return [
            moment(year + "-01-01 00:00:00"),
            moment(year + "-12-31 23:59:59")
        ];
    }
}
exports.getTimeDistance = getTimeDistance;
/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-get
 */
function deepGet(obj, path, defaultValue) {
    if (!obj)
        return defaultValue;
    if (path.length <= 1) {
        var checkObj = path.length ? obj[path[0]] : obj;
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    return path.reduce(function (o, k) { return (o || {})[k]; }, obj) || defaultValue;
}
exports.deepGet = deepGet;
function deepCopy(obj) {
    // BAD: a temporary solution
    return JSON.parse(JSON.stringify(obj));
}
exports.deepCopy = deepCopy;

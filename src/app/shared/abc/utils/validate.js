"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 一套日常验证类 */
var Validate = /** @class */ (function () {
    function Validate() {
    }
    /** 是否为数字 */
    Validate.isNum = function (value) {
        return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
    };
    /** 是否为整数 */
    Validate.isInt = function (value) {
        // tslint:disable-next-line:triple-equals
        return Validate.isNum(value) && parseInt(value.toString(), 10) == value;
    };
    /** 是否为小数 */
    Validate.isDecimal = function (value) {
        return Validate.isNum(value) && !Validate.isInt(value);
    };
    /** 是否为身份证 */
    Validate.isIdCard = function (value) {
        return typeof (value) === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
    };
    /** 是否为手机号 */
    Validate.isMobile = function (value) {
        return typeof (value) === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
    };
    return Validate;
}());
exports.Validate = Validate;

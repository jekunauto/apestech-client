"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_1 = require("./validate");
/** 一套日常验证器 */
// tslint:disable-next-line:class-name
var _Validators = /** @class */ (function () {
    function _Validators() {
    }
    /** 是否为数字 */
    _Validators.num = function (control) {
        return validate_1.Validate.isNum(control.value) ? null : { num: true };
    };
    /** 是否为整数 */
    _Validators.int = function (control) {
        return validate_1.Validate.isInt(control.value) ? null : { int: true };
    };
    /** 是否为小数 */
    _Validators.decimal = function (control) {
        return validate_1.Validate.isDecimal(control.value) ? null : { decimal: true };
    };
    /** 是否为身份证 */
    _Validators.idCard = function (control) {
        return validate_1.Validate.isIdCard(control.value) ? null : { idCard: true };
    };
    /** 是否为手机号 */
    _Validators.mobile = function (control) {
        return validate_1.Validate.isMobile(control.value) ? null : { mobile: true };
    };
    return _Validators;
}());
exports._Validators = _Validators;

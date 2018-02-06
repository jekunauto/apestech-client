"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../utils/utils");
var SimpleTableExport = /** @class */ (function () {
    function SimpleTableExport(xlsxSrv) {
        this.xlsxSrv = xlsxSrv;
    }
    SimpleTableExport.prototype._stGet = function (item, col) {
        var ret = { t: 's', v: '' };
        if (col.format) {
            ret.v = col.format(item, col);
        }
        else {
            var val = utils_1.deepGet(item, col.index, '');
            if (typeof val === 'undefined') {
                ret.v = '';
            }
            else {
                ret.v = val;
                switch (col.type) {
                    case 'currency':
                        ret.t = 'n';
                        break;
                    case 'date':
                        ret.t = 'd';
                        break;
                    case 'yn':
                        ret.v = ret === col.ynTruth ? (col.ynYes || '是') : (col.ynNo || '否');
                        break;
                }
            }
        }
        return ret;
    };
    SimpleTableExport.prototype.genSheet = function (opt) {
        var sheets = {};
        var sheet = sheets[opt.sheetname || 'Sheet1'] = {};
        var colData = opt._c.filter(function (w) { return w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0); });
        var cc = colData.length, dc = opt._d.length;
        // region: column
        for (var i = 0; i < cc; i++) {
            sheet[String.fromCharCode(65 + i) + "1"] = { t: 's', v: colData[i].title };
        }
        // endregion
        // region: content
        for (var i = 0; i < dc; i++) {
            for (var j = 0; j < cc; j++) {
                sheet["" + String.fromCharCode(65 + j) + (i + 2)] = this._stGet(opt._d[i], colData[j]);
            }
        }
        // endregion
        sheet['!ref'] = "A1:" + String.fromCharCode(65 + cc - 1) + (dc + 1);
        return sheets;
    };
    SimpleTableExport.prototype.export = function (opt) {
        if (!this.xlsxSrv)
            throw new Error("muse be import 'AdXlsxModule' module, but got null");
        var sheets = this.genSheet(opt);
        return this.xlsxSrv.export({
            sheets: sheets,
            filename: opt.filename,
            callback: opt.callback
        });
    };
    SimpleTableExport = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional())
    ], SimpleTableExport);
    return SimpleTableExport;
}());
exports.SimpleTableExport = SimpleTableExport;

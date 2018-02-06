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
var file_saver_1 = require("file-saver");
var interface_1 = require("./interface");
var XlsxService = /** @class */ (function () {
    function XlsxService(config, http, lazy) {
        this.config = config;
        this.http = http;
        this.lazy = lazy;
    }
    XlsxService.prototype.init = function () {
        var config = Object.assign({
            url: "//cdn.bootcss.com/xlsx/0.11.17/xlsx.full.min.js",
            modules: []
        }, this.config);
        return this.lazy.load([config.url].concat(config.modules));
    };
    XlsxService.prototype.read = function (wb) {
        var ret = {};
        wb.SheetNames.forEach(function (name) {
            var sheet = wb.Sheets[name];
            ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        });
        return ret;
    };
    /** 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式 */
    XlsxService.prototype.import = function (fileOrUrl) {
        var _this = this;
        return new Promise(function (resolver) {
            _this.init().then(function () {
                // from url
                if (typeof fileOrUrl === 'string') {
                    _this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe(function (res) {
                        var wb = XLSX.read(new Uint8Array(res), { type: 'array' });
                        resolver(_this.read(wb));
                    });
                    return;
                }
                // from file
                var reader = new FileReader();
                reader.onload = function (e) {
                    var wb = XLSX.read(e.target.result, { type: 'binary' });
                    resolver(_this.read(wb));
                };
                reader.readAsBinaryString(fileOrUrl);
            });
        });
    };
    /** 导出 */
    XlsxService.prototype.export = function (options) {
        return this.init().then(function () {
            var wb = XLSX.utils.book_new();
            if (Array.isArray(options.sheets)) {
                options.sheets.forEach(function (value, index) {
                    var ws = XLSX.utils.aoa_to_sheet(value.data);
                    XLSX.utils.book_append_sheet(wb, ws, value.name || "Sheet" + (index + 1));
                });
            }
            else {
                wb.SheetNames = Object.keys(options.sheets);
                wb.Sheets = options.sheets;
            }
            if (options.callback)
                options.callback(wb);
            var wbout = XLSX.write(wb, Object.assign({
                bookType: 'xlsx',
                type: 'array'
            }, options.opts));
            file_saver_1.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
        });
    };
    XlsxService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(interface_1.DA_XLSX_CONFIG))
    ], XlsxService);
    return XlsxService;
}());
exports.XlsxService = XlsxService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_saver_1 = require("file-saver");
/**
 * 文件下载
 *
 * ```html
 * <button nz-button down-file http-url="assets/demo{{i}}" file-name="demo中文">{{i}}</button>
 * ```
 */
var DownFileDirective = /** @class */ (function () {
    function DownFileDirective(el, http) {
        this.el = el;
        this.http = http;
        /** 请求类型 */
        this.httpMethod = 'get';
        /** 成功回调 */
        this.success = new core_1.EventEmitter();
        /** 错误回调 */
        this.error = new core_1.EventEmitter();
    }
    DownFileDirective.prototype._click = function () {
        var _this = this;
        this.el.nativeElement.disabled = true;
        this.http.request(this.httpMethod, this.httpUrl, {
            params: this.httpData || {},
            responseType: 'blob',
            observe: 'response'
        }).subscribe(function (res) {
            if (res.body.size <= 0) {
                _this.error.emit(res);
                return;
            }
            var fileName = _this.fileName || res.headers.get('filename') || res.headers.get('x-filename');
            file_saver_1.saveAs(res.body, decodeURI(fileName));
            _this.success.emit(res);
            _this.el.nativeElement.disabled = false;
        }, function (err) {
            _this.error.emit(err);
            _this.el.nativeElement.disabled = false;
        });
    };
    __decorate([
        core_1.Input('http-data')
    ], DownFileDirective.prototype, "httpData", void 0);
    __decorate([
        core_1.Input('http-method')
    ], DownFileDirective.prototype, "httpMethod", void 0);
    __decorate([
        core_1.Input('http-url')
    ], DownFileDirective.prototype, "httpUrl", void 0);
    __decorate([
        core_1.Input('file-name')
    ], DownFileDirective.prototype, "fileName", void 0);
    __decorate([
        core_1.Output()
    ], DownFileDirective.prototype, "success", void 0);
    __decorate([
        core_1.Output()
    ], DownFileDirective.prototype, "error", void 0);
    __decorate([
        core_1.HostListener('click')
    ], DownFileDirective.prototype, "_click", null);
    DownFileDirective = __decorate([
        core_1.Directive({ selector: '[down-file]' })
    ], DownFileDirective);
    return DownFileDirective;
}());
exports.DownFileDirective = DownFileDirective;

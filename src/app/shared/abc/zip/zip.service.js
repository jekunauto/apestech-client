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
var ZipService = /** @class */ (function () {
    function ZipService(config, http, lazy) {
        this.config = config;
        this.http = http;
        this.lazy = lazy;
    }
    ZipService.prototype.init = function () {
        var config = Object.assign({
            url: "//cdn.bootcss.com/jszip/3.1.5/jszip.min.js",
            utils: []
        }, this.config);
        return this.lazy.load([config.url].concat(config.utils));
    };
    ZipService.prototype.check = function (zip) {
        if (!zip)
            throw new Error('get instance via `ZipService.create()`');
    };
    /** 解压 */
    ZipService.prototype.read = function (fileOrUrl, options) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.init().then(function () {
                // from url
                if (typeof fileOrUrl === 'string') {
                    _this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe(function (res) {
                        JSZip.loadAsync(res, options).then(function (ret) { return resolve(ret); });
                    });
                    return;
                }
                // from file
                var reader = new FileReader();
                reader.onload = function (e) {
                    JSZip.loadAsync(e.target.result, options).then(function (ret) { return resolve(ret); });
                };
                reader.readAsBinaryString(fileOrUrl);
            });
        });
    };
    /** 创建 Zip 实例，用于创建压缩文件 */
    ZipService.prototype.create = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.init().then(function () {
                var zipFile = new JSZip();
                resolve(zipFile);
            });
        });
    };
    /**
     * 下载URL资源并写入 zip
     * @param zip Zip 实例
     * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param url URL 地址
     */
    ZipService.prototype.pushUrl = function (zip, path, url) {
        var _this = this;
        this.check(zip);
        return new Promise(function (resolve, reject) {
            _this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe(function (res) {
                zip.file(path, res);
                resolve();
            }, function () {
                reject();
            });
        });
    };
    /** 保存Zip */
    ZipService.prototype.save = function (zip, options) {
        this.check(zip);
        var opt = Object.assign({}, options);
        return new Promise(function (resolve) {
            zip.generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update).then(function (data) {
                if (opt.callback)
                    opt.callback();
                file_saver_1.saveAs(data, opt.filename || 'download.zip');
            });
        });
    };
    ZipService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(interface_1.DA_ZIP_CONFIG))
    ], ZipService);
    return ZipService;
}());
exports.ZipService = ZipService;

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
var platform_browser_1 = require("@angular/platform-browser");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var operators_1 = require("rxjs/operators");
var LazyService = /** @class */ (function () {
    function LazyService(doc) {
        this.doc = doc;
        this.list = {};
        this._notify = new BehaviorSubject_1.BehaviorSubject(null);
    }
    Object.defineProperty(LazyService.prototype, "change", {
        get: function () {
            return this._notify.asObservable().pipe(operators_1.share());
        },
        enumerable: true,
        configurable: true
    });
    LazyService.prototype.load = function (paths) {
        var _this = this;
        var promises = [];
        if (!Array.isArray(paths))
            paths = [paths];
        paths.forEach(function (path) {
            if (path.endsWith('.js'))
                promises.push(_this.loadScript(path));
            else
                promises.push(_this.loadStyle(path));
        });
        return Promise.all(promises).then(function (res) {
            _this._notify.next(true);
        });
    };
    LazyService.prototype.loadScript = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.list[path] === true) {
                resolve({
                    path: path,
                    loaded: true,
                    status: 'Loaded'
                });
                return;
            }
            _this.list[path] = true;
            var node = _this.doc.createElement('script');
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (node.readyState) {
                node.onreadystatechange = function () {
                    if (node.readyState === 'loaded' || node.readyState === 'complete') {
                        node.onreadystatechange = null;
                        resolve({
                            path: path,
                            loaded: true,
                            status: 'Loaded'
                        });
                    }
                };
            }
            else {
                node.onload = function () {
                    resolve({
                        path: path,
                        loaded: true,
                        status: 'Loaded'
                    });
                };
            }
            node.onerror = function (error) { return resolve({
                path: path,
                loaded: false,
                status: 'Loaded'
            }); };
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    };
    LazyService.prototype.loadStyle = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.list[path] === true) {
                resolve({
                    path: path,
                    loaded: true,
                    status: 'Loaded'
                });
                return;
            }
            _this.list[path] = true;
            var node = _this.doc.createElement('link');
            node.rel = 'stylesheet';
            node.type = 'text/css';
            node.href = path;
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
            resolve({
                path: path,
                loaded: true,
                status: 'Loaded'
            });
        });
    };
    LazyService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT))
    ], LazyService);
    return LazyService;
}());
exports.LazyService = LazyService;

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
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var interface_1 = require("./interface");
var ReuseTabService = /** @class */ (function () {
    // endregion
    function ReuseTabService(injector, menuService) {
        this.injector = injector;
        this.menuService = menuService;
        this._max = 10;
        this._debug = false;
        this._mode = interface_1.ReuseTabMatchMode.Menu;
        this._excludes = [];
        this._cachedChange = new BehaviorSubject_1.BehaviorSubject(null);
        this._cached = [];
        this._titleCached = {};
        this._hookCached = {};
    }
    Object.defineProperty(ReuseTabService.prototype, "max", {
        // region: public
        /** 允许最多复用多少个页面，取值范围 `2-100` */
        set: function (value) {
            this._max = Math.min(Math.max(value, 2), 100);
            for (var i = this._cached.length; i > this._max; i--) {
                this._cached.pop();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "mode", {
        /** 设置匹配模式 */
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "debug", {
        /** 设置Debug模式 */
        set: function (value) {
            this._debug = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "excludes", {
        /** 排除规则，限 `mode=URL` */
        set: function (values) {
            if (!values)
                return;
            this._excludes = values;
        },
        enumerable: true,
        configurable: true
    });
    /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
    ReuseTabService.prototype.index = function (url) {
        return this._cached.findIndex(function (w) { return w.url === url; });
    };
    /** 获取指定路径缓存是否存在 */
    ReuseTabService.prototype.exists = function (url) {
        return this.index(url) !== -1;
    };
    /** 获取指定路径缓存 */
    ReuseTabService.prototype.get = function (path) {
        return path ? this._cached.find(function (w) { return w.url === path; }) || null : null;
    };
    ReuseTabService.prototype.destroy = function (_handle) {
        if (_handle && _handle.componentRef && _handle.componentRef.destroy)
            _handle.componentRef.destroy();
    };
    ReuseTabService.prototype.di = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._debug || !console)
            return;
        // tslint:disable-next-line:no-console
        console.warn.apply(console, args);
    };
    /**
     * 根据URL移除标签
     */
    ReuseTabService.prototype.remove = function (url) {
        this.di('remove tag', url);
        this._cachedChange.next({ active: 'remove', url: url });
    };
    /**
     * 移除指定路径缓存
     * @private
     */
    ReuseTabService.prototype._remove = function (data) {
        var url = data;
        if (typeof data !== 'string') {
            url = data.url;
        }
        this.removeBuffer = url;
        var idx = this.index(url);
        var item = idx !== -1 ? this._cached[idx] : null;
        if (item) {
            this.destroy(item._handle);
            this._cached.splice(idx, 1);
            delete this._titleCached[url];
        }
        return true;
    };
    /**
     * 清除所有缓存
     */
    ReuseTabService.prototype.clear = function () {
        var _this = this;
        this.di('clear all catch');
        this.removeBuffer = null;
        this._cached.forEach(function (v) { return _this.destroy(v._handle); });
        this._cached = [];
        this._cachedChange.next({ active: 'clear' });
    };
    /**
     * 清除标题缓存
     */
    ReuseTabService.prototype.clearTitleCached = function () {
        this._titleCached = {};
    };
    Object.defineProperty(ReuseTabService.prototype, "items", {
        /** 获取已缓存的路由 */
        get: function () {
            return this._cached;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "count", {
        /** 获取当前缓存的路由总数 */
        get: function () {
            return this._cached.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "change", {
        /** 订阅缓存变更通知 */
        get: function () {
            return this._cachedChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabService.prototype, "title", {
        /** 设置当前页标题 */
        set: function (value) {
            if (!value)
                return;
            if (!this.curUrl)
                this.curUrl = this.getUrl(this.injector.get(router_1.ActivatedRoute).snapshot);
            this._titleCached[this.curUrl] = value;
            this.di('update current tag title', value);
            this._cachedChange.next({ active: 'title', title: value });
        },
        enumerable: true,
        configurable: true
    });
    // endregion
    // region: privates
    /** @private */
    ReuseTabService.prototype._clearRemoveBuffer = function () {
        this.removeBuffer = null;
    };
    /** @private */
    ReuseTabService.prototype.getTitle = function (url, route) {
        if (this._titleCached[url])
            return this._titleCached[url];
        if (route && route.data && (route.data.reuseTitle || route.data.title))
            return route.data.reuseTitle || route.data.title;
        if (!this.menuService)
            return url;
        var list = this.menuService.getPathByUrl(url);
        var item = list.pop();
        return item ? item.text : url;
    };
    ReuseTabService.prototype.getTruthRoute = function (route) {
        var next = route;
        while (next.firstChild)
            next = next.firstChild;
        return next;
    };
    ReuseTabService.prototype.getUrl = function (route) {
        var next = this.getTruthRoute(route);
        var segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        var url = '/' + segments.filter(function (i) { return i; }).reverse().join('/');
        return url;
    };
    ReuseTabService.prototype.getMenu = function (url) {
        var menus = this.menuService ? this.menuService.getPathByUrl(url) : [];
        if (!menus || menus.length === 0)
            return null;
        return menus.pop();
    };
    ReuseTabService.prototype.runHook = function (method, url, comp) {
        var _this = this;
        if (this._hookCached[url])
            return;
        this._hookCached[url] = true;
        setTimeout(function () {
            if (comp.instance && comp.instance[method])
                comp.instance[method]();
            _this._hookCached[url] = false;
        }, 100);
    };
    /** @private */
    ReuseTabService.prototype.getClosable = function (url, route) {
        if (route && route.data && typeof route.data.reuseClosable !== 'undefined')
            return route.data.reuseClosable;
        var menu = this._mode !== interface_1.ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.reuseClosable !== 'undefined')
            return menu.reuseClosable;
        return true;
    };
    ReuseTabService.prototype.can = function (route) {
        var url = this.getUrl(route);
        if (url === this.removeBuffer)
            return false;
        if (route.data && typeof route.data.reuse === 'boolean')
            return route.data.reuse;
        if (this._mode !== interface_1.ReuseTabMatchMode.URL) {
            var menu = this.getMenu(url);
            if (!menu)
                return false;
            if (this._mode === interface_1.ReuseTabMatchMode.Menu) {
                if (menu.reuse === false)
                    return false;
            }
            else {
                if (!menu.reuse || menu.reuse !== true)
                    return false;
            }
            return true;
        }
        var idx = 0;
        if (url)
            idx = this._excludes.findIndex(function (r) { return r.test(url); });
        return idx === -1;
    };
    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     */
    ReuseTabService.prototype.shouldDetach = function (route) {
        if (!route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children)
            return false;
        this.di('#shouldDetach', this.getUrl(route), this.can(route));
        return this.can(route);
    };
    /**
     * 存储
     */
    ReuseTabService.prototype.store = function (_snapshot, _handle) {
        if (!_snapshot.routeConfig || _snapshot.routeConfig.loadChildren || _snapshot.routeConfig.children)
            return;
        if (this.count >= this._max)
            this._cached.shift();
        var url = this.getUrl(_snapshot);
        var idx = this.index(url);
        var item = {
            customTitle: this._titleCached[url],
            title: this.getTitle(url, _snapshot),
            // closable: this.getClosable(url, _snapshot),
            url: url,
            _snapshot: _snapshot,
            _handle: _handle
        };
        if (idx === -1) {
            this._cached.push(item);
        }
        else {
            this._cached[idx] = item;
        }
        this._clearRemoveBuffer();
        this.di('#store', url, idx === -1 ? '[new]' : '[override]');
        if (_handle && _handle.componentRef) {
            this.runHook('_onReuseDestroy', url, _handle.componentRef);
        }
        this._cachedChange.next({ active: 'add', item: item });
    };
    /**
     * 决定是否允许应用缓存数据
     */
    ReuseTabService.prototype.shouldAttach = function (route) {
        if (!route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children)
            return false;
        var url = this.getUrl(route);
        var data = this.get(url);
        var ret = !!(data && data._handle);
        this.di('#shouldAttach', url, ret);
        return ret;
    };
    /**
     * 提取复用数据
     */
    ReuseTabService.prototype.retrieve = function (route) {
        if (!route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children)
            return null;
        var url = this.getUrl(route);
        var data = this.get(url);
        var ret = (data && data._handle) || null;
        this.di('#retrieve', url, ret);
        if (ret && ret.componentRef) {
            this.runHook('_onReuseInit', url, ret.componentRef);
        }
        return ret;
    };
    /**
     * 决定是否应该进行复用路由处理
     */
    ReuseTabService.prototype.shouldReuseRoute = function (future, curr) {
        var ret = future.routeConfig === curr.routeConfig;
        var url = '';
        if (ret) {
            var path = ((future.routeConfig && future.routeConfig.path) || '');
            if (path.length > 0 && ~path.indexOf(':')) {
                var futureUrl = this.getUrl(future);
                var currUrl = this.getUrl(curr);
                url = futureUrl;
                ret = futureUrl === currUrl;
            }
        }
        this.curUrl = ret ? '' : (url || this.getUrl(curr));
        this.di('#shouldReuseRoute', future, curr, ret);
        return ret;
    };
    ReuseTabService.prototype.ngOnDestroy = function () {
        this._cached = null;
        this._cachedChange.unsubscribe();
    };
    ReuseTabService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional())
    ], ReuseTabService);
    return ReuseTabService;
}());
exports.ReuseTabService = ReuseTabService;

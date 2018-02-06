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
var platform_browser_1 = require("@angular/platform-browser");
var combineLatest_1 = require("rxjs/observable/combineLatest");
var operators_1 = require("rxjs/operators");
var coercion_1 = require("@angular/cdk/coercion");
var interface_1 = require("./interface");
var ReuseTabComponent = /** @class */ (function () {
    function ReuseTabComponent(srv, cd, router, route, el, render, doc) {
        this.srv = srv;
        this.cd = cd;
        this.router = router;
        this.route = route;
        this.el = el;
        this.render = render;
        this.doc = doc;
        this._list = [];
        this._pos = 0;
        /** 设置匹配模式 */
        this.mode = interface_1.ReuseTabMatchMode.Menu;
        this._debug = true;
        this._allowClose = true;
        this._showCurrent = true;
        this._fixed = true;
        /** 切换时回调 */
        this.change = new core_1.EventEmitter();
        /** 关闭回调 */
        this.close = new core_1.EventEmitter();
    }
    Object.defineProperty(ReuseTabComponent.prototype, "debug", {
        /** 是否Debug模式 */
        get: function () { return this._debug; },
        set: function (value) {
            this._debug = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabComponent.prototype, "max", {
        /** 允许最多复用多少个页面 */
        get: function () { return this._max; },
        set: function (value) {
            this._max = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabComponent.prototype, "allowClose", {
        /** 允许关闭 */
        get: function () { return this._allowClose; },
        set: function (value) {
            this._allowClose = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabComponent.prototype, "showCurrent", {
        /** 总是显示当前页 */
        get: function () { return this._showCurrent; },
        set: function (value) {
            this._showCurrent = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReuseTabComponent.prototype, "fixed", {
        /** 是否固定 */
        get: function () { return this._fixed; },
        set: function (value) {
            this._fixed = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    ReuseTabComponent.prototype.gen = function (url) {
        if (!url)
            url = this.srv.getUrl(this.route.snapshot);
        var ls = this.srv.items.slice().map(function (item, index) {
            return {
                url: item.url,
                // closabled: this.allowClose && item.closable,
                title: item.customTitle || item.title,
                index: index
            };
        });
        if (this.showCurrent) {
            var idx = ls.findIndex(function (w) { return w.url === url; });
            if (idx !== -1) {
                this._pos = idx;
            }
            else {
                ls.push({
                    url: url,
                    title: this.srv.getTitle(url, this.srv.getTruthRoute(this.route.snapshot)),
                    // closabled: this.allowClose && this.srv.getClosable(url, next.snapshot),
                    index: -1
                });
                this._pos = ls.length;
            }
        }
        else {
            this._pos = ls.length;
        }
        this._list = ls;
        this.visibility();
        this.cd.markForCheck();
    };
    ReuseTabComponent.prototype.visibility = function () {
        if (this.showCurrent)
            return;
        this.render.setStyle(this.el.nativeElement, 'display', this._list.length === 0 ? 'none' : 'block');
    };
    ReuseTabComponent.prototype.to = function (index) {
        var item = this._list[index];
        if (!item || !item.url)
            return;
        this.router.navigateByUrl(item.url);
        this.change.emit(item);
    };
    ReuseTabComponent.prototype.removeByUrl = function (url) {
        var removeIdx = this._list.findIndex(function (w) { return w.url === url; });
        if (removeIdx === -1)
            return null;
        this.remove(removeIdx);
        return this._list[Math.min(removeIdx, this._list.length - 1)].url;
    };
    ReuseTabComponent.prototype.remove = function (idx) {
        if (this.showCurrent && this._list.length === 1)
            return false;
        var item = this._list[idx];
        if (!this.srv._remove(item))
            return false;
        this._list.splice(idx, 1);
        this.visibility();
        this.cd.markForCheck();
        this.close.emit(item);
        if (this._pos === idx) {
            this.to(this._pos);
        }
    };
    ReuseTabComponent.prototype.clear = function () {
        var _this = this;
        this._list = [this._list.find(function (w) { return w.url === _this.router.url; })];
        this.srv.clear();
        this.close.emit(null);
    };
    ReuseTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setClass();
        var route$ = this.router.events.pipe(operators_1.filter(function (evt) { return evt instanceof router_1.NavigationEnd; }));
        this.sub$ = combineLatest_1.combineLatest(this.srv.change, route$).pipe(operators_1.debounceTime(200)).subscribe(function (_a) {
            var res = _a[0];
            var nextUrl = _this.router.url;
            if (res && res.active === 'remove' && res.url) {
                nextUrl = _this.removeByUrl(res.url);
                if (nextUrl === null)
                    return;
            }
            _this.gen(nextUrl);
        });
        var title$ = this.srv.change.pipe(operators_1.filter(function (w) { return w && w.active === 'title'; }), operators_1.first()).subscribe(function (res) {
            _this.gen(_this.router.url);
            title$.unsubscribe();
        });
        this.gen();
    };
    ReuseTabComponent.prototype.setClass = function () {
        var el = this.el.nativeElement;
        var body = this.doc.querySelector('body');
        var fixedCls = "fixed";
        var bodyCls = "has-reuse-tab";
        if (this.fixed) {
            this.render.addClass(el, fixedCls);
            this.render.addClass(body, bodyCls);
        }
        else {
            this.render.removeClass(el, fixedCls);
            this.render.removeClass(body, bodyCls);
        }
    };
    ReuseTabComponent.prototype.ngOnChanges = function (changes) {
        if (changes.max)
            this.srv.max = this.max;
        if (changes.excludes)
            this.srv.excludes = this.excludes;
        if (changes.mode)
            this.srv.mode = this.mode;
        this.srv.debug = this.debug;
        this.setClass();
        this.cd.markForCheck();
    };
    ReuseTabComponent.prototype.ngOnDestroy = function () {
        if (this.sub$)
            this.sub$.unsubscribe();
    };
    __decorate([
        core_1.Input()
    ], ReuseTabComponent.prototype, "mode", void 0);
    __decorate([
        core_1.Input()
    ], ReuseTabComponent.prototype, "debug", null);
    __decorate([
        core_1.Input()
    ], ReuseTabComponent.prototype, "max", null);
    __decorate([
        core_1.Input()
    ], ReuseTabComponent.prototype, "excludes", void 0);
    __decorate([
        core_1.Input()
    ], ReuseTabComponent.prototype, "allowClose", null);
    __decorate([
        core_1.Input()
    ], ReuseTabComponent.prototype, "showCurrent", null);
    __decorate([
        core_1.Input()
    ], ReuseTabComponent.prototype, "fixed", null);
    __decorate([
        core_1.Output()
    ], ReuseTabComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output()
    ], ReuseTabComponent.prototype, "close", void 0);
    ReuseTabComponent = __decorate([
        core_1.Component({
            selector: 'reuse-tab',
            templateUrl: './reuse-tab.component.html',
            styleUrls: ['./reuse-tab.less'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(6, core_1.Inject(platform_browser_1.DOCUMENT))
    ], ReuseTabComponent);
    return ReuseTabComponent;
}());
exports.ReuseTabComponent = ReuseTabComponent;

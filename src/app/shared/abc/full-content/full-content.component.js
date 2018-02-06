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
var coercion_1 = require("@angular/cdk/coercion");
var platform_browser_1 = require("@angular/platform-browser");
var FromEventObservable_1 = require("rxjs/observable/FromEventObservable");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
var cls = "full-content";
var fsCls = "full-content-fs";
var hideTitleCls = "full-content-ht";
var FullContentComponent = /** @class */ (function () {
    // endregion
    function FullContentComponent(el, render, router, cd, srv, doc) {
        this.el = el;
        this.render = render;
        this.router = router;
        this.cd = cd;
        this.srv = srv;
        this.doc = doc;
        this.inited = false;
        this.id = "_full-content-" + Math.random().toString(36).substring(2);
        this._height = 0;
        this._hideTitle = true;
        this._padding = 24;
        this.fullscreenChange = new core_1.EventEmitter();
        // region: resize
        this.scroll$ = null;
    }
    Object.defineProperty(FullContentComponent.prototype, "fullscreen", {
        // region: fields
        get: function () { return this._fullscreen; },
        set: function (value) {
            this._fullscreen = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullContentComponent.prototype, "hideTitle", {
        get: function () { return this._hideTitle; },
        set: function (value) {
            this._hideTitle = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullContentComponent.prototype, "padding", {
        get: function () { return this._padding; },
        set: function (value) {
            this._padding = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    FullContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inited = true;
        this.bodyEl = this.doc.querySelector('body');
        this.bodyEl.classList.add(cls);
        this.update();
        this.installResizeEvent();
        setTimeout(function () { return _this.updateHeight(); }, 100);
        this.srv$ = this.srv.change.subscribe(function (res) {
            if (res)
                _this.toggle();
        });
        this.route$ = this.router.events.pipe(operators_1.filter(function (e) { return e instanceof router_1.ActivationStart || e instanceof router_1.ActivationEnd; }), operators_1.debounceTime(100)).subscribe(function (e) {
            if (!!document.querySelector('#' + _this.id)) {
                _this.bodyEl.classList.add(cls);
                _this.updateFsCls();
            }
            else {
                _this.bodyEl.classList.remove(cls, fsCls, hideTitleCls);
            }
        });
    };
    FullContentComponent.prototype.ngAfterViewInit = function () {
    };
    FullContentComponent.prototype.updateFsCls = function () {
        if (this.fullscreen) {
            this.bodyEl.classList.add(fsCls, this.hideTitle ? hideTitleCls : '');
        }
        else {
            this.bodyEl.classList.remove(fsCls, this.hideTitle ? hideTitleCls : '');
        }
    };
    FullContentComponent.prototype.update = function () {
        this.updateFsCls();
        this.fullscreenChange.emit(this.fullscreen);
    };
    FullContentComponent.prototype.updateHeight = function () {
        this._height = this.bodyEl.getBoundingClientRect().height - this.el.nativeElement.getBoundingClientRect().top - this.padding;
        this.cd.detectChanges();
    };
    FullContentComponent.prototype.toggle = function () {
        this.fullscreen = !this.fullscreen;
        this.update();
        this.updateHeight();
    };
    FullContentComponent.prototype.ngOnChanges = function (changes) {
        if (this.inited)
            this.update();
    };
    FullContentComponent.prototype.ngOnDestroy = function () {
        this.bodyEl.classList.remove(cls, fsCls, hideTitleCls);
        this.uninstallResizeEvent();
        if (this.srv$)
            this.srv$.unsubscribe();
        if (this.route$)
            this.route$.unsubscribe();
    };
    FullContentComponent.prototype.installResizeEvent = function () {
        var _this = this;
        this.scroll$ = FromEventObservable_1.FromEventObservable.create(window, 'resize')
            .pipe(operators_1.debounceTime(200))
            .subscribe(function () { return _this.updateHeight(); });
    };
    FullContentComponent.prototype.uninstallResizeEvent = function () {
        if (this.scroll$)
            this.scroll$.unsubscribe();
    };
    __decorate([
        core_1.HostBinding('attr.id')
    ], FullContentComponent.prototype, "id", void 0);
    __decorate([
        core_1.HostBinding('style.height.px')
    ], FullContentComponent.prototype, "_height", void 0);
    __decorate([
        core_1.Input()
    ], FullContentComponent.prototype, "fullscreen", null);
    __decorate([
        core_1.Input()
    ], FullContentComponent.prototype, "hideTitle", null);
    __decorate([
        core_1.Input()
    ], FullContentComponent.prototype, "padding", null);
    __decorate([
        core_1.Output()
    ], FullContentComponent.prototype, "fullscreenChange", void 0);
    FullContentComponent = __decorate([
        core_1.Component({
            selector: 'full-content',
            template: "<ng-content></ng-content>",
            styleUrls: ['./full-content.less'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(5, core_1.Inject(platform_browser_1.DOCUMENT))
    ], FullContentComponent);
    return FullContentComponent;
}());
exports.FullContentComponent = FullContentComponent;

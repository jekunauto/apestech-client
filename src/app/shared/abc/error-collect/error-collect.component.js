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
var coercion_1 = require("@angular/cdk/coercion");
var ANTDERRORCLS = '.has-error';
var HEADERMINHEIGHT = 65 + 8 * 2;
/**
 * 错误消息采集器
 * PS：虽然此法并不好看，但对响应式表单&模板表单有很好的效果。
 */
var ErrorCollectComponent = /** @class */ (function () {
    function ErrorCollectComponent(el, renderer, cd, doc) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.doc = doc;
        this.$time = null;
        this._tick = 500;
        this._hiden = true;
        this.count = 0;
    }
    Object.defineProperty(ErrorCollectComponent.prototype, "tick", {
        get: function () { return this._tick; },
        set: function (value) {
            this._tick = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    ErrorCollectComponent.prototype.update = function () {
        var count = this.formEl.querySelectorAll(ANTDERRORCLS).length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cd.markForCheck();
    };
    ErrorCollectComponent.prototype._click = function () {
        if (this.count === 0)
            return false;
        // nz-form-item
        var formItemEl = this.findParent(this.formEl.querySelector(ANTDERRORCLS), '[nz-form-item]');
        if (!formItemEl)
            formItemEl = this.formEl.querySelector(ANTDERRORCLS);
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= HEADERMINHEIGHT;
    };
    ErrorCollectComponent.prototype.install = function () {
        var _this = this;
        this.uninstall();
        if (this.tick < 300)
            this.tick = 300;
        this.$time = setInterval(function () { return _this.update(); }, this.tick);
    };
    ErrorCollectComponent.prototype.uninstall = function () {
        if (this.$time)
            clearInterval(this.$time);
    };
    ErrorCollectComponent.prototype.findParent = function (el, selector) {
        var retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = el;
                break;
            }
            el = el.parentElement;
        }
        return retEl;
    };
    ErrorCollectComponent.prototype.ngOnInit = function () {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('未找到有效 form 元素');
        this.el.nativeElement.classList.add('error-collect', 'pr-lg', 'text-error', 'point');
        this.install();
    };
    ErrorCollectComponent.prototype.ngOnDestroy = function () {
        this.uninstall();
    };
    __decorate([
        core_1.Input()
    ], ErrorCollectComponent.prototype, "tick", null);
    __decorate([
        core_1.HostBinding('class.d-none')
    ], ErrorCollectComponent.prototype, "_hiden", void 0);
    __decorate([
        core_1.HostListener('click')
    ], ErrorCollectComponent.prototype, "_click", null);
    ErrorCollectComponent = __decorate([
        core_1.Component({
            selector: 'error-collect, [error-collect]',
            template: "<i class=\"anticon anticon-exclamation-circle\"></i> {{count}}",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(3, core_1.Inject(platform_browser_1.DOCUMENT))
    ], ErrorCollectComponent);
    return ErrorCollectComponent;
}());
exports.ErrorCollectComponent = ErrorCollectComponent;

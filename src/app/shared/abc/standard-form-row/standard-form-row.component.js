"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var coercion_1 = require("@angular/cdk/coercion");
var StandardFormRowComponent = /** @class */ (function () {
    function StandardFormRowComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._classMap = [];
    }
    Object.defineProperty(StandardFormRowComponent.prototype, "block", {
        /** 是否整行 */
        get: function () { return this._block; },
        set: function (value) {
            this._block = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandardFormRowComponent.prototype, "last", {
        /** 是否最后一行 */
        get: function () { return this._last; },
        set: function (value) {
            this._last = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandardFormRowComponent.prototype, "grid", {
        /** 是否网格布局 */
        get: function () { return this._grid; },
        set: function (value) {
            this._grid = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    StandardFormRowComponent.prototype.setClass = function () {
        var _this = this;
        this._classMap.forEach(function (cls) { return _this.renderer.removeClass(_this.el.nativeElement, cls); });
        this._classMap = ["standard-form-row"];
        if (this.block)
            this._classMap.push('block');
        if (this.grid)
            this._classMap.push('grid');
        if (this.last)
            this._classMap.push('last');
        this._classMap.forEach(function (v) { return _this.renderer.addClass(_this.el.nativeElement, v); });
    };
    StandardFormRowComponent.prototype.ngOnChanges = function (changes) {
        this.setClass();
    };
    __decorate([
        core_1.Input()
    ], StandardFormRowComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input()
    ], StandardFormRowComponent.prototype, "block", null);
    __decorate([
        core_1.Input()
    ], StandardFormRowComponent.prototype, "last", null);
    __decorate([
        core_1.Input()
    ], StandardFormRowComponent.prototype, "grid", null);
    StandardFormRowComponent = __decorate([
        core_1.Component({
            selector: 'standard-form-row',
            template: "\n    <div *ngIf=\"title\" class=\"label\"><span>{{title}}</span></div>\n    <div class=\"control\"><ng-content></ng-content></div>\n    ",
            styleUrls: ['./standard-form-row.less']
        })
    ], StandardFormRowComponent);
    return StandardFormRowComponent;
}());
exports.StandardFormRowComponent = StandardFormRowComponent;

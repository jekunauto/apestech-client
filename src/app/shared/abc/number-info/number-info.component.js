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
var NumberInfoComponent = /** @class */ (function () {
    function NumberInfoComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._title = '';
        this._subTitle = '';
        this._total = '';
        this._subTotal = '';
        /** 状态样式 */
        this.theme = 'light';
        this._gap = 8;
        this._classMap = [];
    }
    Object.defineProperty(NumberInfoComponent.prototype, "title", {
        /** 标题 */
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._titleTpl = value;
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "subTitle", {
        /** 子标题 */
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._subTitleTpl = value;
            else
                this._subTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "total", {
        /** 总量 */
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._totalTpl = value;
            else
                this._total = '' + value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "subTotal", {
        /** 总量后缀 */
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._subTotalTpl = value;
            else
                this._subTotal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberInfoComponent.prototype, "gap", {
        /** 设置数字和描述直接的间距（像素） */
        get: function () { return this._gap; },
        set: function (value) {
            this._gap = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    NumberInfoComponent.prototype.setClass = function () {
        var _this = this;
        this._classMap.forEach(function (cls) { return _this.renderer.removeClass(_this.el.nativeElement, cls); });
        this._classMap = ["number-info"];
        if (this.theme)
            this._classMap.push(this.theme);
        this._classMap.forEach(function (v) { return _this.renderer.addClass(_this.el.nativeElement, v); });
    };
    NumberInfoComponent.prototype.ngOnChanges = function (changes) {
        this.setClass();
    };
    __decorate([
        core_1.Input()
    ], NumberInfoComponent.prototype, "title", null);
    __decorate([
        core_1.Input()
    ], NumberInfoComponent.prototype, "subTitle", null);
    __decorate([
        core_1.Input()
    ], NumberInfoComponent.prototype, "total", null);
    __decorate([
        core_1.Input()
    ], NumberInfoComponent.prototype, "subTotal", null);
    __decorate([
        core_1.Input()
    ], NumberInfoComponent.prototype, "suffix", void 0);
    __decorate([
        core_1.Input()
    ], NumberInfoComponent.prototype, "status", void 0);
    __decorate([
        core_1.Input()
    ], NumberInfoComponent.prototype, "theme", void 0);
    __decorate([
        core_1.Input()
    ], NumberInfoComponent.prototype, "gap", null);
    NumberInfoComponent = __decorate([
        core_1.Component({
            selector: 'number-info',
            template: "\n    <div *ngIf=\"_title || _titleTpl\" class=\"title\"><ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container></div>\n    <div *ngIf=\"_subTitle || _subTitleTpl\" class=\"sub-title\"><ng-container *ngIf=\"_subTitle; else _subTitleTpl\">{{_subTitle}}</ng-container></div>\n    <div class=\"value\" [ngStyle]=\"{'margin-top.px': gap}\">\n        <span><ng-container *ngIf=\"_total; else _totalTpl\">{{_total}}</ng-container><em class=\"suffix\" *ngIf=\"suffix\">{{suffix}}</em></span>\n        <span *ngIf=\"status || subTotal\" class=\"sub-total\">\n            <ng-container *ngIf=\"_subTotal; else _subTotalTpl\">{{_subTotal}}</ng-container>\n            <nz-icon *ngIf=\"status\" nzType=\"caret-{{status}}\"></nz-icon>\n        </span>\n    </div>\n    ",
            styleUrls: ['./number-info.less']
        })
    ], NumberInfoComponent);
    return NumberInfoComponent;
}());
exports.NumberInfoComponent = NumberInfoComponent;

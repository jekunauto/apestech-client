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
var desc_list_item_component_1 = require("./desc-list-item.component");
var DescListComponent = /** @class */ (function () {
    // endregion
    function DescListComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // region fields
        this._title = '';
        this._gutter = 32;
        this.layout = 'horizontal';
        this._xs = 24;
        this._sm = 12;
        this._md = 8;
        this._col = 3;
        this._classMap = [];
    }
    Object.defineProperty(DescListComponent.prototype, "title", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._titleTpl = value;
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DescListComponent.prototype, "gutter", {
        /** 列表项间距，单位为 `px` */
        get: function () { return this._gutter; },
        set: function (value) {
            this._gutter = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DescListComponent.prototype, "col", {
        /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
        get: function () { return this._col; },
        set: function (value) {
            this._col = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    DescListComponent.prototype.setClass = function () {
        var _this = this;
        this._classMap.forEach(function (cls) { return _this.renderer.removeClass(_this.el.nativeElement, cls); });
        this._classMap = ['desc-list', this.layout];
        if (this.size)
            this._classMap.push('desc-list-' + this.size);
        this._classMap.forEach(function (cls) { return _this.renderer.addClass(_this.el.nativeElement, cls); });
    };
    DescListComponent.prototype.setResponsive = function () {
        var responsive = ({
            1: { xs: 24 },
            2: { xs: 24, sm: 12 },
            3: { xs: 24, sm: 12, md: 8 },
            4: { xs: 24, sm: 12, md: 6 },
        })[this.col > 4 ? 4 : this.col];
        this._xs = responsive.xs;
        this._sm = responsive.sm;
        this._md = responsive.md;
    };
    DescListComponent.prototype.ngOnInit = function () {
        this.setClass();
    };
    DescListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.size && !changes.size.firstChange)
            this.setClass();
        if (changes.col)
            this.setResponsive();
    };
    __decorate([
        core_1.Input()
    ], DescListComponent.prototype, "title", null);
    __decorate([
        core_1.Input()
    ], DescListComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input()
    ], DescListComponent.prototype, "gutter", null);
    __decorate([
        core_1.Input()
    ], DescListComponent.prototype, "layout", void 0);
    __decorate([
        core_1.Input()
    ], DescListComponent.prototype, "col", null);
    __decorate([
        core_1.ContentChildren(desc_list_item_component_1.DescListItemComponent)
    ], DescListComponent.prototype, "_items", void 0);
    DescListComponent = __decorate([
        core_1.Component({
            selector: 'desc-list',
            template: "\n    <div *ngIf=\"_title || _titleTpl\" class=\"title\">\n        <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n    </div>\n    <div nz-row [nzGutter]=\"gutter\">\n        <div nz-col [nzXs]=\"_xs\" [nzSm]=\"_sm\" [nzMd]=\"_md\" *ngFor=\"let i of _items\">\n            <ng-template [ngTemplateOutlet]=\"i.tpl\"></ng-template>\n        </div>\n    </div>\n    ",
            styleUrls: ['./desc-list.less']
        })
    ], DescListComponent);
    return DescListComponent;
}());
exports.DescListComponent = DescListComponent;

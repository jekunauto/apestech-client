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
var ChartCardComponent = /** @class */ (function () {
    function ChartCardComponent() {
        // region fields
        this._bordered = false;
        this._avatar = '';
        this._title = '';
        this._action = '';
        this.total = '';
        this._height = 'auto';
        this._footer = '';
        this._loading = false;
        // endregion
    }
    Object.defineProperty(ChartCardComponent.prototype, "bordered", {
        /** 是否显示边框 */
        get: function () { return this._bordered; },
        set: function (value) {
            this._bordered = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartCardComponent.prototype, "avatar", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._avatarTpl = value;
            else
                this._avatar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartCardComponent.prototype, "title", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._titleTpl = value;
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartCardComponent.prototype, "action", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._actionTpl = value;
            else
                this._action = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartCardComponent.prototype, "contentHeight", {
        set: function (value) {
            this._orgHeight = value;
            this._height = typeof value === 'number' ? this._height = value + "px" : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartCardComponent.prototype, "footer", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._footerTpl = value;
            else
                this._footer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartCardComponent.prototype, "loading", {
        /** 是否显示Loading */
        get: function () { return this._loading; },
        set: function (value) {
            this._loading = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], ChartCardComponent.prototype, "bordered", null);
    __decorate([
        core_1.Input()
    ], ChartCardComponent.prototype, "avatar", null);
    __decorate([
        core_1.Input()
    ], ChartCardComponent.prototype, "title", null);
    __decorate([
        core_1.Input()
    ], ChartCardComponent.prototype, "action", null);
    __decorate([
        core_1.Input()
    ], ChartCardComponent.prototype, "total", void 0);
    __decorate([
        core_1.Input()
    ], ChartCardComponent.prototype, "contentHeight", null);
    __decorate([
        core_1.Input()
    ], ChartCardComponent.prototype, "footer", null);
    __decorate([
        core_1.Input()
    ], ChartCardComponent.prototype, "loading", null);
    ChartCardComponent = __decorate([
        core_1.Component({
            selector: 'chart-card',
            template: "\n    <nz-card [nzBodyStyle]=\"{padding: '20px 24px 8px 24px'}\" [nzBordered]=\"bordered\">\n        <nz-spin [nzSpinning]=\"loading\">\n            <div class=\"chart-card\">\n                <div class=\"chart-top\">\n                    <div class=\"avatar\"><ng-container *ngIf=\"_avatar; else _avatarTpl\">{{ _avatar }}</ng-container></div>\n                    <div class=\"meta-wrap\">\n                        <div class=\"meta\">\n                            <span class=\"title\" *ngIf=\"_title; else _titleTpl\">{{ _title }}</span>\n                            <span class=\"action\" *ngIf=\"_action || _actionTpl\">\n                                <ng-container *ngIf=\"_action; else _actionTpl\">{{ _action }}</ng-container>\n                            </span>\n                        </div>\n                        <p *ngIf=\"total\" class=\"total\" [innerHTML]=\"total\"></p>\n                    </div>\n                </div>\n                <div class=\"desc\" [ngStyle]=\"{'height':_height}\">\n                    <div [ngClass]=\"{'fixed': !!_orgHeight }\">\n                        <ng-content></ng-content>\n                    </div>\n                </div>\n                <div class=\"footer\" *ngIf=\"_footer || _footerTpl\">\n                    <ng-container *ngIf=\"_footer; else _footerTpl\">{{ _footer }}</ng-container>\n                </div>\n            </div>\n        </nz-spin>\n    </nz-card>\n    ",
            styleUrls: ['./card.less']
        })
    ], ChartCardComponent);
    return ChartCardComponent;
}());
exports.ChartCardComponent = ChartCardComponent;

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
var _core_1 = require("@core");
var ProHeaderComponent = /** @class */ (function () {
    // endregion
    function ProHeaderComponent(cog, route, menuSrv, i18nSrv, el, renderer) {
        this.cog = cog;
        this.route = route;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.el = el;
        this.renderer = renderer;
        this._autoBreadcrumb = true;
        this.paths = [];
    }
    Object.defineProperty(ProHeaderComponent.prototype, "autoBreadcrumb", {
        /**
         * 自动生成导航，以当前路由从主菜单中定位
         */
        get: function () { return this._autoBreadcrumb; },
        set: function (value) {
            this._autoBreadcrumb = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    ProHeaderComponent.prototype.genBreadcrumb = function () {
        var _this = this;
        if (this.breadcrumb || !this.autoBreadcrumb || !this.menuSrv)
            return;
        var menus = this.menuSrv.getPathByUrl(this.route.url);
        if (menus.length <= 0)
            return;
        var paths = [];
        menus.forEach(function (item) {
            var title;
            if (item.translate && _this.i18nSrv)
                title = _this.i18nSrv.fanyi(item.translate);
            paths.push({ title: title || item.text, link: item.link && [item.link] });
        });
        // add home
        if (this.cog.home) {
            paths.splice(0, 0, {
                title: (this.cog.home_i18n && this.i18nSrv && this.i18nSrv.fanyi(this.cog.home_i18n)) || this.cog.home,
                link: [this.cog.home_link]
            });
        }
        this.paths = paths;
    };
    ProHeaderComponent.prototype.ngOnInit = function () {
        this.el.nativeElement.classList.add('content__title', 'pro-header');
        this.genBreadcrumb();
    };
    __decorate([
        core_1.Input()
    ], ProHeaderComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input()
    ], ProHeaderComponent.prototype, "autoBreadcrumb", null);
    __decorate([
        core_1.ContentChild('breadcrumb')
    ], ProHeaderComponent.prototype, "breadcrumb", void 0);
    __decorate([
        core_1.ContentChild('logo')
    ], ProHeaderComponent.prototype, "logo", void 0);
    __decorate([
        core_1.ContentChild('action')
    ], ProHeaderComponent.prototype, "action", void 0);
    __decorate([
        core_1.ContentChild('content')
    ], ProHeaderComponent.prototype, "content", void 0);
    __decorate([
        core_1.ContentChild('extra')
    ], ProHeaderComponent.prototype, "extra", void 0);
    __decorate([
        core_1.ContentChild('tab')
    ], ProHeaderComponent.prototype, "tab", void 0);
    ProHeaderComponent = __decorate([
        core_1.Component({
            selector: 'pro-header',
            template: "\n    <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n        <nz-breadcrumb>\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n                <ng-container *ngIf=\"i.link\"><a [routerLink]=\"i.link\">{{i.title}}</a></ng-container>\n                <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n        </nz-breadcrumb>\n    </ng-container>\n    <div class=\"detail\">\n        <div *ngIf=\"logo\" class=\"logo\"><ng-template [ngTemplateOutlet]=\"logo\"></ng-template></div>\n        <div class=\"main\">\n            <div class=\"row\">\n                <h1 *ngIf=\"title\" class=\"title\">{{title}}</h1>\n                <div *ngIf=\"action\" class=\"action\"><ng-template [ngTemplateOutlet]=\"action\"></ng-template></div>\n            </div>\n            <div class=\"row\">\n                <div *ngIf=\"content\" class=\"desc\"><ng-template [ngTemplateOutlet]=\"content\"></ng-template></div>\n                <div *ngIf=\"extra\" class=\"extra\"><ng-template [ngTemplateOutlet]=\"extra\"></ng-template></div>\n            </div>\n        </div>\n    </div>\n    <ng-content></ng-content>\n    <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n    ",
            styleUrls: ['./pro-header.less']
        }),
        __param(2, core_1.Optional()),
        __param(3, core_1.Optional()), __param(3, core_1.Inject(_core_1.ALAIN_I18N_TOKEN))
    ], ProHeaderComponent);
    return ProHeaderComponent;
}());
exports.ProHeaderComponent = ProHeaderComponent;

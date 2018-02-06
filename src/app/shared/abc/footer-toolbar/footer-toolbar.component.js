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
var CLS = 'footer-toolbar';
var FooterToolbarComponent = /** @class */ (function () {
    function FooterToolbarComponent(el, renderer, doc) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this._errorCollect = false;
    }
    Object.defineProperty(FooterToolbarComponent.prototype, "errorCollect", {
        get: function () { return this._errorCollect; },
        set: function (value) {
            this._errorCollect = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    FooterToolbarComponent.prototype.ngOnInit = function () {
        this.el.nativeElement.classList.add('footer-toolbar');
        this.renderer.addClass(this.el.nativeElement, CLS);
        this.doc.querySelector('body').classList.add("has-" + CLS);
    };
    FooterToolbarComponent.prototype.ngOnDestroy = function () {
        this.doc.querySelector('body').classList.remove("has-" + CLS);
    };
    __decorate([
        core_1.Input()
    ], FooterToolbarComponent.prototype, "errorCollect", null);
    __decorate([
        core_1.ContentChild('extra')
    ], FooterToolbarComponent.prototype, "extra", void 0);
    FooterToolbarComponent = __decorate([
        core_1.Component({
            selector: 'footer-toolbar',
            template: "\n    <div class=\"left\"><ng-container *ngIf=\"extra\" [ngTemplateOutlet]=\"extra\"></ng-container></div>\n    <div class=\"right\">\n        <error-collect *ngIf=\"errorCollect\"></error-collect>\n        <ng-content></ng-content>\n    </div>\n    "
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT))
    ], FooterToolbarComponent);
    return FooterToolbarComponent;
}());
exports.FooterToolbarComponent = FooterToolbarComponent;

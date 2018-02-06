"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GlobalFooterComponent = /** @class */ (function () {
    function GlobalFooterComponent() {
    }
    __decorate([
        core_1.Input()
    ], GlobalFooterComponent.prototype, "links", void 0);
    __decorate([
        core_1.ContentChild('copyright')
    ], GlobalFooterComponent.prototype, "copyright", void 0);
    GlobalFooterComponent = __decorate([
        core_1.Component({
            selector: 'global-footer',
            template: "\n    <div *ngIf=\"links && links.length > 0\" class=\"links\">\n        <a *ngFor=\"let i of links\" routerLink=\"{{i.href}}\" [attr.target]=\"i.blankTarget\">{{i.title}}</a>\n    </div>\n    <div *ngIf=\"copyright\" class=\"copyright\"><ng-template [ngTemplateOutlet]=\"copyright\"></ng-template></div>\n    ",
            styleUrls: ['./global-footer.less']
        })
    ], GlobalFooterComponent);
    return GlobalFooterComponent;
}());
exports.GlobalFooterComponent = GlobalFooterComponent;

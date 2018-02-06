"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DescListItemComponent = /** @class */ (function () {
    function DescListItemComponent() {
        // region fields
        this._term = '';
    }
    Object.defineProperty(DescListItemComponent.prototype, "term", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._termTpl = value;
            else
                this._term = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], DescListItemComponent.prototype, "term", null);
    __decorate([
        core_1.ViewChild('tpl')
    ], DescListItemComponent.prototype, "tpl", void 0);
    DescListItemComponent = __decorate([
        core_1.Component({
            selector: 'desc-list-item',
            template: "\n    <ng-template #tpl>\n        <div class=\"term\" *ngIf=\"_term || _termTpl\">\n            <ng-container *ngIf=\"_term; else _termTpl\">{{_term}}</ng-container>\n        </div>\n        <div class=\"detail\"><ng-content></ng-content></div>\n    </ng-template>\n    "
        })
    ], DescListItemComponent);
    return DescListItemComponent;
}());
exports.DescListItemComponent = DescListItemComponent;

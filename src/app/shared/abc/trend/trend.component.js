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
var TrendComponent = /** @class */ (function () {
    function TrendComponent() {
        this._colorful = true;
    }
    Object.defineProperty(TrendComponent.prototype, "colorful", {
        /** 是否彩色标记 */
        get: function () { return this._colorful; },
        set: function (value) {
            this._colorful = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], TrendComponent.prototype, "flag", void 0);
    __decorate([
        core_1.Input()
    ], TrendComponent.prototype, "colorful", null);
    TrendComponent = __decorate([
        core_1.Component({
            selector: 'trend',
            template: "\n    <ng-content></ng-content>\n    <span *ngIf=\"flag\" class=\"{{flag}}\"><i class=\"anticon anticon-caret-{{flag}}\"></i></span>\n    ",
            styleUrls: ['./trend.less'],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[class.grey]': '!colorful'
            }
        })
    ], TrendComponent);
    return TrendComponent;
}());
exports.TrendComponent = TrendComponent;

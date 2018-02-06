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
var EllipsisComponent = /** @class */ (function () {
    function EllipsisComponent() {
        this._lines = 3;
    }
    Object.defineProperty(EllipsisComponent.prototype, "lines", {
        /** 在按照行数截取下最大的行数，超过则截取省略 */
        get: function () { return this._lines; },
        set: function (value) {
            this._lines = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        core_1.HostBinding('style.-webkit-line-clamp')
    ], EllipsisComponent.prototype, "lines", null);
    EllipsisComponent = __decorate([
        core_1.Component({
            selector: 'ellipsis',
            template: "<ng-content></ng-content>",
            styleUrls: ['./ellipsis.less']
        })
    ], EllipsisComponent);
    return EllipsisComponent;
}());
exports.EllipsisComponent = EllipsisComponent;

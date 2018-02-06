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
var MiniProgressComponent = /** @class */ (function () {
    function MiniProgressComponent() {
        // region: fields
        this.color = '#1890FF';
        // endregion
    }
    Object.defineProperty(MiniProgressComponent.prototype, "target", {
        get: function () { return this._target; },
        set: function (value) {
            var a = coercion_1.coerceNumberProperty(value);
            this._target = Math.min(Math.max(coercion_1.coerceNumberProperty(value), 0), 100);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniProgressComponent.prototype, "strokeWidth", {
        get: function () { return this._strokeWidth; },
        set: function (value) {
            this._strokeWidth = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniProgressComponent.prototype, "percent", {
        get: function () { return this._percent; },
        set: function (value) {
            this._percent = Math.min(Math.max(coercion_1.coerceNumberProperty(value), 0), 100);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], MiniProgressComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input()
    ], MiniProgressComponent.prototype, "target", null);
    __decorate([
        core_1.Input()
    ], MiniProgressComponent.prototype, "strokeWidth", null);
    __decorate([
        core_1.Input()
    ], MiniProgressComponent.prototype, "percent", null);
    MiniProgressComponent = __decorate([
        core_1.Component({
            selector: 'mini-progress',
            template: "\n    <nz-tooltip [nzTitle]=\"'\u76EE\u6807\u503C: ' + target + '%'\">\n        <div nz-tooltip class=\"target\" [ngStyle]=\"{'left.%': target}\">\n            <span [ngStyle]=\"{'background-color': color}\"></span>\n            <span [ngStyle]=\"{'background-color': color}\"></span>\n        </div>\n    </nz-tooltip>\n    <div class=\"progress-wrap\">\n        <div class=\"progress\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n    </div>\n    ",
            styleUrls: ['./mini-progress.less']
        })
    ], MiniProgressComponent);
    return MiniProgressComponent;
}());
exports.MiniProgressComponent = MiniProgressComponent;

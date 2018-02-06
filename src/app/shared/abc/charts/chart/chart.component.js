"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var FromEventObservable_1 = require("rxjs/observable/FromEventObservable");
var coercion_1 = require("@angular/cdk/coercion");
var ChartComponent = /** @class */ (function () {
    // endregion
    function ChartComponent(el) {
        this.el = el;
        this._resizeTime = 0;
        this.render = new core_1.EventEmitter();
        this.resize = new core_1.EventEmitter();
        this.destroy = new core_1.EventEmitter();
        // region: resize
        this.resize$ = null;
    }
    Object.defineProperty(ChartComponent.prototype, "height", {
        // region: fields
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "resizeTime", {
        get: function () { return this._resizeTime; },
        set: function (value) {
            this._resizeTime = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    ChartComponent.prototype.renderChart = function () {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
    };
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.renderChart(); }, 200);
    };
    ChartComponent.prototype.ngOnDestroy = function () {
        this.destroy.emit(this.el);
        this.uninstallResizeEvent();
    };
    ChartComponent.prototype.installResizeEvent = function () {
        var _this = this;
        if (this.resizeTime <= 0 || !this.resize$)
            return;
        if (this.resizeTime <= 200)
            this.resizeTime = 200;
        this.resize$ = FromEventObservable_1.FromEventObservable.create(window, 'resize')
            .pipe(operators_1.debounceTime(this.resizeTime))
            .subscribe(function () { return _this.resize.emit(_this.el); });
    };
    ChartComponent.prototype.uninstallResizeEvent = function () {
        if (this.resize$)
            this.resize$.unsubscribe();
    };
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input()
    ], ChartComponent.prototype, "height", null);
    __decorate([
        core_1.Input()
    ], ChartComponent.prototype, "resizeTime", null);
    __decorate([
        core_1.Output()
    ], ChartComponent.prototype, "render", void 0);
    __decorate([
        core_1.Output()
    ], ChartComponent.prototype, "resize", void 0);
    __decorate([
        core_1.Output()
    ], ChartComponent.prototype, "destroy", void 0);
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'chart',
            template: "",
            styles: [":host{display:block} "]
        })
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;

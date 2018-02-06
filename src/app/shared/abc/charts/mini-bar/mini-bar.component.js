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
var MiniBarComponent = /** @class */ (function () {
    function MiniBarComponent(cd) {
        this.cd = cd;
        // region: fields
        this.color = '#1890FF';
        this._height = 0;
        this._borderWidth = 5;
        this.padding = [8, 8, 8, 8];
        this.initFlag = false;
    }
    Object.defineProperty(MiniBarComponent.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniBarComponent.prototype, "borderWidth", {
        get: function () { return this._borderWidth; },
        set: function (value) {
            this._borderWidth = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    MiniBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFlag = true;
        setTimeout(function () { return _this.install(); }, 100);
    };
    MiniBarComponent.prototype.install = function () {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.node.nativeElement.innerHTML = '';
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height,
            padding: this.padding,
            legend: null
        });
        chart.axis(false);
        chart.source(this.data, {
            x: {
                type: 'cat'
            },
            y: {
                min: 0
            }
        });
        chart.tooltip({
            showTitle: false,
            hideMarkders: false,
            crosshairs: false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: "0px 4px" }
        });
        chart
            .interval()
            .position('x*y')
            .size(this.borderWidth)
            .color(this.color)
            .tooltip('x*y', function (x, y) {
            return {
                name: x,
                value: y
            };
        });
        chart.render();
        this.chart = chart;
    };
    MiniBarComponent.prototype.uninstall = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    MiniBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.initFlag)
            this.install();
    };
    MiniBarComponent.prototype.ngOnDestroy = function () {
        this.uninstall();
    };
    __decorate([
        core_1.Input()
    ], MiniBarComponent.prototype, "color", void 0);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input()
    ], MiniBarComponent.prototype, "height", null);
    __decorate([
        core_1.Input()
    ], MiniBarComponent.prototype, "borderWidth", null);
    __decorate([
        core_1.Input()
    ], MiniBarComponent.prototype, "padding", void 0);
    __decorate([
        core_1.Input()
    ], MiniBarComponent.prototype, "data", void 0);
    __decorate([
        core_1.ViewChild('container')
    ], MiniBarComponent.prototype, "node", void 0);
    MiniBarComponent = __decorate([
        core_1.Component({
            selector: 'mini-bar',
            template: "<div #container></div>",
            styles: [":host { display: block; }"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], MiniBarComponent);
    return MiniBarComponent;
}());
exports.MiniBarComponent = MiniBarComponent;

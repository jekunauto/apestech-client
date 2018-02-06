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
var MiniAreaComponent = /** @class */ (function () {
    function MiniAreaComponent(cd) {
        this.cd = cd;
        // region: fields
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this._borderWidth = 2;
        this._fit = true;
        this._line = false;
        this._animate = true;
        this.padding = [8, 8, 8, 8];
        this.initFlag = false;
    }
    Object.defineProperty(MiniAreaComponent.prototype, "borderWidth", {
        get: function () { return this._borderWidth; },
        set: function (value) {
            this._borderWidth = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniAreaComponent.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniAreaComponent.prototype, "fit", {
        get: function () { return this._fit; },
        set: function (value) {
            this._fit = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniAreaComponent.prototype, "line", {
        get: function () { return this._line; },
        set: function (value) {
            this._line = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiniAreaComponent.prototype, "animate", {
        get: function () { return this._animate; },
        set: function (value) {
            this._animate = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    MiniAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFlag = true;
        setTimeout(function () { return _this.install(); }, 100);
    };
    MiniAreaComponent.prototype.install = function () {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.node.nativeElement.innerHTML = '';
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: this.fit,
            height: +this.height,
            animate: this.animate,
            padding: this.padding,
            legend: null
        });
        if (!this.xAxis && !this.yAxis) {
            chart.axis(false);
        }
        if (this.xAxis) {
            chart.axis('x', this.xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (this.yAxis) {
            chart.axis('y', this.yAxis);
        }
        else {
            chart.axis('y', false);
        }
        var dataConfig = {
            x: {
                type: 'cat',
                range: [0, 1],
                xAxis: this.xAxis
            },
            y: {
                min: 0,
                yAxis: this.yAxis
            }
        };
        chart.tooltip({
            showTitle: false,
            hideMarkders: false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: "0px 4px" }
        });
        var view = chart.view();
        view.source(this.data, dataConfig);
        view.area()
            .position('x*y')
            .color(this.color)
            .tooltip('x*y', function (x, y) {
            return {
                name: x,
                value: y
            };
        })
            .shape('smooth')
            .style({ fillOpacity: 1 });
        if (this.line) {
            var view2 = chart.view();
            view2.source(this.data, dataConfig);
            view2.line().position('x*y').color(this.borderColor).size(this.borderWidth).shape('smooth');
            view2.tooltip(false);
        }
        chart.render();
        this.chart = chart;
    };
    MiniAreaComponent.prototype.uninstall = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    MiniAreaComponent.prototype.ngOnChanges = function (changes) {
        if (this.initFlag)
            this.install();
    };
    MiniAreaComponent.prototype.ngOnDestroy = function () {
        this.uninstall();
    };
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "borderColor", void 0);
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "borderWidth", null);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input()
    ], MiniAreaComponent.prototype, "height", null);
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "fit", null);
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "line", null);
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "animate", null);
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "xAxis", void 0);
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "yAxis", void 0);
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "padding", void 0);
    __decorate([
        core_1.Input()
    ], MiniAreaComponent.prototype, "data", void 0);
    __decorate([
        core_1.ViewChild('container')
    ], MiniAreaComponent.prototype, "node", void 0);
    MiniAreaComponent = __decorate([
        core_1.Component({
            selector: 'mini-area',
            template: "<div #container></div>",
            styles: [":host { display: block; }"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], MiniAreaComponent);
    return MiniAreaComponent;
}());
exports.MiniAreaComponent = MiniAreaComponent;

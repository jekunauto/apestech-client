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
var G2BarComponent = /** @class */ (function () {
    function G2BarComponent(el, cd) {
        this.el = el;
        this.cd = cd;
        // region: fields
        this._title = '';
        this.color = 'rgba(24, 144, 255, 0.85)';
        this._height = 0;
        this._autoLabel = true;
        // endregion
        this._cls = true;
        this.initFlag = false;
        // region: resize
        this.autoHideXLabels = false;
        this.scroll$ = null;
    }
    Object.defineProperty(G2BarComponent.prototype, "title", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._titleTpl = value;
            else
                this._title = value;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2BarComponent.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2BarComponent.prototype, "autoLabel", {
        get: function () { return this._autoLabel; },
        set: function (value) {
            this._autoLabel = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    G2BarComponent.prototype.install = function () {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        // this.uninstall();
        this.node.nativeElement.innerHTML = '';
        var padding = Object.assign([], this.padding);
        if (padding.length <= 0)
            padding = [32, 0, this.autoHideXLabels ? 8 : 32, 40];
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height - 22,
            legend: null,
            padding: padding
        });
        chart.axis('x', !this.autoHideXLabels);
        chart.axis('y', {
            title: false,
            line: false,
            tickLine: false
        });
        chart.source(this.data, {
            x: {
                type: 'cat'
            },
            y: {
                min: 0
            }
        });
        chart.tooltip({
            showTitle: false
        });
        chart
            .interval()
            .position('x*y')
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
    G2BarComponent.prototype.uninstall = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    G2BarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFlag = true;
        setTimeout(function () { return _this.resize(); }, 100);
        this.installResizeEvent();
    };
    G2BarComponent.prototype.ngOnChanges = function (changes) {
        if (this.initFlag)
            this.install();
    };
    G2BarComponent.prototype.ngOnDestroy = function () {
        this.uninstallResizeEvent();
        this.uninstall();
    };
    G2BarComponent.prototype.installResizeEvent = function () {
        var _this = this;
        if (!this.autoLabel || this.scroll$)
            return;
        this.scroll$ = FromEventObservable_1.FromEventObservable.create(window, 'resize')
            .pipe(operators_1.debounceTime(200))
            .subscribe(function () { return _this.resize(); });
    };
    G2BarComponent.prototype.uninstallResizeEvent = function () {
        if (this.scroll$)
            this.scroll$.unsubscribe();
    };
    G2BarComponent.prototype.resize = function () {
        var canvasWidth = this.el.nativeElement.clientWidth;
        var minWidth = this.data.length * 30;
        if (canvasWidth <= minWidth) {
            if (!this.autoHideXLabels) {
                this.autoHideXLabels = true;
                this.install();
                return;
            }
        }
        else if (this.autoHideXLabels) {
            this.autoHideXLabels = false;
            this.install();
            return;
        }
        if (!this.chart)
            this.install();
    };
    __decorate([
        core_1.Input()
    ], G2BarComponent.prototype, "title", null);
    __decorate([
        core_1.Input()
    ], G2BarComponent.prototype, "color", void 0);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input()
    ], G2BarComponent.prototype, "height", null);
    __decorate([
        core_1.Input()
    ], G2BarComponent.prototype, "padding", void 0);
    __decorate([
        core_1.Input()
    ], G2BarComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input()
    ], G2BarComponent.prototype, "autoLabel", null);
    __decorate([
        core_1.HostBinding('class.g2-chart')
    ], G2BarComponent.prototype, "_cls", void 0);
    __decorate([
        core_1.ViewChild('container')
    ], G2BarComponent.prototype, "node", void 0);
    G2BarComponent = __decorate([
        core_1.Component({
            selector: 'bar',
            template: "\n    <ng-container *ngIf=\"_title; else _titleTpl\"><h4>{{_title}}</h4></ng-container>\n    <div #container></div>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], G2BarComponent);
    return G2BarComponent;
}());
exports.G2BarComponent = G2BarComponent;

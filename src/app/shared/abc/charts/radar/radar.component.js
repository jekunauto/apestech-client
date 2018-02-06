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
var G2RadarComponent = /** @class */ (function () {
    function G2RadarComponent(el, cd) {
        this.el = el;
        this.cd = cd;
        // region: fields
        this._title = '';
        this._height = 0;
        this.padding = [44, 30, 16, 30];
        this._hasLegend = true;
        this._tickCount = 4;
        this.data = [];
        this.initFlag = false;
        this.legendData = [];
    }
    Object.defineProperty(G2RadarComponent.prototype, "title", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._titleTpl = value;
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2RadarComponent.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2RadarComponent.prototype, "hasLegend", {
        get: function () { return this._hasLegend; },
        set: function (value) {
            this._hasLegend = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2RadarComponent.prototype, "tickCount", {
        get: function () { return this._tickCount; },
        set: function (value) {
            this._tickCount = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    G2RadarComponent.prototype.handleLegendClick = function (i) {
        var _this = this;
        this.legendData[i].checked = !this.legendData[i].checked;
        if (this.chart) {
            // const filterItem = this.legendData.filter(l => l.checked).map(l => l.name);
            this.chart.filter('name', function (val) { return _this.legendData.find(function (w) { return w.name === val; }).checked; });
            this.chart.repaint();
        }
    };
    G2RadarComponent.prototype.install = function () {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.node.nativeElement.innerHTML = '';
        var colors = [
            '#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911',
        ];
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height - (this.hasLegend ? 80 : 22),
            padding: this.padding
        });
        chart.source(this.data, {
            value: {
                min: 0,
                tickCount: this.tickCount
            }
        });
        chart.coord('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            labelOffset: 8,
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)'
                }
            },
            grid: {
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0]
                }
            }
        });
        chart.axis('value', {
            grid: {
                type: 'polygon',
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0]
                }
            },
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)'
                }
            }
        });
        chart.line().position('label*value').color('name', colors);
        chart.point().position('label*value').color('name', colors).shape('circle').size(3);
        chart.render();
        this.chart = chart;
        if (this.hasLegend) {
            this.legendData = chart.getAllGeoms()[0]._attrs.dataArray.map(function (item) {
                var origin = item[0]._origin;
                var result = {
                    name: origin.name,
                    color: item[0].color,
                    checked: true,
                    value: item.reduce(function (p, n) { return p + n._origin.value; }, 0),
                };
                return result;
            });
            this.cd.markForCheck();
        }
    };
    G2RadarComponent.prototype.uninstall = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    G2RadarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFlag = true;
        setTimeout(function () { return _this.install(); }, 100);
    };
    G2RadarComponent.prototype.ngOnChanges = function (changes) {
        if (this.initFlag)
            this.install();
    };
    G2RadarComponent.prototype.ngOnDestroy = function () {
        this.uninstall();
    };
    __decorate([
        core_1.Input()
    ], G2RadarComponent.prototype, "title", null);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input()
    ], G2RadarComponent.prototype, "height", null);
    __decorate([
        core_1.Input()
    ], G2RadarComponent.prototype, "padding", void 0);
    __decorate([
        core_1.Input()
    ], G2RadarComponent.prototype, "hasLegend", null);
    __decorate([
        core_1.Input()
    ], G2RadarComponent.prototype, "tickCount", null);
    __decorate([
        core_1.Input()
    ], G2RadarComponent.prototype, "data", void 0);
    __decorate([
        core_1.ViewChild('container')
    ], G2RadarComponent.prototype, "node", void 0);
    G2RadarComponent = __decorate([
        core_1.Component({
            selector: 'radar',
            template: "\n    <h4 *ngIf=\"_title; else _titleTpl\">{{ _title }}</h4>\n    <div #container></div>\n    <div nz-row class=\"legend\" *ngIf=\"hasLegend\">\n        <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\" (click)=\"handleLegendClick(idx)\">\n            <div class=\"legend-item\">\n                <p>\n                    <i class=\"dot\" [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n                    <span>{{i.name}}</span>\n                </p>\n                <h6>{{i.value}}</h6>\n            </div>\n        </div>\n    </div>",
            styleUrls: ['./radar.less'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], G2RadarComponent);
    return G2RadarComponent;
}());
exports.G2RadarComponent = G2RadarComponent;

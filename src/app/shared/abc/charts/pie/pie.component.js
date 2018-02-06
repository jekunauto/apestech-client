"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FromEventObservable_1 = require("rxjs/observable/FromEventObservable");
var operators_1 = require("rxjs/operators");
var coercion_1 = require("@angular/cdk/coercion");
var G2PieComponent = /** @class */ (function () {
    function G2PieComponent(el, cd) {
        this.el = el;
        this.cd = cd;
        this._animate = true;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this._height = 0;
        this._hasLegend = false;
        this._legendBlock = false;
        this.inner = 0.75;
        this.padding = [12, 0, 12, 0];
        this._tooltip = true;
        this._lineWidth = 0;
        this._select = true;
        this.initFlag = false;
        this.legendData = [];
        // region: resize
        this.scroll$ = null;
    }
    Object.defineProperty(G2PieComponent.prototype, "animate", {
        // region: fields
        get: function () { return this._animate; },
        set: function (value) {
            this._animate = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "hasLegend", {
        get: function () { return this._hasLegend; },
        set: function (value) {
            this._hasLegend = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "legendBlock", {
        get: function () { return this._legendBlock; },
        set: function (value) {
            this._legendBlock = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "percent", {
        get: function () { return this._percent; },
        set: function (value) {
            this._percent = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "tooltip", {
        get: function () { return this._tooltip; },
        set: function (value) {
            this._tooltip = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "lineWidth", {
        get: function () { return this._lineWidth; },
        set: function (value) {
            this._lineWidth = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "select", {
        get: function () { return this._select; },
        set: function (value) {
            this._select = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    G2PieComponent.prototype.install = function () {
        var _this = this;
        var formatColor;
        if (typeof this.percent !== 'undefined') {
            this.select = false;
            this.tooltip = false;
            formatColor = function (value) { return value === '占比' ? _this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5'; };
            /* eslint no-param-reassign: */
            this.data = [
                {
                    x: '占比',
                    y: +this.percent
                },
                {
                    x: '反比',
                    y: 100 - +this.percent
                }
            ];
        }
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.node.nativeElement.innerHTML = '';
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: this.height,
            padding: this.padding,
            animate: this.animate
        });
        if (!this.tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>'
            });
        }
        chart.axis(false);
        chart.legend(false);
        var dv = new DataSet.DataView();
        dv.source(this.data).transform({
            type: 'percent',
            field: 'y',
            dimension: 'x',
            as: 'percent'
        });
        chart.source(dv, {
            x: {
                type: 'cat',
                range: [0, 1]
            },
            y: {
                min: 0
            }
        });
        chart.coord('theta', { innerRadius: this.inner });
        chart
            .intervalStack()
            .position('y')
            .style({ lineWidth: this.lineWidth, stroke: '#fff' })
            .tooltip('x*percent', function (item, percent) {
            return {
                name: item,
                value: percent
            };
        })
            .color('x', this.percent ? formatColor : this.colors)
            .select(this.select);
        chart.render();
        this.chart = chart;
        if (this.hasLegend) {
            this.legendData = chart.getAllGeoms()[0]._attrs.dataArray.map(function (item) {
                var origin = item[0]._origin;
                origin.color = item[0].color;
                origin.checked = true;
                origin.percent = (origin.percent * 100).toFixed(2);
                return origin;
            });
            this.cd.markForCheck();
        }
    };
    G2PieComponent.prototype.uninstall = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    G2PieComponent.prototype.handleLegendClick = function (i) {
        this.legendData[i].checked = !this.legendData[i].checked;
        if (this.chart) {
            this.chart.filter('x', function (val, item) { return item.checked; });
            this.chart.repaint();
        }
    };
    G2PieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFlag = true;
        setTimeout(function () { return _this.install(); }, 100);
        this.installResizeEvent();
    };
    G2PieComponent.prototype.ngOnChanges = function (changes) {
        if (this.initFlag)
            this.install();
    };
    G2PieComponent.prototype.ngOnDestroy = function () {
        this.uninstallResizeEvent();
        this.uninstall();
    };
    G2PieComponent.prototype.installResizeEvent = function () {
        var _this = this;
        if (!this.hasLegend)
            return;
        this.scroll$ = FromEventObservable_1.FromEventObservable.create(window, 'resize')
            .pipe(operators_1.debounceTime(200))
            .subscribe(function () { return _this.resize(); });
    };
    G2PieComponent.prototype.uninstallResizeEvent = function () {
        if (this.scroll$)
            this.scroll$.unsubscribe();
    };
    G2PieComponent.prototype.resize = function () {
        if (this.el.nativeElement.clientWidth <= 380) {
            if (!this.legendBlock) {
                this.legendBlock = true;
            }
        }
        else if (this.legendBlock) {
            this.legendBlock = false;
        }
        if (!this.chart)
            this.install();
    };
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "animate", null);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "subTitle", void 0);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "total", void 0);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "height", null);
    __decorate([
        core_1.HostBinding('class.has-legend'),
        core_1.Input()
    ], G2PieComponent.prototype, "hasLegend", null);
    __decorate([
        core_1.HostBinding('class.legend-block'),
        core_1.Input()
    ], G2PieComponent.prototype, "legendBlock", null);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "inner", void 0);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "padding", void 0);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "percent", null);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "lineWidth", null);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "select", null);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "valueFormat", void 0);
    __decorate([
        core_1.Input()
    ], G2PieComponent.prototype, "colors", void 0);
    __decorate([
        core_1.ViewChild('container')
    ], G2PieComponent.prototype, "node", void 0);
    G2PieComponent = __decorate([
        core_1.Component({
            selector: 'pie',
            template: "\n    <div class=\"chart\">\n        <div #container></div>\n        <div *ngIf=\"subTitle || total\" class=\"total\">\n            <h4 *ngIf=\"subTitle\" class=\"pie-sub-title\" [innerHTML]=\"subTitle\"></h4>\n            <div *ngIf=\"total\" class=\"pie-stat\" [innerHTML]=\"total\"></div>\n        </div>\n    </div>\n    <ul *ngIf=\"hasLegend && legendData?.length\" class=\"legend\">\n        <li *ngFor=\"let item of legendData; let index = index\" (click)=\"handleLegendClick(index)\">\n            <span class=\"dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n            <span class=\"legend-title\">{{item.x}}</span>\n            <nz-divider nzType=\"vertical\"></nz-divider>\n            <span class=\"percent\">{{item.percent}}%</span>\n            <span class=\"value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n        </li>\n    </ul>",
            styleUrls: ['./pie.less'],
            encapsulation: core_1.ViewEncapsulation.Emulated,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], G2PieComponent);
    return G2PieComponent;
}());
exports.G2PieComponent = G2PieComponent;

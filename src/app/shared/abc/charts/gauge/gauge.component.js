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
var GaugeComponent = /** @class */ (function () {
    function GaugeComponent(cd) {
        this.cd = cd;
        this.color = '#2F9CFF';
        this.bgColor = '#F0F2F5';
        this.initFlag = false;
    }
    Object.defineProperty(GaugeComponent.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaugeComponent.prototype, "percent", {
        get: function () { return this._percent; },
        set: function (value) {
            this._percent = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    GaugeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFlag = true;
        setTimeout(function () { return _this.install(); }, 100);
    };
    GaugeComponent.prototype.createData = function () {
        return [{ name: this.title, value: +this.percent }];
    };
    GaugeComponent.prototype.draw = function () {
        if (!this.chart)
            return;
        this.chart.guide().clear();
        var data = this.createData();
        // 绘制仪表盘背景
        this.chart.guide().arc({
            zIndex: 0,
            top: false,
            start: [0, 0.95],
            end: [100, 0.95],
            style: {
                stroke: this.bgColor,
                lineWidth: 12
            }
        });
        // 绘制指标
        this.chart.guide().arc({
            zIndex: 1,
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: this.color,
                lineWidth: 12,
            }
        });
        this.chart.changeData(data);
    };
    GaugeComponent.prototype.install = function () {
        this.node.nativeElement.innerHTML = '';
        var Shape = G2.Shape;
        // 自定义Shape 部分
        Shape.registerShape('point', 'pointer', {
            drawShape: function (cfg, group) {
                var point = cfg.points[0]; // 获取第一个标记点
                point = this.parsePoint(point);
                var center = this.parsePoint({
                    x: 0,
                    y: 0
                });
                // 绘制指针
                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: point.x,
                        y2: point.y,
                        stroke: cfg.color,
                        lineWidth: 2,
                        lineCap: 'round'
                    }
                });
                var origin = cfg.origin;
                group.addShape('text', {
                    attrs: {
                        x: center.x,
                        y: center.y + 80,
                        text: origin._origin.value + "%",
                        textAlign: 'center',
                        fontSize: 24,
                        fill: 'rgba(0, 0, 0, 0.85)'
                    }
                });
                return group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 9.75,
                        stroke: cfg.color,
                        lineWidth: 2,
                        fill: '#fff'
                    }
                });
            }
        });
        var data = this.createData();
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: this.height,
            padding: [10, 10, 30, 10]
        });
        chart.source(data);
        chart.coord('polar', {
            startAngle: -1.2 * Math.PI,
            endAngle: 0.2 * Math.PI
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6
        });
        chart.axis('1', false);
        // 刻度值
        chart.axis('value', {
            zIndex: 2,
            line: null,
            label: {
                offset: -12,
                formatter: this.format
            },
            tickLine: null,
            grid: null
        });
        chart.legend(false);
        chart.point({
            generatePoints: true
        }).position('value*1')
            .shape('pointer')
            .color(this.color)
            .active(false);
        this.chart = chart;
        this.draw();
    };
    GaugeComponent.prototype.uninstall = function () {
        if (this.chart)
            this.chart.destroy();
    };
    GaugeComponent.prototype.ngOnChanges = function (changes) {
        if (this.initFlag)
            this.draw();
    };
    GaugeComponent.prototype.ngOnDestroy = function () {
        this.uninstall();
    };
    __decorate([
        core_1.Input()
    ], GaugeComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input()
    ], GaugeComponent.prototype, "height", null);
    __decorate([
        core_1.Input()
    ], GaugeComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input()
    ], GaugeComponent.prototype, "bgColor", void 0);
    __decorate([
        core_1.Input()
    ], GaugeComponent.prototype, "format", void 0);
    __decorate([
        core_1.Input()
    ], GaugeComponent.prototype, "percent", null);
    __decorate([
        core_1.ViewChild('container')
    ], GaugeComponent.prototype, "node", void 0);
    GaugeComponent = __decorate([
        core_1.Component({
            selector: 'gauge',
            template: "<div #container></div>",
            styles: [":host { display: block; }"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], GaugeComponent);
    return GaugeComponent;
}());
exports.GaugeComponent = GaugeComponent;

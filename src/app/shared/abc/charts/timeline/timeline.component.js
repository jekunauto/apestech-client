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
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(cd) {
        this.cd = cd;
        // region: fields
        this._title = '';
        this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
        this._height = 400;
        this.padding = [60, 20, 40, 40];
        this._borderWidth = 2;
        this.initFlag = false;
    }
    Object.defineProperty(TimelineComponent.prototype, "title", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._titleTpl = value;
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineComponent.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineComponent.prototype, "borderWidth", {
        get: function () { return this._borderWidth; },
        set: function (value) {
            this._borderWidth = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFlag = true;
        setTimeout(function () { return _this.install(); }, 200);
    };
    TimelineComponent.prototype.install = function () {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        // clean
        this.sliderNode.nativeElement.innerHTML = '';
        this.node.nativeElement.innerHTML = '';
        var MAX = 8;
        var begin = this.data.length > MAX ? (this.data.length - MAX) / 2 : 0;
        var ds = new DataSet({
            state: {
                start: this.data[begin - 1].x,
                end: this.data[begin - 1 + MAX].x
            }
        });
        var dv = ds.createView().source(this.data);
        dv.source(this.data).transform({
            type: 'filter',
            callback: function (obj) {
                var time = new Date(obj.x).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
                return time >= ds.state.start && time <= ds.state.end;
            }
        });
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height,
            padding: this.padding
        });
        chart.axis('x', { title: false });
        chart.axis('y1', {
            title: false
        });
        chart.axis('y2', false);
        var max;
        if (this.data[0] && this.data[0].y1 && this.data[0].y2) {
            max = Math.max(this.data.sort(function (a, b) { return b.y1 - a.y1; })[0].y1, this.data.sort(function (a, b) { return b.y2 - a.y2; })[0].y2);
        }
        chart.source(dv, {
            x: {
                type: 'timeCat',
                tickCount: MAX,
                mask: 'HH:MM',
                range: [0, 1]
            },
            y1: {
                alias: this.titleMap.y1,
                max: max,
                min: 0
            },
            y2: {
                alias: this.titleMap.y2,
                max: max,
                min: 0
            }
        });
        chart.legend({
            position: 'top',
            custom: true,
            clickable: false,
            items: [
                { value: this.titleMap.y1, fill: this.colorMap.y1 },
                { value: this.titleMap.y2, fill: this.colorMap.y2 }
            ]
        });
        chart.line().position('x*y1').color(this.colorMap.y1).size(this.borderWidth);
        chart.line().position('x*y2').color(this.colorMap.y2).size(this.borderWidth);
        chart.render();
        var sliderPadding = Object.assign([], this.padding);
        sliderPadding[0] = 0;
        var slider = new Slider({
            container: this.sliderNode.nativeElement,
            height: 26,
            padding: sliderPadding,
            scales: {
                x: {
                    type: 'time',
                    tickCount: 16,
                    mask: 'HH:MM'
                }
            },
            backgroundChart: {
                type: 'line'
            },
            start: ds.state.start,
            end: ds.state.end,
            xAxis: 'x',
            yAxis: 'y1',
            data: this.data,
            onChange: function (_a) {
                var startValue = _a.startValue, endValue = _a.endValue;
                ds.setState('start', startValue);
                ds.setState('end', endValue);
            }
        });
        slider.render();
        this.chart = chart;
        this.slider = slider;
    };
    TimelineComponent.prototype.uninstall = function () {
        if (this.chart)
            this.chart.destroy();
        if (this.slider)
            this.slider.destroy();
    };
    TimelineComponent.prototype.ngOnChanges = function (changes) {
        if (this.initFlag)
            this.install();
    };
    TimelineComponent.prototype.ngOnDestroy = function () {
        this.uninstall();
    };
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "title", null);
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "titleMap", void 0);
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "colorMap", void 0);
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "height", null);
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "padding", void 0);
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "borderWidth", null);
    __decorate([
        core_1.ViewChild('container')
    ], TimelineComponent.prototype, "node", void 0);
    __decorate([
        core_1.ViewChild('slider')
    ], TimelineComponent.prototype, "sliderNode", void 0);
    TimelineComponent = __decorate([
        core_1.Component({
            selector: 'timeline',
            template: "\n    <ng-container *ngIf=\"_title; else _titleTpl\"><h4>{{_title}}</h4></ng-container>\n    <div #container></div>\n    <div #slider></div>",
            styles: [":host {display:block}"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;

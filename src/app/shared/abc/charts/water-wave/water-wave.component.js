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
var WaterWaveComponent = /** @class */ (function () {
    function WaterWaveComponent(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        // region: fields
        this._title = '';
        this.color = '#1890FF';
        this._height = 160;
        this.initFlag = false;
        // region: resize
        this.autoHideXLabels = false;
        this.scroll$ = null;
    }
    Object.defineProperty(WaterWaveComponent.prototype, "title", {
        set: function (value) {
            if (value instanceof core_1.TemplateRef)
                this._titleTpl = value;
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterWaveComponent.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaterWaveComponent.prototype, "percent", {
        get: function () { return this._percent; },
        set: function (value) {
            this._percent = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    WaterWaveComponent.prototype.renderChart = function () {
        var data = this.percent / 100;
        if (!data)
            return;
        this.node.nativeElement.innerHTML = '';
        var self = this;
        var canvas = this.node.nativeElement;
        var ctx = canvas.getContext('2d');
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        var radius = canvasWidth / 2;
        var lineWidth = 2;
        var cR = radius - (lineWidth);
        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;
        var axisLength = canvasWidth - (lineWidth);
        var unit = axisLength / 8;
        var range = 0.2; // 振幅
        var currRange = range;
        var xOffset = lineWidth;
        var sp = 0; // 周期偏移量
        var currData = 0;
        var waveupsp = 0.005; // 水波上涨速度
        var arcStack = [];
        var bR = radius - (lineWidth);
        var circleOffset = -(Math.PI / 2);
        var circleLock = true;
        for (var i = circleOffset; i < circleOffset + (2 * Math.PI); i += 1 / (8 * Math.PI)) {
            arcStack.push([
                radius + (bR * Math.cos(i)),
                radius + (bR * Math.sin(i)),
            ]);
        }
        var cStartPoint = arcStack.shift();
        ctx.strokeStyle = this.color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);
        function drawSin() {
            ctx.beginPath();
            ctx.save();
            var sinStack = [];
            for (var i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                var x = sp + ((xOffset + i) / unit);
                var y = Math.sin(x) * currRange;
                var dx = i;
                var dy = ((2 * cR * (1 - currData)) + (radius - cR)) - (unit * y);
                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }
            var startPoint = sinStack.shift();
            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);
            var gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, '#1890FF');
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
        function render() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (circleLock) {
                if (arcStack.length) {
                    var temp = arcStack.shift();
                    ctx.lineTo(temp[0], temp[1]);
                    ctx.stroke();
                }
                else {
                    circleLock = false;
                    ctx.lineTo(cStartPoint[0], cStartPoint[1]);
                    ctx.stroke();
                    arcStack = null;
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.beginPath();
                    ctx.lineWidth = lineWidth;
                    ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);
                    ctx.beginPath();
                    ctx.save();
                    ctx.arc(radius, radius, radius - (3 * lineWidth), 0, 2 * Math.PI, true);
                    ctx.restore();
                    ctx.clip();
                    ctx.fillStyle = '#1890FF';
                }
            }
            else {
                if (data >= 0.85) {
                    if (currRange > range / 4) {
                        var t = range * 0.01;
                        currRange -= t;
                    }
                }
                else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        var t = range * 0.01;
                        currRange += t;
                    }
                }
                else {
                    if (currRange <= range) {
                        var t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
                        var t = range * 0.01;
                        currRange -= t;
                    }
                }
                if ((data - currData) > 0) {
                    currData += waveupsp;
                }
                if ((data - currData) < 0) {
                    currData -= waveupsp;
                }
                sp += 0.07;
                drawSin();
            }
            self.timer = requestAnimationFrame(render);
        }
        render();
    };
    WaterWaveComponent.prototype.uninstall = function () {
    };
    WaterWaveComponent.prototype.updateRadio = function (radio) {
        this.renderer.setStyle(this.el.nativeElement, 'transform', "scale(" + radio + ")");
    };
    WaterWaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFlag = true;
        this.updateRadio(1);
        setTimeout(function () { return _this.resize(); }, 100);
        this.installResizeEvent();
    };
    WaterWaveComponent.prototype.ngOnChanges = function (changes) {
        if (this.initFlag)
            this.renderChart();
    };
    WaterWaveComponent.prototype.ngOnDestroy = function () {
        if (this.timer)
            cancelAnimationFrame(this.timer);
        this.uninstallResizeEvent();
        this.uninstall();
    };
    WaterWaveComponent.prototype.installResizeEvent = function () {
        var _this = this;
        if (this.scroll$)
            return;
        this.scroll$ = FromEventObservable_1.FromEventObservable.create(window, 'resize')
            .pipe(operators_1.debounceTime(500))
            .subscribe(function () { return _this.resize(); });
    };
    WaterWaveComponent.prototype.uninstallResizeEvent = function () {
        if (this.scroll$)
            this.scroll$.unsubscribe();
    };
    WaterWaveComponent.prototype.resize = function () {
        var offsetWidth = this.el.nativeElement.parentNode.offsetWidth;
        this.updateRadio(offsetWidth < this.height ? offsetWidth / this.height : 1);
        this.renderChart();
    };
    __decorate([
        core_1.Input()
    ], WaterWaveComponent.prototype, "title", null);
    __decorate([
        core_1.Input()
    ], WaterWaveComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input()
    ], WaterWaveComponent.prototype, "height", null);
    __decorate([
        core_1.Input()
    ], WaterWaveComponent.prototype, "percent", null);
    __decorate([
        core_1.ViewChild('container')
    ], WaterWaveComponent.prototype, "node", void 0);
    WaterWaveComponent = __decorate([
        core_1.Component({
            selector: 'water-wave',
            template: "\n    <div [ngStyle]=\"{'height.px': height, 'width.px': height, 'overflow': 'hidden'}\">\n        <canvas #container class=\"canvas-wrap\" width=\"{{height*2}}\" height=\"{{height*2}}\"></canvas>\n    </div>\n    <div class=\"text\" [ngStyle]=\"{'width.px': height}\">\n        <ng-container *ngIf=\"_title; else _titleTpl\"><span>{{_title}}</span></ng-container>\n        <h4>{{percent}}%</h4>\n    </div>",
            styleUrls: ['./water-wave.less'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], WaterWaveComponent);
    return WaterWaveComponent;
}());
exports.WaterWaveComponent = WaterWaveComponent;

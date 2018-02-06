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
var TagCloudComponent = /** @class */ (function () {
    function TagCloudComponent(el, cd) {
        this.el = el;
        this.cd = cd;
        // region: fields
        this.color = 'rgba(24, 144, 255, 0.85)';
        this._height = 0;
        this.padding = 0;
        this._autoLabel = true;
        this.initFlag = false;
    }
    Object.defineProperty(TagCloudComponent.prototype, "height", {
        get: function () { return this._height; },
        set: function (value) {
            this._height = coercion_1.coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagCloudComponent.prototype, "autoLabel", {
        get: function () { return this._autoLabel; },
        set: function (value) {
            this._autoLabel = coercion_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    TagCloudComponent.prototype.initTagCloud = function () {
        // 给point注册一个词云的shape
        G2.Shape.registerShape('point', 'cloud', {
            drawShape: function (cfg, container) {
                var attrs = Object.assign({}, {
                    fillOpacity: cfg.opacity,
                    fontSize: cfg.origin._origin.size,
                    rotate: cfg.origin._origin.rotate,
                    text: cfg.origin._origin.text,
                    textAlign: 'center',
                    fontFamily: cfg.origin._origin.font,
                    fill: cfg.color,
                    textBaseline: 'Alphabetic'
                }, cfg.style);
                return container.addShape('text', {
                    attrs: Object.assign(attrs, {
                        x: cfg.x,
                        y: cfg.y
                    })
                });
            }
        });
    };
    TagCloudComponent.prototype.renderChart = function () {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.node.nativeElement.innerHTML = '';
        var dv = new DataSet.View().source(this.data);
        var range = dv.range('value');
        var min = range[0];
        var max = range[1];
        var height = +this.height;
        var width = +this.el.nativeElement.offsetWidth;
        dv.transform({
            type: 'tag-cloud',
            fields: ['name', 'value'],
            size: [width, height],
            padding: this.padding,
            timeInterval: 5000,
            rotate: function () {
                var random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize: function (d) {
                if (d.value) {
                    return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                }
                return 0;
            }
        });
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            width: width,
            height: height,
            padding: this.padding,
            forceFit: true
        });
        chart.source(dv, {
            x: { nice: false },
            y: { nice: false }
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false
        });
        chart.coord().reflect();
        chart.point()
            .position('x*y')
            .color('text')
            .shape('cloud')
            .tooltip('value*category');
        chart.render();
        this.chart = chart;
    };
    TagCloudComponent.prototype.uninstall = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    TagCloudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFlag = true;
        this.initTagCloud();
        setTimeout(function () { return _this.renderChart(); }, 100);
    };
    TagCloudComponent.prototype.ngOnChanges = function (changes) {
        if (this.initFlag)
            this.renderChart();
    };
    TagCloudComponent.prototype.ngOnDestroy = function () {
        this.uninstall();
    };
    __decorate([
        core_1.Input()
    ], TagCloudComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input()
    ], TagCloudComponent.prototype, "height", null);
    __decorate([
        core_1.Input()
    ], TagCloudComponent.prototype, "padding", void 0);
    __decorate([
        core_1.Input()
    ], TagCloudComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input()
    ], TagCloudComponent.prototype, "autoLabel", null);
    __decorate([
        core_1.ViewChild('container')
    ], TagCloudComponent.prototype, "node", void 0);
    TagCloudComponent = __decorate([
        core_1.Component({
            selector: 'tag-cloud',
            template: "<div #container [ngStyle]=\"{'height.px': height}\"></div>",
            styleUrls: ['./tag-cloud.less'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], TagCloudComponent);
    return TagCloudComponent;
}());
exports.TagCloudComponent = TagCloudComponent;

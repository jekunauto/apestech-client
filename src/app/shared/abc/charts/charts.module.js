"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var card_component_1 = require("./card/card.component");
var mini_area_component_1 = require("./mini-area/mini-area.component");
var mini_bar_component_1 = require("./mini-bar/mini-bar.component");
var mini_progress_component_1 = require("./mini-progress/mini-progress.component");
var bar_component_1 = require("./bar/bar.component");
var pie_component_1 = require("./pie/pie.component");
var timeline_component_1 = require("./timeline/timeline.component");
var gauge_component_1 = require("./gauge/gauge.component");
var tag_cloud_component_1 = require("./tag-cloud/tag-cloud.component");
var water_wave_component_1 = require("./water-wave/water-wave.component");
var radar_component_1 = require("./radar/radar.component");
var chart_component_1 = require("./chart/chart.component");
var COMPONENTS = [
    card_component_1.ChartCardComponent, mini_area_component_1.MiniAreaComponent, mini_bar_component_1.MiniBarComponent, mini_progress_component_1.MiniProgressComponent,
    bar_component_1.G2BarComponent, pie_component_1.G2PieComponent, timeline_component_1.TimelineComponent, gauge_component_1.GaugeComponent, tag_cloud_component_1.TagCloudComponent,
    water_wave_component_1.WaterWaveComponent, radar_component_1.G2RadarComponent, chart_component_1.ChartComponent
];
// region: zorro modules
var ng_zorro_antd_1 = require("ng-zorro-antd");
var ng_zorro_antd_extra_1 = require("ng-zorro-antd-extra");
var ZORROMODULES = [
    ng_zorro_antd_1.NzSpinModule, ng_zorro_antd_1.NzToolTipModule, ng_zorro_antd_1.NzGridModule,
    ng_zorro_antd_extra_1.NzCardModule, ng_zorro_antd_extra_1.NzDividerModule
];
// endregion
var AdChartsModule = /** @class */ (function () {
    function AdChartsModule() {
    }
    AdChartsModule_1 = AdChartsModule;
    AdChartsModule.forRoot = function () {
        return { ngModule: AdChartsModule_1, providers: [] };
    };
    AdChartsModule = AdChartsModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdChartsModule);
    return AdChartsModule;
    var AdChartsModule_1;
}());
exports.AdChartsModule = AdChartsModule;

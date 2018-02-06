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
var trend_component_1 = require("./trend.component");
var COMPONENTS = [trend_component_1.TrendComponent];
// region: zorro modules
// import { NzBreadCrumbModule } from 'ng-zorro-antd';
// import { NzIconModule } from 'ng-zorro-antd-extra';
var ZORROMODULES = [];
// endregion
var AdTrendModule = /** @class */ (function () {
    function AdTrendModule() {
    }
    AdTrendModule_1 = AdTrendModule;
    AdTrendModule.forRoot = function () {
        return { ngModule: AdTrendModule_1, providers: [] };
    };
    AdTrendModule = AdTrendModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdTrendModule);
    return AdTrendModule;
    var AdTrendModule_1;
}());
exports.AdTrendModule = AdTrendModule;

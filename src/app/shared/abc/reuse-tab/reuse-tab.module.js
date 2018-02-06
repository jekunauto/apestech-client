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
var router_1 = require("@angular/router");
var reuse_tab_component_1 = require("./reuse-tab.component");
var reuse_tab_service_1 = require("./reuse-tab.service");
var reuse_tab_strategy_1 = require("./reuse-tab.strategy");
var COMPONENTS = [reuse_tab_component_1.ReuseTabComponent];
// region: zorro modules
var ng_zorro_antd_1 = require("ng-zorro-antd");
var ZORROMODULES = [ng_zorro_antd_1.NzTabsModule, ng_zorro_antd_1.NzButtonModule, ng_zorro_antd_1.NzPopconfirmModule];
// endregion
var AdReuseTabModule = /** @class */ (function () {
    function AdReuseTabModule() {
    }
    AdReuseTabModule_1 = AdReuseTabModule;
    AdReuseTabModule.forRoot = function () {
        return {
            ngModule: AdReuseTabModule_1,
            providers: [
                reuse_tab_service_1.ReuseTabService,
                { provide: router_1.RouteReuseStrategy, useClass: reuse_tab_strategy_1.ReuseTabStrategy, deps: [reuse_tab_service_1.ReuseTabService] }
            ]
        };
    };
    AdReuseTabModule = AdReuseTabModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdReuseTabModule);
    return AdReuseTabModule;
    var AdReuseTabModule_1;
}());
exports.AdReuseTabModule = AdReuseTabModule;

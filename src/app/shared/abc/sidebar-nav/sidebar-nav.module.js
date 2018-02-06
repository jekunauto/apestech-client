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
var sidebar_nav_component_1 = require("./sidebar-nav.component");
var COMPONENTS = [sidebar_nav_component_1.SidebarNavComponent];
// region: zorro modules
var ng_zorro_antd_1 = require("ng-zorro-antd");
var ZORROMODULES = [ng_zorro_antd_1.NzToolTipModule];
// endregion
var AdSidebarNavModule = /** @class */ (function () {
    function AdSidebarNavModule() {
    }
    AdSidebarNavModule_1 = AdSidebarNavModule;
    AdSidebarNavModule.forRoot = function () {
        return { ngModule: AdSidebarNavModule_1, providers: [] };
    };
    AdSidebarNavModule = AdSidebarNavModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdSidebarNavModule);
    return AdSidebarNavModule;
    var AdSidebarNavModule_1;
}());
exports.AdSidebarNavModule = AdSidebarNavModule;

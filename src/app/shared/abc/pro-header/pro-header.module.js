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
var pro_header_component_1 = require("./pro-header.component");
var pro_header_config_1 = require("./pro-header.config");
var COMPONENTS = [pro_header_component_1.ProHeaderComponent];
// region: zorro modules
var ng_zorro_antd_1 = require("ng-zorro-antd");
// import { NzIconModule } from 'ng-zorro-antd-extra';
var ZORROMODULES = [ng_zorro_antd_1.NzBreadCrumbModule];
// endregion
var AdProHeaderModule = /** @class */ (function () {
    function AdProHeaderModule() {
    }
    AdProHeaderModule_1 = AdProHeaderModule;
    AdProHeaderModule.forRoot = function () {
        return { ngModule: AdProHeaderModule_1, providers: [pro_header_config_1.ProHeaderConfig] };
    };
    AdProHeaderModule = AdProHeaderModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdProHeaderModule);
    return AdProHeaderModule;
    var AdProHeaderModule_1;
}());
exports.AdProHeaderModule = AdProHeaderModule;

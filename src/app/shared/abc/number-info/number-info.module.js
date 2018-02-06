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
var number_info_component_1 = require("./number-info.component");
var COMPONENTS = [number_info_component_1.NumberInfoComponent];
// region: zorro modules
// import { NzButtonModule } from 'ng-zorro-antd';
var ng_zorro_antd_extra_1 = require("ng-zorro-antd-extra");
var ZORROMODULES = [ng_zorro_antd_extra_1.NzIconModule];
// endregion
var AdNumberInfoModule = /** @class */ (function () {
    function AdNumberInfoModule() {
    }
    AdNumberInfoModule_1 = AdNumberInfoModule;
    AdNumberInfoModule.forRoot = function () {
        return { ngModule: AdNumberInfoModule_1, providers: [] };
    };
    AdNumberInfoModule = AdNumberInfoModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdNumberInfoModule);
    return AdNumberInfoModule;
    var AdNumberInfoModule_1;
}());
exports.AdNumberInfoModule = AdNumberInfoModule;

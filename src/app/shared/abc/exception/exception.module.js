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
var exception_component_1 = require("./exception.component");
var COMPONENTS = [exception_component_1.ExceptionComponent];
// region: zorro modules
var ng_zorro_antd_1 = require("ng-zorro-antd");
var ZORROMODULES = [ng_zorro_antd_1.NzButtonModule];
// endregion
var AdExceptionModule = /** @class */ (function () {
    function AdExceptionModule() {
    }
    AdExceptionModule_1 = AdExceptionModule;
    AdExceptionModule.forRoot = function () {
        return { ngModule: AdExceptionModule_1, providers: [] };
    };
    AdExceptionModule = AdExceptionModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdExceptionModule);
    return AdExceptionModule;
    var AdExceptionModule_1;
}());
exports.AdExceptionModule = AdExceptionModule;

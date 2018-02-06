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
var global_footer_component_1 = require("./global-footer.component");
var COMPONENTS = [global_footer_component_1.GlobalFooterComponent];
// region: zorro modules
// import { NzButtonModule } from 'ng-zorro-antd';
var ZORROMODULES = [];
// endregion
var AdGlobalFooterModule = /** @class */ (function () {
    function AdGlobalFooterModule() {
    }
    AdGlobalFooterModule_1 = AdGlobalFooterModule;
    AdGlobalFooterModule.forRoot = function () {
        return { ngModule: AdGlobalFooterModule_1, providers: [] };
    };
    AdGlobalFooterModule = AdGlobalFooterModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdGlobalFooterModule);
    return AdGlobalFooterModule;
    var AdGlobalFooterModule_1;
}());
exports.AdGlobalFooterModule = AdGlobalFooterModule;

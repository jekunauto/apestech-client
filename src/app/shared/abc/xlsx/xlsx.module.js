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
var utils_module_1 = require("../utils/utils.module");
var xlsx_service_1 = require("./xlsx.service");
var xlsx_directive_1 = require("./xlsx.directive");
var interface_1 = require("./interface");
var COMPONENTS = [xlsx_directive_1.XlsxDirective];
// region: zorro modules
// import { NzBreadCrumbModule } from 'ng-zorro-antd';
// import { NzIconModule } from 'ng-zorro-antd-extra';
var ZORROMODULES = [];
// endregion
var AdXlsxModule = /** @class */ (function () {
    function AdXlsxModule() {
    }
    AdXlsxModule_1 = AdXlsxModule;
    AdXlsxModule.forRoot = function (config) {
        return {
            ngModule: AdXlsxModule_1,
            providers: [
                xlsx_service_1.XlsxService,
                { provide: interface_1.DA_XLSX_CONFIG, useValue: config }
            ]
        };
    };
    AdXlsxModule = AdXlsxModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule].concat(ZORROMODULES, [utils_module_1.AdUtilsModule]),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdXlsxModule);
    return AdXlsxModule;
    var AdXlsxModule_1;
}());
exports.AdXlsxModule = AdXlsxModule;

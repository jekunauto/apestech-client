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
var zip_service_1 = require("./zip.service");
var interface_1 = require("./interface");
var COMPONENTS = [];
// region: zorro modules
// import { NzBreadCrumbModule } from 'ng-zorro-antd';
// import { NzIconModule } from 'ng-zorro-antd-extra';
var ZORROMODULES = [];
// endregion
var AdZipModule = /** @class */ (function () {
    function AdZipModule() {
    }
    AdZipModule_1 = AdZipModule;
    AdZipModule.forRoot = function (config) {
        return {
            ngModule: AdZipModule_1,
            providers: [
                zip_service_1.ZipService,
                { provide: interface_1.DA_ZIP_CONFIG, useValue: config }
            ]
        };
    };
    AdZipModule = AdZipModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule].concat(ZORROMODULES, [utils_module_1.AdUtilsModule]),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdZipModule);
    return AdZipModule;
    var AdZipModule_1;
}());
exports.AdZipModule = AdZipModule;

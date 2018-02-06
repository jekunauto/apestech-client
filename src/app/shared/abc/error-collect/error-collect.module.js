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
var error_collect_component_1 = require("./error-collect.component");
var COMPONENTS = [error_collect_component_1.ErrorCollectComponent];
var AdErrorCollectModule = /** @class */ (function () {
    function AdErrorCollectModule() {
    }
    AdErrorCollectModule_1 = AdErrorCollectModule;
    AdErrorCollectModule.forRoot = function () {
        return { ngModule: AdErrorCollectModule_1, providers: [] };
    };
    AdErrorCollectModule = AdErrorCollectModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdErrorCollectModule);
    return AdErrorCollectModule;
    var AdErrorCollectModule_1;
}());
exports.AdErrorCollectModule = AdErrorCollectModule;

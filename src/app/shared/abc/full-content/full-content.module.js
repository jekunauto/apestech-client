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
var full_content_component_1 = require("./full-content.component");
var full_content_toggle_directive_1 = require("./full-content-toggle.directive");
var full_content_service_1 = require("./full-content.service");
var COMPONENTS = [full_content_component_1.FullContentComponent, full_content_toggle_directive_1.FullContentToggleDirective];
var AdFullContentModule = /** @class */ (function () {
    function AdFullContentModule() {
    }
    AdFullContentModule_1 = AdFullContentModule;
    AdFullContentModule.forRoot = function () {
        return {
            ngModule: AdFullContentModule_1,
            providers: [
                full_content_service_1.FullContentService
            ]
        };
    };
    AdFullContentModule = AdFullContentModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdFullContentModule);
    return AdFullContentModule;
    var AdFullContentModule_1;
}());
exports.AdFullContentModule = AdFullContentModule;

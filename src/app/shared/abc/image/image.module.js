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
var image_directive_1 = require("./image.directive");
var image_config_1 = require("./image.config");
var DIRECTIVES = [image_directive_1.ImageDirective];
var AdImageModule = /** @class */ (function () {
    function AdImageModule() {
    }
    AdImageModule_1 = AdImageModule;
    AdImageModule.forRoot = function () {
        return { ngModule: AdImageModule_1, providers: [image_config_1.ImageConfig] };
    };
    AdImageModule = AdImageModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: DIRECTIVES.slice(),
            exports: DIRECTIVES.slice()
        })
    ], AdImageModule);
    return AdImageModule;
    var AdImageModule_1;
}());
exports.AdImageModule = AdImageModule;

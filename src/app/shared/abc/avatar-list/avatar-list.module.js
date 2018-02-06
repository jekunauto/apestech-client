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
var avatar_list_component_1 = require("./avatar-list.component");
var avatar_list_item_component_1 = require("./avatar-list-item.component");
var COMPONENTS = [avatar_list_component_1.AvatarListComponent, avatar_list_item_component_1.AvatarListItemComponent];
// region: zorro modules
var ng_zorro_antd_1 = require("ng-zorro-antd");
var ZORROMODULES = [ng_zorro_antd_1.NzToolTipModule, ng_zorro_antd_1.NzAvatarModule];
// endregion
var AdAvatarListModule = /** @class */ (function () {
    function AdAvatarListModule() {
    }
    AdAvatarListModule_1 = AdAvatarListModule;
    AdAvatarListModule.forRoot = function () {
        return { ngModule: AdAvatarListModule_1, providers: [] };
    };
    AdAvatarListModule = AdAvatarListModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdAvatarListModule);
    return AdAvatarListModule;
    var AdAvatarListModule_1;
}());
exports.AdAvatarListModule = AdAvatarListModule;

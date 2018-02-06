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
var notice_list_component_1 = require("./notice-list.component");
var notice_icon_component_1 = require("./notice-icon.component");
var COMPONENTS = [notice_list_component_1.NoticeListComponent, notice_icon_component_1.NoticeIconComponent];
var desc_list_module_1 = require("../desc-list/desc-list.module");
// region: zorro modules
var ng_zorro_antd_1 = require("ng-zorro-antd");
var ng_zorro_antd_extra_1 = require("ng-zorro-antd-extra");
var ZORROMODULES = [
    ng_zorro_antd_1.NzPopoverModule, ng_zorro_antd_1.NzBadgeModule, ng_zorro_antd_1.NzSpinModule, ng_zorro_antd_1.NzTabsModule, ng_zorro_antd_1.NzTagModule,
    ng_zorro_antd_extra_1.NzListModule, ng_zorro_antd_extra_1.NzIconModule
];
// endregion
var AdNoticeIconModule = /** @class */ (function () {
    function AdNoticeIconModule() {
    }
    AdNoticeIconModule_1 = AdNoticeIconModule;
    AdNoticeIconModule.forRoot = function () {
        return { ngModule: AdNoticeIconModule_1, providers: [] };
    };
    AdNoticeIconModule = AdNoticeIconModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, desc_list_module_1.AdDescListModule.forRoot()].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdNoticeIconModule);
    return AdNoticeIconModule;
    var AdNoticeIconModule_1;
}());
exports.AdNoticeIconModule = AdNoticeIconModule;

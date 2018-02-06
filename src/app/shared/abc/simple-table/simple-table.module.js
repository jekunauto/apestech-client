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
var forms_1 = require("@angular/forms");
var simple_table_component_1 = require("./simple-table.component");
var simple_table_row_directive_1 = require("./simple-table-row.directive");
var simple_table_config_1 = require("./simple-table.config");
var COMPONENTS = [simple_table_component_1.SimpleTableComponent, simple_table_row_directive_1.SimpleTableRowDirective];
// region: zorro modules
var ng_zorro_antd_1 = require("ng-zorro-antd");
var ZORROMODULES = [ng_zorro_antd_1.NzTableModule, ng_zorro_antd_1.NzCheckboxModule, ng_zorro_antd_1.NzRadioModule, ng_zorro_antd_1.NzDropDownModule, ng_zorro_antd_1.NzMenuModule, ng_zorro_antd_1.NzPopconfirmModule];
// endregion
var AdSimpleTableModule = /** @class */ (function () {
    function AdSimpleTableModule() {
    }
    AdSimpleTableModule_1 = AdSimpleTableModule;
    AdSimpleTableModule.forRoot = function () {
        return { ngModule: AdSimpleTableModule_1, providers: [simple_table_config_1.SimpleTableConfig] };
    };
    AdSimpleTableModule = AdSimpleTableModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule].concat(ZORROMODULES),
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], AdSimpleTableModule);
    return AdSimpleTableModule;
    var AdSimpleTableModule_1;
}());
exports.AdSimpleTableModule = AdSimpleTableModule;

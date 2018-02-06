"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// region: all modules
var error_collect_module_1 = require("./error-collect/error-collect.module");
var footer_toolbar_module_1 = require("./footer-toolbar/footer-toolbar.module");
var sidebar_nav_module_1 = require("./sidebar-nav/sidebar-nav.module");
var down_file_module_1 = require("./down-file/down-file.module");
var image_module_1 = require("./image/image.module");
var avatar_list_module_1 = require("./avatar-list/avatar-list.module");
var desc_list_module_1 = require("./desc-list/desc-list.module");
var ellipsis_module_1 = require("./ellipsis/ellipsis.module");
var global_footer_module_1 = require("./global-footer/global-footer.module");
var exception_module_1 = require("./exception/exception.module");
var notice_icon_module_1 = require("./notice-icon/notice-icon.module");
var number_info_module_1 = require("./number-info/number-info.module");
var pro_header_module_1 = require("./pro-header/pro-header.module");
var result_module_1 = require("./result/result.module");
var standard_form_row_module_1 = require("./standard-form-row/standard-form-row.module");
var tag_select_module_1 = require("./tag-select/tag-select.module");
var trend_module_1 = require("./trend/trend.module");
var utils_module_1 = require("./utils/utils.module");
var charts_module_1 = require("./charts/charts.module");
var count_down_module_1 = require("./count-down/count-down.module");
var simple_table_module_1 = require("./simple-table/simple-table.module");
var reuse_tab_module_1 = require("./reuse-tab/reuse-tab.module");
var full_content_module_1 = require("./full-content/full-content.module");
var xlsx_module_1 = require("./xlsx/xlsx.module");
var zip_module_1 = require("./zip/zip.module");
var MODULES = [
    error_collect_module_1.AdErrorCollectModule, footer_toolbar_module_1.AdFooterToolbarModule, sidebar_nav_module_1.AdSidebarNavModule, down_file_module_1.AdDownFileModule, image_module_1.AdImageModule,
    avatar_list_module_1.AdAvatarListModule, desc_list_module_1.AdDescListModule, ellipsis_module_1.AdEllipsisModule, global_footer_module_1.AdGlobalFooterModule, exception_module_1.AdExceptionModule,
    notice_icon_module_1.AdNoticeIconModule, number_info_module_1.AdNumberInfoModule, pro_header_module_1.AdProHeaderModule, result_module_1.AdResultModule, standard_form_row_module_1.AdStandardFormRowModule,
    tag_select_module_1.AdTagSelectModule, trend_module_1.AdTrendModule, utils_module_1.AdUtilsModule, charts_module_1.AdChartsModule, count_down_module_1.AdCountDownModule, simple_table_module_1.AdSimpleTableModule,
    reuse_tab_module_1.AdReuseTabModule, full_content_module_1.AdFullContentModule, xlsx_module_1.AdXlsxModule, zip_module_1.AdZipModule
];
// endregion
// region: export
__export(require("./error-collect"));
__export(require("./footer-toolbar"));
__export(require("./sidebar-nav"));
__export(require("./down-file"));
__export(require("./image"));
__export(require("./avatar-list"));
__export(require("./desc-list"));
__export(require("./ellipsis"));
__export(require("./global-footer"));
__export(require("./exception"));
__export(require("./notice-icon"));
__export(require("./number-info"));
__export(require("./pro-header"));
__export(require("./result"));
__export(require("./standard-form-row"));
__export(require("./tag-select"));
__export(require("./trend"));
__export(require("./utils"));
__export(require("./charts"));
__export(require("./count-down"));
__export(require("./simple-table"));
__export(require("./reuse-tab"));
__export(require("./full-content"));
__export(require("./xlsx"));
__export(require("./zip"));
// endregion
var AlainABCRootModule = /** @class */ (function () {
    function AlainABCRootModule() {
    }
    AlainABCRootModule = __decorate([
        core_1.NgModule({
            imports: [
                error_collect_module_1.AdErrorCollectModule.forRoot(), footer_toolbar_module_1.AdFooterToolbarModule.forRoot(), sidebar_nav_module_1.AdSidebarNavModule.forRoot(), down_file_module_1.AdDownFileModule.forRoot(), image_module_1.AdImageModule.forRoot(),
                avatar_list_module_1.AdAvatarListModule.forRoot(), desc_list_module_1.AdDescListModule.forRoot(), ellipsis_module_1.AdEllipsisModule.forRoot(), exception_module_1.AdExceptionModule.forRoot(), exception_module_1.AdExceptionModule.forRoot(),
                notice_icon_module_1.AdNoticeIconModule.forRoot(), number_info_module_1.AdNumberInfoModule.forRoot(), pro_header_module_1.AdProHeaderModule.forRoot(), result_module_1.AdResultModule.forRoot(), standard_form_row_module_1.AdStandardFormRowModule.forRoot(),
                tag_select_module_1.AdTagSelectModule.forRoot(), trend_module_1.AdTrendModule.forRoot(), utils_module_1.AdUtilsModule.forRoot(), charts_module_1.AdChartsModule.forRoot(), count_down_module_1.AdCountDownModule.forRoot(), simple_table_module_1.AdSimpleTableModule.forRoot(),
                reuse_tab_module_1.AdReuseTabModule.forRoot(), full_content_module_1.AdFullContentModule.forRoot(), xlsx_module_1.AdXlsxModule.forRoot(), zip_module_1.AdZipModule.forRoot()
            ],
            exports: MODULES
        })
    ], AlainABCRootModule);
    return AlainABCRootModule;
}());
exports.AlainABCRootModule = AlainABCRootModule;
var AlainABCModule = /** @class */ (function () {
    function AlainABCModule() {
    }
    AlainABCModule.forRoot = function () {
        return { ngModule: AlainABCRootModule };
    };
    AlainABCModule = __decorate([
        core_1.NgModule({ exports: MODULES })
    ], AlainABCModule);
    return AlainABCModule;
}());
exports.AlainABCModule = AlainABCModule;

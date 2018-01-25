import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import {NgZorroAntdExtraModule} from 'ng-zorro-antd-extra';
import {AlainThemeModule} from '@delon/theme';
// endregion
// region: @delon/abc modules
import {
    AdAvatarListModule,
    AdChartsModule,
    AdCountDownModule,
    AdDescListModule,
    AdDownFileModule,
    AdEllipsisModule,
    AdErrorCollectModule,
    AdExceptionModule,
    AdFooterToolbarModule,
    AdFullContentModule,
    AdGlobalFooterModule,
    AdImageModule,
    AdNoticeIconModule,
    AdNumberInfoModule,
    AdProHeaderModule,
    AdResultModule,
    AdReuseTabModule,
    AdSidebarNavModule,
    AdSimpleTableModule,
    AdStandardFormRowModule,
    AdTagSelectModule,
    AdTrendModule,
    AdUtilsModule,
    AdXlsxModule,
    AdZipModule,
    DA_XLSX_CONFIG,
    DA_ZIP_CONFIG,
    FullContentService,
    LazyService,
    ReuseTabService,
    ReuseTabStrategy,
    SimpleTableConfig,
    XlsxService,
    ZipService
} from '@delon/abc';
import {AlainACLModule} from '@delon/acl';
// third libs
import {CountdownModule} from 'ngx-countdown';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyZorroModule} from './ui-zorro';
// i18n
import {TranslateModule} from '@ngx-translate/core';
// region: zorro modules
import {
    NzAlertModule,
    NzAvatarModule,
    NzBadgeModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzCarouselModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzMessageService,
    NzModalModule,
    NzNotificationModule,
    NzNotificationService,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzProgressModule,
    NzRadioModule,
    NzRateModule,
    NzRootModule,
    NzSelectModule,
    NzSliderModule,
    NzSpinModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimelineModule,
    NzTimePickerModule,
    NzToolTipModule,
    NzUtilModule
} from 'ng-zorro-antd';
import {HeaderGroupComponent} from '../routes/demo/gridComponent/header-group-component/header-group.component';
import {DateComponent} from '../routes/demo/gridComponent/date-component/date.component';
import {AgGridModule} from 'ag-grid-angular';
import {GridHeaderComponent} from '../routes/demo/gridComponent/header-component/header.component';


const ZORROMODULES = [
    // LoggerModule,
    // NzLocaleModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    // NzCalendarModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    // NzCardModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzAvatarModule
];
const ABCMODULES = [
    AdSimpleTableModule,
    AdReuseTabModule,
    AdAvatarListModule,
    AdChartsModule,
    AdCountDownModule,
    AdDescListModule,
    AdEllipsisModule,
    AdErrorCollectModule,
    AdExceptionModule,
    AdFooterToolbarModule,
    AdGlobalFooterModule,
    AdNoticeIconModule,
    AdNumberInfoModule,
    AdProHeaderModule,
    AdResultModule,
    AdSidebarNavModule,
    AdStandardFormRowModule,
    AdTagSelectModule,
    AdTrendModule,
    AdDownFileModule,
    AdImageModule,
    AdUtilsModule,
    AdFullContentModule,
    AdXlsxModule,
    AdZipModule
];
// endregion
export function minlengthValidationMessage(err, field) {
    return `至少${field.templateOptions.minLength}个字符`;
}

export function maxlengthValidationMessage(err, field) {
    return `不能超过${field.templateOptions.maxLength}个字符`;
}

export function minValidationMessage(err, field) {
    return `应小于${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
    return `不能大于${field.templateOptions.max}`;
}
@NgModule({
    declarations: [
        DateComponent,
        GridHeaderComponent,
        HeaderGroupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule.forRoot(),
        AlainThemeModule.forChild(),
        ...ABCMODULES,
        AlainACLModule.forRoot(),
        // third libs
        CountdownModule,

        // dynamicForm
        FormlyModule.forRoot({
            validationMessages: [
                { name: 'required', message: '该项为必填项目' },
                { name: 'minlength', message: minlengthValidationMessage },
                { name: 'maxlength', message: maxlengthValidationMessage },
                { name: 'min', message: minValidationMessage },
                { name: 'max', message: maxValidationMessage },
            ],
        }),
        FormlyZorroModule,

        AgGridModule.withComponents([
            DateComponent,
            GridHeaderComponent,
            HeaderGroupComponent
        ]),

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule,
        ...ABCMODULES,
        AlainACLModule,
        // i18n
        TranslateModule,
        // third libs
        CountdownModule,
        // dynamicform
        FormlyModule,
        FormlyZorroModule,
        AgGridModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // ng-zorro-antd Services
                NzNotificationService,
                NzMessageService,
                // @delon/abc
                SimpleTableConfig,
                FullContentService,
                // reuse-tab
                ReuseTabService,
                { provide: RouteReuseStrategy, useClass: ReuseTabStrategy, deps: [ ReuseTabService ] },
                // xlsx
                XlsxService,
                { provide: DA_XLSX_CONFIG, useValue: {} },
                // zip
                ZipService,
                { provide: DA_ZIP_CONFIG, useValue: {} },
                // utils
                LazyService
            ]
        };
    }
}

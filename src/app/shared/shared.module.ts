import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { NgZorroAntdExtraModule } from './extra';
import { AlainThemeModule } from '../core';

// region: @delon/abc modules
import { DA_XLSX_CONFIG, DA_ZIP_CONFIG, FullContentService, LazyService, ReuseTabService,
    ReuseTabStrategy, SimpleTableConfig, XlsxService, ZipService } from '../shared/abc';
// third libs
import { FormlyModule } from '@ngx-formly/core';
import { FormlyZorroModule } from './ui-zorro';
// i18n
import { TranslateModule } from '@ngx-translate/core';
// region: zorro modules
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { QueryBuilderModule } from '@shared/querybuilder';
import { ZORROMODULES} from '../zorro.module';
import {
    AdSimpleTableModule,
    AdReuseTabModule,
    AdAvatarListModule,
    AdChartsModule,
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
} from './abc';

// Material UI
import {MatDialogModule, MatCard, MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';

// dialog
import { BaseDialog } from '../shared/dialog/base-dialog';
import { CompanyDialog } from '../shared/dialog/featuresDailog/company-dialog';

// check
import {
    maxlengthValidationMessage, maxValidationMessage, minlengthValidationMessage,
    minValidationMessage
} from '../core/config/message-config.serivce';

// grid
import { DateComponent } from '../routes/demo/gridComponent/date-component/date.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from '../routes/demo/gridComponent/header-component/header.component';
import {HeaderGroupComponent} from '@shared/grid/header-group/header-group.component';
import { HeaderButtonComponent } from './grid/header-button/header-button.component';
import { RowButtonComponent } from './grid/row-button/row-button.component';

@NgModule({
    declarations: [
        DateComponent,
        BaseDialog,
        CompanyDialog,
        HeaderComponent,
        HeaderGroupComponent,
        HeaderButtonComponent,
        RowButtonComponent
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
        // Material UI
        MatDialogModule,
        MatIconModule,
        MatButtonModule,

        // abc
        AdErrorCollectModule.forRoot(),
        AdFooterToolbarModule.forRoot(),
        AdSidebarNavModule.forRoot(),
        AdDownFileModule.forRoot(),
        AdImageModule.forRoot(),
        AdAvatarListModule.forRoot(),
        AdDescListModule.forRoot(),
        AdEllipsisModule.forRoot(),
        AdExceptionModule.forRoot(),
        AdExceptionModule.forRoot(),
        AdNoticeIconModule.forRoot(),
        AdNumberInfoModule.forRoot(),
        AdProHeaderModule.forRoot(),
        AdResultModule.forRoot(),
        AdStandardFormRowModule.forRoot(),
        AdTagSelectModule.forRoot(),
        AdTrendModule.forRoot(),
        AdUtilsModule.forRoot(),
        AdChartsModule.forRoot(),
        AdSimpleTableModule.forRoot(),
        AdReuseTabModule.forRoot(),
        AdFullContentModule.forRoot(),
        AdXlsxModule.forRoot(),
        AdZipModule.forRoot(),

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
        QueryBuilderModule,

        AgGridModule.withComponents([
            DateComponent,
            HeaderComponent,
            HeaderGroupComponent,
            HeaderButtonComponent,
            RowButtonComponent,
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
        // i18n
        TranslateModule,
        // Material UI
        MatDialogModule,
        MatButtonModule,

        AdSimpleTableModule,
        AdReuseTabModule,
        AdAvatarListModule,
        AdChartsModule,
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
        AdZipModule,
        MatIconModule,
        // dynamicform
        FormlyModule,
        FormlyZorroModule,
        QueryBuilderModule,
        AgGridModule
    ],
    entryComponents: [
        BaseDialog,
        CompanyDialog
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
                { provide: RouteReuseStrategy, useClass: ReuseTabStrategy, deps: [ReuseTabService] },
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

import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import {NgZorroAntdExtraModule} from 'ng-zorro-antd-extra';
import {AlainThemeModule} from '@delon/theme';

// region: @delon/abc modules
import {DA_XLSX_CONFIG, DA_ZIP_CONFIG, FullContentService, LazyService, ReuseTabService, ReuseTabStrategy, SimpleTableConfig, XlsxService, ZipService} from '@delon/abc';
import {AlainACLModule} from '@delon/acl';
// third libs
import {CountdownModule} from 'ngx-countdown';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyZorroModule} from './ui-zorro';
// i18n
import {TranslateModule} from '@ngx-translate/core';
// region: zorro modules
import { NzMessageService, NzNotificationService} from 'ng-zorro-antd';
import {HeaderGroupComponent} from '../routes/demo/gridComponent/header-group-component/header-group.component';
import {DateComponent} from '../routes/demo/gridComponent/date-component/date.component';
import {AgGridModule} from 'ag-grid-angular';
import {GridHeaderComponent} from '../routes/demo/gridComponent/header-component/header.component';
import {QueryBuilderModule} from '@shared/querybuilder';
import { ZORROMODULES, ABCMODULES } from '../delon.module';

//Material UI
import {MatDialogModule} from "@angular/material";
import { CompanyDialog } from '@shared/dialog/featuresDailog/company-dialog';
import { BaseDialog } from '@shared/dialog/base-dialog';

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
        HeaderGroupComponent,
        CompanyDialog,
        BaseDialog
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

        //Material UI
        MatDialogModule,

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

        //Material UI
        MatDialogModule,

        // dynamicform
        FormlyModule,
        FormlyZorroModule,
        QueryBuilderModule,
        AgGridModule,
        CompanyDialog,
        BaseDialog
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

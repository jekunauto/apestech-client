import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,} from '@angular/forms';
import {QueryBuilderComponent, QueryBuilderZorroComponent} from './src';
// i18n
import {TranslateModule} from '@ngx-translate/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        NgZorroAntdModule
    ],
    declarations: [
        QueryBuilderComponent,
        QueryBuilderZorroComponent
    ],
    exports: [
        QueryBuilderComponent,
        QueryBuilderZorroComponent
    ]
})
export class QueryBuilderModule {
}

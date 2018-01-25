import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FIELD_TYPE_COMPONENTS, ZORRO_FORMLY_CONFIG} from './ui-zorro.config';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: FIELD_TYPE_COMPONENTS,
  imports: [
      CommonModule,
      ReactiveFormsModule,
      NgZorroAntdModule,
      FormlyModule.forRoot(ZORRO_FORMLY_CONFIG),
  ],
})
export class FormlyZorroModule {
}

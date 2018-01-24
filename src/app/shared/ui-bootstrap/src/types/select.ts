import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'formly-field-select',
  template: `
      <div nz-form-item nz-col [nzSpan]="to.divCol" style="margin-bottom:6px; height: 42px;">
          <div nz-form-label nz-col [nzSm]="to.lblCol">
              <label *ngIf="to.required" [title]="to.label" nz-form-item-required>{{to.label}}</label>
              <label *ngIf="!to.required" [title]="to.label">{{to.label}}</label>
          </div>
          <div nz-form-control nz-col [nzSm]="to.inputCol">
              <nz-select [nzMode]="to.selectMode" [formlyAttributes]="field" [formControl]="formControl" nzAllowClear>
                  
                  <nz-option *ngFor="let option of to.options"
                      [nzLabel]="option.label"
                      [nzValue]="option"
                      [nzDisabled]="option.disabled">
                  </nz-option>
                  
              </nz-select>
          </div>
      </div>
  `,
})
export class FormlyFieldSelect extends FieldType {

}

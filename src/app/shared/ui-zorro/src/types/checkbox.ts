import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'formly-field-checkbox',
  template: `
      <div nz-form-item nz-col [nzSpan]="to.divCol? to.divCol: 8" style="margin-bottom:6px; height: 42px;">
          <div nz-form-label nz-col [nzSm]="to.lblCol? to.lblCol: 6">
              <label *ngIf="to.required" [title]="to.label" nz-form-item-required>{{to.label}}</label>
              <label *ngIf="!to.required" [title]="to.label">{{to.label}}</label>
          </div>
          <div nz-form-control nz-col [nzSm]="to.inputCol? to.inputCol: 18">
              <label nz-checkbox [formControl]="formControl" [formlyAttributes]="field" >
                  <span [title]="to.title">{{ to.title }}</span>
              </label>
          </div>
      </div>
  `,
})
export class FormlyFieldCheckbox extends FieldType {}

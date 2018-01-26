import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {FieldType, FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'formly-field-multicheckbox',
  template: `
      <div nz-form-item nz-col [nzSpan]="to.divCol" style="margin-bottom:6px; height: 42px;">
          <div nz-form-label nz-col [nzSm]="to.lblCol">
              <label *ngIf="to.required" [title]="to.label" nz-form-item-required>{{to.label}}</label>
              <label *ngIf="!to.required" [title]="to.label">{{to.label}}</label>
          </div>
          <div nz-form-control nz-col [nzSm]="to.inputCol">

              <label nz-checkbox *ngFor="let option of to.options;"
                     [formControl]="formControl.get(option.key)" [formlyAttributes]="field" >
                  <span [title]="option.label">{{ option.label }}</span>
              </label>
          </div>
      </div>
  `,
})

export class FormlyFieldMultiCheckbox extends FieldType {
  static createControl(model: any, field: FormlyFieldConfig): AbstractControl {
    let controlGroupConfig = field.templateOptions.options.reduce((previous, option) => {
      previous[option.key] = new FormControl(model ? model[option.key] : undefined);
      return previous;
    }, {});

    return new FormGroup(
      controlGroupConfig,
      field.validators ? field.validators.validation : undefined,
      field.asyncValidators ? field.asyncValidators.validation : undefined,
    );
  }
}

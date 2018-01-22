import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-date',
    template: `
        <div nz-form-item nz-col [nzSpan]="to.divCol">
            <div nz-form-label nz-col [nzSm]="to.lblCol">
                <label *ngIf="to.required" [title]="to.label" nz-form-item-required>{{to.label}}</label>
                <label *ngIf="!to.required" [title]="to.label">{{to.label}}</label>
            </div>
            <div nz-form-control nz-col [nzSm]="to.inputCol">
                <nz-datepicker [nzPlaceHolder]="to.placeholder" [formControl]="formControl" [formlyAttributes]="field"></nz-datepicker>
                <div nz-form-explain *ngIf="to.explain">{{to.explain}}</div>
            </div>

        </div>
    `,
    host: {
    },
})
export class FormlyFieldDate extends FieldType {

    get type() {
        return this.to.type || 'date';
    }
}

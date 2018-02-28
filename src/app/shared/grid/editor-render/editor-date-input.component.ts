import { Component } from '@angular/core';
import {ICellEditorAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-cell-search-input',
  template: `
      <nz-datepicker [(ngModel)]="value" [nzFormat]="'YYYY-MM-DD'"></nz-datepicker>
  `,
  styles: []
})
export class EditorDateInputComponent implements ICellEditorAngularComp {

    private value: any = null;
    private params: any;

    constructor() { }

    agInit(params: any): void {
        this.params = params;
        this.value = params.value.value;
    }

    getValue(): any {
        this.params.value.value = this.value;
        return this.value;
    }

    refresh(params: any): boolean {
        return undefined;
    }
}

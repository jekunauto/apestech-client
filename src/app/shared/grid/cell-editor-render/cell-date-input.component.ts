import { Component } from '@angular/core';
import {ICellEditorAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-cell-search-input',
  template: `
      <nz-datepicker [(ngModel)]="value" [nzFormat]="'YYYY-MM-DD'"></nz-datepicker>
  `,
  styles: []
})
export class CellDateInputComponent implements ICellEditorAngularComp {

    private value: any = null;
    private params: any;

    constructor() { }

    getValue(): any {
        this.params.value.value = this.value;
        return this.value;
    }

    agInit(params: any): void {
        this.params = params;
    }

    refresh(params: any): boolean {
        return undefined;
    }
}

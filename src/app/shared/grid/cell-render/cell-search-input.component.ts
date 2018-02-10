import { Component, OnInit, Input } from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';
import {ICellEditorParams} from 'ag-grid';

@Component({
  selector: 'app-cell-search-input',
  template: `
  <nz-input [nzType]="'search'"
     [(ngModel)]="value"  (nzOnSearch)="onSearch($event)"></nz-input>
  `,
  styles: []
})
export class CellSearchInputComponent implements ICellEditorAngularComp  {
    value: any;
    url: any;
    private  params: ICellEditorParams;

    constructor() { }
    agInit(params: ICellEditorParams): void {
        this.params = params;
        this.value = params.value.value;
        this.url = params.value.url;
    }

    getValue() {
        this.params.value.value = this.value;
        return this.value;
    }

    onSearch() {
        debugger;
        console.log(this.value);

        // 获取传入的值
        console.log( this.params);
    }
}

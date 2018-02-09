import { Component, OnInit, Input } from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';
import {ICellEditorParams} from 'ag-grid';

@Component({
  selector: 'app-cell-search-input',
  template: `
  <nz-input [nzType]="'search'" [nzPlaceHolder]="url"
     [(ngModel)]="inputValue"  (nzOnSearch)="onSearch($event)"></nz-input>
  `,
  styles: []
})
export class CellSearchInputComponent implements ICellEditorAngularComp  {
    inputValue: any;
    url: any;
    private  params: ICellEditorParams;

    constructor() { }
    agInit(params: ICellEditorParams): void {
        this.params = params;
        this.inputValue = params.value.inputValue;
        this.url = params.value.url;
    }

    getValue() {
        this.params.value.inputValue = this.inputValue;
        return  this.inputValue;
    }
    onSearch() {
        console.log(this.inputValue);

        // 获取传入的值
        console.log( this.params);
    }
}

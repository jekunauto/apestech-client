import { Component, OnInit, Input } from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';
import {ICellEditorParams} from 'ag-grid';

@Component({
  selector: 'app-cell-search-input',
  template: `
      <nz-input [nzSize]="'default'" [(ngModel)]="inputValue">
          <ng-template #suffix>
              <i class="anticon anticon-search" (click)="_onSearch()"></i>
          </ng-template>
      </nz-input>
  `,
  styles: []
})
export class CellSearchInputComponent implements ICellEditorAngularComp  {
    inputValue;
    private  params: ICellEditorParams;

    constructor() { }

    refresh(params: any): boolean {
        return undefined;
    }

    agInit(params: ICellEditorParams): void {
        this.params = params;
        console.log(this.params.value);
        console.log(this.inputValue);
    }

    getValue() {
        return  this.inputValue;
    }
    _onSearch() {
        console.log("cell-searche");

        console.log(this.inputValue);

        // 获取传入的值
        console.log( this.params);

    }
}

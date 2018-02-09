import { Component, OnInit } from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid';

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
export class CellSearchInputComponent implements AgRendererComponent{

    inputValue: any;
    params: ICellRendererParams;

    constructor() { }

    refresh(params: any): boolean {
        return undefined;
    }

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }


    _onSearch(){
        debugger;
        console.log("cell-searche");

        console.log(this.inputValue);

        // 获取传入的值
        console.log( this.params );

    }
}

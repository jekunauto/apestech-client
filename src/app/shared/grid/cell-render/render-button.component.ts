import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid';

@Component({
  selector: 'app-row-button',
  template: `
      <div>
          <button nz-button [nzSize]="small" style="height: 24px;" ><span>编辑</span></button>
          <button nz-button [nzSize]="small" style="height: 24px;" (click)="_onAdd()"><span>新增</span></button>
          <button nz-button [nzSize]="small" style="height: 24px;" (click)="_onDelete()"><span>删除</span></button>
      </div>
  `,
  styles: []
})
export class RenderButtonComponent implements AgRendererComponent {

    params: ICellRendererParams;

    constructor() { }

    refresh(params: any): boolean {
        return undefined;
    }

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

    _onAdd(){
        let modal = {};
        let dataModal = this.params.data;
        for(let key in dataModal){
            modal[key] = "";
        }
        this.params.api.updateRowData({add: [modal]});
    }

    _onDelete(){
        let currentData = this.params.data;
        this.params.api.updateRowData({ remove: [currentData] });
    }

}

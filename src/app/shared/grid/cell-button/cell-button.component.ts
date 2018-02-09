import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid';

@Component({
  selector: 'app-row-button',
  templateUrl: './cell-button.component.html',
  styles: []
})
export class CellButtonComponent implements AgRendererComponent {

    params: ICellRendererParams;

    constructor() { }

    refresh(params: any): boolean {
        return undefined;
    }

    agInit(params: ICellRendererParams): void {
        this.params = params;
    }

    _onDelete(){
        debugger;
        let currentData = this.params.data;
        this.params.api.updateRowData({ remove: [currentData] });
    }

}

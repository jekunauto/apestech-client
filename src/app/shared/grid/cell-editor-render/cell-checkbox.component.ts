import { Component } from '@angular/core';
import {ICellEditorAngularComp} from "ag-grid-angular";

@Component({
    selector: 'app-cell-search-input',
    template: `
        <label nz-checkbox [(ngModel)]="value" (ngModelChange)="_console($event)"></label>
    `,
    styles: []
})
export class CellCheckboxComponent implements ICellEditorAngularComp {

    private value: boolean = false;
    private params: any;

    constructor() { }

    _console(value) {
        console.log(value);
    }

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

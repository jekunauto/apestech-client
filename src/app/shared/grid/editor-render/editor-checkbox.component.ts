import { Component } from '@angular/core';
import {ICellEditorAngularComp} from 'ag-grid-angular';

@Component({
    selector: 'app-cell-search-input',
    template: `
        <label nz-checkbox [(ngModel)]="value"></label>
    `,
    styles: []
})
export class EditorCheckboxComponent implements ICellEditorAngularComp {

    private value: boolean;
    private params: any;

    constructor() { }

    agInit(params: any): void {
        this.params = params;
        this.value = params.value.value;
    }

    getValue(): boolean {
        this.params.value.value = this.value;
        return this.value;
    }

    refresh(params: any): boolean {
        return undefined;
    }
}

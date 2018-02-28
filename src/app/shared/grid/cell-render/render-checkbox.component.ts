import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'render-checkbox',
    template: ` 
        <label nz-checkbox [(ngModel)]="value"></label>
    `
})
export class RenderCheckboxComponent implements ICellRendererAngularComp {

    private value: boolean;
    private params: any;

    constructor(){ }

    agInit(params: any): void {
        this.params = params;
        this.value = params.value;
    }

    refresh(params: any): boolean {
        return false;
    }
}

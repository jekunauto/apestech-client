import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'render-checkbox',
    template: ` <label nz-checkbox [(ngModel)]="value"></label>`
})
export class RenderCheckboxComponent implements ICellRendererAngularComp {

    private value: any;
    private params: any;

    agInit(params: any): void {
        this.params = params;
        this.value = params.value.value;
    }

    refresh(params: any): boolean {
        this.value = params.value.value;
        return true;
    }
}

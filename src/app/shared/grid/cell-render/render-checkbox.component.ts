import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'render-checkbox',
    template: ` <label nz-checkbox [(ngModel)]="value"></label>`
})
export class RenderCheckboxComponent implements ICellRendererAngularComp {

    private value: boolean = false;
    private params: any;

    agInit(params: any): void {
        this.params = params;
        this.value = params.value.value;
    }

    refresh(): boolean {
        return false;
    }
}

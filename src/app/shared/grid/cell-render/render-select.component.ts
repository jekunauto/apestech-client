import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
    selector: 'render-select',
    template: ` 
       <div>{{value}}</div>
    `
})
export class RenderSelectComponent implements ICellRendererAngularComp {

    private value: any;
    private params: any;

    constructor(){}

    agInit(params: any): void {

        this.params = params;
        if (params.value){
            this.value = params.colDef.cellEditorParams.value.label;
        }
    }

    refresh(params: any): boolean {
        return false;
    }
}

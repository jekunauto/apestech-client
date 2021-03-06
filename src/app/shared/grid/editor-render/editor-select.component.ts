import {Component} from "@angular/core";
import {ICellEditorAngularComp} from "ag-grid-angular";

@Component({
    selector: 'app-cell-search-input',
    template: `
        <nz-select  [(ngModel)]="selectedOption" [nzPlaceHolder]="'请选择'" nzAllowClear>
            <nz-option
                *ngFor="let option of options"
                [nzLabel]="option.label"
                [nzValue]="option"
                [nzDisabled]="option.disabled">
            </nz-option>
        </nz-select>
    `,
    styles: []
})
export class EditorSelectComponent implements ICellEditorAngularComp {

    options = [];
    selectedOption: any;
    private params: any;

    constructor() { }

    agInit(params: any): void {
        this.params = params;
        this.selectedOption = {label: params.value.label, value: params.value.value};
        this.options = this.params.value.options;
    }

    getValue(): any {
        let result ;
        if ( !this.selectedOption || !this.selectedOption.value ){
            result = "";
            this.params.value.value = "";
            this.params.value.label = "";
        }else {
            result = this.selectedOption.value;
            this.params.value.value = this.selectedOption.value;
            this.params.value.label = this.selectedOption.label;
        }
        return result;
    }

    refresh(params: any): boolean {
        return undefined;
    }
}

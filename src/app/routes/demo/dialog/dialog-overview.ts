import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {GridOptions} from "ag-grid";
import RefData from "../gridComponent/data/refData";
import {FormGroup} from "@angular/forms";
import {GridConfigService} from "@core/config/grid-config-service.service";

@Component({
    selector: 'dialog-overview',
    templateUrl: 'dialog-overview.html',
})
export class DialogOverview {

    searchLoading: boolean = false; // 搜索按钮的动画
    rowSelection: string;  // grid的选择模式 multiple  or single

    conditionField: any[];  // 查询条件
    model: any = {};
    options: any;
    form = new FormGroup({});

    private gridOptions:GridOptions;
    public rowData: any[];
    private columnDefs: any[];

    constructor(public dialogRef: MatDialogRef<DialogOverview>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                gridConfigService: GridConfigService) {

        this.gridOptions = <GridOptions>{};
        this.columnDefs = data.columnDefs;
        this.conditionField = data.conditionField;

        // 选择模式默认为 single
        this.rowSelection = data.rowSelection? data.rowSelection :"single" ;

        this.gridOptions.localeText = gridConfigService.getLocaleText();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    _search(): void{
        this.searchLoading = true;

        console.log(this.model);

        setTimeout(()=>{
            this.createRowData();
            this.searchLoading = false;
        }, 2000);
    }

    private createRowData() {
        let rowData:any[] = [];

        for (let i = 0; i < 10; i++) {
            let countryData = RefData.countries[i % RefData.countries.length];
            rowData.push({
                name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: RefData.addresses[i % RefData.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: this.createRandomPhoneNumber(),
                landline: this.createRandomPhoneNumber()
            });
        }
        this.rowData = rowData;
    }

    private createRandomPhoneNumber() {
        let result = '+';
        for (let i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    }

    onSelectionChanged(event: Event){
        let selectedRow = this.gridOptions.api.getSelectedRows();
        console.log(selectedRow);
        this.data.result = selectedRow;
    }

}

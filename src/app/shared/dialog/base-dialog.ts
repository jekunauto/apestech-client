import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {GridOptions} from "ag-grid";
import {FormGroup} from "@angular/forms";
import {GridConfigService} from "@core/config/grid-config.service";

@Component({
    selector: 'base-dialog',
    templateUrl: 'base-dialog.html',
})
export class BaseDialog {

    searchLoading: boolean = false; // 搜索按钮的动画
    rowSelection: string;  // grid的选择模式 multiple  or single

    conditionField: any[];  // 查询条件
    model: any = {};
    options: any;
    form = new FormGroup({});

    gridOptions: GridOptions;
    public rowData: any[];
    columnDefs: any[];

    constructor(public dialogRef: MatDialogRef<BaseDialog>,
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
            this.queryData();
            this.searchLoading = false;
        }, 2000);
    }

    private queryData() {
        let rowData:any[] = [];

        for (let i = 0; i < 20; i++) {

            rowData.push({

                name: "Jim"+i,

                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: "New York"+i,
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: "New York"+i,
                continent: "New York"+i,
                language: "New York"+i,
            });
        }
        this.rowData = rowData;
    }

    onSelectionChanged() {
        let selectedRow = this.gridOptions.api.getSelectedRows();
        console.log(selectedRow);
        this.data.result = selectedRow;
    }
    resetForm() {
       console.log('aa');
    }

}

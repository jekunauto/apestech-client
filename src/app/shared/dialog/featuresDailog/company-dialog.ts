import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {GridOptions} from "ag-grid";
import {FormGroup} from "@angular/forms";
import {GridConfigService} from "@core/config/grid-config.service";

@Component({
    selector: 'company-dialog',
    templateUrl: '../base-dialog.html',
})
export class CompanyDialog {

    title: string = "查询公司";

    searchLoading: boolean = false;
    rowSelection: string;  // grid的选择模式 multiple  or single

    conditionField: any[];  // 查询条件
    model: any = {};
    options: any;
    form = new FormGroup({});

    gridOptions: GridOptions;
    rowData: any[];
    columnDefs: any[];

    constructor(public dialogRef: MatDialogRef<CompanyDialog>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                gridConfigService: GridConfigService) {

        this.conditionField = [
            { key: 'companyId', type: 'input',
                templateOptions: {label: '公司编码', placeholder: '请输入公司编码',}
            },
            { key: 'companyName', type: 'input',
                templateOptions: {label: '公司名称', placeholder: '请输入公司名称',}
            }
        ];

        this.columnDefs = [
            { headerName: '', width: 30, checkboxSelection: true, suppressMenu: true, pinned: true },
            { headerName: "公司编码", field: "companyId", width: 150, pinned: true },
            { headerName: "公司名称", field: "companyName", width: 150 },
        ];

        this.gridOptions = <GridOptions>{};

        // 选择模式默认为 single
        this.rowSelection = data.rowSelection? data.rowSelection :"single" ;

        //加载翻译的内容
        this.gridOptions.localeText = gridConfigService.getLocaleText();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    _search(): void{
        this.gridOptions.api.setRowData([]);
        this.searchLoading = true;

        console.log(this.model);

        setTimeout(() => {
            this.queryData();
            this.searchLoading = false;
        }, 2000);
    }

    // 查询数据需要调用后端接口
    private queryData() {
        let rowData:any[] = [];

        // 查询数据
        for (let i = 0; i < 20; i++) {
            rowData.push({
                companyId: "0000"+i,
                companyName: "New York"+i,
            });
        }
        this.rowData = rowData;
    }

    // 选中行的时候就获取到选中的行数据
    onSelectionChanged(){
        let selectedRow = this.gridOptions.api.getSelectedRows();
        this.data.result = selectedRow;
    }

    resetForm() {
        this.form.reset();
     }
}

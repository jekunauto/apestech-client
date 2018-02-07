import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GridOptions} from "ag-grid";
import {GridConfigService} from "@core/config/grid-config.service";
import {HeaderButtonComponent} from "@shared/grid/header-button/header-button.component";

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styles: []
})
export class Demo2Component implements OnInit {

    form: FormGroup;

    // grid
    gridOptions: GridOptions;
    columnDefs: any[];
    rowSelection: string;

    // 按钮操作区域的高度
    groupHeaderHeight: number = 28;


    constructor(private fb: FormBuilder, private gridConfigService: GridConfigService) {
        this.gridOptions = <GridOptions>{};
        this.initColumnDefs();
        this.gridOptions.localeText = gridConfigService.getLocaleText();
    }

    ngOnInit() {
        this.form  = this.fb.group({
            addressId: ['', [Validators.required] ],
            addressName: ['', [Validators.required]],
            companyId: ['', [Validators.required]],
            companyName: ['', [Validators.required]],
            warehouseLevel: ['', [Validators.required]],
            isValid: [false],
            isWarehouse: [false],
            isStore: [false],
            isBase: [false],
        });
    }

    get addressId() { return this.form.controls.addressId };
    get addressName() { return this.form.controls.addressName };
    get companyId() { return this.form.controls.companyId };
    get companyName() { return this.form.controls.companyName };


    initColumnDefs() {
        this.columnDefs = [
            { headerName: '', width: 30, checkboxSelection: true, suppressMenu: true, pinned: true },

            { headerName: '',
                headerGroupComponentFramework: HeaderButtonComponent,
                children: [
                    { headerName: "地点编码", field:"addressId", width: 150, },
                    { headerName: "地点名称", field: "addressNames", width: 170, },
                    { headerName: "公司编码", field: "companyId", width: 150 },
                    { headerName: "公司名称", field: "companyName", width: 170 },
                    { headerName: "是否有效", field: "isValid", width: 170 },
                    { headerName: "操作人", field: "inputPerson", width: 170 },
                    { headerName: "操作时间", field: "inputDate", width: 150 },
                ]
            }
        ];
    }
    onSelectionChanged() {
        console.log('abc');
    }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styles: []
})
export class Demo2Component implements OnInit {

    form: FormGroup;

    gridOptions: GridOptions;
    columnDefs: any[];
    rowSelection: string;

    constructor(private fb: FormBuilder) {
        this.initColumnDefs();
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


    initColumnDefs(){
        this.columnDefs = [
            { headerName: '', width: 30, checkboxSelection: true, suppressMenu: true, pinned: true },
            { headerName: "地点编码", field:"addressId", width: 150, },
            { headerName: "地点名称", field: "addressNames", width: 150, },
            { headerName: "公司编码", field: "companyId", width: 150 },
            { headerName: "公司名称", field: "companyName", width: 150 },
        ];
    }
}

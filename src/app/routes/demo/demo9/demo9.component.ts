import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {DialogOverview} from "../dialog/dialog-overview";
import ProficiencyFilter from "../gridComponent/filters/proficiencyFilter";

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styles: []
})
export class Demo9Component implements OnInit {

    form: FormGroup;

    options = [
        {label: '中心仓', value : 1},
        {label: '区域中心仓', value: 2},
        {label: '门店仓库', value : 3}
    ];

    constructor(private fb: FormBuilder, public dialog: MatDialog) {}

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

    _submit(){
        let data = this.form.value;
    }

    onSearchAddress(){
        // 检查是否可以打开弹出框

        // 定义查询条件
        let conditionField = [
            { key: 'addressId', type: 'input', defaultValue: this.form.value["addressId"],
                templateOptions: { label: '地点编码', placeholder: '请输入地点编码',}
            },
            { key: 'addressName', type: 'input',
                templateOptions: {label: '地点名称', placeholder: '请输入地点名称',}
            },
            { key: 'companyId', type: 'input',
                templateOptions: {label: '公司编码', placeholder: '请输入公司编码',}
            },
            { key: 'companyName', type: 'input',
                templateOptions: {label: '公司名称', placeholder: '请输入公司名称',}
            }
        ];

        // grid展示的列头
        let columnDefs = [
            { headerName: '', width: 30, checkboxSelection: true, suppressMenu: true, pinned: true },
            { headerName: "名称", field: "name", width: 150, pinned: true },
            { headerName: "城市", field: "country", width: 150 },
            { headerName: "能力", field: "proficiency", width: 120, filter: ProficiencyFilter },
            { headerName: "电话", field: "mobile", width: 150, filter: 'text'},
            { headerName: "座机", field: "landline", width: 150, filter: 'text'},
            { headerName: "地址", field: "address", width: 500, filter: 'text'}
        ];

        let dialogRef = this.dialog.open(DialogOverview, {
            data: {
                title: "查询地点",
                conditionField: conditionField,
                rowSelection: "multiple", // 定义选择模式，单选或者多选
                columnDefs: columnDefs,
                url: "queryAddress.action",
                result: []
            }
        });

        dialogRef.afterOpen().subscribe( () => {
            console.log("afterOPen")
        });

        dialogRef.afterClosed().subscribe(result => {
            this.form.patchValue({addressName: JSON.stringify(result)})
        });
    }
}

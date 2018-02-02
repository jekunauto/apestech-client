import { Component, OnInit } from '@angular/core';
import { FormGroup} from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";

@Component({
  selector: 'app-define-department',
  templateUrl: './define-department.component.html',
  styles: []
})
export class DefineDepartmentComponent implements OnInit {

    selectIndex = 0;

    searchLoading: boolean = false;

    form = new FormGroup({});
    queryForm = new FormGroup({});
    queryModel: any = {};
    queryOptions: FormlyFormOptions = {};

    editForm = new FormGroup({});
    editModel: any = {};
    editOptions: FormlyFormOptions = {};

    departmentData = [];

    queryArray = [
        {
            key: 'deptId',
            type: 'input',
            // defaultValue: "111",
            templateOptions: {
                label: '部门编码',
                placeholder: '请输入部门编码',
                required: true,
            }
        }, {
            key: 'deptName',
            type: 'input',
            templateOptions: {
                label: '部门名称',
                placeholder: '请输入部门名称',
                required: true,
            }
        }, {
            key: 'companyId',
            type: 'input',
            templateOptions: {
                label: '公司编码',
                placeholder: '请输入公司编码',
                required: true,
            }
        }, {
            key: 'companyName',
            type: 'input',
            templateOptions: {
                label: '公司名称',
                placeholder: '请输入公司名称',
                required: true,
            }
        }, {
            key: 'isValid',
            type: 'checkbox',
            // defaultValue: true,
            templateOptions: {
                label: '有效标记',
            }
        }
    ];

    editArray = [
        {
            key: 'deptId',
            type: 'input',
            templateOptions: {
                label: '部门编码',
                placeholder: '请输入部门编码',
                required: true,
            }
        }, {
            key: 'deptName',
            type: 'input',
            templateOptions: {
                label: '部门名称',
                placeholder: '请输入部门名称',
                required: true,
            }
        }, {
            key: 'companyId',
            type: 'input',
            templateOptions: {
                label: '公司编码',
                placeholder: '请输入公司编码',
                required: true,
            }
        }, {
            key: 'companyName',
            type: 'input',
            templateOptions: {
                label: '公司名称',
                placeholder: '请输入公司名称',
                required: true,
            }
        }, {
            key: 'isValid',
            type: 'checkbox',
            templateOptions: {
                label: '有效标记'
            }
        }
    ];

    tableColumn = [
        {"label":"编号"},
        {"label":"部门编码"},
        {"label":"部门名称"},
        {"label":"公司编码"},
        {"label":"公司名称"},
        {"label":"是否有效"},
        {"label":"录入人"},
        {"label":"录入时间"},
        {"label":"操作"},
    ];

    queryField: FormlyFieldConfig[] = this.queryArray;
    editField: FormlyFieldConfig[] = this.editArray;

    constructor() { }

    ngOnInit() {
    }

    resetForm() {
        this.queryForm.reset();
    }

    _search() {
      console.log( "_search" );
      console.log(this.queryForm.value);

        this.searchLoading = true;
        setTimeout( () => {
            this.searchLoading = false;
            this.getData();
        }, 2000);
    }

    // 模拟数据展示
    getData() {
      let data = [
          {index: 1, deptId: "0001", deptName: "IT部门", companyId: "0001", companyName: "集群车宝", isValid: true, inputPerson: "admin", inputDate: "2018-1-1"},
          {index: 2, deptId: "0001", deptName: "ERP部门", companyId: "0001", companyName: "集群车宝", isValid: false, inputPerson: "admin", inputDate: "2018-1-1"},
          {index: 3, deptId: "0001", deptName: "HR部门", companyId: "0001", companyName: "集群车宝", isValid: true, inputPerson: "admin", inputDate: "2018-1-1"},
          {index: 4, deptId: "0001", deptName: "法务部门", companyId: "0001", companyName: "集群车宝", isValid: true, inputPerson: "admin", inputDate: "2018-1-1"}
      ];
      this.departmentData = data;
    }

    _editRowData(rowData: any) {
      console.log(rowData);
      console.log(this);

      this.editForm.patchValue(rowData);

      this.selectIndex = 1;
    }

    _onQueryTabClick() {
      this.selectIndex = 0;
    }

    _onEditTabClick() {
      this.selectIndex = 1;
    }

    _submit() {
      console.log("_submit");
      console.log(this.queryModel.value);
      console.log(this.editModel.value);
    }

}

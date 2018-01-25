import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";

@Component({
  selector: 'app-define-department',
  templateUrl: './define-department.component.html',
  styles: []
})
export class DefineDepartmentComponent implements OnInit {

    form: FormGroup = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};

    feild: FormlyFieldConfig[] = [{
        key: 'deptId',
        type: 'input',
        templateOptions: {
            label: '部门编码',
            placeholder: '请输入部门编码',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'deptName',
        type: 'input',
        templateOptions: {
            label: '部门名称',
            placeholder: '请输入部门名称',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'companyId',
        type: 'input',
        templateOptions: {
            label: '公司编码',
            placeholder: '请输入公司编码',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'companyName',
        type: 'input',
        templateOptions: {
            label: '公司名称',
            placeholder: '请输入公司名称',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'isValid',
        type: 'checkbox',
        templateOptions: {
            label: '有效标记',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }];

  constructor() { }

  ngOnInit() {
  }

}

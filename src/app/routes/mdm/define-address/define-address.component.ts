import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";

@Component({
  selector: 'app-define-address',
  templateUrl: './define-address.component.html',
  styles: []
})
export class DefineAddressComponent implements OnInit {

    form: FormGroup = new FormGroup({});
    options: FormlyFormOptions = {};

    feild: FormlyFieldConfig[] = [{
        key: 'addressId',
        type: 'input',
        templateOptions: {
            label: '地点编码',
            placeholder: '请输入地点编码',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'addressName',
        type: 'input',
        templateOptions: {
            label: '地点名称',
            placeholder: '请输入地点名称',
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
        key: 'warehouseLevel',
        type: 'select',
        templateOptions: {
            label: '仓库级别',
            placeholder: '请输入仓库级别',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18,
            options : [
                {label: '中心仓', name :"1"},
                {label: '区域中心仓', name :"2"},
                {label: '门店仓库', name :"3"}
            ]
        }
    }, {
        key: 'startDate',
        type: 'date',
        templateOptions: {
            label: '开始时间',
            placeholder: '结束时间',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }];

  constructor() { }

  ngOnInit() {
  }

  _submit(){

  }

}

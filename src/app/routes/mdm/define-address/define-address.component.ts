import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
  selector: 'app-define-address',
  templateUrl: './define-address.component.html',
  styles: []
})
export class DefineAddressComponent implements OnInit {

    form: FormGroup = new FormGroup({});
    model: any = {};
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
        key: 'isValid',
        type: 'checkbox',
        templateOptions: {
            label: '有效标记',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'isWarehouse',
        type: 'checkbox',
        templateOptions: {
            label: '仓库标记',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'isStore',
        type: 'checkbox',
        templateOptions: {
            label: '门店标记',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'isBase',
        type: 'checkbox',
        templateOptions: {
            label: '基地标记',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }];

  constructor() { }

  ngOnInit() {

      this.model.companyName = "集群车宝";
      this.model.warehouseLevel;

  }

  _submit(){
      console.log(this.model);
  }

}

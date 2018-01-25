import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-define-address',
  templateUrl: './define-address.component.html',
  styles: []
})
export class DefineAddressComponent implements OnInit {

    form: FormGroup;

    options = [
        {label: '中心仓', value : 1},
        {label: '区域中心仓', value: 2},
        {label: '门店仓库', value : 3, disabled: true}
     ];

    // options = [
    //     { value: 'jack', label: 'Jack' },
    //     { value: 'lucy', label: 'Lucy' },
    //     { value: 'disabled', label: 'Disabled', disabled: true }
    // ];

    /*form: FormGroup = new FormGroup({});
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
    }];*/

  constructor(private fb: FormBuilder) {

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

          hzfs:[]
      });


      setTimeout( ()=> {
          //给form 设置值
          this.form.patchValue({addressId: " 1243436 ", isStore: true});
          this.form.patchValue({warehouseLevel: 2});

          this.form.patchValue({hzfs: 3});
         // this.form.controls['warehouseLevel'].setValue({value :"2",label: '区域中心仓'});

      } , 5000);


  }

  get addressId() { return this.form.controls.addressId };
  get addressName() { return this.form.controls.addressName };
  get companyId() { return this.form.controls.companyId };
  get companyName() { return this.form.controls.companyName };
  get warehouseLevel() { return this.form.controls.warehouseLevel };

  _submit(){
    console.log(this.form.value);
  }

}

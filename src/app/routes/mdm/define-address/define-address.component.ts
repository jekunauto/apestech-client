import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

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
        {label: '门店仓库', value : 3}
     ];

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
      });

      setTimeout( ()=> {
          //给form 设置值
          this.form.patchValue({addressId: " 1243436 ", isStore: true});
          this.form.patchValue({warehouseLevel: 3} );
          // this.form.controls['warehouseLevel'].setValue({value :"2",label: '区域中心仓'});

      } , 5000);
  }

  get addressId() { return this.form.controls.addressId };
  get addressName() { return this.form.controls.addressName };
  get companyId() { return this.form.controls.companyId };
  get companyName() { return this.form.controls.companyName };
  get warehouseLevel() { return this.form.controls.warehouseLevel };

  _submit(){
    let data = this.form.value;

  }

}

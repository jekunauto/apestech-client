import { Component, OnInit } from '@angular/core';
import { FormGroup} from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";

@Component({
  selector: 'app-define-department',
  templateUrl: './define-department.component.html',
  styles: []
})
export class DefineDepartmentComponent implements OnInit {

    loading: boolean = false;

    form = new FormGroup({});

    queryForm = new FormGroup({});
    editForm = new FormGroup({});

    queryModel: any = {};
    editModel: any = {};

    advancedOperation3 = [];

    options: FormlyFormOptions = {};

    feidlArray = [{
        key: 'deptId',
        type: 'input',
        defaultValue: "111",
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
        defaultValue: true,
        templateOptions: {
            label: '有效标记',
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }];

    formFeild0: FormlyFieldConfig[] = this.feidlArray;
    formFeild1: FormlyFieldConfig[] = this.feidlArray;


  constructor() { }

  ngOnInit() {

  }

    resetForm(){
        this.queryForm.reset();
    }

    _search(){
      console.log( "_search" );
      console.log(this.queryForm.value);


    }

    _submit(){
      console.log("_submit");
      console.log(this.queryModel.value);
      console.log(this.editModel.value);
    }

}

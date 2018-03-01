import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styles: []
})
export class Demo7Component implements OnInit {

    current = 1;

    feildList = [{
        "name": "companyId",
        "label": "公司编码",
        "placeHolder": "请输入公司编码",
        "type": "input",
        "crossColumn": {
            "div": 8,
            "label": 6,
            "input": 18
        },
        "event": {
        }
    },{
        "name": "companyName",
        "label": "公司名称",
        "placeHolder": "请输入公司名称",
        "type": "input",
        "crossColumn" : {
            "div": 8,
            "label": 6,
            "input": 18
        },
        "event": {
        }
    },{
        "name": "contractId",
        "label": "合同编码",
        "placeHolder": "请输入合同编码",
        "type": "input",
        "crossColumn" : {
            "div": 8,
            "label": 6,
            "input": 18
        },
        "event": {
        }
    },{
        "name": "contractName",
        "label": "合同名称",
        "placeHolder": "请输入合同名称",
        "type": "input",
        "crossColumn" : {
            "div": 8,
            "label": 6,
            "input": 18
        },
        "event": {
        }
    },{
        "name": "comment",
        "label": "备注",
        "placeHolder": "请输入备注",
        "type": "input",
        "crossColumn" : {
            "div": 16,
            "label": 3,
            "input": 21
        },
        "event": {
        }
    },{
        "name": "suggesting",
        "label": "建议",
        "placeHolder": "请输入建议",
        "type": "textarea",
        "crossColumn" : {
            "div": 24,
            "label": 2,
            "input": 22
        },
        "event": {
        }
    }];

    form: FormGroup;

    selectValue;

    options = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'disabled', label: 'Disabled', disabled: true }
    ];
    constructor(private fb: FormBuilder) {
        this.selectValue = this.options[0];

        this.form = this.fb.group({
            companyId: [],
            companyName: [],
            contractId: [],
            contractName: [],
            comment: [],
            suggesting: []
        });
    }

    ngOnInit() {
    }

    _submitForm() {
        this.selectValue = '';
        console.log(this.form.value);

    }

}

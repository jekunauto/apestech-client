import {Component} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'app-demo8',
    templateUrl: './demo8.component.html',
    styles: []
})
export class Demo8Component {

    form = new FormArray([0, 1].map(() => new FormGroup({}) ));
    model: any = {};
    options: FormlyFormOptions = {};
    feild1: FormlyFieldConfig[] = [{
        key: 'name',
        type: 'input',
        templateOptions: {
            label: '姓名',
            placeholder: 'Enter email',
            required: true,
            divCol: 24,
            lblCol: 2,
            inputCol: 22
        }
    }, {
        key: 'gsid',
        type: 'input',
        templateOptions: {
            label: '公司代码',
            placeholder: '请输入合同名称',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'gsmc',
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
        key: 'bmmc',
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

    feild2: FormlyFieldConfig[] = [{
        key: 'khid',
        type: 'input',
        templateOptions: {
            label: '客户姓名',
            placeholder: 'Enter khid',
            required: true,
            divCol: 24,
            lblCol: 2,
            inputCol: 22,
        }
    }, {
        key: 'khmc',
        type: 'input',
        templateOptions: {
            label: '客户名称',
            placeholder: '请输入客户名称',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'hymc',
        type: 'input',
        templateOptions: {
            label: '会员名称',
            placeholder: '请输入会员名称',
            required: true,
            divCol: 16,
            lblCol: 3,
            inputCol: 21
        }
    }, {
        key: 'xszzmc',
        type: 'input',
        templateOptions: {
            label: '销售组织名称',
            placeholder: '请输入销售组织名称',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        }
    }, {
        key: 'ip',
        type: 'input',
        templateOptions: {
            label: 'IP Address (pattern = /(\d{1,3}\.){3}\d{1,3}/)',
            pattern: /(\d{1,3}\.){3}\d{1,3}/,
            required: true,
            divCol: 24,
            lblCol: 2,
            inputCol: 22,
            keyup: function () {
                console.log('abc');
            }
        },
        validation: {
            messages: {
                pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" 不是一个有效得IP地址`,
            },
        },
    }, {
        key: 'marvel3',
        type: 'select',
        templateOptions: {
            label: '选择 name/value/group',
            // selectMode: "multiple",
            options: [],
            change: () => {
                console.log('点击事件');
            },
            divCol: 8,
            lblCol: 6,
            inputCol: 18
        },
        lifecycle: {
            onInit: (form, field) => {
                Observable.timer(10000).subscribe(() => {
                    field.templateOptions.options = [
                        {label: 'Iron Man', id: 'iron_man', name :"aaa", test: "uuuu"},
                        {label: 'Captain America', id: 'captain_america', name :"bbb"},
                        {label: 'Black Widow', id: 'black_widow', name :"ccc", disabled: true},
                        {label: 'Hulk', id: 'hulk', name :"ddd"},
                        {label: 'Captain Marvel', id: 'captain_marvel', name :"fff"},
                    ];
                });
            }
        }

    }, {
        key: 'hobby',
        type: 'checkbox',
        templateOptions: {
            label: '接收通知',
            title: '是',
            required: true,
            divCol: 8,
            lblCol: 6,
            inputCol: 18,
            click: () => {
                console.log('点击事件');
            }
        }
    }, {
        key: 'multicheckbox',
        type: 'multicheckbox',
        templateOptions: {
            label: '购买的险种',
            options : [
                {label: '划痕险', key: 'iron_man', vaule: 'iron_man', name: 'insurance1'},
                {label: '自燃险', key: 'captain_america', vaule: 'captain_america', name: 'insurance2'},
                {label: '第三者险', key: 'black_widow', vaule: 'black_widow', name: 'insurance3', disabled: true},
                {label: '玻璃险', key: 'hulk', vaule: 'hulk', name: 'insurance4'},
                {label: '第三者不急免赔', key: 'captain_marvel', vaule: 'captain_marvel', name: 'insurance5'}
            ],
            required: true,
            divCol: 24,
            lblCol: 2,
            inputCol: 22,
        }
    }];

    // ngOnInit(): void {
    //
    // }

    submit() {
        alert(JSON.stringify(this.model));
    }

}

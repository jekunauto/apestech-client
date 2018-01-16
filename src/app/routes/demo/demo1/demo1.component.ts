import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styles: []
})
export class Demo1Component implements OnInit {

    //设置控件是否可以输入
    isDisabled: boolean = true;

    //日期控件相关定义
    _dateRange = [null, null];
    _startDate;
    _endDate;
    _disabledStartDate: boolean = false;
    _disabledEndDate:boolean = false;

    current = 1;

    selectValue;

    options = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'disabled', label: 'Disabled', disabled: true }
    ];

    cityValue: any[] = null;
    cities = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
                isLeaf: true
            }],
        }],
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
                isLeaf: true
            }],
        }],
    }];

    marks = {
        0: 'A',
        25: 'B',
        50: 'C',
        75: 'D',
        100: 'E'
    };

    rate = 3;

    hotTags: string[] = ['Movie', 'Books', 'Music', 'Sports'];

    selectedTags: string[] = [];

    constructor(private fb: FormBuilder) {
        this.selectValue = this.options[0];
    }

    ngOnInit() {

    }

    changeCity(value) {
        console.log(value);
    }

    handleChange(checked: boolean, tag: string): void {
        if (checked) {
            this.selectedTags.push(tag);
        } else {
            this.selectedTags = this.selectedTags.filter(t => t !== tag);
        }
        console.log('You are interested in: ', this.selectedTags);
    }

    _startValueChange = () => {
        if (this._startDate > this._endDate) {
            this._endDate = null;
        }
    };

    _endValueChange = () => {
        if (this._startDate > this._endDate) {
            this._startDate = null;
        }
    };

}

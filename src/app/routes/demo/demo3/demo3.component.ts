import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-demo3',
    templateUrl: './demo3.component.html',
    styles: []
})
export class Demo3Component implements OnInit {

    selectValue;

    options = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'disabled', label: 'Disabled', disabled: true }
    ];

    rate = 3;

    selectedTags: string[] = [];

    validateForm: FormGroup;

    controlArray = [];

    isCollapse = true;

    constructor(private fb: FormBuilder) {
        this.selectValue = this.options[0];
    }

    ngOnInit() {
        this.validateForm = this.fb.group({});
        for (let i = 0; i < 10; i++) {
            this.controlArray.push({ index: i, show: i < 6 });
            this.validateForm.addControl(`field${i}`, new FormControl());
        }
    }


    toggleCollapse() {
        this.isCollapse = !this.isCollapse;
        this.controlArray.forEach((c, index) => {
            c.show = this.isCollapse ? (index < 6) : true;
        });
    }

    resetForm() {
        this.validateForm.reset();
    }
}

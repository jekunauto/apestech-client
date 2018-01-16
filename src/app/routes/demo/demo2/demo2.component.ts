import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styles: []
})
export class Demo2Component implements OnInit {

    selectValue;

    options = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'disabled', label: 'Disabled', disabled: true }
    ];

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

    validateForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.selectValue = this.options[0];
    }

    ngOnInit() {
        this.validateForm = this.fb.group({});

    }

    handleChange(checked: boolean, tag: string): void {
        if (checked) {
            this.selectedTags.push(tag);
        } else {
            this.selectedTags = this.selectedTags.filter(t => t !== tag);
        }
        console.log('You are interested in: ', this.selectedTags);
    }

}

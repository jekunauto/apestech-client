import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogOverviewDialog} from "../dialog/dialog-overview-dialog";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styles: []
})
export class Demo9Component implements OnInit {

    form: FormGroup;

    options = [
        {label: '中心仓', value : 1},
        {label: '区域中心仓', value: 2},
        {label: '门店仓库', value : 3}
    ];

    constructor(private fb: FormBuilder, public dialog: MatDialog) {}

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

    }

    _submit(){
        let data = this.form.value;
    }

    onSearchAddress(){
        let dialogRef = this.dialog.open(DialogOverviewDialog, {
            width: '800px',
            data: {
                title: "查询地点",
                name: this.form.value["addressId"],
                animal: "1111"
            }
        });

        dialogRef.afterOpen().subscribe( () =>{
            console.log("afterOPen")
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
        });
    }
}

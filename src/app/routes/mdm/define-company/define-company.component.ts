import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {CompanyDialog} from "@shared/dialog/featuresDailog/company-dialog";

@Component({
  selector: 'app-define-company',
  templateUrl: './define-company.component.html',
  styles: []
})
export class DefineCompanyComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
      this.form  = this.fb.group({
          companyId: ['', [Validators.required,
              Validators.pattern("^[0-9]*$")]
          ],
          companyName: ['', [Validators.required]],
          shortName: ['', [Validators.required]],
          countryName: ['', [Validators.required]],
          provinceName: ['', [Validators.required]],
          cityName: ['', [Validators.required]],
          registerAddress: ['', [Validators.required]],
          taxId: ['', [Validators.required]],
          bankName: ['', [Validators.required]],
          accountId: ['', [Validators.required]],
          contactName: ['', [Validators.required]],
          contactPhone: ['', [Validators.required]],
          cellPhoneNumber: ['', [Validators.required]],
          isValid: [''],
          englishName: [''],
          postalCode: [''],
          supplierCode: [''],
          customerCode: [''],
          comments: [''],

      });

  }

    get companyId() { return this.form.controls.companyId; }
    get companyName() { return this.form.controls.companyName; }
    get shortName() { return this.form.controls.shortName; }
    get countryName() { return this.form.controls.countryName; }
    get provinceName() { return this.form.controls.provinceName; }
    get cityName() { return this.form.controls.cityName; }
    get registerAddress() { return this.form.controls.registerAddress; }
    get taxId() { return this.form.controls.taxId; }
    get bankName() { return this.form.controls.bankName; }
    get accountId() { return this.form.controls.accountId; }

    _submitForm(){
        console.log(this.form.value);
        for (const i in this.form.controls) {
            this.form.controls[i].markAsDirty();
        }
        if (this.form.invalid) return ;
    }

    // 弹出查询公司
    onSearchCompany(){

        let dialogRef = this.dialog.open(CompanyDialog, {
            width: "900px",
            data: {
                rowSelection: "single",
                result: []
            }
        });

        dialogRef.afterOpen().subscribe( () => {
            console.log("afterOPen")
        });

        dialogRef.afterClosed().subscribe(result => {
            this.form.patchValue({addressName: JSON.stringify(result)})
        });
    }

}

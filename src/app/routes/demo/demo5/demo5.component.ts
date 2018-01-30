import { Component, OnInit } from '@angular/core';
import {_HttpClient} from "@delon/theme";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {ModelCustomComponent} from "./custom.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styles: []
})
export class Demo5Component implements OnInit {

    formGroupModel: FormGroup;

    data: { };

    constructor(public msg: NzMessageService, private http: _HttpClient,
                private modal: NzModalService, private fb: FormBuilder) {
        this.formGroupModel = this.fb.group({
            selectFeild : [''],
            feild1: ['', [Validators.required]],
            feild2: ['', [Validators.required]],
            feild3: ['', [Validators.required]],
            feild4: ['', [Validators.required]],
            feild5: ['', [Validators.required]],
            feild6: ['', [Validators.required]],
            feild7: ['', [Validators.required]],
            feild8: ['', [Validators.required]],
            feild9: ['', [Validators.required]],
            feild10: ['', [Validators.required]],
            feild11: ['', [Validators.required]],
            Test1: ['', [Validators.required]],
            Test2: ['', [Validators.required]],
            Test3: ['', [Validators.required]],
            Test4: ['', [Validators.required]],
            Test5: ['', [Validators.required]],
            Test6: ['', [Validators.required]],
            Test7: ['', [Validators.required]],
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


    get feild1() { return this.formGroupModel.controls.feild1; }
    get feild2() { return this.formGroupModel.controls.feild2; }
    get feild3() { return this.formGroupModel.controls.feild3; }
    get feild4() { return this.formGroupModel.controls.feild4; }
    get feild5() { return this.formGroupModel.controls.feild5; }
    get feild6() { return this.formGroupModel.controls.feild6; }
    get feild7() { return this.formGroupModel.controls.feild7; }
    get feild8() { return this.formGroupModel.controls.feild8; }
    get feild9() { return this.formGroupModel.controls.feild9; }
    get feild10() { return this.formGroupModel.controls.feild10; }
    get feild11() { return this.formGroupModel.controls.feild11; }
    get Test1() { return this.formGroupModel.controls.Test1; }
    get Test2() { return this.formGroupModel.controls.Test2; }
    get Test3() { return this.formGroupModel.controls.Test3; }
    get Test4() { return this.formGroupModel.controls.Test4; }
    get Test5() { return this.formGroupModel.controls.Test5; }
    get Test6() { return this.formGroupModel.controls.Test6; }
    get Test7() { return this.formGroupModel.controls.Test7; }

    get companyId() { return this.formGroupModel.controls.companyId; }
    get companyName() { return this.formGroupModel.controls.companyName; }
    get shortName() { return this.formGroupModel.controls.shortName; }
    get countryName() { return this.formGroupModel.controls.countryName; }
    get provinceName() { return this.formGroupModel.controls.provinceName; }
    get cityName() { return this.formGroupModel.controls.cityName; }
    get registerAddress() { return this.formGroupModel.controls.registerAddress; }
    get taxId() { return this.formGroupModel.controls.taxId; }
    get bankName() { return this.formGroupModel.controls.bankName; }
    get accountId() { return this.formGroupModel.controls.accountId; }


    ngOnInit() {
        this.http.get('/profile/advanced').subscribe(res => this.data = res);
    }

    onClickSelect() {
        let options = {
           wrapClassName: 'modal-lg',
           content: ModelCustomComponent,
           footer: false,
           componentParams: {
               title: "查询部门",
               data: this.data
           }
       };
       this.modal.open( options ).subscribe(result => {
            debugger;
           //由于传递过来的值，存在多个事件，只选择传递数组的值
           if ( Array.isArray(result) ) {
               this.formGroupModel.setValue({
                   selectFeild: JSON.stringify(result)
               });
           }
       });
    }

    async onSearchChange(contentTpl) {

        this.modal.open({
            wrapClassName: 'modal-lg',
            title: 'Confirm Modal',
            content: contentTpl,
            okText: 'OK',
            cancelText: 'Return',
            onOk: () => {
                this.msg.success('Click OK!');
            },
            onCancel: () => {
                this.msg.error('Click Return!');
            }
        });
    }

}

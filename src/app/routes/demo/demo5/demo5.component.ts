import { Component, OnInit } from '@angular/core';
import {_HttpClient} from "@delon/theme";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {ModelCustomComponent} from "./custom.component";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styles: []
})
export class Demo5Component implements OnInit {

    formGroupModel: FormGroup;

    data = {
        advancedOperation1: [],
        advancedOperation2: [],
        advancedOperation3: []
    };

    constructor(public msg: NzMessageService, private http: _HttpClient,
                private modal: NzModalService, private fb: FormBuilder) {
        this.formGroupModel = this.fb.group({
            selectFeild : ['']
        });
    }

    ngOnInit() {
        this.http.get('/profile/advanced').subscribe(res => this.data = res);
    }

    onClickSelect(){
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
           if( Array.isArray(result)){
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

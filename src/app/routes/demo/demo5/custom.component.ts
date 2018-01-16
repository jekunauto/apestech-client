import {Component, Input, OnInit} from '@angular/core';
import { NzModalSubject, NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-model-custom',
    template: `
    <div class="modal-header">
        <div class="modal-title">{{title}}</div>
    </div>

    <div nz-row [nzGutter]="16">
        <div nz-col nzMd="8" nzSm="12" nzXs="24">
            <div nz-form-item nz-row>
                <div nz-form-label nz-col><label>任务名</label></div>
                <div nz-form-control nz-col nzHasFeedback>
                    <nz-input nzPlaceHolder="请输入任务名" nzSize="large"></nz-input>
                </div>
            </div>
        </div>

        <div nz-col nzMd="8" nzSm="12" nzXs="24">
            <div nz-form-item nz-row>
                <div nz-form-label nz-col><label>任务名</label></div>
                <div nz-form-control nz-col nzHasFeedback>
                    <nz-input nzPlaceHolder="请输入任务名" nzSize="large"></nz-input>
                </div>
            </div>
        </div>

        <div nz-col nzMd="8" nzSm="12" nzXs="24">
            <div nz-form-item nz-row>
                <div nz-form-label nz-col><label>任务名</label></div>
                <div nz-form-control nz-col nzHasFeedback>
                    <nz-input nzPlaceHolder="请输入任务名" nzSize="large"></nz-input>
                </div>
            </div>
        </div>
        
    </div>

    <div nz-row>
        <div nz-col [nzSpan]="24" class="text-left">
            <button nz-button [nzType]="'primary'">查询</button>
        </div>
    </div>
    
    <nz-table #nzTable [nzDataSource]="data.advancedOperation1"
              [nzIsPagination]="_pagination"
              [nzBordered]="_bordered"
              [nzPageSize]="5" 
              [nzScroll]="{ y: 240 }"
              [(nzPageIndex)]="_current"
              (nzPageIndexChange)="_ajaxRefreshData()"  
              (nzPageSizeChange)="_ajaxRefreshData()"
              (nzDataChange)="_displayDataChange($event)">
        
        <ng-template #nzFixedHeader >
            <thead nz-thead>
                <tr>
                    <th nz-th nzCheckbox>
                        <label nz-checkbox [(ngModel)]="_allChecked" [nzIndeterminate]="_indeterminate" (ngModelChange)="_checkAll($event)">
                        </label>
                    </th>
                    <th nz-th [nzWidth]="'150px'"><span>操作类型</span></th>
                    <th nz-th [nzWidth]="'150px'"><span>操作人</span></th>
                    <th nz-th [nzWidth]="'150px'"><span>执行结果</span></th>
                    <th nz-th [nzWidth]="'150px'"><span>操作时间</span></th>
                    <th nz-th [nzWidth]="'240px'"><span>备注</span></th>
                </tr>
            </thead>
        </ng-template>
        
        <tbody nz-tbody>
            <tr nz-tbody-tr *ngFor="let i of data.advancedOperation1">
                <td nz-td nzCheckbox>
                    <label nz-checkbox [(ngModel)]="i.checked" (ngModelChange)="_refreshStatus($event)">
                    </label>
                </td>
                <td nz-td>{{i.type}}</td>
                <td nz-td>{{i.name}}</td>
                <td nz-td>
                    <nz-badge *ngIf="i.status === 'success'" [nzStatus]="'success'" [nzText]="'成功'"></nz-badge>
                    <nz-badge *ngIf="i.status !== 'success'" [nzStatus]="'processing'" [nzText]="'进行中'"></nz-badge>
                </td>
                <td nz-td>{{i.updatedAt | _date}}</td>
                <td nz-td>{{i.memo}}</td>
            </tr>
        </tbody>
    </nz-table>
    
    <div class="modal-footer">
        <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="cancel()">
            Cancel
        </button>
        <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="ok()">
            OK
        </button>
    </div>
    `
})
export class ModelCustomComponent implements OnInit{

    @Input() title: string;
    @Input() data;

    // ajax
    _pagination = true;
    _bordered = true;
    _current = 1;
    _total = 1;
    _ajaxLoading = false;

    constructor(
        private model: NzModalService,
        private msg: NzMessageService,
        private subject: NzModalSubject) {}

    ngOnInit(): void {
    }

    _ajaxRefreshData = () => {
        this._ajaxLoading = true;
        this.msg.info("refreshData");
        this._ajaxLoading = false;
        this._total = 200;
    };

    // check
    _allChecked = false;
    _indeterminate = false;
    _displayData = [];

    _displayDataChange($event) {
        this._ajaxLoading = true;
        this._displayData = $event;
        this._refreshStatus();
        this._ajaxLoading = false;
    }

    _refreshStatus() {
        const allChecked = this._displayData.every(value => value.disabled || value.checked);
        const allUnChecked = this._displayData.every(value => value.disabled || !value.checked);
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
    }

    _checkAll(value) {
        if (value) {
            this._displayData.forEach(data => {
                data.checked = true;
            });
        } else {
            this._displayData.forEach(data => {
                data.checked = false;
            });
        }
        this._refreshStatus();
    }

    ok() {
        let returnData = this._displayData.filter( value => {
            if( value.checked ){
                console.log(value);
                return true;
            }
        });

        this.subject.next(returnData);
        this.cancel();
    }

    cancel() {
        this.subject.destroy();
        this.subject = null;
    }

}

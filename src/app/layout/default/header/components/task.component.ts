import { Component } from '@angular/core';

@Component({
    selector: 'header-task',
    template: `
    <nz-dropdown nzTrigger="click" nzPlacement="bottomRight" (nzVisibleChange)="change()">
        <div class="item" nz-dropdown>
            <nz-badge [nzDot]="true">
                <ng-template #content>
                    <i class="anticon anticon-bell"></i>
                </ng-template>
            </nz-badge>
        </div>
        
        <div nz-menu class="wd-lg">
            <nz-card nzTitle="通知" [nzLoading]="loading" class="ant-card__body-nopadding">
                <ng-template #extra><i class="anticon anticon-plus"></i></ng-template>
                
                <div *ngFor="let task of taskList"
                    nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm bg-grey-lighter-h point">
                    <div nz-col [nzSpan]="4" class="text-center">
                        <nz-avatar [nzSrc]="task.imgUrl" [nzSize]="'large'"></nz-avatar>
                    </div>
                    <div nz-col [nzSpan]="20">
                        <strong>{{task.name}}</strong>
                        <p>{{task.content}}</p>
                    </div>
                </div>
                
                <div nz-row class="pt-lg pb-lg">
                    <div nz-col [nzSpan]="24" class="text-center text-grey point">
                        查看全部
                    </div>
                </div>
            </nz-card>
        </div>
    </nz-dropdown>
    `
})
export class HeaderTaskComponent {

    loading = true;

    taskList = [{
        imgUrl: 'http://temp.im/81x81',
        name: 'cipchk',
        content:'Please tell me what happened in a few words, don\'t go into details.'
    },{
        imgUrl: 'http://temp.im/81x81',
        name: 'はなさき',
        content:'ハルカソラトキヘダツヒカリ.'
    },{
        imgUrl: 'http://temp.im/81x81',
        name: '马爸爸',
        content:'最牛逼的事情莫过于你说，你没有碰过钱。说不应该创建阿里。'
    },{
        imgUrl: 'http://temp.im/81x81',
        name: '苏先生',
        content:'请告诉我，我应该说点什么好？'
    },{
        imgUrl: 'http://temp.im/81x81',
        name: 'Jefferson',
        content:'Please tell me what happened in a few words, don\'t go into details.'
    }];

    change() {
        setTimeout(() => this.loading = false, 500);
    }

}

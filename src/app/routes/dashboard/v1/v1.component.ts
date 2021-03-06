import { ApiService } from '@core/services/api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-dashboard-v1',
    templateUrl: './v1.component.html'
})
export class DashboardV1Component implements OnInit {

    constructor(private http: ApiService, public msg: NzMessageService) { }

    todoData: any[] = [
        { completed: true, avatar: 'http://temp.im/81x81', name: '苏先生', content: `请告诉我，我应该说点什么好？` },
        { completed: false, avatar: 'http://temp.im/81x81', name: 'はなさき', content: `ハルカソラトキヘダツヒカリ` },
        { completed: false, avatar: 'http://temp.im/81x81', name: 'cipchk', content: `this world was never meant for one as beautiful as you.` },
        { completed: false, avatar: 'http://temp.im/81x81', name: 'Kent', content: `my heart is beating with hers` },
        { completed: false, avatar: 'http://temp.im/81x81', name: 'Are you', content: `They always said that I love beautiful girl than my friends` },
        { completed: false, avatar: 'http://temp.im/81x81', name: 'Forever', content: `Walking through green fields ，sunshine in my eyes.` }
    ];

    quickMenu = false;

    webSite: any[] = [ ];
    salesData: any[] =  [ ];
    offlineChartData: any[] = [];

    ngOnInit() {
        /*报错屏蔽*/
        // this.http.get('/chart').subscribe((res: any) => {
        //     this.webSite = res.visitData.slice(0, 10);
        //     this.salesData = res.salesData;
        //     console.log('AAAAAAAAAAAAAAAa');
        //     this.offlineChartData = res.offlineChartData;
        // });
   }
}

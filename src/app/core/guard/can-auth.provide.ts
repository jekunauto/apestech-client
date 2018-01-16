import { Injectable } from '@angular/core';
import {ActivatedRoute, CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {UserAuthService} from "@core/services/user-auth.service";
import {NzMessageService} from "ng-zorro-antd";
import {InitService} from "@core/services/init.service";

@Injectable()
export class CanAuthProvide implements CanActivate {

    constructor( private userAuthService: UserAuthService, private router: Router,
                 private msg: NzMessageService, private activeRouter: ActivatedRoute, private initService: InitService) {}

    canActivate(): boolean | Observable<boolean> | Promise<boolean> {

        return new Observable((observer) => {

            //界面刷新之后，重新加载菜单
            console.log(this.activeRouter.snapshot);
            this.initService.loadAppData();

            if (this.userAuthService.isLogined()) {
                observer.next(true);
                observer.complete();
                return;
            }

            this.msg.error('请先登录');
            this.router.navigateByUrl("");

            observer.next(false);
            observer.complete();
        });


    }

}

import { Injectable } from '@angular/core';
import { Router, CanActivate,   ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {UserAuthService} from "@core/services/user-auth.service";
import {NzMessageService} from "ng-zorro-antd";
import {InitService} from "@core/services/init.service";

@Injectable()
export class CanAuthProvide implements CanActivate {

    constructor( private userAuthService: UserAuthService, private router: Router,
                 private msg: NzMessageService, private initService: InitService) {}

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            this.initService.loadAppData();
            if (this.userAuthService.isLogined()) {
                return true;
             } else {
                this.msg.error('请先登录');
                this.router.navigateByUrl('/passport');
                return false;
            }
        }

}

import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import {InitService} from "@core/services/init.service";
import {UserAuthService} from "@core/services/user-auth.service";

@Component({
    selector: 'passport-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.less' ]
})
export class UserLoginComponent implements OnDestroy {

    form: FormGroup;
    error = '';
    type = 0;
    loading = false;

    constructor(
        fb: FormBuilder,
        private router: Router,
        public msg: NzMessageService,
        private initService: InitService,
        private userAuthService : UserAuthService) {

        this.form = fb.group({
            userName: [null, [Validators.required, Validators.minLength(5)]],
            password: [null, Validators.required],
            mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
            captcha: [null, [Validators.required]],
            remember: [true]
        });
    }

    // region: fields

    get userName() { return this.form.controls.userName; }
    get password() { return this.form.controls.password; }
    get mobile() { return this.form.controls.mobile; }
    get captcha() { return this.form.controls.captcha; }

    // endregion

    switch(ret: any) {
        this.type = ret.index;
    }

    // region: get captcha

    count = 0;
    interval$: any;

    getCaptcha() {
        this.count = 59;
        this.interval$ = setInterval(() => {
            this.count -= 1;
            if (this.count <= 0)
                clearInterval(this.interval$);
        }, 1000);
    }

    // endregion

    submit() {
        this.error = '';
        if (this.type === 0) {
            this.userName.markAsDirty();
            this.password.markAsDirty();
            if (this.userName.invalid || this.password.invalid) return;
        } else {
            this.mobile.markAsDirty();
            this.captcha.markAsDirty();
            if (this.mobile.invalid || this.captcha.invalid) return;
        }

        // mock http
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            if (this.type === 0) {
                if (this.userName.value !== 'admin' || this.password.value !== '888888') {
                    this.error = `账户或密码错误`;
                    return;
                }
            }

            //存入用户的登录信息
            let userInfo = {
                token: Math.random(),
                loginUrl: "/passport",
                userInfo: {
                    name: this.userName.value
                }
            };
            this.userAuthService.setUserInfo(JSON.stringify(userInfo));

            //加载菜单
            this.initService.loadAppData();

            this.router.navigate(['']);
        }, 1000);
    }

    // endregion
    ngOnDestroy(): void {
        if (this.interval$) clearInterval(this.interval$);
    }
}

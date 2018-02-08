import {Injectable} from '@angular/core';
import {MenuService, SettingsService, TitleService} from  '@core';
import {I18NService} from '@core/i18n/i18n.service';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class InitService {

    langData: {};    //语言包
    appData : {};    //用户数据以及菜单

    constructor(
        private menuService: MenuService,
        private translate: TranslateService,
        private i18n: I18NService,
        private settingService: SettingsService,
        private titleService: TitleService,
        private httpClient: HttpClient) {
    }

    loadI18n(){

        this.httpClient.get(`assets/i18n/${this.i18n.defaultLang}.json`).subscribe( langData =>{
            this.langData = this.langData;

            // setting language data
            this.translate.setTranslation(this.i18n.defaultLang, this.langData);
            this.translate.setDefaultLang(this.i18n.defaultLang);
        });

    }

    loadAppData() {
        this.httpClient.get('assets/app-data.json').subscribe(appData => {
            this.appData = appData;

            // application data
            const res: any = this.appData;
            // 应用信息：包括站点名、描述、年份
            this.settingService.setApp(res.app);
            // 用户信息：包括姓名、头像、邮箱地址
            this.settingService.setUser(res.user);

            // 初始化菜单
            this.menuService.clear();
            this.menuService.add(res.menu);
            // 设置页面标题的后缀
            this.titleService.suffix = res.app.name;
        });
    }

    load(){
        this.loadI18n();
        this.loadAppData();
    }

}

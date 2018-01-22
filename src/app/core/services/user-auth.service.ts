import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthService {

  private userInfoKey: string = "userInfo";
  public session: Storage = sessionStorage;
  public local: Storage = localStorage;

  constructor() { }

  public setUserInfo(userInfo: string) {
    this.session.setItem(this.userInfoKey, userInfo);
  }

  public removeUserInfo() {
    this.session.removeItem(this.userInfoKey);
  }

  /**
   * @return {(UserInfoModel | null)} userInfo||null - 获取存储在storage中的用户信息
   */
  public getUserInfo(): UserInfoModel | null {
    try {
      let userInfo = this.session.getItem(this.userInfoKey);
      let userInfoObj = JSON.parse(userInfo);
      return !!userInfoObj ? userInfoObj : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * 判断是否处于登录状态
   */
  public isLogined() {
    return !!this.session.getItem(this.userInfoKey);
  }

  /**
   * 获取当前用户token
   * @return token - token
   */
  public getToken() {
    return !!this.getUserInfo() ? this.getUserInfo().token : null;
  }

  /**
    * 获取到登录界面路径
    * @returns {string | null}
    */
  public getLoginUrl(){
     return !!this.getUserInfo() ? this.getUserInfo().loginUrl : null;
  }

}

export interface UserInfoModel {
    token: string;
    userInfo: string;
    loginUrl: string;
}

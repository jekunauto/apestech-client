import {Injectable} from '@angular/core';
import {UserInfoModel, UserKeyType} from '../../domain/user-info-model';

@Injectable()
export class UserAuthService {

    public userKey: UserKeyType = 'currentUser';
    public storage: Storage = sessionStorage;

  constructor() { }

    /**
     * 存储用户信息
     */
    public storeUserInfo(userInfo: string) {
        this.storage.setItem(this.userKey, userInfo);
    }

    /**
     * 移除用户信息
     */
  public removeUserInfo() {
        this.storage.removeItem(this.userKey);
  }

  /**
   * @return {(UserInfoModel | null)} userInfoObj||null - 获取存储在storage中的哦用户信息
   */
  public getUserInfoObj(): UserInfoModel | null {
    try {
        const userInfo = this.storage.getItem(this.userKey);
        const userInfoObj = JSON.parse(userInfo);
      return !!userInfoObj ? userInfoObj : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * 判断是否处于登录状态
   */
  public isLogined() {
      return !!this.storage.getItem(this.userKey);
  }

  /**
   * 获取当前用户token
   * @return token - token
   */
  public getToken() {
      return !!this.getUserInfoObj() ? this.getUserInfoObj().token : null;
  }
}

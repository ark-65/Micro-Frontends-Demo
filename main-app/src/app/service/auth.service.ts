import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { byitAuthorityServer, registerServer } from './api.state';
import { LoginVo, UsernameLogin } from '../interface/login.state';

import { Md5 } from 'ts-md5/dist/md5';
import { AjaxResult } from '../interface/ajax-result.state';
import { SystemRoute } from '../interface/workspace.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // 验证码key
  private captchaKey: string;
  private pubEncrypt: string;
  // 租户
  private tenant: string;
  // token
  private token: string;
  constructor(private http: HttpClient) {
    this.captchaKey = '';
    this.pubEncrypt = '';
    this.tenant = '';
    this.token = '';
  }

  // 获取图片验证码
  getCaptcha(): Observable<any> {
    const url = `${registerServer}/register/captcha`;
    return this.http.post(url, 'Blob', {
      observe: 'response',
      responseType: 'blob',
    });
  }
  // 登录
  usernameLogin(data: UsernameLogin): Observable<AjaxResult<LoginVo>> {
    data.password = Md5.hashStr(data.password);
    const url = `${registerServer}/register/p/login`;
    return this.http.post<AjaxResult<LoginVo>>(url, data);
  }
  // 获取路由
  getUserRouter(userId: string): Observable<AjaxResult<SystemRoute[]>> {
    return this.http.get<AjaxResult<SystemRoute[]>>(
      `${byitAuthorityServer}/menu/router`
    );
  }
  // 设置验证码key
  setCaptchaKey(key: string): void {
    this.captchaKey = key;
  }
  // 获取验证码key
  getCaptchaKey(): string {
    return this.captchaKey;
  }
  // 设置token
  setToken(token: string): void {
    this.token = token;
  }
  // 获取token
  getToken(): string {
    return this.token;
  }
  setTenant(tenant: string): void {
    this.tenant = tenant;
  }

  getTenant(): string {
    return this.tenant;
  }
}

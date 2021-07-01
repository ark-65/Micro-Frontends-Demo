import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { projectConfig } from '../../assets/config/project-config';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { headerSign } from './utils/header-sign';
import { AuthService } from '../service/auth.service';

/** http 请求拦截器 */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  safetySwitch = projectConfig.safetySwitch;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // 开发环境设置网关
    // token
    const authToken = String(sessionStorage.getItem('token'));
    // 租户
    const authTenant = String(sessionStorage.getItem('tenant'));
    let authReq = req.clone({
      setHeaders: { token: authToken, tenant: authTenant },
    });
    if (!environment.production) {
      authReq = authReq.clone({ setHeaders: { serviceSuffix: 'zhangbob' } });
    }
    console.log(authReq);
    // todo 加密模块
    return next.handle(authReq);
  }
}

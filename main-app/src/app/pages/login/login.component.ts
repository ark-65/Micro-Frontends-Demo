import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LoginVo, UsernameLogin } from '../../interface/login.state';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AjaxResult } from '../../interface/ajax-result.state';
import { Router, Routes } from '@angular/router';
import { WorkspaceService } from '../../service/workspace.service';

import { customRoutes } from '../../app-routing/custom-routing';

@Component({
  selector: 'main-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  // 登录表单
  validateForm!: FormGroup;
  // 验证码图片
  imageCaptchaSrc: SafeUrl = '';
  headers = {};
  message = '';
  // 登录按钮loading
  loginLoading = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private workspaceService: WorkspaceService,
    private sanitizer: DomSanitizer,
    private msg: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      account: [null, [Validators.required]],
      password: [null, [Validators.required]],
      code: [null, [Validators.required]],
    });

    this.getCaptcha();
  }

  submitForm(value: UsernameLogin): void {
    this.loginLoading = true;
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    value.key = this.authService.getCaptchaKey();
    this.authService
      .usernameLogin(value)
      .subscribe(async (resp: AjaxResult<LoginVo>) => {
        if (resp.code === 0) {
          const { user, token } = resp.data;
          sessionStorage.setItem('user', JSON.stringify(user));
          this.authService.setToken(token.token);
          sessionStorage.setItem('token', token.token);
          this.authService.setTenant(user.tenantCode);
          sessionStorage.setItem('tenant', user.tenantCode);
          await this.getRoute(user.id);
        } else {
          this.msg.create('error', resp.msg);
          if (resp.code === -9) {
            this.getCaptcha();
          }
          this.loginLoading = false;
        }
      });
  }

  getRoute(userId: string): void {
    this.workspaceService.getUserRouter(userId).subscribe((resp) => {
      if (resp.code === 0) {
        const userRouter = resp.data;
        sessionStorage.setItem('userRouter', JSON.stringify(userRouter));
        const route = this.arrToObj(customRoutes);
        const systemUserRouter = userRouter.filter(
          (item) => item.label === '系统菜单'
        );
        const systemControlModel = this.filterRouter(
          systemUserRouter[0].children,
          route
        );
        sessionStorage.setItem(
          'systemControlModel',
          JSON.stringify(systemControlModel)
        );
        const systemMenu = this.objToArr(systemControlModel);
        sessionStorage.setItem('systemMenu', JSON.stringify(systemMenu));
        this.msg.create('success', '登录成功');
        this.router.navigate(['main/system']);
      }
      this.loginLoading = false;
    });
  }

  getCaptcha(): void {
    this.authService.getCaptcha().subscribe((resp: any) => {
      const { headers, body } = resp;
      console.log(headers.get('captcha-key'));
      this.authService.setCaptchaKey(headers.get('captcha-key'));
      this.imageCaptchaSrc = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(body)
      );
    });
  }

  arrToObj(router: Routes, parentPath: string = '/system'): object {
    const newObj = Object.create(null);
    router.forEach((item) => {
      if (item.path) {
        const path = parentPath + '/' + item.path;
        newObj[path] = { ...item };
        if (item.children) {
          delete newObj[path].children;
          newObj[path].children = this.arrToObj(item.children, path);
        }
      }
    });
    return newObj;
  }

  objToArr(router: any): any {
    const asyncRouter = [];
    for (const key of Object.keys(router)) {
      asyncRouter.push({
        ...router[key],
      });
      const index = asyncRouter.length - 1;
      if (router[key].children) {
        // @ts-ignore
        const { children } = { ...router[key] };
        asyncRouter[index].children = this.objToArr(children);
      }
    }
    return asyncRouter;
  }

  filterRouter(data: any, router: any): object {
    const resultRouter = JSON.parse(JSON.stringify(router));
    data.forEach((item: { path: string; children: any }) => {
      if (resultRouter[item.path]) {
        if (resultRouter[item.path].data.title === '用户信息') {
          resultRouter[item.path].data.use = false;
        } else {
          resultRouter[item.path].data.use = true;
        }
        resultRouter[item.path].data.pathLink = '/main' + item.path;
        if (item.children) {
          resultRouter[item.path].children = this.filterRouter(
            item.children,
            resultRouter[item.path].children
          );
        }
      }
    });
    return resultRouter;
  }
}

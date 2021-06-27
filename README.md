## 环境
 - node >= 14.15.4
 - @angular/cli >= 12
### 添加一个新的微应用 add new modle

```shell script
# 创建一个angular 应用程序, 使用--prefix 很重要,确保angular应用程序不是同一个名称
ng new main-app --routing --prefix main-app
# 选择一种层叠样式表
# ? Which stylesheet format would you like to use? Less
cd main-app

# 添加 ng-zorro 组件库
ng add ng-zorro-antd

# 是否要与Angular团队共享有关此项目的匿名使用数据谷歌的隐私政策 No
# Would you like to share anonymous usage data about this project with the Angular Team at
# Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
# details and how to change this setting, see http://angular.io/analytics. No

# 是否启用图标动态加载 Yes
# ? Enable icon dynamic loading [ Detail: https://ng.ant.design/components/icon/en ] Yes
# 是否设置自定义主题 Yes
# ? Set up custom theme file [ Detail: https://ng.ant.design/docs/customize-theme/en ] Yes
# 本地语言 中文
# ? Choose your locale code: zh_CN
# 是否直接创建组件 第一次不创建  选择blank (空白页面) 第二次可选 sidemenu 菜单页面
# ? Choose template to create project: blank

# 添加 single-spa 微前端插件
ng add single-spa-angular
# 您的应用程序是否使用Angular路由？yes
# ? Does your application use Angular routing? Yes
# 您想在哪个端口运行项目 4201 根据自己喜好
# ? What port should your project run on? 4201
# 您的应用程序是否使用浏览器动画模块？yes
# ? Does your application use BrowserAnimationsModule? Yes
```
#### 配置路由

- 在 `src/app/app-routing.module.ts` 中添加 `providers: [{ provide: APP_BASE_HREF, useValue: '/' }]`
- 在 `src/app/app-routing.module.ts` 中添加 `{ path: '**', component: EmptyRouteComponent }`

#### 运行
- <span style="color: red">首次运行会出现</span> `Cannot find module '@angular-builders/custom-webpack/package.json`
```shell script
npm i @angular-builders/custom-webpack --save
```
- <span style="color: red">ERROR in The target entry-point "single-spa-angular" has missing dependencies:</span>
   - <span style="color: red">single-spa</span>
```shell script
npm i single-spa --save
```
```shell script
npm audit fix
```
- 非首次运行直接执行
```shell script
npm run serve:single-spa:main-app
```


import { Routes } from '@angular/router';
import { WorkspaceComponent } from '../pages/workspace/workspace.component';
import { HomeComponent } from '../pages/workspace/home/home.component';
import { AuthGuard } from './auth.guard';

export const customRoutes: Routes = [
  {
    path: 'index',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { icon: 'home', level: 1, title: '首页' },
  },
  {
    path: 'project',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { icon: 'home', level: 1, title: '项目列表' },
  },
  {
    path: 'job',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { icon: 'home', level: 1, title: '定时任务' },
  },
  {
    path: 'auth',
    data: { icon: 'home', level: 1, title: '权限管理' },
    children: [
      {
        path: 'menu',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '菜单配置' },
      },
      {
        path: 'role',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '角色管理' },
      },
      {
        path: 'data',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '数据管理' },
      },
    ],
  },
  {
    path: 'userCenter',
    data: { icon: 'home', level: 1, title: '用户中心' },
    children: [
      {
        path: 'groupManage',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '组织管理' },
      },
      {
        path: 'jobsManage',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '岗位管理' },
      },
      {
        path: 'userManage',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '用户管理' },
      },
      {
        path: 'companyAttest',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '企业认证审核' },
      },
      {
        path: 'blacklist',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '黑名单管理' },
      },
    ],
  },
  {
    path: 'dataSourceManage',
    data: { icon: 'home', level: 1, title: '数据源管理' },
    children: [
      {
        path: 'DataSource',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '数据源' },
      },
      {
        path: 'UnstructuredData',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 2, title: '非结构化文档' },
      },
    ],
  },
  {
    path: 'engine',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { icon: 'home', level: 1, title: '计算引擎' },
  },
  {
    path: 'templateManage',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { icon: 'home', level: 1, title: '模板管理' },
  },
  {
    path: 'ruleManagement',
    data: { icon: 'home', level: 1, title: '规则管理' },
    children: [
      {
        path: 'GeneralRules',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 1, title: '通用规则' },
      },
      {
        path: 'CustomRule',
        canActivate: [AuthGuard],
        component: HomeComponent,
        data: { icon: 'home', level: 1, title: '自定义规则' },
      },
    ],
  },
  {
    path: 'userInformation',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { icon: 'home', level: 1, title: '用户信息' },
  },
  {
    path: 'safetyAuth',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { icon: 'home', level: 1, title: '安全认证' },
  },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
];

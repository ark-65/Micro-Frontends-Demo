import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from '../empty-route/empty-route.component';
import { AppComponent } from '../app.component';
import { customRoutes } from './custom-routing';
import { LoginComponent } from '../pages/login/login.component';
import { WorkspaceComponent } from '../pages/workspace/workspace.component';

const routes: Routes = [
  {
    path: 'main',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'system',
        component: WorkspaceComponent,
        data: {},
        children: customRoutes,
      },
      {path: '', redirectTo: 'system', pathMatch: 'full'}
    ],
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}

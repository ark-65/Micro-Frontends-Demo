import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HomeComponent } from './workspace/home/home.component';

const routes: Routes = [
  {
    path: 'main',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: '',
        component: WorkspaceComponent,
        children: [{ path: '', component: HomeComponent }],
      },
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

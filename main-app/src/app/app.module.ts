import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzComponentsModule } from './nz-components.module';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { LoginComponent } from './pages/login/login.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { HomeComponent } from './pages/workspace/home/home.component';
import { httpInterceptorProviders } from './http-interceptors';
import { AppInitializerProvider } from './service/app-initializer.service';

registerLocaleData(zh);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkspaceComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzComponentsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons },
    AppInitializerProvider,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { STLoginComponent } from './stlogin/stlogin.component';
import { STHomeComponent } from './sthome/sthome.component';
import { STListComponent } from './stlist/stlist.component';
import { STDetailComponent } from './stdetail/stdetail.component';
import { TestPipe } from './pipes/test.pipe';
import { STUserHomeComponent } from './stuser-home/stuser-home.component';
import { STOrderHomeComponent } from './storder-home/storder-home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { STLayoutComponent } from './stlayout/stlayout.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

registerLocaleData(zh);


@NgModule({
  // 申明组件内用到的视图
  declarations: [
    AppComponent,
    STLoginComponent,
    STHomeComponent,
    STListComponent,
    STDetailComponent,
    TestPipe,
    STUserHomeComponent,
    STOrderHomeComponent,
    STLayoutComponent
  ],
  //引入模块需要的类
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule
  ],
  //全局服务
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  //根组件
  bootstrap: [AppComponent]
})
export class AppModule { }

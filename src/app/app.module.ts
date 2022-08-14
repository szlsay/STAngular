import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { STLoginComponent } from './stlogin/stlogin.component';
import { STHomeComponent } from './sthome/sthome.component';
import { STListComponent } from './stlist/stlist.component';
import { STDetailComponent } from './stdetail/stdetail.component';


@NgModule({
  // 申明组件内用到的视图
  declarations: [
    AppComponent,
    STLoginComponent,
    STHomeComponent,
    STListComponent,
    STDetailComponent
  ],
  //引入模块需要的类
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //全局服务
  providers: [],
  //根组件
  bootstrap: [AppComponent]
})
export class AppModule { }

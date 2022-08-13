import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { STLoginComponent } from './stlogin/stlogin.component';
import { STHomeComponent } from './sthome/sthome.component';
import { STListComponent } from './stlist/stlist.component';
import { STDetailComponent } from './stdetail/stdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    STLoginComponent,
    STHomeComponent,
    STListComponent,
    STDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

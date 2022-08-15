import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { STDetailComponent } from './stdetail/stdetail.component';
import { STHomeComponent } from './sthome/sthome.component';
import { STLayoutComponent } from './stlayout/stlayout.component';
import { STListComponent } from './stlist/stlist.component';
import { STLoginComponent } from './stlogin/stlogin.component';
import { STOrderHomeComponent } from './storder-home/storder-home.component';
import { STUserHomeComponent } from './stuser-home/stuser-home.component';

const routes: Routes = [
  {
    path:'login',
    component:STLoginComponent
  },
  {
    path:'layout',
    component:STLayoutComponent
  },
  {
    path:'list',
    component:STListComponent
  },
  {
    path:'detail/:id',
    component:STDetailComponent
  },
  {
    path:'home',
    component: STHomeComponent,
    children: [
      {
        path:'user',
        component: STUserHomeComponent,
      },
      {
        path:'order',
        component: STOrderHomeComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

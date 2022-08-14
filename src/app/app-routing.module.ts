import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { STDetailComponent } from './stdetail/stdetail.component';
import { STHomeComponent } from './sthome/sthome.component';
import { STListComponent } from './stlist/stlist.component';
import { STOrderHomeComponent } from './storder-home/storder-home.component';
import { STUserHomeComponent } from './stuser-home/stuser-home.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

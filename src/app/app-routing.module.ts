import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './layout/about-me/about-me.component';
import { ContactComponent } from './layout/contact/contact.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  }, 
  {
    path:"aboutme",
    component:AboutMeComponent
  }, 
  {
    path:"contact",
    component:ContactComponent
  }, 
  
  // Lazy Loding for module 
  // {
  //   path:":id",
  //   loadChildren: () =>
  //   import("./layout/user-more/user-more.module").then(m => m.UserMoreModule)
  // }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

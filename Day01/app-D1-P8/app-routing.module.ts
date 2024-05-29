import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NotFoundComponent } from "./not-found.component";
import { AdminComponent } from "./admin/admin.component";
//
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component:HomeComponent},
  { path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent, children : [
    { path:':id', component:AdminComponent},
  ]},
  { path:'**', component:NotFoundComponent}
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  //login
  {
    path:'',component:LoginComponent
  },
  //register
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'products',component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

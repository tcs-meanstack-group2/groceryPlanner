import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductsComponent } from './Components/admin/admin-add-products/admin-add-products.component';
import { AdminDeleteProductsComponent } from './Components/admin/admin-delete-products/admin-delete-products.component';
import { AdminPageSignInFormComponent } from './components/admin/admin-page-sign-in-form/admin-page-sign-in-form.component';
import { AdminPageSignInComponent } from './components/admin/admin-page-sign-in/admin-page-sign-in.component';
import { AdminUpdateProductsComponent } from './Components/admin/admin-update-products/admin-update-products.component';
import { MainPageComponent } from './components/mainPage/main-page/main-page.component';
import { AdminAuthGuard } from './Guards/adminAuthGuard';

const routes: Routes = [
  {path:"\home",component:MainPageComponent},
  {path:"\admin\SignIn",component:AdminPageSignInComponent},
  {path:"\admin\SignInForm",component:AdminPageSignInFormComponent},
  {path:"\admin\DashBoard",component:AdminAddProductsComponent,canActivate:[AdminAuthGuard]},
  {path:"\admin\UpdateProducts",component:AdminUpdateProductsComponent,canActivate:[AdminAuthGuard]},
  {path:"\admin\DeleteProducts",component:AdminDeleteProductsComponent,canActivate:[AdminAuthGuard]},
  {path:"",redirectTo:"\home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

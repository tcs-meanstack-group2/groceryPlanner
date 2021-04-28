import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductsComponent } from './Components/admin/admin-add-products/admin-add-products.component';
import { AdminDeleteProductsComponent } from './Components/admin/admin-delete-products/admin-delete-products.component';
import { AdminPageSignInFormComponent } from './components/admin/admin-page-sign-in-form/admin-page-sign-in-form.component';
import { AdminPageSignInComponent } from './components/admin/admin-page-sign-in/admin-page-sign-in.component';
import { AdminUpdateProductsComponent } from './Components/admin/admin-update-products/admin-update-products.component';
import { MainPageComponent } from './components/mainPage/main-page/main-page.component';
import { AddFundsComponent } from './Components/user/add-funds/add-funds.component';
import { EditProfileComponent } from './Components/user/edit-profile/edit-profile.component';
import { RetrieveStatusComponent } from './Components/user/retrieve-status/retrieve-status.component';
import { UserLogoutComponent } from './Components/user/user-logout/user-logout.component';
import { UserPanelComponent } from './Components/user/user-panel/user-panel.component';
import { AdminAuthGuard } from './Guards/adminAuthGuard';
import { CartComponent } from './Components/user/cart/cart.component';
import { ProductListComponent } from './Components/user/product-list/product-list.component';
import { EmployeeComponent } from './Components/employee/employee.component';

const routes: Routes = [
  {path:"\home",component:MainPageComponent},
  {path:"\admin\SignIn",component:AdminPageSignInComponent},
  {path:"\admin\SignInForm",component:AdminPageSignInFormComponent},
  {path:"\admin\DashBoard",component:AdminAddProductsComponent,canActivate:[AdminAuthGuard]},
  {path:"\admin\UpdateProducts",component:AdminUpdateProductsComponent,canActivate:[AdminAuthGuard]},
  {path:"\admin\DeleteProducts",component:AdminDeleteProductsComponent,canActivate:[AdminAuthGuard]},
  {path:"\customer",component:UserPanelComponent},
  {path:"\customer\OrderStatus",component:RetrieveStatusComponent},
  {path:"\customer\EditProfile",component:EditProfileComponent},
  {path:"\customer\AddFunds",component:AddFundsComponent},
  {path:"\customer\Logout",component:UserLogoutComponent},
  { path:"\user\product-list", component: ProductListComponent },
  { path:"\user\cart", component: CartComponent },
  { path: '\admin\employees', component: EmployeeComponent },
  {path:"",redirectTo:"\home",pathMatch:"full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

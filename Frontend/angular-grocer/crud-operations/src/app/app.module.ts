import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/mainPage/main-page/main-page.component';
import { AdminPageSignInComponent } from './components/admin/admin-page-sign-in/admin-page-sign-in.component';
import { AdminPageSignInFormComponent } from './components/admin/admin-page-sign-in-form/admin-page-sign-in-form.component';
import { AdminAddProductsComponent } from './Components/admin/admin-add-products/admin-add-products.component';
import { AdminAuthGuard } from './Guards/adminAuthGuard';
import { AdminUpdateProductsComponent } from './Components/admin/admin-update-products/admin-update-products.component';
import { AdminDeleteProductsComponent } from './Components/admin/admin-delete-products/admin-delete-products.component';
import {AdminPanelComponent} from './Components/admin/admin-panel/admin-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AdminPageSignInComponent,
    AdminPageSignInFormComponent,
    AdminAddProductsComponent,
    AdminUpdateProductsComponent,
    AdminDeleteProductsComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

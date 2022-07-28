import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationTemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { ApplicationRoutingModule } from './application-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserPurchaseComponent } from './pages/user-purchase/user-purchase.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminInventoryComponent } from './pages/admin-inventory/admin-inventory.component';
import { AdminSalesComponent } from './pages/admin-sales/admin-sales.component';
import { AdminProvidersComponent } from './pages/admin-providers/admin-providers.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminPurchasesComponent } from './pages/admin-purchases/admin-purchases.component';



@NgModule({
  declarations: [
    ApplicationTemplateComponent,
    AdminHomeComponent,
    UserHomeComponent,
    UserProfileComponent,
    UserPurchaseComponent,
    AdminProductsComponent,
    AdminInventoryComponent,
    AdminSalesComponent,
    AdminProvidersComponent,
    AdminUsersComponent,
    AdminPurchasesComponent,
  ],
  imports: [
    ApplicationRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ApplicationModule { }

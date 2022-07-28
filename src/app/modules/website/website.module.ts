import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { WebsiteTemplateComponent } from './template/template.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { StoreComponent } from './pages/store/store.component';

@NgModule({
  declarations: [
    WebsiteTemplateComponent,
    HomePageComponent,
    ContactComponent,
    CartComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    StoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WebsiteRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WebsiteModule { }

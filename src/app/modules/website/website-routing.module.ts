import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./pages/cart/cart.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { StoreComponent } from "./pages/store/store.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'store',
        component: StoreComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: HomePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebsiteRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationTemplateComponent } from './modules/application/template/template.component';
import { WebsiteTemplateComponent } from './modules/website/template/template.component';

const routes: Routes = [
  {
    path: 'website',
    component: WebsiteTemplateComponent,
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule),
  },
  {
    path: 'application',
    component: ApplicationTemplateComponent,
    loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationTemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { ApplicationRoutingModule } from './application-routing.module';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    ApplicationTemplateComponent,
  ],
  imports: [
    ApplicationRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ApplicationModule { }

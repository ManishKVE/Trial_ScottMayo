import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [RecruiterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecruiterRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  
})
export class RecruiterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobItemComponent } from './job-item/job-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { JobDataService } from './job-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { SharedModule } from '../shared/shared.module';
import { JobOrCandidateListComponent } from '../shared/Components/job-or-candidate-list/job-or-candidate-list.component';



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

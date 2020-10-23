import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './Components/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobOrCandidateListComponent } from './Components/job-or-candidate-list/job-or-candidate-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TextInputComponent, JobOrCandidateListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [TextInputComponent, JobOrCandidateListComponent]
})
export class SharedModule { }

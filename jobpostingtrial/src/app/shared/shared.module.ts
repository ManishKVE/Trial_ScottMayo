import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './Components/text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JobOrCandidateListComponent } from './Components/job-or-candidate-list/job-or-candidate-list.component';


@NgModule({
  declarations: [TextInputComponent, JobOrCandidateListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [TextInputComponent,JobOrCandidateListComponent]
})
export class SharedModule { }

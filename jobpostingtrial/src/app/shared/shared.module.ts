import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './Components/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobOrCandidateListComponent } from './Components/job-or-candidate-list/job-or-candidate-list.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TextInputComponent, JobOrCandidateListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule
  ],
  exports: [TextInputComponent, JobOrCandidateListComponent]
})
export class SharedModule { }

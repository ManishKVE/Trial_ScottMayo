import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate.routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CandidateComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    SharedModule,
  ],
  
})
export class CandidateModule { }

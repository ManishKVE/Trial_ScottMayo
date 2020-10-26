import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate.component';


// const routes: Routes = [
//   {
//     path: 'job',
//     loadChildren: () =>
//       import('./recruiter.module').then((mod) => mod.RecruiterModule),
//     data: { breadcrumb: { skip: true } },
//   },
// ];
const routes: Routes = [
  { path: '', component: CandidateComponent },
 

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }

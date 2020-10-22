import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobPostComponent } from './job-post/job-post.component';
import { RecruiterComponent } from './recruiter.component';

// const routes: Routes = [
//   {
//     path: 'job',
//     loadChildren: () =>
//       import('./recruiter.module').then((mod) => mod.RecruiterModule),
//     data: { breadcrumb: { skip: true } },
//   },
// ];
const routes: Routes = [
  { path: '', component: RecruiterComponent },
 

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }

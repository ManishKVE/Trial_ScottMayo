import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { RecruiterModule } from './recruiter/recruiter.module';
import { CandidateModule } from './candidate/candidate.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/jobs', pathMatch: 'full'
  },
    {
      path: 'jobs',
      loadChildren: () =>
        import('./candidate/candidate.module').then((mod) => mod.CandidateModule),
      data: { breadcrumb: { skip: true } },
    },
    {
    path: 'candidates',
    loadChildren: () =>
      import('./recruiter/recruiter.module').then((mod) => mod.RecruiterModule),
    data: { breadcrumb: { skip: true } },
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

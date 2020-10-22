import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../job-data';
import { JobFetch } from '../job-fetch';
import { RecruiterService } from '../recruiter.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  job: JobFetch;
  jobs: Job[] = [];
  loaded = false;
  constructor(private recruiterService: RecruiterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   // this.getJob();
  }

  // getJob() {
  //   this.recruiterService.getJob(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(data => {
  //     this.job = data;
  //     this.loaded = true;
  //     console.log(this.job);
  //   });
  //}
}

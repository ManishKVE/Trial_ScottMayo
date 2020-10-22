import { Component, OnInit } from '@angular/core';
import { RecruiterService } from './recruiter.service';

import { Job } from './job-data';
import { JobFetch } from './job-fetch';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent implements OnInit {
  displayData: boolean;
  job: JobFetch;
  jobs: Job[] = [];
 

  constructor(private recruterService: RecruiterService) { }

  ngOnInit() {
    //this.getJobs();
    // this.getJob();
  }


}

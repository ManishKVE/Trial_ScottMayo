import { Component, OnInit , Input} from '@angular/core';
import { RecruiterService } from 'src/app/recruiter/recruiter.service';
import { JobFetch } from 'src/app/recruiter/job-fetch';
import { Job } from 'src/app/recruiter/job-data';
import { Candidate } from 'src/app/recruiter/candidate.data';

@Component({
  selector: 'app-job-or-candidate-list',
  templateUrl: './job-or-candidate-list.component.html',
  styleUrls: ['./job-or-candidate-list.component.scss']
})
export class JobOrCandidateListComponent implements OnInit {
  displayData: boolean;
  job: JobFetch;
  jobs: Job[] = [];
  Candidates:Candidate[] =[];
  @Input('Role') Role: string;
  constructor(private recruterService: RecruiterService) { }

  ngOnInit() {
    this.getJobs();
    this.getCandidates();
    // this.getJob();
  }

  getJobs() {
    this.recruterService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
      console.log(this.jobs);
    });
  }

  getCandidates() {
    this.recruterService.getCandidates().subscribe((data: Candidate[]) => {
      this.Candidates = data;
      debugger;
     // console.log(this.jobs);
    });
  }

  getElemStyle(status){
    debugger;
    debugger;
    var elemstyle ={
      color:status== true?'green':'red'
    };
    return elemstyle;
  }
  //fetchId = 0;

  // getJob() {
  //   this.recruterService.getJob(this.fetchId).subscribe(data => {
  //     this.job = data;
  //     this.displayData = true;
  //   });
  // }

  idtoUpdate = 0;
  updateJob() {
    // this.recruterService.getJob(this.idtoUpdate).subscribe(data => {
    //   this.job = data;
    //   this.job.model = 'Updated Model';
    //   this.recruterService.updateJob(this.job).subscribe(data1 => {
    //     this.getJobs();
    //   });
    // });
  }


}

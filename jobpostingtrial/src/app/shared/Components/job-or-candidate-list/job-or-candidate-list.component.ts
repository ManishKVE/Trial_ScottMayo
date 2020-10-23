import { Component, OnInit, Input } from '@angular/core';
import { RecruiterService } from 'src/app/recruiter/recruiter.service';
import { JobFetch } from 'src/app/recruiter/job-fetch';
import { Job } from 'src/app/recruiter/job-data';
import { Candidate } from 'src/app/recruiter/candidate.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateFetch } from 'src/app/recruiter/candidate-fetch';

declare var $: any;

@Component({
  selector: 'app-job-or-candidate-list',
  templateUrl: './job-or-candidate-list.component.html',
  styleUrls: ['./job-or-candidate-list.component.scss']
})
export class JobOrCandidateListComponent implements OnInit {
  displayData: boolean;
  job: JobFetch;
  jobs: Job[] = [];
  Candidates: Candidate[] = [];
  @Input('Role') Role: string;
  jobPostForm: FormGroup;
  detailData: JobFetch;
  selectedCandidate: CandidateFetch;
  JobId = 0;
  candidateAppliedJobs: Job[] = [];
  Title: any = ['Mr', 'Mrs', 'Miss'];
  Gender: any = ['Male', 'Female', 'Other'];
  Location: any = ['India', 'US', 'UK', 'France', 'Russia', 'Japan', 'Canada'];


  constructor(private recruterService: RecruiterService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.Role);
    this.getJobs();
    this.getCandidates();
    // this.getJob();
    this.createjobPostForm();
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

  getElemStyle(status) {
    const elemstyle = {
      color: status === true ? 'green' : 'red'
    };
    return elemstyle;
  }
  // fetchId = 0;

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
    // public Title = '', public FirstName = '', public LastName = '', public Gender = '',
    // public Email = '', public Phone = '', public DateOfBirth = '', public YearsOfExperience = '', public ReasonForJobChange = ''
  }
  createjobPostForm(): void {
    this.jobPostForm = this.fb.group({
      jobForm: this.fb.group({
        Title: ['', Validators.required],
        jobid: [this.detailData ? this.detailData.id : null, null],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        Gender: ['', Validators.required],
        Email: ['', [Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
        Phone: ['', Validators.required],
        DateOfBirth: ['', Validators.required],
        Location: ['', Validators.required],
        YearsOfExperience: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}[:.,-]?$')]],
        ReasonForJobChange: ['', Validators.required],
      }),
    });
  }

  onSubmit() {

  }
  showModal(data: JobFetch) {
    this.detailData = null;
    this.JobId = data.id;
    if (!data.jobStatus) {
      alert('job expired!');
      return false;
    } else {
      this.detailData = data;
      $('#myModal').modal('show');
      // console.log(this.detailData);
    }
  }

  sendModal(): void {
    // do something here
    this.hideModal();
  }
  hideModal(): void {
    document.getElementById('close-modal').click();
  }
  applyJob(): void {
    this.createjobPostForm();
    document.getElementById('close-modal').click();
    $('#myModalApply').modal('show');
  }
  onApply() {
    // console.log(this.jobPostForm.get('jobForm').value);
    this.recruterService.addCandidate((this.jobPostForm.get('jobForm').value)).subscribe(
      (response) => {
        alert('application sent to recruiter!');
        document.getElementById('close-modal-apply').click();
      }
    );
  }
  sendModalApply(): void {
    // do something here
    this.hideModalApply();
  }
  sendModalCandidate(): void {
    // do something here
    this.hideModalCandidate();
  }
  hideModalApply(): void {
    document.getElementById('close-modal-apply').click();
  }

  hideModalCandidate(): void {
    this.selectedCandidate = null;
    document.getElementById('close-modal-candidate').click();
  }
  showModalCandidate(data: CandidateFetch) {
    this.selectedCandidate = data;
    this.candidateAppliedJobs = this.jobs.filter(job => job.id === this.selectedCandidate.jobid);
    $('#myModalCandidate').modal('show');
  }

  changeTitle(e) {
    this.jobPostForm.get('jobForm').get('Title').setValue(e.target.value, {
      onlySelf: true
    });
  }
  changeGender(e) {
    this.jobPostForm.get('jobForm').get('Gender').setValue(e.target.value, {
      onlySelf: true
    });
  }
  changeLocation(e) {
    this.jobPostForm.get('jobForm').get('Location').setValue(e.target.value, {
      onlySelf: true
    });
  }
}

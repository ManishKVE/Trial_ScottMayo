import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { JobFetch } from '../../Data/job-fetch';
import { CandidateFetch } from '../../Data/candidate-fetch';
import { Job } from '../../Data/job-data';
import { Candidate } from '../../Data/candidate.data';
import { DataService } from '../../service/data.service';

declare var $: any;

@Component({
  selector: 'app-job-or-candidate-list',
  templateUrl: './job-or-candidate-list.component.html',
  styleUrls: ['./job-or-candidate-list.component.scss']
})
export class JobOrCandidateListComponent implements OnInit {
  displayData: boolean;
  job: JobFetch;
  jobs: any;
  Candidates: any;
  @Input('Role') Role: string;
  jobPostForm: FormGroup;
  detailData: JobFetch;
  selectedCandidate: CandidateFetch;
  JobId = 0;
  showDetailPageData: boolean;
  candidateAppliedJobs: Job[] = [];
  Title: any = ['Mr', 'Mrs', 'Miss'];
  Gender: any = ['Male', 'Female'];
  Location: any = ['India', 'US', 'UK', 'France', 'Russia', 'Japan', 'Canada'];
  @ViewChild(MatSort) sortJobs: MatSort;
  @ViewChild(MatSort) sortCandidiate: MatSort;
  displayedColumns: string[] = ['id', 'title', 'department', 'location', 'jobStatus'];
  displayedColumnsCandidiate: string[] = ['Title', 'FirstName', 'LastName', 'Gender', 'Email', 'Phone', 'DateOfBirth', 'YearsOfExperience', 'Details'];

  constructor(private dataSrv: DataService, private fb: FormBuilder, private toast: ToastrService) { }

  ngOnInit() {
    console.log(this.Role);
    this.getJobs();
    this.getCandidates();
    this.createjobPostForm();
  }

  showDetailPage(data) {
    this.showDetailPageData = true;
  }

  getJobs() {
    this.dataSrv.getJobs().subscribe((data: any) => {
      this.jobs = new MatTableDataSource<Job>();
      this.jobs.data = data;
      this.jobs.sort = this.sortJobs;
    });
  }

  getCandidates() {
    this.dataSrv.getCandidates().subscribe((data: any) => {
      this.Candidates = new MatTableDataSource<Candidate>();
      this.Candidates.data = data;
      this.Candidates.sort = this.sortCandidiate;
    });
  }

  applyFilter(filterValue: string, source: string) {
    if (source === 'jobs') {
      this.jobs.filter = filterValue.trim().toLowerCase();
    }
    else {
      this.Candidates.filter = filterValue.trim().toLowerCase();
    }
  }

  idtoUpdate = 0;

  createjobPostForm(): void {
    this.jobPostForm = this.fb.group({
      jobForm: this.fb.group({
        Title: ['', Validators.required],
        jobid: [this.detailData ? this.detailData.id : null, null],
        FirstName: ['', Validators.required],
        // Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')],
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
      // alert('job expired!');
      this.toast.error('This job has expired!', 'expired');
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
    this.dataSrv.addCandidate((this.jobPostForm.get('jobForm').value)).subscribe(
      (response) => {
        // alert('application sent to recruiter!');
        this.toast.success('application sent to recruiter!', 'success');
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
    debugger;
    this.selectedCandidate = data;
    this.candidateAppliedJobs = this.jobs.data.filter(job => job.id === this.selectedCandidate.jobid);
    $('#myModalCandidate').modal('show');
  }

  changeTitle(e) {
    var gender = e.target.value.split(':')[1].trim() === 'Mr' ? 'Male' : 'Female';
    this.jobPostForm.get('jobForm').get('Title').setValue(e.target.value, {
      onlySelf: true
    });
    this.jobPostForm.get('jobForm').get('Gender').setValue(gender, {
      onlySelf: true
    });
  }

  getTitle(row) {
    if (row.Title.includes(':')) {
      return row.Title.split(':')[1].trim();
    } else {
      return row.Title;
    }
  }

  changeGender(e) {
    debugger;
    var title = e.target.value.split(':')[1].trim() === 'Male' ? 'Mr' : 'Mrs';
    this.jobPostForm.get('jobForm').get('Title').setValue(title, {
      onlySelf: true
    });
    this.jobPostForm.get('jobForm').get('Gender').setValue(e.target.value, {
      onlySelf: true
    });
  }

  getGender(row) {
    if (row.Gender.includes(':')) {
      return row.Gender.split(':')[1].trim();
    } else {
      return row.Gender;
    }
  }

  changeLocation(e) {
    this.jobPostForm.get('jobForm').get('Location').setValue(e.target.value, {
      onlySelf: true
    });
  }
}

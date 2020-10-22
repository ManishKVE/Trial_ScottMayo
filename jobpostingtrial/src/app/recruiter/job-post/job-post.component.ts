import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {

  jobPostForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createjobPostForm();
  }
  // public id = 0, public title = '', public description = '', public department = '',
  // public jobStatus = true, public location = '', public hiringManager = ''
  createjobPostForm(): void {
    this.jobPostForm = this.fb.group({
      jobForm: this.fb.group({
        title: [null, Validators.required],
        description: [null, Validators.required],
        department: [null, Validators.required],
        location: [null, Validators.required],
        hiringManager: [null, Validators.required],
      }),
    });
  }

  onSubmit() {

  }

}

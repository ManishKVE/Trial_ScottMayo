import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOrCandidateListComponent } from './job-or-candidate-list.component';

describe('JobOrCandidateListComponent', () => {
  let component: JobOrCandidateListComponent;
  let fixture: ComponentFixture<JobOrCandidateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOrCandidateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOrCandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

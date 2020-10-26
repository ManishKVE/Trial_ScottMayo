import { Job } from './job-data';
// import { Details } from './ProductDetails';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { JobFetch } from './job-fetch';
import { Candidate } from './candidate.data';
import { CandidateFetch } from './candidate-fetch';


// public id = 0, public title = '', public description = '', public department = '',
//               public jobStatus = true, public location = '', public hiringManager = ''
export class JobDataService implements InMemoryDbService {
    createDb() {
        const jobs: Job[] = [
            {
                id: 1, title: 'Job | Angular Developer || Immediate Joining || US', description: 'recruiter considers your profile to be suitable for the following job opportunity posted on jobposting app, and would like you to apply for the job.', department: 'IT', jobStatus: true, location: 'US', hiringManager: 'Tony Stark'
            },
            {
                id: 2, title: 'Job | .Net Developer || Delhi/Chennai', description: 'recruiter considers your profile to be suitable for the following job opportunity posted on jobposting app, and would like you to apply for the job.', department: 'Web Dev', jobStatus: true, location: 'India', hiringManager: 'John Doe'
            },
            {
                id: 3, title: 'Job | Python Developer || US', description: 'recruiter considers your profile to be suitable for the following job opportunity posted on jobposting app, and would like you to apply for the job.', department: 'Data Science', jobStatus: true, location: 'US', hiringManager: 'Will Robinson'
            },
            {
                id: 4, title: 'Job | React || Delhi/Chennai', description: 'recruiter considers your profile to be suitable for the following job opportunity posted on jobposting app, and would like you to apply for the job.', department: 'Web Dev', jobStatus: false, location: 'India', hiringManager: 'Harry'
            },

        ];
        const job: JobFetch[] = [
            {
                id: 1, title: 'Job | Angular Developer || Immediate Joining || US', description: 'recruiter considers your profile to be suitable for the following job opportunity posted on jobposting app, and would like you to apply for the job.', department: 'IT', jobStatus: true, location: 'US', hiringManager: 'Tony Stark'
            },
            {
                id: 2, title: 'Job | .Net Developer || Delhi/Chennai', description: 'recruiter considers your profile to be suitable for the following job opportunity posted on jobposting app, and would like you to apply for the job.', department: 'Web Dev', jobStatus: true, location: 'India', hiringManager: 'John Doe'
            },
            {
                id: 3, title: 'Job | Python Developer || US', description: 'recruiter considers your profile to be suitable for the following job opportunity posted on jobposting app, and would like you to apply for the job.', department: 'Data Science', jobStatus: true, location: 'US', hiringManager: 'Will Robinson'
            },
            {
                id: 4, title: 'Job | React || Delhi/Chennai', description: 'recruiter considers your profile to be suitable for the following job opportunity posted on jobposting app, and would like you to apply for the job.', department: 'Web Dev', jobStatus: false, location: 'India', hiringManager: 'Harry'
            },
        ];
        const Candidates: Candidate[] = [
            {
                id: 1, jobid: 1, Title: 'Mr', FirstName: 'Will', LastName: 'Robinson',
                Gender: 'Male', Email: 'will@robinson.com', Phone: '1111111111', DateOfBirth: '2020-10-23', Location: 'US',
                YearsOfExperience: '6', ReasonForJobChange: 'Career Growth'
            },
            {
                id: 2, jobid: 2, Title: 'Mr', FirstName: 'Tony', LastName: 'Stark',
                Gender: 'Male', Email: 'tony@stark.com', Phone: '2222222222', DateOfBirth: '2020-10-23', Location: 'UK',
                YearsOfExperience: '6', ReasonForJobChange: 'Chnage Of Location'
            },
            {
                id: 3, jobid: 3, Title: 'Miss', FirstName: 'Teena', LastName: 'Robin',
                Gender: 'Female', Email: 'teena@robin.com', Phone: '11111', DateOfBirth: '2020-10-23', Location: 'India',
                YearsOfExperience: '6', ReasonForJobChange: 'Financial Reasons'
            },
            {
                id: 4, jobid: 4, Title: 'Miss', FirstName: 'Rachel', LastName: 'Robert',
                Gender: 'Female', Email: 'rachel@robert.com', Phone: '11111', DateOfBirth: '2020-10-23', Location: 'UK',
                YearsOfExperience: '6', ReasonForJobChange: 'Looking for more chalenging oppertunities'
            },
        ];
        const Candidate: CandidateFetch[] = [
            {
                id: 1, jobid: 1, Title: 'Mr', FirstName: 'Will', LastName: 'Robinson',
                Gender: 'Male', Email: 'will@robinson.com', Phone: '1111111111', DateOfBirth: '2020-10-23', Location: 'US',
                YearsOfExperience: '6', ReasonForJobChange: 'Career Growth'
            },
            {
                id: 2, jobid: 2, Title: 'Mr', FirstName: 'Tony', LastName: 'Stark',
                Gender: 'Male', Email: 'tony@stark.com', Phone: '2222222222', DateOfBirth: '2020-10-23', Location: 'UK',
                YearsOfExperience: '6', ReasonForJobChange: 'Chnage Of Location'
            },
            {
                id: 3, jobid: 3, Title: 'Miss', FirstName: 'Teena', LastName: 'Robin',
                Gender: 'Female', Email: 'teena@robin.com', Phone: '11111', DateOfBirth: '2020-10-23', Location: 'India',
                YearsOfExperience: '6', ReasonForJobChange: 'Financial Reasons'
            },
            {
                id: 4, jobid: 4, Title: 'Miss', FirstName: 'Rachel', LastName: 'Robert',
                Gender: 'Female', Email: 'rachel@robert.com', Phone: '11111', DateOfBirth: '2020-10-23', Location: 'UK',
                YearsOfExperience: '6', ReasonForJobChange: 'Looking for more chalenging oppertunities'
            },
        ];
        return { jobs, job, Candidates, Candidate };
    }
}

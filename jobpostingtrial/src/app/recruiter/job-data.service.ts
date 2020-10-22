import { Job } from './job-data';
// import { Details } from './ProductDetails';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { JobFetch } from './job-fetch';
import { Candidate } from './candidate.data';

// public id = 0, public title = '', public description = '', public department = '',
//               public jobStatus = true, public location = '', public hiringManager = ''
export class JobDataService implements InMemoryDbService {
    createDb() {
        const jobs: Job[] = [
            {
                id: 1, title: 'DotNet', description: 'v1', department: 'IT', jobStatus: true, location: 'US', hiringManager: 'Tony Stark'
            },
            {
                id: 2, title: 'Angular', description: 'v2', department: 'Web Dev', jobStatus: true, location: 'India', hiringManager: 'John Doe'
            },
            {
                id: 3, title: 'Python', description: 'v3', department: 'Data Science', jobStatus: true, location: 'US', hiringManager: 'Will Robinson'
            },
            {
                id: 4, title: 'React', description: 'v4', department: 'Web Dev', jobStatus: false, location: 'India', hiringManager: 'Harry'
            },

        ];
        const job: JobFetch[] = [
            {
                id: 1, title: 'DotNet', description: 'v1', department: 'IT', jobStatus: true, location: 'US', hiringManager: 'Tony Stark'
            },
            {
                id: 2, title: 'Angular', description: 'v2', department: 'Web Dev', jobStatus: true, location: 'India', hiringManager: 'John Doe'
            },
            {
                id: 3, title: 'Python', description: 'v3', department: 'Data Science', jobStatus: true, location: 'US', hiringManager: 'Will Robinson'
            },
            {
                id: 4, title: 'React', description: 'v4', department: 'Web Dev', jobStatus: false, location: 'India', hiringManager: 'Harry'
            },
        ];
        const Candidates: Candidate[] = [
            {
                Title: 'DotNet', FirstName: 'v1', LastName: 'Bhatt', Gender: 'male', Email: 'a@gmail.com', Phone: '11111',DateOfBirth:'12/10/1990',YearsOfExperience:'6',ReasonForJobChange:'lookingforEnhanceskills'
            },
            {
                Title: 'Angular', FirstName: 'v2', LastName: 'Bhatt', Gender: 'male', Email: 'a@gmail.com', Phone: '11111',DateOfBirth:'12/10/1990',YearsOfExperience:'6',ReasonForJobChange:'lookingforEnhanceskills'
            },
            {
                Title: 'Python', FirstName: 'v3', LastName: 'Bhatt', Gender: 'male', Email: 'a@gmail.com', Phone: '11111',DateOfBirth:'12/10/1990',YearsOfExperience:'6',ReasonForJobChange:'lookingforEnhanceskills'
            },
            {
                Title: 'React', FirstName: 'v4', LastName: 'Bhatt', Gender: 'male', Email: 'a@gmail.com', Phone: '11111',DateOfBirth:'12/10/1990',YearsOfExperience:'6',ReasonForJobChange:'lookingforEnhanceskills'
            },
        ];
        return { jobs, job,Candidates };
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
// import { UserData } from './user-data.service';
import { Job } from './job-data';
import { JobFetch } from './job-fetch';
import { ICandidate } from '../shared/models/recruiter';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  apiurl = 'api/jobs';  
candidateapiurl='api/Candidates'   
              // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }                     // Injecting HTTP service to communicate with the data

  private handleError(error: any) {
    console.error(error);                                       // Created a function to handle and log errors, in case
    return throwError(error);
  }
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiurl).pipe(
      tap(data => console.log('service get')),
      catchError(this.handleError)
    );
  }

  getCandidates(): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(this.candidateapiurl).pipe(
      tap(data => console.log('service get')),
      catchError(this.handleError)
    );
  }

  

  // addJob(user: JobFetch): Observable<JobFetch> {
  //   user.id = null;
  //   return this.http.post<JobFetch>(this.apiurl, user, this.httpOptions).pipe(
  //     tap(data => console.log(data)),
  //     catchError(this.handleError)
  //   );
  // }

  // deleteJob(id: number): Observable<JobFetch> {
  //   const url = `${this.apiurl}/${id}`;
  //   return this.http.delete<JobFetch>(url, this.httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // updateJob(user: JobFetch): Observable<JobFetch> {
  //   const url = `${this.apiurl}/${user.id}`;
  //   return this.http.put<JobFetch>(this.apiurl, user, this.httpOptions).pipe(
  //     map(() => user),
  //     catchError(this.handleError)
  //   );
  // }
}

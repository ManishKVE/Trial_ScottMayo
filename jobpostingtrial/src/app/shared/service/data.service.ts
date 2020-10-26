import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Job } from '../Data/job-data';
import { Candidate } from '../Data/candidate.data';
import { CandidateFetch } from '../Data/candidate-fetch';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiurl = 'api/jobs';
  candidateapiurl = 'api/Candidates';
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

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.candidateapiurl).pipe(
      tap(data => console.log('service get')),
      catchError(this.handleError)
    );
  }

  addCandidate(candidate: CandidateFetch): Observable<CandidateFetch> {
    return this.http.post<CandidateFetch>(this.candidateapiurl, candidate, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }


  
}

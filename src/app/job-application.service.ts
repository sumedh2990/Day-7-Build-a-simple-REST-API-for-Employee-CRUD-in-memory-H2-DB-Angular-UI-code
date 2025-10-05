import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private baseUrl = 'http://localhost:8080'; // Your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  submitApplication(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addJob`, formData);
  }
// Add job
// addJob(formData: any): Observable<any> {
//   return this.http.post(`${this.baseUrl}/addJob`, formData);
// }

// Get all jobs
getAllJobs(): Observable<any> {
  return this.http.get(`${this.baseUrl}/getJob`);
}

// Get job by ID
getJobById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/getJob/${id}`);
}

// Update job
updateJob(id: number, jobData: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/updateJob/${id}`, jobData);
}

// Delete job
deleteJob(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/deleteJob/${id}`);
}
}










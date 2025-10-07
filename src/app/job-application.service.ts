import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './models/job';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private baseUrl = 'http://localhost:8080'; // Your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  // submitApplication(formData: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/addJob`, formData);
  // }
  //  getJobs(): Observable<Job[]> {
  //   return this.http.get<Job[]>(`${this.baseUrl}/getJob`);
  // }
  // Mock data instead of real API
  getJobs(): Observable<Job[]> {
    const mockJobs: Job[] = [
      {
        id: 1,
        title: 'Frontend Developer',
        desc: 'Develop UI using Angular and integrate REST APIs.',
        minSalary: '50000',
        maxSalary: '80000',
        location: 'Mumbai'
      },
      {
        id: 2,
        title: 'Backend Developer',
        desc: 'Work on REST APIs using Spring Boot.',
        minSalary: '60000',
        maxSalary: '90000',
        location: 'Pune'
      },
      {
        id: 3,
        title: 'Full Stack Developer',
        desc: 'Develop full stack applications using Angular and Java.',
        minSalary: '70000',
        maxSalary: '100000',
        location: 'Bangalore'
      },
      {
        id: 4,
        title: 'DevOps Engineer',
        desc: 'Manage CI/CD pipelines and cloud deployment.',
        minSalary: '80000',
        maxSalary: '110000',
        location: 'Hyderabad'
      },
      {
        id: 5,
        title: 'Software Tester',
        desc: 'Perform manual and automation testing.',
        minSalary: '40000',
        maxSalary: '70000',
        location: 'Chennai'
      }
    ];

    // Return observable of mock data
    return of(mockJobs);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.baseUrl}/${id}`);
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.baseUrl}/addJob`, job);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

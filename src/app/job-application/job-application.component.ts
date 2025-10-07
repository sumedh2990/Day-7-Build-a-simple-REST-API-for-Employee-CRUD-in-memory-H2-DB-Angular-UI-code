import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobApplicationService } from '../job-application.service';
import { HttpClientModule } from '@angular/common/http';
import { Job } from '../models/job';

@Component({
  selector: 'app-job-application',
  imports: [FormsModule],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css'
})
export class JobApplicationComponent {
job: Job = {
    id: 0,
    title: '',
    desc: '',
    minSalary: '',
    maxSalary: '',
    location: '',
    company: '' // add company if required
  };

constructor(private jobService: JobApplicationService) {}


  onSubmit() {
    this.jobService.createJob(this.job).subscribe(() => {
      alert('Job added successfully!');
    });
  }
}
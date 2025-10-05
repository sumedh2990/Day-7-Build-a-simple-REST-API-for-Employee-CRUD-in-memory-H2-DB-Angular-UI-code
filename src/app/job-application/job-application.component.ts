import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobApplicationService } from '../job-application.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-job-application',
  imports: [FormsModule],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css'
})
export class JobApplicationComponent {
  formData = {
    id: 0,
    title: '',
    desc: '',
    minSalary: '',
    maxSalary: '',
    location: ''
  };

constructor(private jobService: JobApplicationService) {}

  onSubmit() {
    this.jobService.submitApplication(this.formData).subscribe({
      next: (response) => {
        console.log('Success:', response);
        alert('Application Submitted Successfully!');
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Failed to submit application.');
      }
    });
  }
}
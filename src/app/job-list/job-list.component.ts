import { Component } from '@angular/core';
import { JobApplicationService } from '../job-application.service';
import { Job } from '../models/job';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
 jobs: Job[] = [];
  paginatedJobs: Job[] = [];

  currentPage: number = 1;
  pageSize: number = 10; // show 10 records per page

  constructor(private jobService: JobApplicationService,
              private router: Router
  ) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
      this.updatePaginatedJobs();
    });
  }

  updatePaginatedJobs() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
   console.log(`\n=== Pagination Info ===`);
    console.log(`Current Page: ${this.currentPage}`);
    console.log(`Records per Page: ${this.pageSize}`);
    console.log(`Start Index: ${startIndex}`);
    console.log(`End Index: ${endIndex}`);
    console.log(`=======================`);

    this.paginatedJobs = this.jobs.slice(startIndex, endIndex);
    console.log('Jobs visible on current page:', this.paginatedJobs);
  }

  changePage(page: number) {
    console.log(`\nAttempting to change to page ${page}`);
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      console.log(`Page changed to: ${this.currentPage}`);
      this.updatePaginatedJobs();
    } else {
      console.warn(`Invalid page number: ${page}`);
    }
  }

  get totalPages(): number {
    const total = Math.ceil(this.jobs.length / this.pageSize);
    console.log(`Calculated total pages: ${total}`);
    return total;
  }

  onAddJob(): void {
    this.router.navigate(['/add-job']);
  }
}
import { Routes } from '@angular/router';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobListComponent } from './job-list/job-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list',component: JobListComponent},
  { path: 'add-job', component: JobApplicationComponent },
  { path: '**', redirectTo: 'list' } // fallback
];

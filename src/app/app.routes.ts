import { Routes } from '@angular/router';
import { JobApplicationComponent } from './job-application/job-application.component';

export const routes: Routes = [
  { path: '', redirectTo: 'apply', pathMatch: 'full' },
  { path: 'apply', component: JobApplicationComponent },
  { path: '**', redirectTo: 'apply' } // fallback
];

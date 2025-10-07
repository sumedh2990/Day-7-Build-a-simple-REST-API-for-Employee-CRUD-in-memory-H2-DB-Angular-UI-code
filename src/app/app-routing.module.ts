import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobListComponent } from './job-list/job-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component:JobListComponent },
  { path: 'add-job', component: JobApplicationComponent },
  { path: '**', redirectTo: 'list' }  // catch-all fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

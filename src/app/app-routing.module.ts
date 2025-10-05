import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationComponent } from './job-application/job-application.component';

const routes: Routes = [
  { path: '', redirectTo: 'apply', pathMatch: 'full' },
  { path: 'apply', component: JobApplicationComponent },
  { path: '**', redirectTo: 'apply' }  // catch-all fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

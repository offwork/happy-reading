import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './core/shell/shell.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'index', loadChildren: './dashboard/dashboard.module#DashboardModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

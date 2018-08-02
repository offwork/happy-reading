import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';

import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UiModule
  ],
  declarations: [ProfileComponent, DashboardComponent, IndexComponent]
})
export class DashboardModule { }

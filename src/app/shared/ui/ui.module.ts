import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModules } from '../material/material.modules';

import { PageComponent } from './components/page/page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModules
  ],
  declarations: [PageComponent],
  exports: [PageComponent]
})
export class UiModule { }

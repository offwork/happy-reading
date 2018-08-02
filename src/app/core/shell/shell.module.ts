import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModules } from '../../shared/material/material.modules';

import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModules
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class ShellModule { }

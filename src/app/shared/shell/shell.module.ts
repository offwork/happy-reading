import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModules } from '../material/material.modules';

import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModules
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class ShellModule { }

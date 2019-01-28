import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 * @description Module for sharing standalone components, pipes and directives (also 3rd party)
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }

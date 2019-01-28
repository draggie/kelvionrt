import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

/**
 * @description Module that provides core services and modules that should not be re-provided
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [],
})
export class CoreModule { }

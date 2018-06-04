import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav.component'
import {AppCommonModule}  from '../app-common/app-common.module'
@NgModule({
  imports: [
    CommonModule,AppCommonModule
  ],
  declarations: [AppNavComponent],
  exports: [AppNavComponent]
})
export class AppNavModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav.component'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppNavComponent],
  exports: [AppNavComponent]
})
export class AppNavModule { }

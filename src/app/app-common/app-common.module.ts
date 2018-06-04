import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppCommonService } from './app-common.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule,
    ReactiveFormsModule, HttpClientModule
  ],
  declarations: [],
  providers: [AppCommonService, AuthService],
  exports: [RouterModule, FormsModule, ReactiveFormsModule,
    HttpClientModule]
})
export class AppCommonModule { }

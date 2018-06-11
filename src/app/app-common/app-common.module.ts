import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppCommonService } from './app-common.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoaderService } from '../loader/loader.service';
import {
  MatDialogModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatCardModule
}
  from '@angular/material'
@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule,
    ReactiveFormsModule, HttpClientModule, MatProgressBarModule
  ],
  declarations: [],
  providers: [AppCommonService, AuthService, LoaderService],
  exports: [RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule
  ]
})
export class AppCommonModule { }

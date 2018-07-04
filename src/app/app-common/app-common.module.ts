import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCommonService } from './app-common.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoaderService } from '../loader/loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatCardModule,
  MatDialog,
  MatDatepickerModule,
  MatNativeDateModule, MatInputModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../Redux/app.reducer';
@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule,
    ReactiveFormsModule, HttpClientModule,
    MatProgressBarModule, MatDatepickerModule,
    MatNativeDateModule, MatInputModule
    // , StoreModule.provideStore({ appState: AppReducer})
  ],
  declarations: [],
  providers: [
    AppCommonService,
    AuthService,
    LoaderService
  ],
  exports: [RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
    // ,StoreModule
  ]
})
export class AppCommonModule { }

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
  MatNativeDateModule,
  MatInputModule,
  MAT_DATE_FORMATS,
  DateAdapter,
  NativeDateAdapter,
  MAT_DATE_LOCALE, MatRadioModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../Redux/app.reducer';
import { AppDateAdapter } from './app.date.adapter';
export const MY_FORMATS = {
  parse: {
      dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
  },
  display: {
      // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
      dateInput: 'input',
      // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
      monthYearLabel: 'inputMonth',
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'},
  }
};

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule,
    ReactiveFormsModule, HttpClientModule,
    MatProgressBarModule, MatDatepickerModule,
    MatNativeDateModule, MatInputModule, MatRadioModule
    // , StoreModule.provideStore({ appState: AppReducer})
  ],
  declarations: [],
  providers: [
    AppCommonService,
    AuthService,
    LoaderService,
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    // { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
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
    MatInputModule,
    MatRadioModule
    // ,StoreModule
  ]
})
export class AppCommonModule { }

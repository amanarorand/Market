import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppHomeModule } from './app-home/app-home.module';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppNavModule } from './app-nav/app-nav.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { AppCommonModule } from './app-common/app-common.module';
import { AuthInterceptor } from './auth-interceptor';
import { LoaderComponent } from './loader/loader.component';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './Redux/app.reducer';
export const AUTH_INTERCEPTOR = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, HttpModule,
    RouterModule.forRoot(routes),
    AppHomeModule, AppNavModule, AdminModule, AppCommonModule,
    StoreModule.forRoot({ appState: AppReducer})
  ],
  providers: [AUTH_INTERCEPTOR],
  bootstrap: [AppComponent],
  entryComponents: [LoaderComponent]
})
export class AppModule { }

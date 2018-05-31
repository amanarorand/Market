import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppHomeModule } from './app-home/app-home.module';
const routes: Routes = [
  { path: 'home', component: AppHomeComponent },
  { path: '', redirectTo: '/home',pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, HttpModule, RouterModule.forRoot(routes),
    AppHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

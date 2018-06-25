import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserInfo } from '../Redux/app.state';
import * as AppActions from '../Redux/app.actions';
export interface AppState {
  readonly appState: UserInfo;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private store: Store<AppState>) { }

  public IsUserAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  public Login(token: string) {
    this.store.dispatch(new AppActions.AddAppState({token: token}));
    localStorage.setItem('token', token);
    this.router.navigate(['/home']);
  }

  Logout() {
    if (localStorage.getItem('token') != null) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/login']);
  }

}

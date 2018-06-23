import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public IsUserAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  public Login(token: string) {
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

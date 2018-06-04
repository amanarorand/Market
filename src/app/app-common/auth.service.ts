import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public IsUserAuthenticated(): boolean {
    return localStorage.getItem("user") != null;
  }
}

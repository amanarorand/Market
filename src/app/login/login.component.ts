import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AppCommonService } from '../app-common/app-common.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { pathEnum } from '../app-entities/app-enum';
import {AuthService }  from '../app-common/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName: FormControl;
  password: FormControl;
  login: Login;
  constructor(private service: AppCommonService<any, string>, 
    private router: Router,private authService: AuthService) { }

  ngOnInit() {
    this.login = new Login('', '');
    this.userName = new FormControl('', Validators.required)
    this.password = new FormControl('', Validators.required)
    this.loginForm = new FormGroup({
      UserName: this.userName,
      Password: this.password
    });
  }

  public onLogin() {
    var httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
    const httpOptions = {
      headers: httpHeaders
    }
    var data = "grant_type=password" + "&username=" + this.login.UserName +
      "&password=" + this.login.Password
    this.service.post(pathEnum.login, data, httpOptions).subscribe(res => {
      this.authService.Login(res.value.access_token);
      
    });
  }
}

export class Login {
  constructor(public UserName: string, public Password: string) {

  }
}
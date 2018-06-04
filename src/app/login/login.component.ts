import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { AppCommonService } from '../app-common/app-common.service';
import { Router}  from '@angular/router';
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
  constructor(private service: AppCommonService<Login,string>,private router: Router) { }

  ngOnInit() {
    this.login = new Login('','');
    this.userName = new FormControl('',Validators.required)
    this.password = new FormControl('',Validators.required)
    this.loginForm = new FormGroup({
      UserName : this.userName,
      Password: this.password
    });
  }

  public onLogin() {
    this.service.post('',this.login).subscribe(res=>{
      this.router.navigate(['/home']);
    });
  }
}

export class Login{
  constructor(UserName: string, Password: string)
  {

  }
}
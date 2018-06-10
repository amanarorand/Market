import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators }
  from '@angular/forms';
import { AppCommonService } from '../../app-common/app-common.service';
import { User } from '../../app-entities/User';
import { pathEnum } from '../../app-entities/app-enum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  nameFrmCtrl: FormControl;
  emailFrmCtrl: FormControl;
  pwdFrmCtrl: FormControl;
  user: User;
  
  constructor(private service: AppCommonService<User, string>) {

    this.initializeUserForm();
  }

  private initializeUserForm() {
    this.user = new User('', '', '');
    this.nameFrmCtrl = new FormControl('',
      [Validators.required, Validators.maxLength(50)]
    )
    this.emailFrmCtrl = new FormControl('',
      [Validators.required, Validators.email]
    );
    this.pwdFrmCtrl = new FormControl('',
      [Validators.required, Validators.minLength(7)])
    this.userForm = new FormGroup({
      Name: this.nameFrmCtrl,
      Email: this.emailFrmCtrl,
      Pwd: this.pwdFrmCtrl
    });
  }

  ngOnInit() {
  }

  onSubmit() {
   
    this.service.post(pathEnum.createUserPath, this.user).subscribe(
      response => {       
        alert(response.value);
        this.user = new User('', '', '');
      }
    )
  }

  onClear() {
    this.user = new User('', '', '');
  }
}

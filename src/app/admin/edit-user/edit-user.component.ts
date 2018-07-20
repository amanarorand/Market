import { Component, OnInit, Inject } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../app-entities/User';
import { AppCommonService } from '../../app-common/app-common.service';
import { pathEnum } from '../../app-entities/app-enum';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  nameFrmCtrl: FormControl;
  emailFrmCtrl: FormControl;
  pwdFrmCtrl: FormControl;
  dobCtrl: FormControl;
  genderCtrl: FormControl;
  constructor(private route: ActivatedRoute,
    private appCommonService: AppCommonService<number, User>,
    private appCommonService_save: AppCommonService<User, any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.initializeUserForm();
  }

  private initializeUserForm() {
    this.user = new User('', '', '', '');
    this.nameFrmCtrl = new FormControl('',
      [Validators.required, Validators.maxLength(50)]
    );
    this.emailFrmCtrl = new FormControl('',
      [Validators.required, Validators.email]
    );
    this.pwdFrmCtrl = new FormControl('',
      [Validators.required, Validators.minLength(7)]);
    this.dobCtrl = new FormControl('', [Validators.required]);
    this.genderCtrl = new FormControl('', [Validators.required]);
    this.userForm = new FormGroup({
      Name: this.nameFrmCtrl,
      Email: this.emailFrmCtrl,
      Pwd: this.pwdFrmCtrl,
      DOB: this.dobCtrl,
      Gender: this.genderCtrl
    });
  }
  ngOnInit() {
    // for router outlet on same page(Child router outlet)
    // if (this.data === null) {
    //   this.route.paramMap.pipe(switchMap((params: Params) =>
    //     this.appCommonService.get(pathEnum.getUser + params.get('id'))
    //   )).subscribe(
    //     res => {
    //       this.user = res.value;
    //     }
    //   );
    // }
    this.appCommonService.get(pathEnum.getUser + this.data.id).subscribe(
      res => {
        this.user = res.value;
      }
    );
  }

  onSubmit() {
    this.appCommonService_save.post(pathEnum.modifyUser, this.user).subscribe(
      response => {
        // alert(response.value);
        // this.user = new User('', '', '', '');
      }
    );
  }

  onClear() {

  }
}

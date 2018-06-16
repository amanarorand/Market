import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../app-entities/User';
import { AppCommonService } from '../../app-common/app-common.service';
import { pathEnum } from '../../app-entities/app-enum';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: Observable<User>;
  constructor(private route: ActivatedRoute,
    private appCommonService: AppCommonService<number, User>) { }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: Params) =>
      this.appCommonService.get(pathEnum.getUser + params.get('id'))
    )).subscribe(
      res => {
          this.user = res.value;
      }
    );
  }

}

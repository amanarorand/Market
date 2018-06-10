import { Component, OnInit } from '@angular/core';
import { User } from '../../app-entities/User';
import { AppCommonService } from '../../app-common/app-common.service';
import { pathEnum } from '../../app-entities/app-enum'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  constructor(private appCommonService: AppCommonService<null, User[]>) { }

  ngOnInit() {
   this.appCommonService.get(pathEnum.UserList).subscribe(
     res=>{
       this.userList = res.value;
     }
   );
  }

}

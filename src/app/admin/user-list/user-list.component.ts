import { Component, OnInit } from '@angular/core';
import { User } from '../../app-entities/User';
import { AppCommonService } from '../../app-common/app-common.service';
import { pathEnum } from '../../app-entities/app-enum'
import { Observable, BehaviorSubject, } from 'rxjs';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { finalize, catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { EditUserComponent } from '../edit-user/edit-user.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns = ['Name', 'Email', 'Action'];
  userList: User[];
  dataSource: UserDataSource
  constructor(
    private appCommonService:
      AppCommonService<null, User[]>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource = new UserDataSource(this.appCommonService);
    this.dataSource.loadUser();
    this.appCommonService.get(pathEnum.UserList)
      .subscribe(
        res => {
          this.userList = res.value;
        }
      );
  }

  onEdit() {
    this.dialog.open(EditUserComponent, 
      { minWidth: '500', minHeight: '500',data:{} });
  }
}


class UserDataSource implements DataSource<User>{

  private userSubject = new BehaviorSubject<User[]>([]);
  constructor(private appCommonService: AppCommonService<null, User[]>) {

  }
  connect(collectionViewer: CollectionViewer): Observable<User[]> {
    return this.userSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.userSubject.complete();
  }

  loadUser() {
    this.appCommonService.get(pathEnum.UserList).pipe(
      finalize(
        () => { }
      )
    ).
      subscribe(
        res => {
          this.userSubject.next(res);
        }
      );
  }
}


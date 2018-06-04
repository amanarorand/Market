import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AppCommonModule } from '../app-common/app-common.module';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from '../guard/auth.guard';
const routes: Routes = [
  {
    path: 'user', component: UserComponent,canActivate: [AuthGuard]
  },
  { path: 'userlist', component: UserListComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes), AppCommonModule
  ],
  declarations: [UserComponent, UserListComponent],
  exports: [RouterModule],
  providers: [RouterLink]
})
export class AdminModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserWatchHistoryComponent } from './user-watch-history/user-watch-history.component';
import { UserAddComponent } from './user-add/user-add.component';


@NgModule({
  declarations: [UserListComponent, UserWatchHistoryComponent, UserAddComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

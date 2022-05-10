import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserWatchHistoryComponent } from './user-watch-history/user-watch-history.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'history', component: UserWatchHistoryComponent },
  { path: 'add', component: UserAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

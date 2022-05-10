import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackageAddComponent } from './package-add/package-add.component';
import { PackageListComponent } from './package-list/package-list.component';

const routes: Routes = [
  { path: '', component: PackageListComponent },
  { path: 'add', component: PackageAddComponent },
  { path: 'add/:id', component: PackageAddComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }

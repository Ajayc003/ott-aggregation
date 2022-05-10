import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageAddComponent } from './package-add/package-add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PackageListComponent, PackageAddComponent],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class PackagesModule { }

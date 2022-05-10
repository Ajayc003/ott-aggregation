import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterJsonComponent } from './master-json/master-json.component';
import { SettingsHomeComponent } from './settings-home/settings-home.component';

const routes: Routes = [
  { path: '', component: SettingsHomeComponent },
  { path: 'master', component: MasterJsonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

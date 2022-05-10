import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) 
},
{path:'login',component : LoginmoduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

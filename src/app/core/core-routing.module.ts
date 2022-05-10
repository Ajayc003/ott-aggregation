import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { LoginmoduleComponent } from '../loginmodule/loginmodule.component';

const routes: Routes = [
  
  // { path: '',redirectTo: 'ott-onboarding', pathMatch: 'full'},
  { path: 'ott-onboarding', loadChildren: () => import('src/app/ott-onboarding/ott-onboarding.module').then(m => m.OttOnboardingModule),canActivate:[AuthGuardGuard] },
  { path: 'subscribers', loadChildren: () => import('src/app/users/users.module').then(m => m.UsersModule),canActivate:[AuthGuardGuard] },
  { path: 'pack', loadChildren: () => import('src/app/packages/packages.module').then(m => m.PackagesModule),canActivate:[AuthGuardGuard] },
  { path: 'settings', loadChildren: () => import('src/app/settings/settings.module').then(m => m.SettingsModule),canActivate:[AuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoreRoutingModule { }

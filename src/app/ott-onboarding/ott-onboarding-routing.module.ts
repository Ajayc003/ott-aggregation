import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerConfigComponent } from './partner-config/partner-config.component';
import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
import { PartnerOnboardingComponent } from './partner-onboarding/partner-onboarding.component';
import { PartnerViewComponent } from './partner-view/partner-view.component';

const routes: Routes = [
  { path: '', component: PartnerDashboardComponent },
  { path: 'onboarding', component: PartnerOnboardingComponent },
  { path: 'view', component: PartnerViewComponent },
  { path: 'config', component: PartnerConfigComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OttOnboardingRoutingModule { }

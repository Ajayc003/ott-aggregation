import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OttOnboardingRoutingModule } from './ott-onboarding-routing.module';
import { PartnerOnboardingComponent } from './partner-onboarding/partner-onboarding.component';
import { PartnerConfigComponent } from './partner-config/partner-config.component';
import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
import { PartnerTileComponent } from './partner-tile/partner-tile.component';
import { PartnerViewComponent } from './partner-view/partner-view.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PartnerOnboardingComponent, PartnerConfigComponent, PartnerDashboardComponent, PartnerTileComponent, PartnerViewComponent],
  imports: [
    CommonModule,
    OttOnboardingRoutingModule,
    PdfViewerModule,
    RouterModule
  ]
})
export class OttOnboardingModule { }

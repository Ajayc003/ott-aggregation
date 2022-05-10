import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-onboarding',
  templateUrl: './partner-onboarding.component.html',
  styleUrls: ['./partner-onboarding.component.scss']
})
export class PartnerOnboardingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uploadLogo(): void {
    document.getElementById("partner__logo").click();
  }

}

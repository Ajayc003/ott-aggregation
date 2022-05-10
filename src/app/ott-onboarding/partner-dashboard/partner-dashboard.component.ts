import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.scss']
})
export class PartnerDashboardComponent implements OnInit {

  showFilters = false;
  constructor() { }

  @Input() partnerImage: string;

  ngOnInit(): void {
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  clearFilters(): void {
    let filterItems = document.querySelector(".filter__items ul") as HTMLElement;
    filterItems.innerHTML = "";
  }

}

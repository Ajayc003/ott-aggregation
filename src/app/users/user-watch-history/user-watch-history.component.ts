import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-watch-history',
  templateUrl: './user-watch-history.component.html',
  styleUrls: ['./user-watch-history.component.scss']
})
export class UserWatchHistoryComponent implements OnInit {

  showFilters = false;
  constructor() { }

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

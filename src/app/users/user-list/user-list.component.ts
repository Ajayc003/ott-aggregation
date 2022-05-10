import { Component, OnInit } from '@angular/core';
import { SubscribersServiceService } from '../subscribers-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
subscribersdata:any=[]
  showFilters = false;
  constructor(private subscriberdata:SubscribersServiceService,public http:HttpClient,public routes:Router) {

    this.subscriberdata.getsubscribersdata().subscribe(data=>{console.log(data);
    this.subscribersdata=data;
  console.log(this.subscribersdata)})}

  ngOnInit(): void {
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  clearFilters(): void {
    let filterItems = document.querySelector(".filter__items ul") as HTMLElement;
    filterItems.innerHTML = "";
  }
  tableAction(e): void {
    let el = e.target.closest('td').querySelector(".table__action") as HTMLElement;
    let currentDisplay = el.style.display;
    document.querySelectorAll<HTMLElement>(".table__action").forEach(el => el.style.display = "none");
    (currentDisplay === 'block') ? el.style.display = "none" : el.style.display = "block";
  }
}

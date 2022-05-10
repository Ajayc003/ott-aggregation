import { Component, OnInit } from '@angular/core';
import { OttonboardServiceService } from '../ottonboard-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-view',
  templateUrl: './partner-view.component.html',
  styleUrls: ['./partner-view.component.scss']
})
export class PartnerViewComponent implements OnInit {
  ottinfo:any=[]
  constructor(private packagedata:OttonboardServiceService, public http:HttpClient,public routes:Router) {
 
    this.packagedata.getpackagedata().subscribe(data=>{console.log(data);
    this.ottinfo=data;
  console.log(this.ottinfo)});
      
   }

  ngOnInit(): void {
  }

}

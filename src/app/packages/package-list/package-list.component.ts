import { Component, OnInit } from '@angular/core';
import { PackageServicesService } from '../package-services.service';
import { Observable } from 'rxjs';
import { packagemodel } from '../package.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
packagemodeldata:packagemodel
 packagesdata:any=[];
//  newpackagesdata:any={};
//  anothernewpackagesdata:any=[]
  showFilters = false;
  constructor(private packagedata:PackageServicesService,public http:HttpClient,public routes:Router) {

    this.packagedata.getpackagedata().subscribe(data=>{console.log(data);
    this.packagesdata=data;
  // for(let i=0;i<this.packagesdata.length;i++ ) {
  //   if(!(this.packagesdata[i].packageId in this.newpackagesdata)){
  //       this.newpackagesdata[this.packagesdata[i].packageId]=[]
  //       this.newpackagesdata[this.packagesdata[i].packageId].push(this.packagesdata[i].logoPath)       
  //   }
  //   else
  //     this.newpackagesdata[this.packagesdata[i].packageId].push(this.packagesdata[i].logoPath)  
  // }
  // console.log(this.newpackagesdata)
  // for(let i=0;i<this.packagesdata.length;i++ ) {
  //   if(!(this.packagesdata[i].packageId in this.anothernewpackagesdata)){
  //       this.anothernewpackagesdata[this.packagesdata[i].packageId]=this.packagesdata[i]
  //   }
  // }
  // this.anothernewpackagesdata = this.anothernewpackagesdata.filter((a) => a);
  //   console.log(this.anothernewpackagesdata)

    // for (let i in this.anothernewpackagesdata){
    //   console.log(i)
    //   for (let j in this.newpackagesdata){
    //     console.log(j)
    //   if(this.anothernewpackagesdata[i]['packageID']==j)
    //     this.anothernewpackagesdata[i]['logopath']=this.newpackagesdata[j]}
    // }
    // console.log(this.anothernewpackagesdata)
    
})
      
   }
  ngOnInit(): void {
  }
  editp(jpackageId){
    console.log(jpackageId)
    this.routes.navigateByUrl('pack/add/'+jpackageId)
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

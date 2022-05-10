import { Component, OnInit } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { PackageServicesService } from '../package-services.service';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { packagemodel } from '../package.model';
@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss']
})
export class PackageAddComponent implements OnInit {

  constructor(private packageservice:PackageServicesService,private _router: Router,
    private _activatedRoute: ActivatedRoute) { }
id:any;
editflag=false;
creadteddate:Date;
newcreateddate:string;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.id=+params.get('id');
      console.log(this.id);
      this.packageservice.packagedata.packageName='';
      this.packageservice.packagedata.calculatedPrice='';
      this.packageservice.packagedata.sellingPrice='';
    }
    )
    if(this.id){
    this.getdatabyid(this.id)
    this.editflag=true }

  }
  packagesdata:any=[]
  getdatabyid(id){
    this.packageservice.getpackagedatabyId(id).subscribe(data=>{console.log(data);
      this.packagesdata=data;
    console.log(this.packagesdata)
  this. packageservice.packagedata.packageId=this.packagesdata['packageId'] 
  this.packageservice.packagedata.packageName=this.packagesdata['packageName'];
  this.packageservice.packagedata.calculatedPrice=this.packagesdata['calculatedPrice']
  this.packageservice.packagedata.sellingPrice=this.packagesdata['sellingPrice']


      console.log(this.packageservice.packagedata.packageName

        )
}
  );

  }
  addpackagedata(formdata:NgForm){
    this.creadteddate=new Date()
    this.newcreateddate=this.creadteddate.toISOString()
    // console.log(this.newcreateddate.toISOString())
    formdata.value['createdDate']=this.newcreateddate
    console.log(formdata.value)
      this.packageservice.postpackagedata(formdata.value).subscribe((data)=>{data=formdata.value;
       console.log(data)})   
  }
  updatepackagedata(formdata:NgForm){
    console.log(formdata.value)
    this.creadteddate=new Date()
    this.newcreateddate=this.creadteddate.toISOString()
    // console.log(this.newcreateddate.toISOString())
    formdata.value['updatedDate']=this.newcreateddate
    // formdata.value['packageId']=this.id
    console.log(formdata.value)
      this.packageservice.updatepackagedata(formdata.value).subscribe((data)=>{data=formdata.value;
       console.log(data)})   
  }
}

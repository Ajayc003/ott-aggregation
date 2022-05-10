import { Injectable } from '@angular/core';
import { packagemodel } from './package.model';
import { environment } from 'src/environments/environment';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PackageServicesService {
  packagedata:packagemodel={
    packageId:'',
    packageName:'',
    calculatedPrice:'',
    sellingPrice:'',
    packageStatus:'',
    deleteFlag:'',
    createdDate:'',
    updatedDate:'',
    provId:[{
        serialNum:'',
        providerId:''
    }]
  }
  constructor(private http:HttpClient) {}
  // get(path): Observable<any> {
  //   const header = new HttpHeaders()
  //     .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZWVwIiwiZXhwIjoxNjUxNTkzODgyLCJpYXQiOjE2NTE1NTc4ODJ9.pEvK6gqbgELg6OB05dq-nwV3Pr-8uC5J_HDdpe6MVPA');
  //   const options = { headers: header, responseType: 'text' };
  //   return this.http.get(path);
  // }
  token= localStorage.getItem('token')
  
  httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json',
  //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZWVwIiwiZXhwIjoxNjUxNzYyMzI2LCJpYXQiOjE2NTE3MjYzMjZ9.sNBeFvVBFnrlyF53GiWCGEJSQyXWp9f_vOX6hO4CLHs' })
  // };
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ this.token })
  };
  getpackagedata(){
    console.log(this.httpOptions)
  
    return this.http.get(environment.apibaseurl +'packInfo',this.httpOptions)
  }
    getpackagedatabyId(id:any){
      return this.http.get(environment.apibaseurl+'providerdetails/'+id,this.httpOptions)
    }
   postpackagedata(data:any){
     return this.http.post(environment.apibaseurl+'providerdetailsSave',data,this.httpOptions)
   }
   updatepackagedata(data:any){
     console.log(data);
     return this.http.patch(environment.apibaseurl+'providerdetailsUpdate',data,this.httpOptions)
   }
}

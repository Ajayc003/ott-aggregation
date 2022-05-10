import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubscribersServiceService {

  constructor(private http:HttpClient) { }
  token= localStorage.getItem('token')
  
  httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json',
  //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZWVwIiwiZXhwIjoxNjUxNzYyMzI2LCJpYXQiOjE2NTE3MjYzMjZ9.sNBeFvVBFnrlyF53GiWCGEJSQyXWp9f_vOX6hO4CLHs' })
  // };
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ this.token })
  };
  getsubscribersdata(){

    return this.http.get(environment.apibaseurl+'subscriberdetails',this.httpOptions)
  }
  gethistorydataofsubscribers(){
    return this.http.get('',this.httpOptions)
  }
}

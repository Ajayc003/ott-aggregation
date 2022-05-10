import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OttonboardServiceService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZWVwIiwiZXhwIjoxNjUxNjc0MDc0LCJpYXQiOjE2NTE2MzgwNzR9.QHrWRWGbRg2evQcOTTXl4KOudQKYCb0A_VvqXckLIvU' })
  };
  getpackagedata(){
  
    return this.http.get('http://65.2.71.64:8080/ottdetails',this.httpOptions)
}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    return this.http.post('http://65.0.27.37:8080/authenticate',data)  
  }
  loggedin(){
    return !!localStorage.getItem('token')
  }
  gettoken(){
    return localStorage.getItem('token')
  }

}

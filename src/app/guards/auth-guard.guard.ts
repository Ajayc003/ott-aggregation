import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
// class UserToken {}
// class Permissions {
//   canActivate(user: UserToken, id: string): boolean {
//     return true;
//   }
// }
export class AuthGuardGuard implements CanActivate {
  constructor(private auth:AuthServiceService,private router:Router) {}
  canActivate():boolean{
if(this.auth.loggedin()){
  return true;
}
else{
  this.router.navigateByUrl('/login')
  return false
}
  } 
  }



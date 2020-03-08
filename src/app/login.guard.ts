import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private rout:Router, private  loginservice: LoginService){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    
    if (this.loginservice.loggedin()) {
      return true;} 
    else {
      this.rout.navigateByUrl('/login');
      return false;}
    }  
}

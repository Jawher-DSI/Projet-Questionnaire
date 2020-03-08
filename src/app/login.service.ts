import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private rout:Router){}
  
  logIn= false;
  login(utilisateur : string,	mot : string){
  
    if (utilisateur=="jawher" && mot=="jawher"){
      this.logIn= true;
      this.rout.navigate(['/questionnaireliste']);
    }
    else{
     this.rout.navigate(['/login']);
    }
  }
  
  logOut(){
      this.logIn = false;
    }
  
  loggedin(){
    return this.logIn;
    }
 
}
